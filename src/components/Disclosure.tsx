import Link from "next/link";

/** Must appear above the first affiliate link on every monetized page. */
export default function Disclosure() {
  return (
    <p className="rounded border border-line bg-surface px-3 py-2 font-mono text-[11px] leading-relaxed text-muted">
      We may earn a commission when you buy through links on this page — at no
      extra cost to you. Commissions never influence scores.{" "}
      <Link href="/affiliate-disclosure" className="text-amber hover:underline">
        How we make money
      </Link>
    </p>
  );
}
