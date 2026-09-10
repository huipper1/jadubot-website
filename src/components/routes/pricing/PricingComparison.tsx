import { Check, Minus } from "lucide-react";
import { PopIn } from "@/components/animations";

interface ComparisonRow {
  feature: string;
  category?: string;
  free: string | boolean;
  starter: string | boolean;
  premium: string | boolean;
  business: string | boolean;
}

const COMPARISON_ROWS: ComparisonRow[] = [
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
    <section className="relative py-16 md:py-24 border-t border-border/60 bg-card">
      <div className="container mx-auto max-w-7xl px-4">
        <PopIn className="mx-auto max-w-3xl text-center">
          <div className="solution-badge inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/80 px-3.5 py-1 text-xs font-semibold text-primary shadow-sm">
            Feature Comparison
          </div>
          <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Compare Plan Capabilities
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            A comprehensive breakdown of every feature, quota, and integration across all 4 Jadubot tiers.
          </p>
        </PopIn>

        <PopIn className="mt-12 overflow-x-auto" start="top 85%">
          <div className="min-w-[760px] rounded-2xl border border-border bg-card p-6 shadow-card backdrop-blur-md">
            <table className="w-full text-left text-sm" aria-label="Feature Comparison Table">
              <thead>
                <tr className="border-b border-border pb-4">
                  <th className="py-4 font-heading font-bold text-foreground w-1/3">Feature</th>
                  <th className="py-4 font-heading font-bold text-foreground text-center w-1/6">
                    <div>Free Trial</div>
                    <div className="text-[11px] font-normal text-muted-foreground mt-0.5">৳FREE</div>
                  </th>
                  <th className="py-4 font-heading font-bold text-foreground text-center w-1/6">
                    <div>Starter</div>
                    <div className="text-[11px] font-normal text-muted-foreground mt-0.5">৳1,000 / mo</div>
                  </th>
                  <th className="py-4 font-heading font-bold text-primary text-center w-1/6 bg-primary/10 rounded-t-xl">
                    <div className="flex items-center justify-center gap-1">
                      <span>Premium</span>
                      <span className="rounded-sm bg-primary px-1.5 py-0.2 text-[9px] font-bold text-white uppercase">Popular</span>
                    </div>
                    <div className="text-[11px] font-medium text-primary mt-0.5">৳3,000 / mo</div>
                  </th>
                  <th className="py-4 font-heading font-bold text-foreground text-center w-1/6">
                    <div>Business</div>
                    <div className="text-[11px] font-normal text-muted-foreground mt-0.5">৳5,000 / mo</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="hover:bg-muted/30 transition-colors">
                    <td className="py-3.5 text-xs font-medium text-foreground">
                      {row.feature}
                    </td>
                    <td className="py-3.5 text-center text-xs text-muted-foreground">
                      {typeof row.free === "boolean" ? (
                        row.free ? (
                          <Check className="mx-auto h-4 w-4 text-emerald-400" />
                        ) : (
                          <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" />
                        )
                      ) : (
                        row.free
                      )}
                    </td>
                    <td className="py-3.5 text-center text-xs text-muted-foreground">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <Check className="mx-auto h-4 w-4 text-emerald-400" />
                        ) : (
                          <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" />
                        )
                      ) : (
                        row.starter
                      )}
                    </td>
                    <td className="py-3.5 text-center text-xs font-semibold text-primary bg-primary/[0.06]">
                      {typeof row.premium === "boolean" ? (
                        row.premium ? (
                          <Check className="mx-auto h-4 w-4 text-primary" />
                        ) : (
                          <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" />
                        )
                      ) : (
                        row.premium
                      )}
                    </td>
                    <td className="py-3.5 text-center text-xs text-muted-foreground">
                      {typeof row.business === "boolean" ? (
                        row.business ? (
                          <Check className="mx-auto h-4 w-4 text-emerald-400" />
                        ) : (
                          <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" />
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
        </PopIn>
      </div>
    </section>
  );
}
