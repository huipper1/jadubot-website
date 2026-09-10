"use client";

import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { PopIn } from "@/components/animations";

export function ContactMap() {
  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Daffodil+Smart+City+Birulia+Savar+Dhaka";

  return (
    <section className="relative py-12 md:py-20 border-t border-white/[0.08]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <PopIn className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38bdf8]">
              <MapPin className="h-3.5 w-3.5" />
              <span>Headquarters Location</span>
            </div>
            <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl font-heading">
              Visit Our Dhaka Campus &amp; AI Lab
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Daffodil Smart City (DSC), Birulia, Savar, Dhaka-1216 • Accessible via Birulia Bridge
            </p>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10 hover:border-white/20 shrink-0"
          >
            <Navigation className="h-3.5 w-3.5 text-sky-400" />
            <span>Open in Google Maps</span>
            <ExternalLink className="h-3 w-3 text-slate-400" />
          </a>
        </PopIn>

        <PopIn className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#090d14] shadow-2xl">
          <div className="relative h-[360px] sm:h-[420px] w-full">
            <iframe
              src="https://maps.google.com/maps?q=Daffodil%20Smart%20City%2C%20Birulia%2C%20Savar%2C%20Dhaka&t=m&z=14&output=embed&iwloc=near"
              title="Jadubot Office Location at Daffodil Smart City, Savar, Dhaka"
              aria-label="Jadubot Office Location at Daffodil Smart City, Savar, Dhaka"
              className="h-full w-full border-0 filter grayscale invert contrast-125 opacity-80 transition hover:opacity-100"
              loading="lazy"
            />
          </div>
        </PopIn>
      </div>
    </section>
  );
}
