"use client";

import type { AgentData } from "@/types/ai-agent";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

interface AgentFaqProps {
  agent: AgentData;
}

export function AgentFaq({ agent }: AgentFaqProps) {
  if (!agent.faqs || agent.faqs.length === 0) return null;

  return (
    <section className="relative border-t border-border/80 bg-surface-subtle/40 py-20 md:py-28">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <span>Clarifications & Specifics</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Clear answers about deploying the {agent.name}.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {agent.faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`agent-faq-${idx}`}>
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
