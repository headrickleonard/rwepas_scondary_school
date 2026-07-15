"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Heart } from "lucide-react"
import { ScrollRevealText } from "@/components/motion/scroll-reveal-text"
import { RevealGroup, revealItem } from "@/components/motion/reveal"
import { motion } from "framer-motion"

const values = [
  { icon: Users, title: "Community", desc: "We believe in the power of belonging. Every student is seen, valued, and supported as part of our family.", tint: "sage" as const },
  { icon: Target, title: "Excellence", desc: "We pursue mastery in academics, arts, sports, and character with quiet determination and high standards.", tint: "accent" as const },
  { icon: Heart, title: "Integrity", desc: "Honesty, respect, responsibility, and service form the foundation of everything we do at Rwepas.", tint: "clay" as const },
]

const tintClasses = {
  sage: "bg-sage/10 text-sage group-hover:bg-sage/15",
  accent: "bg-accent/10 text-accent group-hover:bg-accent/15",
  clay: "bg-clay/10 text-clay group-hover:bg-clay/15",
} as const

export default function AboutSection() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <div className="uppercase tracking-[4px] text-xs text-clay font-medium mb-3">OUR FOUNDATION</div>
          <h2 className="heading">A legacy of<br />excellence since 1998.</h2>
          <ScrollRevealText
            as="p"
            className="subheading mt-6"
            text="Rwepas Secondary School was founded on the belief that every child carries extraordinary potential. For over two decades, we have cultivated an environment where academic rigor meets deep human development and strong values."
          />
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          <Card className="md:col-span-7 premium-card overflow-hidden border-none">
            <div className="aspect-[16/9] md:aspect-auto md:h-full relative">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070"
                alt="Students collaborating at Rwepas Secondary School"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 text-primary-foreground max-w-md">
                <div className="font-display text-4xl tracking-[-1px] mb-3 leading-[1.05]">
                  "Education is the most powerful weapon which you can use to change the world."
                </div>
                <div className="text-primary-foreground/70">— Nelson Mandela</div>
              </div>
            </div>
          </Card>

          <div className="md:col-span-5 space-y-6">
            <Card className="premium-card h-full border-none">
              <CardContent className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary"><Target className="h-6 w-6" /></div>
                  <div className="font-display text-2xl tracking-tight">Our Mission</div>
                </div>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  To provide a transformative education that empowers students from diverse backgrounds to become compassionate,
                  intellectually curious, and globally minded leaders who contribute meaningfully to society and honour their roots.
                </p>
              </CardContent>
            </Card>

            {/* <Card className="premium-card h-full border-none bg-primary text-primary-foreground">
              <CardContent className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-accent/20 text-accent"><Heart className="h-6 w-6" /></div>
                  <div className="font-display text-2xl tracking-tight">Our Vision</div>
                </div>
                <p className="text-[15px] leading-relaxed text-primary-foreground/75">
                  To be one of East Africa's most respected secondary schools — where every graduate leaves equipped not only with exceptional academic results,
                  but with the character, creativity, and courage to shape a better future for Tanzania and beyond.
                </p>
              </CardContent>
            </Card> */}
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <div className="uppercase tracking-[3px] text-xs text-clay font-medium mb-2">WHAT GUIDES US</div>
            <h3 className="text-3xl font-display tracking-tight">Our Core Values</h3>
          </div>

          <RevealGroup className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div key={i} variants={revealItem} whileHover={{ y: -4 }} className="premium-card p-9 group border-none">
<div className={`p-3.5 w-fit rounded-2xl mb-8 transition ${tintClasses[value.tint]}`}>
                  <value.icon className="h-6 w-6" />
                </div>
                <div className="font-display text-3xl tracking-[-0.5px] mb-4">{value.title}</div>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}