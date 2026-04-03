import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import SocialProof from '../components/SocialProof.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Features from '../components/Features.jsx'
import Pricing from '../components/Pricing.jsx'
import Objections from '../components/Objections.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />
      <Pricing />
      <Objections />
      <FinalCTA />
      <Footer />
    </>
  )
}
