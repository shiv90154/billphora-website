import Image from "next/image";
import Link from "next/link";
import { Logo } from "./logo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{site.tagline}. Made for Indian restaurants.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.loginUrl} className="transition hover:text-white">
                Owner login
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={site.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-white px-4 py-2.5"
                aria-label={`A product of ${site.company}`}
              >
                <span className="mb-1 block text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                  A product of
                </span>
                <Image src="/inphora-logo.png" alt={site.company} width={777} height={268} className="h-9 w-auto" />
              </a>
            </li>
            <li>{site.address}</li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <Link href="/privacy" className="transition hover:text-white">
                Privacy
              </Link>
              {" · "}
              <Link href="/terms" className="transition hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} {site.company} All rights reserved.
      </div>
    </footer>
  );
}
