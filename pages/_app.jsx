import Head from "next/head";
import "../styles/globals.css";
import "../styles/das_siswa.css";
import "../styles/homepage.css";
import "../styles/profil.css";
import "../styles/login_siswa.css";
import "../styles/raport.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  // const [showing, setShowing] = useState(false);

  // useEffect(() => {
  //   setShowing(true);
  // }, []);

  // if (!showing) {
  //   return null;
  // }

  // if (typeof window === "undefined") {
  //   return <></>;
  // } else {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      // delay: 50,
    });
  });
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
          crossOrigin="anonymous"
        />

        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      <Component {...pageProps} />
      <Script src="retina-1.3.0/ "></Script>
      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
        integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
        crossOrigin="anonymous"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js"
        integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy"
        crossOrigin="anonymous"
      ></Script>
      <Script src="libraries/bootstrap-4.6.1-dist/js/bootstrap.min.js"></Script>

      {/* <script>AOS.init()</script> */}
    </>
  );
}
// }

export default MyApp;
