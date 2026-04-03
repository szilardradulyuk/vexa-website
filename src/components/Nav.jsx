import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate()

  const scrollToPricing = (e) => {
    e.preventDefault()
    const el = document.getElementById('pricing')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#pricing')
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-dark border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-display text-white tracking-tight">
          <span className="text-green">V</span>exa
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            How it works
          </a>
          <Link to="/pricing" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
            Pricing
          </Link>
          <Link to="/book" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
            Book a call
          </Link>
        </div>

        {/* CTA */}
        <a
          href="#pricing"
          onClick={scrollToPricing}
          className="bg-green text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-green/90 transition-colors"
        >
          Get started
        </a>
      </div>
    </nav>
  )
}
