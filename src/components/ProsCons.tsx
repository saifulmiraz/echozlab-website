export default function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-lg border border-good/30 bg-good/5 p-4">
        <h3 className="font-mono text-xs uppercase tracking-widest text-good">Pros</h3>
        <ul className="mt-2 space-y-1.5 text-sm text-ink/90">
          {pros.map((x) => (
            <li key={x} className="flex gap-2"><span aria-hidden className="text-good">+</span>{x}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-bad/30 bg-bad/5 p-4">
        <h3 className="font-mono text-xs uppercase tracking-widest text-bad">Cons</h3>
        <ul className="mt-2 space-y-1.5 text-sm text-ink/90">
          {cons.map((x) => (
            <li key={x} className="flex gap-2"><span aria-hidden className="text-bad">−</span>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
