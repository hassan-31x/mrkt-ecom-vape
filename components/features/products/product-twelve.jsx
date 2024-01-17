'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { isInWishlist, isInCompare } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import urlFor from "@/sanity/lib/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";


function ProductTwelve(props) {
  const router = useRouter();
  const dispatch = useDispatch()

  const { wishlist } = props;
  const { product } = props

  function onCartClick(e) {
    e.preventDefault();

    dispatch(addToCart(product))
  }

  function onWishlistClick(e) {
    e.preventDefault();
    if (!isInWishlist(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router?.push("/pages/wishlist");
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
    props.showQuickView(product?.slug);
  }

  return (
    <div className="product product-4 text-center">
      <figure className="product-media">
        {product?.hot ? (
          <span className="product-label label-circle label-new">Hot</span>
        ) : (
          ""
        )}

        {product?.sale_price ? (
          <span className="product-label label-circle label-sale">Sale</span>
        ) : (
          ""
        )}

        {product?.featured ? (
          <span className="product-label label-circle label-top">Feat</span>
        ) : (
          ""
        )}

        {!product?.stock || product?.stock == 0 ? (
          <span className="product-label label-circle label-out">
            Out of Stock
          </span>
        ) : (
          ""
        )}

        <Link href={`/product/${product.slug.current}`}>
          <Image
            alt="product"
            src={urlFor(product?.pictures?.[0])?.url()}
            fill
            className="product-image"
          />
          {product?.pictures?.length >= 2 ? (
            <Image
              alt="product"
              src={urlFor(product?.pictures[1])?.url()}
              fill
              className="product-image-hover"
            />
          ) : (
            ""
          )}
        </Link>

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
        </div>

        {product?.stock && product?.stock !== 0 ? (
          <div className="product-action">
            {product?.nicotinePercentage?.length > 0 ? (
              <Link
                href={`/product/${product.slug.current}`}
                className="btn-product btn-cart btn-select"
              >
                <span className="border-bottom-0">SELECT OPTIONS</span>
              </Link>
            ) : (
              <button className="btn-product btn-cart" onClick={onCartClick}>
                <span className="border-bottom-0">ADD TO CART</span>
              </button>
            )}
          </div>
        ) : (
          ""
        )}
      </figure>

      <div className="product-body">
        <div className="ratings-container">
          <div className="ratings">
            <div
              className="ratings-val"
              style={{ width: product?.ratings * 20 + "%" }}
            ></div>
            <span className="tooltip-text">{product?.ratings?.toFixed(2)}</span>
          </div>
        </div>

        <h3 className="product-title">
          <Link href={`/product/${product.slug.current}`}>{product?.name}</Link>
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
      </div>
    </div>
  );
}

export default ProductTwelve;
