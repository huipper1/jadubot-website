"use client";

import { MessageCircle, Calendar } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/ui";
import { CALENDLY_DEMO_URL } from "@/config/site";
import { SERVICE_FAQS } from "./service-data";
import { PopIn } from "@/components/animations";

export function ServiceFaq() {
  return (
    <section className="relative py-20 md:py-24 lg:py-28 border-t border-border/70">
      <PopIn>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            {/* Left Column: Title and Contact Options */}
            <div className="lg:w-[380px] xl:w-[420px] lg:shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[46px] lg:leading-[1.15]">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Everything you need to know about setting up, running, and scaling with Jadubot&apos;s automation services.
              </p>

              {/* Need Custom Help Card */}
              <div className="mt-8 rounded-2xl border border-border bg-card/80 p-5 shadow-xs">
                <h3 className="font-heading text-sm font-bold text-foreground">
                  Have questions about our services?
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Talk with our local automation specialists for tailored setups across Facebook, Instagram, and WhatsApp.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  <a
                    href={CALENDLY_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs !py-2 !px-3.5 inline-flex items-center gap-1.5"
                  >
                    <Calendar className="h-3 w-3" />
                    <span>Book Walkthrough</span>
                  </a>
                  <a
                    href="https://wa.me/8801700000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-black text-xs !py-2 !px-3.5 inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="h-3 w-3 text-emerald-500" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Two-column style Accordion */}
            <div className="flex flex-1 flex-col">
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
                {SERVICE_FAQS.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border-b border-border/80 py-1"
                  >
                    <AccordionTrigger className="text-left font-heading text-base sm:text-lg font-bold text-foreground hover:text-primary hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-5 pr-6">
                      <p>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </PopIn>
    </section>
  );
}
