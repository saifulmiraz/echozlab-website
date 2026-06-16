import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — How We Make Money",
  description:
    "Frame Advantage is reader-funded through affiliate commissions. Here is exactly how that works and why it never affects our scores.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function DisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-3xl font-bold tracking-tight text-ink">
        How we make money
      </h1>
      <div className="mt-6 space-y-5 leading-relaxed text-ink/85">
        <p>
          Frame Advantage participates in the Amazon Services LLC Associates
          Program and the eBay Partner Network. When you buy through links on
          this site, we may earn a commission — at no extra cost to you.
        </p>
        <p>
          Commissions fund the lab: the latency rigs, the colorimeter, and the
          products we buy at retail to test. They do not buy scores. Brands
          never see reviews before publication, cannot pay for placement, and
          have no input on verdicts. When a manufacturer loans us a unit
          instead of us purchasing it, we say so in the review.
        </p>
        <p>
          Our scores come from measured data and weeks of real use. If a
          product is bad, we say it&apos;s bad — and link you to something
          better, even when that earns us less.
        </p>
      </div>
    </div>
  );
}
