"use client"

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

import Qty from "@/components/features/qty";

import { isInWishlist } from "@/utils";
import Link from "next/link";
import { addToCart } from "@/redux/slice/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { nicotinePercentage } from "@/utils/constants";

function DetailOne(props) {
  const { product } = props;
  const [qty, setQty] = useState(1);
  const [nicotine, setNicotine] = useState();

  const router = useRouter();
  const dispatch = useDispatch();
  const ref = useRef(null);

  function onWishlistClick(e) {
    e.preventDefault();
    if (!isInWishlist(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router?.push("/wishlist");
    }
  }

  function onChangeQty(current) {
    setQty(current);
  }


  function onCartClick() {
    if (qty > product?.stock) {
      toast.error("Insufficient stock");
      return;
    }

    if (nicotinePercentage?.length > 0 && !nicotine) {
      toast.error("Please select Nicotine Percentage");
      return;
    }

    for (let i = 0; i < qty; i++) {
      dispatch(addToCart({
        ...product,
        nicotinePercentage: nicotine,
      }));
    }
    toast.success("Product added to cart");
  }

  return (
    <div className="product-details" ref={ref}>
      <h1 className="product-title">{product.name}</h1>

      <div className="ratings-container">
        <div className="ratings">
          <div
            className="ratings-val"
            style={{ width: product?.ratings * 20 + "%" }}
          ></div>
          <span className="tooltip-text">{product?.ratings.toFixed(2)}</span>
        </div>
        {product?.reviews?.length && (
          <span className="ratings-text">
            ( {product?.reviews?.length} Reviews )
          </span>
        )}
      </div>

      {product?.stock < 1 ? (
        <div className="product-price">
          <span className="out-price">
            ${product?.sale_price?.toFixed(2) || product.price.toFixed(2)}
          </span>
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

      <div className="product-content">
        <p>{product?.short_desc}</p>
      </div>

      {nicotinePercentage?.length > 0 ? (
        <div className="details-filter-row details-row-size">
          <label htmlFor="size">Nicotine:</label>
          <div className="select-custom">
            <select
              name="size"
              className="form-control"
              value={nicotine}
              onChange={(e) => setNicotine(e.target.value)}
            >
              <option value="">Select Nicotine Percentage</option>
              {nicotinePercentage?.map((percentage, index) => (
                <option value={percentage} key={index}>
                  {percentage}%
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="details-filter-row details-row-size">
        <label htmlFor="qty">Qty:</label>
        <Qty changeQty={onChangeQty} max={product?.stock} value={qty}></Qty>
      </div>

      <div className="product-details-action">
        <button
          className={`btn-product btn-cart ${
            product?.stock < 1 ? "btn-disabled" : ""
          }`}
          onClick={onCartClick}
        >
          <span>add to cart</span>
        </button>
        <div className="details-action-wrapper">
          {isInWishlist(props.wishlist, product) ? (
            <Link
              href="/wishlist"
              className="btn-product btn-wishlist added-to-wishlist"
            >
              <span>Go to Wishlist</span>
            </Link>
          ) : (
            <a
              href="#"
              className="btn-product btn-wishlist"
              onClick={onWishlistClick}
            >
              <span>Add to Wishlist</span>
            </a>
          )}
        </div>
      </div>

      <div className="product-details-footer">
        <div className="social-icons social-icons-sm">
          <span className="social-label">Share:</span>
          <Link href="#" className="social-icon" title="Facebook">
            <i className="icon-facebook-f"></i>
          </Link>
          <Link href="#" className="social-icon" title="Twitter">
            <i className="icon-twitter"></i>
          </Link>
          <Link href="#" className="social-icon" title="Instagram">
            <i className="icon-instagram"></i>
          </Link>
          <Link href="#" className="social-icon" title="Pinterest">
            <i className="icon-pinterest"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailOne;
