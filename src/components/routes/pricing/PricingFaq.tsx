"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/ui";
import { PopIn } from "@/components/animations";

import { PRICING_FAQS } from "./pricing-data";

export function PricingFaq() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <PopIn className="mx-auto max-w-3xl text-center">
          <div className="solution-badge">FAQ</div>
          <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Billing &amp; Pricing FAQs
          </h2>
          <p className="mt-3 text-sm text-[#cecfd2]">
            Frequently asked questions about billing, payment methods, and plan upgrades.
          </p>
        </PopIn>

        <PopIn className="mx-auto mt-10 max-w-3xl" start="top 82%">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {PRICING_FAQS.map((item, idx) => (
              <AccordionItem key={item.question} value={`item-${idx}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </PopIn>
      </div>
    </section>
  );
}
