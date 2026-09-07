import { UserX, MailWarning, Clock } from "lucide-react";
import { Badge } from "@/ui";

const PROBLEMS = [
  {
    number: "01",
    title: "Lost Customers",
    description:
      "Buyers message multiple shops at once. If your reply takes longer than 2 minutes, they have already bought from your fastest competitor.",
    icon: UserX,
    highlight: "80% of buyers choose the fastest responder"
  },
  {
    number: "02",
    title: "Missed Opportunities",
    description:
      "You spend hard-earned money running Facebook ads, but unread Messenger and Instagram DMs pile up overnight when you are asleep.",
    icon: MailWarning,
    highlight: "Ad spend wasted on abandoned leads"
  },
  {
    number: "03",
    title: "Repetitive Tasks",
    description:
      "Typing 'Price please', 'Available colors', and 'Delivery charge inside Dhaka' hundreds of times a day drains your energy and burns out staff.",
    icon: Clock,
    highlight: "Hours lost daily on copy-pasting"
  }
];

export function HomeProblem() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        {/* Section Title */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="default" className="px-3.5 py-1 text-xs">
            Problem
          </Badge>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            You are losing sales because of{" "}
            <span className="text-gradient">missed messages</span> and late replies
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Every minute of response delay costs you revenue and gives your competitors an
            unfair advantage.
          </p>
        </div>

        {/* 3-Column Problem Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {PROBLEMS.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.number}
                className="glass-card glass-card-hover group relative flex flex-col justify-between overflow-hidden rounded-2xl p-8"
              >
                {/* Number & Icon Header */}
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-white/20 transition-colors group-hover:text-brand/40">
                      {problem.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-foreground transition-colors group-hover:text-brand">
                    {problem.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {problem.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/5 pt-4">
                  <span className="text-xs font-semibold text-brand/80">
                    {problem.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
