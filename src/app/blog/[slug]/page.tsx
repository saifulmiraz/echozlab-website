import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Byline from "@/components/Byline";
import Eyebrow from "@/components/Eyebrow";
import ProductCard from "@/components/ProductCard";
import { getCategory, getPost, getProduct, posts } from "@/lib/data";
import { articleSchema, breadcrumbSchema, JsonLd } from "@/lib/schema";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogPost({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const cat = getCategory(post.category);
  const related = post.relatedProductSlug ? getProduct(post.relatedProductSlug) : undefined;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={[breadcrumbSchema(crumbs), articleSchema(post)]} />
      <Breadcrumbs items={crumbs.slice(0, 2)} />

      <div className="mt-4 overflow-hidden rounded-xl border border-line">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/post-${post.slug}.svg`}
          alt={post.title}
          className="h-auto w-full"
        />
      </div>

      <h1 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
        {post.title}
      </h1>
      <div className="mt-3">
        <Byline author={post.author} updated={post.updated} extra={`${post.readMins} min read`} />
      </div>

      {/* Answer-first intro — featured-snippet target */}
      <p className="mt-6 rounded-lg border-l-2 border-amber bg-surface p-5 text-lg leading-relaxed text-ink/90">
        {post.answerFirst}
      </p>

      {/* Body */}
      <div className="mt-10 space-y-9">
        {post.body.map((s) => (
          <section key={s.heading}>
            <h2 className="font-display text-2xl font-bold text-ink">{s.heading}</h2>
            <p className="mt-3 leading-relaxed text-ink/85">{s.body}</p>
          </section>
        ))}
      </div>

      {/* Inline product card — contextual monetization */}
      {related && (
        <aside className="mt-12">
          <Eyebrow>If you&apos;re shopping</Eyebrow>
          <p className="mt-2 mb-4 text-sm text-muted">
            Our current pick from the bench (we may earn a commission):
          </p>
          <div className="max-w-sm"><ProductCard p={related} /></div>
        </aside>
      )}

      {/* Key takeaways */}
      <section className="mt-12 rounded-xl border border-line bg-surface p-6">
        <Eyebrow>Key takeaways</Eyebrow>
        <ul className="mt-3 space-y-2 text-sm text-ink/90">
          {post.takeaways.map((t) => (
            <li key={t} className="flex gap-2">
              <span aria-hidden className="text-amber">▸</span>
              {t}
            </li>
          ))}
        </ul>
      </section>

      {cat && (
        <p className="mt-8 text-sm text-muted">
          Ready to buy? See everything we&apos;ve tested on the{" "}
          <Link href={`/${cat.slug}`} className="text-amber hover:underline">
            {cat.name.toLowerCase()} hub
          </Link>.
        </p>
      )}
    </article>
  );
}
