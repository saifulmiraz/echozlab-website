import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-wrap flex-col items-center px-4 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-amber">404 · signal lost</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-ink">This page isn&apos;t on the bench</h1>
      <p className="mt-3 max-w-md text-muted">
        The page may have moved when we reorganized a category. Head back home
        and browse from there.
      </p>
      <Link
        href="/"
        className="mt-6 rounded bg-amber px-5 py-2.5 text-sm font-semibold text-bg hover:bg-amber-dim"
      >
        Back to home
      </Link>
    </div>
  );
}
