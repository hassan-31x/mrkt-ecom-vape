import Card from "@/components/features/accordion/card";
import Accordion from "@/components/features/accordion/accordion";
import Link from "next/link";

import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/features/rich-text-component";
import { calculateDaysAgo } from "@/utils/daysAgo.js";

function InfoThree({ product }) {
  console.log("🚀 ~ InfoThree ~ product:", product)
  const setRating = (e) => {
    e.preventDefault();

    if (e.currentTarget.parentNode.querySelector(".active")) {
      e.currentTarget.parentNode
        .querySelector(".active")
        .classList.remove("active");
    }

    e.currentTarget.classList.add("active");
  };

  if (!product) {
    return <div></div>;
  }

  return (
    <Accordion adClass="accordion-plus product-details-accordion pb-2 mb-0">
      {product?.description && <Card title="Description" adClass="card-box card-sm">
        <div className="product-desc-content">
          <PortableText
            value={product?.description}
            components={RichTextComponents}
          />
        </div>
      </Card>}
      {product?.additionalInfo && <Card title="Additional information" adClass="card-box card-sm">
        <div className="product-desc-content">
          <PortableText
            value={product?.additionalInfo}
            components={RichTextComponents}
          />
        </div>
      </Card>}
      {product?.shippingDetails && <Card
        title="Shipping & Returns"
        expanded={true}
        adClass="card-box card-sm"
      >
        <div className="product-desc-content">
          <PortableText
            value={product?.shippingDetails}
            components={RichTextComponents}
          />
        </div>
      </Card>}
      <Card title={`Reviews (${product?.reviews?.length})`} adClass="card-box card-sm">
        <div className="reviews">
          {product?.reviews?.map((review, index) => (

          <div className={`review ${index === product?.reviews?.length-1 ? 'border-0' : ''}`}>
            <div className="row no-gutters">
              <div className="col-auto">
                <h4>
                  <Link href="#">{review?.name}</Link>
                </h4>
                <div className="ratings-container">
                  <div className="ratings">
                    <div
                      className="ratings-val"
                      style={{ width: review?.stars * 20 + "%" }}
                    ></div>
                    <span className="tooltip-text">
                      {product?.stars?.toFixed(2)}
                    </span>
                  </div>
                </div>
                <span className="review-date mb-1">
                {/* {new Date(review?.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })} */}
                  {calculateDaysAgo(review?.createdAt)}
                </span>
              </div>
              <div className="col">
                <h4>{review.title}</h4>

                <div className="review-content">
                  <p>{review.description}</p>
                </div>

                {/* <div className="review-action">
                  <Link href="#">
                    <i className="icon-thumbs-up"></i>Helpful (2)
                  </Link>
                  <Link href="#">
                    <i className="icon-thumbs-down"></i>Unhelpful (0)
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          ))}

        </div>

        {/* <div className="reply">
          <div className="title-wrapper text-left">
            <h3 className="title title-simple text-left text-normal">
              Add a Review
            </h3>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <div className="rating-form">
            <label htmlFor="rating" className="text-dark">
              Your rating *{" "}
            </label>
            <span className="rating-stars selected">
              {[1, 2, 3, 4, 5].map((num, index) => (
                <a
                  className={`star-${num}`}
                  href="#"
                  onClick={setRating}
                  key={"star-" + index}
                >
                  {num}
                </a>
              ))}
            </span>

            <select
              name="rating"
              id="rating"
              required=""
              style={{ display: "none" }}
            >
              <option value="">Rate…</option>
              <option value="5">Perfect</option>
              <option value="4">Good</option>
              <option value="3">Average</option>
              <option value="2">Not that bad</option>
              <option value="1">Very poor</option>
            </select>
          </div>
          <form action="#">
            <textarea
              id="reply-message"
              cols="30"
              rows="6"
              className="form-control mb-2"
              placeholder="Comment *"
              required
            ></textarea>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="reply-name"
                  name="reply-name"
                  placeholder="Name *"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  id="reply-email"
                  name="reply-email"
                  placeholder="Email *"
                  required
                />
              </div>
            </div>
            <div className="form-checkbox mb-2">
              <input
                type="checkbox"
                className="custom-checkbox"
                id="signin-remember"
                name="signin-remember"
              />
              <label
                className="form-control-label ml-3"
                htmlFor="signin-remember"
              >
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div> */}
      </Card>
    </Accordion>
  );
}

export default InfoThree;
