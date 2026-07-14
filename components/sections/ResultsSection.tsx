"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

function AnimatedNumber({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return
    
    let start = 0
    const duration = 1600
    const increment = Math.ceil(end / (duration / 16))
    
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, end])

  return (
    <span ref={ref} className="stat-number tabular-nums">
      {count}{suffix}
    </span>
  )
}

const stats = [
  { number: 98, suffix: "%", label: "National Examination Pass Rate", sub: "Division I & II" },
  { number: 100, suffix: "+", label: "University Placements", sub: "Local & International" },
  { number: 27, suffix: "", label: "Years of Educational Excellence", sub: "Since 1998" },
  { number: 1850, suffix: "+", label: "Current Students", sub: "From 42 nationalities" },
]

export default function ResultsSection() {
  return (
    <section className="section bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-16">
          <div className="uppercase tracking-[4px] text-xs text-primary-foreground/60 mb-3">MEASURABLE IMPACT</div>
          <h2 className="heading">Results that speak<br />for themselves.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center border-l border-white/20 pl-8 first:border-l-0 first:pl-0 md:text-left">
              <div className="font-display text-[72px] md:text-[84px] leading-none tracking-[-4.5px] mb-3">
                <AnimatedNumber end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="font-medium text-xl tracking-tight mb-1.5">{stat.label}</div>
              <div className="text-primary-foreground/60 text-sm">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-primary-foreground/70 max-w-md mx-auto">
          Our alumni are making an impact at McKinsey, Google, the United Nations, leading African startups, and in medicine, law, engineering, and the arts across the globe.
        </div>
      </div>
    </section>
  )
}