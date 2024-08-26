"use client"

import React from 'react'

import PageHeader from "@/components/features/page-header";
import Link from 'next/link';


const BlogBreadcrumb = ({ post }) => {
  return (
    <>
    <PageHeader title="Benefits" subTitle={post.title} />
      <nav className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Beranda</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/informasi-penting">Benefits</Link>
            </li>
            <li className="breadcrumb-item active">{post.slug.current}</li>
          </ol>
        </div>
      </nav>
    </>
  )
}

export default BlogBreadcrumb