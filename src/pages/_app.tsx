import type { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyles } from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Trips</title>
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project to show my favorite spots in the world"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App