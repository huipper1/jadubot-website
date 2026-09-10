import { ArrowRight } from "lucide-react";
import { PopIn } from "@/components/animations";
import { CALENDLY_DEMO_URL } from "@/config/site";

export function ServiceCta() {
  return (
    <section className="relative py-20 bg-[#05070D]/50 border-t border-white/5">
      <div className="container mx-auto max-w-7xl text-center">
        <PopIn className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See Jadubot in action on your page
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Book a 15-minute live demo and our automation specialists will build a custom
            flow tailored to your business on the spot.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={CALENDLY_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(1,114,255,0.35)] transition-all hover:scale-[1.02]"
            >
              <span>Schedule Free Demo</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </PopIn>
      </div>
    </section>
  );
}
