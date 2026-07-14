"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Heart } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <div className="uppercase tracking-[4px] text-xs text-primary/70 mb-3">OUR FOUNDATION</div>
          <h2 className="heading">A legacy of<br />excellence since 1998.</h2>
          <p className="subheading mt-6">
            Tanzanite Academy was founded on the belief that every child carries extraordinary potential. 
            For over two decades, we have cultivated an environment where academic rigor meets deep human development.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          <Card className="md:col-span-7 premium-card overflow-hidden">
            <div className="aspect-[16/9] md:aspect-auto md:h-full relative">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070" 
                alt="Students collaborating at Tanzanite Academy" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
              <div className="absolute bottom-0 left-0 p-10 text-white max-w-md">
                <div className="font-display text-4xl tracking-[-1px] mb-3">“Education is the most powerful weapon which you can use to change the world.”</div>
                <div className="text-white/70">— Nelson Mandela</div>
              </div>
            </div>
          </Card>

          <div className="md:col-span-5 space-y-6">
            <Card className="premium-card h-full">
              <CardContent className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary"><Target className="h-6 w-6" /></div>
                  <div className="font-display text-2xl tracking-tight">Our Mission</div>
                </div>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  To provide a transformative education that empowers students from diverse backgrounds to become compassionate, 
                  intellectually curious, and globally minded leaders who contribute meaningfully to society.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card h-full">
              <CardContent className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary"><Heart className="h-6 w-6" /></div>
                  <div className="font-display text-2xl tracking-tight">Our Vision</div>
                </div>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  To be East Africa&apos;s most respected secondary school — where every graduate leaves equipped not only with exceptional academic results, 
                  but with the character, creativity, and courage to shape a better future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <div className="uppercase tracking-[3px] text-xs text-primary/70 mb-2">WHAT GUIDES US</div>
            <h3 className="text-3xl font-display tracking-tight">Our Core Values</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Community", desc: "We believe in the power of belonging. Every student is seen, valued, and supported." },
              { icon: Target, title: "Excellence", desc: "We pursue mastery in academics, arts, sports, and character with quiet determination." },
              { icon: Heart, title: "Integrity", desc: "Honesty, respect, and responsibility form the foundation of everything we do." },
            ].map((value, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                className="premium-card p-9 group"
              >
                <div className="p-3.5 w-fit rounded-2xl bg-primary/5 text-primary mb-8 group-hover:bg-primary/10 transition">
                  <value.icon className="h-6 w-6" />
                </div>
                <div className="font-display text-3xl tracking-[-0.5px] mb-4">{value.title}</div>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}