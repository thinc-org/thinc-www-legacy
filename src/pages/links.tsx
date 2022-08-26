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

interface AirtableRecord {
  id: string
  createdTime: string
  fields: ILinkRecord
}

export async function getStaticProps() {
  const requestHeaders: HeadersInit = new Headers()
  requestHeaders.set('Authorization', `Bearer ${process.env.AIRTABLE_API_KEY}`)
  requestHeaders.set('X-Airtable-Client-Secret', process.env.AIRTABLE_CLIENT_SECRET ?? '')

  const res = await fetch('https://api.airtable.com/v0/appTJRDfmc9EBSDvO/Links', {
    headers: requestHeaders,
  })

  const linkRecords: ILinkRecord[] = (await res.json()).records
    .map((record: AirtableRecord) => record.fields)
    .sort((a: ILinkRecord, b: ILinkRecord) => +a.order - +b.order)

  return {
    props: {
      links: linkRecords,
    },
    revalidate: 5 * 60,
  }
}

export default Links
