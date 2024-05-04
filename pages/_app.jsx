import Head from 'next/head'

import 'prismjs/themes/prism-okaidia.css'
import '@style/site.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
