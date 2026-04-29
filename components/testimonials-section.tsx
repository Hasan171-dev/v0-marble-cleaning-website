import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "The team at MarbleRenew transformed our dated kitchen countertops into stunning centerpieces. Their attention to detail is remarkable.",
    author: "Sarah Mitchell",
    role: "Homeowner, Beverly Hills",
  },
  {
    quote: "We&apos;ve trusted them with our hotel lobby marble for years. Consistently excellent results and professional service every time.",
    author: "James Rodriguez",
    role: "Hotel Manager",
  },
  {
    quote: "After years of wear, our marble floors look brand new again. The restoration exceeded all our expectations.",
    author: "Elizabeth Chen",
    role: "Interior Designer",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-medium">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight text-balance">
            What our clients say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-card border border-border p-8 sm:p-10 relative"
            >
              <Quote className="w-10 h-10 text-accent/30 mb-6" />
              <blockquote className="text-lg text-foreground leading-relaxed mb-8">
                {testimonial.quote}
              </blockquote>
              <footer>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
