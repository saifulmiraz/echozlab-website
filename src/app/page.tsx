import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import PostCard from "@/components/PostCard";
import ProductCard from "@/components/ProductCard";
import { ScoreBar } from "@/components/ScoreBar";
import { categories, posts, products } from "@/lib/data";

const trust = [
  "Hands-on tested",
  "No paid scores",
  "Updated monthly",
  "Reader-funded via affiliate links",
];

export default function HomePage() {
  const featured = products[0];
  const topPicks = products.filter((p) => p.badge).slice(0, 4);
  const latest = [...products]
    .sort((a, b) => b.updated.localeCompare(a.updated))
    .slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line bg-surface">
        {/* layered depth: faint grid + amber/cyan glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:48px_48px]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-glow" />
        <div className="relative mx-auto grid max-w-wrap gap-10 px-4 py-16 lg:grid-cols-[1.2fr_1fr] lg:py-24">
          <div>
            <Eyebrow>The test bench is open</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              Gear reviews <span className="text-amber">with receipts.</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Every score on this site is backed by bench data — measured click
              latency, panel response, mic samples, weeks of real use. We test
              gaming gear so the spec sheet can&apos;t lie to you.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={`/reviews/${featured.slug}`}
                className="rounded bg-amber px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-amber-dim"
              >
                Read the latest verdict
              </Link>
              <Link
                href="/blog"
                className="rounded border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-amber hover:text-amber"
              >
                How we test
              </Link>
            </div>
          </div>

          {/* Featured readout card */}
          <Link
            href={`/reviews/${featured.slug}`}
            className="group rounded-xl border border-line bg-bg/80 p-5 shadow-lift backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-amber/50 hover:shadow-glow"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-amber">
              Featured review
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold text-ink group-hover:text-amber">
              {featured.name}
            </h2>
            <p className="mt-1 text-sm text-muted">{featured.oneLiner}</p>
            <div className="mt-4 space-y-2.5">
              <ScoreBar label="Performance" value={featured.scores.performance} />
              <ScoreBar label="Build" value={featured.scores.build} />
              <ScoreBar label="Value" value={featured.scores.value} />
            </div>
            <p className="mt-4 font-mono text-sm text-ink">
              Bench score <span className="text-2xl font-bold text-amber">{featured.overall.toFixed(1)}</span>
              <span className="text-muted">/10</span>
            </p>
          </Link>
        </div>

        {/* Trust strip */}
        <div className="border-t border-line">
          <ul className="mx-auto flex max-w-wrap flex-wrap justify-center gap-x-8 gap-y-2 px-4 py-3 font-mono text-[11px] uppercase tracking-widest text-muted">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <span aria-hidden className="text-good">✓</span> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TOP PICKS */}
      <section className="mx-auto max-w-wrap px-4 py-14">
        <Eyebrow>Top picks this month</Eyebrow>
        <h2 className="mt-3 font-display text-2xl font-bold text-ink">
          Verdicts you can act on
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topPicks.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-wrap px-4 py-14">
          <Eyebrow>Browse the bench</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-bold text-ink">Every category we test</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="group relative overflow-hidden rounded-lg border border-line bg-bg p-4 shadow-lift transition-all hover:-translate-y-0.5 hover:border-amber/60 hover:shadow-glow"
              >
                <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 w-0 bg-amber transition-all duration-300 group-hover:w-full" />
                <h3 className="font-display font-semibold text-ink group-hover:text-amber">{c.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted">{c.blurb}</p>
                <span aria-hidden className="mt-3 inline-block font-mono text-[10px] uppercase tracking-widest text-muted transition-colors group-hover:text-amber">View ratings →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST REVIEWS */}
      <section className="mx-auto max-w-wrap px-4 py-14">
        <Eyebrow>Fresh off the bench</Eyebrow>
        <h2 className="mt-3 font-display text-2xl font-bold text-ink">Latest reviews</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>

      {/* GUIDES */}
      <section className="mx-auto max-w-wrap px-4 pb-14">
        <Eyebrow>From the lab notebook</Eyebrow>
        <h2 className="mt-3 font-display text-2xl font-bold text-ink">Guides &amp; explainers</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {posts.map((post) => <PostCard key={post.slug} post={post} />)}
        </div>
      </section>
    </>
  );
}
