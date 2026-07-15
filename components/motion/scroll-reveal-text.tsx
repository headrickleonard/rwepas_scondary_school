"use client"

import { useRef, createElement } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"

function Word({
  children,
  progress,
  range,
}: {
  children: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0, 1])
  const y = useTransform(progress, range, [10, 0])
  const blurPx = useTransform(progress, range, [4, 0])
  const filter = useTransform(blurPx, (v) => `blur(${v}px)`)

  return (
    <span className="relative inline-block mr-[0.28em]">
      <span aria-hidden className="text-foreground/15">{children}</span>
      <motion.span
        style={{ opacity, y, filter }}
        className="absolute inset-0 font-semibold text-foreground"
      >
        {children}
      </motion.span>
    </span>
  )
}

export function ScrollRevealText({
  text,
  className = "",
  as = "p",
}: {
  text: string
  className?: string
  as?: "p" | "h2" | "h3"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  })
  const words = text.split(" ")

  return createElement(
    as,
    { ref, className },
    words.map((word, i) => {
      const start = i / words.length
      const end = Math.min(start + 1.4 / words.length, 1)
      return (
        <Word key={i} progress={scrollYProgress} range={[start, end]}>
          {word}
        </Word>
      )
    })
  )
}