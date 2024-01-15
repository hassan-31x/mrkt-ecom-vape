"use client";

import { useEffect, useRef } from "react";
import imagesLoaded from "imagesloaded";

import PageHeader from "@/components/features/page-header";
import PostOne from "@/components/features/posts/post-one";

import data from "@/data/blog-page.json";
import Link from "next/link";

function BlogPageComponent() {
  const loading = false;
  const error = null;
  const ref = useRef();
  const posts = data && data.blog;
  let iso;

  useEffect(() => {
    if (posts && posts.length > 0) {
      imagesLoaded(".page-content").on("done", async function () {
        const Isotope = (await import("isotope-layout")).default;
        iso = new Isotope(ref.current, {
          itemSelector: ".grid-item",
        });
      });
    }
  }, [posts]);

  function getPostCategory(post) {
    return post.blog_categories.reduce((acc, cur) => {
      return acc + " " + cur.slug;
    }, "");
  }

  function isoFilter(e, cat) {
    e.preventDefault();
    e.currentTarget
      .closest(".menu-cat")
      .querySelector(".active")
      .classList.remove("active");
    e.currentTarget.parentElement.classList.add("active");
    iso.arrange({
      filter: function (index, itemElem) {
        if (cat == "") return true;
        return itemElem.classList.contains(cat);
      },
    });
  }

  if (error) {
    return <div></div>;
  }

  return (
    <div className="main">
      <PageHeader title="Blog Masonry 2 Columns" subTitle="Blog" />
      <nav className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/blog/classic">Blog</Link>
            </li>
            <li className="breadcrumb-item active">Masonry 2 Columns</li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className={`container skeleton-body ${loading ? "" : "loaded"}`}>
          {loading || !posts ? (
            <div className="row">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className="col-sm-6" key={item}>
                  <div className="skel-grid-post"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <nav className="blog-nav">
                <ul className="menu-cat entry-filter justify-content-center">
                  <li className="active">
                    <a href="#" onClick={(e) => isoFilter(e, "")}>
                      All Blog Posts
                      <span>6</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => isoFilter(e, "lifestyle")}>
                      Lifestyle
                      <span>3</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => isoFilter(e, "shopping")}>
                      Shopping
                      <span>1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => isoFilter(e, "travel")}>
                      Travel
                      <span>2</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => isoFilter(e, "hobbies")}>
                      Hobbies
                      <span>2</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => isoFilter(e, "fashion")}>
                      Fashion
                      <span>1</span>
                    </a>
                  </li>
                </ul>
              </nav>
              {posts.length == 0 ? (
                <div className="row">
                  <p className="blogs-info">
                    No posts were found matching your selection.
                  </p>
                </div>
              ) : (
                <div className="row" ref={ref}>
                  {posts.map((post, index) => (
                    <div
                      className={`col-sm-6 grid-item${getPostCategory(post)}`}
                      key={index}
                    >
                      <PostOne post={post} adClass="text-center" />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogPageComponent;
