import type { AgentData } from "@/types/ai-agent";
import { BentoGrid } from "@/components/widgets";
import { getSectionImage } from "@/lib/section-images";

interface AgentFeaturesProps {
  agent: AgentData;
}

export function AgentFeatures({ agent }: AgentFeaturesProps) {
  const bentoA = getSectionImage("ai-agents", agent.slug, "bento-a") || {
    src: `/assets/images/ai-agents/${agent.slug}/bento-a.webp`,
    alt: `${agent.name} chat interface on smartphone`
  };

  const bentoB = getSectionImage("ai-agents", agent.slug, "bento-b") || {
    src: `/assets/images/ai-agents/${agent.slug}/bento-b.webp`,
    alt: `${agent.name} supporting automation flow`
  };

  // Find a real stat from heroStats (prefer second or third stat)
  const realStat = agent.heroStats[1] || agent.heroStats[0] || { value: "98%", label: "Satisfaction" };

  return (
    <BentoGrid
      badgeText="Enterprise AI Capabilities"
      title={agent.featuresSectionTitle}
      subtitle={agent.featuresSectionSubtitle}
      slug={agent.slug}
      features={agent.features}
      imageA={bentoA}
      imageB={bentoB}
      statItem={{
        value: realStat.value,
        label: realStat.label
      }}
    />
  );
}
