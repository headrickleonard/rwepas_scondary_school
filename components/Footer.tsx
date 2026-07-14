import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-[#F5F2EE] border-t border-border/60 pt-20 pb-12">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-x-8 gap-y-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display text-xl tracking-[-1px]">TA</span>
              </div>
              <div>
                <div className="font-display text-3xl tracking-[-1.5px]">Tanzanite Academy</div>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md text-[15px] leading-relaxed">
              Illuminating young minds. Shaping future leaders. 
              A premier secondary school in the heart of Dar es Salaam.
            </p>
            <div className="mt-8 text-xs tracking-[3px] text-muted-foreground/70 font-medium">
              EXCELLENCE • INTEGRITY • GROWTH
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="font-medium text-sm tracking-widest mb-5 text-foreground/70">EXPLORE</div>
            <div className="space-y-3 text-[15px]">
              <Link href="#about" className="block text-foreground/80 hover:text-primary transition">Our Story</Link>
              <Link href="#academics" className="block text-foreground/80 hover:text-primary transition">Academics</Link>
              <Link href="#life" className="block text-foreground/80 hover:text-primary transition">Student Life</Link>
              <Link href="#campus" className="block text-foreground/80 hover:text-primary transition">Our Campus</Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="font-medium text-sm tracking-widest mb-5 text-foreground/70">ADMISSIONS</div>
            <div className="space-y-3 text-[15px]">
              <Link href="#admissions" className="block text-foreground/80 hover:text-primary transition">How to Apply</Link>
              <Link href="#admissions" className="block text-foreground/80 hover:text-primary transition">Fees & Scholarships</Link>
              <Link href="#admissions" className="block text-foreground/80 hover:text-primary transition">Book a Tour</Link>
              <Link href="#admissions" className="block text-foreground/80 hover:text-primary transition">Entry Requirements</Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="font-medium text-sm tracking-widest mb-5 text-foreground/70">STAY CONNECTED</div>
            <p className="text-muted-foreground text-sm mb-4">Receive our quarterly magazine and important updates.</p>
            <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); alert("Thank you! You are now subscribed.") }}>
              <Input 
                type="email" 
                placeholder="your@email.com" 
                className="h-12 rounded-2xl flex-1" 
                required 
              />
              <Button type="submit" size="default" className="rounded-2xl px-6">Join</Button>
            </form>
            <div className="mt-8 text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} Tanzanite Academy. All rights reserved.<br />
              Dar es Salaam, Tanzania
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/70 tracking-widest">
          <div>DESIGNED WITH PURPOSE FOR THE NEXT GENERATION OF LEADERS</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition">Instagram</a>
            <a href="#" className="hover:text-foreground transition">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  )
}