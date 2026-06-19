import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Disclosure from "@/components/Disclosure";
import Eyebrow from "@/components/Eyebrow";
import { ScoreBar } from "@/components/ScoreBar";
import { affiliateRel } from "@/lib/site";
import { shootoutMeta, shootoutMice } from "@/lib/mouse-shootout";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: shootoutMeta.title,
  description:
    "Logitech G Pro X Superlight 2 vs Razer Viper V3 Pro vs Pulsar X2V3 vs WLMouse Beast X Pro — specs, scores, pros and cons, and which wireless gaming mouse to buy in 2026.",
  alternates: { canonical: "/vs/best-wireless-gaming-mice" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Gaming Mice", path: "/gaming-mice" },
  { name: "Best Wireless Mice", path: "/vs/best-wireless-gaming-mice" },
];

const faq = [
  {
    q: "Which is the best wireless gaming mouse overall in 2026?",
    a: "The Logitech G Pro X Superlight 2 is the safest all-round pick because its shape suits palm, claw and fingertip grips, and it pairs flagship internals with ~95-hour battery life. Competitive claw-grip FPS players may prefer the lighter Razer Viper V3 Pro.",
  },
  {
    q: "What is the lightest mouse here?",
    a: "The WLMouse Beast X Pro, at just 39 g in its side-slit magnesium configuration. The Pulsar X2V3 (~55 g) and Razer Viper V3 Pro (54 g) follow, with the Logitech at 60 g.",
  },
  {
    q: "Do I need 8,000 Hz polling?",
    a: "All four now support up to 8K polling, but the benefit is fractions of a millisecond and only perceptible on 360 Hz+ monitors. It also cuts wireless battery life sharply, so most players are fine at 1,000 Hz.",
  },
  {
    q: "Should I buy for sensor specs or shape?",
    a: "Shape. Every sensor here tracks flawlessly beyond human limits, so match the mouse to your hand size and grip style first, then pick the best-built option in your budget.",
  },
];

const scoreRows: { label: string; key: keyof (typeof shootoutMice)[0]["scores"] }[] = [
  { label: "Build", key: "build" },
  { label: "Comfort", key: "comfort" },
  { label: "Performance", key: "performance" },
  { label: "Battery", key: "battery" },
  { label: "Value", key: "value" },
];

