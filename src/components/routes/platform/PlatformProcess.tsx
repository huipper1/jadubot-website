import type { PlatformData } from "@/types/platform";
import { ProcessTimeline } from "@/components/widgets";
import { getSectionImage } from "@/lib/section-images";

interface PlatformProcessProps {
  platform: PlatformData;
}

export function PlatformProcess({ platform }: PlatformProcessProps) {
  const sectionImage = getSectionImage("platform", platform.slug, "process");

  return (
    <ProcessTimeline
      badgeText="Simple Setup"
      title={platform.processTitle}
      subtitle={platform.processSubtitle}
      steps={platform.steps}
      stepLabelPrefix="Step"
      ctaText="Have questions about integration? Book an architect walkthrough"
      sectionImage={sectionImage}
      imagePosition="right"
    />
  );
}
