import Link from "next/link";
import { Check } from "lucide-react";
import { plans } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Pricing({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="pricing" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {!standalone && (
          <SectionHeading
            eyebrow="Pricing"
            title="Simple plans that fit your restaurant"
            body="Talk to us for a quote. Every plan starts with a free demo and setup."
          />
        )}
        <div className={`${standalone ? "pt-4 " : "mt-14 "}grid items-stretch gap-6 md:grid-cols-3`}>
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 ${
                  p.featured
                    ? "bg-ink text-white shadow-2xl shadow-brand/30 ring-2 ring-brand md:-translate-y-3"
                    : "border border-border bg-card"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-extrabold">{p.name}</h3>
                <p className={`mt-1 text-sm ${p.featured ? "text-slate-300" : "text-muted-foreground"}`}>{p.blurb}</p>
                <p className="mt-6 text-3xl font-extrabold">Contact us</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm">
                      <Check size={18} className="mt-0.5 shrink-0 text-emerald-500" /> {pt}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 rounded-full py-3 text-center text-sm font-semibold transition ${
                    p.featured
                      ? "bg-brand text-white hover:bg-brand-strong"
                      : "bg-brand-soft text-brand hover:bg-brand hover:text-white"
                  }`}
                >
                  Get a quote
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
