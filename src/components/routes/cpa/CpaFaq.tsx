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
    <section className="relative py-16 md:py-24 border-t border-[#373a41]/60">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1 text-xs font-semibold text-brand">
              Performance Marketer FAQ
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              CPA Automation Questions &amp; Technical Details
            </h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Direct answers to help you run compliant, high-ROI affiliate campaigns.
            </p>
          </div>

          <PopIn>
            <Accordion type="single" collapsible defaultValue="cpa-faq-0" className="space-y-4">
              {CPA_FAQS.map((faq, idx) => (
                <AccordionItem key={faq.question} value={`cpa-faq-${idx}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </PopIn>
        </div>
      </div>
    </section>
  );
}
