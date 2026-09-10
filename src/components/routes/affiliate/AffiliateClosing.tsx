"use client";

import { MessageCircle } from "lucide-react";
import { UnifiedCta } from "@/components/sections";

export function AffiliateClosing() {
  return (
    <UnifiedCta
      badge="READY TO EARN WITH JADUBOT?"
      title="আজই শুরু করুন,"
      highlightedTitle="আজীবন রিকারিং আয়"
      titleEnd="নিশ্চিত করুন"
      description="কোনো ইনভেস্টমেন্ট ছাড়াই শুরু করুন বাংলাদেশের শীর্ষস্থানীয় AI চ্যাটবট পার্টনারশিপ। ফ্রি সাইন-আপের সাথে পাচ্ছেন ১ মাসের Standard প্যাকেজ সম্পূর্ণ বিনামূল্যে।"
      primaryCta={{
        text: "রেজিস্ট্রেশন করুন (ফ্রি একাউন্ট)",
        href: "https://app.jadubot.com/affiliate_system/affiliate_sign_up",
        external: true
      }}
      secondaryCta={{
        text: "হোয়াটসঅ্যাপ সাপোর্ট (01707991750)",
        href: "https://wa.me/8801707991750?text=Hi%20Jadubot,%20I%20want%20to%20know%20more%20about%20your%20affiliate%20program",
        external: true,
        icon: <MessageCircle className="h-4 w-4 text-emerald-400" />
      }}
      trustBadges={[
        "২০% লাইফটাইম রিকারিং কমিশন",
        "ফ্রি ১ মাসের Standard প্যাকেজ",
        "বিকাশ / নগদ / ব্যাংকে উইথড্র"
      ]}
    />
  );
}

