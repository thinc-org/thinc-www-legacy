import dynamic from 'next/dynamic'
import Head from 'next/head'

import Recruiting from '@/components/announcements/recruiting'
import { NavigationBarSpacer } from '@/components/navigation-bar'
import About from '@/components/sections/about'
import Footer from '@/components/sections/footer'
import Hero from '@/components/sections/hero'
import Projects from '@/components/sections/projects'
import Teams from '@/components/sections/teams'

const Members = dynamic(() => import('@/components/sections/members'), {
  ssr: false,
})

const Index = () => (
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
    <Members />
    <Footer />
  </>
)

export default Index
