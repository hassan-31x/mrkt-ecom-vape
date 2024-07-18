import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { sanityAdminClient } from "@/sanity/lib/client";
import { SanityAdapter } from 'next-auth-sanity';

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const existingUser = await sanityAdminClient.fetch(`*[_type == 'user' && email == $email][0]`, { email: credentials.identifier });
          
          if (!existingUser) {
            throw new Error(`No ${credentials.type} account found with this email`);
          }

          // checking user type
          if (credentials.type === 'user' && existingUser.accountType === 'business') {
            throw new Error("No user account found with this email");
          }


          if (credentials.type === 'business' && existingUser.accountType === 'user') {
            throw new Error("No business account found with this email");
          }

          if (existingUser.accountType === 'business' && !existingUser.approved) {
            throw new Error("Your account is not approved yet");
          }
          
          // checking password
          const isPasswordCorrect = await bcrypt.compare(credentials.password, existingUser.password);
          if (isPasswordCorrect) {

            if (existingUser.accountType === 'business' && !existingUser.approved) {
              throw new Error("Account not approved yet");
            }

            return existingUser;
          } else {
            throw new Error("Password is incorrect");
          }
        } catch (err) {
          console.log(err);
          throw new Error(err || "Failed to authenticate");
        }
      },
    }),

    
    GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
  ],
  
  adapter: SanityAdapter(sanityAdminClient),
  events: {
    async linkAccount({ user }) {
      console.log('linkAccount => ', user)
      // TODO: change account type to business and explore other events
    }
  },
  callbacks: {
    async session({ session, token }) {
      console.log("🚀 ~ session ~ session:", session, token)
      if (token) {

        session.user.id = token.id;
        session.user.type = token.type;
        session.user.email = token.email;

        if (token.accountType === 'user') {
          session.user.name = token.name;
          session.user.whatsapp = token.whatsapp;
          session.user.balance = token.balance;
        } else {
          session.user.approved = token.approved;
          session.user.storeType = token.storeType;
          session.user.businessUrl = token.businessUrl;
          session.user.toko = token.toko;
          session.user.createdAt = token.createdAt;
          session.user.businessName = token.businessName;
          session.user.businessType = token.businessType;
          session.user.whatsapp = token.whatsapp;
          session.user.businessAddress = token.businessAddress;
          session.user.onlineShops = token.onlineShops;
        }
      }
      return session;
    },
    async jwt({ token, user }) {
      console.log("🚀 ~ jwt ~ user:", user)
      if (user) {

          token.id = user._id;
          token.type = user.accountType;
          token.email = user?.email;

          if (user.accountType === 'user') {
            token.name = user?.name;
            token.whatsapp = user?.whatsapp;
            token.balance = user?.balance;
          } else {
            token.approved = user?.approved;
            token.storeType = user?.storeType;
            token.businessUrl = user?.businessUrl;
            token.toko = user?.toko;
            token.createdAt = user?.createdAt;
            token.businessName = user?.businessName;
            token.businessType = user?.businessType;
            token.whatsapp = user?.whatsapp;
            token.businessAddress = user?.businessAddress;
            token.onlineShops = user?.onlineShops;
          }
        } else {
          // TODO: for credentials login, make db call
          token.test = 'test'
      }
      return token;
    },
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("🚀 ~ signIn ~ user:", user, account, profile, email, credentials)
      // if (account.type === 'credentials') {
      //   return true
      // }

      // TODO: prevent business from signing in if account is not approved
      return true
    }
  },
  pages: {
    signIn: "/auth/masuk",
  },
  session: {
    strategy: 'jwt',
  },
  secret: "mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=",
  adapter: SanityAdapter(sanityAdminClient),
};

export default NextAuth(authOptions);