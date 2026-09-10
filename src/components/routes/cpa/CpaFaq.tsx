"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/ui";
import { PopIn } from "@/components/animations";
import { CPA_FAQS } from "./cpa-data";

export function CpaFaq() {
  return (
    <section className="relative py-16 md:py-24 border-t border-border bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="solution-badge inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/80 px-3.5 py-1 text-xs font-semibold text-primary shadow-sm">
            Frequently Asked Questions
          </div>
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            CPA Automation Technical Details
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Direct answers on comment-to-inbox mechanics, anti-ban pacing algorithms, and S2S postback attribution.
          </p>
        </div>

        <PopIn className="mx-auto mt-12 max-w-3xl" start="top 85%">
          <Accordion type="single" collapsible defaultValue="cpa-faq-0" className="space-y-4">
            {CPA_FAQS.map((faq, idx) => (
              <AccordionItem
                key={faq.question}
                value={`cpa-faq-${idx}`}
                className="rounded-2xl border border-border bg-card/90 px-5 sm:px-6 py-1 shadow-card backdrop-blur-md transition-colors data-[state=open]:border-primary/50 data-[state=open]:bg-card"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </PopIn>
      </div>
    </section>
  );
}
