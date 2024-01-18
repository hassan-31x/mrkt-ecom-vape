import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

import LoginModal from "@/components/features/modals/login-modal";
import HeaderSearch from "@/components/partials/header/partials/header-search";
import CartMenu from "@/components/partials/header/partials/cart-menu";
import MainMenu from "@/components/partials/header/partials/main-menu";
import StickyHeader from "@/components/features/sticky-header";
import Link from "next/link";

function Header(props) {
  const router = useRouter();
  const [containerClass, setContainerClass] = useState("container");

  function openMobileMenu() {
    document.querySelector("body").classList.add("mmenu-active");
  }

  useEffect(() => {
    setContainerClass(
      router?.aspath?.includes("fullwidth") ? "container-fluid" : "container"
    );
  }, [router?.asPath]);

  return (
    <header className="header header-35 bg-primary">
      <div className="header-top">
        <div className={containerClass}>
          <div className="header-left">
            <div className="header-dropdown">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                USD
              </a>
              <div className="header-menu">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Eur
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Usd
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="header-dropdown">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Eng
              </a>
              <div className="header-menu">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      French
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Spanish
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="header-right">
            <ul className="top-menu">
              <li>
                <a href="#">Links</a>
                <ul>
                  <li>
                    <a href="tel:#">
                      <i className="icon-phone"></i>Call: +0123 456 789
                    </a>
                  </li>
                  <li>
                    <Link href="/wishlist">
                      <i className="icon-heart-o"></i>My Wishlist{" "}
                      <span className="text-secondary">
                        ({props?.wishlist?.length})
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/pages/contact">Contact Us</Link>
                  </li>
                  <LoginModal />
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <StickyHeader>
        <div className="header-middle sticky-header border-bottom-0">
          <div className={containerClass}>
            <div className="d-flex w-100 position-relative">
              <div className="header-left">
                <button
                  className="mobile-menu-toggler"
                  onClick={openMobileMenu}
                >
                  <span className="sr-only">Toggle mobile menu</span>
                  <i className="icon-bars"></i>
                </button>

                <Link href="/" className="logo">
                  <img
                    src="/images/home/header-logo.png"
                    alt="Molla Logo"
                    width="82"
                    height="31"
                  />
                </Link>

                <MainMenu />
              </div>

              <div className="header-right">
                {/* <HeaderSearch /> */}
                <CartMenu />
              </div>
            </div>
          </div>
        </div>
      </StickyHeader>
    </header>
  );
}

export default Header;
