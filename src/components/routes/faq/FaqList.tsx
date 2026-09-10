"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/ui";
import { PopIn } from "@/components/animations";
import { FAQ_CATEGORIES } from "./faq-data";

export function FaqList() {
  return (
    <section className="relative pb-16 sm:pb-20 md:pb-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="space-y-12">
          {FAQ_CATEGORIES.map((category, catIdx) => (
            <PopIn key={category.category} delay={catIdx * 0.05}>
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 mb-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0172ff]/15 text-[11px] font-bold font-mono text-sky-400">
                    0{catIdx + 1}
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-white font-heading">
                    {category.category}
                  </h2>
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  {category.items.length} {category.items.length === 1 ? "question" : "questions"}
                </span>
              </div>

              {/* Accordion List for this category */}
              <Accordion
                type="single"
                collapsible
                defaultValue={catIdx === 0 ? `faq-${catIdx}-0` : undefined}
                className="space-y-3.5"
              >
                {category.items.map((item, itemIdx) => {
                  const itemKey = `faq-${catIdx}-${itemIdx}`;

                  return (
                    <AccordionItem
                      key={itemKey}
                      value={itemKey}
                      className="rounded-2xl border border-white/10 bg-[#0d121c]/80 backdrop-blur-md transition-all duration-300 hover:border-white/20 data-[state=open]:border-[#0172ff]/50 data-[state=open]:bg-[#0d1422]/95 data-[state=open]:shadow-[0_4px_24px_rgba(1,114,255,0.15)]"
                    >
                      <AccordionTrigger className="p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-[#93c5fd]">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-5 pt-0 text-xs sm:text-sm leading-relaxed text-slate-300">
                        <p>{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </PopIn>
          ))}
        </div>
      </div>
    </section>
  );
}
