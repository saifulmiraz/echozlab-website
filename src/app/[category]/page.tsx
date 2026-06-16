import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Disclosure from "@/components/Disclosure";
import Eyebrow from "@/components/Eyebrow";
import ProductCard from "@/components/ProductCard";
import { categories, getCategory, productsInCategory } from "@/lib/data";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";

interface Props {
  params: { category: string };
}

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = getCategory(params.category);
  if (!cat) return {};
  return {
    title: `${cat.name} — Tested & Ranked (2026)`,
    description: cat.blurb,
    alternates: { canonical: `/${cat.slug}` },
  };
}

export default function CategoryPage({ params }: Props) {
  const cat = getCategory(params.category);
  if (!cat) notFound();

  const items = productsInCategory(cat.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: cat.name, path: `/${cat.slug}` },
  ];

  return (
    <div className="mx-auto max-w-wrap px-4 py-10">
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(cat.faq)]} />
      <Breadcrumbs items={crumbs} />

      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {cat.name} — Tested &amp; Ranked
      </h1>
      <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted">{cat.blurb}</p>
      <div className="mt-5 max-w-3xl"><Disclosure /></div>

      {/* Review grid */}
      <section className="mt-10">
        <Eyebrow>Every unit on the bench</Eyebrow>
        <h2 className="mt-3 font-display text-2xl font-bold text-ink">Reviews</h2>
        {items.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
        ) : (
          <p className="mt-4 rounded border border-line bg-surface p-4 text-sm text-muted">
            Units for this category are on the bench now. First verdicts land soon.
          </p>
        )}
      </section>

      {/* Buying guide — evergreen SEO content */}
      <section className="mt-14 max-w-3xl">
        <Eyebrow>Buying guide</Eyebrow>
        <h2 className="mt-3 font-display text-2xl font-bold text-ink">
          How to choose — what our testing shows
        </h2>
        <div className="mt-5 space-y-7">
          {cat.buyingGuide.map((s) => (
            <div key={s.heading}>
              <h3 className="font-display text-lg font-semibold text-ink">{s.heading}</h3>
              <p className="mt-2 leading-relaxed text-ink/80">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-14 max-w-3xl">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-3 font-display text-2xl font-bold text-ink">Common questions</h2>
        <div className="mt-5 divide-y divide-line border-y border-line">
          {cat.faq.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none font-semibold text-ink transition-colors hover:text-amber">
                {f.q}
              </summary>
              <p className="mt-2 leading-relaxed text-ink/80">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
