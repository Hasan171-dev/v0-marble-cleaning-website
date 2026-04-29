const steps = [
  {
    number: "1",
    title: "Consultation",
    description: "We begin with a thorough assessment of your marble surfaces to understand the scope of work needed.",
  },
  {
    number: "2",
    title: "Preparation",
    description: "Our team carefully prepares the area, protecting surrounding surfaces and ensuring a clean workspace.",
  },
  {
    number: "3",
    title: "Restoration",
    description: "Using specialized equipment and techniques, we restore your marble to its natural beauty.",
  },
  {
    number: "4",
    title: "Protection",
    description: "We apply professional-grade sealants to protect your investment and maintain lasting results.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-medium">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight text-balance">
            A proven approach to marble renewal
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4" />
              )}
              
              {/* Step Content */}
              <div className="bg-card p-8 border border-border h-full">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent text-xl font-semibold mb-6">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
