import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
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
        <body className="font-sans leading-normal text-base text-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
