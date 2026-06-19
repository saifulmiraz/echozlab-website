import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AffiliateButtons from "@/components/AffiliateButtons";
import Breadcrumbs from "@/components/Breadcrumbs";
import Byline from "@/components/Byline";
import Disclosure from "@/components/Disclosure";
import Eyebrow from "@/components/Eyebrow";
import ImageSlot from "@/components/ImageSlot";
import ProductCard from "@/components/ProductCard";
import SpecTable from "@/components/SpecTable";
import VerdictBox from "@/components/VerdictBox";
import { getCategory, getProduct, products, productsInCategory } from "@/lib/data";
import { breadcrumbSchema, JsonLd, reviewSchema } from "@/lib/schema";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = getProduct(params.slug);
  if (!p) return {};
  return {
    title: `${p.name} Review: ${p.oneLiner.replace(/\.$/, "")}`,
    description: p.verdict.slice(0, 155),
    alternates: { canonical: `/reviews/${p.slug}` },
  };
}

export default function ReviewPage({ params }: Props) {
  const p = getProduct(params.slug);
  if (!p) notFound();

  const cat = getCategory(p.category);
  const related = productsInCategory(p.category)
    .filter((x) => x.slug !== p.slug)
    .slice(0, 3);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: cat?.name ?? p.category, path: `/${p.category}` },
    { name: `${p.name} review`, path: `/reviews/${p.slug}` },
  ];

  return (
    <article className="mx-auto max-w-wrap px-4 py-10">
      <JsonLd data={[breadcrumbSchema(crumbs), reviewSchema(p)]} />
      <Breadcrumbs items={crumbs} />

      <header className="mt-4 max-w-3xl">
        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
          {p.name} review: {p.oneLiner.replace(/\.$/, "").toLowerCase()}
        </h1>
        <div className="mt-3">
          <Byline author={p.author} updated={p.updated} extra={`tested ${p.testedWeeks} weeks`} />
        </div>
        <div className="mt-4"><Disclosure /></div>
      </header>

      {/* Above-the-fold verdict */}
      <div className="mt-7"><VerdictBox p={p} /></div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_20rem]">
        <div className="max-w-3xl">
          {/* Hands-on photo slots */}
          <div className="grid gap-4 sm:grid-cols-2">
            <ImageSlot label={`${p.name} — on the bench`} />
            <ImageSlot label={`${p.name} — in hand`} />
          </div>

          {/* Body sections */}
          <div className="mt-10 space-y-10">
            {p.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-display text-2xl font-bold text-ink">{s.heading}</h2>
                <p className="mt-3 leading-relaxed text-ink/85">{s.body}</p>
              </section>
            ))}
          </div>

          {/* Final verdict + repeat CTA */}
          <section className="mt-12 rounded-xl border border-line bg-surface p-6">
            <Eyebrow>Final verdict</Eyebrow>
            <p className="mt-3 leading-relaxed text-ink/90">{p.verdict}</p>
            <div className="mt-5"><AffiliateButtons asin={p.asin} ebayQuery={p.ebayQuery} /></div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8 lg:sticky lg:top-20 lg:self-start">
          <div className="rounded-lg border border-line bg-surface p-4">
            <SpecTable specs={p.specs} caption="Key specs" />
          </div>
        </aside>
      </div>

      {/* Related — silo linking */}
      {related.length > 0 && (
        <section className="mt-16">
          <Eyebrow>Also on the bench</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-bold text-ink">
            More {cat?.name.toLowerCase()} we&apos;ve tested
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => <ProductCard key={r.slug} p={r} />)}
          </div>
          <p className="mt-6 text-sm text-muted">
            See the full ranking on our{" "}
            <Link href={`/${p.category}`} className="text-amber hover:underline">
              {cat?.name.toLowerCase()} hub
            </Link>.
          </p>
        </section>
      )}
    </article>
  );
}
