import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function CtaBanner() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-linear-to-br from-ink via-ink-soft to-brand-strong p-10 text-center sm:p-16">
        <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-accent/25 blur-[90px]" />
        <h2 className="relative text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready to bill without limits?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-slate-300">
          Book a free demo and see how Billphora fits your restaurant.
        </p>
        <Link
          href="/contact"
          className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-sky-100"
        >
          Book free demo
          <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
}
