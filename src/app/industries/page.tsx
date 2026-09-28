import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Industries } from "@/components/industries";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Industries"
        title="One brand, built for every counter"
        body="Restaurant, pharmacy, retail and jewellery. Each gets billing flows made for that trade."
      />
      <Industries standalone />
      <CtaBanner />
    </main>
  );
}
