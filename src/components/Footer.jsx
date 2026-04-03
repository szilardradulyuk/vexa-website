import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="font-display text-lg text-white tracking-tight">
          <span className="text-green">V</span>exa
        </Link>

        <div className="flex items-center gap-6 text-sm text-white/50">
          <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link to="/book" className="hover:text-white transition-colors">Book a call</Link>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>

        <p className="text-white/30 text-sm">© 2025 Vexa. All rights reserved.</p>
      </div>
    </footer>
  )
}
