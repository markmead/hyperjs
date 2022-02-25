import "../styles/globals.css";

import Head from "next/head";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
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
