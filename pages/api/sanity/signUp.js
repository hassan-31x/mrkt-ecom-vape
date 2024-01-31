import { client } from '@/sanity/lib/client';
import { signUpHandler } from 'next-auth-sanity';

export default signUpHandler(client);