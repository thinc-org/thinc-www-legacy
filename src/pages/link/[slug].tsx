import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

import { nocoDBRequest } from '@/types/fetch'
import { NocoDBRedirectRecord } from '@/types/links'

export async function getStaticPaths() {
  const res = await nocoDBRequest('Redirects?&shuffle=0&offset=0')

  const records = ((await res.json()) as NocoDBRedirectRecord).list
  const links =
    records?.map((record) => {
      return {
        params: { slug: record.slug },
      }
    }) ?? []

  return {
    paths: links,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{
  link: string
}> = async ({ params }) => {
  const res = await nocoDBRequest('Redirects?&shuffle=0&offset=0')
  const records = ((await res.json()) as NocoDBRedirectRecord).list

  const links =
    records?.map((record) => {
      return {
        slug: record.slug,
        url: record.url,
      }
    }) ?? []

  const link = links?.find(({ slug }) => slug === params?.slug) ?? {
    slug: '',
    url: '',
  }
  return { props: { link: link?.url } }
}

export default function Link({ link }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  useEffect(() => {
    router.replace(link)
  }, [router, link])
  return null
}
