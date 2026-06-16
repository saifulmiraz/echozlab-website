import { affiliateRel, amazonLink, ebayLink } from "@/lib/site";

export default function AffiliateButtons({
  asin,
  ebayQuery,
  compact = false,
}: {
  asin: string;
  ebayQuery: string;
  compact?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded font-semibold transition-colors " +
    (compact ? "px-3 py-1.5 text-xs" : "px-5 py-2.5 text-sm");
  return (
    <div className={compact ? "flex gap-2" : "flex flex-col gap-2 sm:flex-row sm:gap-3"}>
      <a
        href={amazonLink(asin)}
        rel={affiliateRel}
        target="_blank"
        className={`${base} bg-amber text-bg hover:bg-amber-dim`}
      >
        Check price on Amazon
      </a>
      <a
        href={ebayLink(ebayQuery)}
        rel={affiliateRel}
        target="_blank"
        className={`${base} border border-line text-ink hover:border-amber hover:text-amber`}
      >
        See used on eBay
      </a>
    </div>
  );
}
