import Head from 'next/head'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

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

      <Ads />
    </>
  )
}

function Ads() {
  const routerPathname = usePathname()

  useEffect(() => {
    const newScript = document.createElement('script')

    newScript.src = 'https://media.ethicalads.io/media/client/ethicalads.min.js'
    newScript.async = true

    document.body.appendChild(newScript)
  }, [routerPathname])
}