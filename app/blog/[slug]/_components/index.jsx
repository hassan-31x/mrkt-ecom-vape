"use client"

import { useState, useEffect } from "react";
import StickyBox from "react-sticky-box";

import PageHeader from "@/components/features/page-header";
import BlogSidebar from "@/components/partials/blog/sidebar/blog-sidebar";
import OwlCarousel from "@/components/features/owl-carousel";
import RelatedPosts from "@/components/partials/blog/related/related-posts";
import Image from "next/image";
import Link from "next/link";

function SingleBlogPageComponent(props) {
  const [toggle, setToggle] = useState(false);

  const loading = false
  const error = null

  const { post } = props;
  console.log("🚀 ~ SingleBlogPageComponent ~ post:", post)
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
      <PageHeader title="Default With Sidebar" subTitle="Single Post" />
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
            {/* <div className="col-lg-9">
              {loading ? (
                <div className="skel-single-post"></div>
              ) : (
                <>
                  <article className="entry single-entry">
                    {post.image.length <= 1 ? (
                      <figure
                        className={`entry-media ${
                          post.type == "video" ? "entry-video" : ""
                        }`}
                        style={{
                          paddingTop: `${
                            (post.image[0].height / post.image[0].width) * 100
                          }%`,
                        }}
                      >
                        {post.type !== "video" ? (
                          <Image alt="Post" src={post.image[0].url} fill />
                        ) : (
                          <>
                            <Image alt="Post" src={post.image[0].url} fill />
                            <a
                              href="https://www.youtube.com/watch?v=vBPgmASQ1A0"
                              onClick={openVideoModal}
                              className="btn-video btn-iframe"
                            >
                              <i className="icon-play"></i>
                            </a>
                          </>
                        )}
                      </figure>
                    ) : (
                      <figure
                        className="entry-media"
                        style={{
                          paddingTop: `${
                            (post.image[0].height / post.image[0].width) * 100
                          }%`,
                        }}
                      >
                        <OwlCarousel
                          adClass="owl-simple owl-light owl-nav-inside cols-1"
                          options={{
                            dots: false,
                            nav: true,
                            responsive: { 992: { nav: true } },
                          }}
                        >
                          {post.image.map((item, index) => (
                            <div key={index}>
                              <div className="lazy-overlay"></div>

                              <Image alt="Post" src={`${item.url}`} fill />
                            </div>
                          ))}
                        </OwlCarousel>
                      </figure>
                    )}

                    <div className="entry-body">
                      <div className="entry-meta">
                        <span className="entry-author">
                          by <Link href="#">{post.author}</Link>
                        </span>
                        <span className="meta-separator">|</span>
                        <Link href="#">
                          {new Date(post.date).toLocaleDateString(
                            "en-US",
                            options
                          )}
                        </Link>
                        <span className="meta-separator">|</span>
                        <Link href="#">{post.comments} Comments</Link>
                      </div>

                      <h2 className="entry-title">{post.title}</h2>

                      <div className="entry-cats">
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
                      </div>

                      <div className="entry-content editor-content">
                        <p>{post.content}</p>

                        <div className="pb-1"></div>

                        <img
                          src="images/blog/single/2.jpg"
                          alt="image"
                          className="float-sm-left"
                        />

                        <h3>Quisque volutpat mattiseros.</h3>

                        <ul>
                          <li>
                            Sed pretium, ligula sollicitudin laoreet viverra,
                            tortor libero sodales leo, eget blandit nunc tortor
                            eu nibh. Nullam mollis. Ut justo. Suspendisse
                            potenti.
                          </li>
                          <li>
                            Sed egestas, ante et vulputate volutpat, eros pede
                            semper est, vitae luctus metus libero eu augue.
                            Morbi purus libero, faucibus adipiscing, commodo
                            quis, gravida id, est.
                          </li>
                          <li>
                            Sed lectus. Praesent elementum hendrerit tortor. Sed
                            semper lorem at felis. Vestibulum volutpat, lacus a
                            ultrices sagittis, mi neque euismod dui, eu pulvinar
                            nunc sapien ornare nisl. Phasellus pede arcu,
                            dapibus eu, fermentum et, dapibus sed, urna.
                          </li>
                        </ul>

                        <div className="pb-1 clearfix"></div>

                        <p>
                          Phasellus hendrerit. Pellentesque aliquet nibh nec
                          urna. In nisi neque, aliquet vel, dapibus id, mattis
                          vel, nisi. Sed pretium, ligula &nbsp;
                          <Link href="#">sollicitudin laoreet</Link> viverra,
                          tortor libero sodales leo, eget blandit nunc tortor eu
                          nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                          Sed egestas, ante et vulputate volutpat, eros pede
                          semper est, vitae luctus metus libero eu augue. Morbi
                          purus libero, faucibus adipiscing, commodo quis,
                          gravida id, est. Sed lectus. Praesent elementum
                          hendrerit tortor. Sed semper lorem at felis.
                        </p>

                        <blockquote>
                          <p>
                            “ Sed egestas, ante et vulputate volutpat, eros pede
                            semper est, vitae luctus metus libero eu augue. ”
                          </p>
                        </blockquote>

                        <p>
                          Morbi purus libero, faucibus adipiscing, commodo quis,
                          gravida id, est. Sed lectus. Praesent elementum
                          hendrerit tortor. Sed semper lorem at felis.
                          Vestibulum volutpat, lacus a ultrices sagittis, mi
                          neque euismod dui, eu pulvinar nunc sapien ornare
                          nisl. Phasellus pede arcu, dapibus eu, fermentum et,
                          dapibus sed, urna. Morbi interdum mollis sapien. Sed
                          ac risus. Phasellus lacinia, magna a ullamcorper
                          laoreet, lectus arcu pulvinar risus, vitae facilisis
                          libero dolor a purus.
                        </p>

                        <div className="pb-1"></div>

                        <h3>Morbi interdum mollis sapien.</h3>

                        <div className="position-relative">
                          <div className="lazy-overlay"></div>

                          <Image alt="Post" src="images/blog/single/3.jpg" />
                        </div>

                        <p>
                          Sed pretium, ligula sollicitudin laoreet viverra,
                          tortor libero sodales leo, eget blandit nunc tortor eu
                          nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                          Sed egestas, ante et vulputate volutpat, eros pede
                          semper est, vitae luctus metus libero eu augue. Morbi
                          purus libero, faucibus adipiscing, commodo quis,
                          gravida id, est. Sed lectus. Praesent &nbsp;
                          <Link href="#">elementum hendrerit</Link> tortor.
                          Sed semper lorem at felis. Vestibulum volutpat, lacus
                          a ultrices sagittis, mi neque euismod dui, eu pulvinar
                          nunc sapien ornare nisl. Phasellus pede arcu, dapibus
                          eu, fermentum et, dapibus sed, urna.
                        </p>

                        <p>
                          Morbi interdum mollis sapien. Sed ac risus. Phasellus
                          lacinia, magna a ullamcorper laoreet, lectus arcu
                          pulvinar risus, vitae facilisis libero dolor a purus.
                          Sed vel lacus. Mauris nibh felis, adipiscing varius,
                          adipiscing in, lacinia vel, tellus. Suspendisse ac
                          urna. Etiam pellentesque mauris ut lectus. Nunc tellus
                          ante, mattis eget, gravida vitae, ultricies ac, leo.
                          Integer leo pede, ornare a, lacinia eu, vulputate vel,
                          nisl. Suspendisse mauris. Fusce accumsan mollis eros.
                          Pellentesque a diam sit amet mi ullamcorper vehicula.
                          Integer adipiscing risus a sem. Nullam quis massa sit
                          amet nibh viverra malesuada. Nunc sem lacus, accumsan
                          quis, faucibus non, congue vel, arcu.
                        </p>
                      </div>

                      <div className="entry-footer row no-gutters flex-column flex-md-row">
                        <div className="col-md">
                          <div className="entry-tags">
                            <span>Tags:</span>
                            <Link href="#">photography</Link>
                            <Link href="#">style</Link>
                          </div>
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

                    <div className="entry-author-details">
                      <figure className="author-media">
                        <Link href="#">
                          <img
                            src="images/blog/single/author.jpg"
                            alt="User name"
                          />
                        </Link>
                      </figure>

                      <div className="author-body">
                        <div className="author-header row no-gutters flex-column flex-md-row">
                          <div className="col">
                            <h4>
                              <Link href="#">John Doe</Link>
                            </h4>
                          </div>

                          <div className="col-auto mt-1 mt-md-0">
                            <Link href="#" className="author-link">
                              View all posts by John Doe
                              <i className="icon-long-arrow-right"></i>
                            </Link>
                          </div>
                        </div>

                        <div className="author-content">
                          <p>
                            Praesent dapibus, neque id cursus faucibus, tortor
                            neque egestas auguae, eu vulputate magna eros eu
                            erat. Aliquam erat volutpat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>

                  <nav className="pager-nav">
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
                  </nav>
                </>
              )}

              <RelatedPosts related={related} loading={loading} />

              <div className="comments">
                <h3 className="title">3 Comments</h3>

                <ul>
                  <li>
                    <div className="comment">
                      <figure className="comment-media">
                        <Link href="#">
                          <img
                            src="images/blog/comments/1.jpg"
                            alt="User name"
                          />
                        </Link>
                      </figure>

                      <div className="comment-body">
                        <Link href="#" className="comment-reply">
                          Reply
                        </Link>
                        <div className="comment-user">
                          <h4>
                            <Link href="#">Jimmy Pearson</Link>
                          </h4>
                          <span className="comment-date">
                            November 9, 2018 at 2:19 pm
                          </span>
                        </div>

                        <div className="comment-content">
                          <p>
                            Sed pretium, ligula sollicitudin laoreet viverra,
                            tortor libero sodales leo, eget blandit nunc tortor
                            eu nibh. Nullam mollis. Ut justo. Suspendisse
                            potenti.
                          </p>
                        </div>
                      </div>
                    </div>

                    <ul>
                      <li>
                        <div className="comment">
                          <figure className="comment-media">
                            <Link href="#">
                              <img
                                src="images/blog/comments/2.jpg"
                                alt="User name"
                              />
                            </Link>
                          </figure>

                          <div className="comment-body">
                            <Link href="#" className="comment-reply">
                              Reply
                            </Link>
                            <div className="comment-user">
                              <h4>
                                <Link href="#">Lena Knight</Link>
                              </h4>
                              <span className="comment-date">
                                November 9, 2018 at 2:19 pm
                              </span>
                            </div>

                            <div className="comment-content">
                              <p>Morbi interdum mollis sapien. Sed ac risus.</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <div className="comment">
                      <figure className="comment-media">
                        <Link href="#">
                          <img
                            src="images/blog/comments/3.jpg"
                            alt="User name"
                          />
                        </Link>
                      </figure>

                      <div className="comment-body">
                        <Link href="#" className="comment-reply">
                          Reply
                        </Link>
                        <div className="comment-user">
                          <h4>
                            <Link href="#">Johnathan Castillo</Link>
                          </h4>
                          <span className="comment-date">
                            November 9, 2018 at 2:19 pm
                          </span>
                        </div>

                        <div className="comment-content">
                          <p>
                            Vestibulum volutpat, lacus a ultrices sagittis, mi
                            neque euismod dui, eu pulvinar nunc sapien ornare
                            nisl. Phasellus pede arcu, dapibus eu, fermentum et,
                            dapibus sed, urna.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="reply">
                <div className="heading">
                  <h3 className="title">Leave A Reply</h3>

                  <p className="title-desc">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>

                <form action="#">
                  <label htmlFor="reply-message" className="sr-only">
                    Comment
                  </label>
                  <textarea
                    name="reply-message"
                    id="reply-message"
                    cols="30"
                    rows="4"
                    className="form-control"
                    required
                    placeholder="Comment *"
                  ></textarea>

                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="reply-name" className="sr-only">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="reply-name"
                        name="reply-name"
                        required
                        placeholder="Name *"
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="reply-email" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="reply-email"
                        name="reply-email"
                        required
                        placeholder="Email *"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-outline-primary-2">
                    <span>POST COMMENT</span>
                    <i className="icon-long-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div> */}
            <div className="col-lg-3">
              <StickyBox className="sticky-content" offsetTop={70}>
                <BlogSidebar categories={post?.categories} summary={post?.summary || ''} tags={post?.tags} toggle={toggle} popular={props?.popular} />
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
