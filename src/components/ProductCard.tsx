import Link from "next/link";
import type { Product } from "@/lib/data-types";
import AffiliateButtons from "./AffiliateButtons";
import ImageSlot from "./ImageSlot";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="flex flex-col rounded-lg border border-line bg-surface p-4 shadow-lift transition-all hover:-translate-y-0.5 hover:border-amber/50 hover:shadow-glow">
      {p.badge && (
        <span className="mb-3 self-start rounded-sm bg-amber/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-amber">
          {p.badge}
        </span>
      )}
      <ImageSlot label={p.name} />
      <div className="mt-3 flex items-start justify-between gap-2">
        <h3 className="font-display text-base font-semibold leading-snug text-ink">
          <Link href={`/reviews/${p.slug}`} className="hover:text-amber">
            {p.name}
          </Link>
        </h3>
        <span className="shrink-0 font-mono text-lg font-bold text-amber">{p.overall.toFixed(1)}</span>
      </div>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{p.oneLiner}</p>
      <p className="mt-2 font-mono text-xs text-muted">{p.priceBand} · tested {p.testedWeeks} wks</p>
      <div className="mt-3">
        <AffiliateButtons asin={p.asin} ebayQuery={p.ebayQuery} compact />
      </div>
    </article>
  );
}
