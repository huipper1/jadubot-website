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
    <section className="relative py-16 md:py-24 border-t border-white/10 bg-[#080b11]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-[#0b162b]/80 px-3.5 py-1 text-xs font-semibold text-[#38bdf8] shadow-sm">
            Frequently Asked Questions
          </div>
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            CPA Automation Technical Details
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Direct answers on comment-to-inbox mechanics, anti-ban pacing algorithms, and S2S postback attribution.
          </p>
        </div>

        <PopIn className="mx-auto mt-12 max-w-3xl" start="top 85%">
          <Accordion type="single" collapsible defaultValue="cpa-faq-0" className="space-y-4">
            {CPA_FAQS.map((faq, idx) => (
              <AccordionItem
                key={faq.question}
                value={`cpa-faq-${idx}`}
                className="rounded-2xl border border-white/10 bg-[#0d121c]/90 px-5 sm:px-6 py-1 backdrop-blur-md transition-colors data-[state=open]:border-[#0172ff]/50 data-[state=open]:bg-[#111726]"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-white hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-slate-300 leading-relaxed pb-4">
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
