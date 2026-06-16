import Link from "next/link";
import { categories } from "@/lib/data";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-wrap gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-base font-bold text-ink">
            Echoz<span className="text-amber">Lab</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{site.tagline}</p>
          <p className="mt-4 font-mono text-[11px] leading-relaxed text-muted">
            As an Amazon Associate and eBay Partner Network member, we earn from
            qualifying purchases. This never affects scores.
          </p>
        </div>
        <nav aria-label="Categories">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">Categories</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="text-ink/80 hover:text-amber">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Content">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">Read</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/blog" className="text-ink/80 hover:text-amber">Guides &amp; explainers</Link></li>
            <li><Link href="/reviews/logitech-g-pro-x-superlight-2" className="text-ink/80 hover:text-amber">Latest reviews</Link></li>
            <li><Link href="/vs/superlight-2-vs-viper-v3-pro" className="text-ink/80 hover:text-amber">Comparisons</Link></li>
          </ul>
        </nav>
        <nav aria-label="Company">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">Trust</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/affiliate-disclosure" className="text-ink/80 hover:text-amber">Affiliate disclosure</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-line py-4 text-center font-mono text-[11px] text-muted">
        © {new Date().getFullYear()} {site.name}. All scores backed by bench data.
      </div>
    </footer>
  );
}
