"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/ui";

const CATEGORIES = [
  {
    category: "General & Getting Started",
    items: [
      {
        question: "What is Jadubot and how does it work?",
        answer:
          "Jadubot is an AI-powered conversational marketing platform that automates customer communication across Facebook Messenger, Instagram DMs, and WhatsApp. It handles greeting messages, product catalogs, order processing, and comment-to-inbox auto-replies 24/7."
      },
      {
        question: "Do I need technical skills or coding experience?",
        answer:
          "Not at all. Jadubot is designed for business owners and non-technical staff. Everything is configured via pre-built templates or a drag-and-drop visual interface."
      },
      {
        question: "Does Jadubot support the Bengali (Bangla) language?",
        answer:
          "Yes! Jadubot is natively designed for Bangladesh. It understands standard Bangla script, Banglish (phonetic typing), and English."
      }
    ]
  },
  {
    category: "Facebook & Instagram Automations",
    items: [
      {
        question: "How does the Comment-to-Inbox auto-reply work?",
        answer:
          "When anyone comments on your Facebook or Instagram posts or ads, Jadubot automatically likes the comment, replies with an engaging public comment, and sends a private direct message containing full details and buy buttons."
      },
      {
        question: "Can Jadubot prevent customer comments on competitors' ads?",
        answer:
          "Jadubot includes auto-moderation tools that can instantly hide spam, phone numbers, or competitor links posted in your comment section to protect your leads."
      },
      {
        question: "Can I take orders directly inside Facebook Messenger?",
        answer:
          "Yes. Jadubot provides a full Messenger Commerce system where customers can view products, pick sizes and colors, submit their delivery address and phone number, and place an order without ever leaving the chat."
      }
    ]
  },
  {
    category: "Pricing & Billing",
    items: [
      {
        question: "Is there a completely free plan?",
        answer:
          "Yes, our Starter plan is completely free forever with up to 500 subscribers and basic comment automation."
      },
      {
        question: "What payment gateways are supported in Bangladesh?",
        answer:
          "We accept all major Bangladeshi payment methods including bKash, Nagad, Rocket, local Visa/Mastercard, and bank transfers."
      },
      {
        question: "What is the refund policy?",
        answer:
          "We offer a 7-day unconditional money-back guarantee on all our paid plans. If you are not satisfied, you can request a full refund through our ticket system."
      }
    ]
  }
];

export function FaqList() {
  return (
    <section className="relative py-12 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-12">
          {CATEGORIES.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-xl font-bold text-foreground border-b border-white/10 pb-3 mb-6">
                {cat.category}
              </h2>
              <Accordion
                type="single"
                collapsible
                defaultValue={cat.category.startsWith("General") ? "faq-0" : undefined}
                className="space-y-4"
              >
                {cat.items.map((item, idx) => (
                  <AccordionItem key={item.question} value={`faq-${idx}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>
                      <p>{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
