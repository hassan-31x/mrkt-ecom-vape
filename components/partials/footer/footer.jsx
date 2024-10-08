import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sanityAdminClient } from "@/sanity/lib/client";
import { toast } from "react-toastify";
import Image from "next/image";
import { sendReferFriendEmail } from "@/utils/referFriend";
import { useDispatch } from "react-redux";
import { updateDiscount } from "@/redux/slice/cartSlice";

function Footer() {
  const router = useRouter("");
  const [isBottomSticky, setIsBottomSticky] = useState(false);
  const [containerClass, setContainerClass] = useState("container");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();
  const dispatch = useDispatch();

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

  
  const handleLogout = () => {
    dispatch(updateDiscount(null))
    signOut()
  } 

  function handleBottomSticky() {
    setIsBottomSticky(
      router?.pathname?.includes("product/default") && window.innerWidth > 991
    );
  }

  const handleRefer = async (e) => {
    e.preventDefault();
    try {
      if (!email) {
        return;
      }
      if (!session) {
        router.push("/auth/masuk");
        return
      }
      if (email == session?.user?.email) {
        toast.error("You cannot refer yourself");
        return;
      } else {
        setLoading(true);
        const firstName = session.user.name.split(" ")?.[0]
        const lastName = session.user.name.split(" ")?.[1] || ''

        await sendReferFriendEmail(
          session.user.email,
          email,
          firstName,
          lastName,
          process.env.NEXT_PUBLIC_SITE_URL
        )
        toast.success("Referral sent successfully");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setEmail("");
      setLoading(false);
    }
  };

  return (
    <footer className="footer footer-1 bg-[#FCFCFC]">
      <div className="cta cta-horizontal bg-secondary">
        <div className={containerClass}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-5 offset-xl-1">
              <h3 className="cta-title text-white font-weight-normal mb-1 mb-lg-0">
              Dapatkan diskon besar!
              </h3>
              <p className="cta-desc font-weight-normal text-white">
              Bagikan ke teman untuk dapatkan diskon besar untuk order selanjutnya
              </p>
            </div>

            <div className="col-lg-6 col-xl-5">
              <form action="#">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control mr-0 border-0 font-weight-normal"
                    placeholder="Masukan email teman kamu"
                    aria-label="Email Adress"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-white font-weight-lighter !border-l !border-l-black"
                      disabled={loading}
                      type="button"
                      onClick={handleRefer}
                    >
                      {loading ? "Membagikan" : "Bagikan"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-middle text-black">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 col-xl-2-5col">
              <div className="widget widget-about">
                <Image
                  src="/images/home/header-logo-t.png"
                  className="footer-logo my-2 !w-[130px]"
                  alt="Footer Logo"
                  width={100}
                  height={31}
                />
                <p className="font-weight-normal mb-3">
                  {/* <br />{" "} */}
                </p>

                <div className="widget-about-info">

                  <div className="payment-info">
                    <span className="widget-about-title font-weight-normal">
                      Payment Method
                    </span>
                    <figure className="footer-payments">
                      <Image
                        src="/images/payments.png"
                        alt="Payment methods"
                        width={272}
                        height={20}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-2 col-xl-5col">
              <div className="widget">
                <h4 className="widget-titlefont-weight-lighter">
                Layanan Pelanggan
                </h4>

                <ul className="widget-list">
                  <li>
                    <Link href="/">Beranda</Link>
                  </li>
                  <li>
                    <Link href="/ejuice">E-liquid</Link>
                  </li>
                  <li>
                    <Link href="/informasi-penting">Informasi Penting</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-4 col-lg-2 col-xl-5col">
              <div className="widget">
                <h4 className="widget-titlefont-weight-lighter">
                Informasi
                </h4>

                <ul className="widget-list">
                  <li>
                    <Link href="/tentang-kami">Tentang Kami</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/kontak-kami">Kontak Kami</Link>
                  </li>
                  <li>
                    <Link href="/syarat-and-ketentuan">
                    Syarat & Ketentuan
                    </Link>
                  </li>
                  <li>
                    <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-4 col-lg-2 col-xl-5col">
              <div className="widget">
                <h4 className="widget-title font-weight-lighter">
                Akun Saya
                </h4>

                <ul className="widget-list">
                  <li>
                  {session ? (
                      <span
                        onClick={handleLogout}
                        className="!text-[#999999] cursor-pointer"
                      >
                        Keluar
                      </span>
                    ) : (

                      <Link href="/auth/masuk">Masuk</Link>
                      )}
                  </li>
                  <li>
                    <Link href="/keranjang">Lihat Keranjang</Link>
                  </li>
                  <li>
                    <Link href="/favorit">Favorit</Link>
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
            Copyright © {new Date().getFullYear()} Mrkt. All Rights
            Reserved.
          </p>

          <ul className="footer-menu">
            <li>
              <Link
                href="/syarat-and-ketentuan"
                className="font-weight-normal"
              >
                Syarat & Ketentuan
              </Link>
            </li>
            <li>
              <Link
                href="/kebijakan-privasi"
                className="font-weight-normal"
              >
                Kebijakan Privasi
              </Link>
            </li>
          </ul>

          <div className="social-icons social-icons-color">
            <span className="social-label font-weight-normal">
            Media Sosial
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
