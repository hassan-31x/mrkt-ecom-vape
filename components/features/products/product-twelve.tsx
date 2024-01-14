'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { isInWishlist, isInCompare } from "@/utils";
import Image from "next/image";
import Link from "next/link";

import data from "@/data/products.json";

function ProductTwelve(props) {
  const router = useRouter();
  const { wishlist } = props;
  const { products: product } = data
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(99999);

  useEffect(() => {
    let min = minPrice;
    let max = maxPrice;
    product.variants?.map((item) => {
      if (min > item.price) min = item.price;
      if (max < item.price) max = item.price;
    }, []);

    if (product.variants?.length == 0) {
      min = product.sale_price ? product.sale_price : product.price;
      max = product.price;
    }

    setMinPrice(min);
    setMaxPrice(max);
  }, []);

  function onCartClick(e) {
    e.preventDefault();
    props.addToCart(product);
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
    props.showQuickView(product.slug);
  }

  return (
    <div className="product product-4 text-center">
      <figure className="product-media">
        {product.new ? (
          <span className="product-label label-circle label-new">New</span>
        ) : (
          ""
        )}

        {product.sale_price ? (
          <span className="product-label label-circle label-sale">Sale</span>
        ) : (
          ""
        )}

        {product.top ? (
          <span className="product-label label-circle label-top">Top</span>
        ) : (
          ""
        )}

        {!product.stock || product.stock == 0 ? (
          <span className="product-label label-circle label-out">
            Out of Stock
          </span>
        ) : (
          ""
        )}

        <Link href={`/product/default/${product.slug}`}>
          <Image
            alt="product"
            src={process.env.NEXT_PUBLIC_ASSET_URI + product?.sm_pictures?.[0]?.url}
            className="product-image"
          />
          {product.sm_pictures?.length >= 2 ? (
            <Image
              alt="product"
              src={
                process.env.NEXT_PUBLIC_ASSET_URI + product.sm_pictures[1].url
              }
              className="product-image-hover"
            />
          ) : (
            ""
          )}
        </Link>

        <div className="product-action-vertical">
          {isInWishlist(wishlist, product) ? (
            <Link
              href="/shop/wishlist"
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

        {product.stock && product.stock !== 0 ? (
          <div className="product-action">
            {product.variants?.length > 0 ? (
              <Link
                href={`/product/default/${product.slug}`}
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
              style={{ width: product.ratings * 20 + "%" }}
            ></div>
            <span className="tooltip-text">{product?.ratings?.toFixed(2)}</span>
          </div>
        </div>

        <h3 className="product-title">
          <Link href={`/product/default/${product.slug}`}>{product.name}</Link>
        </h3>

        {!product.stock || product.stock == 0 ? (
          <div className="product-price">
            <span className="out-price">${product?.price?.toFixed(2)}</span>
          </div>
        ) : minPrice == maxPrice ? (
          <div className="product-price">${minPrice.toFixed(2)}</div>
        ) : product.variants?.length == 0 ? (
          <div className="product-price">
            <span className="old-price">${maxPrice.toFixed(2)}</span>
            <span className="new-price">${minPrice.toFixed(2)}</span>
          </div>
        ) : (
          <div className="product-price">
            ${minPrice.toFixed(2)}&ndash;${maxPrice.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductTwelve;
