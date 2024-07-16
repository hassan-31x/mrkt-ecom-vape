"use client"

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

import Qty from "@/components/features/qty";

import { isInWishlist } from "@/utils";
import Link from "next/link";
import { addToCart } from "@/redux/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { nicotinePercentage } from "@/utils/constants";
import { addToWishlist } from "@/redux/slice/wishlistSlice";
import { useSession } from "next-auth/react";

function DetailOne(props) {
  const { product } = props;
  const [qty, setQty] = useState(1);
  const [nicotine, setNicotine] = useState();

  const { data: session } = useSession();
  console.log("🚀 ~ DetailOne ~ session:", session)

  const ref = useRef(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  function onWishlistClick(e) {
    e.preventDefault();
    if (!isInWishlist(wishlist, product)) {
      dispatch(addToWishlist(product));
    } else {
      router?.push("/wishlist");
    }
  }

  function onChangeQty(current) {
    setQty(current);
  }


  function onCartClick() {
    if (product?.stock && qty > product?.stock) {
      toast.error("Insufficient stock");
      return;
    }

    // if (nicotinePercentage?.length > 0 && !nicotine) {
    //   toast.error("Please select Nicotine Percentage");
    //   return;
    // }

    for (let i = 0; i < qty; i++) {
      dispatch(addToCart({
        ...product,
        // nicotinePercentage: nicotine,
      }));
    }
    toast.success("Product added to cart");
  }

  return (
    <div className="product-details" ref={ref}>
      <h1 className="product-title">{product.name}</h1>

      <div className="raRp ings-container">
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

      {product?.stock && product?.stock < 1 ? (
        <div className="product-price">
          <span className="out-price">
            Rp {session && session?.user?.type === 'business' ? product?.business_price?.toFixed(3) : product?.sale_price?.toFixed(3) || product.price.toFixed(3)}
          </span>
        </div>
      ) : product?.sale_price && (!session || session?.user?.type === 'user') ? (
        <div className="product-price">
          <span className="old-price pr-2">Rp {product.price.toFixed(3)}</span>
          <span className="new-price">Rp {product.sale_price.toFixed(3)}</span>
        </div>
      ) : (
        <div className="product-price">
          <span className="out-price">Rp {session && session?.user?.type === 'business' ? product?.business_price?.toFixed(3) : product.price?.toFixed(3)}</span>
        </div>
      )}

      <div className="product-content">
        <p>{product?.short_desc}</p>
      </div>

      {/* {nicotinePercentage?.length > 0 ? (
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
      )} */}

      <div className="details-filter-row details-row-size">
        <label htmlFor="qty">Qty:</label>
        <Qty changeQty={onChangeQty} max={product?.stock} value={qty}></Qty>
      </div>

      <div className="product-details-action">
        <button
          className={`btn-product btn-cart ${
            product?.stock && product?.stock < 1 ? "btn-disabled" : ""
          }`}
          onClick={onCartClick}
        >
          <span>Keranjang</span>
        </button>
        <div className="details-action-wrapper">
          {isInWishlist(wishlist, product) ? (
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
              <span>Favorit</span>
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
