"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  SectionHeader
} from "@/ui";
import { PopIn } from "@/components/animations";
import { SERVICE_FAQS } from "./service-data";

export function ServiceFaq() {
  return (
    <section className="relative py-16 md:py-24 border-t border-border/60">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            badge="Frequently Asked Questions"
            badgeIcon={false}
            title="Common Questions About Our Automation Services"
            description="Everything you need to know about setting up, running, and scaling with Jadubot."
            className="mb-12"
          />

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
