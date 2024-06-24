import Script from "next/script";
import { Jost, Manrope } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";

import "@/public/css/bootstrap.min.css";
import "@/public/css/fonts-molla.min.css";
import "@/public/vendor/line-awesome/css/line-awesome.min.css";
import "@/public/scss/plugins/owl-carousel/owl.carousel.scss";

import "@/public/scss/style.scss";

import Layout from "@/components/custom-layout";
import { ReduxProvider } from "@/redux/provider";
import localFont from "next/font/local"

const avenirFont = localFont({
  // src: "../public/fonts/avenir.woff2"
  src: "../public/fonts/noir.woff2"
})

export const metadata = {
  title: {
    template: "%s | mrkt.",
    default: "mrkt.",
  },
  description: "The best place to buy healthy Vape Products.",
};

const jost = Jost({
  subsets: ["latin-ext"],
  variable: "font-family",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin-ext"],
  variable: "second-font-family",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    // <html lang="en" className={`${jost.variable} ${manrope.variable}`}>
    <html lang="en" className={avenirFont.className}>
      <body>
        <ReduxProvider>
          <Layout>{children}</Layout>
        </ReduxProvider>

        <Script src="/js/jquery.min.js" />
      </body>
      <GoogleAnalytics gaId="GTM-NZVHDSM7" />
    </html>
  );
}
