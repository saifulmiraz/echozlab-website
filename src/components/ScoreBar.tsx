/** Signature element: scores rendered as bench-style measurement bars. */
export function ScoreBar({ label, value }: { label: string; value: number }) {
  const pct = Math.max(0, Math.min(100, value * 10));
  return (
    <div className="grid grid-cols-[7rem_1fr_2.5rem] items-center gap-3">
      <span className="font-mono text-[11px] uppercase tracking-wider text-muted">{label}</span>
      <div
        role="meter"
        aria-valuemin={0}
        aria-valuemax={10}
        aria-valuenow={value}
        aria-label={`${label}: ${value} out of 10`}
        className="relative h-2 overflow-hidden rounded-sm bg-raised"
      >
        <div className="h-full rounded-sm bg-amber" style={{ width: `${pct}%` }} />
        {/* tick marks every 25% — the ruler motif */}
        <div aria-hidden className="absolute inset-0 flex justify-between px-[24.5%]">
          <span className="h-full w-px bg-bg/60" />
          <span className="h-full w-px bg-bg/60" />
          <span className="h-full w-px bg-bg/60" />
        </div>
      </div>
      <span className="text-right font-mono text-sm text-ink">{value.toFixed(1)}</span>
    </div>
  );
}

export function OverallScore({ value }: { value: number }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <span className="font-display text-5xl font-bold leading-none text-amber">
        {value.toFixed(1)}
      </span>
      <span className="font-mono text-sm text-muted">/10</span>
    </div>
  );
}
