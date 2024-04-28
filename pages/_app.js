import Script from "next/script";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/floating.css";
import "../public/assets/css/style.css";
import "../public/assets/css/main.css";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Script
            src="/assets/js/font-awesome.min.js"
            strategy="afterInteractive"
        />
          <Script
              src="/assets/js/isotope.min.js"
              strategy="afterInteractive"
          />
        <Component {...pageProps} />
      </>
  )
}

export default MyApp;
