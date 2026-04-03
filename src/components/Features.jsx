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

export default function Features() {
  return (
    <section className="bg-dark py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium text-green uppercase tracking-widest mb-4 text-center">What Vexa does</p>
        <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-14">
          Everything handled. Nothing missed.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="border border-white/10 rounded-xl p-8 hover:border-white/20 transition-colors">
              <h3 className="font-display text-xl text-green mb-3">{f.title}</h3>
              <p className="text-white/60 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
