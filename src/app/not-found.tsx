import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-4 text-center">
      <div>
        <p className="gradient-text text-7xl font-extrabold">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white">This page could not be found</h1>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white hover:bg-brand-strong"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
