import type { AgentData } from "@/types/ai-agent";
import { FeatureGrid } from "@/components/widgets";

interface AgentFeaturesProps {
  agent: AgentData;
}

export function AgentFeatures({ agent }: AgentFeaturesProps) {
  return (
    <FeatureGrid
      badgeText="Enterprise AI Capabilities"
      title={agent.featuresSectionTitle}
      subtitle={agent.featuresSectionSubtitle}
      features={agent.features}
    />
  );
}
