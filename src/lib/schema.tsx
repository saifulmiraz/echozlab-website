import { site } from "./site";
import type { Comparison, Post, Product } from "./data-types";

/* JSON-LD builders. Rendered via <script type="application/ld+json">. */

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    sameAs: [`https://twitter.com/${site.twitter.replace("@", "")}`],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

export function reviewSchema(p: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    brand: { "@type": "Brand", name: p.brand },
    description: p.oneLiner,
    review: {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: p.overall, bestRating: 10 },
      author: { "@type": "Person", name: p.author },
      datePublished: p.updated,
      reviewBody: p.verdict,
    },
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    dateModified: post.updated,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: site.name },
  };
}

export function comparisonSchema(c: Comparison) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    dateModified: c.updated,
    author: { "@type": "Person", name: c.author },
    publisher: { "@type": "Organization", name: site.name },
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
