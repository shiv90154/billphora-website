import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Features } from "@/components/features";
import { Products } from "@/components/products";
import { Offline } from "@/components/offline";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = { title: "Features" };

export default function FeaturesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Features"
        title="Everything your restaurant needs"
        body="Billing, kitchen, tables, delivery, stock and reports in one simple platform."
      />
      <Features standalone />
      <Offline />
      <Products />
      <CtaBanner />
    </main>
  );
}
