import App, { Container } from 'next/app'
import React from 'react'

import { NavigationBar } from '../components/navigation-bar'
import '../resources/tailwind.css'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <NavigationBar {...pageProps} />
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
