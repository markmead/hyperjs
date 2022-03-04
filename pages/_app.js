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
          src="https://unpkg.com/@alpinejs/collapse@3.x.x/dist/cdn.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs-money@1.0.0/dist/money.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs-sticky@1.x.x/dist/sticky.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs-slug@1.x.x/dist/slug.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>

        <title>Examples | Alpine JS Snippets | HyperJS</title>
        <meta
          name="description"
          content="Examples of common snippets functionality built with Alpine JS."
          key="description"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hyperjs.dev" />
        <meta
          property="og:title"
          content="Examples | Alpine JS Snippets | HyperJS"
          key="og:title"
        />
        <meta
          property="og:description"
          content="Examples of common snippets functionality built with Alpine JS."
          key="og:description"
        />
        <meta property="og:image" content="https://www.hyperjs.dev/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.hyperjs.dev" />
        <meta
          name="twitter:title"
          content="Examples | Alpine JS Snippets | HyperJS"
          key="twitter:title"
        />
        <meta
          name="twitter:description"
          content="Examples of common snippets functionality built with Alpine JS."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://www.hyperjs.dev/og.png" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
