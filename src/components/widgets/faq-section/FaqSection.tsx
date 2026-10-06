"use client";

import { useRef } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { usePopAnimation } from "@/lib/animations";

import { SectionImage } from "@/components/SectionImage";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  items: FaqItem[];
  idPrefix?: string;
  className?: string;
  sectionImage?: {
    src: string;
    alt: string;
    aspect?: "16/10" | "4/3" | "1/1" | "21/9" | "4/5" | "none";
    badge?: string;
  };
  imagePosition?: "left" | "right";
}

export function FaqSection({
  badgeText = "Got Questions?",
  title = "Frequently Asked Questions",
  subtitle,
  items,
  idPrefix = "faq-item",
  className = "",
  sectionImage,
  imagePosition = "left"
}: FaqSectionProps) {
  const headerRef = usePopAnimation<HTMLDivElement>({ start: "top 85%" });
  const visualRef = usePopAnimation<HTMLDivElement>({ start: "top 85%", delay: 0.1 });
  const accordionRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  usePopAnimation(itemsRef, {
    trigger: accordionRef,
    stagger: 0.06,
    start: "top 82%"
  });

  if (!items || items.length === 0) return null;

  return (
    <section className={`relative border-t border-border/80 bg-surface-subtle/40 py-20 md:py-28 ${className}`}>
      <div className={`container mx-auto px-4 ${sectionImage ? "max-w-7xl" : "max-w-4xl"}`}>
        {/* Section Header */}
        <div
          ref={headerRef}
          className="mb-14 origin-center text-center will-change-transform"
        >
          {badgeText && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <span>{badgeText}</span>
            </div>
          )}
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        {/* Content Layout */}
        {sectionImage ? (
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div
              ref={visualRef}
              className={`lg:col-span-5 ${imagePosition === "right" ? "lg:order-2" : "lg:order-1"}`}
            >
              <div className="sticky top-28">
                <SectionImage
                  src={sectionImage.src}
                  alt={sectionImage.alt}
                  aspect={sectionImage.aspect || "16/10"}
                  badge={sectionImage.badge}
                />
              </div>
            </div>

            <div
              ref={accordionRef}
              className={`lg:col-span-7 ${imagePosition === "right" ? "lg:order-1" : "lg:order-2"}`}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {items.map((faq, idx) => (
                  <div
                    key={idx}
                    ref={(el) => {
                      if (el) itemsRef.current[idx] = el;
                    }}
                    className="will-change-transform"
                  >
                    <AccordionItem value={`${idPrefix}-${idx}`}>
                      <AccordionTrigger className="text-base font-bold text-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                ))}
              </Accordion>
            </div>
          </div>
        ) : (
          <div ref={accordionRef}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {items.map((faq, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    if (el) itemsRef.current[idx] = el;
                  }}
                  className="will-change-transform"
                >
                  <AccordionItem value={`${idPrefix}-${idx}`}>
                    <AccordionTrigger className="text-base font-bold text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
        )}
      </div>
    </section>
  );
}
