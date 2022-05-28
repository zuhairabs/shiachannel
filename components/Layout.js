import React from "react";
import Head from "next/head";
import { Footer, Preloader, Header, Switcher } from "./common";

export default function Layout({ children, footer = null, header = null }) {
  return (
    <>
      <Head>
        {/* <!-- Meta Data --> */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Shia Channel" />
        <title>Shiachannel - Spreading the Message of Velayat</title>
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://shiachannel.in" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Shiachannel - Spreading the Message of Velayat"
        />
        <meta
          property="og:description"
          content="Shiachannel - Spreading the Message of Velayat"
        />
        <meta property="og:url" content="https://shiachannel.in" />
        <meta property="og:site_name" content="Shiachannel" />
        <meta
          property="og:image"
          content="https://shiachannel.in/assets/images/icons/apple-icon.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Shia Channel - Spreading the Message of Velayat",
  "alternateName": "Spreading the Message of Velayat",
  "url": "https://shiachannel.in",
  "logo": "https://shiachannel.in/assets/images/icons/apple-icon.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "9022122553",
    "contactType": "customer service",
    "areaServed": ["IN","IR","IQ","150","142","YE","TR","SE","SA","RU","PK","OM","NO","LB","DE","GH","EG","BD","BH","AZ","AF","US","GB","CA"],
    "availableLanguage": ["Arabic","Azerbaijani","Persian","Hindi","Urdu"]
  },
  "sameAs": [
    "https://www.facebook.com/shiachannel110/",
    "https://twitter.com/shia_channel?lang=en",
    "https://www.instagram.com/syed_shoeb_raza/",
    "https://www.youtube.com/channel/UCb-4Mr8FtL34-v4mM3E8hiA",
    "https://shiachannel.in"
  ]
}
</script> */}

        {/* <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-1W3DD5VDNG"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-1W3DD5VDNG');
    </script> */}

        {/* <!-- Meta Data --> */}
        {/* <!-- Favicon --> */}
        <link rel="shortcut icon" href="assets/images/icons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="assets/images/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="assets/images/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="assets/images/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="assets/images/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="assets/images/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="assets/images/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="assets/images/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="assets/images/icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/images/icons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="assets/images/icons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/images/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="assets/images/icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/images/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="assets/images/icons/manifest.json" />
        <meta name="msapplication-TileColor" content="#088998" />
        <meta
          name="msapplication-TileImage"
          content="assets/images/icons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#088998" />

        {/* <!-- Links --> */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />
      </Head>

      <Switcher />
      <Preloader />

      {/* <!-- start page-wrapper --> */}
      {header && <div id="container">{children}</div>}
      {!header && (
        <div className="page-wrapper">
          <Header />
          {children}
          {!footer && <Footer />}
        </div>
      )}
    </>
  );
}
