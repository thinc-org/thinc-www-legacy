import getSrc from 'get-src'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Parser from 'rss-parser'

import Recruiting from '../components/announcements/recruiting'
import { NavigationBarSpacer } from '../components/navigation-bar'
import About from '../components/sections/about'
import Footer from '../components/sections/footer'
import Hero from '../components/sections/hero'
import Medium from '../components/sections/medium'
import Projects from '../components/sections/projects'
import Teams from '../components/sections/teams'

const Members = dynamic(() => import('../components/sections/members'), {
  ssr: false,
})

const Index = ({ mediumFeed }) => (
  <>
    <Head>
      <title>Thinc.</title>
    </Head>
    <NavigationBarSpacer />
    <Recruiting />
    <Hero />
    <About />
    <Projects />
    <Teams />
    <Medium feeds={mediumFeed} />
    <Members />
    <Footer />
  </>
)

export default Index

export async function getStaticProps() {
  const parser = new Parser()
  const feed = await parser.parseURL('https://medium.com/feed/thinc-org')
  const processedFeed = feed.items.slice(0, 6).map((item) => {
    const imgSrc = getSrc(item['content:encoded']).replace('/1024/', '/400/')
    return {
      title: item.title,
      date: item.pubDate,
      creator: item.creator,
      link: item.link,
      imgSrc,
    }
  })

  return {
    props: { mediumFeed: processedFeed },
  }
}
