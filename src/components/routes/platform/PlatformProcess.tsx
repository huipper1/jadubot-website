import type { PlatformData } from "@/types/platform";
import { ProcessTimeline } from "@/components/widgets";

interface PlatformProcessProps {
  platform: PlatformData;
}

export function PlatformProcess({ platform }: PlatformProcessProps) {
  return (
    <ProcessTimeline
      badgeText="Simple Setup"
      title={platform.processTitle}
      subtitle={platform.processSubtitle}
      steps={platform.steps}
      stepLabelPrefix="Step"
      ctaText="Have questions about integration? Book an architect walkthrough"
    />
  );
}
