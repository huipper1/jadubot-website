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
    <section className="relative py-12 md:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl space-y-12">
          {FAQ_CATEGORIES.map((cat, catIdx) => (
            <PopIn key={cat.category}>
              <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-6">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/15 text-[11px] font-bold text-brand">
                  0{catIdx + 1}
                </span>
                <h2 className="text-xl font-bold text-foreground">
                  {cat.category}
                </h2>
              </div>

              <Accordion
                type="single"
                collapsible
                defaultValue={catIdx === 0 ? "faq-0-0" : undefined}
                className="space-y-4"
              >
                {cat.items.map((item, idx) => (
                  <AccordionItem
                    key={item.question}
                    value={`faq-${catIdx}-${idx}`}
                  >
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </PopIn>
          ))}
        </div>
      </div>
    </section>
  );
}
