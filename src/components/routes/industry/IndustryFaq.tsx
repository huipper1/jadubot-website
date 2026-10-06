"use client";

import { useState } from "react";

import { CaretDown as ChevronDown } from "@/components/icons";

import { PopIn } from "@/components/animations";
import { cn } from "@/utils";

import type { IndustryData, IndustryFaqItem } from "./industry-data";

import { SectionImage } from "@/components/SectionImage";
import { getSectionImage } from "@/lib/section-images";

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

  const faqImg = getSectionImage("industry", industry.slug, "faq");

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 md:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#0172ff]/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <PopIn>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {industry.name} Automation FAQs
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Clear answers to technical integration, security, and setup questions.
            </p>
          </PopIn>
        </div>

        {/* Q&A Accordion with Side Image */}
        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {faqImg && (
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <SectionImage
                  src={faqImg.src}
                  alt={faqImg.alt}
                  aspect="16/10"
                  badge="Integration Security"
                />
              </div>
            </div>
          )}

          <div className={faqImg ? "space-y-4 lg:col-span-7" : "mx-auto max-w-4xl space-y-4"}>
            {faqs.map((faq: IndustryFaqItem, index: number) => {
              const isOpen = openIndex === index;

              return (
                <PopIn key={index} delay={index * 0.05}>
                  <div
                    className={cn(
                      "overflow-hidden rounded-2xl border transition-all duration-300",
                      isOpen
                        ? "border-primary/40 bg-card/90 shadow-card"
                        : "border-border/60 bg-card/40 hover:border-border hover:bg-card/70"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between p-5 text-left sm:p-6"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4 text-base font-semibold text-foreground sm:text-lg">
                        {faq.question}
                      </span>
                      <div
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300",
                          isOpen
                            ? "rotate-180 border-primary bg-primary/20 text-primary"
                            : "border-border bg-muted text-muted-foreground"
                        )}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="animate-in border-t border-border/60 px-5 pt-1 pb-6 text-sm leading-relaxed text-muted-foreground duration-200 fade-in-50 sm:px-6 sm:text-base">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </PopIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
