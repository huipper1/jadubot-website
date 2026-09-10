interface FormattedBlogTitleProps {
  title: string;
  className?: string;
}

export function FormattedBlogTitle({ title, className = "" }: FormattedBlogTitleProps) {
  // Pattern 1: Title with en-dash delimiter " – " or spaced hyphen " - "
  if (title.includes(" – ") || title.includes(" - ")) {
    const delimiter = title.includes(" – ") ? " – " : " - ";
    const [lead, ...rest] = title.split(delimiter);

    return (
      <span className={className}>
        <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(1,114,255,0.35)]">
          {lead}
        </span>
        <span className="text-slate-500 font-light mx-2 sm:mx-3 select-none" aria-hidden="true">
          –
        </span>
        <span className="text-foreground">{rest.join(delimiter)}</span>
      </span>
    );
  }

  // Pattern 2: Title with colon delimiter ": "
  if (title.includes(": ")) {
    const [lead, ...rest] = title.split(": ");

    return (
      <span className={className}>
        <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(1,114,255,0.35)]">
          {lead}
        </span>
        <span className="text-slate-500 font-light mx-2 sm:mx-3 select-none" aria-hidden="true">
          :
        </span>
        <span className="text-foreground">{rest.join(": ")}</span>
      </span>
    );
  }

  // Pattern 3: Titles with channel tokens (Facebook, Instagram, WhatsApp, Jadubot)
  const words = title.split(" ");
  return (
    <span className={className}>
      {words.map((word, idx) => {
        const clean = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
        let colorClass = "text-foreground";

        if (clean === "facebook") {
          colorClass = "text-[#38c5ff]";
        } else if (clean === "instagram") {
          colorClass = "text-[#fe78e1]";
        } else if (clean === "whatsapp") {
          colorClass = "text-[#6dffae]";
        } else if (clean === "jadubot" || clean === "ai") {
          colorClass =
            "bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent";
        }

        return (
          <span key={idx} className={colorClass}>
            {word}
            {idx < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </span>
  );
}
