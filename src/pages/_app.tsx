import App from 'next/app'
import Head from 'next/head'
import React from 'react'

import { NavigationBar } from '@/components/navigation-bar'
import '@/resources/tailwind.css'

//2
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta name="google-site-verification" content="Rdku_VJ2ryBQB6Uh0Ti5j4RgcN-Y2X60HwFvFur-Llo" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="title" content="Thinc." />
          <meta
            name="description"
            content="Thinc. is a student-run community aiming to make impact to society. A student community committed to promoting real-world profession skills with the goal of incubating the leader of tomorrow."
          />
          <meta
            name="keywords"
            content="Chula Pop Bus, Thinc, วิศวะคอมพ์จุฬา, ise chula, chulalongkorn, วิศวะจุฬา, open registration, cu blood"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta httpEquiv="content-language" content="th,en" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://thinc.in.th/" />
          <meta property="og:title" content="Thinc." />
          <meta
            property="og:description"
            content="Thinc. is a student-run community aiming to make impact to society. A student community committed to promoting real-world profession skills with the goal of incubating the leader of tomorrow."
          />
          <meta property="og:image" content="/banner.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://thinc.in.th/" />
          <meta property="twitter:title" content="Thinc." />
          <meta
            property="twitter:description"
            content="Thinc. is a student-run community aiming to make impact to society. A student community committed to promoting real-world profession skills with the goal of incubating the leader of tomorrow."
          />
          <meta property="twitter:image" content="/banner.png" />
        </Head>
        <NavigationBar {...pageProps} />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
