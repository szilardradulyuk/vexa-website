import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

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
    <nav className="sticky top-0 z-50 bg-white border-b border-[#E8E6E0]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-display text-[#0D0D0D] tracking-tight">
          <span className="text-[#2D7A3A]">V</span>exa
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-[#6B6B65] hover:text-[#0D0D0D] text-sm font-medium transition-colors"
          >
            How it works
          </a>
          <Link to="/pricing" className="text-[#6B6B65] hover:text-[#0D0D0D] text-sm font-medium transition-colors">
            Pricing
          </Link>
          <Link to="/book" className="text-[#6B6B65] hover:text-[#0D0D0D] text-sm font-medium transition-colors">
            Book a call
          </Link>
        </div>

        {/* CTA */}
        <motion.a
          href="#pricing"
          onClick={scrollToPricing}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="bg-[#2D7A3A] text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-[#236130] transition-colors"
        >
          Get started
        </motion.a>
      </div>
    </nav>
  )
}
