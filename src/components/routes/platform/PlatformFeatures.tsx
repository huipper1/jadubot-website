import type { PlatformData } from "@/types/platform";
import { BentoGrid } from "@/components/widgets";
import { getSectionImage } from "@/lib/section-images";

interface PlatformFeaturesProps {
  platform: PlatformData;
}

export function PlatformFeatures({ platform }: PlatformFeaturesProps) {
  const bentoA = getSectionImage("platform", platform.slug, "bento-a") || {
    src: `/assets/images/platform/${platform.slug}/bento-a.webp`,
    alt: `${platform.name} chat interface on smartphone`
  };

  const bentoB = getSectionImage("platform", platform.slug, "bento-b") || {
    src: `/assets/images/platform/${platform.slug}/bento-b.webp`,
    alt: `${platform.name} supporting automation flow`
  };

  // Find a real stat from heroStats (prefer second stat e.g. 98% Open Rate or 85% Automation)
  const realStat = platform.heroStats[1] || platform.heroStats[0] || { value: "98%", label: "Open Rate" };

  return (
    <BentoGrid
      badgeText="Built for High Performance"
      title={platform.featuresSectionTitle}
      subtitle={platform.featuresSectionSubtitle}
      slug={platform.slug}
      features={platform.features}
      imageA={bentoA}
      imageB={bentoB}
      statItem={{
        value: realStat.value,
        label: realStat.label
      }}
    />
  );
}
