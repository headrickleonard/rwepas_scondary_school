"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { Eyebrow } from "@/components/motion/eyebrow"
import { RevealGroup, revealItem } from "@/components/motion/reveal"

const faqs = [
  {
    question: "What curriculum does Rwepas follow?",
    answer: "We offer a rigorous curriculum (Forms 1–4) preparing students for the Tanzanian National Examinations.",
    tag: "Academics",
    tint: "primary" as const,
  },
  {
    question: "Do you offer boarding facilities?",
    answer: "Yes. We have modern, secure boarding houses for both boys and girls with 24/7 house parents, academic support, and a vibrant weekend programme. Boarding starts from Form 1.",
    tag: "Boarding",
    tint: "clay" as const,
  },
  {
    question: "What are the school fees?",
    answer: "Fees vary by year group and whether a student is day or boarding. We offer need-based scholarships and sibling discounts. Please contact our admissions office for the latest fee structure and scholarship opportunities.",
    tag: "Fees",
    tint: "accent" as const,
  },
  {
    question: "What is the student-teacher ratio?",
    answer: "Our average class size is 50–72 students, allowing for personalised attention and strong relationships between teachers and students.",
    tag: "Academics",
    tint: "primary" as const,
  },
  {
    question: "How do I apply?",
    answer: "Applications are accepted year-round. You can submit an online inquiry through this website or email admissions@rwepas.ac.tz. Shortlisted candidates are invited for an entrance assessment and family interview.",
    tag: "Admissions",
    tint: "sage" as const,
  },
  {
    question: "Does the school provide transport?",
    answer: "Yes. We operate a fleet of GPS-tracked buses covering major areas of Kahama including Msasani, Oyster Bay, Mikocheni, Kinondoni, and Upanga.",
    tag: "Transport",
    tint: "clay" as const,
  },
]

const tagClasses = {
  primary: "bg-primary/8 text-primary",
  clay: "bg-clay/10 text-clay",
  accent: "bg-accent/15 text-accent-foreground",
  sage: "bg-sage/10 text-sage",
} as const

const iconClasses = {
  primary: "text-primary",
  clay: "text-clay",
  accent: "text-accent-foreground",
  sage: "text-sage",
} as const

function FAQItem({ faq }: { faq: (typeof faqs)[number] }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div variants={revealItem} className="border-b border-border/60">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start gap-5 py-6 text-left group"
        aria-expanded={open}
      >
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-1 flex-shrink-0 ${iconClasses[faq.tint]}`}
        >
          <Plus className="h-5 w-5" />
        </motion.span>

        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-lg tracking-[-0.2px] group-hover:text-primary transition-colors">
              {faq.question}
            </span>
            <span className={`text-[11px] font-medium tracking-wide px-2.5 py-0.5 rounded-full ${tagClasses[faq.tint]}`}>
              {faq.tag}
            </span>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="text-[15px] leading-relaxed text-muted-foreground pt-4 pr-8">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section className="section bg-white border-t border-border/60">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 flex flex-col items-center">
          <Eyebrow tone="clay">FREQUENTLY ASKED QUESTIONS</Eyebrow>
          <h2 className="heading">Everything you need to know.</h2>
        </div>

        <RevealGroup className="w-full">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </RevealGroup>

        <div className="text-center mt-10 text-sm">
          Still have questions?{" "}
          <a href="#contact" className="text-primary underline underline-offset-4 hover:text-accent-foreground transition-colors">
            Contact our admissions team
          </a>
        </div>
      </div>
    </section>
  )
}