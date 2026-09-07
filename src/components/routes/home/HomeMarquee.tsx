import Image from "next/image";

const BRAND_PARTNERS = [
  { name: "EasyDrop", src: "/assets/images/home/easydrop-1-e1738610976518.png" },
  { name: "LearnInBD", src: "/assets/images/home/learninbd-logo-1.png" },
  { name: "SSB Leather", text: "SSB Leather" },
  { name: "Maneel Clothing", text: "Maneel" },
  { name: "Tailg Bangladesh", text: "TAILG" },
  { name: "Star Tech", text: "StarTech" },
  { name: "Iron Valley", text: "IronValley" },
  { name: "TV Hut", text: "TVHut" },
  { name: "Vapor World", text: "VaporW" },
  { name: "Offgrid", text: "OffGrid" }
];

export function HomeMarquee() {
  const repeatedBrands = [...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS];

  return (
    <section className="relative border-y border-[#373a41]/60 bg-[#0c0e12] py-10 backdrop-blur-md">
      <div className="container mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#cecfd2]/60">
          Trusted by 500+ growing eCommerce & retail brands in Bangladesh
        </p>
      </div>

      <div className="marquee-mask relative w-full overflow-hidden">
        {/* Row 1: Left to Right */}
        <div className="flex w-max items-center gap-14 animate-marquee py-2">
          {repeatedBrands.map((brand, i) => (
            <div
              key={`row1-${brand.name}-${i}`}
              className="flex shrink-0 items-center justify-center opacity-60 transition-opacity duration-300 hover:opacity-100"
            >
              {brand.src ? (
                <figure className="flex items-center">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={110}
                    height={36}
                    className="h-7 w-auto object-contain brightness-90 grayscale contrast-125 transition-all hover:grayscale-0"
                  />
                </figure>
              ) : (
                <span className="text-sm font-bold tracking-wider uppercase text-[#cecfd2]/80">
                  {brand.text}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left */}
        <div className="mt-4 flex w-max items-center gap-14 animate-marquee-reverse py-2">
          {[...repeatedBrands].reverse().map((brand, i) => (
            <div
              key={`row2-${brand.name}-${i}`}
              className="flex shrink-0 items-center justify-center opacity-60 transition-opacity duration-300 hover:opacity-100"
            >
              {brand.src ? (
                <figure className="flex items-center">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={110}
                    height={36}
                    className="h-7 w-auto object-contain brightness-90 grayscale contrast-125 transition-all hover:grayscale-0"
                  />
                </figure>
              ) : (
                <span className="text-sm font-bold tracking-wider uppercase text-[#cecfd2]/80">
                  {brand.text}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
