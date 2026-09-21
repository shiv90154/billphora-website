import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Terms of Service" };

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      sections={[
        ["Using Billphora", "Billphora is provided to restaurants for billing and business management. You are responsible for the accuracy of the data you enter."],
        ["Accounts", "Keep your login details safe. You are responsible for activity under your restaurant account and staff logins."],
        ["Availability", "The billing app works offline. Cloud sync and the owner dashboard depend on internet and may be briefly unavailable during maintenance."],
        ["Changes", "We may update these terms and the service from time to time."],
      ]}
    />
  );
}
