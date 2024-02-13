import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sanityAdminClient } from "@/sanity/lib/client";
import { toast } from "react-toastify";

function Footer() {
  const router = useRouter("");
  const [isBottomSticky, setIsBottomSticky] = useState(false);
  const [containerClass, setContainerClass] = useState("container");
  const [email, setEmail] = useState("");

  const { data: session } = useSession();

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

  const handleFormSubmit = async (e) => {
    try {

      e.preventDefault();
      if (!email) {
        return;
    }
    if (!session) {
      router.push("/login");
    } else {
      const res = await sanityAdminClient.create({
        _type: "referral",
        referralEmail: session.user.email,
        referredEmail: email,
        dateOfReferral: new Date(),
      });
      toast.success("Referral sent successfully");
    }
  } catch (err) {
    console.error(err);
  } finally {
    setEmail("")
  }
  };

  return (
    <footer className="footer footer-1 bg-primary">
      <div className="cta cta-horizontal bg-secondary">
        <div className={containerClass}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-5 offset-xl-1">
              <h3 className="cta-title text-white font-weight-normal mb-1 mb-lg-0">
                Get Amazing Discount!
              </h3>
              <p className="cta-desc font-weight-normal text-white">
                Refer a friend to get amazing discount on your next order.
              </p>
            </div>

            <div className="col-lg-6 col-xl-5">
              <form action="#">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control mr-0 border-0 font-weight-normal"
                    placeholder="Enter your friend's Email Address"
                    aria-label="Email Adress"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-white font-weight-lighter border-l border-l-black"
                      type="button" onClick={handleFormSubmit}
                    >
                      Refer
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
                  Customer Service
                </h4>

                <ul className="widget-list">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/ejucie">Ejuices</Link>
                  </li>
                  <li>
                    <Link href="/blog">Benefits</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-4 col-lg-2 col-xl-5col">
              <div className="widget">
                <h4 className="widget-title text-white font-weight-lighter">
                  Information
                </h4>

                <ul className="widget-list">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/terms-and-conditions">
                      Terms and conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
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
                    <Link href="/login">Login</Link>
                  </li>
                  <li>
                    <Link href="/cart">View Cart</Link>
                  </li>
                  <li>
                    <Link href="/wishlist">My Wishlist</Link>
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
