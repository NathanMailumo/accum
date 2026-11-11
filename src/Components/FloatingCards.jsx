const cards = [
  {
    className:
      "left-4 top-8 rotate-[-8deg] bg-[#fff08a] text-black shadow-[8px_10px_0_#111] sm:left-10 sm:top-12 space-mono-regular",
    title: "Today's focus",
    content: "Make time for what matters.",
    label: "Focus note",
    variant: "note",
  },
  {
    className:
      "right-4 top-14 rotate-[7deg] rounded-[2rem] bg-[#ef5455] text-white shadow-[0_12px_30px_#ef545566] sm:right-12 sm:top-20 space-mono-regular",
    title: "7 day streak",
    content: "Consistency compounds.",
    label: "Progress",
    variant: "streak",
  },
  {
    className:
      "bottom-12 left-2 rotate-[6deg] bg-black text-white shadow-[0_0_0_1px_#ef5455,8px_8px_0_#ef5455] sm:bottom-16 sm:left-14 space-mono-regular",
    title: "Time tracked",
    content: "04h 32m",
    label: "Today",
    variant: "metric",
  },
  {
    className:
      "bottom-8 right-2 rotate-[-6deg] border-2 border-dashed border-black bg-[#f1eee8] text-black shadow-none sm:bottom-12 sm:right-14 space-mono-regular",
    title: "Next milestone",
    content: "Complete your portfolio.",
    label: "Up next",
    variant: "milestone",
  },
];

export function FloatingCards() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden min-h-[90vh] overflow-hidden sm:block">
      {cards.map((card) => (
        <article
          key={card.label}
          className={`absolute w-44 overflow-hidden rounded-2xl border border-black/10 p-4 transition-transform duration-300 hover:scale-105 ${card.className}`}
        >
          {card.variant === "note" && (
            <span className="absolute -top-2 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-[#ef5455] shadow-inner" />
          )}
          {card.variant === "streak" && (
            <span className="absolute -right-7 -top-7 h-20 w-20 rounded-full border-[10px] border-white/20" />
          )}
          <p className="space-mono-regular text-[10px] uppercase tracking-widest opacity-60">
            {card.label}
          </p>
          <h2 className="redaction-70-bold mt-4 text-2xl leading-none">
            {card.title}
          </h2>
          <p className="google-sans mt-3 text-sm leading-5">{card.content}</p>
          {card.variant === "streak" && (
            <div className="mt-4 h-1.5 rounded-full bg-white/30">
              <div className="h-full w-4/5 rounded-full bg-white" />
            </div>
          )}
          {card.variant === "metric" && (
            <div className="mt-4 h-1 w-full bg-[#ef5455]">
              <div className="h-full w-2/3 bg-white" />
            </div>
          )}
          {card.variant === "milestone" && (
            <span className="mt-4 inline-block rounded-full bg-black px-2 py-1 text-[9px] uppercase tracking-wider text-white">
              In progress
            </span>
          )}
        </article>
      ))}
    </div>
  );
}
