"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#about", label: "Our Story" },
  { href: "#academics", label: "Academics" },
  { href: "#why-us", label: "Why Tanzanite" },
  { href: "#life", label: "Student Life" },
  { href: "#campus", label: "Campus" },
  { href: "#admissions", label: "Admissions" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition - bodyRect - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "nav-scrolled bg-[#FAFAF8]/95" 
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display text-xl tracking-[-1px]">TA</span>
          </div>
          <div>
            <div className="font-display text-2xl tracking-[-1.5px] text-foreground">Tanzanite</div>
            <div className="text-[10px] text-muted-foreground -mt-1 tracking-[2px]">ACADEMY</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-[0.01em]">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => scrollToSection("#admissions")}
            className="rounded-full border-primary/30 px-6"
          >
            Book a Visit
          </Button>
          <Button 
            size="sm"
            onClick={() => scrollToSection("#admissions")}
            className="rounded-full px-6 group"
          >
            Apply Now <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition" />
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t bg-[#FAFAF8]/98 backdrop-blur-xl"
          >
            <div className="container flex flex-col py-8 gap-6 text-lg">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-1 text-foreground/90 active:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 flex flex-col gap-3 border-t">
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection("#admissions")}
                  className="w-full justify-center rounded-2xl h-14"
                >
                  Book a Visit
                </Button>
                <Button 
                  onClick={() => scrollToSection("#admissions")}
                  className="w-full justify-center rounded-2xl h-14 group"
                >
                  Apply Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}