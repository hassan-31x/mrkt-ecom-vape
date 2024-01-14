import Link from "next/link";
import { useRouter } from "next/navigation";

function MainMenu() {
  const router = useRouter();
  let path = router?.asPath;
  let query = router?.query;

  function showAllDemos(e) {
    let demoItems = document.querySelectorAll(".demo-item.hidden");

    for (let i = 0; i < demoItems?.length; i++) {
      demoItems[i].classList.toggle("show");
    }

    document
      .querySelector(".view-all-demos")
      .classList.toggle("disabled-hidden");
    e.preventDefault();
  }

  return (
    <nav className="main-nav">
      <ul className="menu sf-arrows">
        <li
          className={`megamenu-container ${path === "/" ? "active" : ""}`}
          id="menu-home"
        >
          <Link href="/" className="sf-with-ul">
            Home
          </Link>

          <div className="megamenu demo">
            <div className="menu-col">
              <div className="menu-title">Choose your demo</div>

              <div className="demo-list">
                <div className="demo-item">
                  <a href={`${process.env.APP_URL}demo-1`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/1.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">01 - furniture store</span>
                  </a>
                </div>

                <div className="demo-item">
                  <a href={`${process.env.APP_URL}demo-2`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/2.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">02 - furniture store</span>
                  </a>
                </div>

                <div className="demo-item">
                  <a href={`${process.env.APP_URL}demo-3`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/3.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">03 - electronic store</span>
                  </a>
                </div>

                <div className="demo-item">
                  <a href={`${process.env.APP_URL}demo-4`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/4.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">04 - electronic store</span>
                  </a>
                </div>

                <div className="demo-item">
                  <a href={`${process.env.APP_URL}demo-5`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/5.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">05 - fashion store</span>
                  </a>
                </div>

                <div className="demo-item">
                  <a href={`${process.env.APP_URL}demo-6`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/6.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">06 - fashion store</span>
                  </a>
                </div>

                <div className="demo-item">
                  <a href={`${process.env.APP_URL}demo-7`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/7.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">07 - fashion store</span>
                  </a>
                </div>

                <div className="demo-item">
                  <a href={`${process.env.APP_URL}demo-8`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/8.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">08 - fashion store</span>
                  </a>
                </div>

                <div className="demo-item">
                  <a href={`${process.env.APP_URL}demo-9`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/9.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">09 - fashion store</span>
                  </a>
                </div>

                <div className="demo-item">
                  <a href={`${process.env.APP_URL}demo-10`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/10.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">10 - shoes store</span>
                  </a>
                </div>

                <div className="demo-item">
                  <a href={`${process.env.APP_URL}demo-11`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/11.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">
                      11 - furniture simple store
                    </span>
                  </a>
                </div>

                <div className="demo-item">
                  <a href={`${process.env.APP_URL}demo-12`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/12.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">
                      12 - fashion simple store
                    </span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-13`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/13.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">13 - market</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-14`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/14.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">14 - market fullwidth</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-15`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/15.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">15 - lookbook 1</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-16`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/16.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">16 - lookbook 2</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-17`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/17.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">17 - fashion store</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-18`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/18.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">
                      18 - fashion store (with sidebar)
                    </span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-19`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/19.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">19 - games store</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-20`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/20.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">20 - book store</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-21`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/21.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">21 - sport store</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-22`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/22.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">22 - tools store</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-23`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/23.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">
                      23 - fashion left navigation store
                    </span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-24`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/24.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">24 - extreme sport store</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-25`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/25.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">25 - jewelry store</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-26`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/26.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">26 - market store</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-27`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/27.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">27 - fashion store</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-28`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/28.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">28 - food market store</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-29`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/29.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">29 - t-shirts store</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-30`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/30.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">30 - headphones store</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-31`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/31.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">31 - yoga store</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-32`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/32.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">32 - sunglasses store</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-33`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/33.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">33 - cosmetics store</span>
                  </a>
                </div>

                <div className="demo-item hidden">
                  <a href={`${process.env.APP_URL}demo-34`}>
                    <span
                      className="demo-bg"
                      style={{
                        backgroundImage: "url( '/images/menu/demos/34.jpg' )",
                      }}
                    ></span>
                    <span className="demo-title">34 - car parts</span>
                  </a>
                </div>
              </div>

              <div className="megamenu-action text-center">
                <a
                  href="#"
                  className="btn btn-outline-primary-2 view-all-demos"
                  onClick={showAllDemos}
                >
                  <span>View All Demos</span>
                  <i className="icon-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className={path?.indexOf("/shop") > -1 ? "active" : ""}>
          <Link href="/shop/sidebar/list" className="sf-with-ul" scroll={false}>
            Shop
          </Link>

          <div className="megamenu megamenu-md">
            <div className="row no-gutters">
              <div className="col-md-8">
                <div className="menu-col">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="menu-title">Shop with sidebar</div>
                      <ul>
                        <li
                          className={
                            path?.indexOf("shop/sidebar") > -1 &&
                            query.type == "list"
                              ? "active"
                              : ""
                          }
                        >
                          <Link href="/shop/sidebar/list" scroll={false}>
                            Shop List
                          </Link>
                        </li>
                        <li
                          className={
                            path?.indexOf("shop/sidebar") > -1 &&
                            query.type == "2cols"
                              ? "active"
                              : ""
                          }
                        >
                          <Link href="/shop/sidebar/2cols" scroll={false}>
                            Shop Grid 2 Columns
                          </Link>
                        </li>
                        <li
                          className={
                            path?.indexOf("shop/sidebar") > -1 &&
                            query.type == "3cols"
                              ? "active"
                              : ""
                          }
                        >
                          <Link href="/shop/sidebar/3cols" scroll={false}>
                            Shop Grid 3 Columns
                          </Link>
                        </li>
                        <li
                          className={
                            path?.indexOf("shop/sidebar") > -1 &&
                            query.type == "4cols"
                              ? "active"
                              : ""
                          }
                        >
                          <Link href="/shop/sidebar/4cols" scroll={false}>
                            Shop Grid 4 Columns
                          </Link>
                        </li>
                        <li
                          className={
                            path?.indexOf("shop/market") > -1 ? "active" : ""
                          }
                        >
                          <Link href="/shop/market">
                            <span>
                              Shop Market
                              <span className="tip tip-new">New</span>
                            </span>
                          </Link>
                        </li>
                      </ul>

                      <div className="menu-title">Shop no sidebar</div>
                      <ul>
                        <li
                          className={
                            path?.indexOf("shop/nosidebar") > -1 &&
                            query.type == "boxed"
                              ? "active"
                              : ""
                          }
                        >
                          <Link href="/shop/nosidebar/boxed" scroll={false}>
                            <span>
                              Shop Boxed No Sidebar
                              <span className="tip tip-hot">Hot</span>
                            </span>
                          </Link>
                        </li>
                        <li
                          className={
                            path?.indexOf("shop/nosidebar") > -1 &&
                            query.type == "fullwidth"
                              ? "active"
                              : ""
                          }
                        >
                          <Link href="/shop/nosidebar/fullwidth" scroll={false}>
                            Shop Fullwidth No Sidebar
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-6">
                      <div className="menu-title">Product Category</div>
                      <ul>
                        <li
                          className={
                            path?.indexOf("shop/category/boxed") > -1
                              ? "active"
                              : ""
                          }
                        >
                          <Link href="/shop/category/boxed" scroll={false}>
                            Product Category Boxed
                          </Link>
                        </li>
                        <li
                          className={
                            path?.indexOf("shop/category/fullwidth") > -1
                              ? "active"
                              : ""
                          }
                        >
                          <Link href="/shop/category/fullwidth" scroll={false}>
                            <span>
                              Product Category Fullwidth
                              <span className="tip tip-new">New</span>
                            </span>
                          </Link>
                        </li>
                      </ul>
                      <div className="menu-title">Shop Pages</div>
                      <ul>
                        <li
                          className={
                            path?.indexOf("shop/cart") > -1 ? "active" : ""
                          }
                        >
                          <Link href="/shop/cart">Cart</Link>
                        </li>
                        <li
                          className={
                            path?.indexOf("shop/checkout") > -1 ? "active" : ""
                          }
                        >
                          <Link href="/shop/checkout">Checkout</Link>
                        </li>
                        <li
                          className={
                            path?.indexOf("shop/wishlist") > -1 ? "active" : ""
                          }
                        >
                          <Link href="/shop/wishlist">Wishlist</Link>
                        </li>
                        <li
                          className={
                            path?.indexOf("shop/dashboard") > -1 ? "active" : ""
                          }
                        >
                          <Link href="/shop/dashboard">My Account</Link>
                        </li>
                        <li
                          className={
                            path?.indexOf("#Lookbook") > -1 ? "active" : ""
                          }
                        >
                          <Link href="#">Lookbook</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="banner banner-overlay">
                  <Link
                    href="/shop/sidebar/list"
                    className="banner banner-menu"
                  >
                    <img src="/images/menu/banner-1.jpg" alt="Banner" />

                    <div className="banner-content banner-content-top">
                      <div className="banner-title text-white">
                        Last <br />
                        Chance
                        <br />
                        <span>
                          <strong>Sale</strong>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className={path?.indexOf("product/") > -1 ? "active" : ""}>
          <Link
            href="/product/default/dark-yellow-lace-cut-out-swing-dress"
            className="sf-with-ul"
          >
            Product
          </Link>

          <div className="megamenu megamenu-sm">
            <div className="row no-gutters">
              <div className="col-md-6">
                <div className="menu-col">
                  <div className="menu-title">Product Details</div>
                  <ul>
                    <li
                      className={
                        path?.indexOf("product/default") > -1 ? "active" : ""
                      }
                    >
                      <Link href="/product/default/dark-yellow-lace-cut-out-swing-dress">
                        Default
                      </Link>
                    </li>
                    <li
                      className={
                        path?.indexOf("product/centered") > -1 ? "active" : ""
                      }
                    >
                      <Link href="/product/centered/beige-ring-handle-circle-cross-body-bag">
                        Centered
                      </Link>
                    </li>
                    <li
                      className={
                        path?.indexOf("product/extended") > -1 ? "active" : ""
                      }
                    >
                      <Link href="/product/extended/yellow-tie-strap-block-heel-sandals">
                        <span>
                          Extended Info<span className="tip tip-new">New</span>
                        </span>
                      </Link>
                    </li>
                    <li
                      className={
                        path?.indexOf("product/gallery") > -1 ? "active" : ""
                      }
                    >
                      <Link href="/product/gallery/beige-metal-hoop-tote-bag">
                        Gallery
                      </Link>
                    </li>
                    <li
                      className={
                        path?.indexOf("product/sticky") > -1 ? "active" : ""
                      }
                    >
                      <Link href="/product/sticky/brown-faux-fur-longline-coat">
                        Sticky Info
                      </Link>
                    </li>
                    <li
                      className={
                        path?.indexOf("product/sidebar") > -1 ? "active" : ""
                      }
                    >
                      <Link href="/product/sidebar/beige-v-neck-button-cardigan">
                        Boxed With Sidebar
                      </Link>
                    </li>
                    <li
                      className={
                        path?.indexOf("product/fullwidth") > -1 ? "active" : ""
                      }
                    >
                      <Link href="/product/fullwidth/black-faux-leather-chain-trim-sandals">
                        Full Width
                      </Link>
                    </li>
                    <li
                      className={
                        path?.indexOf("product/masonry") > -1 ? "active" : ""
                      }
                    >
                      <Link href="/product/masonry/black-denim-dungaree-dress">
                        Masonry Sticky Info
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="banner banner-overlay">
                  <Link href="/product/centered/dark-yellow-lace-cut-out-swing-dress">
                    <img src="/images/menu/banner-2.jpg" alt="Banner" />

                    <div className="banner-content banner-content-bottom">
                      <div className="banner-title text-white">
                        New Trends
                        <br />
                        <span>
                          <strong>spring {new Date().getFullYear()}</strong>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className={path?.indexOf("pages") > -1 ? "active" : ""}>
          <Link href="#" className="sf-with-ul">
            Pages
          </Link>

          <ul>
            <li className={path?.indexOf("pages/about") > -1 ? "active" : ""}>
              <Link href="/pages/about" className="sf-with-ul">
                About
              </Link>

              <ul>
                <li
                  className={
                    path?.indexOf("pages/about") > -1 &&
                    path?.indexOf("pages/about-2") === -1
                      ? "active"
                      : ""
                  }
                >
                  <Link href="/pages/about">About 01</Link>
                </li>
                <li
                  className={
                    path?.indexOf("pages/about-2") > -1 ? "active" : ""
                  }
                >
                  <Link href="/pages/about-2">About 02</Link>
                </li>
              </ul>
            </li>
            <li className={path?.indexOf("pages/contact") > -1 ? "active" : ""}>
              <Link href="/pages/contact" className="sf-with-ul">
                Contact
              </Link>

              <ul>
                <li
                  className={
                    path?.indexOf("pages/contact") > -1 &&
                    path?.indexOf("pages/contact-2") === -1
                      ? "active"
                      : ""
                  }
                >
                  <Link href="/pages/contact">Contact 01</Link>
                </li>
                <li
                  className={
                    path?.indexOf("pages/contact-2") > -1 ? "active" : ""
                  }
                >
                  <Link href="/pages/contact-2">Contact 02</Link>
                </li>
              </ul>
            </li>
            <li className={path?.indexOf("pages/login") > -1 ? "active" : ""}>
              <Link href="/pages/login">Login</Link>
            </li>
            <li className={path?.indexOf("pages/faq") > -1 ? "active" : ""}>
              <Link href="/pages/faq">FAQs</Link>
            </li>
            <li className={path?.indexOf("404") > -1 ? "active" : ""}>
              <Link href="/404">Error 404</Link>
            </li>
            <li
              className={
                path?.indexOf("pages/coming-soon") > -1 ? "active" : ""
              }
            >
              <Link href="/pages/coming-soon">Coming Soon</Link>
            </li>
          </ul>
        </li>
        <li className={path?.indexOf("blog/") > -1 ? "active" : ""}>
          <Link href="/blog/classic" className="sf-with-ul">
            Blog
          </Link>

          <ul>
            <li className={path?.indexOf("blog/classic") > -1 ? "active" : ""}>
              <Link href="/blog/classic">Classic</Link>
            </li>
            <li className={path?.indexOf("blog/listing") > -1 ? "active" : ""}>
              <Link href="/blog/listing">Listing</Link>
            </li>
            <li className={path?.indexOf("blog/grid") > -1 ? "active" : ""}>
              <Link href="/blog/grid/2cols" className="sf-with-ul">
                Grid
              </Link>
              <ul>
                <li
                  className={
                    path?.indexOf("blog/grid/2cols") > -1 ? "active" : ""
                  }
                >
                  <Link href="/blog/grid/2cols">Grid 2 columns</Link>
                </li>
                <li
                  className={
                    path?.indexOf("blog/grid/3cols") > -1 ? "active" : ""
                  }
                >
                  <Link href="/blog/grid/3cols">Grid 3 columns</Link>
                </li>
                <li
                  className={
                    path?.indexOf("blog/grid/4cols") > -1 ? "active" : ""
                  }
                >
                  <Link href="/blog/grid/4cols">Grid 4 columns</Link>
                </li>
                <li
                  className={
                    path?.indexOf("blog/grid/sidebar") > -1 ? "active" : ""
                  }
                >
                  <Link href="/blog/grid/sidebar">Grid sidebar</Link>
                </li>
              </ul>
            </li>
            <li className={path?.indexOf("blog/masonry") > -1 ? "active" : ""}>
              <Link href="/blog/masonry/2cols" className="sf-with-ul">
                Masonry
              </Link>
              <ul>
                <li
                  className={
                    path?.indexOf("blog/masonry/2cols") > -1 ? "active" : ""
                  }
                >
                  <Link href="/blog/masonry/2cols">Masonry 2 columns</Link>
                </li>
                <li
                  className={
                    path?.indexOf("blog/masonry/3cols") > -1 ? "active" : ""
                  }
                >
                  <Link href="/blog/masonry/3cols">Masonry 3 columns</Link>
                </li>
                <li
                  className={
                    path?.indexOf("blog/masonry/4cols") > -1 ? "active" : ""
                  }
                >
                  <Link href="/blog/masonry/4cols">Masonry 4 columns</Link>
                </li>
                <li
                  className={
                    path?.indexOf("blog/masonry/sidebar") > -1 ? "active" : ""
                  }
                >
                  <Link href="/blog/masonry/sidebar">Masonry sidebar</Link>
                </li>
              </ul>
            </li>
            <li className={path?.indexOf("blog/mask") > -1 ? "active" : ""}>
              <Link href="/blog/mask/grid" className="sf-with-ul">
                Mask
              </Link>
              <ul>
                <li
                  className={
                    path?.indexOf("blog/mask/grid") > -1 ? "active" : ""
                  }
                >
                  <Link href="/blog/mask/grid">Blog Mask Grid</Link>
                </li>
                <li
                  className={
                    path?.indexOf("blog/mask/masonry") > -1 ? "active" : ""
                  }
                >
                  <Link href="/blog/mask/masonry">Blog Mask Masonry</Link>
                </li>
              </ul>
            </li>
            <li className={path?.indexOf("blog/single") > -1 ? "active" : ""}>
              <Link
                href="/blog/single/default/cras-ornare-tristique-elit."
                className="sf-with-ul"
              >
                Single Post
              </Link>
              <ul>
                <li
                  className={
                    path?.indexOf("blog/single/default") > -1 ? "active" : ""
                  }
                >
                  <Link href="/blog/single/default/cras-ornare-tristique-elit.">
                    Default with sidebar
                  </Link>
                </li>
                <li
                  className={
                    path?.indexOf("blog/single/fullwidth") > -1 ? "active" : ""
                  }
                >
                  <Link href="/blog/single/fullwidth/fusce-pellentesque-suscipit.">
                    Fullwidth no sidebar
                  </Link>
                </li>
                <li
                  className={
                    path?.indexOf("blog/single/sidebar") > -1 ? "active" : ""
                  }
                >
                  <Link href="/blog/single/sidebar/utaliquam-sollicitzdvudin-leo">
                    Fullwidth with sidebar
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className={path?.indexOf("element") > -1 ? "active" : ""}>
          <Link href="/elements" className="sf-with-ul">
            Elements
          </Link>

          <ul>
            <li
              className={
                path?.indexOf("elements/products") > -1 ? "active" : ""
              }
            >
              <Link href="/elements/products">Products</Link>
            </li>
            <li
              className={
                path?.indexOf("elements/typography") > -1 ? "active" : ""
              }
            >
              <Link href="/elements/typography">Typography</Link>
            </li>
            <li
              className={path?.indexOf("elements/titles") > -1 ? "active" : ""}
            >
              <Link href="/elements/titles">Titles</Link>
            </li>
            <li
              className={path?.indexOf("elements/banners") > -1 ? "active" : ""}
            >
              <Link href="/elements/banners">Banners</Link>
            </li>
            <li
              className={
                path?.indexOf("elements/categories") > -1 ? "active" : ""
              }
            >
              <Link href="/elements/categories">Product Category</Link>
            </li>
            <li
              className={
                path?.indexOf("elements/video-banners") > -1 ? "active" : ""
              }
            >
              <Link href="/elements/video-banners">Video Banners</Link>
            </li>
            <li
              className={path?.indexOf("elements/buttons") > -1 ? "active" : ""}
            >
              <Link href="/elements/buttons">Buttons</Link>
            </li>
            <li
              className={
                path?.indexOf("elements/accordions") > -1 ? "active" : ""
              }
            >
              <Link href="/elements/accordions">Accordions</Link>
            </li>
            <li className={path?.indexOf("elements/tabs") > -1 ? "active" : ""}>
              <Link href="/elements/tabs">Tabs</Link>
            </li>
            <li
              className={
                path?.indexOf("elements/testimonials") > -1 ? "active" : ""
              }
            >
              <Link href="/elements/testimonials">Testimonials</Link>
            </li>
            <li
              className={
                path?.indexOf("elements/blog-posts") > -1 ? "active" : ""
              }
            >
              <Link href="/elements/blog-posts">Blog Posts</Link>
            </li>
            <li className={path?.indexOf("elements/cta") > -1 ? "active" : ""}>
              <Link href="/elements/cta">Call to Action</Link>
            </li>
            <li
              className={
                path?.indexOf("elements/icon-boxes") > -1 ? "active" : ""
              }
            >
              <Link href="/elements/icon-boxes">Icon Boxes</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
