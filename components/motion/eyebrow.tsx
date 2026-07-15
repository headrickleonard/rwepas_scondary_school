"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

const toneClass = {
  clay: "text-clay",
  accent: "text-accent-foreground",
  sage: "text-sage",
} as const

export function Eyebrow({
  children,
  tone = "clay",
}: {
  children: ReactNode
  tone?: keyof typeof toneClass
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-3 uppercase tracking-[4px] text-xs font-medium mb-3 ${toneClass[tone]}`}
    >
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: 16 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
        className="h-[2px] bg-current inline-block"
      />
      {children}
    </motion.div>
  )
}