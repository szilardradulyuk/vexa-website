import Nav from '../components/Nav.jsx'
import Pricing from '../components/Pricing.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import Footer from '../components/Footer.jsx'

export default function PricingPage() {
  return (
    <>
      <Nav />
      <div className="bg-dark py-16 px-6 text-center">
        <h1 className="font-display text-5xl text-white mb-4">Simple pricing</h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          One price. Everything included. No surprises.
        </p>
      </div>
      <Pricing />
      <FinalCTA />
      <Footer />
    </>
  )
}
