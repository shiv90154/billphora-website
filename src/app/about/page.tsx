import type { Metadata } from "next";
import Image from "next/image";
import { Cpu, GraduationCap, HeartHandshake } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

const pillars = [
  { icon: Cpu, title: "IT services", body: "Software and technology built for real businesses, not demos." },
  { icon: GraduationCap, title: "Industrial training", body: "Empowering future innovators with hands-on skills." },
  { icon: HeartHandshake, title: "Long-term support", body: "We stay with our customers after the launch." },
];

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Built by Inphora, made for restaurants"
        body="Billphora is a product of Inphora Pvt. Ltd., an IT services and industrial training company in Mohali."
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Why we built Billphora</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Restaurants cannot afford to stop billing because the internet dropped. We built Billphora offline-first,
              so every bill is saved on the counter device and synced to the cloud when you choose.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Along with GST-ready billing, KOT, tables and delivery, owners get a dashboard to track sales, staff and
              stock from anywhere.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid place-items-center gap-4 rounded-3xl border border-border bg-muted p-8">
            <Image src="/inphora-logo.png" alt={site.company} width={777} height={268} className="h-24 w-auto" />
            <p className="text-sm text-muted-foreground">{site.city}</p>
          </Reveal>
        </div>
      </section>
      <section className="bg-muted pt-16 pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                  <p.icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner />
    </main>
  );
}
