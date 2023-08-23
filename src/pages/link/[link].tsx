import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

interface ILink {
  id: string
  slug: string
  url: string
}

const links: ILink[] = [
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

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const link = links.find(({ slug }) => slug === params.slug)
  return { props: { link } }
}

export default function Link({ link }: { link: ILink }) {
  const router = useRouter()
  useEffect(() => {
    router.replace(link.url)
  }, [router, link])
  return null
}
