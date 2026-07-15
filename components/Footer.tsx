"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react"

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group relative inline-block text-[15px] text-primary-foreground/75 hover:text-primary-foreground transition-colors w-fit">
      {children}
      <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  )
}

export default function Footer() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-10 relative overflow-hidden">
      {/* single restrained signature: a hairline arc, not a pattern */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full border border-accent/10 pointer-events-none" />

      <div className="container relative">
        {/* Large closing statement — the one bold moment in the footer */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-20"
        >
          <div className="font-display text-4xl md:text-5xl tracking-[-0.03em] leading-[1.05]">
            Rooted in values.
            <br />
            <span className="text-accent">Rising to excellence.</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-x-8 gap-y-14 border-t border-primary-foreground/10 pt-14">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display text-xl tracking-[-1px]">RS</span>
              </div>
              <div className="font-display text-2xl tracking-[-1px]">Rwepas Secondary School</div>
            </div>
            <p className="text-primary-foreground/60 max-w-sm text-[14.5px] leading-relaxed">
              A premier secondary school shaping leaders of character and purpose in Kahama, Tanzania.
            </p>
            <div className="mt-8 text-xs tracking-[3px] text-accent/80 font-medium">
              EXCELLENCE · CHARACTER · SERVICE
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <div className="font-medium text-xs tracking-widest mb-5 text-primary-foreground/45">EXPLORE</div>
            <div className="space-y-3.5">
              <FooterLink href="#about">Our Story</FooterLink>
              <FooterLink href="#academics">Academics</FooterLink>
              <FooterLink href="#life">Student Life</FooterLink>
              <FooterLink href="#campus">Our Campus</FooterLink>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="font-medium text-xs tracking-widest mb-5 text-primary-foreground/45">ADMISSIONS</div>
            <div className="space-y-3.5">
              <FooterLink href="#admissions">How to Apply</FooterLink>
              <FooterLink href="#admissions">Fees & Scholarships</FooterLink>
              <FooterLink href="#admissions">Book a Tour</FooterLink>
              <FooterLink href="#admissions">Entry Requirements</FooterLink>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <div className="font-medium text-xs tracking-widest mb-5 text-primary-foreground/45">STAY CONNECTED</div>
            <p className="text-primary-foreground/60 text-sm mb-4">Receive our quarterly magazine and important updates.</p>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <Input
                type="email"
                placeholder="your@email.com"
                required
                className="h-12 rounded-2xl flex-1 bg-primary-foreground/5 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-accent"
              />
              <Button
                type="submit"
                size="default"
                className="rounded-2xl px-5 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {submitted ? "Sent" : <ArrowRight className="h-4 w-4" />}
              </Button>
            </form>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-xs text-accent"
              >
                You're subscribed — welcome to the Rwepas community.
              </motion.p>
            )}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/45 tracking-widest">
          <div>© {new Date().getFullYear()} RWEPAS SECONDARY SCHOOL · KAHAMA, TANZANIA</div>
          <div className="flex gap-5">
            <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-accent transition-colors"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}