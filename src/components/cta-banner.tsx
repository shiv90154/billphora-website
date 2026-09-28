import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { Reveal } from "./reveal";
import { WhatsappIcon } from "./whatsapp-icon";

export function CtaBanner() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-linear-to-br from-ink via-ink-soft to-brand-strong p-10 text-center sm:p-16">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-accent/25 blur-[90px]" />
        <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-brand/40 blur-[90px]" />
        <h2 className="relative text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready to bill without limits?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-slate-100">
          Book a free demo and see how Billphora fits your business.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-sky-100"
          >
            Book free demo
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </Link>
          <a
            href={whatsappLink("Hi, I want to know more about Billphora.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            <WhatsappIcon size={18} className="text-[#25D366]" />
            Chat on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
