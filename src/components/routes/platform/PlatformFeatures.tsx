import type { PlatformData } from "@/types/platform";
import { FeatureGrid } from "@/components/widgets";
import { getSectionImage } from "@/lib/section-images";

interface PlatformFeaturesProps {
  platform: PlatformData;
}

export function PlatformFeatures({ platform }: PlatformFeaturesProps) {
  const sectionImage = getSectionImage("platform", platform.slug, "features");

  return (
    <FeatureGrid
      badgeText="Built for High Performance"
      title={platform.featuresSectionTitle}
      subtitle={platform.featuresSectionSubtitle}
      features={platform.features}
      sectionImage={sectionImage}
      imagePosition="left"
    />
  );
}
