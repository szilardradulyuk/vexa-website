import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const scrollToPricing = (e) => {
    e.preventDefault()
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-white py-24 px-6 border-t border-[#E8E6E0]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl text-[#0D0D0D] mb-6">
          Stop leaving money in your DMs.
        </h2>
        <p className="text-[#6B6B65] mb-10 leading-relaxed">
          Every unanswered message is a booking someone else gets. Vexa makes sure that never happens again.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="#pricing"
            onClick={scrollToPricing}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#2D7A3A] text-white font-medium px-8 py-4 rounded hover:bg-[#236130] transition-colors w-full sm:w-auto text-center"
          >
            See plans
          </motion.a>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/book"
              className="block border border-[#E8E6E0] text-[#0D0D0D] font-medium px-8 py-4 rounded hover:border-[#0D0D0D] transition-colors w-full sm:w-auto text-center"
            >
              Book a free call
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
