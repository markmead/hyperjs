import Head from 'next/head'
import Script from 'next/script'
import { Inter } from 'next/font/google'

import 'prismjs/themes/prism-okaidia.css'
import '@style/site.css'
import '@style/prism.css'

import Footer from '@component/Footer'
import Header from '@component/Header'

export const metadata = {
  title: 'Free Open Source Alpine JS Components | HyperJS',
  description:
    'Free Alpine JS components that can be used in your next project.',
  openGraph: {
    title: 'Free Open Source Alpine JS Components | HyperJS',
    description:
      'Free Alpine JS components that can be used in your next project.',
    url: 'https://js.hyperui.dev/',
    siteName: 'HyperJS',
    type: 'website',
    images: ['https://js.hyperui.dev/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Open Source Alpine JS Components | HyperJS',
    description:
      'Free Alpine JS components that can be used in your next project.',
  },
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({ children }) {
  return (
    <html className="h-full scroll-smooth" lang="en" dir="ltr">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_KEY}`}
      />

      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GA_KEY}');
        `}
      </Script>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />

        <main className="bg-slate-900">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
