import { trades } from "@/lib/site";

export function Marquee() {
  const row = [...trades, ...trades];
  return (
    <section aria-label="Businesses we serve" className="marquee border-b border-border bg-white py-5">
      <div className="mx-auto mb-3 max-w-6xl px-4 text-center text-xs font-semibold tracking-wider text-muted-foreground uppercase sm:px-6">
        Made for businesses that bill all day
      </div>
      <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-3">
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              aria-hidden={i >= trades.length}
              className="rounded-full border border-border bg-muted px-5 py-2 text-sm font-semibold whitespace-nowrap text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
