"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, WifiOff } from "lucide-react";
import { industries, whatsappLink } from "@/lib/site";
import { WhatsappIcon } from "./whatsapp-icon";

const ROTATE_MS = 4500;

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const { bill, accent } = industries[active];
  const ChipA = bill.chips[0].icon;
  const ChipB = bill.chips[1].icon;

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % industries.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, reduce]);

  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand/30 blur-[120px]" />
      <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[110px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-sky-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <WifiOff size={14} /> Offline-first billing for every business
          </span>
          <h1 className="mt-6 text-5xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="block">Bill faster.</span>
            <span className="block">Serve better.</span>
            <span className="gradient-text block">Never stop.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-100 sm:text-lg">
            Billphora is the GST-ready POS for Indian restaurants, pharmacies, retail stores and jewellers. Billing,
            stock and reports in one place, and it keeps billing even when the internet goes down.
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
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-100">
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
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            role="group"
            aria-label="Business type"
            className="grid grid-cols-4 gap-1 rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur"
          >
            {industries.map((ind, i) => (
              <button
                key={ind.name}
                type="button"
                aria-pressed={active === i}
                onClick={() => {
                  setActive(i);
                  setPaused(true);
                }}
                className={`relative flex flex-col items-center gap-1 rounded-xl px-1 py-2 text-[11px] font-semibold transition sm:flex-row sm:justify-center sm:gap-1.5 sm:px-2 sm:text-xs ${
                  active === i ? "text-white" : "text-slate-200 hover:text-white"
                }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="hero-tab"
                    className={`absolute inset-0 rounded-xl bg-linear-to-br ${ind.accent} opacity-90 shadow-lg`}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <ind.icon size={15} className="relative" />
                <span className="relative">{ind.name}</span>
              </button>
            ))}
          </div>

          <div className="relative mt-10">
            <div className="animate-float rounded-3xl border border-white/10 bg-white/6 p-5 pt-9 pb-9 shadow-2xl shadow-black/40 backdrop-blur">
              <div className={`absolute inset-x-8 top-0 h-px bg-linear-to-r ${accent} opacity-80`} />
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-300">Bill #A-0142</p>
                      <p className="text-sm font-semibold text-white">{bill.meta}</p>
                    </div>
                    <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                      Saved offline
                    </span>
                  </div>
                  <div className="mt-4 space-y-2.5 text-sm">
                    {bill.items.map(([a, b]) => (
                      <div key={a} className="flex justify-between gap-3 text-slate-100">
                        <span>{a}</span>
                        <span className="shrink-0 text-slate-300">{b}</span>
                      </div>
                    ))}
                  </div>
                  <div className="my-4 h-px bg-white/10" />
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>{bill.tax[0]}</span>
                    <span>{bill.tax[1]}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">Total</span>
                    <span className="text-3xl font-extrabold text-white">{bill.total}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="mt-4 rounded-xl bg-brand py-2.5 text-center text-sm font-semibold text-white">
                Print bill
              </div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`a${active}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute -top-5 left-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-soft/95 px-3.5 py-2.5 shadow-xl backdrop-blur sm:-left-6"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-400/15 text-amber-300">
                  <ChipA size={16} />
                </span>
                <div>
                  <p className="text-[11px] text-slate-300">{bill.chips[0].label}</p>
                  <p className="text-xs font-semibold text-white">{bill.chips[0].value}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`b${active}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute -bottom-6 right-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-soft/95 px-3.5 py-2.5 shadow-xl backdrop-blur sm:-right-6"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-400/15 text-emerald-300">
                  <ChipB size={16} />
                </span>
                <div>
                  <p className="text-[11px] text-slate-300">{bill.chips[1].label}</p>
                  <p className="text-xs font-semibold text-white">{bill.chips[1].value}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
