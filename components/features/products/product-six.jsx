import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { isInWishlist, isInCompare } from "@/utils";
import Link from "next/link";
import Image from "next/image";

function ProductSix(props) {
  const router = useRouter();
  const { product, wishlist } = props;
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(99999);

  useEffect(() => {
    let min = minPrice;
    let max = maxPrice;
    product?.variants.map((item) => {
      if (min > item.price) min = item.price;
      if (max < item.price) max = item.price;
    }, []);

    if (product?.variants.length == 0) {
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
    props.showQuickView(product?.slug);
  }

  return (
    <div className="product product-5 text-center">
      <figure className="product-media">
        {product?.new ? (
          <span className="product-label label-new">New</span>
        ) : (
          ""
        )}

        {product?.sale_price ? (
          <span className="product-label label-sale">Sale</span>
        ) : (
          ""
        )}

        {product?.top ? (
          <span className="product-label label-top">Top</span>
        ) : (
          ""
        )}

        {!product?.stock || product?.stock == 0 ? (
          <span className="product-label label-out">Out of Stock</span>
        ) : (
          ""
        )}

        <Link href={`/product/default/${product?.slug}`}>
          <Image
            alt="product"
            src={product?.sm_pictures?.[0]?.url}
            className="product-image"
            fill
          />
          {product?.sm_pictures.length >= 2 ? (
            <Image
              alt="product"
              src={product?.sm_pictures?.[1]?.url}
              className="product-image-hover"
              fill
            />
          ) : (
            ""
          )}
        </Link>

        {product?.stock > 0 ? (
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
        )}

        {product?.stock && product?.stock !== 0 ? (
          <div className="product-action">
            {product?.variants.length > 0 ? (
              <Link
                href={`/product/default/${product?.slug}`}
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

      <div className="product-body">
        <h3 className="product-title">
          <Link href={`/product/default/${product?.slug}`}>{product?.name}</Link>
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

export default ProductSix;
