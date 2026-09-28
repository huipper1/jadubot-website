import type { AgentData } from "@/types/ai-agent";
import { FaqSection } from "@/components/widgets";

interface AgentFaqProps {
  agent: AgentData;
}

export function AgentFaq({ agent }: AgentFaqProps) {
  if (!agent.faqs || agent.faqs.length === 0) return null;

  return (
    <FaqSection
      badgeText="Clarifications & Specifics"
      title="Frequently Asked Questions"
      subtitle={`Clear answers about deploying the ${agent.name}.`}
      items={agent.faqs}
      idPrefix="agent-faq"
    />
  );
}
