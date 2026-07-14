"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

const campusImages = [
  { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2070", alt: "Modern classroom at Rwepas Secondary School", caption: "Bright, airy classrooms designed for collaborative learning" },
  { src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2070", alt: "Science laboratory", caption: "Fully equipped science laboratories" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070", alt: "School library and reading space", caption: "Extensive library with quiet study zones" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070", alt: "Sports field and facilities", caption: "Multi-purpose sports fields and gymnasium" },
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070", alt: "Students in modern learning space", caption: "Technology-enabled learning environments" },
  { src: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?q=80&w=2070", alt: "Boarding house common area", caption: "Comfortable and secure boarding facilities" },
]

export default function CampusSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="campus" className="section bg-[#FAFAF8]">
      <div className="container">
        <div className="max-w-3xl mb-14">
          <div className="uppercase tracking-[4px] text-xs text-primary/70 mb-3">OUR HOME</div>
          <h2 className="heading">A campus designed<br />for growth.</h2>
          <p className="subheading mt-5">
            Our thoughtfully designed campus in Msasani provides a safe, inspiring, and beautiful environment 
            where students thrive academically, socially, and emotionally.
          </p>
        </div>

        <div className="masonry">
          {campusImages.map((image, index) => (
            <div 
              key={index} 
              className="masonry-item group relative overflow-hidden rounded-3xl cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.06]" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70 opacity-70 group-hover:opacity-90 transition" />
              <div className="absolute bottom-0 left-0 p-7 text-white">
                <p className="text-lg font-medium tracking-tight pr-8">{image.caption}</p>
              </div>
              <div className="absolute top-5 right-5 px-4 py-1.5 rounded-full bg-white/90 text-xs font-medium text-primary tracking-widest opacity-0 group-hover:opacity-100 transition">
                VIEW LARGER
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">Click any image to view in full screen</p>

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="p-0 max-w-[95vw] md:max-w-[1200px] bg-black border-none">
            {selectedImage !== null && (
              <div className="relative">
                <img 
                  src={campusImages[selectedImage].src} 
                  alt={campusImages[selectedImage].alt}
                  className="w-full h-auto max-h-[85vh] object-contain" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 text-white">
                  <p className="text-2xl font-display tracking-tight">{campusImages[selectedImage].caption}</p>
                </div>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}