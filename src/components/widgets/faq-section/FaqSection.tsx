"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

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
}

export function FaqSection({
  badgeText = "Got Questions?",
  title = "Frequently Asked Questions",
  subtitle,
  items,
  idPrefix = "faq-item",
  className = ""
}: FaqSectionProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className={`relative border-t border-border/80 bg-surface-subtle/40 py-20 md:py-28 ${className}`}>
      <div className="container mx-auto max-w-4xl px-4">
        {/* Section Header */}
        <div className="mb-14 text-center">
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

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {items.map((faq, idx) => (
            <AccordionItem key={idx} value={`${idPrefix}-${idx}`}>
              <AccordionTrigger className="text-base font-bold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
