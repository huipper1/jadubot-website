import type { AgentData } from "@/types/ai-agent";
import { ProcessTimeline } from "@/components/widgets";

interface AgentProcessProps {
  agent: AgentData;
}

export function AgentProcess({ agent }: AgentProcessProps) {
  return (
    <ProcessTimeline
      badgeText="Implementation Framework"
      title={agent.processTitle}
      subtitle={agent.processSubtitle}
      steps={agent.steps}
      stepLabelPrefix="Phase"
      ctaText="Ready to see this agent in a customized demo? Schedule an architect session"
    />
  );
}
