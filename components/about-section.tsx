import { CheckCircle2 } from "lucide-react"

const highlights = [
  "25+ years of industry experience",
  "Licensed and fully insured professionals",
  "Eco-friendly cleaning solutions",
  "Satisfaction guaranteed on every project",
]

const stats = [
  { value: "2,500+", label: "Projects Completed" },
  { value: "25", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Rate" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-medium">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight text-balance mb-6">
              Dedicated to preserving natural stone beauty
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At MarbleRenew, we combine traditional craftsmanship with modern techniques to deliver exceptional marble care services. Our team of certified professionals treats each project with the attention and expertise your surfaces deserve.
            </p>

            {/* Highlights */}
            <ul className="space-y-4 mb-10">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl sm:text-4xl font-semibold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 sm:h-64 bg-secondary rounded-sm" />
                <div className="h-32 sm:h-40 bg-accent/20 rounded-sm" />
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-32 sm:h-40 bg-accent/20 rounded-sm" />
                <div className="h-48 sm:h-64 bg-secondary rounded-sm" />
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-accent/30 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
