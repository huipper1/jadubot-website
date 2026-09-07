import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Exact LazyChat Purple Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 -z-10 flex w-full justify-center">
        <div className="hero-gradient" />
      </div>

      <div className="container relative z-10 text-center">
        <div className="mx-auto max-w-4xl">
          {/* LazyChat Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-xl border border-[#373a41] bg-[#0c0e12] p-1 text-xs font-medium text-[#cecfd2] shadow-sm">
            <span className="rounded-lg bg-[#181d27] px-2.5 py-1 text-white font-semibold">
              New feature
            </span>
            <span className="flex items-center gap-1 pr-2">
              recommendation engine
              <ArrowRight className="h-3 w-3 text-[#c084fc]" />
            </span>
          </div>

          {/* 1:1 Headline with Channel Styling */}
          <h1 className="mt-8 font-heading text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.12]">
            Your #1 AI Sales Agent on{" "}
            <span className="text-[#38c5ff]">Facebook</span>,{" "}
            <span className="text-[#fe78e1]">Instagram</span> &amp;{" "}
            <span className="text-[#6dffae]">WhatsApp</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#cecfd2] sm:text-xl">
            Let Jadubot talk to your customers, take orders, and close sales; so you can finally focus on growing your business.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.youtube.com/playlist?list=PLTciGNiQ61wDsaRGBFYmhOcvRH51Vq55S"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-black"
            >
              <Play className="h-4 w-4 fill-current text-white" />
              <span>Watch Demo</span>
            </a>

            <Link href="/book-a-free-demo" className="btn-primary">
              <span>Book a live demo</span>
            </Link>
          </div>

          {/* Hero Screen Mockup Frame */}
          <div className="relative mx-auto mt-14 max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-[#373a41] bg-[#12151c] shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
              <Image
                src="/assets/images/home/hero-screen-mockup.png"
                alt="Jadubot AI Chatbot Interface showing automated Facebook, Instagram and WhatsApp conversations"
                width={1242}
                height={700}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
