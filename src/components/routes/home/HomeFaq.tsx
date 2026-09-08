"use client";

import { useRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/ui";
import { gsap, useGSAP } from "@/lib/animations";

const FAQS = [
  {
    question: "Do AI replies and comment replies count toward my message limit?",
    answer:
      "Yes, only automated AI replies (both direct answers and suggestive recommendations) and automated comment-to-inbox messages count toward your monthly message quota."
  },
  {
    question: "Can I purchase additional messages if I reach my plan limit?",
    answer:
      "Yes! You can extend your message credits at any time from the Billing & Subscription section in your Jadubot portal without upgrading your entire plan."
  },
  {
    question: "Does Jadubot support the Bengali (Bangla) language?",
    answer:
      "Yes! Jadubot is designed specifically for Bangladeshi merchants. It understands and replies naturally in standard Bangla script, phonetic Banglish, and English."
  },
  {
    question: "How do I connect my product inventory to Jadubot?",
    answer:
      "You can connect your WooCommerce, Shopify, or custom product catalog with one click. You can also upload items directly into Jadubot's built-in Messenger Commerce manager."
  },
  {
    question: "How is my customer data stored and protected?",
    answer:
      "We use secure cloud infrastructure and strictly follow Meta's official Platform Data Protection policies for Facebook Messenger, Instagram DMs, and WhatsApp Business API."
  },
  {
    question: "What payment methods are supported for Jadubot subscriptions in Bangladesh?",
    answer:
      "We accept all major local payment methods including bKash, Nagad, Rocket, local Visa/Mastercard credit and debit cards, and direct bank transfers."
  }
];

export function HomeFaq() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const accordionRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      // 1. Header pop animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          {
            scale: 0.88,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true
            }
          }
        );
      }

      // 2. FAQ Accordion items pop animation
      const validItems = itemsRef.current.filter(Boolean);
      if (validItems.length > 0) {
        gsap.fromTo(
          validItems,
          {
            scale: 0.88,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: accordionRef.current || validItems[0],
              start: "top 82%",
              once: true
            }
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 border-t border-[#373a41]/60 bg-[#0c0e12]"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="mx-auto max-w-2xl text-center will-change-transform origin-center"
        >
          <div className="solution-badge">Knowledge Base</div>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-[#cecfd2]">
            Everything you need to know about Jadubot platform capabilities, billing, and setup.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div ref={accordionRef} className="mx-auto mt-14 max-w-3xl">
          <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.question}
                ref={(el) => {
                  if (el) itemsRef.current[idx] = el;
                }}
                className="will-change-transform origin-center"
              >
                <AccordionItem value={`faq-${idx}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm leading-relaxed text-[#cecfd2]">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
