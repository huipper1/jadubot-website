import type { AgentData } from "@/types/ai-agent";
import { FeatureGrid } from "@/components/widgets";
import { getSectionImage } from "@/lib/section-images";

interface AgentFeaturesProps {
  agent: AgentData;
}

export function AgentFeatures({ agent }: AgentFeaturesProps) {
  const sectionImage = getSectionImage("ai-agents", agent.slug, "features");

  return (
    <FeatureGrid
      badgeText="Enterprise AI Capabilities"
      title={agent.featuresSectionTitle}
      subtitle={agent.featuresSectionSubtitle}
      features={agent.features}
      sectionImage={sectionImage}
      imagePosition="left"
    />
  );
}
