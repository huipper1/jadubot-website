import { Star, Award, Clock, MapPin } from "lucide-react";
import { PopIn } from "@/components/animations";

const STATS = [
  {
    icon: Star,
    value: "4.7+",
    label: "Customer Rating",
    detail: "Loved by business owners across Bangladesh for responsive customer care."
  },
  {
    icon: Award,
    value: "A+",
    label: "Business Class Standards",
    detail: "High-uptime, scalable cloud infrastructure tailored for peak seasonal sales."
  },
  {
    icon: Clock,
    value: "5+ Yrs",
    label: "Industry Experience",
    detail: "Continuous innovation in Facebook, Instagram, and CPA social automation."
  },
  {
    icon: MapPin,
    value: "DSC, Dhaka",
    label: "Headquartered in Savar",
    detail: "Operating from Daffodil Smart City, deeply plugged into the tech ecosystem."
  }
];

export function AboutStats() {
  return (
    <section className="relative border-y border-[#373a41]/60 bg-[#0c0e12]/60 py-16 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl">
        <PopIn stagger={0.08} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="glass-card glass-card-hover group relative rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-3xl font-extrabold tracking-tight text-foreground group-hover:text-brand transition-colors">
                  {item.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">
                  {item.label}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </PopIn>
      </div>
    </section>
  );
}
