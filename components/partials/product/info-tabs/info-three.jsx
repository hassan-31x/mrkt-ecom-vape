"use client"

import Card from "@/components/features/accordion/card";
import Accordion from "@/components/features/accordion/accordion";
import Link from "next/link";

import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/features/rich-text-component";
import { calculateDaysAgo } from "@/utils/daysAgo";
import { useState } from "react";
import { toast } from "react-toastify";
import { sanityAdminClient } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";

function InfoThree({ product }) {
  const [review, setReview] = useState({
    title: '',
    comment: '',
    name: '',
    email: '',
  })

  const router = useRouter()

  const setRating = (e) => {
    e.preventDefault();

    if (e.currentTarget.parentNode.querySelector(".active")) {
      e.currentTarget.parentNode
        .querySelector(".active")
        .classList.remove("active");
    }

    e.currentTarget.classList.add("active");
  };

  function generateUniqueKey() {
    // Generate a random string of characters
    const randomString = Math.random().toString(36).substring(2, 10);
    
    // Append a timestamp to ensure uniqueness
    const timestamp = Date.now();
  
    // Combine the random string and timestamp to create a unique key
    const uniqueKey = `${randomString}_${timestamp}`;
  
    return uniqueKey;
  }
  
  const addReview = async () => {
    try {

    const stars = document.querySelectorAll('.star.active')?.[0]?.classList?.[0] * 1

    if (!stars) {
      toast.error('Please select a rating')
      return
    }

    const tempReview = {
      _key: generateUniqueKey(),
      stars,
      title: review.title,
      description: review.comment,
      name: review.name,
      createdAt: new Date()
    }
    const updatedProduct = {
      _type: 'product',
      ...product,
      reviews: [...product.reviews, tempReview],
      relatedProducts: product?.relatedProducts?.map((prod) => ({
        ...prod,
        _type: 'product',
        _key: prod._id,
      })),
    };

    const res = await sanityAdminClient.createOrReplace(updatedProduct);
    console.log("🚀 ~ addReview ~ res:", res)

    toast.success('Review added!')
    setReview({
      title: '',
      comment: '',
      name: '',
      email: '',
    })
    router.refresh()
  }
  catch (err) {
    console.log("🚀 ~ addReview ~ err:", err)
    toast.error(err)
  }
  }

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
      <Card title={`Reviews (${product?.reviews?.length || 0})`} adClass="card-box card-sm">
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

        <div className="reply">
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
                  className={`${num} star star-${num}`}
                  href="#"
                  onClick={setRating}
                  key={"star-" + index}
                >
                  {num}
                </a>
              ))}
            </span>

          </div>
          <form>
          <div className="">
                <input
                  type="text"
                  className="form-control"
                  id="reply-title"
                  name="reply-title"
                  placeholder="Title *"
                  required
                  value={review.title}
                  onChange={(e) => setReview({...review, title: e.target.value})}
                />
              </div>
            <textarea
              id="reply-message"
              cols="30"
              rows="6"
              className="form-control mb-2"
              placeholder="Comment *"
              required
              value={review.comment}
              onChange={(e) => setReview({...review, comment: e.target.value})}
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
                  value={review.name}
                  onChange={(e) => setReview({...review, name: e.target.value})}
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
                  value={review.email}
                  onChange={(e) => setReview({...review, email: e.target.value})}
                />
              </div>
            </div>
            {/* <div className="form-checkbox mb-2">
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
            </div> */}
            <button onClick={addReview} type="button" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </Card>
    </Accordion>
  );
}

export default InfoThree;
