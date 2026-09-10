"use client";

import { MessageCircle, Calendar } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/ui";
import { PopIn } from "@/components/animations";
import { CALENDLY_DEMO_URL } from "@/config/site";

import { PRICING_FAQS } from "./pricing-data";

export function PricingFaq() {
  return (
    <section className="relative py-16 md:py-24 border-t border-border/60 bg-card">
      <div className="container mx-auto max-w-7xl px-4">
        <PopIn className="mx-auto max-w-3xl text-center">
          <div className="solution-badge inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/80 px-3.5 py-1 text-xs font-semibold text-primary shadow-sm">
            Frequently Asked Questions
          </div>
          <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Billing &amp; Pricing Questions
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Clear answers about payments, plan limits, Meta compliance, and our money-back guarantee.
          </p>
        </PopIn>

        <PopIn className="mx-auto mt-12 max-w-3xl" start="top 85%">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {PRICING_FAQS.map((item, idx) => (
              <AccordionItem
                key={item.question}
                value={`item-${idx}`}
                className="rounded-2xl border border-border bg-card/90 px-5 sm:px-6 py-1 shadow-card backdrop-blur-md transition-colors data-[state=open]:border-primary/50 data-[state=open]:bg-card"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Need help or custom plan prompt */}
          <div className="mt-12 rounded-2xl border border-border bg-card dark:bg-gradient-to-r dark:from-[#0d1527] dark:to-[#0d121c] p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6 shadow-card">
            <div>
              <h4 className="font-heading text-base font-bold text-foreground">
                Have a custom requirement or question?
              </h4>
              <p className="mt-1 text-xs text-muted-foreground">
                Our Bangladeshi solutions team is available to help you pick the right plan.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={CALENDLY_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2.5 px-4 flex items-center gap-1.5"
              >
                <Calendar className="h-3.5 w-3.5" />
                <span>Book Live Demo</span>
              </a>
              <a
                href="https://wa.me/8801700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-black text-xs py-2.5 px-4 flex items-center gap-1.5 border border-border hover:border-[#6dffae]/50 hover:text-[#6dffae]"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#6dffae]" />
                <span>WhatsApp Support</span>
              </a>
            </div>
          </div>
        </PopIn>
      </div>
    </section>
  );
}
