import { Check, Minus } from "lucide-react";

const COMPARISON_ROWS = [
  { feature: "Connected Accounts", free: "1", starter: "3", premium: "3", business: "Unlimited" },
  { feature: "Facebook Page Automation", free: true, starter: true, premium: true, business: true },
  { feature: "Instagram DM Automation", free: false, starter: false, premium: true, business: true },
  { feature: "WhatsApp Business Flows", free: false, starter: "4 Flows", premium: "Multi-channel", business: "Unlimited" },
  { feature: "Monthly Message Credit", free: "1,000", starter: "10,000", premium: "100,000", business: "1,000,000" },
  { feature: "Subscriber Limit", free: "500", starter: "1,000", premium: "100,000", business: "1,000,000" },
  { feature: "Bot AI Token / Month", free: "10K", starter: "10K", premium: "100K", business: "1M" },
  { feature: "Broadcast Limit / Month", free: "5K", starter: "5K", premium: "10K", business: "Custom" },
  { feature: "Public Comment Auto-Reply", free: true, starter: true, premium: true, business: true },
  { feature: "Comment-to-Inbox Push", free: true, starter: true, premium: true, business: true },
  { feature: "Google Sheets & HTTP API Sync", free: false, starter: false, premium: true, business: true },
  { feature: "Telegram Group Manager", free: false, starter: false, premium: true, business: true },
  { feature: "Team Member Seats", free: "1", starter: "1", premium: "3", business: "10" },
  { feature: "24/7 Dedicated Support", free: false, starter: false, premium: false, business: true }
];

export function PricingComparison() {
  return (
    <section className="relative py-16 md:py-24 border-t border-[#373a41]/60 bg-[#0c0e12]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="solution-badge">Comparison</div>
          <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Compare Plan Features
          </h2>
          <p className="mt-3 text-sm text-[#cecfd2]">
            A detailed breakdown of every capability across all 4 Jadubot tiers.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[720px] rounded-2xl border border-[#373a41] bg-[#12151c]/90 p-6 backdrop-blur-md">
            <table className="w-full text-left text-sm" aria-label="Feature Comparison Table">
              <thead>
                <tr className="border-b border-[#373a41] pb-4">
                  <th className="py-4 font-heading font-bold text-white">Feature</th>
                  <th className="py-4 font-heading font-bold text-white/80 text-center">Free Trial</th>
                  <th className="py-4 font-heading font-bold text-white/80 text-center">Starter</th>
                  <th className="py-4 font-heading font-bold text-[#c084fc] text-center">Premium (Popular)</th>
                  <th className="py-4 font-heading font-bold text-white/80 text-center">Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#373a41]/40">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.02]">
                    <td className="py-3.5 text-xs font-medium text-white/90">
                      {row.feature}
                    </td>
                    <td className="py-3.5 text-center text-xs text-[#cecfd2]/80">
                      {typeof row.free === "boolean" ? (
                        row.free ? (
                          <Check className="mx-auto h-4 w-4 text-emerald-400" />
                        ) : (
                          <Minus className="mx-auto h-4 w-4 text-[#cecfd2]/30" />
                        )
                      ) : (
                        row.free
                      )}
                    </td>
                    <td className="py-3.5 text-center text-xs text-[#cecfd2]/80">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <Check className="mx-auto h-4 w-4 text-emerald-400" />
                        ) : (
                          <Minus className="mx-auto h-4 w-4 text-[#cecfd2]/30" />
                        )
                      ) : (
                        row.starter
                      )}
                    </td>
                    <td className="py-3.5 text-center text-xs font-semibold text-[#c084fc] bg-[#8e2de2]/[0.06]">
                      {typeof row.premium === "boolean" ? (
                        row.premium ? (
                          <Check className="mx-auto h-4 w-4 text-[#c084fc]" />
                        ) : (
                          <Minus className="mx-auto h-4 w-4 text-[#cecfd2]/30" />
                        )
                      ) : (
                        row.premium
                      )}
                    </td>
                    <td className="py-3.5 text-center text-xs text-[#cecfd2]/80">
                      {typeof row.business === "boolean" ? (
                        row.business ? (
                          <Check className="mx-auto h-4 w-4 text-emerald-400" />
                        ) : (
                          <Minus className="mx-auto h-4 w-4 text-[#cecfd2]/30" />
                        )
                      ) : (
                        row.business
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
