import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const objections = [
  {
    question: "I'm not technical.",
    answer: "You don't need to be. We set everything up for you on Growth and Pro. Starter has simple step-by-step guides.",
  },
  {
    question: "What if it doesn't work?",
    answer: "14-day results guarantee. If you don't see a difference in leads or replies within 14 days, we'll work for free until you do.",
  },
  {
    question: "Do I need to change how I work?",
    answer: "No. Vexa runs in the background. You keep doing what you do — Vexa handles the enquiries.",
  },
]

export default function Objections() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#F9F8F5] py-20 px-6 border-t border-[#E8E6E0]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium text-[#2D7A3A] uppercase tracking-widest mb-4 text-center">Common questions</p>
        <h2 className="font-display text-4xl md:text-5xl text-[#0D0D0D] text-center mb-14">
          Straight answers.
        </h2>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {objections.map((o, i) => (
            <motion.div
              key={o.question}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.15, ease: 'easeOut' }}
              className="bg-white border border-[#E8E6E0] rounded-xl p-8"
            >
              <h3 className="font-display text-lg text-[#0D0D0D] mb-4">"{o.question}"</h3>
              <p className="text-[#6B6B65] leading-relaxed text-sm">{o.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
