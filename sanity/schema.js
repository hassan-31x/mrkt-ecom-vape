import { category } from "./schemas/blog/category";
import { post } from "./schemas/blog/post";
import { author } from "./schemas/blog/author";

import { product } from "./schemas/ecom/product";
import { discount } from "./schemas/ecom/discount";

import { faq } from "./schemas/misc/faq";
import { home } from "./schemas/misc/home";
import { about } from "./schemas/misc/about";
import { privacyPolicy } from "./schemas/misc/privacy-policy";
import { termsCondition } from "./schemas/misc/terms-condition";

import { blockContent } from "./schemas/blockContent";

import { user } from "./schemas/auth/user";
import { account } from "./schemas/auth/account";
import { verificationToken } from "./schemas/auth/verification-token";
import { referral } from "./schemas/auth/referral";
// import { user, account, verificationToken } from 'next-auth-sanity/schemas';


export const schema = {
  types: [product, post, author, category, home, about, faq, termsCondition, privacyPolicy, blockContent, user, referral, account, verificationToken],
};
