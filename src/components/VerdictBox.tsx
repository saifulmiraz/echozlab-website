import type { Product } from "@/lib/data-types";
import AffiliateButtons from "./AffiliateButtons";
import ProsCons from "./ProsCons";
import { OverallScore, ScoreBar } from "./ScoreBar";

/** Above-the-fold verdict: score, sub-scores, verdict text, CTAs. */
export default function VerdictBox({ p }: { p: Product }) {
  return (
    <section aria-label="Verdict" className="rounded-xl border border-amber/30 bg-surface p-5 sm:p-6">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="lg:w-56 lg:shrink-0">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Overall score</p>
          <div className="mt-1"><OverallScore value={p.overall} /></div>
          <div className="mt-4 space-y-2.5">
            <ScoreBar label="Performance" value={p.scores.performance} />
            <ScoreBar label="Build" value={p.scores.build} />
            <ScoreBar label="Features" value={p.scores.features} />
            <ScoreBar label="Value" value={p.scores.value} />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm leading-relaxed text-ink/90">{p.verdict}</p>
          <div className="mt-4"><ProsCons pros={p.pros} cons={p.cons} /></div>
          <div className="mt-5"><AffiliateButtons asin={p.asin} ebayQuery={p.ebayQuery} /></div>
        </div>
      </div>
    </section>
  );
}
