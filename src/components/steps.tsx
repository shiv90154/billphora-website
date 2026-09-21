import { steps } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Steps({ standalone = false }: { standalone?: boolean }) {
  const Title = standalone ? "h2" : "h3";
  return (
    <section id="how" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {!standalone && <SectionHeading eyebrow="How it works" title="Live in your restaurant in no time" />}
        <div className={`relative ${standalone ? "" : "mt-14 "}grid gap-8 sm:grid-cols-2 lg:grid-cols-4`}>
          <div className="absolute top-6 right-[12%] left-[12%] hidden h-px bg-linear-to-r from-transparent via-brand/40 to-transparent lg:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="relative text-center">
              <span className="relative mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand text-lg font-extrabold text-white shadow-lg shadow-brand/30 ring-8 ring-background">
                {i + 1}
              </span>
              <Title className="mt-5 text-lg font-bold">{s.title}</Title>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
