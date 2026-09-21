import { Check, Monitor, Smartphone } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const products = [
  {
    icon: Smartphone,
    name: "Billing app",
    tag: "For your counter staff",
    points: ["Works fully offline", "Dine-in, takeaway, delivery", "KOT and bill printing", "Manual sync to cloud"],
  },
  {
    icon: Monitor,
    name: "Owner dashboard",
    tag: "For you, from anywhere",
    points: ["Sales and settlement reports", "Menu, tables and customers", "Staff, roles and permissions", "Stock, suppliers, purchase orders"],
  },
];

export function Products() {
  return (
    <section id="products" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Products"
          title="One platform, two apps"
          body="Your team bills on the app. You stay in control from the dashboard."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12}>
              <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-sm transition hover:shadow-xl hover:shadow-brand/10">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-linear-to-br from-brand to-accent text-white">
                  <p.icon size={26} />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold">{p.name}</h3>
                <p className="text-sm text-brand">{p.tag}</p>
                <ul className="mt-6 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check size={18} className="mt-0.5 shrink-0 text-emerald-500" /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
