"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChefHat, CheckCircle2, WifiOff } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { WhatsappIcon } from "./whatsapp-icon";

const tables = [
  { n: "T1", s: "free" },
  { n: "T2", s: "busy" },
  { n: "T3", s: "busy" },
  { n: "T4", s: "free" },
  { n: "T5", s: "bill" },
  { n: "T6", s: "free" },
];

const tableStyle: Record<string, string> = {
  free: "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30",
  busy: "bg-amber-400/15 text-amber-300 ring-amber-400/30",
  bill: "bg-sky-400/20 text-sky-200 ring-sky-400/40",
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand/30 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-amber-500/10 blur-[110px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-sky-200">
            <WifiOff size={14} /> Offline-first restaurant billing
          </span>
          <h1 className="mt-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bill faster. Serve better. <span className="gradient-text">Never stop.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Billphora is the GST-ready POS for Indian restaurants. KOT, tables, delivery and stock in one place, and it
            keeps billing even when the internet goes down.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/40 transition hover:bg-brand-strong"
            >
              Book free demo
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
            <a
              href={whatsappLink("Hi, I want to know more about Billphora.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <WhatsappIcon size={18} className="text-[#25D366]" />
              Chat on WhatsApp
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
            {["GST ready", "Works offline", "Free demo & setup"].map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-400" /> {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="animate-float rounded-3xl border border-white/10 bg-white/6 p-5 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Bill #A-0142</p>
                <p className="text-sm font-semibold text-white">Table 5 · Dine-in</p>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                Saved offline
              </span>
            </div>
            <div className="mt-4 space-y-2.5 text-sm">
              {[
                ["Paneer Tikka", "1 × ₹260"],
                ["Butter Naan", "4 × ₹45"],
                ["Masala Chai", "2 × ₹30"],
              ].map(([a, b]) => (
                <div key={a} className="flex justify-between text-slate-300">
                  <span>{a}</span>
                  <span className="text-slate-400">{b}</span>
                </div>
              ))}
            </div>
            <div className="my-4 h-px bg-white/10" />
            <div className="flex justify-between text-xs text-slate-400">
              <span>GST 5%</span>
              <span>₹25.00</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm font-semibold text-white">Total</span>
              <span className="text-2xl font-extrabold text-white">₹525</span>
            </div>
            <div className="mt-4 rounded-xl bg-brand py-2.5 text-center text-sm font-semibold text-white">
              Print bill
            </div>
          </div>

          <div className="animate-float-slow absolute -bottom-8 -left-4 w-44 rounded-2xl border border-white/10 bg-ink-soft/95 p-3 shadow-xl backdrop-blur sm:-left-10">
            <p className="mb-2 text-[11px] font-semibold text-slate-400">Tables</p>
            <div className="grid grid-cols-3 gap-1.5">
              {tables.map((t) => (
                <span
                  key={t.n}
                  className={`rounded-lg py-1.5 text-center text-[11px] font-bold ring-1 ${tableStyle[t.s]}`}
                >
                  {t.n}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-float-slow absolute -top-6 -right-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-soft/95 px-3.5 py-2.5 shadow-xl backdrop-blur sm:-right-8">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-400/15 text-amber-300">
              <ChefHat size={16} />
            </span>
            <div>
              <p className="text-[11px] text-slate-400">KOT sent</p>
              <p className="text-xs font-semibold text-white">Kitchen · 2 items</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
