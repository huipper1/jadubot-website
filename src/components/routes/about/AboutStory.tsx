"use client";

import { PopIn } from "@/components/animations";

export function AboutStory() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <PopIn className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols): Editorial Anchor & Pull Quote */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
                Origin &amp; Mission
              </span>
              <h2 className="mt-3 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Why we set out to build Jadubot.
              </h2>
            </div>

            {/* Asymmetric Editorial Pull Quote */}
            <div className="border-l-2 border-[#0172ff] pl-5 sm:pl-6 py-2">
              <blockquote className="text-lg sm:text-xl font-medium leading-snug text-slate-200 italic">
                &ldquo;In Bangladesh, social media inboxes aren&apos;t just customer support—they are the entire storefront. When reply latency stretches to hours, over half of all potential orders evaporate.&rdquo;
              </blockquote>
            </div>

            {/* Grounded Local Facts Strip - No Cards */}
            <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-400">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-500">Headquarters</span>
                <span className="font-semibold text-slate-300">Savar, Dhaka, Bangladesh</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-500">Core Engineering</span>
                <span className="font-semibold text-slate-300">Daffodil Smart City (DSC)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-500">Architecture</span>
                <span className="font-semibold text-slate-300">Meta Graph &amp; WhatsApp Cloud APIs</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Active Ecosystem</span>
                <span className="font-semibold text-slate-300">1,200+ Bangladeshi Merchants</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Editorial Narrative Prose */}
          <div className="lg:col-span-7 space-y-8 text-slate-300 leading-relaxed text-base sm:text-lg">
            <div className="space-y-4">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                The Latency Crisis in Social Commerce
              </h3>
              <p>
                In Bangladesh, commerce lives inside social media inboxes. Unlike Western markets dominated by standalone websites, over 400,000 local merchants run their primary livelihoods through Facebook Pages, Messenger inboxes, and Instagram Direct.
              </p>
              <p>
                Yet as soon as a brand begins to scale with ads or viral posts, founders hit an exhausting wall: <strong className="text-white font-semibold">human reply latency</strong>. Teams find themselves overwhelmed by thousands of repetitive messages asking the exact same questions: <em>&ldquo;Price koto?&rdquo;</em>, <em>&ldquo;Stock ache?&rdquo;</em>, <em>&ldquo;Delivery charge koto?&rdquo;</em>. When it takes 45 minutes to answer, an excited customer has already moved on to the next shop.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Engineered for Bangla, Banglish &amp; Local Reality
              </h3>
              <p>
                Foreign SaaS chatbots consistently fail in Bangladesh. They don&apos;t understand colloquial Banglish, phonetic spellings, or the domestic buying psychology that demands Cash on Delivery (COD), phone number verification, and courier logistics integration.
              </p>
              <p>
                We built <strong className="text-white font-semibold">Jadubot</strong> specifically to master these nuances. Our system understands local phrasing, automatically collects delivery addresses, sends instant payment prompts, and syncs orders directly to Google Sheets and internal inventory.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Our Vision: Leveling the Playing Field
              </h3>
              <p>
                We believe a solo entrepreneur running a boutique fashion brand from home should have the exact same conversational firepower, response speed, and customer satisfaction as a multi-million-taka enterprise.
              </p>
              <p>
                By automating the repetitive 80% of routine inquiries, Jadubot gives business owners their time back—allowing them to focus on product quality, creative marketing, and genuine customer relationships.
              </p>
            </div>
          </div>
        </PopIn>
      </div>
    </section>
  );
}
