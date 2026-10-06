import type { AgentData } from "@/types/ai-agent";
import { FaqSection } from "@/components/widgets";
import { getSectionImage } from "@/lib/section-images";

interface AgentFaqProps {
  agent: AgentData;
}

export function AgentFaq({ agent }: AgentFaqProps) {
  if (!agent.faqs || agent.faqs.length === 0) return null;

  const sectionImage = getSectionImage("ai-agents", agent.slug, "faq");

  return (
    <FaqSection
      badgeText="Clarifications & Specifics"
      title="Frequently Asked Questions"
      subtitle={`Clear answers about deploying the ${agent.name}.`}
      items={agent.faqs}
      idPrefix="agent-faq"
      sectionImage={sectionImage}
      imagePosition="left"
    />
  );
}
