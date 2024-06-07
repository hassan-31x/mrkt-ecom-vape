"use client";

import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "@/redux/slice/wishlistSlice";
import { addToCart } from "@/redux/slice/cartSlice";

import urlFor from "@/sanity/lib/image";
import { nicotinePercentage } from "@/utils/constants";

function WishlistPageComponent() {
  const dispatch = useDispatch();
  const wishItems = useSelector((state) => state.wishlist.items);

  function moveToCart(product) {
    dispatch(removeFromWishlist(product.id));
    addToCart(product);
  }

  return (
    <div className="page-content pb-5">
      {wishItems.length > 0 ? (
        <div className="container">
          <table className="table table-wishlist table-mobile">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {wishItems?.map((product, index) => (
                <tr key={index}>
                  <td className="product-col">
                    <div className="product">
                      <figure className="product-media">
                        <Link
                          href={`/product/${product.slug.current}`}
                          className="product-image"
                        >
                          <Image
                            width={100}
                            height={100}
                            src={urlFor(product?.pictures?.[0])?.url()}
                            alt="product"
                          />
                        </Link>
                      </figure>

                      <h4 className="product-title">
                        <Link href={`/product/${product.slug.current}`}>
                          {product.name}
                        </Link>
                      </h4>
                    </div>
                  </td>
                  <td className="price-col">
                    {product?.stock < 1 ? (
                      <div className="product-price">
                        <span className="out-price">
                          $
                          {product?.sale_price?.toFixed(2) ||
                            product.price.toFixed(2)}
                        </span>
                      </div>
                    ) : product?.sale_price ? (
                      <div className="product-price !flex-col !items-start !justify-center">
                        <span className="old-price">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="new-price">
                          ${product.sale_price.toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <div className="product-price">
                        <span className="out-price">
                          ${product.price?.toFixed(2)}
                        </span>
                      </div>
                    )}
                  </td>
                  <td className="stock-col">
                    <span
                      className={`${
                        product.stock == 0 ? "out-of-stock" : "in-stock"
                      }`}
                    >
                      {product.stock == 0 ? "Out of stock" : "In stock"}
                    </span>
                  </td>
                  <td className="action-col">
                    <div className="dropdown">
                      {nicotinePercentage?.length || product.stock == 0 ? (
                        <Link
                          href={`/product/${product.slug.current}`}
                          className="btn btn-block btn-outline-primary-2 btn-select"
                        >
                          <i className="icon-list-alt"></i>
                          {product.stock == "0" ? "baca lagi" : "select"}
                        </Link>
                      ) : (
                        <button
                          className="btn btn-block btn-outline-primary-2"
                          onClick={(e) => moveToCart(product)}
                        >
                          <i className="icon-cart-plus"></i>
                          Keranjang
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="remove-col">
                    <button
                      className="btn-remove"
                      onClick={(e) => dispatch(removeFromWishlist(product.id))}
                    >
                      <i className="icon-close"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="wishlist-share">
            <div className="social-icons social-icons-sm mb-2">
              <label className="social-label">Share on:</label>
              <Link href="#" className="social-icon" title="Facebook">
                <i className="icon-facebook-f"></i>
              </Link>
              <Link href="#" className="social-icon" title="Twitter">
                <i className="icon-twitter"></i>
              </Link>
              <Link href="#" className="social-icon" title="Instagram">
                <i className="icon-instagram"></i>
              </Link>
              <Link href="#" className="social-icon" title="Youtube">
                <i className="icon-youtube"></i>
              </Link>
              <Link href="#" className="social-icon" title="Pinterest">
                <i className="icon-pinterest"></i>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="text-center">
            <i
              className="icon-heart-o wishlist-empty d-block"
              style={{ fontSize: "15rem", lineHeight: "1" }}
            ></i>
            <span className="d-block mt-2">Tidak ada produk di favorit</span>
            <Link href="/ejuice" className="btn btn-primary mt-2">
            Segera Beli
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default WishlistPageComponent;
