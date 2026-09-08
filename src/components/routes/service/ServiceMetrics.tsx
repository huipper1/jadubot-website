import { Award, Users, TrendingUp, Zap } from "lucide-react";
import { PopIn } from "@/components/animations";

const METRICS = [
  {
    value: "5+",
    unit: "Years",
    title: "Experience You Can Trust",
    description: "Pioneering AI-driven conversational automation in Bangladesh since 2021.",
    icon: Award
  },
  {
    value: "97%",
    unit: "Retention",
    title: "Happy Customers Who Stay",
    description: "Businesses rely on Jadubot daily for continuous, uninterrupted lead generation.",
    icon: Users
  },
  {
    value: "75%",
    unit: "Higher",
    title: "Higher Inbox Engagement",
    description: "Instant 2-second automated replies turn passive page visitors into buyers.",
    icon: Zap
  },
  {
    value: "89%",
    unit: "Faster",
    title: "Faster Order Processing",
    description: "Messenger store carts collect address, phone, and payment details automatically.",
    icon: TrendingUp
  }
];

export function ServiceMetrics() {
  return (
    <section className="relative border-y border-[#373a41]/60 bg-[#0c0e12]/60 py-16 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1 text-xs font-semibold text-brand">
            Proven Performance &amp; Trust
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Helping Bangladeshi Businesses Deliver a Better Customer Experience
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            Whether you run a high-traffic F-commerce shop or performance marketing campaigns,
            our automation tools are built to drive measurable growth.
          </p>
        </div>

        <PopIn stagger={0.08} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.title}
                className="glass-card glass-card-hover group relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold tracking-tight text-foreground group-hover:text-brand transition-colors">
                      {metric.value}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand">
                      {metric.unit}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-foreground">
                    {metric.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </PopIn>
      </div>
    </section>
  );
}
