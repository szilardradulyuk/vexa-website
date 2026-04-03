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
  return (
    <section className="bg-offwhite py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium text-green uppercase tracking-widest mb-4 text-center">Common questions</p>
        <h2 className="font-display text-4xl md:text-5xl text-dark text-center mb-14">
          Straight answers.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {objections.map((o) => (
            <div key={o.question} className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-lg text-dark mb-4">"{o.question}"</h3>
              <p className="text-muted leading-relaxed text-sm">{o.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
