import { Jost, Manrope } from "next/font/google";
import "./globals.css";

import "@/public/css/bootstrap.min.css";
import "@/public/css/fonts-molla.min.css";
import "@/public/vendor/line-awesome/css/line-awesome.min.css";
import "@/public/scss/plugins/owl-carousel/owl.carousel.scss";

import "@/public/scss/style.scss";

import Layout from "@/components/custom-layout";
import Script from "next/script";
import { ReduxProvider } from "@/redux/provider";
import localFont from "next/font/local"

const avenirFont = localFont({
  src: "../public/fonts/avenir.woff2"
})

export const metadata = {
  title: {
    template: "%s | Mrkt",
    default: "Mrkt",
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
    </html>
  );
}
