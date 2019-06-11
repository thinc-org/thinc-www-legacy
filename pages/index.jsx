import { NavigationBarSpacer } from '../components/navigation-bar'
import Recruiting from '../components/announcements/recruiting'
import Hero from '../components/sections/hero'
import About from '../components/sections/about'
import Projects from '../components/sections/projects'
import Teams from '../components/sections/teams'
import Footer from '../components/sections/footer'

const Index = () => (
    <>
        <NavigationBarSpacer />
        <Recruiting />
        <Hero />
        <About />
        <Projects />
        <Teams />
        <Footer />
    </>
)

export default Index
