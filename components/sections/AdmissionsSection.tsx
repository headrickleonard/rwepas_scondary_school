"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, FileText, Award } from "lucide-react"
import { toast } from "sonner"

const steps = [
  { icon: FileText, title: "Submit Application", desc: "Complete our online application form with academic records and recommendations." },
  { icon: Users, title: "Assessment & Interview", desc: "Prospective students participate in an entrance assessment and family interview." },
  { icon: Award, title: "Offer & Acceptance", desc: "Successful candidates receive offers. Secure your place with a deposit." },
  { icon: Calendar, title: "Orientation & Start", desc: "Join our welcoming orientation week and begin your journey at Rwepas Secondary School." },
]

export default function AdmissionsSection() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Application inquiry received. Our admissions team will contact you within 48 hours.", {
      description: "Thank you for your interest in Rwepas Secondary School.",
    })
    setFormData({ parentName: "", email: "", phone: "", childName: "", childAge: "", message: "" })
  }

  return (
    <section id="admissions" className="section bg-[#FAFAF8]">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="uppercase tracking-[4px] text-xs text-primary/70 mb-3">JOIN OUR COMMUNITY</div>
          <h2 className="heading">Begin your child&apos;s<br />extraordinary journey.</h2>
          <p className="subheading mt-5">Applications for the 2026/2027 academic year are now open. We welcome inquiries throughout the year.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="mb-8">
              <div className="font-display text-2xl tracking-tight mb-6">The Admissions Process</div>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-lg tracking-tight mb-1 flex items-center gap-3">
                        {step.title}
                      </div>
                      <p className="text-muted-foreground text-[15px] leading-snug">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="premium-card bg-white/70">
              <CardContent className="p-8 text-sm">
                <div className="font-medium mb-3">Key Dates — 2026/27 Intake</div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between"><span>Applications Open</span><span className="font-mono">Ongoing</span></div>
                  <div className="flex justify-between"><span>Early Decision Deadline</span><span className="font-mono">15 Feb 2026</span></div>
                  <div className="flex justify-between"><span>Regular Decision</span><span className="font-mono">30 Apr 2026</span></div>
                  <div className="flex justify-between"><span>Academic Year Begins</span><span className="font-mono">Sep 2026</span></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-7">
            <Card className="premium-card">
              <CardContent className="p-10">
                <div className="mb-8">
                  <div className="font-display text-3xl tracking-[-0.5px]">Make an Inquiry</div>
                  <p className="text-muted-foreground mt-2">Our admissions team personally responds to every inquiry with care and clarity.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs tracking-widest text-muted-foreground mb-2 block">PARENT / GUARDIAN NAME</label>
                      <Input 
                        value={formData.parentName} 
                        onChange={(e) => setFormData({...formData, parentName: e.target.value})} 
                        placeholder="Amina Juma" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-widest text-muted-foreground mb-2 block">EMAIL ADDRESS</label>
                      <Input 
                        type="email" 
                        value={formData.email} 
                        onChange={(e) => setFormData({...formData, email: e.target.value})} 
                        placeholder="you@email.com" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs tracking-widest text-muted-foreground mb-2 block">PHONE NUMBER</label>
                      <Input 
                        value={formData.phone} 
                        onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                        placeholder="+255 712 345 678" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-widest text-muted-foreground mb-2 block">CHILD&apos;S FULL NAME</label>
                      <Input 
                        value={formData.childName} 
                        onChange={(e) => setFormData({...formData, childName: e.target.value})} 
                        placeholder="Zahara Juma" 
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs tracking-widest text-muted-foreground mb-2 block">CHILD&apos;S CURRENT AGE / CLASS</label>
                    <Input 
                      value={formData.childAge} 
                      onChange={(e) => setFormData({...formData, childAge: e.target.value})} 
                      placeholder="13 years / Form 1" 
                    />
                  </div>

                  <div>
                    <label className="text-xs tracking-widest text-muted-foreground mb-2 block">WHAT ARE YOU MOST CURIOUS ABOUT?</label>
                    <Textarea 
                      value={formData.message} 
                      onChange={(e) => setFormData({...formData, message: e.target.value})} 
                      placeholder="We are particularly interested in boarding options and the arts programme..." 
                      className="min-h-[120px]" 
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto mt-2 h-14 px-14 rounded-2xl text-base">
                    Submit Inquiry
                  </Button>
                  <p className="text-xs text-muted-foreground">We respect your privacy. Your information is kept confidential.</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}