export default function MouseShootoutPage() {
  return (
    <article className="mx-auto max-w-wrap px-4 py-10">
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faq)]} />
      <Breadcrumbs items={crumbs} />

      <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
        Best Wireless Gaming Mice 2026
      </h1>
      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
        Superlight 2 · Viper V3 Pro · Pulsar X2V3 · Beast X Pro · Updated June 2026
      </p>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{shootoutMeta.intro}</p>
      <div className="mt-5 max-w-3xl"><Disclosure /></div>

      {/* Quick comparison table */}
      <section className="mt-10">
        <Eyebrow>At a glance</Eyebrow>
        <h2 className="mt-3 font-display text-2xl font-bold text-ink">Quick comparison</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[820px] border-collapse text-sm">
            <thead>
              <tr className="bg-surface text-left">
                <th className="p-3 font-mono text-xs uppercase tracking-wider text-muted">Spec</th>
                {shootoutMice.map((m) => (
                  <th key={m.name} className="p-3 font-display text-ink">{m.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="font-mono text-ink/90">
              {[
                ["Released", (m: (typeof shootoutMice)[number]) => m.releaseYear],
                ["Weight", (m: (typeof shootoutMice)[number]) => m.weight],
                ["Sensor", (m: (typeof shootoutMice)[number]) => m.sensor],
                ["Max DPI", (m: (typeof shootoutMice)[number]) => m.maxDpi],
                ["Polling", (m: (typeof shootoutMice)[number]) => m.polling],
                ["Battery", (m: (typeof shootoutMice)[number]) => m.battery],
                ["Best grip", (m: (typeof shootoutMice)[number]) => m.bestGrip],
                ["Price", (m: (typeof shootoutMice)[number]) => m.priceBand],
                ["Score", (m: (typeof shootoutMice)[number]) => `${m.overall.toFixed(1)} / 10`],
              ].map(([label, fn], i) => (
                <tr key={label as string} className={i % 2 ? "bg-surface/40" : ""}>
                  <th scope="row" className="p-3 text-left text-xs uppercase tracking-wider text-muted">
                    {label as string}
                  </th>
                  {shootoutMice.map((m) => (
                    <td key={m.name} className="p-3">
                      {(fn as (x: typeof m) => string)(m)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Individual cards */}
      <section className="mt-14 space-y-8">
        <Eyebrow>The contenders</Eyebrow>
        {shootoutMice.map((m) => (
          <div key={m.name} className="rounded-xl border border-line bg-surface p-5 sm:p-6">
            <div className="flex flex-col gap-6 lg:flex-row">
              {/* Photo slot — replace m.image with your own photo */}
              <div className="lg:w-72 lg:shrink-0">
                <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg border border-line bg-gradient-to-br from-raised to-bg">
                  {/* When you add a real photo, swap this block for:
                      <img src={m.image} alt={m.name} className="h-full w-full object-cover" /> */}
                  <span className="px-4 text-center font-mono text-[11px] uppercase tracking-widest text-muted">
                    Add your photo<br />of the {m.brand} here
                  </span>
                </div>
                <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-widest text-muted">
                  replace /public{m.image}
                </p>
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-sm bg-amber/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-amber">
                    #{m.rank} · {m.badge}
                  </span>
                  <span className="font-mono text-sm text-amber">{m.overall.toFixed(1)} / 10</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink">{m.name}</h3>
                <p className="font-mono text-xs text-muted">{m.priceBand} · {m.weight} · {m.sensor}</p>

                <div className="mt-4 grid gap-2.5 sm:max-w-md">
                  {scoreRows.map((r) => (
                    <ScoreBar key={r.key} label={r.label} value={m.scores[r.key]} />
                  ))}
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-good">Pros</h4>
                    <ul className="mt-1.5 space-y-1 text-sm text-ink/90">
                      {m.pros.map((p) => (
                        <li key={p} className="flex gap-2"><span className="text-good">+</span>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-bad">Cons</h4>
                    <ul className="mt-1.5 space-y-1 text-sm text-ink/90">
                      {m.cons.map((c) => (
                        <li key={c} className="flex gap-2"><span className="text-bad">−</span>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-4 text-sm text-ink/80">
                  <span className="font-semibold text-ink">Best for: </span>{m.bestFor}
                </p>

                {/* Affiliate buttons */}
                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:gap-3">
                  {m.amazonUrl ? (
                    <a
                      href={m.amazonUrl}
                      rel={affiliateRel}
                      target="_blank"
                      className="inline-flex items-center justify-center rounded bg-amber px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-amber-dim"
                    >
                      Check price on Amazon
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center rounded border border-line px-5 py-2.5 text-sm text-muted">
                      Sold direct — see brand site
                    </span>
                  )}
                  <a
                    href={m.ebayUrl}
                    rel={affiliateRel}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-amber hover:text-amber"
                  >
                    See on eBay
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Final ranking */}
      <section className="mt-14 rounded-xl border border-amber/30 bg-surface p-6">
        <Eyebrow>Final ranking</Eyebrow>
        <ol className="mt-4 space-y-3">
          {shootoutMice.map((m) => (
            <li key={m.name} className="flex items-baseline gap-3">
              <span className="font-display text-xl font-bold text-amber">#{m.rank}</span>
              <div>
                <span className="font-display font-semibold text-ink">{m.name}</span>
                <span className="ml-2 font-mono text-xs uppercase tracking-widest text-muted">{m.badge}</span>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-sm leading-relaxed text-ink/85">
          If you can only buy one and can&apos;t test in person, get the <strong>Superlight 2</strong>.
          Dedicated claw-grip FPS players may prefer the <strong>Viper V3 Pro</strong>. Want the most
          performance per dollar? The <strong>Pulsar X2V3</strong>. Chasing the absolute lightest? The
          <strong> WLMouse Beast X Pro</strong>.
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-14 max-w-3xl">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-3 font-display text-2xl font-bold text-ink">Common questions</h2>
        <div className="mt-5 divide-y divide-line border-y border-line">
          {faq.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none font-semibold text-ink hover:text-amber">{f.q}</summary>
              <p className="mt-2 leading-relaxed text-ink/80">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
