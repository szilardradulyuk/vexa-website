import Nav from '../components/Nav.jsx'
import Pricing from '../components/Pricing.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import Footer from '../components/Footer.jsx'

export default function PricingPage() {
  return (
    <>
      <Nav />
      <div className="bg-white py-16 px-6 text-center border-b border-[#E8E6E0]">
        <h1 className="font-display text-5xl text-[#0D0D0D] mb-4">Simple pricing</h1>
        <p className="text-[#6B6B65] text-lg max-w-xl mx-auto">
          One price. Everything included. No surprises.
        </p>
      </div>
      <Pricing />
      <FinalCTA />
      <Footer />
    </>
  )
}
