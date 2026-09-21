import { PageHero } from "./page-hero";

export function LegalPage({ title, sections }: { title: string; sections: [string, string][] }) {
  return (
    <main>
      <PageHero eyebrow="Legal" title={title} />
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        {sections.map(([h, b]) => (
          <section key={h} className="mt-8 first:mt-0">
            <h2 className="text-lg font-bold">{h}</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{b}</p>
          </section>
        ))}
      </article>
    </main>
  );
}
