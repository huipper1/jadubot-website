"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { PopIn } from "@/components/animations";
import { cn } from "@/utils";
import type { IndustryData, IndustryFaqItem } from "./industry-data";

interface IndustryFaqProps {
  industry: IndustryData;
}

export function IndustryFaq({ industry }: IndustryFaqProps) {
  const { faqs } = industry;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 sm:py-24 md:py-28 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#0172ff]/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <PopIn>
            <div className="solution-badge">
              <HelpCircle className="h-3.5 w-3.5 text-blue-400" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {industry.name} Automation FAQs
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Clear answers to technical integration, security, and setup questions.
            </p>
          </PopIn>
        </div>

        {/* Q&A Accordion */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq: IndustryFaqItem, index: number) => {
            const isOpen = openIndex === index;

            return (
              <PopIn key={index} delay={index * 0.05}>
                <div
                  className={cn(
                    "rounded-2xl border transition-all duration-300 overflow-hidden",
                    isOpen
                      ? "border-primary/40 bg-card/90 shadow-card"
                      : "border-border/60 bg-card/40 hover:border-border hover:bg-card/70"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300",
                        isOpen
                          ? "border-primary bg-primary/20 text-primary rotate-180"
                          : "border-border bg-muted text-muted-foreground"
                      )}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-muted-foreground border-t border-border/60 animate-in fade-in-50 duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </PopIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
