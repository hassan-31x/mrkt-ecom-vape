import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { isInWishlist, isInCompare } from "@/utils";
import Image from "next/image";
import Link from "next/link";

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
    <div className="product product-list">
      <div className="row pr-2">
        <div className="col-lg-3 col-md-3 col-6">
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
                src={product?.sm_pictures?.[0].url}
                className="product-image"
                fill
              />
              {product?.sm_pictures?.length >= 2 ? (
                <Image
                  alt="product"
                  src={product?.sm_pictures[1].url}
                  fill
                  className="product-image-hover"
                />
              ) : (
                ""
              )}
            </Link>
          </figure>
        </div>
        <div className="col-md-6 order-last">
          <div className="product-body product-action-inner">
            <div className="product-cat">
              {product?.category.map((item, index) => (
                <React.Fragment key={item.slug + "-" + index}>
                  <Link
                    href={{
                      pathname: "/shop/sidebar/list",
                      query: { category: item.slug },
                    }}
                  >
                    {item.name}
                  </Link>
                  {index < product?.category.length - 1 ? ", " : ""}
                </React.Fragment>
              ))}
            </div>

            <h3 className="product-title">
              <Link href={`/product/default/${product?.slug}`}>
                {product?.name}
              </Link>
            </h3>

            <div className="product-content">
              <p>{product?.short_desc}</p>
            </div>

            {product?.variants.length > 0 ? (
              <div className="product-nav product-nav-dots">
                <div className="row no-gutters">
                  {product?.variants.map((item, index) => (
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
            )}
          </div>
        </div>

        <div className="col-md-3 col-6 order-md-last order-lg-last">
          <div className="product-list-action">
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
                <span className="tooltip-text">
                  {product?.ratings.toFixed(2)}
                </span>
              </div>
              <span className="ratings-text">( {product?.reviews?.length} Reviews )</span>
            </div>

            <div className="product-action">
              <button
                className="btn-product btn-quickview"
                title="Quick View"
                onClick={onQuickView}
              >
                <span>quick view</span>
              </button>
              {isInWishlist(wishlist, product) ? (
                <Link
                  href="/wishlist"
                  className="btn-product btn-wishlist added-to-wishlist"
                >
                  <span>wishlist</span>
                </Link>
              ) : (
                <a
                  href="#"
                  className="btn-product btn-wishlist"
                  onClick={onWishlistClick}
                >
                  <span>wishlist</span>
                </a>
              )}
            </div>
            {product?.stock > 0 ? (
              product?.variants.length > 0 ? (
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
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data,
  };
};

export default ProductSix;
