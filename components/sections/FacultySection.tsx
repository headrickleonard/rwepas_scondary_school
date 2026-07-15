"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Eyebrow } from "@/components/motion/eyebrow"
import { ScrollRevealText } from "@/components/motion/scroll-reveal-text"
import { RevealGroup, revealItem } from "@/components/motion/reveal"

const faculty = [
  {
    name: "Dr. Elizabeth Mwamba",
    role: "Principal",
    bio: "25+ years in education leadership. Former Deputy Director at the Ministry of Education. Passionate about holistic education and girls' empowerment.",
    image: "https://images.unsplash.com/photo-1573496359142-bf7b0c1e3f1e?q=80&w=400",
    tint: "accent" as const,
  },
  {
    name: "Mr. Daniel Kavishe",
    role: "Deputy Principal (Academics)",
    bio: "Cambridge examiner and former Head of Science at a leading international school in Nairobi. Specialist in curriculum development.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
    tint: "primary" as const,
  },
  {
    name: "Ms. Amina Said",
    role: "Head of Pastoral Care",
    bio: "Counselling psychologist with 15 years experience. Leads our wellbeing and student support programmes with deep empathy and expertise.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    tint: "clay" as const,
  },
  {
    name: "Mr. Joseph Kimaro",
    role: "Head of Sports & Co-curricular",
    bio: "Former national athlete and certified coach. Builds character through sport and oversees one of the strongest co-curricular programmes in the country.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
    tint: "sage" as const,
  },
]

const roleClasses = {
  accent: "text-accent-foreground",
  primary: "text-primary",
  clay: "text-clay",
  sage: "text-sage",
} as const

export default function FacultySection() {
  return (
    <section className="section bg-secondary/40">
      <div className="container">
        <div className="max-w-3xl mb-14">
          <Eyebrow tone="sage">OUR EDUCATORS</Eyebrow>
          <h2 className="heading">Exceptional teachers.<br />Inspiring mentors.</h2>
          <ScrollRevealText
            as="p"
            className="subheading mt-5"
            text="Our faculty are more than instructors — they are role models who know every student personally and are deeply invested in their success."
          />
        </div>

        <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((member, index) => (
            <motion.div key={index} variants={revealItem} whileHover={{ y: -6 }}>
              <Card className="premium-card overflow-hidden group border-none h-full">
                <div className="relative h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.15] group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/80" />
                </div>
                <CardContent className="p-7">
                  <div className="font-display text-2xl tracking-tight mb-1">{member.name}</div>
                  <div className={`text-sm font-medium tracking-widest mb-4 ${roleClasses[member.tint]}`}>
                    {member.role}
                  </div>
                  <p className="text-muted-foreground text-[14.5px] leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </RevealGroup>

        <div className="text-center mt-10 text-sm text-muted-foreground">
          Our full faculty of 95 dedicated educators includes specialists across all subjects with advanced degrees from top universities.
        </div>
      </div>
    </section>
  )
}