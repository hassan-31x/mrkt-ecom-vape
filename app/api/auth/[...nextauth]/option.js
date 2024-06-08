import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
// import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';

import { sanityAdminClient } from '@/sanity/lib/client';

export const authOptions = {
  providers: [
    GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
    FacebookProvider({
        clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      }),
    // SanityCredentials(sanityAdminClient), // only if you use sign in with credentials
  ],
  session: {
    strategy: 'jwt',
  },
  secret: "mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=",
  // adapter: SanityAdapter(sanityAdminClient),
};

export default NextAuth(authOptions);