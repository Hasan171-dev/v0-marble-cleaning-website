"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Stone Avenue, Los Angeles, CA 90210",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(123) 456-7890",
    href: "tel:+1234567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@marblerenew.com",
    href: "mailto:info@marblerenew.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat: 8:00 AM - 6:00 PM",
  },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-medium">
              Contact Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight text-balance mb-6">
              Ready to restore your marble?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Contact us today for a free consultation and estimate. Our team is ready to help bring your marble surfaces back to life.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border p-8 sm:p-10">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Thank you!</h3>
                <p className="text-muted-foreground">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Get a Free Estimate</h3>
                <FieldGroup className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field>
                      <FieldLabel>First Name</FieldLabel>
                      <Input
                        type="text"
                        placeholder="John"
                        required
                        className="bg-background"
                      />
                    </Field>
                    <Field>
                      <FieldLabel>Last Name</FieldLabel>
                      <Input
                        type="text"
                        placeholder="Doe"
                        required
                        className="bg-background"
                      />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-background"
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Phone</FieldLabel>
                    <Input
                      type="tel"
                      placeholder="(123) 456-7890"
                      className="bg-background"
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Message</FieldLabel>
                    <Textarea
                      placeholder="Tell us about your project..."
                      rows={4}
                      required
                      className="bg-background resize-none"
                    />
                  </Field>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </FieldGroup>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
