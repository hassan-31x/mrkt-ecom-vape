import { category } from "./schemas/blog/category";
import { post } from "./schemas/blog/post";
import { author } from "./schemas/blog/author";

import { product } from "./schemas/ecom/product";
import { discount } from "./schemas/ecom/discount";

import { faq } from "./schemas/misc/faq";

import { blockContent } from "./schemas/blockContent";

export const schema = {
  types: [product, discount, post, author, category, faq, blockContent],
};
