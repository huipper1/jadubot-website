"use client";

import { PopIn } from "@/components/animations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/ui";

import { CPA_FAQS } from "./cpa-data";

export function CpaFaq() {
  return (
    <section className="relative border-t border-border bg-card py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl leading-tight font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            CPA Automation Technical Details
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Direct answers on comment-to-inbox mechanics, anti-ban pacing algorithms, and S2S
            postback attribution.
          </p>
        </div>

        <PopIn className="mx-auto mt-12 max-w-3xl" start="top 85%">
          <Accordion type="single" collapsible defaultValue="cpa-faq-0" className="space-y-4">
            {CPA_FAQS.map((faq, idx) => (
              <AccordionItem
                key={faq.question}
                value={`cpa-faq-${idx}`}
                className="rounded-2xl border border-border bg-card/90 px-5 py-1 shadow-card backdrop-blur-md transition-colors data-[state=open]:border-primary/50 data-[state=open]:bg-card sm:px-6"
              >
                <AccordionTrigger className="py-4 text-left text-sm font-semibold text-foreground hover:text-primary hover:no-underline sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
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
