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

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-offwhite py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium text-green uppercase tracking-widest mb-4 text-center">How Vexa works</p>
        <h2 className="font-display text-4xl md:text-5xl text-dark text-center mb-14">
          Three steps. That's it.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-xl p-8 border border-border">
              <div className="text-green font-display text-3xl font-bold mb-4">{step.number}</div>
              <h3 className="font-display text-xl text-dark mb-3">{step.title}</h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
