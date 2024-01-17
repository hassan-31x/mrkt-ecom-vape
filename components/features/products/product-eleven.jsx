import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { isInWishlist, isInCompare } from "@/utils";
import Link from "next/link";
import Image from "next/image";
import urlFor from "@/sanity/lib/image";

function ProductEleven({ product, wishlist }) {
  const router = useRouter();

  function onCartClick(e) {
    e.preventDefault();
    props.addToCart(product);
  }

  function onWishlistClick(e) {
    e.preventDefault();
    if (!isInWishlist(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router.push("/pages/wishlist");
    }
  }

  function onCompareClick(e) {
    e.preventDefault();
    if (!isInCompare(props.comparelist, product)) {
      props.addToCompare(product);
    }
  }

  function onQuickView(e) {
    e.preventDefault();
    props.showQuickView(product.slug.current);
  }

  return (
    <div className="product product-7 text-center w-100">
      <figure className="product-media">
        {product?.hot ? (
          <span className="product-label label-new">Hot</span>
        ) : (
          ""
        )}

        {product?.sale_price ? (
          <span className="product-label label-sale">Sale</span>
        ) : (
          ""
        )}

        {product?.featured ? (
          <span className="product-label label-top">Feat</span>
        ) : (
          ""
        )}

        {!product?.stock || product?.stock == 0 ? (
          <span className="product-label label-out">Out of Stock</span>
        ) : (
          ""
        )}

        <Link href={`/product/${product.slug.current}`}>
          <Image
            alt="product"
            src={urlFor(product.pictures?.[0])?.url()}
            fill
            className="product-image"
          />
          {product?.pictures?.length >= 2 ? (
            <Image
              alt="product"
              src={urlFor(product.pictures?.[1])?.url()}
              fill
              className="product-image-hover"
            />
          ) : (
            ""
          )}
        </Link>

        {product?.stock > 0 ? (
          <div className="product-action-vertical">
            {isInWishlist(wishlist, product) ? (
              <Link
                href="/wishlist"
                className="btn-product-icon btn-wishlist btn-expandable added-to-wishlist"
              >
                <span>go to wishlist</span>
              </Link>
            ) : (
              <a
                href="#"
                className="btn-product-icon btn-wishlist btn-expandable"
                onClick={onWishlistClick}
              >
                <span>add to wishlist</span>
              </a>
            )}
            <a
              href="#"
              className="btn-product-icon btn-quickview"
              title="Quick View"
              onClick={onQuickView}
            >
              <span>quick view</span>
            </a>
            <a
              href="#"
              className="btn-product-icon btn-compare"
              onClick={onCompareClick}
            >
              <span>compare</span>
            </a>
          </div>
        ) : (
          <div className="product-action-vertical">
            {isInWishlist(wishlist, product) ? (
              <Link
                href="/wishlist"
                className="btn-product-icon btn-wishlist btn-expandable added-to-wishlist"
              >
                <span>go to wishlist</span>
              </Link>
            ) : (
              <a
                href="#"
                className="btn-product-icon btn-wishlist btn-expandable"
                onClick={onWishlistClick}
              >
                <span>add to wishlist</span>
              </a>
            )}
            <a
              href="#"
              className="btn-product-icon btn-quickview"
              title="Quick View"
              onClick={onQuickView}
            >
              <span>quick view</span>
            </a>
          </div>
        )}

        {product?.stock && product?.stock !== 0 ? (
          <div className="product-action">
            {product?.nicotinePercentage?.length > 0 ? (
              <Link
                href={`/product/${product.slug.current}`}
                className="btn-product btn-cart btn-select"
              >
                <span>select options</span>
              </Link>
            ) : (
              <button className="btn-product btn-cart" onClick={onCartClick}>
                <span>add to cart</span>
              </button>
            )}
          </div>
        ) : (
          ""
        )}
      </figure>

      {/* <div className="product-body">
        <div className="product-cat">
          {product?.category?.map((item, index) => (
            <React.Fragment key={item.slug + "-" + index}>
              <Link
                href={{
                  pathname: "/shop/sidebar/list",
                  query: { category: item.slug },
                }}
              >
                {item.name}
              </Link>
              {index < product?.category?.length - 1 ? ", " : ""}
            </React.Fragment>
          ))}
        </div> */}

        <h3 className="product-title">
          <Link href={`/product/${product.slug.current}`}>{product.name}</Link>
        </h3>

        {product?.stock < 1 ? (
          <div className="product-price">
            <span className="out-price">${product?.sale_price?.toFixed(2) || product.price.toFixed(2)}</span>
          </div>
        ) : product?.sale_price ? (
          <div className="product-price">
            <span className="old-price">${product.sale_price.toFixed(2)}</span>
            <span className="new-price">${product.price.toFixed(2)}</span>
          </div>
        ) : (
          <div className="product-price">
            <span className="out-price">${product.price?.toFixed(2)}</span>
          </div>
        )}

        <div className="ratings-container">
          <div className="ratings">
            <div
              className="ratings-val"
              style={{ width: product?.ratings * 20 + "%" }}
            ></div>
            <span className="tooltip-text">{product?.ratings.toFixed(2)}</span>
          </div>
          {product?.reviews?.length && <span className="ratings-text">( {product?.reviews?.length} Reviews )</span>}
        </div>

        {/* {product?.nicotinePercentage?.length > 0 ? (
          <div className="product-nav product-nav-dots">
            <div className="row no-gutters">
              {product?.variants?.map((item, index) => (
                <Link
                  href="#"
                  style={{ backgroundColor: item.color }}
                  key={index}
                >
                  <span className="sr-only">Color Name</span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          ""
        )} */}
    </div>
  );
}

export default ProductEleven;
