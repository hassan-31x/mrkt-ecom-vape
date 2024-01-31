import NextAuth from 'next-auth';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import { sanityAdminClient } from '@/sanity/lib/client';
import GitHub from 'next-auth/providers/github';

export const options = {
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
          }),
        SanityCredentials(sanityAdminClient)
      ],
      session: {
        strategy: 'jwt'
      },
      secret: 'any-secret-word',
      adapter: SanityAdapter(sanityAdminClient)
}

export default NextAuth(options);