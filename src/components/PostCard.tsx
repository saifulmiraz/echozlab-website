import Link from "next/link";
import type { Post } from "@/lib/data-types";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="rounded-lg border border-line bg-surface p-5 transition-colors hover:border-amber/50">
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
        {post.category.replace(/-/g, " ")} · {post.readMins} min read
      </p>
      <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
        <Link href={`/blog/${post.slug}`} className="hover:text-amber">{post.title}</Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
    </article>
  );
}
