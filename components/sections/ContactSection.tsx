"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="section bg-white border-t">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-12">
          <div className="lg:col-span-5">
            <div className="uppercase tracking-[4px] text-xs text-primary/70 mb-3">WE&apos;D LOVE TO MEET YOU</div>
            <h2 className="heading">Come and see<br />what makes us different.</h2>
            
            <div className="mt-10 space-y-8 text-[15px]">
              <div className="flex gap-5">
                <MapPin className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">Rwepas Secondary School</div>
                  <div className="text-muted-foreground">Plot 124, Nyihogo<br />Kahama, Tanzania</div>
                </div>
              </div>
              <div className="flex gap-5">
                <Phone className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">+255 22 266 8890</div>
                  <div className="text-muted-foreground">Admissions: +255 712 445 667</div>
                </div>
              </div>
              <div className="flex gap-5">
                <Mail className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">admissions@rwepas.ac.tz</div>
                  <div className="text-muted-foreground">info@rwepas.ac.tz</div>
                </div>
              </div>
              <div className="flex gap-5">
                <Clock className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">Office Hours</div>
                  <div className="text-muted-foreground">Monday - Friday: 7:30am - 4:30pm<br />Saturday: 8:00am - 12:00pm</div>
                </div>
              </div>
            </div>

            <Button 
              variant="outline" 
              size="lg" 
              className="mt-10 rounded-2xl"
              onClick={() => window.open("https://maps.google.com/?q=nyihogo+kahama", "_blank")}
            >
              Get Directions
            </Button>
          </div>

          {/* Map */}
          <div className="lg:col-span-7">
            <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-border/60 shadow-inner relative bg-[#F5F2EE]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8!2d39.25!3d-6.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDYnNDguMCJTIDM5wrAxNScwMC4wIkU!5e0!3m2!1sen!2stz!4v1700000000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.15]"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-black/5 to-transparent" />
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3 tracking-widest">Nyihogo • Kahama</p>
          </div>
        </div>
      </div>
    </section>
  )
}