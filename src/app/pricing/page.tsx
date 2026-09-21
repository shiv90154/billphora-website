import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Plans that grow with you"
        body="Every plan begins with a free demo and hands-on setup."
      />
      <Pricing />
      <Faq />
      <CtaBanner />
    </main>
  );
}
