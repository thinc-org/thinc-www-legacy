import Head from 'next/head'

import Portal from '@/components/links/portal'
import Footer from '@/components/sections/footer'
import { nocoDBRequest } from '@/types/fetch'
import { ILinkRecord, NocoDBLinkRecord } from '@/types/links'

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
  const res = await nocoDBRequest('Links?&shuffle=0&offset=0')

  const linkRecords: ILinkRecord[] =
    ((await res.json()) as NocoDBLinkRecord).list
      ?.map((record) => {
        return {
          href: record.href,
          icon: record?.icon ?? null,
          order: record.order,
          title: record.title,
        } as ILinkRecord
      })
      .sort((a: ILinkRecord, b: ILinkRecord) => +a.order - +b.order) ?? []

  return {
    props: {
      links: linkRecords,
    },
    revalidate: 5 * 60,
  }
}

export default Links
