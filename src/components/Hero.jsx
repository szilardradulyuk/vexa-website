import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DmFlow from './DmFlow'

const HEADLINE = "Every lead replied to. Every booking filled."
const WORDS    = HEADLINE.split(' ')

const trustSignals = [
  'No lock-in contracts',
  'Live in 48 hours',
  '14-day results guarantee',
]

const wordVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.35, ease: 'easeOut' },
  }),
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.4, ease: 'easeOut' } },
})

const subDelay    = WORDS.length * 0.08 + 0.2
const btnDelay    = subDelay + 0.25
const trustDelay  = btnDelay + 0.15
const flowDelay   = trustDelay + 0.2

export default function Hero() {
  const scrollToPricing = (e) => {
    e.preventDefault()
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Headline — word by word */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-[#0D0D0D]">
          {WORDS.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={wordVariant}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Sub */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp(subDelay)}
          className="text-[#6B6B65] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Vexa automates your DMs while you focus on the work.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp(btnDelay)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.a
            href="#pricing"
            onClick={scrollToPricing}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#2D7A3A] text-white font-medium px-8 py-4 rounded text-base hover:bg-[#236130] transition-colors w-full sm:w-auto text-center"
          >
            See plans
          </motion.a>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/book"
              className="block border border-[#E8E6E0] text-[#0D0D0D] font-medium px-8 py-4 rounded text-base hover:border-[#0D0D0D] transition-colors w-full sm:w-auto text-center"
            >
              Book a free call
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp(trustDelay)}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-14"
        >
          {trustSignals.map((signal, i) => (
            <motion.div
              key={signal}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: trustDelay + i * 0.15, duration: 0.35 }}
              className="flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#2D7A3A] flex-shrink-0" />
              <span className="text-[#6B6B65] text-sm">{signal}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* DmFlow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: flowDelay, duration: 0.5, ease: 'easeOut' }}
        >
          <DmFlow />
        </motion.div>

      </div>
    </section>
  )
}
