import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    monthlyPrice: 99,
    annualPrice: 79,
    badge: null,
    featured: false,
    description: 'Set up your own automation. Perfect if you want to get started without a big commitment.',
    features: [
      'Instagram DM automation',
      'Keyword-triggered smart replies',
      'Booking link integration (Google / Calendly)',
      'Step-by-step setup guides',
      '1 business location',
      'Email support',
    ],
    setup: 'Self-serve',
    platforms: 'Instagram only',
    primaryCTA: 'Get started',
    primaryHref: '#stripe-placeholder',
    secondaryCTA: 'Book a call first',
    secondaryHref: '/book',
  },
  {
    name: 'Growth',
    monthlyPrice: 299,
    annualPrice: 239,
    badge: 'Most popular',
    featured: true,
    description: 'We build and manage your full automation system. This is where businesses grow.',
    features: [
      'Everything in Starter',
      'Instagram + Facebook DM automation',
      'Smart reply flows (built by us)',
      'Missed lead follow-up sequences',
      'Priority lead routing',
      'Booking optimisation',
      'Unlimited automated replies',
      '1 business location',
      'Priority chat support',
      'Monthly performance review',
    ],
    setup: 'Done for you — we build everything',
    platforms: 'Instagram + Facebook',
    primaryCTA: 'Start growing',
    primaryHref: '#stripe-placeholder',
    secondaryCTA: 'Book a call first',
    secondaryHref: '/book',
  },
  {
    name: 'Pro',
    monthlyPrice: 599,
    annualPrice: 479,
    badge: null,
    featured: false,
    description: 'Full service. We run your entire automation operation across every channel.',
    features: [
      'Everything in Growth',
      'Instagram + Facebook + Email automation',
      'Advanced reply logic and branching',
      'Email follow-up sequences',
      'Multiple business locations',
      'Dedicated account manager',
      '2-hour support response time',
      'Weekly performance reports',
      'Custom automation builds',
    ],
    setup: 'White glove — fully managed',
    platforms: 'Instagram + Facebook + Email',
    primaryCTA: 'Talk to us',
    primaryHref: '/book',
    secondaryCTA: null,
    secondaryHref: null,
  },
]

const trustSignals = [
  { icon: '🛡', label: 'No lock-in contracts' },
  { icon: '⏱', label: 'Live in 48 hours' },
  { icon: '✓', label: '14-day results guarantee' },
  { icon: '🔒', label: 'Secure payments via Stripe' },
]

function TierCard({ tier, annual, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const price = annual ? tier.annualPrice : tier.monthlyPrice

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      whileHover={{ y: tier.featured ? -2 : -4, transition: { duration: 0.2 } }}
      className={`
        bg-white rounded-xl flex flex-col relative cursor-default
        ${tier.featured
          ? 'border-2 border-[#2D7A3A] shadow-xl py-10 px-8 md:-my-4'
          : 'border border-[#E8E6E0] py-8 px-8'}
      `}
    >
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-[#E8A020] text-[#0D0D0D] text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
            {tier.badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-display text-2xl text-[#0D0D0D] mb-2">{tier.name}</h3>
        <p className="text-[#6B6B65] text-sm leading-relaxed">{tier.description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <motion.span
            key={price}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="font-display text-5xl text-[#0D0D0D]"
          >
            £{price}
          </motion.span>
          <span className="text-[#6B6B65] text-sm">/mo</span>
        </div>
        {annual && (
          <p className="text-[#2D7A3A] text-xs font-medium mt-1">Billed annually — save 20%</p>
        )}
      </div>

      <ul className="space-y-2.5 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-[#0D0D0D]">
            <span className="text-[#2D7A3A] mt-0.5 flex-shrink-0">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-[#E8E6E0] pt-4 mb-6 space-y-1">
        <p className="text-xs text-[#6B6B65]"><span className="font-medium text-[#0D0D0D]">Setup:</span> {tier.setup}</p>
        <p className="text-xs text-[#6B6B65]"><span className="font-medium text-[#0D0D0D]">Platforms:</span> {tier.platforms}</p>
      </div>

      <div className="space-y-3">
        {tier.name === 'Pro' ? (
          <Link
            to={tier.primaryHref}
            className="block text-center bg-[#0D0D0D] text-white font-medium py-3.5 rounded hover:bg-[#333] transition-colors text-sm"
          >
            {tier.primaryCTA}
          </Link>
        ) : tier.featured ? (
          <a
            href={tier.primaryHref}
            className="block text-center bg-[#2D7A3A] text-white font-medium py-3.5 rounded hover:bg-[#236130] transition-colors text-sm"
          >
            {tier.primaryCTA}
          </a>
        ) : (
          <a
            href={tier.primaryHref}
            className="block text-center bg-[#0D0D0D] text-white font-medium py-3.5 rounded hover:bg-[#333] transition-colors text-sm"
          >
            {tier.primaryCTA}
          </a>
        )}
        {tier.secondaryCTA && (
          <Link
            to={tier.secondaryHref}
            className="block text-center border border-[#E8E6E0] text-[#6B6B65] font-medium py-3 rounded hover:border-[#0D0D0D] hover:text-[#0D0D0D] transition-colors text-sm"
          >
            {tier.secondaryCTA}
          </Link>
        )}
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' })

  return (
    <section id="pricing" className="bg-[#F9F8F5] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-medium text-[#2D7A3A] uppercase tracking-widest mb-4 text-center">Simple pricing</p>
          <h2 className="font-display text-4xl md:text-5xl text-[#0D0D0D] text-center mb-4">
            One price. No surprises.
          </h2>
          <p className="text-[#6B6B65] text-center mb-10">No hidden fees. No lock-in. Cancel any time.</p>
        </motion.div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-sm font-medium ${!annual ? 'text-[#0D0D0D]' : 'text-[#6B6B65]'}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors ${annual ? 'bg-[#2D7A3A]' : 'bg-[#E8E6E0]'}`}
            aria-label="Toggle annual billing"
          >
            <motion.span
              animate={{ x: annual ? 24 : 2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow"
              style={{ left: 0 }}
            />
          </button>
          <span className={`text-sm font-medium ${annual ? 'text-[#0D0D0D]' : 'text-[#6B6B65]'}`}>
            Annual <span className="text-[#2D7A3A]">(save 20%)</span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start mb-16">
          {tiers.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} annual={annual} index={i} />
          ))}
        </div>

        {/* Trust signals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustSignals.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.35 }}
              className="flex items-center gap-3 bg-white border border-[#E8E6E0] rounded-lg px-4 py-3"
            >
              <span className="text-xl">{t.icon}</span>
              <span className="text-sm text-[#0D0D0D] font-medium">{t.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
