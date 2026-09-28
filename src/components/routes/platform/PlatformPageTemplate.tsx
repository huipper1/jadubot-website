import type { PlatformData } from "@/types/platform";

import { UnifiedCta } from "@/components/sections";

import { PlatformFaq } from "./PlatformFaq";
import { PlatformFeatures } from "./PlatformFeatures";
import { PlatformHero } from "./PlatformHero";
import { PlatformProcess } from "./PlatformProcess";

interface PlatformPageTemplateProps {
  platform: PlatformData;
}

export function PlatformPageTemplate({ platform }: PlatformPageTemplateProps) {
  return (
    <>
      <PlatformHero platform={platform} />
      <PlatformFeatures platform={platform} />
      <PlatformProcess platform={platform} />
      <PlatformFaq platform={platform} />
      <UnifiedCta
        badge={`Scale on ${platform.name}`}
        title="Ready to Automate Your"
        highlightedTitle={`${platform.name} Sales?`}
        description={`Connect Jadubot to ${platform.name} in under 15 minutes. Start replying instantly, capturing leads, and closing orders automatically.`}
      />
    </>
  );
}
