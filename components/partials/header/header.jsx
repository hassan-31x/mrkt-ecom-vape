import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import LoginModal from "@/components/features/modals/login-modal";
import HeaderSearch from "@/components/partials/header/partials/header-search";
import CartMenu from "@/components/partials/header/partials/cart-menu";
import MainMenu from "@/components/partials/header/partials/main-menu";
import StickyHeader from "@/components/features/sticky-header";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { updateDiscount } from "@/redux/slice/cartSlice";

function Header() {
  const { data: session } = useSession();
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch()

  function openMobileMenu() {
    document.querySelector("body").classList.add("mmenu-active");
  }

  const handleLogout = () =>{
    dispatch(updateDiscount(null))
    signOut()
  } 

  return (
    <header className="header header-35 bg-[#FCFCFC]">
    {/* <header className="header header-35 bg-primary"> */}
      <div className="header-top">
        <div className="container">
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
                        ({wishlist?.length || 0})
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  {/* <LoginModal /> */}
                  <li>
                    {session ? (
                      <span
                        onClick={handleLogout}
                        className="!text-[#999999] cursor-pointer"
                      >
                        <i className="icon-user"></i>Logout
                      </span>
                    ) : (
                      <Link href="/login">
                        <i className="icon-user"></i>Login
                      </Link>
                    )}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <StickyHeader>
        <div className="header-middle sticky-header border-bottom-0">
          <div className="container">
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
                  <Image
                    src="/images/home/header-logo-t.png"
                    alt="Molla Logo"
                    width={100}
                    height={31}
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
