"use client"

import { motion } from "framer-motion"
import { Trophy, Music, Users, Plane, Heart, Award } from "lucide-react"

const activities = [
  {
    icon: Trophy,
    title: "Sports & Athletics",
    desc: "Competitive football, basketball, athletics, swimming, and netball. Our teams regularly compete at national level.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2070",
  },
  {
    icon: Music,
    title: "Music & Performing Arts",
    desc: "Choir, orchestra, drama club, and annual school productions that celebrate both Tanzanian and international arts.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070",
  },
  {
    icon: Users,
    title: "Clubs & Societies",
    desc: "Over 35 clubs including Debate, Model UN, Robotics, Environmental Club, Business Club, and Coding Society.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070",
  },
  {
    icon: Plane,
    title: "Expeditions & Trips",
    desc: "Annual educational trips to Serengeti, Ngorongoro, Zanzibar, and international exchanges with partner schools in Kenya and UK.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070",
  },
  {
    icon: Heart,
    title: "Community Service",
    desc: "Meaningful service projects in local communities — teaching, environmental clean-ups, and health awareness campaigns.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2070",
  },
  {
    icon: Award,
    title: "Leadership & Prefects",
    desc: "Strong prefect system, student council, and leadership training programs that prepare students for responsibility.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070",
  },
]

export default function StudentLifeSection() {
  return (
    <section id="life" className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <div className="uppercase tracking-[4px] text-xs text-primary/70 mb-3">BEYOND THE CLASSROOM</div>
          <h2 className="heading">Where character<br />is forged.</h2>
          <p className="subheading mt-5">
            At Rwepas, learning extends far beyond textbooks. Our rich co-curricular program develops well-rounded individuals 
            who lead with confidence, creativity, and compassion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8 }}
              className="group premium-card overflow-hidden flex flex-col"
            >
              <div className="relative h-56">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
                <div className="absolute bottom-5 left-5 text-white">
                  <activity.icon className="h-7 w-7 mb-3" />
                  <div className="font-display text-2xl tracking-tight">{activity.title}</div>
                </div>
              </div>
              <div className="p-7 flex-1">
                <p className="text-muted-foreground leading-relaxed text-[15px]">{activity.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}