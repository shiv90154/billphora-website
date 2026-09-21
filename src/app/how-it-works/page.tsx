import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Steps } from "@/components/steps";
import { Offline } from "@/components/offline";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = { title: "How it works" };

export default function HowItWorks() {
  return (
    <main>
      <PageHero
        eyebrow="How it works"
        title="From setup to first bill, simply"
        body="We handle the setup so your team can start billing on day one."
      />
      <Steps />
      <Offline />
      <CtaBanner />
    </main>
  );
}
