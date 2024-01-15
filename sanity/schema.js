import { category } from "./schemas/blog/category";
import { post } from "./schemas/blog/post";
import { author } from "./schemas/blog/author";

import { blockContent } from "./schemas/blockContent";

export const schema = {
  types: [post, author, category, blockContent],
};
