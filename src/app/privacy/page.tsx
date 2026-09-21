import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        ["Information we collect", "When you request a demo we receive your name, phone number, restaurant name and city. Restaurant data you create inside Billphora belongs to you."],
        ["How we use it", "We use your details only to contact you about Billphora and to provide and support the service."],
        ["Sharing", "We do not sell your data. We share it only with service providers needed to run Billphora, or when the law requires it."],
        ["Contact", "For any privacy question, write to us using the contact details on the home page."],
      ]}
    />
  );
}
