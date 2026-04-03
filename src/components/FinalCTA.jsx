import { Link } from 'react-router-dom'

export default function FinalCTA() {
  const scrollToPricing = (e) => {
    e.preventDefault()
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-dark py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
          Ready to stop missing leads?
        </h2>
        <p className="text-white/60 mb-10 leading-relaxed">
          Every unanswered DM is a booking someone else gets. Vexa makes sure that never happens again.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            onClick={scrollToPricing}
            className="bg-green text-white font-medium px-8 py-4 rounded hover:bg-green/90 transition-colors w-full sm:w-auto text-center"
          >
            See plans
          </a>
          <Link
            to="/book"
            className="border border-white/30 text-white font-medium px-8 py-4 rounded hover:border-white/60 hover:bg-white/5 transition-colors w-full sm:w-auto text-center"
          >
            Book a free call
          </Link>
        </div>
      </div>
    </section>
  )
}
