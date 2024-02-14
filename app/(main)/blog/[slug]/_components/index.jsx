"use client";

import { useState, useEffect } from "react";
import StickyBox from "react-sticky-box";

import PageHeader from "@/components/features/page-header";
import BlogSidebar from "@/components/partials/blog/sidebar/blog-sidebar";
import RelatedPosts from "@/components/partials/blog/related/related-posts";
import Image from "next/image";
import Link from "next/link";
import urlFor from "@/sanity/lib/image";

import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/features/rich-text-component";

function SingleBlogPageComponent(props) {
  const [toggle, setToggle] = useState(false);

  const loading = false;
  const error = null;

  const { post } = props;
  const related = post?.relatedBlogs;
  const prev = post;
  const next = post;
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC",
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandle);
    resizeHandle();

    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  const openVideoModal = (e) => {
    e.preventDefault();
    props.showVideo();
  };

  function resizeHandle() {
    if (document.querySelector("body").offsetWidth < 992) setToggle(true);
    else setToggle(false);
  }

  function toggleSidebar() {
    if (
      document.querySelector("body").classList.contains("sidebar-filter-active")
    ) {
      document.querySelector("body").classList.remove("sidebar-filter-active");
    } else {
      document.querySelector("body").classList.add("sidebar-filter-active");
    }
  }

  function hideSidebar() {
    document.querySelector("body").classList.remove("sidebar-filter-active");
  }

  return (
    <div className="main">
      <PageHeader title="Benefits" subTitle={post.title} />
      <nav className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/blog">Benefits</Link>
            </li>
            <li className="breadcrumb-item active">{post.slug.current}</li>
          </ol>
        </div>
      </nav>
      <div className="page-content">
        <div className="container">
          <div className={`row skeleton-body ${!loading ? "loaded" : ""}`}>
            <div className="col-lg-9">
              {loading ? (
                <div className="skel-single-post"></div>
              ) : (
                <>
                  <article className="entry single-entry">
                    <figure
                      className={`entry-media`}
                      style={{
                        paddingTop: "100%",
                      }}
                    >
                      <Image
                        alt="Post"
                        src={urlFor(post?.mainImage)?.url()}
                        fill
                      />
                    </figure>

                    <div className="entry-body">
                      <div className="entry-meta">
                        <span className="entry-author">
                          by <Link href="#">{post?.author?.name}</Link>
                        </span>
                        <span className="meta-separator">|</span>
                        <Link href="#">
                          {new Date(post?.publishedAt).toLocaleDateString(
                            "en-US",
                            options
                          )}
                        </Link>
                      </div>

                      <h2 className="entry-title">{post.title}</h2>

                      {/* <div className="entry-cats">
                        in&nbsp;
                        {post.blog_categories.map((cat, index) => (
                          <span key={index}>
                            <Link
                              href={{
                                pathname: "/blog/classic",
                                query: { category: cat.slug },
                              }}
                            >
                              {cat.name}
                            </Link>
                            {index < post.blog_categories.length - 1
                              ? ", "
                              : ""}
                          </span>
                        ))}
                      </div> */}

                      <div className="entry-content editor-content">
                        <PortableText
                          value={post?.body}
                          components={RichTextComponents}
                        />

                        <div className="pb-1"></div>
                      </div>

                      <div className="entry-footer row no-gutters flex-column flex-md-row">
                        <div className="col-md">
                          {post?.tags?.length ? (
                            <div className="entry-tags">
                              <span>Tags:</span>
                              {post?.tags?.map((tag) => (
                                <Link href="#" key={tag}>
                                  {tag}
                                </Link>
                              ))}
                            </div>
                          ) : null}
                        </div>

                        <div className="col-md-auto mt-2 mt-md-0">
                          <div className="social-icons social-icons-color">
                            <span className="social-label">
                              Share this post:
                            </span>
                            <Link
                              href="#"
                              className="social-icon social-facebook"
                              title="Facebook"
                            >
                              <i className="icon-facebook-f"></i>
                            </Link>
                            <Link
                              href="#"
                              className="social-icon social-twitter"
                              title="Twitter"
                            >
                              <i className="icon-twitter"></i>
                            </Link>
                            <Link
                              href="#"
                              className="social-icon social-pinterest"
                              title="Pinterest"
                            >
                              <i className="icon-pinterest"></i>
                            </Link>
                            <Link
                              href="#"
                              className="social-icon social-linkedin"
                              title="Linkedin"
                            >
                              <i className="icon-linkedin"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                  </article>

                  {/* <nav className="pager-nav">
                    {prev ? (
                      <Link
                        className="pager-link pager-link-prev"
                        href={`/blog/single/default/${prev.slug}`}
                      >
                        Previous Post
                        <span className="pager-link-title">{prev.title}</span>
                      </Link>
                    ) : (
                      <Link href="#" className="pager-link">
                        <span className="page-link-title ml-4">
                          This is the first blog.
                        </span>
                      </Link>
                    )}
                    {next ? (
                      <Link
                        className="pager-link pager-link-next"
                        href={`/blog/single/default/${next.slug}`}
                      >
                        Next Post
                        <span className="pager-link-title">{next.title}</span>
                      </Link>
                    ) : (
                      <Link href="#" className="pager-link">
                        <span className="page-link-title mr-4">
                          This is the last blog.
                        </span>
                      </Link>
                    )}
                  </nav> */}
                </>
              )}

              {related?.length ? <RelatedPosts related={related} loading={loading} /> : null}
            </div>
            <div className="col-lg-3">
              <StickyBox className="sticky-content" offsetTop={70}>
                <BlogSidebar
                  categories={post?.categories}
                  summary={post?.summary || ""}
                  tags={post?.tags}
                  toggle={toggle}
                  popular={props?.popular}
                />
                {toggle ? (
                  <button
                    className="sidebar-fixed-toggler right"
                    onClick={toggleSidebar}
                  >
                    <i className="icon-cog"></i>
                  </button>
                ) : (
                  ""
                )}
                <div
                  className="sidebar-filter-overlay"
                  onClick={hideSidebar}
                ></div>
              </StickyBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlogPageComponent;
