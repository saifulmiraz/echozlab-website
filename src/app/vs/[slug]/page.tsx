import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AffiliateButtons from "@/components/AffiliateButtons";
import Breadcrumbs from "@/components/Breadcrumbs";
import Byline from "@/components/Byline";
import Disclosure from "@/components/Disclosure";
import Eyebrow from "@/components/Eyebrow";
import { ScoreBar } from "@/components/ScoreBar";
import { comparisons, getComparison, getProduct } from "@/lib/data";
import { breadcrumbSchema, comparisonSchema, JsonLd } from "@/lib/schema";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const c = getComparison(params.slug);
  if (!c) return {};
  return {
    title: `${c.title}: Which Should You Buy?`,
    description: `${c.tldrA} ${c.tldrB}`.slice(0, 155),
    alternates: { canonical: `/vs/${c.slug}` },
  };
}

const winnerLabel = { a: "Winner", b: "Winner", tie: "Tie" } as const;

export default function ComparisonPage({ params }: Props) {
  const c = getComparison(params.slug);
  if (!c) notFound();
  const a = getProduct(c.a);
  const b = getProduct(c.b);
  if (!a || !b) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Comparisons", path: "/vs/" + c.slug },
  ];

  const scoreRows: { label: string; key: keyof typeof a.scores }[] = [
    { label: "Performance", key: "performance" },
    { label: "Build", key: "build" },
    { label: "Features", key: "features" },
    { label: "Value", key: "value" },
  ];

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <JsonLd data={[breadcrumbSchema(crumbs), comparisonSchema(c)]} />
      <Breadcrumbs items={crumbs} />

      <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
        {c.title}: which should you buy?
      </h1>
      <div className="mt-3"><Byline author={c.author} updated={c.updated} /></div>
      <div className="mt-4"><Disclosure /></div>

      {/* TL;DR */}
      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        {[{ p: a, tldr: c.tldrA }, { p: b, tldr: c.tldrB }].map(({ p, tldr }) => (
          <div key={p.slug} className="flex flex-col rounded-xl border border-amber/30 bg-surface p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-amber">TL;DR</p>
            <h2 className="mt-2 font-display text-lg font-semibold text-ink">
              <Link href={`/reviews/${p.slug}`} className="hover:text-amber">{p.name}</Link>
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/85">{tldr}</p>
            <div className="mt-4">
              <AffiliateButtons asin={p.asin} ebayQuery={p.ebayQuery} compact />
            </div>
          </div>
        ))}
      </section>

      {/* Bench face-off */}
      <section className="mt-12">
        <Eyebrow>Bench face-off</Eyebrow>
        <h2 className="mt-3 font-display text-2xl font-bold text-ink">Scores side by side</h2>
        <div className="mt-5 grid gap-6 rounded-xl border border-line bg-surface p-5 sm:grid-cols-2">
          {[a, b].map((p) => (
            <div key={p.slug}>
              <p className="font-display font-semibold text-ink">{p.name}</p>
              <p className="font-mono text-sm text-amber">{p.overall.toFixed(1)}/10 overall</p>
              <div className="mt-3 space-y-2.5">
                {scoreRows.map((r) => (
                  <ScoreBar key={r.key} label={r.label} value={p.scores[r.key]} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spec table */}
      <section className="mt-12">
        <Eyebrow>Spec sheet</Eyebrow>
        <h2 className="mt-3 font-display text-2xl font-bold text-ink">Side-by-side specs</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-line text-left">
                <th className="py-2 pr-4 font-mono text-xs uppercase tracking-wider text-muted">Spec</th>
                <th className="py-2 pr-4 font-display text-ink">{a.name}</th>
                <th className="py-2 font-display text-ink">{b.name}</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              {a.specs.map(([k, vA], i) => {
                const vB = b.specs[i]?.[1] ?? "—";
                const differs = vA !== vB;
                return (
                  <tr key={k} className={`border-b border-line ${differs ? "bg-amber/5" : ""}`}>
                    <th scope="row" className="py-2 pr-4 text-left text-xs uppercase tracking-wider text-muted">
                      {k}
                    </th>
                    <td className="py-2 pr-4 text-ink/90">{vA}</td>
                    <td className="py-2 text-ink/90">{vB}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Rounds */}
      <section className="mt-12 space-y-9">
        {c.rounds.map((r) => (
          <div key={r.heading}>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-display text-2xl font-bold text-ink">{r.heading}</h2>
              <span
                className={`rounded-sm px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${
                  r.winner === "tie" ? "bg-raised text-muted" : "bg-amber/15 text-amber"
                }`}
              >
                {r.winner === "tie"
                  ? winnerLabel.tie
                  : `${winnerLabel[r.winner]}: ${(r.winner === "a" ? a : b).brand}`}
              </span>
            </div>
            <p className="mt-3 leading-relaxed text-ink/85">{r.body}</p>
          </div>
        ))}
      </section>

      {/* Verdict */}
      <section className="mt-12 rounded-xl border border-amber/30 bg-surface p-6">
        <Eyebrow>Final verdict</Eyebrow>
        <p className="mt-3 leading-relaxed text-ink/90">{c.verdict}</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <AffiliateButtons asin={a.asin} ebayQuery={a.ebayQuery} compact />
          <AffiliateButtons asin={b.asin} ebayQuery={b.ebayQuery} compact />
        </div>
        <p className="mt-5 text-sm text-muted">
          Full reviews:{" "}
          <Link href={`/reviews/${a.slug}`} className="text-amber hover:underline">{a.name}</Link>
          {" · "}
          <Link href={`/reviews/${b.slug}`} className="text-amber hover:underline">{b.name}</Link>
        </p>
      </section>
    </article>
  );
}
