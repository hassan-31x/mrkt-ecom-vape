'use client'

import Reveal from "react-awesome-reveal";

// Import Custom Component
import OwlCarousel from "@/components/features/owl-carousel";
import NewCollection from "@/components/partials/home/new-collection";
import ProductThirteen from "@/components/features/products/product-thirteen";
import TopCollection from "@/components/partials/home/top-collection";
import NewsletterModal from "@/components/features/modals/newsletter-modal";

// Import Utils
import {
  fadeIn,
  brandSlider,
  fadeInUpShorter,
  blurIn,
  zoomInShorter,
} from "@/utils/data";
import { attrFilter } from "@/utils";

import Link from "next/link";
import Image from "next/image";

function HomePageComponent({ products, bestSellers, hotProducts }) {

  const loading = !!!products?.length;
  

  return (
    <div
      className={`main home-page skeleton-body skel-shop-products ${
        loading ? "" : "loaded"
      }`}
    >
      <section className="intro-section">
        <div className="intro-slider-container">
          <OwlCarousel
            adClass="intro-slider owl-nav-inside"
            options={{ nav: false, dots: true }}
          >
            <div
              className="intro-slide slide-image"
              style={{
                backgroundImage: "url(images/home/slides/1.jpg)",
                backgroundColor: "#f0f2fa",
              }}
            >
              <div className="intro-content">
                <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000}>
                  <h5 className="banner-subtitle font-weight-normal text-primary">
                    Best Beauty Offers
                  </h5>
                </Reveal>

                <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000}>
                  <h3 className="banner-title font-weight-lighter text-primary">
                    Selected Skincare
                    <br />
                    UP TO <span className="text-secondary">30% OFF</span>
                  </h3>
                </Reveal>

                <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000}>
                  <p className="banner-desc font-weight-normal text-primary mb-3">
                    Discover the best beauty offers and treats on some of your
                    <br />
                    favourite luxury beauty brands
                  </p>
                </Reveal>

                <Reveal keyframes={fadeInUpShorter} delay={500} duration={1000}>
                  <Link
                    href="/shop/sidebar/list"
                    className="btn btn-outline-secondary"
                  >
                    SHOP NOW<i className="icon-angle-right"></i>
                  </Link>
                </Reveal>
              </div>
            </div>

            <div
              className="intro-slide slide-image"
              style={{
                backgroundImage: "url(images/home/slides/2.jpg)",
                backgroundColor: "#f2f4fb",
              }}
            >
              <div className="intro-content">
                <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000}>
                  <h5 className="banner-subtitle font-weight-normal text-primary">
                    Buy More Save More
                  </h5>
                </Reveal>

                <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000}>
                  <h3 className="banner-title font-weight-lighter text-primary">
                    Bath & Shower
                    <br />
                    SAVE UP TO<span className="text-secondary"> 20%</span>
                  </h3>
                </Reveal>

                <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000}>
                  <p className="banner-desc font-weight-normal text-primary mb-3">
                    All the bathroom companions you need for shoulders,
                    <br />
                    knees and toes.
                  </p>
                </Reveal>

                <Reveal keyframes={fadeInUpShorter} delay={500} duration={1000}>
                  <Link
                    href="/shop/sidebar/list"
                    className="btn btn-outline-secondary"
                  >
                    SHOP NOW<i className="icon-angle-right"></i>
                  </Link>
                </Reveal>
              </div>
            </div>

            <div
              className="intro-slide intro-slide3 slide-image"
              style={{
                backgroundImage: "url(images/home/slides/3.jpg)",
                backgroundColor: "#f2f3f9",
              }}
            >
              <div className="intro-content">
                <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000}>
                  <h5 className="banner-subtitle font-weight-normal text-primary">
                    Beauty at Home
                  </h5>
                </Reveal>

                <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000}>
                  <h2 className="banner-title font-weight-lighter text-primary mb-0">
                    Organic Face Mask
                  </h2>
                </Reveal>

                <Reveal keyframes={fadeInUpShorter} delay={400} duration={1000}>
                  <h3 className="text-secondary font-weight-lighter">
                    SAVE 10%
                  </h3>
                </Reveal>

                <Reveal keyframes={fadeInUpShorter} delay={600} duration={1000}>
                  <h4 className="font-weight-light text-primary">
                    with code: natural10
                  </h4>
                </Reveal>

                <Reveal keyframes={fadeInUpShorter} delay={900} duration={1000}>
                  <Link
                    href="/shop/sidebar/list"
                    className="btn btn-outline-secondary"
                  >
                    SHOP NOW<i className="icon-angle-right"></i>
                  </Link>
                </Reveal>
              </div>
            </div>
          </OwlCarousel>

          <span className="slider-loader"></span>
        </div>
      </section>

      <Reveal keyframes={fadeIn} delay={200} duration={1000} triggerOnce>
        <section className="brand-section">
          <div className="container">
            <div className="heading heading-center">
              <h2 className="title font-weight-normal text-secondary-dark mb-3">
                Shop by Brands
              </h2>
            </div>

            <OwlCarousel adClass="owl-brand" options={brandSlider}>
              <a href="#" className="brand">
                <img
                  src="/images/brands/1.png"
                  alt="Brand Name"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                />
              </a>

              <a href="#" className="brand">
                <img
                  src="/images/brands/2.png"
                  alt="Brand Name"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                />
              </a>

              <a href="#" className="brand">
                <img
                  src="/images/brands/3.png"
                  alt="Brand Name"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                />
              </a>

              <a href="#" className="brand">
                <img
                  src="/images/brands/4.png"
                  alt="Brand Name"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                />
              </a>

              <a href="#" className="brand">
                <img
                  src="/images/brands/5.png"
                  alt="Brand Name"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                />
              </a>

              <a href="#" className="brand">
                <img
                  src="/images/brands/6.png"
                  alt="Brand Name"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                />
              </a>

              <a
                href="#"
                className="brand"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <img src="/images/brands/7.png" alt="Brand Name" />
              </a>
            </OwlCarousel>
          </div>
        </section>
      </Reveal>

      <Reveal keyframes={fadeIn} delay={200} duration={1000} triggerOnce>
        <TopCollection products={bestSellers} />
      </Reveal>

      <section className="banner-section banner-2cols-with-gap">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <Reveal
                keyframes={zoomInShorter}
                delay={200}
                duration={1000}
                triggerOnce
              >
                <div className="banner banner-1">
                  <figure className="mb-0 lazy-media">
                    <div className="lazy-overlay"></div>
                    <Image
                      alt="banner"
                      src="/images/home/banner/1-1.jpg"
                      width="700"
                      height="680"
                    />
                  </figure>

                  <div className="banner-content content-top">
                    <h3 className="banner-title font-weight-normal text-primary">
                      Beauty Kit
                    </h3>
                    <p className="font-weight-normal text-primary">
                      5 Deluxe samples for only
                    </p>
                    <div className="banner-info font-weight-normal text-primary">
                      $12,99
                      <br />
                      <span>+ Free Shipping</span>
                    </div>
                  </div>
                  <div className="banner-content content-bottom">
                    <Link
                      href={{
                        pathname: "/shop/sidebar/list",
                        query: { category: "beauty" },
                      }}
                      className="btn btn-link btn-link-primary"
                    >
                      SHOP NOW<i className="icon-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="col-md-5">
              <Reveal
                keyframes={zoomInShorter}
                delay={500}
                duration={1000}
                triggerOnce
              >
                <div className="banner banner-2 text-center">
                  <div className="banner-title font-weight-normal text-primary text-left">
                    For Perfect Face
                  </div>
                  <figure className="text-center lazy-media mb-0">
                    <div className="lazy-overlay"></div>
                    <Image
                      alt="banner"
                      src="/images/home/banner/1-2.jpg"
                      width="570"
                      height="395"
                    />
                  </figure>

                  <Link
                    href={{
                      pathname: "/shop/sidebar/list",
                      query: { category: "face" },
                    }}
                    className="btn btn-link d-inline-block btn-link-primary"
                  >
                    SHOP NOW<i className="icon-angle-right"></i>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Reveal keyframes={fadeIn} delay={200} duration={1000} triggerOnce>
        <NewCollection products={hotProducts} />
      </Reveal>

      <section className="banner-section banner-2cols">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-6">
              <Reveal
                keyframes={fadeIn}
                delay={200}
                duration={1000}
                triggerOnce
              >
                <div className="banner lazy-media">
                  <figure className="mb-0">
                    <div className="lazy-overlay"></div>
                    <Image
                      alt="banner"
                      src="/images/home/banner/2-1.jpg"
                      width="700"
                      height="680"
                    />
                  </figure>

                  <div className="banner-content">
                    <h3 className="banner-title font-weight-normal text-primary">
                      It's the gift we've been waiting for all year.
                    </h3>
                    <p className="font-weight-normal">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                      erat ut turpis.
                    </p>
                    <Link
                      href={{
                        pathname: "/shop/sidebar/list",
                        query: { category: "gift" },
                      }}
                      className="btn btn-outline-primary-2"
                    >
                      READ MORE<i className="icon-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="col-md-6">
              <Reveal
                keyframes={fadeIn}
                delay={300}
                duration={1000}
                triggerOnce
              >
                <div className="banner lazy-media">
                  <figure className="mb-0">
                    <div className="lazy-overlay"></div>
                    <Image
                      alt="banner"
                      src="/images/home/banner/2-2.jpg"
                      width="700"
                      height="680"
                    />
                  </figure>

                  {products?.length ? (
                    <>
                      {products.slice(1, 2).map((item, index) => (
                        <div
                          className={`hotspot-wrapper hotspot-1`}
                          key={"Dot:" + index}
                        >
                          <Link href="#" className="hotspot">
                            <i className="icon-plus"></i>
                          </Link>

                          <ProductThirteen product={item} />
                        </div>
                      ))}

                      {products?.slice(9, 10).map((item, index) => (
                        <div
                          className={`hotspot-wrapper hotspot-2`}
                          key={"Dot:" + index}
                        >
                          <Link href="#" className="hotspot">
                            <i className="icon-plus"></i>
                          </Link>

                          <ProductThirteen product={item} />
                        </div>
                      ))}

                      {products?.slice(6, 7).map((item, index) => (
                        <div
                          className={`hotspot-wrapper hotspot-3`}
                          key={"Dot:" + index}
                        >
                          <Link href="#" className="hotspot">
                            <i className="icon-plus"></i>
                          </Link>

                          <ProductThirteen product={item} />
                        </div>
                      ))}

                      {products?.slice(0, 1).map((item, index) => (
                        <div
                          className={`hotspot-wrapper hotspot-4`}
                          key={"Dot:" + index}
                        >
                          <Link href="#" className="hotspot">
                            <i className="icon-plus"></i>
                          </Link>

                          <ProductThirteen product={item} />
                        </div>
                      ))}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-section banner-3cols">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <Reveal
                keyframes={blurIn}
                delay={200}
                duration={1000}
                triggerOnce
              >
                <div className="banner">
                  <figure className="lazy-media">
                    <div className="lazy-overlay"></div>
                    <Image
                      alt="banner"
                      src="/images/home/banner/3-1.jpg"
                      width="700"
                      height="680"
                    />
                  </figure>

                  <div className="banner-content">
                    <h3 className="banner-title font-weight-normal text-primary">
                      Face
                      <br />
                      Cosmetics
                    </h3>
                    <p className="font-weight-normal">
                      The best products for all skin types
                    </p>
                    <Link
                      href={{
                        pathname: "/shop/sidebar/list",
                        query: { category: "face" },
                      }}
                      className="btn btn-link btn-link-primary"
                    >
                      SHOP NOW<i className="icon-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-4 col-sm-6">
              <Reveal
                keyframes={blurIn}
                delay={500}
                duration={1000}
                triggerOnce
              >
                <div className="banner">
                  <figure className="lazy-media">
                    <div className="lazy-overlay"></div>
                    <Image
                      alt="banner"
                      src="/images/home/banner/3-2.jpg"
                      width="700"
                      height="680"
                    />
                  </figure>

                  <div className="banner-content">
                    <h3 className="banner-title font-weight-normal text-primary">
                      Bath &<br />
                      Body
                    </h3>
                    <p className="font-weight-normal">
                      Products that protect skin 24/7
                    </p>
                    <Link
                      href={{
                        pathname: "/shop/sidebar/list",
                        query: { category: "bath-and-body" },
                      }}
                      className="btn btn-link btn-link-primary"
                    >
                      SHOP NOW<i className="icon-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-4 col-sm-6">
              <Reveal
                keyframes={blurIn}
                delay={700}
                duration={1000}
                triggerOnce
              >
                <div className="banner">
                  <figure className="lazy-media">
                    <div className="lazy-overlay"></div>
                    <Image
                      alt="banner"
                      src="/images/home/banner/3-3.jpg"
                      width="700"
                      height="680"
                    />
                  </figure>

                  <div className="banner-content">
                    <h3 className="banner-title font-weight-normal text-primary">
                      Hair Sytling &<br />
                      Treatments
                    </h3>
                    <p className="font-weight-normal">
                      Powerful formulas that bring out your best
                    </p>
                    <Link
                      href={{
                        pathname: "/shop/sidebar/list",
                        query: { category: "hair-styling" },
                      }}
                      className="btn btn-link btn-link-primary"
                    >
                      SHOP NOW<i className="icon-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Reveal
        keyframes={fadeInUpShorter}
        delay={300}
        duration={1000}
        triggerOnce
      >
        <section className="instagram-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 mb-md-2">
                <div className="row no-gutters">
                  <div className="col-6">
                    <figure className="instagram-feed mb-0 lazy-media">
                      <div className="lazy-overlay"></div>
                      <Image
                        alt="instagram"
                        src="/images/home/instagram/1.jpg"
                        width="226"
                        height="226"
                      />

                      <div className="instagram-feed-content">
                        <Link href="#">
                          <i className="icon-heart-o"></i>387
                        </Link>
                        <Link href="#">
                          <i className="icon-comments"></i>45
                        </Link>
                      </div>
                    </figure>
                  </div>

                  <div className="col-6">
                    <figure className="instagram-feed mb-0 lazy-media">
                      <div className="lazy-overlay"></div>
                      <Image
                        alt="instagram"
                        src="/images/home/instagram/2.jpg"
                        width="226"
                        height="226"
                      />

                      <div className="instagram-feed-content">
                        <Link href="#">
                          <i className="icon-heart-o"></i>387
                        </Link>
                        <Link href="#">
                          <i className="icon-comments"></i>45
                        </Link>
                      </div>
                    </figure>
                  </div>

                  <div className="col-6">
                    <figure className="instagram-feed mb-0 lazy-media">
                      <div className="lazy-overlay"></div>
                      <Image
                        alt="instagram"
                        src="/images/home/instagram/3.jpg"
                        width="226"
                        height="226"
                      />

                      <div className="instagram-feed-content">
                        <Link href="#">
                          <i className="icon-heart-o"></i>387
                        </Link>
                        <Link href="#">
                          <i className="icon-comments"></i>45
                        </Link>
                      </div>
                    </figure>
                  </div>

                  <div className="col-6">
                    <figure className="instagram-feed mb-0 lazy-media">
                      <div className="lazy-overlay"></div>
                      <Image
                        alt="instagram"
                        src="/images/home/instagram/4.jpg"
                        width="226"
                        height="226"
                      />

                      <div className="instagram-feed-content">
                        <Link href="#">
                          <i className="icon-heart-o"></i>387
                        </Link>
                        <Link href="#">
                          <i className="icon-comments"></i>45
                        </Link>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12 mb-2">
                <div className="banner">
                  <div className="banner-content">
                    <Link href="#" className="icon">
                      <i className="icon-instagram"></i>
                    </Link>
                    <h3 className="banner-title font-weight-normal text-primary">
                      Shop Instagram
                    </h3>
                    <p className="font-weight-normal">
                      Nullam malesuada erat ut turpis. Suspendisse urna nibh,
                      viverra non, semper suscipit.
                    </p>
                    <Link href="#" className="btn btn-link btn-link-primary">
                      FOLLOW US<i className="icon-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 mb-md-2">
                <div className="row no-gutters">
                  <div className="col-6">
                    <figure className="instagram-feed mb-0 lazy-media">
                      <div className="lazy-overlay"></div>
                      <Image
                        alt="instagram"
                        src="/images/home/instagram/5.jpg"
                        width="226"
                        height="226"
                      />

                      <div className="instagram-feed-content">
                        <Link href="#">
                          <i className="icon-heart-o"></i>387
                        </Link>
                        <Link href="#">
                          <i className="icon-comments"></i>45
                        </Link>
                      </div>
                    </figure>
                  </div>

                  <div className="col-6">
                    <figure className="instagram-feed mb-0 lazy-media">
                      <div className="lazy-overlay"></div>
                      <Image
                        alt="instagram"
                        src="/images/home/instagram/6.jpg"
                        width="226"
                        height="226"
                      />

                      <div className="instagram-feed-content">
                        <Link href="#">
                          <i className="icon-heart-o"></i>387
                        </Link>
                        <Link href="#">
                          <i className="icon-comments"></i>45
                        </Link>
                      </div>
                    </figure>
                  </div>

                  <div className="col-6">
                    <figure className="instagram-feed mb-0 lazy-media">
                      <div className="lazy-overlay"></div>
                      <Image
                        alt="instagram"
                        src="/images/home/instagram/7.jpg"
                        width="226"
                        height="226"
                      />

                      <div className="instagram-feed-content">
                        <Link href="#">
                          <i className="icon-heart-o"></i>387
                        </Link>
                        <Link href="#">
                          <i className="icon-comments"></i>45
                        </Link>
                      </div>
                    </figure>
                  </div>

                  <div className="col-6">
                    <figure className="instagram-feed mb-0 lazy-media">
                      <div className="lazy-overlay"></div>
                      <Image
                        alt="instagram"
                        src="/images/home/instagram/8.jpg"
                        width="226"
                        height="226"
                      />

                      <div className="instagram-feed-content">
                        <Link href="#">
                          <i className="icon-heart-o"></i>387
                        </Link>
                        <Link href="#">
                          <i className="icon-comments"></i>45
                        </Link>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal keyframes={fadeIn} delay={200} duration={1000} triggerOnce>
        <section className="icon-box-section">
          <div className="container">
            <hr />
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="icon-box-side">
                  <span className="icon-box-icon text-dark">
                    <i className="icon-truck"></i>
                  </span>

                  <div className="icon-box-content">
                    <h3 className="icon-box-title">Payment &amp; Delivery</h3>
                    <p>Free shipping for orders over $50</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="icon-box-side">
                  <figure className="icon-box-icon">
                    <img
                      src="/images/home/icons/icon-1.jpg"
                      alt="Icon"
                      width="28"
                      height="28"
                    />
                  </figure>

                  <div className="icon-box-content">
                    <h3 className="icon-box-title">Return &amp; Refund</h3>
                    <p>Free 100% money back guarantee</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="icon-box-side">
                  <figure className="icon-box-icon">
                    <img
                      src="/images/home/icons/icon-2.jpg"
                      alt="Icon"
                      width="28"
                      height="28"
                    />
                  </figure>

                  <div className="icon-box-content">
                    <h3 className="icon-box-title">Quality Support</h3>
                    <p>Alway online feedback 24/7</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="icon-box-side">
                  <figure className="icon-box-icon">
                    <img
                      src="/images/home/icons/icon-3.jpg"
                      alt="Icon"
                      width="28"
                      height="28"
                    />
                  </figure>

                  <div className="icon-box-content">
                    <h3 className="icon-box-title">Join Our Newsletter</h3>
                    <p>10% off by subscribing to our newsletter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal keyframes={fadeIn} delay={200} duration={1000} triggerOnce>
        <section className="testimonial-section">
          <h2 className="title text-center">Customer Reviews</h2>
          <OwlCarousel options={{ nav: false, dots: true }}>
            <blockquote className="testimonial text-center">
              <div className="ratings-container justify-content-center">
                <div className="ratings">
                  <div className="ratings-val" style={{ width: "100%" }}></div>
                  <span className="tooltip-text">5</span>
                </div>
              </div>
              <h5 className="subtitle font-weight-lighter text-primary">
                Morbi in sem quis dui placerat ...
              </h5>
              <p className="font-weight-normal text-dark">
                "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
                euismod in, pharetraa, ultricies in, diam. Nam dui mi, tincidunt
                quis, accumsan porttitor facilisis luctus metus"
              </p>
              <cite className="font-weight-normal text-dark">
                - Sakina Stout
              </cite>
            </blockquote>
            <blockquote className="testimonial text-center">
              <div className="ratings-container justify-content-center">
                <div className="ratings">
                  <div className="ratings-val" style={{ width: "100%" }}></div>
                  <span className="tooltip-text">5</span>
                </div>
              </div>
              <h5 className="subtitle font-weight-lighter text-primary">
                Cras ornare tristique elit ...
              </h5>
              <p className="font-weight-normal text-dark">
                "Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet,
                lectus arcu pulvinar risus, vitae facilisis libero dolor a
                purus. Sed vellacus. Mauris nibh felis, adipiscing varius,
                adipiscing in, lacinia vel, tellus."
              </p>
              <cite className="font-weight-normal text-dark">
                - Antony Tanner
              </cite>
            </blockquote>
            <blockquote className="testimonial text-center">
              <div className="ratings-container justify-content-center">
                <div className="ratings">
                  <div className="ratings-val" style={{ width: "100%" }}></div>
                  <span className="tooltip-text">5</span>
                </div>
              </div>
              <h5 className="subtitle font-weight-lighter text-primary">
                Suspendisse mauris ...
              </h5>
              <p className="font-weight-normal text-dark">
                "Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a
                diam sit amet mi ullamcorper vehicula. Integer adipiscing risus
                a sem. Mullam quis massa sit amet ribh viverra malesuada."
              </p>
              <cite className="font-weight-normal text-dark">- Maximus J</cite>
            </blockquote>
          </OwlCarousel>
        </section>
      </Reveal>

      <NewsletterModal />
    </div>
  );
}

export default HomePageComponent;
