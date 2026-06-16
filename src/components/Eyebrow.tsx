/** Section label styled like a bench-readout: tick mark + mono caps. */
export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-amber">
      <span aria-hidden className="inline-block h-px w-6 bg-amber" />
      {children}
    </p>
  );
}
