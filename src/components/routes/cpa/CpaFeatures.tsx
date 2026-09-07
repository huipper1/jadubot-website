import { Zap, Link2, Filter, BarChart3 } from "lucide-react";

const CPA_FEATURES = [
  {
    title: "Comment-to-Postback Funnels",
    description:
      "When users engage with your affiliate promotion posts, Jadubot filters warm traffic and routes them directly to high-converting CPA landers with dynamic clickID tracking.",
    icon: Link2
  },
  {
    title: "Server-to-Server (S2S) Postbacks",
    description:
      "Real-time webhook and S2S integration with MaxBounty, ClickDealer, Mobidea, and custom tracking platforms (Voluum, RedTrack, BeMob).",
    icon: Zap
  },
  {
    title: "Smart Traffic & Geo Filtering",
    description:
      "Route visitors to location-specific affiliate offers based on country, device type (iOS vs Android), and connection carrier automatically.",
    icon: Filter
  },
  {
    title: "Real-time Conversion Analytics",
    description:
      "Live dashboards showing message open rates, affiliate link click-through rates (CTR), earnings per click (EPC), and overall campaign ROI.",
    icon: BarChart3
  }
];

export function CpaFeatures() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Engineered for High-Volume Affiliate Campaigns
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Eliminate wasted ad clicks and drive motivated prospects directly into high-payout offers.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {CPA_FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-card glass-card-hover group rounded-2xl p-8 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground group-hover:text-brand">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
