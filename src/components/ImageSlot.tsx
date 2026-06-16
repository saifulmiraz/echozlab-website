import { site } from "@/lib/site";

/** Branded placeholder for product photography. Looks intentional (subtle grid
    + monogram) rather than a flat gray box. Swap for next/image with your own
    hands-on photos — original photos are an EEAT requirement. */
export default function ImageSlot({ label, ratio = "aspect-[4/3]" }: { label: string; ratio?: string }) {
  return (
    <div
      role="img"
      aria-label={`Photo placeholder: ${label}`}
      className={`${ratio} relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-line bg-gradient-to-br from-raised to-surface`}
    >
      <div aria-hidden className="absolute inset-0 bg-grid-faint [background-size:22px_22px] opacity-60" />
      <div aria-hidden className="absolute inset-0 bg-hero-glow opacity-40" />
      <span className="relative font-display text-2xl font-bold tracking-tight text-ink/30">
        {site.name}
      </span>
      <span className="relative mt-1 px-4 text-center font-mono text-[10px] uppercase tracking-widest text-muted/70">
        {label}
      </span>
    </div>
  );
}
