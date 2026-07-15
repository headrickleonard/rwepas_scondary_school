"use client"

import { useState, useEffect, useCallback } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Eyebrow } from "@/components/motion/eyebrow"
import { ScrollRevealText } from "@/components/motion/scroll-reveal-text"
import { RevealGroup, revealItem } from "@/components/motion/reveal"

const campusImages = [
  { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2070", alt: "Modern classroom at Rwepas Secondary School", caption: "Bright, airy classrooms designed for collaborative learning", area: "hero" as const, size: "lg" as const },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070", alt: "School library and reading space", caption: "Extensive library with quiet study zones", area: "lib" as const, size: "md" as const },
  { src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2070", alt: "Science laboratory", caption: "Fully equipped science laboratories", area: "lab" as const, size: "sm" as const },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070", alt: "Sports field and facilities", caption: "Multi-purpose sports fields", area: "sport" as const, size: "sm" as const },
  { src: "https://images.unsplash.com/photo-1536337005238-94b997371b40?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D?q=80&w=2070", alt: "Students in modern learning space", caption: "Technology-enabled learning environments", area: "tech" as const, size: "md" as const },
  { src: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?q=80&w=2070", alt: "Boarding house common area", caption: "Comfortable and secure boarding facilities", area: "board" as const, size: "md" as const },
]

const areaClasses = {
  hero: "area-hero",
  lib: "area-lib",
  lab: "area-lab",
  sport: "area-sport",
  tech: "area-tech",
  board: "area-board",
} as const

const captionClasses = {
  lg: "text-2xl md:text-3xl",
  md: "text-lg",
  sm: "text-base",
} as const

export default function CampusSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const showNext = useCallback(() => {
    setSelectedImage((i) => (i === null ? null : (i + 1) % campusImages.length))
  }, [])
  const showPrev = useCallback(() => {
    setSelectedImage((i) => (i === null ? null : (i - 1 + campusImages.length) % campusImages.length))
  }, [])

  useEffect(() => {
    if (selectedImage === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null)
      if (e.key === "ArrowRight") showNext()
      if (e.key === "ArrowLeft") showPrev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [selectedImage, showNext, showPrev])

  return (
    <section id="campus" className="section bg-secondary/40">
      <div className="container">
        <div className="max-w-3xl mb-14">
          <Eyebrow tone="clay">OUR HOME</Eyebrow>
          <h2 className="heading">A campus designed<br />for growth.</h2>
          <ScrollRevealText
            as="p"
            className="subheading mt-5"
            text="Our thoughtfully designed campus in Kahama provides a safe, inspiring, and beautiful environment where students thrive academically, socially, and emotionally."
          />
        </div>

        <RevealGroup className="campus-grid">
          {campusImages.map((image, index) => (
            <motion.div
              key={index}
              variants={revealItem}
              className={`${areaClasses[image.area]} group relative overflow-hidden rounded-3xl cursor-pointer`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/15 to-primary/85 opacity-70 group-hover:opacity-90 transition" />
              <div className="absolute bottom-0 left-0 p-7 text-primary-foreground">
                <p className={`font-medium tracking-tight pr-8 ${captionClasses[image.size]}`}>{image.caption}</p>
              </div>
              <div className="absolute top-5 right-5 px-4 py-1.5 rounded-full bg-primary-foreground/90 text-xs font-medium text-primary tracking-widest opacity-0 group-hover:opacity-100 transition">
                VIEW LARGER
              </div>
            </motion.div>
          ))}
        </RevealGroup>

        <p className="text-center text-sm text-muted-foreground mt-8">Click any image to view in full screen</p>

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="p-0 max-w-[95vw] md:max-w-[1200px] bg-primary border-none overflow-hidden">
            {selectedImage !== null && (
              <div className="relative">
                {/* fixed-height stage — image ratio can never change dialog height between slides */}
                <div className="relative w-full h-[70vh] bg-primary flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      src={campusImages[selectedImage].src}
                      alt={campusImages[selectedImage].alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </AnimatePresence>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/95 to-transparent p-8 text-primary-foreground">
                  <div className="flex items-end justify-between gap-4">
                    <p className="text-2xl font-display tracking-tight">{campusImages[selectedImage].caption}</p>
                    <span className="text-sm text-primary-foreground/60 tabular-nums whitespace-nowrap mb-1">
                      {selectedImage + 1} / {campusImages.length}
                    </span>
                  </div>
                </div>

                <button onClick={() => setSelectedImage(null)} aria-label="Close" className="absolute top-6 right-6 p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition">
                  <X className="h-5 w-5" />
                </button>
                <button onClick={showPrev} aria-label="Previous image" className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={showNext} aria-label="Next image" className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}