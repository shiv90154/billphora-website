"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { Reveal } from "./reveal";
import { WhatsappIcon } from "./whatsapp-icon";
import { validateDemo, type DemoErrors, type DemoForm } from "@/lib/validation";

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40";

const fields: {
  key: keyof DemoForm;
  label: string;
  placeholder: string;
  type: string;
  max: number;
  inputMode?: "tel" | "text";
  autoComplete: string;
}[] = [
  { key: "name", label: "Your name", placeholder: "Rahul Sharma", type: "text", max: 60, autoComplete: "name" },
  { key: "phone", label: "Mobile number", placeholder: "98765 43210", type: "tel", max: 16, inputMode: "tel", autoComplete: "tel" },
  { key: "restaurant", label: "Restaurant name", placeholder: "Sharma Dhaba", type: "text", max: 80, autoComplete: "organization" },
  { key: "city", label: "City", placeholder: "Mohali", type: "text", max: 60, autoComplete: "address-level2" },
];

export function Contact() {
  const [form, setForm] = useState<DemoForm>({ name: "", phone: "", restaurant: "", city: "" });
  const [errors, setErrors] = useState<DemoErrors>({});
  const [locked, setLocked] = useState(false);

  const set = (k: keyof DemoForm) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (locked) return;
    const { values, errors: found } = validateDemo(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setLocked(true);
    setTimeout(() => setLocked(false), 3000);
    const msg = `Hi, I want a Billphora demo.\nName: ${values.name}\nPhone: ${values.phone}\nRestaurant: ${values.restaurant}\nCity: ${values.city}`;
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand/25 blur-[110px]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-sky-200 uppercase">
            Book a demo
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            See Billphora in your restaurant
          </h1>
          <p className="mt-4 max-w-md text-slate-300">
            Share a few details and we will reach out on WhatsApp to set up a free demo.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-slate-300">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-sky-300" /> {site.phone}
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-sky-300" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-sky-300" /> {site.address}
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <form
            onSubmit={submit}
            noValidate
            className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8"
          >
            {fields.map((f) => (
              <div key={f.key}>
                <label htmlFor={f.key} className="mb-1.5 block text-xs font-medium text-slate-300">
                  {f.label}
                </label>
                <input
                  id={f.key}
                  name={f.key}
                  type={f.type}
                  inputMode={f.inputMode}
                  autoComplete={f.autoComplete}
                  maxLength={f.max}
                  placeholder={f.placeholder}
                  value={form[f.key]}
                  onChange={set(f.key)}
                  aria-invalid={errors[f.key] ? true : undefined}
                  aria-describedby={errors[f.key] ? `${f.key}-error` : undefined}
                  className={`${fieldClass} ${errors[f.key] ? "border-red-400/70" : ""}`}
                />
                {errors[f.key] && (
                  <p id={`${f.key}-error`} role="alert" className="mt-1.5 text-xs text-red-300">
                    {errors[f.key]}
                  </p>
                )}
              </div>
            ))}
            <button
              type="submit"
              disabled={locked}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0e7c47] py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#0b6a3c] disabled:opacity-60"
            >
              <WhatsappIcon size={18} /> Send on WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
