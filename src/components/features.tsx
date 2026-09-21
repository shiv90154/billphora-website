import { features } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Features({ limit, standalone = false }: { limit?: number; standalone?: boolean }) {
  const Title = standalone ? "h2" : "h3";
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {!standalone && <SectionHeading
          eyebrow="Features"
          title="Everything your restaurant needs at the counter"
          body="One simple app for billing, kitchen, tables and delivery, with a dashboard for the owner."
        />}
        <div className={`${standalone ? "" : "mt-14 "}grid gap-5 sm:grid-cols-2 lg:grid-cols-3`}>
          {features.slice(0, limit).map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
                  <f.icon size={22} />
                </span>
                <Title className="mt-5 text-lg font-bold">{f.title}</Title>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
