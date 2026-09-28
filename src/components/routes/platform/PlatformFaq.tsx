import type { PlatformData } from "@/types/platform";
import { FaqSection } from "@/components/widgets";

interface PlatformFaqProps {
  platform: PlatformData;
}

export function PlatformFaq({ platform }: PlatformFaqProps) {
  if (!platform.faqs || platform.faqs.length === 0) return null;

  return (
    <FaqSection
      badgeText="Got Questions?"
      title="Frequently Asked Questions"
      subtitle={`Everything you need to know about ${platform.name} with Jadubot.`}
      items={platform.faqs}
      idPrefix="platform-faq"
    />
  );
}
