"use client"

import OwlCarousel from "@/components/features/owl-carousel";
import urlFor from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/features/rich-text-component";

import { homeData, mainSlider5, mainSlider9 } from "@/utils/data";
import Image from "next/image.js";
import Link from "next/link";

function AboutPageComponent({ about }) {
  const socialIcons = {
    facebook: "icon-facebook-f",
    twitter: "icon-twitter",
    instagram: "icon-instagram",
  }

  return (
    <div className="main">
      <nav className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">About us</li>
          </ol>
        </div>
      </nav>

      <div className="container">
        <div
          className="page-header page-header-big text-center"
          style={{ backgroundImage: urlFor(about?.bannerImage)?.url() }}
        >
          <h1 className="page-title text-white">
            About us<span className="text-white">Who we are</span>
          </h1>
        </div>
      </div>

      <div className="page-content pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <h2 className="title">{about?.heading1}</h2>
              <p>
              <PortableText
            value={about?.description1}
            components={RichTextComponents}
          />{" "}
              </p>
            </div>

            <div className="col-lg-6">
              <h2 className="title">{about?.heading2}</h2>
              <p>
              <PortableText
            value={about?.description2}
            components={RichTextComponents}
          />{" "}
              </p>
            </div>
          </div>

          <div className="mb-5"></div>
        </div>

        <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mb-3 mb-lg-0">
                <h2 className="title">{about.heading3}</h2>
                <p className="lead text-primary mb-3">
                <PortableText
            value={about?.subText2}
            components={RichTextComponents}
          />
                </p>
                <p className="mb-2">
                <PortableText
            value={about?.description3}
            components={RichTextComponents}
          />{" "}
                </p>

                <Link
                  href="/benefits"
                  className="btn btn-sm btn-minwidth btn-outline-primary-2"
                >
                  <span>VIEW OUR BLOGS</span>
                  <i className="icon-long-arrow-right"></i>
                </Link>
              </div>

              <div className="col-lg-6 offset-lg-1">
                <div className="about-images">
                  <img
                    src={urlFor(about?.subImage1)?.url()}
                    height="400px"
                    alt=""
                    className="about-img-front !h-[400px]"
                  />
                  <img
                    src={urlFor(about?.subImage2)?.url()}
                    height="400px"
                    alt=""
                    className="about-img-back !h-[400px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="brands-text">
                <h2 className="title">
                  {about?.benefitsHeading}
                </h2>
                <p>
                <PortableText
            value={about?.benefitsDescription}
            components={RichTextComponents}
          />
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="brands-display">
                <div className="row justify-content-center">
                  {about?.benefitsLogos?.map((brand, index) => (
                    <div className="col-6 col-sm-4" key={index}>
                      <Link href="#" className="brand">
                        <img src={urlFor(brand?.logo)?.url()} alt="Brand Name" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-4 mb-6" />

          <h2 className="title text-center mb-4">Meet Our Team</h2>

          <OwlCarousel adClass="owl-simple" options={mainSlider9}>
            {about?.ourTeam?.map((team, index) => (

            <div className="member member-anim text-center">
              <figure className="member-media">
                <div className="lazy-overlay"></div>
                <Image
                  alt="member"
                  src={urlFor(team?.image)?.url()}
                  height={500}
                  width={376}
                />

                <figcaption className="member-overlay">
                  <div className="member-overlay-content">
                    <h3 className="member-title">
                      {team?.name}<span>{team?.role}</span>
                    </h3>
                    <p>
                      {team?.description}
                    </p>
                    <div className="social-icons social-icons-simple">
                      {team?.social?.map((social, index) => (

                        
                        <Link href={social?.link} className="social-icon" title={social?.icon}>
                        <i className={socialIcons?.[social?.icon]}></i>
                      </Link>
                          ))}
                    </div>
                  </div>
                </figcaption>
              </figure>

              <div className="member-content">
                <h3 className="member-title">
                  {team?.name}
                  <span>{team?.role}</span>
                </h3>
              </div>
            </div>
            ))}

          </OwlCarousel>
        </div>

        <div className="mb-2"></div>

        <div
          className="about-testimonials bg-light-2 pt-6 pb-6 position-relative"
          style={{ marginBottom: "-1px" }}
        >
          <div className="container">
            <h2 className="title text-center mb-3">
              What Customer Say About Us
            </h2>

            <OwlCarousel options={{ nav: false, dots: true }}>
            {about?.reviews?.map((review, index) => (
              <blockquote className="testimonial text-center">
                <div className="ratings-container justify-content-center">
                  <div className="ratings">
                    <div
                      className="ratings-val"
                      style={{ width: review?.stars * 20 + "%" }}
                    ></div>
                    <span className="tooltip-text">
                      {review?.stars?.toFixed(2)}
                    </span>
                  </div>
                </div>
                <h5 className="subtitle font-weight-lighter text-primary">
                  {review?.heading}
                </h5>
                <p className="font-weight-normal text-dark">&rsquo;{review?.text}&rsquo;</p>
                <cite className="font-weight-normal text-dark">
                  - {review?.reviewerName}
                </cite>
                <p className="font-weight-normal text-dark">
                  {review?.country}
                </p>
              </blockquote>
            ))}
          </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPageComponent;
