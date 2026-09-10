import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PopIn } from "@/components/animations";

export function AboutStory() {
  return (
    <section className="relative py-16 md:py-24 bg-[#05070D]/40">
      <div className="container mx-auto max-w-7xl">
        <PopIn className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center">
            Our Story &amp; Vision
          </h2>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              In Bangladesh, social media is not just a place to connect with friends—it is the
              primary marketplace for hundreds of thousands of thriving businesses. From
              boutique clothing brands and electronics importers to home-cooked food trucks,
              merchants manage their entire livelihoods through Facebook and Instagram inboxes.
            </p>

            <p>
              However, as brands grow, they run into a brick wall: human reply latency. Founders
              and customer support agents find themselves buried under thousands of repetitive
              messages asking for basic prices, size charts, and delivery updates. Late replies
              mean lost sales.
            </p>

            <p>
              We founded <strong className="text-foreground">Jadubot</strong> to bridge this gap.
              We built an AI platform calibrated specifically for Bangladeshi commerce that
              understands Bangla, handles Messenger carts, automatically captures orders, and
              integrates with local logistics.
            </p>

            <p>
              Today, Jadubot powers hundreds of top brands across the country, answering over
              500,000 customer inquiries every month and helping entrepreneurs reclaim their
              time while scaling their revenues.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(1,114,255,0.35)] hover:scale-[1.02]"
            >
              <span>Get in Touch with Us</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </PopIn>
      </div>
    </section>
  );
}
