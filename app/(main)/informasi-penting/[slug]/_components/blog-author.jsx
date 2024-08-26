"use client"

import React from "react";
import Link from "next/link";

const BlogAuthor = ({ post, options }) => {
  return (
    <div className="entry-meta">
      <span className="entry-author">
        by <Link href="#">{post?.author?.name}</Link>
      </span>
      <span className="meta-separator">|</span>
      <Link href="#">{new Date(post?.publishedAt).toLocaleDateString("en-US", options)}</Link>
    </div>
  );
};

export default BlogAuthor;
