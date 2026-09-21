import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  body,
  light = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span
        className={`inline-block rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider ${
          light ? "bg-white/10 text-sky-200" : "bg-brand-soft text-brand"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-slate-100" : "text-muted-foreground"}`}>
          {body}
        </p>
      )}
    </Reveal>
  );
}
