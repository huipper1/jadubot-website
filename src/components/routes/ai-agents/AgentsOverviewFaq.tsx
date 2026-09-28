"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export function AgentsOverviewFaq() {
  const faqs = [
    {
      question: "What is a Jadubot AI Agent?",
      answer:
        "A Jadubot AI Agent is an autonomous conversational worker with its own role, custom system prompt, grounded knowledge sources, routing instructions, and available actions (such as booking meetings, sending catalog images, or processing orders)."
    },
    {
      question: "Can I deploy multiple specialized agents on the same bot?",
      answer:
        "Yes. Jadubot allows you to create and activate multiple specialized agents (e.g., Lead Qualification, Customer Support, and Sales Agent) under a single phone number or social page. Inbound messages are intelligently routed to the right agent automatically."
    },
    {
      question: "How does Jadubot choose the right agent for a message?",
      answer:
        "Jadubot evaluates customer intent using high-speed language classification. If a customer asks 'How do I exchange my size?', the Customer Support agent takes over. If they ask 'How much for 50 pieces?', the Sales Agent responds."
    },
    {
      question: "Can each agent use different knowledge sources?",
      answer:
        "Yes. You can assign specific URLs, documents, spreadsheets, or catalog feeds to individual agents. For instance, your Sales Agent can access current inventory levels, while your Support Agent reads warranty and shipping policies."
    },
    {
      question: "Do AI Agents replace my existing visual flows?",
      answer:
        "No. AI Agents work synergistically with your existing visual flows. An agent can answer open-ended questions in natural conversation and then trigger a visual flow whenever a structured form or button-based menu is preferred."
    },
    {
      question: "How do AI Agents escalate to human agents?",
      answer:
        "Agents continuously monitor customer sentiment. If an inquiry requires manual discretion or the user asks to speak with a human, the bot pauses and transfers the chat to your team's Shared Inbox with a concise summary."
    }
  ];

  return (
    <section className="relative border-t border-border/80 bg-surface-subtle/40 py-20 md:py-28">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <span>Common Questions</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            AI Workforce FAQs
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Learn more about configuring, routing, and scaling AI agents across your business.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`overview-faq-${idx}`}>
              <AccordionTrigger className="text-base font-bold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
