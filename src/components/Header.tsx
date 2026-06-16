import Link from "next/link";
import { categories } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-wrap items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-baseline gap-2" aria-label="Frame Advantage home">
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            Echoz<span className="text-amber">Lab</span>
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted sm:inline">
            tested · measured · ranked
          </span>
        </Link>
        <nav aria-label="Categories" className="hidden lg:block">
          <ul className="flex gap-5 text-sm text-muted">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="transition-colors hover:text-amber">
                  {c.name.replace("Gaming ", "")}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog" className="transition-colors hover:text-amber">
                Guides
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          href="/blog"
          className="rounded border border-line px-3 py-1.5 text-sm text-ink transition-colors hover:border-amber hover:text-amber lg:hidden"
        >
          Browse
        </Link>
      </div>
    </header>
  );
}
