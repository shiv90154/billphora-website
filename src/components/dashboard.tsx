"use client";

import { motion } from "framer-motion";
import { Check, RefreshCw } from "lucide-react";
import { Reveal } from "./reveal";

const days = [
  { d: "Mon", v: 42 },
  { d: "Tue", v: 58 },
  { d: "Wed", v: 51 },
  { d: "Thu", v: 73 },
  { d: "Fri", v: 66 },
  { d: "Sat", v: 88 },
  { d: "Sun", v: 95 },
];

const outlets = [
  ["Sector 74", "₹21,400", 44],
  ["Phase 5", "₹15,800", 33],
  ["Zirakpur", "₹11,050", 23],
] as const;

const points = [
  "Sales, tax and settlement reports for every day",
  "Every outlet side by side, from one login",
  "Staff, roles and permissions in a few taps",
  "Stock, suppliers and purchase orders in one place",
];

export function Dashboard() {
  return (
    <section id="dashboard" className="overflow-hidden bg-muted py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <span className="inline-block rounded-full bg-brand-soft px-3.5 py-1 text-xs font-semibold tracking-wider text-brand uppercase">
            Owner dashboard
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Your whole business, on one screen
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
            Your team bills on the counter app. You watch sales, stock and staff from anywhere, on any browser.
          </p>
          <ul className="mt-8 space-y-3.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-600">
                  <Check size={13} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border bg-card shadow-2xl shadow-brand/10">
            <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 rounded-md bg-muted px-3 py-1 text-[11px] text-muted-foreground">
                Owner dashboard
              </span>
              <span className="ml-auto inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                <RefreshCw size={12} /> Synced
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Today's sales", "₹48,250"],
                  ["Bills", "182"],
                  ["Avg bill", "₹265"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl bg-muted p-3.5">
                    <p className="text-[11px] text-muted-foreground">{k}</p>
                    <p className="mt-1 text-lg font-extrabold sm:text-xl">{v}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs font-semibold text-muted-foreground">Sales this week</p>
              <div className="mt-3 flex h-36 items-end gap-2.5">
                {days.map((x, i) => (
                  <div key={x.d} className="flex h-full flex-1 flex-col justify-end gap-2">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${x.v}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.07, ease: "easeOut" }}
                      className={`w-full rounded-t-lg ${i === 6 ? "bg-linear-to-t from-brand to-accent" : "bg-brand/25"}`}
                    />
                    <span className="text-center text-[10px] text-muted-foreground">{x.d}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs font-semibold text-muted-foreground">Outlets today</p>
              <div className="mt-3 space-y-3">
                {outlets.map(([n, v, pct]) => (
                  <div key={n}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="font-medium">{n}</span>
                      <span className="text-muted-foreground">{v}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct * 2}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-linear-to-r from-brand to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-right text-[10px] text-muted-foreground">Sample data for illustration</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
