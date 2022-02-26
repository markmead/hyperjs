import "../styles/globals.css";

import Head from "next/head";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          src="https://www.googletagmanager.com/gtag/js?id=G-PNNXTVTRYX"
          async
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PNNXTVTRYX');
            `,
          }}
        />

        <script
          defer
          src="https://unpkg.com/alpinejs-slug@1.x.x/dist/slug.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
