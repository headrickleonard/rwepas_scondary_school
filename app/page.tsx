"use client"

import React, { useEffect } from "react"
import { motion } from "framer-motion"
import Lenis from "lenis"
import { ArrowRight, Users, Award, Globe, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import AboutSection from "@/components/sections/AboutSection"
import AcademicsSection from "@/components/sections/AcademicsSection"
import WhyChooseSection from "@/components/sections/WhyChooseSection"
import ResultsSection from "@/components/sections/ResultsSection"
import AdmissionsSection from "@/components/sections/AdmissionsSection"
import ContactSection from "@/components/sections/ContactSection"

export default function TanzaniteAcademy() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const scrollToAdmissions = () => {
    const element = document.getElementById("admissions")
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition - bodyRect - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-[#F8F6F3]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070" 
            alt="Tanzanite Academy students in a modern learning environment" 
            className="object-cover w-full h-full brightness-[0.65]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>

        <div className="container relative z-10 text-center text-white pt-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block mb-6 px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm tracking-[3px] font-medium">
              DAR ES SALAAM, TANZANIA • EST. 1998
            </div>

            <h1 className="display text-white mb-6 tracking-[-0.05em] leading-[0.92]">
              Where African<br /> brilliance<br /> meets the world.
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/90 font-light tracking-[-0.01em] mb-10">
              A premier secondary school nurturing the next generation of 
              thoughtful leaders, innovators, and changemakers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={scrollToAdmissions}
                className="bg-white text-primary hover:bg-white/95 h-14 px-10 text-base rounded-full shadow-xl group"
              >
                Begin Your Journey <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="border-white/70 text-white hover:bg-white/10 h-14 px-8 rounded-full backdrop-blur-sm text-base"
              >
                Watch Our Story
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-left">
              {[ { number: "27", label: "Years of Excellence" }, { number: "1,850+", label: "Students" }, { number: "98%", label: "University Placement" }, { number: "42", label: "Nationalities" } ].map((stat, index) => (
                <div key={index} className="border-l border-white/30 pl-5">
                  <div className="font-display text-4xl tracking-[-1.5px]">{stat.number}</div>
                  <div className="text-white/70 text-sm tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 text-xs tracking-[3px]">
          SCROLL TO BEGIN <div className="h-px w-6 bg-white/40 mt-2" />
        </div>
      </section>

      <AboutSection />
      <AcademicsSection />
      <WhyChooseSection />
      <ResultsSection />
      <AdmissionsSection />
      <ContactSection />
    </>
  )
}