import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import PostCard from "@/components/PostCard";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Guides & Explainers",
  description:
    "Plain-English answers to gaming gear questions, backed by our own bench measurements.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-wrap px-4 py-10">
      <Eyebrow>Lab notebook</Eyebrow>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Guides &amp; explainers
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        The questions behind the buying decisions — answered with measurements,
        not marketing copy.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {posts.map((p) => <PostCard key={p.slug} post={p} />)}
      </div>
    </div>
  );
}
