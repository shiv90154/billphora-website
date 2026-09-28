import { Suspense } from "react";
import type { Metadata } from "next";
import { Contact } from "@/components/contact";

export const metadata: Metadata = { title: "Book a demo" };

export default function ContactPage() {
  return (
    <main>
      <Suspense>
        <Contact />
      </Suspense>
    </main>
  );
}
