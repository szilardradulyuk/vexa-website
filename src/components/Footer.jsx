import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E8E6E0] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="font-display text-lg text-[#0D0D0D] tracking-tight">
          <span className="text-[#2D7A3A]">V</span>exa
        </Link>

        <div className="flex items-center gap-6 text-sm text-[#6B6B65]">
          <Link to="/pricing" className="hover:text-[#0D0D0D] transition-colors">Pricing</Link>
          <Link to="/book" className="hover:text-[#0D0D0D] transition-colors">Book a call</Link>
          <a href="#" className="hover:text-[#0D0D0D] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#0D0D0D] transition-colors">Terms</a>
        </div>

        <p className="text-[#A8A8A0] text-sm">© 2025 Vexa. All rights reserved.</p>
      </div>
    </footer>
  )
}
