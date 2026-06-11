'use client'

import { faqs } from '@/data/constants'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQSection() {
  return (
    <section className="py-24" id="faq">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="text-center mb-12 fade-in">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-3">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
        </div>
        <Accordion className="space-y-4 fade-in">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-[--color-card-border] rounded-xl bg-surface px-6 data-[state=open]:border-l-4 data-[state=open]:border-l-primary overflow-hidden"
            >
              <AccordionTrigger className="text-sm font-medium text-white hover:text-primary no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
