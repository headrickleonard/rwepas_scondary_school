"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"
import { Eyebrow } from "@/components/motion/eyebrow"
import { RevealGroup, revealItem } from "@/components/motion/reveal"

const testimonials = [
  {
    quote: "Rwepas gave our daughter the confidence to dream big. The teachers truly care, and the values they instill are visible in how she carries herself. We could not have asked for a better secondary school experience.",
    name: "Mrs. Grace Kimaro",
    role: "Parent of Form 4 student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    tint: "sage" as const,
  },
  {
    quote: "The leadership opportunities and debate club completely transformed me. I went from being shy to representing Tanzania at an international MUN conference. Rwepas prepared me for university and life.",
    name: "Amani Juma",
    role: "Alumna, Class of 2023 • Now at University of Cape Town",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
    tint: "accent" as const,
  },
  {
    quote: "As a parent, what stands out most is the genuine partnership between school and home. The pastoral care team supported our son through a difficult time with such professionalism and warmth. We are forever grateful.",
    name: "Dr. & Mrs. Patel",
    role: "Parents of Form 2 student",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
    tint: "clay" as const,
  },
]

const ringClasses = {
  sage: "ring-sage/25",
  accent: "ring-accent/40",
  clay: "ring-clay/25",
} as const

const iconClasses = {
  sage: "text-sage",
  accent: "text-accent-foreground",
  clay: "text-clay",
} as const

export default function TestimonialsSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-14 flex flex-col items-center">
          <Eyebrow tone="clay">VOICES FROM OUR COMMUNITY</Eyebrow>
          <h2 className="heading">What families and<br />alumni say.</h2>
        </div>

        <RevealGroup className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={revealItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <Card className="premium-card h-full flex flex-col border-none relative overflow-hidden">
                {/* oversized editorial quote mark — signature texture, not the small icon alone */}
                <span
                  aria-hidden
                  className="absolute -top-4 -left-1 font-display text-[7rem] leading-none text-clay/10 select-none pointer-events-none"
                >
                  "
                </span>
                <CardContent className="p-9 flex flex-col flex-1 relative">
                  <Quote className={`h-7 w-7 mb-6 ${iconClasses[testimonial.tint]}`} />
                  <blockquote className="text-[16px] leading-relaxed text-foreground/85 flex-1">
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border/60">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={`h-12 w-12 rounded-full object-cover ring-2 ${ringClasses[testimonial.tint]}`}
                    />
                    <div>
                      <div className="font-medium tracking-tight">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}