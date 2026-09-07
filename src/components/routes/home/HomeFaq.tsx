"use client";

import { AccordionItem } from "@/ui";

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
  return (
    <section className="relative py-20 md:py-32 border-t border-[#373a41]/60 bg-[#0c0e12]">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="solution-badge">Knowledge Base</div>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-[#cecfd2]">
            Everything you need to know about Jadubot platform capabilities, billing, and setup.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {FAQS.map((faq, idx) => (
            <AccordionItem
              key={faq.question}
              title={faq.question}
              defaultOpen={idx === 0}
            >
              <p className="text-sm leading-relaxed text-[#cecfd2]">
                {faq.answer}
              </p>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
