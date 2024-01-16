'use client'

import urlFor from "@/sanity/lib/image.js";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function ProductThirteen(props) {
  const { product } = props;
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(99999);

  useEffect(() => {
    let min = minPrice;
    let max = maxPrice;
    product?.variants?.map((item) => {
      if (min > item.price) min = item.price;
      if (max < item.price) max = item.price;
    }, []);

    if (product?.variants?.length == 0) {
      min = product?.sale_price ? product?.sale_price : product?.price;
      max = product?.price;
    }

    setMinPrice(min);
    setMaxPrice(max);
  }, []);

  function onCartClick(e) {
    e.preventDefault();
    props.addToCart(product);
  }

  return (
    <div className="tooltip">
      <figure className="product-media">
        <Link href={`/product/${product.slug.current}`}>
          <Image
            alt="product"
            src={urlFor(product?.pictures?.[0]?.img)?.url()}
            className="product-image"
            fill
          />
          {product?.pictures?.length >= 2 ? (
            <Image
              alt="product"
              src={urlFor(product?.pictures?.[1]?.img)?.url()}
              className="product-image-hover"
              fill
            />
          ) : (
            ""
          )}
        </Link>
      </figure>

      <div className="product-body">
        <h3 className="product-title">
          <Link href={`/product/default/${product.slug.current}`}>{product?.name}</Link>
        </h3>

        {product?.sale_price ? (
          <div className="product-price">
            <span className="old-price">${product.sale_price.toFixed(2)}</span>
            <span className="new-price">${product.price.toFixed(2)}</span>
          </div>
        ) : (
          <div className="product-price">
            <span className="out-price">${product.price?.toFixed(2)}</span>
          </div>
        )}

        {product?.stock && product?.stock !== 0 ? (
          product?.variants?.length > 0 ? (
            <Link
              href={`/product/${product?.slug.current}`}
              className="btn btn-link btn-link-secondary-dark"
            >
              <span>Select Options</span>
            </Link>
          ) : (
            <a
              href="#"
              className="btn btn-link btn-link-secondary-dark"
              onClick={onCartClick}
            >
              <span>Add to cart</span>
            </a>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ProductThirteen;
