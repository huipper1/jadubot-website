import Image from "next/image";

const JADUBOT_BRANDS = [
  { name: "EasyDrop", src: "/assets/images/home/easydrop-1-e1738610976518.png" },
  { name: "LearnInBD", src: "/assets/images/home/learninbd-logo-1.png" },
  { name: "Mitali Host", src: "/assets/images/home/mitalifc-logo-e1738611032855.png" },
  { name: "Khabo Dabo", src: "/assets/images/home/khabodabo-logo-1.png" },
  { name: "PayTk", src: "/assets/images/home/paytk-logo.png" },
  { name: "Likebook", src: "/assets/images/home/20250204_1228481.png" },
  { name: "Green WordPress", src: "/assets/images/home/greenwordpress-logo-1.png" }
];

export function HomeMarquee() {
  // Repeat logos 4 times for smooth continuous loop without gaps
  const repeatedBrands = [
    ...JADUBOT_BRANDS,
    ...JADUBOT_BRANDS,
    ...JADUBOT_BRANDS,
    ...JADUBOT_BRANDS
  ];

  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-background py-10 backdrop-blur-md">
      <div className="container mx-auto mb-6 max-w-7xl text-center">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground/60 uppercase">
          Trusted by 500+ growing eCommerce & retail brands in Bangladesh
        </p>
      </div>

      <div className="marquee-mask relative w-full overflow-hidden">
        {/* Row 1: Left to Right */}
        <div className="animate-marquee flex w-max items-center gap-6 py-2">
          {repeatedBrands.map((brand, i) => (
            <div
              key={`row1-${brand.name}-${i}`}
              className="group flex h-12 items-center justify-center transition-all duration-300"
            >
              <figure className="flex items-center">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={120}
                  height={32}
                  className="h-6 w-auto max-w-27.5 object-contain opacity-75 transition-all duration-300 group-hover:opacity-100"
                />
              </figure>
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left */}
        <div className="animate-marquee-reverse mt-4 flex w-max items-center gap-6 py-2">
          {[...repeatedBrands].reverse().map((brand, i) => (
            <div
              key={`row2-${brand.name}-${i}`}
              className="group flex h-12 items-center justify-center transition-all duration-300"
            >
              <figure className="flex items-center">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={120}
                  height={32}
                  className="h-6 w-auto max-w-27.5 object-contain opacity-75 transition-all duration-300 group-hover:opacity-100"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
