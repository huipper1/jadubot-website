import { Link2, Database, Bot, TrendingUp } from "lucide-react";
import { PopIn } from "@/components/animations";
import { SectionHeader } from "@/ui";

const STEPS = [
  {
    step: "01",
    title: "Connect Your Channels",
    description:
      "Integrate your Facebook, Instagram, WhatsApp or other platforms with our secure and easy setup.",
    icon: Link2,
    range: "0% - 25%",
    strokeDasharray: "25 75"
  },
  {
    step: "02",
    title: "Train with Your Business Data",
    description:
      "Help our AI understand your products, services, and customer style for more accurate and relevant responses.",
    icon: Database,
    range: "0% - 50%",
    strokeDasharray: "50 50"
  },
  {
    step: "03",
    title: "Automate in Real-Time",
    description:
      "Start engaging customers, answering queries, capturing leads, and processing orders automatically.",
    icon: Bot,
    range: "0% - 75%",
    strokeDasharray: "75 25"
  },
  {
    step: "04",
    title: "Track & Scale",
    description:
      "Monitor performance, optimize your campaigns, and unlock new growth opportunities.",
    icon: TrendingUp,
    range: "0% - 100%",
    strokeDasharray: "100 0"
  }
];

export function ServiceProcess() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      {/* Background Ambience */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[380px] w-[750px] rounded-full bg-blue-600/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          badge="HOW IT WORKS"
          title={
            <>
              From Setup to Conversions in
              <br className="hidden sm:inline" />
            </>
          }
          gradientTitle="Four Simple Steps"
          description={
            <>
              A smooth, hassle-free process to get your automation up and running —
              <br className="hidden sm:inline" />{" "}
              so you can focus on what matters most, growing your business.
            </>
          }
        />

        {/* Process Timeline */}
        <div className="relative mt-16 sm:mt-20">
          {/* SVG Definitions for Specular Rim Highlight */}
          <svg className="absolute h-0 w-0" aria-hidden="true">
            <defs>
              {/* Dark Mode: White to Ice Sky Highlight */}
              <linearGradient id="processRimGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="60%" stopColor="#e0f2fe" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.85" />
              </linearGradient>
              {/* Light Mode: Electric Blue to Sky Highlight */}
              <linearGradient id="processRimGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0052cc" stopOpacity="1" />
                <stop offset="60%" stopColor="#0172ff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.85" />
              </linearGradient>
            </defs>
          </svg>

          {/* Horizontal Connecting Timeline Line (Desktop) */}
          <div
            className="hidden lg:block absolute top-11 left-[12.5%] right-[12.5%] h-[1.5px] bg-gradient-to-r from-blue-500/25 via-primary/50 to-blue-500/25 dark:from-blue-500/30 dark:via-blue-400/70 dark:to-blue-500/30 shadow-[0_0_12px_rgba(1,114,255,0.2)] dark:shadow-[0_0_12px_rgba(1,114,255,0.4)] z-0"
            aria-hidden="true"
          />

          {/* Intermediate Glowing Dots between steps (Desktop) */}
          <div
            className="hidden lg:flex absolute top-11 -translate-y-1/2 left-[25%] -translate-x-1/2 z-0 items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(1,114,255,0.6)] dark:bg-white dark:shadow-[0_0_8px_#ffffff,0_0_18px_rgba(1,114,255,0.9),0_0_30px_rgba(1,114,255,0.6)]" />
          </div>
          <div
            className="hidden lg:flex absolute top-11 -translate-y-1/2 left-[50%] -translate-x-1/2 z-0 items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(1,114,255,0.6)] dark:bg-white dark:shadow-[0_0_8px_#ffffff,0_0_18px_rgba(1,114,255,0.9),0_0_30px_rgba(1,114,255,0.6)]" />
          </div>
          <div
            className="hidden lg:flex absolute top-11 -translate-y-1/2 left-[75%] -translate-x-1/2 z-0 items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(1,114,255,0.6)] dark:bg-white dark:shadow-[0_0_8px_#ffffff,0_0_18px_rgba(1,114,255,0.9),0_0_30px_rgba(1,114,255,0.6)]" />
          </div>

          {/* 4 Process Step Columns */}
          <PopIn
            stagger={0.12}
            className="relative z-10 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-14 lg:grid-cols-4 lg:gap-6"
          >
            {STEPS.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.step}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Glowing Circular Step Node */}
                  <div className="relative flex h-20 w-20 sm:h-[88px] sm:w-[88px] items-center justify-center rounded-full border border-slate-200 bg-card shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:border-primary/50 group-hover:shadow-[0_0_25px_rgba(1,114,255,0.25)] dark:border-blue-500/35 dark:bg-background dark:shadow-[0_0_25px_rgba(1,114,255,0.25)] dark:backdrop-blur-md dark:group-hover:border-blue-400/60 dark:group-hover:shadow-[0_0_35px_rgba(1,114,255,0.4)]">
                    <svg
                      className="pointer-events-none absolute inset-0 h-full w-full -rotate-90 overflow-visible"
                      viewBox="0 0 88 88"
                      fill="none"
                      aria-hidden="true"
                    >
                      {/* Subtle background track ring */}
                      <circle
                        cx="44"
                        cy="44"
                        r="41"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-slate-200 group-hover:text-primary/30 dark:text-blue-500/20 dark:group-hover:text-blue-500/35 transition-colors duration-300"
                      />

                      {/* Progressive highlighted stroke - Light Mode */}
                      <circle
                        cx="44"
                        cy="44"
                        r="41"
                        pathLength={100}
                        stroke="url(#processRimGradLight)"
                        strokeWidth="2.5"
                        strokeDasharray={step.strokeDasharray}
                        strokeDashoffset={0}
                        strokeLinecap="round"
                        className="dark:hidden transition-all duration-500 group-hover:stroke-primary group-hover:drop-shadow-[0_0_6px_rgba(1,114,255,0.5)]"
                      />

                      {/* Progressive highlighted stroke - Dark Mode */}
                      <circle
                        cx="44"
                        cy="44"
                        r="41"
                        pathLength={100}
                        stroke="url(#processRimGradDark)"
                        strokeWidth="2.5"
                        strokeDasharray={step.strokeDasharray}
                        strokeDashoffset={0}
                        strokeLinecap="round"
                        className="hidden dark:block transition-all duration-500 group-hover:stroke-white group-hover:drop-shadow-[0_0_8px_#38bdf8]"
                      />
                    </svg>

                    <Icon className="relative z-10 h-7 w-7 text-slate-700 transition-all duration-300 group-hover:scale-110 group-hover:text-primary dark:text-blue-100 dark:group-hover:text-white" />
                  </div>

                  {/* Step Number */}
                  <span className="mt-5 text-base sm:text-lg font-bold font-mono text-primary dark:text-sky-400 tracking-wider">
                    {step.step}
                  </span>

                  {/* Step Title */}
                  <h3 className="mt-2 font-heading text-base sm:text-lg font-bold text-foreground tracking-tight leading-snug">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-[250px] sm:max-w-[270px] mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </PopIn>
        </div>
      </div>
    </section>
  );
}
