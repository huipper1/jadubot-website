import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-0 md:pt-44 md:pb-0">
      {/* Hero Background Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/assets/images/home/hero-bg.png"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-top opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0c0e12]/40 via-transparent to-[#0c0e12]" />
      </div>

      <div className="container relative z-10 text-center">
        <div className="mx-auto max-w-6xl">
          {/* LazyChat Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-md border border-[#373a41] bg-[#0c0e12] p-1 text-xs font-medium text-[#cecfd2] shadow-sm">
            <span className="rounded-sm bg-[#181d27] px-2.5 py-1 text-white font-semibold">
              New feature
            </span>
            <span className="flex items-center gap-1 pr-2">
              recommendation engine
              <ArrowRight className="h-3 w-3 text-[#c084fc]" />
            </span>
          </div>

          {/* 1:1 Headline with Channel Styling */}
          <h1 className="mt-8 font-heading text-4xl font-bold tracking-tight text-white sm:text-6xl leading-[1.12]">
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
        </div>

        {/* Hero Screen Mockup Frame - Enlarged with top 80% visible & bottom 20% overflow hidden */}
        <div className="relative mx-auto mt-14 sm:mt-18 max-w-6xl xl:max-w-7xl px-2 sm:px-4">
          {/* Animated Inward-Outward Breathing Glow behind the mockup frame */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[80%] w-[92%] rounded-full bg-linear-to-r from-brand-purple-start/70 via-[#8e2de2]/85 to-brand-amber/65 animate-pulse-glow"
            aria-hidden="true"
          />
          {/* Multi-channel subtle aura (Facebook blue, Instagram pink, WhatsApp mint) */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[70%] w-[85%] rounded-full bg-linear-to-tr from-channel-blue/35 via-channel-pink/30 to-channel-green/25 animate-pulse-glow [animation-delay:2.25s]"
            aria-hidden="true"
          />

          <div className="relative z-10 overflow-hidden">
            <Image
              src="/assets/images/home/hero-screen-mockup.png"
              alt="Jadubot AI Chatbot Interface showing automated Facebook, Instagram and WhatsApp conversations"
              width={1242}
              height={700}
              priority
              className="w-full h-auto object-cover object-top"
            />
            {/* Subtle bottom fade blending the overflow edge into the background */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-linear-to-t from-[#0c0e12] via-[#0c0e12]/40 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
