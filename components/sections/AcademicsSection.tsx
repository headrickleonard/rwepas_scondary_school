"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Microscope, Palette, Globe, Cpu, Award } from "lucide-react"

const academics = [
  {
    icon: BookOpen,
    title: "Cambridge & National Curriculum",
    desc: "A rigorous blend of the Cambridge IGCSE and the Tanzanian National Curriculum, preparing students for both local and international examinations.",
  },
  {
    icon: Microscope,
    title: "Science & Innovation",
    desc: "State-of-the-art laboratories for Biology, Chemistry, Physics and dedicated Innovation & Design Technology spaces where students build real solutions.",
  },
  {
    icon: Palette,
    title: "Arts & Humanities",
    desc: "Exceptional programs in Visual Arts, Music, Theatre, History, and Literature that nurture creativity and critical thinking.",
  },
  {
    icon: Globe,
    title: "Languages & Global Studies",
    desc: "Strong emphasis on English, Kiswahili, French, and Mandarin with international exchange opportunities and Model United Nations.",
  },
  {
    icon: Cpu,
    title: "Technology & Computing",
    desc: "Dedicated ICT suites, coding clubs, robotics, and a forward-thinking approach to digital literacy and artificial intelligence.",
  },
  {
    icon: Award,
    title: "Examination Success",
    desc: "Consistently outstanding results. In 2025, 98% of our candidates achieved Division I or II in the National Examinations.",
  },
]

export default function AcademicsSection() {
  return (
    <section id="academics" className="section bg-[#FAFAF8]">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="uppercase tracking-[4px] text-xs text-primary/70 mb-3">ACADEMIC EXCELLENCE</div>
          <h2 className="heading">Education that<br />opens every door.</h2>
          <p className="subheading mt-5">
            Our curriculum is designed to develop deep understanding, intellectual curiosity, and the skills 
            required for success at the world&apos;s leading universities and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academics.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="premium-card h-full group border-none">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary/15 transition">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl tracking-[-0.5px]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[15px] leading-relaxed text-muted-foreground">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground text-sm">Our graduates attend universities including Oxford, Cambridge, Stanford, UCT, and Makerere.</p>
        </div>
      </div>
    </section>
  )
}