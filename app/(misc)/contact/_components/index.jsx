"use client"

import urlFor from "@/sanity/lib/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/features/rich-text-component";
import { sanityAdminClient } from "@/sanity/lib/client";
import { useState } from "react";

const initialState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

function ContactPageComponent({ contact }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  // Event handler for form submission (optional)
  const handleSubmit = async () => {
    // const { name, }
    await sanityAdminClient.create({
      _type: 'contactQuestions',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    })
    setFormData(initialState)
  };
  return (
    <div className="main">
      <nav className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Contact us</li>
          </ol>
        </div>
      </nav>

      <div className="container">
        <div
          className="page-header page-header-big text-center"
          style={{ backgroundImage: urlFor(contact?.bannerImage)?.url() }}
        >
          <h1 className="page-title text-white">
            Contact us<span className="text-white">keep in touch with us</span>
          </h1>
        </div>
      </div>

      <div className="page-content pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-2 mb-lg-0">
              <h2 className="title mb-1">Contact Information</h2>
              <p className="mb-3">
                <PortableText
                  value={contact?.contactDescription}
                  components={RichTextComponents}
                />
              </p>
              {/* <div className="row">
                <div className="col-sm-7">
                  <div className="contact-info">
                    <h3>The Office</h3>

                    <ul className="contact-list">
                      <li>
                        <i className="icon-map-marker"></i>
                        70 Washington Square South New York, NY 10012, United
                        States
                      </li>
                      <li>
                        <i className="icon-phone"></i>
                        <a href="tel:#">+92 423 567</a>
                      </li>
                      <li>
                        <i className="icon-envelope"></i>
                        <a href="mailto:#">info@Molla.com</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-sm-5">
                  <div className="contact-info">
                    <h3>The Office</h3>

                    <ul className="contact-list">
                      <li>
                        <i className="icon-clock-o"></i>
                        <span className="text-dark">Monday-Saturday</span>{" "}
                        <br />
                        11am-7pm ET
                      </li>
                      <li>
                        <i className="icon-calendar"></i>
                        <span className="text-dark">Sunday</span> <br />
                        11am-6pm ET
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-lg-6">
              <h2 className="title mb-1">Got Any Questions?</h2>
              <p className="mb-2">
                Use the form below to get in touch with the sales team
              </p>

              <form className="contact-form mb-3">
      <div className="row">
        <div className="col-sm-6">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name *"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="col-sm-6">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="col-sm-6">
          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor="message" className="sr-only">
        Message
      </label>
      <textarea
        className="form-control"
        cols="30"
        rows="4"
        id="message"
        required
        placeholder="Message *"
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <button
        type="button"
        className="btn btn-outline-primary-2 btn-minwidth-sm"
        onClick={handleSubmit}
      >
        <span>SUBMIT</span>
        <i className="icon-long-arrow-right"></i>
      </button>
    </form>
            </div>
          </div>

          <hr className="mt-4 mb-5" />
        </div>
      </div>
    </div>
  );
}

export default ContactPageComponent;
