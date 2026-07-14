"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What curriculum does Rwepas follow?",
    answer: "We offer a rigorous blend of the Cambridge IGCSE curriculum (Forms 1–4) and the Tanzanian National Curriculum, ensuring students are prepared for both local national examinations and international opportunities.",
  },
  {
    question: "Do you offer boarding facilities?",
    answer: "Yes. We have modern, secure boarding houses for both boys and girls with 24/7 house parents, academic support, and a vibrant weekend programme. Boarding starts from Form 1.",
  },
  {
    question: "What are the school fees?",
    answer: "Fees vary by year group and whether a student is day or boarding. We offer need-based scholarships and sibling discounts. Please contact our admissions office for the latest fee structure and scholarship opportunities.",
  },
  {
    question: "What is the student-teacher ratio?",
    answer: "Our average class size is 20–22 students, allowing for personalised attention and strong relationships between teachers and students.",
  },
  {
    question: "How do I apply?",
    answer: "Applications are accepted year-round. You can submit an online inquiry through this website or email admissions@rwepas.ac.tz. Shortlisted candidates are invited for an entrance assessment and family interview.",
  },
  {
    question: "Does the school provide transport?",
    answer: "Yes. We operate a fleet of GPS-tracked buses covering major areas of Dar es Salaam including Msasani, Oyster Bay, Mikocheni, Kinondoni, and Upanga.",
  },
]

export default function FAQSection() {
  return (
    <section className="section bg-white border-t">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[4px] text-xs text-primary/70 mb-3">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="heading">Everything you need to know.</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-10 text-sm">
          Still have questions? <a href="#contact" className="text-primary underline underline-offset-4">Contact our admissions team</a>
        </div>
      </div>
    </section>
  )
}