"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"

export function CountUp({
  value,
  suffix = "",
  className = "",
}: {
  value: number
  suffix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 1.4, bounce: 0.15 })
  const rounded = useTransform(spring, (v) => Math.round(v))

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, value, motionValue])

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}