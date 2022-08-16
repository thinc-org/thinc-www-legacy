import Head from 'next/head'

import Portal from '@/components/links/portal'
import Footer from '@/components/sections/footer'
import { ILinkRecord } from '@/types/links'

interface LinkProps {
  links: ILinkRecord[]
}

const Links = ({ links }: LinkProps) => {
  return (
    <>
      <Head>
        <title>Links from Thinc.</title>
      </Head>
      <Portal links={links} />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const requestHeaders: HeadersInit = new Headers()
  requestHeaders.set('Authorization', `Bearer ${process.env.AIRTABLE_API_KEY}`)
  requestHeaders.set('X-Airtable-Client-Secret', process.env.AIRTABLE_CLIENT_SECRET ?? '')

  const res = await fetch('https://api.airtable.com/v0/appTJRDfmc9EBSDvO/Links', {
    headers: requestHeaders,
  })

  const linkRecords: { href: string; Title: string }[] = (await res.json()).records.map(
    (record: { id: string; createdTime: string; fields: ILinkRecord }) => record.fields
  )

  return {
    props: {
      links: linkRecords.map((record) => {
        return { href: record.href, title: record.Title }
      }),
    },
    revalidate: 5 * 60,
  }
}

export default Links
