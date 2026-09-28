import type { PlatformData } from "@/types/platform";
import { FeatureGrid } from "@/components/widgets";

interface PlatformFeaturesProps {
  platform: PlatformData;
}

export function PlatformFeatures({ platform }: PlatformFeaturesProps) {
  return (
    <FeatureGrid
      badgeText="Built for High Performance"
      title={platform.featuresSectionTitle}
      subtitle={platform.featuresSectionSubtitle}
      features={platform.features}
    />
  );
}
