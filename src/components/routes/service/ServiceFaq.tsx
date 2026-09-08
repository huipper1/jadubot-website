"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/ui";
import { PopIn } from "@/components/animations";
import { SERVICE_FAQS } from "./service-data";

export function ServiceFaq() {
  return (
    <section className="relative py-16 md:py-24 border-t border-[#373a41]/60">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1 text-xs font-semibold text-brand">
              Frequently Asked Questions
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Common Questions About Our Automation Services
            </h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Everything you need to know about setting up, running, and scaling with Jadubot.
            </p>
          </div>

          <PopIn>
            <Accordion type="single" collapsible defaultValue="service-faq-0" className="space-y-4">
              {SERVICE_FAQS.map((faq, idx) => (
                <AccordionItem key={faq.question} value={`service-faq-${idx}`}>
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
