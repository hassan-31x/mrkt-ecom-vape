import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { sanityAdminClient } from "@/sanity/lib/client";
// import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';

// import { sanityAdminClient } from '@/sanity/lib/client';

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//         clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET
//       }),
//     FacebookProvider({
//         clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
//         clientSecret: process.env.FACEBOOK_CLIENT_SECRET
//       }),
//     // SanityCredentials(sanityAdminClient), // only if you use sign in with credentials
//   ],
//   session: {
//     strategy: 'jwt',
//   },
//   secret: "mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=",
//   // adapter: SanityAdapter(sanityAdminClient),
// };

export const authOptions = {
  providers: [
    CredentialsProvider({
      // id: "credentials",
      // name: "Credentials",
      // credentials: {
      //   email: { label: "Email", type: "text" },
      //   password: { label: "Password", type: "password" },
      // },
      async authorize(credentials) {
        try {
          let existingUser = await sanityAdminClient.fetch(`*[_type == 'user' && email == $email][0]`, { email: credentials.identifier });
          if (!existingUser) {
            existingUser = await sanityAdminClient.fetch(`*[_type == 'business' && email == $email][0]`, { email: credentials.identifier });
          }

          if (!existingUser) {
            throw new Error("No User found with this email");
          }

          const isPasswordCorrect = await bcrypt.compare(credentials.password, existingUser.password);
          if (isPasswordCorrect) {
            return existingUser;
          } else {
            throw new Error("Password is incorrect");
          }
        } catch (err) {
          console.log(err);
          throw new Error("Failed to authenticate");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.type = token.type;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.type = user._type;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
