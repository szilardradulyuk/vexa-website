import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Connect',
    description: 'Link your Instagram and Facebook in minutes using your Meta account. No technical knowledge needed.',
  },
  {
    number: '02',
    title: 'Automate',
    description: 'Vexa handles every incoming DM — replies instantly, qualifies the lead, and books them in.',
  },
  {
    number: '03',
    title: 'Grow',
    description: 'Wake up to a full calendar. Every missed lead followed up. Every enquiry converted.',
  },
]

function StepCard({ step, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
      className="bg-white rounded-xl p-8 border border-[#E8E6E0]"
    >
      <div className="text-[#2D7A3A] font-display text-3xl font-bold mb-4">{step.number}</div>
      <h3 className="font-display text-xl text-[#0D0D0D] mb-3">{step.title}</h3>
      <p className="text-[#6B6B65] leading-relaxed">{step.description}</p>
    </motion.div>
  )
}

export default function HowItWorks() {
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" className="bg-[#F9F8F5] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium text-[#2D7A3A] uppercase tracking-widest mb-4 text-center">How Vexa works</p>
        <h2 className="font-display text-4xl md:text-5xl text-[#0D0D0D] text-center mb-14">
          Three steps to never missing a lead
        </h2>

        {/* SVG connecting line (desktop only) */}
        <div ref={lineRef} className="relative hidden md:block mb-0">
          <svg
            className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none"
            height="2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ zIndex: 0 }}
          >
            <motion.line
              x1="0" y1="1" x2="100%" y2="1"
              stroke="#E8E6E0"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={lineInView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </svg>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
