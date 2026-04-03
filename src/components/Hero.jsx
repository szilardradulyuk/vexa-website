import { Link } from 'react-router-dom'

const trustSignals = [
  'No lock-in contracts',
  'Live in 48 hours',
  '14-day results guarantee',
]

export default function Hero() {
  const scrollToPricing = (e) => {
    e.preventDefault()
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-dark text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Every lead replied to. Every booking filled. While you get on with the job.
        </h1>

        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Vexa automates your DMs, follow-ups and bookings across Instagram and Facebook — so you never miss a customer again.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#pricing"
            onClick={scrollToPricing}
            className="bg-green text-white font-medium px-8 py-4 rounded text-base hover:bg-green/90 transition-colors w-full sm:w-auto text-center"
          >
            See plans
          </a>
          <Link
            to="/book"
            className="border border-white/30 text-white font-medium px-8 py-4 rounded text-base hover:border-white/60 hover:bg-white/5 transition-colors w-full sm:w-auto text-center"
          >
            Book a free call
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          {trustSignals.map((signal) => (
            <div key={signal} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green flex-shrink-0" />
              <span className="text-white/60 text-sm">{signal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
