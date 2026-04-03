import { useState } from 'react'
import { Link } from 'react-router-dom'

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

function TierCard({ tier, annual }) {
  const price = annual ? tier.annualPrice : tier.monthlyPrice

  return (
    <div
      className={`
        bg-white rounded-xl flex flex-col relative
        ${tier.featured
          ? 'border-2 border-green shadow-xl py-10 px-8 md:-my-4'
          : 'border border-border py-8 px-8'}
      `}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-amber text-dark text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
            {tier.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="font-display text-2xl text-dark mb-2">{tier.name}</h3>
        <p className="text-muted text-sm leading-relaxed">{tier.description}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="font-display text-5xl text-dark">£{price}</span>
          <span className="text-muted text-sm">/mo</span>
        </div>
        {annual && (
          <p className="text-green text-xs font-medium mt-1">Billed annually — save 20%</p>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-2.5 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-dark">
            <span className="text-green mt-0.5 flex-shrink-0">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Meta */}
      <div className="border-t border-border pt-4 mb-6 space-y-1">
        <p className="text-xs text-muted"><span className="font-medium text-dark">Setup:</span> {tier.setup}</p>
        <p className="text-xs text-muted"><span className="font-medium text-dark">Platforms:</span> {tier.platforms}</p>
      </div>

      {/* CTAs */}
      <div className="space-y-3">
        {tier.name === 'Pro' ? (
          <Link
            to={tier.primaryHref}
            className="block text-center bg-dark text-white font-medium py-3.5 rounded hover:bg-dark/90 transition-colors text-sm"
          >
            {tier.primaryCTA}
          </Link>
        ) : tier.featured ? (
          <a
            href={tier.primaryHref}
            className="block text-center bg-green text-white font-medium py-3.5 rounded hover:bg-green/90 transition-colors text-sm"
          >
            {tier.primaryCTA}
          </a>
        ) : (
          <a
            href={tier.primaryHref}
            className="block text-center bg-dark text-white font-medium py-3.5 rounded hover:bg-dark/90 transition-colors text-sm"
          >
            {tier.primaryCTA}
          </a>
        )}
        {tier.secondaryCTA && (
          <Link
            to={tier.secondaryHref}
            className="block text-center border border-border text-muted font-medium py-3 rounded hover:border-dark/30 hover:text-dark transition-colors text-sm"
          >
            {tier.secondaryCTA}
          </Link>
        )}
      </div>
    </div>
  )
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="bg-offwhite py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium text-green uppercase tracking-widest mb-4 text-center">Simple pricing</p>
        <h2 className="font-display text-4xl md:text-5xl text-dark text-center mb-4">
          Pick your plan
        </h2>
        <p className="text-muted text-center mb-10">No hidden fees. No lock-in. Cancel any time.</p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-sm font-medium ${!annual ? 'text-dark' : 'text-muted'}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors ${annual ? 'bg-green' : 'bg-border'}`}
            aria-label="Toggle annual billing"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${annual ? 'translate-x-6' : 'translate-x-0'}`}
            />
          </button>
          <span className={`text-sm font-medium ${annual ? 'text-dark' : 'text-muted'}`}>
            Annual <span className="text-green">(save 20%)</span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start mb-16">
          {tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} annual={annual} />
          ))}
        </div>

        {/* Trust signals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustSignals.map((t) => (
            <div key={t.label} className="flex items-center gap-3 bg-white border border-border rounded-lg px-4 py-3">
              <span className="text-xl">{t.icon}</span>
              <span className="text-sm text-dark font-medium">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
