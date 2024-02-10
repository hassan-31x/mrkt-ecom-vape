"use client";

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Cookie from "js-cookie";
import Image from "next/image";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(51,51,51,0.6)",
    zIndex: "10001",
  },
};

Modal.setAppElement("body");

function ReferFriendModal() {
  const [open, setOpen] = useState(false);
  const [doNotShow, setDoNotShow] = useState(false);

  useEffect(() => {
    let timer;
    (Cookie.get(`hideNewsletter-mrkt`) || !Cookie.get(`hideConfirm-mrkt`)) ||
      (timer = setTimeout(() => {
        setOpen(true);
      }, 10000));

    return () => {
      timer && clearTimeout(timer);
    };
  }, []);

  function closeModal(e) {
    document
      .getElementById("newsletter-popup-form")
      .classList.remove("ReactModal__Content--after-open");

    if (document.querySelector(".ReactModal__Overlay")) {
      document.querySelector(".ReactModal__Overlay").style.opacity = "0";
    }

    setTimeout(() => {
      setOpen(false);
      doNotShow &&
        Cookie.set(`hideNewsletter-mrkt`, "true", {
          expires: 7,
        });
    }, 350);
  }

  function handleChange(e) {
    setDoNotShow(e.target.checked);
  }

  return (
    <Modal
      isOpen={open}
      onRequestClose={closeModal}
      style={customStyles}
      shouldReturnFocusAfterClose={false}
      contentLabel="Newsletter Modal"
      className="container newsletter-popup-container h-auto"
      overlayClassName="d-flex align-items-center justify-content-center newsletter-modal"
      id="newsletter-popup-form"
    >
      <div className="modal-content overflow-hidden">
        <div className="row justify-content-center position-relative">
          <div className="col-12">
            <div className="row no-gutters bg-white newsletter-popup-content">
              <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
                <div className="banner-content text-center">
                  <img
                    src="/images/home/header-logo-t.png"
                    alt="logo"
                    className="logo"
                    width="100"
                    height="15"
                  />
                  <h2 className="banner-title">
                    get{" "}
                    <span>
                      25<span style={{ fontWeight: "400" }}>%</span>
                    </span>{" "}
                    off
                  </h2>
                  <p>
                    Refer to a fried and get amazing discount on your next order!
                  </p>

                  <form action="#">
                    <div className="input-group input-group-round">
                      <input
                        type="email"
                        className="form-control form-control-white"
                        placeholder="Your Friend's Email Address"
                        aria-label="Email Adress"
                        required
                      />
                      <div className="input-group-append">
                        <button className="btn" type="submit">
                          <span>go</span>
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="custom-control custom-checkbox pl-4 ml-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="register-policy"
                      onChange={handleChange}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="register-policy"
                    >
                      Do not show this popup again
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-xl-2-5col col-lg-5 d-none d-lg-block">
                <div className="lazy-overlay"></div>
                <Image
                  alt="newsletter"
                  src="/images/popup/newsletter/img-1.jpg"
                  width={396}
                  height={420}
                  className="newsletter-img"
                />
              </div>
            </div>
          </div>
          <button
            title="Close (Esc)"
            type="button"
            className="mfp-close"
            onClick={closeModal}
          >
            <span>×</span>
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ReferFriendModal;
