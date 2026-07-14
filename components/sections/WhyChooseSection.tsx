"use client"

import { motion } from "framer-motion"
import { Users, UserCheck, Shield, Laptop, Award, Heart, Bus, Home } from "lucide-react"

const features = [
  { icon: Users, title: "Exceptional Teachers", desc: "Over 85% of our faculty hold advanced degrees. Passionate educators who know every student by name and care deeply about their success." },
  { icon: UserCheck, title: "Small Class Sizes", desc: "Maximum 22 students per class. Every voice is heard. Every question is answered. Personalised attention is our standard." },
  { icon: Shield, title: "Pastoral Care & Safety", desc: "Dedicated counselors, house parents, and a 24/7 security team in a secure, nurturing environment where every child feels safe and valued." },
  { icon: Laptop, title: "Modern Technology", desc: "1:1 device program, smart classrooms, high-speed campus-wide connectivity, and digital learning platforms." },
  { icon: Award, title: "Leadership Programs", desc: "Strong prefect system, student council, Model UN, entrepreneurship incubator, and community impact projects." },
  { icon: Heart, title: "Holistic Development", desc: "Sports, music, debate, drama, chess, coding, and over 35 clubs and societies that develop the whole child." },
  { icon: Bus, title: "Safe Transport", desc: "GPS-tracked fleet with trained drivers serving Dar es Salaam and surrounding areas with the highest safety standards." },
  { icon: Home, title: "Boarding Excellence", desc: "Modern, comfortable boarding houses with academic support, weekend activities, and caring house parents who become extended family." },
]

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="section bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-12 items-center">
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="uppercase tracking-[4px] text-xs text-primary/70 mb-3">THE RWEPAS DIFFERENCE</div>
              <h2 className="heading">Why families<br />choose Rwepas.</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We don&apos;t just prepare students for examinations. We prepare them for life — with strong character, confidence, and capability.
              </p>
              <div className="mt-8 text-sm text-primary/80 font-medium tracking-widest">8 REASONS FAMILIES TRUST US</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.015 }}
                  className="group flex gap-5 p-7 rounded-3xl border border-border/60 hover:border-primary/20 transition-all bg-white"
                >
                  <div className="mt-1 flex-shrink-0">
                    <div className="p-3 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary/10 transition">
                      <feature.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-xl tracking-[-0.3px] mb-2.5">{feature.title}</div>
                    <p className="text-[14.5px] text-muted-foreground leading-snug">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}