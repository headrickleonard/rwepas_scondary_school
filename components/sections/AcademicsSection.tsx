"use client"

import { BookOpen, Microscope, Palette, Globe, Cpu } from "lucide-react"
import { Eyebrow } from "@/components/motion/eyebrow"
import { CountUp } from "@/components/motion/count-up"
import { ScrollRevealText } from "@/components/motion/scroll-reveal-text"
import { RevealGroup, revealItem } from "@/components/motion/reveal"
import { motion } from "framer-motion"

const academics = [
  { icon: BookOpen, title: "Cambridge & National Curriculum", desc: "A rigorous blend of the Cambridge IGCSE and the Tanzanian National Curriculum." },
  { icon: Microscope, title: "Science & Innovation", desc: "State-of-the-art labs for Biology, Chemistry, Physics, and Design Technology." },
  { icon: Palette, title: "Arts & Humanities", desc: "Exceptional programs in Visual Arts, Music, Theatre, History, and Literature." },
  { icon: Globe, title: "Languages & Global Studies", desc: "English, Kiswahili, French, and Mandarin, with exchange programs and Model UN." },
  { icon: Cpu, title: "Technology & Computing", desc: "ICT suites, coding clubs, robotics, and hands-on digital literacy." },
]

export default function AcademicsSection() {
  return (
    <section id="academics" className="section bg-secondary/40">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <Eyebrow tone="clay">ACADEMIC EXCELLENCE</Eyebrow>
          <h2 className="heading">Education that<br />opens every door.</h2>
          <ScrollRevealText
            as="p"
            className="subheading mt-5"
            text="Our curriculum is designed to develop deep understanding, intellectual curiosity, and the skills required for success at the world's leading universities and beyond."
          />
        </div>

        {/* Two independent regions — no shared auto-placement, nothing to orphan */}
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 premium-card border-none bg-primary text-primary-foreground p-9 flex flex-col justify-between"
          >
            <div className="uppercase tracking-[3px] text-xs text-accent font-medium mb-6">2025 EXAM RESULTS</div>
            <div>
              <CountUp value={98} suffix="%" className="stat-number text-accent" />
              <p className="mt-4 text-primary-foreground/75 text-[15px] leading-relaxed">
                of our candidates achieved Division I or II in the National Examinations — consistently among the region's strongest results.
              </p>
            </div>
          </motion.div>

          <RevealGroup className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {academics.map((item, i) => (
              <motion.div
                key={i}
                variants={revealItem}
                whileHover={{ y: -4 }}
                className={`premium-card p-8 border-none group ${
                  i === academics.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:bg-primary/15 transition">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="font-display text-xl tracking-[-0.3px] mb-2.5">{item.title}</div>
                <p className="text-[14.5px] leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground text-sm">
            Our graduates attend universities including Oxford, Cambridge, Stanford, UCT, and Makerere.
          </p>
        </div>
      </div>
    </section>
  )
}