import type { PlatformData } from "@/types/platform";
import { FaqSection } from "@/components/widgets";
import { getSectionImage } from "@/lib/section-images";

interface PlatformFaqProps {
  platform: PlatformData;
}

export function PlatformFaq({ platform }: PlatformFaqProps) {
  if (!platform.faqs || platform.faqs.length === 0) return null;

  const sectionImage = getSectionImage("platform", platform.slug, "faq");

  return (
    <FaqSection
      badgeText="Got Questions?"
      title="Frequently Asked Questions"
      subtitle={`Everything you need to know about ${platform.name} with Jadubot.`}
      items={platform.faqs}
      idPrefix="platform-faq"
      sectionImage={sectionImage}
      imagePosition="left"
    />
  );
}
