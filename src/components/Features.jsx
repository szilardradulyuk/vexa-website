import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    title: 'Instant DM replies',
    description: 'Every message on Instagram and Facebook gets a smart, instant reply — 24 hours a day.',
  },
  {
    title: 'Missed lead recovery',
    description: "If someone doesn't book after the first reply, Vexa follows up automatically. No lead left behind.",
  },
  {
    title: 'Booking automation',
    description: 'Vexa qualifies leads and sends them straight to your booking link — no back and forth.',
  },
  {
    title: 'Email sequences (Pro)',
    description: 'For businesses on Pro, Vexa extends automation into email — keeping customers coming back.',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      className="border border-white/10 rounded-xl p-8 hover:border-white/20 transition-colors"
    >
      <h3 className="font-display text-xl text-[#2D7A3A] mb-3">{feature.title}</h3>
      <p className="text-white/60 leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section className="bg-[#0D0D0D] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium text-[#2D7A3A] uppercase tracking-widest mb-4 text-center">What Vexa does</p>
        <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-14">
          Built to run while you sleep
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
