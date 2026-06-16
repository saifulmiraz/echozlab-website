import type { MetadataRoute } from "next";
import { categories, comparisons, posts, products } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, priority: 1 },
    { url: `${site.url}/blog`, lastModified: now, priority: 0.7 },
    ...categories.map((c) => ({ url: `${site.url}/${c.slug}`, lastModified: now, priority: 0.9 })),
    ...products.map((p) => ({ url: `${site.url}/reviews/${p.slug}`, lastModified: new Date(p.updated), priority: 0.8 })),
    ...comparisons.map((c) => ({ url: `${site.url}/vs/${c.slug}`, lastModified: new Date(c.updated), priority: 0.8 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.updated), priority: 0.6 })),
  ];
}
