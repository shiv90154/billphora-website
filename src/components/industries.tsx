import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { industries } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Industries({ standalone = false }: { standalone?: boolean }) {
  const Title = standalone ? "h2" : "h3";
  return (
    <section id="industries" className="pt-20 pb-6 sm:pt-28 sm:pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {!standalone && (
          <SectionHeading
            eyebrow="Industries"
            title="One brand, built for every counter"
            body="Restaurant, pharmacy, retail or jewellery. Billphora comes with the billing flow your trade needs."
          />
        )}
        <div className={`${standalone ? "" : "mt-14 "}grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.08} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand/15">
                <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${ind.accent}`} />
                <div
                  className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-linear-to-br ${ind.accent} opacity-0 blur-3xl transition duration-500 group-hover:opacity-25`}
                />
                <span
                  className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-linear-to-br ${ind.accent} text-white shadow-lg transition group-hover:scale-105`}
                >
                  <ind.icon size={26} />
                </span>
                <Title className="relative mt-5 text-xl font-extrabold">{ind.name}</Title>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{ind.blurb}</p>
                <div className="relative mt-4 flex flex-wrap gap-1.5">
                  {ind.ideal.map((t) => (
                    <span key={t} className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="relative mt-5 flex-1 space-y-2.5">
                  {ind.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check size={16} className="mt-0.5 shrink-0 text-emerald-500" /> {pt}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?type=${ind.name}`}
                  className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition hover:text-brand-strong"
                >
                  Book a {ind.name.toLowerCase()} demo
                  <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
