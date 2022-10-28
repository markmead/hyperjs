import Head from 'next/head'

import '@/styles/tailwind.css'
import 'prismjs/themes/prism-okaidia.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Alpine Official Plugins */}
        <script
          defer
          src="https://unpkg.com/@alpinejs/mask@3.x.x/dist/cdn.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/@alpinejs/collapse@3.x.x/dist/cdn.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/@alpinejs/persist@3.x.x/dist/cdn.min.js"
        ></script>

        {/* Alpine Community Plugins */}
        <script
          defer
          src="https://unpkg.com/alpinejs-persist-extended@1.x.x/dist/storage.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs-money@1.x.x/dist/money.min.js"
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
          src="https://unpkg.com/alpinejs-textarea-grow@1.x.x/dist/grow.min.js"
        ></script>

        {/* Alpine Core */}
        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>

        {/* Flatpickr */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://npmcdn.com/flatpickr/dist/themes/dark.css"
        />

        <script defer src="https://cdn.jsdelivr.net/npm/flatpickr"></script>

        <title>Free Open Source Alpine JS Components | HyperJS</title>
        <meta
          name="description"
          content="Free Alpine JS components that provide reusable and common functionality that can be used in your next project."
          key="description"
        />
        <meta
          property="og:title"
          content="Free Open Source Alpine JS Components | HyperJS"
          key="og:title"
        />
        <meta
          property="og:description"
          content="Free Alpine JS components that provide reusable and common functionality that can be used in your next project."
          key="og:description"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://js.hyperui.dev/" />
        <meta property="og:image" content="https://js.hyperui.dev/og.jpg" />
        <meta
          name="twitter:title"
          content="Free Open Source Alpine JS Components | HyperJS"
          key="twitter:title"
        />
        <meta
          name="twitter:description"
          content="Free Alpine JS components that provide reusable and common functionality that can be used in your next project."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://js.hyperui.dev/og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://js.hyperui.dev/" />
      </Head>

      <Header />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  )
}

export default MyApp
