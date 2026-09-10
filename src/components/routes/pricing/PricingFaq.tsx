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
    <section className="relative py-16 md:py-24 border-t border-white/5 bg-[#080b11]">
      <div className="container mx-auto max-w-7xl px-4">
        <PopIn className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-[#0b162b]/80 px-3.5 py-1 text-xs font-semibold text-blue-200 shadow-sm">
            Frequently Asked Questions
          </div>
          <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Billing &amp; Pricing Questions
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Clear answers about payments, plan limits, Meta compliance, and our money-back guarantee.
          </p>
        </PopIn>

        <PopIn className="mx-auto mt-12 max-w-3xl" start="top 85%">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {PRICING_FAQS.map((item, idx) => (
              <AccordionItem
                key={item.question}
                value={`item-${idx}`}
                className="rounded-2xl border border-white/10 bg-[#0d121c]/90 px-5 sm:px-6 py-1 backdrop-blur-md transition-colors data-[state=open]:border-[#0172ff]/50 data-[state=open]:bg-[#111726]"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-white hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-slate-300 leading-relaxed pb-4">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Need help or custom plan prompt */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-[#0d1527] to-[#0d121c] p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
            <div>
              <h4 className="font-heading text-base font-bold text-white">
                Have a custom requirement or question?
              </h4>
              <p className="mt-1 text-xs text-slate-300">
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
                className="btn-black text-xs py-2.5 px-4 flex items-center gap-1.5 border border-white/15 hover:border-[#6dffae]/50 hover:text-[#6dffae]"
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
