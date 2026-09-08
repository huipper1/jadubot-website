import { MapPin } from "lucide-react";
import { PopIn } from "@/components/animations";

export function ContactMap() {
  return (
    <section className="relative py-12 md:py-16 border-t border-[#373a41]/60">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1 text-xs font-semibold text-brand">
              <MapPin className="h-3.5 w-3.5" />
              <span>Find Our Headquarters</span>
            </div>
            <h3 className="mt-2 text-xl font-bold text-foreground">
              Daffodil Smart City (DSC), Savar, Dhaka
            </h3>
          </div>
          <p className="max-w-md text-xs text-muted-foreground">
            Conveniently situated in Savar&#39;s technological hub, welcoming partners and enterprise clients.
          </p>
        </div>

        <PopIn className="glass-card overflow-hidden rounded-2xl border-white/10 shadow-2xl">
          <div className="relative h-[340px] w-full">
            <iframe
              src="https://maps.google.com/maps?q=Daffodil%20Smart%20City%2C%20Birulia%2C%20Savar%2C%20Dhaka&t=m&z=14&output=embed&iwloc=near"
              title="Jadubot Office Location"
              aria-label="Jadubot Office Location at Daffodil Smart City, Savar, Dhaka"
              className="h-full w-full border-0 filter grayscale invert contrast-125 opacity-85 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
        </PopIn>
      </div>
    </section>
  );
}
