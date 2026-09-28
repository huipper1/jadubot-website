"use client";

import { PopIn } from "@/components/animations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/ui";

import { FAQ_CATEGORIES } from "./faq-data";

export function FaqList() {
  return (
    <section className="relative pb-16 sm:pb-20 md:pb-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="space-y-12">
          {FAQ_CATEGORIES.map((category, catIdx) => (
            <PopIn key={category.category} delay={catIdx * 0.05}>
              {/* Category Header */}
              <div className="mb-6 flex items-center justify-between border-b border-border pb-3.5">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0172ff]/15 font-mono text-[11px] font-bold text-sky-400">
                    0{catIdx + 1}
                  </span>
                  <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                    {category.category}
                  </h2>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
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
                      className="rounded-2xl border border-border bg-card/80 backdrop-blur-md transition-all duration-300 hover:border-primary/40 data-[state=open]:border-primary/50 data-[state=open]:bg-card data-[state=open]:shadow-card"
                    >
                      <AccordionTrigger className="p-5 text-left text-sm font-semibold text-foreground hover:text-primary sm:text-base">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pt-0 pb-5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
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
