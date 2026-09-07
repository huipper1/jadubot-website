import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServiceCta() {
  return (
    <section className="relative py-20 bg-[#05070D]/50 border-t border-white/5">
      <div className="container text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See Jadubot in action on your page
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Book a 15-minute live demo and our automation specialists will build a custom
            flow tailored to your business on the spot.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/book-a-free-demo"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(142,45,226,0.35)] transition-all hover:scale-[1.02]"
            >
              <span>Schedule Free Demo</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
