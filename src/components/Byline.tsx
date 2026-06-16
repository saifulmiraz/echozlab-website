import { getAuthor } from "@/lib/data";

export default function Byline({
  author,
  updated,
  extra,
}: {
  author: string;
  updated: string;
  extra?: string;
}) {
  const a = getAuthor(author);
  const date = new Date(updated + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
      <span className="text-ink">By {author}</span>
      {a && <span className="hidden sm:inline">· {a.role}</span>}
      <span>· Updated {date}</span>
      {extra && <span className="font-mono text-xs text-amber">· {extra}</span>}
    </div>
  );
}
