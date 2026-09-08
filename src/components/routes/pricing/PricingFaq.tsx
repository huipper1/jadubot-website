"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/ui";
import { PopIn } from "@/components/animations";

const PRICING_FAQS = [
  {
    question: "Can I change my plan or cancel at any time?",
    answer:
      "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly from your dashboard. There are no lock-in contracts or cancellation penalties."
  },
  {
    question: "What happens if I exceed 500 subscribers on the Starter plan?",
    answer:
      "Your bot will continue replying to existing conversations without interruption. We will send you an alert notification recommending an upgrade to the Pro plan to enable new subscriber growth."
  },
  {
    question: "What payment methods are supported in Bangladesh?",
    answer:
      "We accept all major Bangladeshi payment methods including bKash, Nagad, Rocket, local Visa/Mastercard debit and credit cards, as well as international cards through our secure gateway."
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, all paid plans come with an unconditional 7-day money-back guarantee. If you are not satisfied for any reason, request a refund and we will promptly process it."
  }
];

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
