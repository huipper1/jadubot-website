import { Building2 } from "lucide-react";

const CASE_STUDIES = [
  {
    category: "Electronics",
    name: "TV Hut",
    description:
      "TV Hut is a modern home-tech retailer offering premium appliances. Jadubot has streamlined their customer queries and accelerated their lead-to-purchase flow across Messenger.",
    stat1: { label: "AI Automation Rate", value: "80%" },
    stat2: { label: "Order Increase", value: "+25%" }
  },
  {
    category: "Restaurant",
    name: "Jatra Biroti",
    description:
      "Jatra Biroti is a vibrant cultural and culinary hub in Dhaka. Jadubot has made their FAQ handling effortless, keeping guest communication smooth and consistent.",
    stat1: { label: "AI Automation Rate", value: "86%" },
    stat2: { label: "Avg. Response Time", value: "10 sec" }
  },
  {
    category: "Resort",
    name: "Matita Resort",
    description:
      "Matita Resort is an eco-wellness destination offering nature and adventure. Jadubot manages guest queries 24/7 and guides visitors toward room reservations seamlessly.",
    stat1: { label: "AI Automation Rate", value: "94%" },
    stat2: { label: "Booking Time Saved", value: "60%" }
  },
  {
    category: "E-commerce",
    name: "One Mart",
    description:
      "One Mart is a growing e-commerce marketplace in Bangladesh. Jadubot has simplified customer support and made Messenger order generation faster and more efficient.",
    stat1: { label: "AI Automation Rate", value: "82%" },
    stat2: { label: "Order Increased by", value: "+32%" }
  },
  {
    category: "Retail",
    name: "Vapor World",
    description:
      "Vapor World is one of Bangladesh’s leading vape retailers. Jadubot has ensured instant product guidance and smooth checkout redirection for online orders.",
    stat1: { label: "AI Automation Rate", value: "85%" },
    stat2: { label: "Support Cost Reduced", value: "50%" }
  }
];

export function HomeCaseStudies() {
  return (
    <section className="relative py-20 md:py-32 border-t border-[#373a41]/60 bg-[#0c0e12]">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="solution-badge">Success Stories</div>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Case Studies
          </h2>
          <p className="mt-4 text-base text-[#cecfd2]">
            Discover how leading brands in Bangladesh transform their business with Jadubot automation.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.name}
              className="flex flex-col justify-between rounded-2xl border border-[#373a41] bg-[#12151c]/90 p-8 transition-all duration-300 hover:border-[#8e2de2]/50 hover:bg-[#181d27]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#c084fc]">
                    {cs.category}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8e2de2]/10 text-[#c084fc]">
                    <Building2 className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="mt-3 font-heading text-2xl font-bold text-white">
                  {cs.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#cecfd2]/80">
                  {cs.description}
                </p>
              </div>

              {/* Stats Block */}
              <div className="mt-8 pt-6 border-t border-[#373a41]/60">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-[#373a41]/40 bg-[#0c0e12]/60 p-3">
                    <p className="text-[10px] uppercase font-semibold text-[#cecfd2]/60">
                      {cs.stat1.label}
                    </p>
                    <p className="mt-1 font-heading text-xl font-bold text-white">
                      {cs.stat1.value}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#373a41]/40 bg-[#0c0e12]/60 p-3">
                    <p className="text-[10px] uppercase font-semibold text-[#cecfd2]/60">
                      {cs.stat2.label}
                    </p>
                    <p className="mt-1 font-heading text-xl font-bold text-[#6dffae]">
                      {cs.stat2.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
