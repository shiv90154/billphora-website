import { Cloud, Smartphone } from "lucide-react";
import { offlineSteps } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Offline() {
  return (
    <section id="offline" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          light
          eyebrow="Offline-first"
          title="Internet down? Your billing isn't."
          body="Billphora saves every bill on the device first. The cloud is only used when you decide to sync."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {offlineSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-100">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex items-center justify-center gap-4 text-slate-100">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-sky-200">
            <Smartphone size={22} />
          </span>
          <span className="h-px w-16 border-t-2 border-dashed border-sky-300/50 sm:w-32" />
          <span className="text-xs font-semibold tracking-wider text-sky-200 uppercase">Sync to cloud</span>
          <span className="h-px w-16 border-t-2 border-dashed border-sky-300/50 sm:w-32" />
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-sky-200">
            <Cloud size={22} />
          </span>
        </Reveal>
      </div>
    </section>
  );
}
