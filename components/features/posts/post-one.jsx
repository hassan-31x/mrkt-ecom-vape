import Link from "next/link";
import Image from "next/image";

import OwlCarousel from "@/components/features/owl-carousel";

function PostOne(props) {
  const { post, adClass = "", isContent = true, isAuthor = true } = props;
  const openVideoModal = (e) => {
    e.preventDefault();
    props.showVideo();
  };

  let date = new Date(post.date);
  let options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC",
  };

  return (
    <article className={`entry ${adClass}`}>
      {post.image.length <= 1 ? (
        <figure
          className={`entry-media ${post.type == "video" ? "entry-video" : ""}`}
          style={{
            paddingTop: `${
              (post.image[0].height / post.image[0].width) * 100
            }%`,
          }}
        >
          {post.type !== "video" ? (
            <Link href={`/blog/single/default/${post.slug}`}>
              <div className="lazy-overlay"></div>

              <Image alt="Post" src={post?.image?.[0]?.url} fill />
            </Link>
          ) : (
            <>
              <Link href={`/blog/single/default/${post.slug}`}>
                <div className="lazy-overlay"></div>

                <Image alt="Post" src={post?.image?.[0]?.url} fill />
              </Link>
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
              <Link href={`/blog/single/default/${post.slug}`} key={index}>
                <div className="lazy-overlay"></div>

                <Image alt="Post" src={`${item.url}`} fill />
              </Link>
            ))}
          </OwlCarousel>
        </figure>
      )}
      <div className="entry-body">
        <div className="entry-meta">
          {isAuthor ? (
            <>
              <span className="entry-author">
                by{" "}
                <Link href={`/blog/single/default/${post.slug}`}>
                  {post.author}
                </Link>
              </span>
              <span className="meta-separator">|</span>
            </>
          ) : (
            ""
          )}
          <Link href={`/blog/single/default/${post.slug}`}>
            {date.toLocaleDateString("en-US", options)}
          </Link>
          <span className="meta-separator">|</span>
          <Link href={`/blog/single/default/${post.slug}`}>
            {post.comments} Comments
          </Link>
        </div>

        <h2 className="entry-title">
          <Link href={`/blog/single/default/${post.slug}`}>{post.title}</Link>
        </h2>

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
              {index < post.blog_categories.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
        {isContent ? (
          <div className="entry-content">
            <p>{post.content}</p>
            <Link
              href={`/blog/single/default/${post.slug}`}
              className="read-more"
            >
              Continue Reading
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </article>
  );
}

export default PostOne;
