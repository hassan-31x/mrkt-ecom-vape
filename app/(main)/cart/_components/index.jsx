"use client";

import React, { useState } from "react";

import Qty from "@/components/features/qty";
import PageHeader from "@/components/features/page-header";

import { cartPriceTotal, cartPriceTotalDiscount } from "@/utils/index";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  applyDiscount,
  emptyCart,
  removeFromCart,
} from "@/redux/slice/cartSlice";
import urlFor from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function CartPageComponent(props) {
  const [shippingCost, setShippingCost] = useState(0);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const { items } = cart;

  function onChangeShipping(value) {
    setShippingCost(value);
  }

  function changeQty(value, index) {
    console.log("🚀 ~ changeQty ~ value:", value);
  }

  const handleDiscount = async () => {
    try {
      // setLoading(true);

      // const res =
      //   await client.fetch(`*[_type == 'discount' && code=='${code}'] {
      //   ...,
      //   "products": products[]->.id
      // }`);

      // if (!res?.length) {
      //   toast.error("Invalid Code");
      //   return;
      // }

      // dispatch(applyDiscount(res[0]));
      console.log("applied");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setCode("");
    }
  };

  function updateCart(e) {
    let button = e.currentTarget;
    button.querySelector(".icon-refresh").classList.add("load-more-rotating");

    setTimeout(() => {
      dispatch(emptyCart());
      button
        .querySelector(".icon-refresh")
        .classList.remove("load-more-rotating");
      dispatch(emptyCart());
    }, 400);
  }

  function handleCheckout(e) {
    e.preventDefault()
    try {
      if (!session) {
        router.push("/login");
        return;
      }
      if (items?.length < 1) {
        toast.error("No products in the cart");
        return;
      }
        
      console.log('niga')
      // dispatch(emptyCart());
  } catch (err) {
    console.error(err);
  }
}

  return (
    <div className="main">
      <PageHeader title="Shopping Cart" subTitle="Shop" />
      <nav className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Cart</li>
          </ol>
        </div>
      </nav>

      <div className="page-content pb-5">
        <div className="cart">
          <div className="container">
            {items?.length > 0 ? (
              <div className="row">
                <div className="col-lg-9">
                  <table className="table table-cart table-mobile">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      {items?.length > 0 ? (
                        items?.map((item, index) => (
                          <tr key={item?.cartId}>
                            <td className="product-col">
                              <div className="product">
                                <figure className="product-media">
                                  <Link
                                    href={`/product/${item.slug.current}`}
                                    className="product-image"
                                  >
                                    <img
                                      src={urlFor(item.pictures?.[0]).url()}
                                      alt="product"
                                    />
                                  </Link>
                                </figure>

                                <h4 className="product-title">
                                  <Link href={`/product/${item.slug.current}`}>
                                    {item.name}
                                  </Link>
                                  <span className="capitalize text-xl text-neutral-700/60">
                                    {item?.nicotinePercentage}% Nicotine
                                  </span>
                                </h4>
                              </div>
                            </td>

                            <td className="price-col">
                              $
                              {item.sale_price
                                ? item.sale_price.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })
                                : item.price.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })}
                            </td>

                            <td className="quantity-col">
                              {/* <Qty
                                value={item.qty}
                                changeQty={(current) =>
                                  changeQty(current, index)
                                }
                                adClass="cart-product-quantity"
                              ></Qty> */}
                              <span className="inline lg:hidden">x</span>
                              {item.qty}
                            </td>

                            <td className="total-col">
                              $
                              {item.sum.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </td>

                            <td className="remove-col">
                              <button
                                className="btn-remove"
                                onClick={() =>
                                  dispatch(removeFromCart(item.cartId))
                                }
                              >
                                <i className="icon-close"></i>
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>
                            <p className="pl-2 pt-1 pb-1">
                              {" "}
                              No Products in Cart{" "}
                            </p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  <div className="cart-bottom">
                    <div className="cart-discount">
                      <form>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder="coupon code"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-primary-2"
                              onClick={handleDiscount}
                              type="button"
                            >
                              <i
                                className={
                                  loading
                                    ? "icon-times-circle-o"
                                    : "icon-long-arrow-right"
                                }
                              ></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <button
                      className="btn btn-outline-dark-2"
                      onClick={updateCart}
                    >
                      <span>UPDATE CART</span>
                      <i className="icon-refresh"></i>
                    </button>
                  </div>
                </div>
                <aside className="col-lg-3">
                  <div className="summary summary-cart">
                    <h3 className="summary-title">Cart Total</h3>

                    <table className="table table-summary">
                      <tbody>
                        <tr className="summary-shipping">
                          <td className="!pb-0">Subtotal:</td>
                          <td className="pb-0">
                            $
                            {cartPriceTotal(items).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                        </tr>
                        <tr className="summary-shipping">
                          <td className="py-0">
                            Discount <br />
                            {cart?.discount &&
                              `(${cart?.discount?.name} - ${cart?.discount?.percentage}%)`}
                            :
                          </td>
                          <td className="text-[#054088] py-0">
                            - $
                            {(
                              (cartPriceTotal(items) *
                                (cart?.discount?.percentage || 0)) /
                              100
                            ).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                        </tr>
                        <tr className="summary-subtotal">
                          <td>Subtotal After Discount:</td>
                          <td>
                            $
                            {cartPriceTotalDiscount(
                              cartPriceTotal(items),
                              cart?.discount?.percentage
                            ).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                        </tr>
                        <tr className="summary-shipping">
                          <td>Shipping:</td>
                          <td>&nbsp;</td>
                        </tr>

                        <tr className="summary-shipping-row">
                          <td>
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="free-shipping"
                                name="shipping"
                                className="custom-control-input"
                                onChange={(e) => onChangeShipping(0)}
                                defaultChecked={true}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="free-shipping"
                              >
                                Free Shipping
                              </label>
                            </div>
                          </td>
                          <td>$0.00</td>
                        </tr>

                        <tr className="summary-shipping-row">
                          <td>
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="standard-shipping"
                                name="shipping"
                                className="custom-control-input"
                                onChange={(e) => onChangeShipping(10)}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="standard-shipping"
                              >
                                Standard:
                              </label>
                            </div>
                          </td>
                          <td>$10.00</td>
                        </tr>

                        <tr className="summary-shipping-row">
                          <td>
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="express-shipping"
                                name="shipping"
                                className="custom-control-input"
                                onChange={(e) => onChangeShipping(20)}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="express-shipping"
                              >
                                Express:
                              </label>
                            </div>
                          </td>
                          <td>$20.00</td>
                        </tr>

                        <tr className="summary-shipping-estimate">
                          <td>
                            Estimate for Your Country
                            <br /> <Link href="/dashboard">Change address</Link>
                          </td>
                          <td>&nbsp;</td>
                        </tr>

                        <tr className="summary-total">
                          <td>Total:</td>
                          <td>
                            $
                            {(
                              cartPriceTotalDiscount(
                                cartPriceTotal(items),
                                cart?.discount?.percentage
                              ) + shippingCost
                            ).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <button
                      className="btn btn-outline-primary-2 btn-order btn-block"
                      type="button"
                      disabled={items?.length < 1}
                      onClick={handleCheckout}
                    >
                      PROCEED TO CHECKOUT
                    </button>
                  </div>

                  <Link
                    href="/sidebar/list"
                    className="btn btn-outline-dark-2 btn-block mb-3"
                  >
                    <span>CONTINUE SHOPPING</span>
                    <i className="icon-refresh"></i>
                  </Link>
                </aside>
              </div>
            ) : (
              <div className="row">
                <div className="col-12">
                  <div className="cart-empty-page text-center">
                    <i
                      className="cart-empty icon-shopping-cart"
                      style={{ lineHeight: 1, fontSize: "15rem" }}
                    ></i>
                    <p className="px-3 py-2 cart-empty mb-3">
                      No products added to the cart
                    </p>
                    <p className="return-to-shop mb-0">
                      <Link href="/sidebar/list" className="btn btn-primary">
                        RETURN TO SHOP
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPageComponent;
