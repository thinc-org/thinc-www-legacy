import App from 'next/app'
import Head from 'next/head'
import React from 'react'

import { NavigationBar } from '@/components/navigation-bar'
import '@/resources/tailwind.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta name="google-site-verification" content="Rdku_VJ2ryBQB6Uh0Ti5j4RgcN-Y2X60HwFvFur-Llo" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Thinc. is a student-run community aiming to make impact to society. A student community committed to promoting real-world profession skills with the goal of incubating the leader of tomorrow."
          />
          <meta
            name="keywords"
            content="Chula Pop Bus, Thinc, วิศวะคอมพ์จุฬา, ise chula, chulalongkorn, วิศวะจุฬา, open registration, cu blood"
          />
          <meta httpEquiv="content-language" content="th,en" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
        <NavigationBar {...pageProps} />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
