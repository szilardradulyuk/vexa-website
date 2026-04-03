import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function BookPage() {
  return (
    <>
      <Nav />
      <section className="bg-offwhite min-h-screen py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-display text-5xl text-dark mb-5">
            Book a free 20-minute call
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-12">
            We'll look at your business, tell you exactly which plan fits, and show you how Vexa works. No pitch. No pressure.
          </p>

          {/* Calendly placeholder */}
          <div
            className="border-2 border-dashed border-border rounded-xl flex items-center justify-center text-muted text-sm"
            style={{ minHeight: 500 }}
          >
            Calendly embed goes here
          </div>

          <p className="text-muted text-sm mt-8">
            Most businesses are live within 48 hours of signing up.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
