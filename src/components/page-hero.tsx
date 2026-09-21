export function PageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/30 blur-[110px]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-sky-200 uppercase">
          {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h1>
        {body && <p className="mt-5 text-base leading-relaxed text-slate-100 sm:text-lg">{body}</p>}
      </div>
    </section>
  );
}
