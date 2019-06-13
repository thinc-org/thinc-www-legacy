import dynamic from 'next/dynamic'
import Head from 'next/head'

import { NavigationBarSpacer } from '../components/navigation-bar'
import Recruiting from '../components/announcements/recruiting'
import Hero from '../components/sections/hero'
import About from '../components/sections/about'
import Projects from '../components/sections/projects'
import Teams from '../components/sections/teams'
import Footer from '../components/sections/footer'

const Members = dynamic(() => import('../components/sections/members'), {
    ssr: false
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
