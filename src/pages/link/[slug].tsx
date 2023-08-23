import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

const links = [
  {
    id: '1',
    slug: 'first_meet_evaluation',
    url: 'https://db.thinc.in.th/dashboard/#/nc/form/27083fe2-d533-4326-8d64-272676614d35',
  },
]

export async function getStaticPaths() {
  return {
    paths: links.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{
  link: string
}> = async ({ params }) => {
  const link = links?.find(({ slug }) => slug === params?.slug) ?? {
    id: '',
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
