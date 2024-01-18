import Link from "next/link";

import { cartQtyTotal, cartPriceTotal } from "@/utils/index";
import { useDispatch, useSelector } from "react-redux";
import urlFor from "@/sanity/lib/image";
import { removeFromCart } from "@/redux/slice/cartSlice";

function CartMenu() {
  const dispatch = useDispatch();
  const { items: cartlist } = useSelector((state) => state.cart);

  return (
    <div className="dropdown cart-dropdown">
      <Link
        href="/cart"
        className="dropdown-toggle"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        data-display="static"
      >
        <i className="icon-shopping-cart"></i>
        <span className="cart-count font-weight-bolder bg-secondary">
          {cartQtyTotal(cartlist)}
        </span>
      </Link>

      <div
        className={`dropdown-menu dropdown-menu-right ${
          cartlist?.length === 0 ? "text-center" : ""
        }`}
      >
        {0 === cartlist?.length ? (
          <p>No products in the cart.</p>
        ) : (
          <>
            <div className="dropdown-cart-products">
              {cartlist?.map((item) => (
                <div className="product justify-content-between" key={item.id}>
                  <div className="product-cart-details">
                    <h4 className="product-title">
                      <Link href={`/product/${item.slug.current}`}>
                        {item.name}
                      </Link>
                    </h4>

                    <span className="cart-product-info">
                      <span className="cart-product-qty">{item.qty} </span>x $
                      {item?.sale_price
                        ? item.sale_price.toFixed(2)
                        : item.price.toFixed(2)}
                    </span>
                  </div>

                  <figure className="product-image-container ml-2">
                    <Link
                      href={`/product/${item.slug.current}`}
                      className="product-image"
                    >
                      <img
                        src={urlFor(item.pictures?.[0])?.url()}
                        alt="product"
                      />
                    </Link>
                  </figure>
                  <button
                    className="btn-remove"
                    title="Remove Product"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <i className="icon-close"></i>
                  </button>
                </div>
              ))}
            </div>
            <div className="dropdown-cart-total">
              <span>Total</span>

              <span className="cart-total-price">
                $
                {cartPriceTotal(cartlist)?.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>

            <div className="dropdown-cart-action">
              <Link href="/cart" className="btn btn-primary w-full">
                View Cart
              </Link>
              {/* <Link href="/checkout" className="btn btn-outline-primary-2">
                <span>Checkout</span>
                <i className="icon-long-arrow-right"></i>
              </Link> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartMenu;
