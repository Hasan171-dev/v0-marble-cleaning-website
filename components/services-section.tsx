import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Marble Polishing",
    description: "Restore the natural shine and luster of your marble surfaces with our professional diamond polishing techniques.",
    image: "/images/service-polishing.jpg",
  },
  {
    number: "02",
    title: "Surface Restoration",
    description: "Remove scratches, etches, and stains to bring your worn marble back to its original pristine condition.",
    image: "/images/service-restoration.jpg",
  },
  {
    number: "03",
    title: "Sealing & Protection",
    description: "Apply premium protective sealants to safeguard your marble against future damage, spills, and everyday wear.",
    image: "/images/service-sealing.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-medium">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight text-balance">
            Comprehensive marble care for every surface
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative bg-background border border-border overflow-hidden hover:border-accent/50 transition-colors"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <span className="text-sm text-accent font-medium">{service.number}</span>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-2 mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors group/btn">
                  Learn More
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
