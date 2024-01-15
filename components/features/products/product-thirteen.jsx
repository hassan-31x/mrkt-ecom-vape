'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import data from "@/data/products.json";

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
        <Link href={`/product/default/${product?.slug}`}>
          <Image
            alt="product"
            src={product?.sm_pictures?.[0]?.url}
            className="product-image"
            fill
          />
          {product?.sm_pictures?.length >= 2 ? (
            <Image
              alt="product"
              src={
                product?.sm_pictures[1].url
              }
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
          <Link href={`/product/default/${product?.slug}`}>{product?.name}</Link>
        </h3>

        {!product?.stock || product?.stock == 0 ? (
          <div className="product-price">
            <span className="out-price">${product?.price?.toFixed(2)}</span>
          </div>
        ) : minPrice == maxPrice ? (
          <div className="product-price">${minPrice.toFixed(2)}</div>
        ) : product?.variants?.length == 0 ? (
          <div className="product-price">
            <span className="old-price">${maxPrice?.toFixed(2)}</span>
            <span className="new-price">${minPrice?.toFixed(2)}</span>
          </div>
        ) : (
          <div className="product-price">
            ${minPrice.toFixed(2)}&ndash;${maxPrice?.toFixed(2)}
          </div>
        )}

        {product?.stock && product?.stock !== 0 ? (
          product?.variants?.length > 0 ? (
            <Link
              href={`/product/default/${product?.slug}`}
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
