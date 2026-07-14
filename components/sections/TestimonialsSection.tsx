"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Rwepas gave our daughter the confidence to dream big. The teachers truly care, and the values they instill are visible in how she carries herself. We could not have asked for a better secondary school experience.",
    name: "Mrs. Grace Kimaro",
    role: "Parent of Form 4 student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
  },
  {
    quote: "The leadership opportunities and debate club completely transformed me. I went from being shy to representing Tanzania at an international MUN conference. Rwepas prepared me for university and life.",
    name: "Amani Juma",
    role: "Alumna, Class of 2023 • Now at University of Cape Town",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
  },
  {
    quote: "As a parent, what stands out most is the genuine partnership between school and home. The pastoral care team supported our son through a difficult time with such professionalism and warmth. We are forever grateful.",
    name: "Dr. & Mrs. Patel",
    role: "Parents of Form 2 student",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <div className="uppercase tracking-[4px] text-xs text-primary/70 mb-3">VOICES FROM OUR COMMUNITY</div>
          <h2 className="heading">What families and<br />alumni say.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="premium-card h-full flex flex-col">
              <CardContent className="p-9 flex flex-col flex-1">
                <Quote className="h-8 w-8 text-primary/30 mb-6" />
                <blockquote className="quote flex-1">
                  “{testimonial.quote}”
                </blockquote>
                <div className="flex items-center gap-4 mt-8 pt-6 border-t">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/10" 
                  />
                  <div>
                    <div className="font-medium tracking-tight">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}