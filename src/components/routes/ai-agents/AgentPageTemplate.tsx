import type { AgentData } from "@/types/ai-agent";

import { UnifiedCta } from "@/components/sections";

import { AgentFaq } from "./AgentFaq";
import { AgentFeatures } from "./AgentFeatures";
import { AgentHero } from "./AgentHero";
import { AgentProcess } from "./AgentProcess";

interface AgentPageTemplateProps {
  agent: AgentData;
}

export function AgentPageTemplate({ agent }: AgentPageTemplateProps) {
  return (
    <>
      <AgentHero agent={agent} />
      <AgentFeatures agent={agent} />
      <AgentProcess agent={agent} />
      <AgentFaq agent={agent} />
      <UnifiedCta
        badge="Enterprise AI Workforce"
        title="Ready to Deploy Your"
        highlightedTitle={`${agent.name}?`}
        description={`Activate your ${agent.name.toLowerCase()} in minutes. Handle customer conversations, resolve queries, and drive sales 24/7.`}
      />
    </>
  );
}
