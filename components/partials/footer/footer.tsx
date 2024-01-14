import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

function Footer() {
  const router = useRouter("");
  const [isBottomSticky, setIsBottomSticky] = useState(false);
  const [containerClass, setContainerClass] = useState("container");

  useEffect(() => {
    handleBottomSticky();
    setContainerClass(
      router?.aspath?.includes("fullwidth") ? "container-fluid" : "container"
    );
  }, [router?.asPath]);

  useEffect(() => {
    window.addEventListener("resize", handleBottomSticky, { passive: true });
    return () => {
      window.removeEventListener("resize", handleBottomSticky);
    };
  }, []);

  function handleBottomSticky() {
    setIsBottomSticky(
      router?.pathname?.includes("product/default") && window.innerWidth > 991
    );
  }

  return (
    <footer className="footer footer-1 bg-primary">
      <div className="cta cta-horizontal bg-secondary">
        <div className={containerClass}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-5 offset-xl-1">
              <h3 className="cta-title text-white font-weight-normal mb-1 mb-lg-0">
                Join Our Newsletter
              </h3>
              <p className="cta-desc font-weight-normal text-white">
                Subcribe to get information about products and coupons
              </p>
            </div>

            <div className="col-lg-6 col-xl-5">
              <form action="#">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control mr-0 border-0 font-weight-normal"
                    placeholder="Enter your Email Address"
                    aria-label="Email Adress"
                    required
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-white font-weight-lighter"
                      type="submit"
                    >
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 col-xl-2-5col">
              <div className="widget widget-about">
                <img
                  src="/images/home/footer-logo.png"
                  className="footer-logo my-2"
                  alt="Footer Logo"
                  width="83"
                  height="31"
                />
                <p className="font-weight-normal mb-3">
                  Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                  augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                  Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
                  luctus, metus.{" "}
                </p>

                <div className="widget-about-info">
                  <div className="tel-info">
                    <span className="widget-about-title font-weight-normal text-white">
                      Got Question? Call us 24/7
                    </span>
                    <a
                      href="tel:123456789"
                      className="tel-number font-weight-lighter"
                    >
                      +0123 456 789
                    </a>
                  </div>

                  <div className="payment-info">
                    <span className="widget-about-title font-weight-normal text-white">
                      Payment Method
                    </span>
                    <figure className="footer-payments">
                      <img
                        src="/images/payments.png"
                        alt="Payment methods"
                        width="272"
                        height="20"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-2 col-xl-5col">
              <div className="widget">
                <h4 className="widget-title text-white font-weight-lighter">
                  Information
                </h4>

                <ul className="widget-list">
                  <li>
                    <Link href="/pages/about">About Molla</Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      How to shop on Molla
                    </a>
                  </li>
                  <li>
                    <Link href="/pages/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/pages/contact">Contact us</Link>
                  </li>
                  <li>
                    <Link href="/pages/login">Log in</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-4 col-lg-2 col-xl-5col">
              <div className="widget">
                <h4 className="widget-title text-white font-weight-lighter">
                  Customer Service
                </h4>

                <ul className="widget-list">
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Payment Methods
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Money-back guarantee!
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Returns
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Terms and conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-4 col-lg-2 col-xl-5col">
              <div className="widget">
                <h4 className="widget-title text-white font-weight-lighter">
                  My Account
                </h4>

                <ul className="widget-list">
                  <li>
                    <Link href="/pages/login">Sign In</Link>
                  </li>
                  <li>
                    <Link href="/shop/cart">View Cart</Link>
                  </li>
                  <li>
                    <Link href="/shop/wishlist">My Wishlist</Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Track My Order
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Help
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className={containerClass}>
          <p className="footer-copyright font-weight-normal">
            Copyright © {new Date().getFullYear()} Molla Store. All Rights
            Reserved.
          </p>

          <ul className="footer-menu">
            <li>
              <a
                href="#"
                className="font-weight-normal"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Terms Of Use
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-weight-normal"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Privacy Policy
              </a>
            </li>
          </ul>

          <div className="social-icons social-icons-color">
            <span className="social-label font-weight-normal">
              Social Media
            </span>
            <a
              href="#"
              className="social-icon social-facebook"
              title="Facebook"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <i className="icon-facebook-f"></i>
            </a>
            <a
              href="#"
              className="social-icon social-twitter"
              title="Twitter"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <i className="icon-twitter"></i>
            </a>
            <a
              href="#"
              className="social-icon social-instagram"
              title="Pinterest"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <i className="icon-instagram"></i>
            </a>
            <a
              href="#"
              className="social-icon social-youtube"
              title="Youtube"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <i className="icon-youtube"></i>
            </a>
            <a
              href="#"
              className="social-icon social-pinterest"
              title="Instagram"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <i className="icon-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
      {isBottomSticky ? <div className="mb-10"></div> : ""}
    </footer>
  );
}

export default Footer;
