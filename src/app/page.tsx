import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Features } from "@/components/features";
import { Offline } from "@/components/offline";
import { Steps } from "@/components/steps";
import { CtaBanner } from "@/components/cta-banner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features limit={6} />
      <div className="-mt-10 pb-20 text-center sm:-mt-16">
        <Link href="/features" className="inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-strong">
          See all features <ArrowRight size={16} />
        </Link>
      </div>
      <Offline />
      <Steps />
      <CtaBanner />
    </main>
  );
}
