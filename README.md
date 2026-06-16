# EchozLab — Gaming Affiliate Site

Production-ready Next.js 14 (App Router) + TypeScript + Tailwind CSS affiliate site.
Dark "test bench" aesthetic, fully static (SSG), SEO-optimized, Amazon Associates +
eBay Partner Network ready.

## Quick start

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build (all pages statically generated)
```

## 1. Configure your affiliate IDs (required)

Edit `src/lib/site.ts`:

```ts
amazonTag: "yourtag-20",            // Amazon Associates tracking ID
ebayCampaignId: "5338xxxxxx",       // eBay Partner Network campaign ID
url: "https://yourdomain.com",      // your real domain
name: "Your Brand",
```

Every affiliate link in the site is generated from this one file via
`amazonLink(asin)` and `ebayLink(query)`. All outbound merchant links carry
`rel="sponsored nofollow noopener"` automatically.

## 2. Add content

All content lives in `src/lib/data.ts` (categories, products/reviews,
comparisons, blog posts). Add an object to an array → the page exists, is
statically generated, lands in the sitemap, and gets JSON-LD schema. Types are
in `src/lib/data-types.ts`.

When you outgrow a single data file, swap the arrays for MDX or a headless CMS
(Sanity/Contentlayer) — only `data.ts` needs to change.

**Replace image placeholders:** `src/components/ImageSlot.tsx` renders labeled
placeholders. Swap them for `next/image` with your own hands-on photos —
original photography is a core EEAT signal, don't launch with stock images.

## 3. File structure

```
src/
  lib/
    site.ts          ← brand + affiliate config (edit first)
    data.ts          ← all content
    data-types.ts    ← content types
    schema.tsx       ← JSON-LD builders (Product, Review, FAQ, Breadcrumb…)
  components/        ← Header, Footer, ProductCard, VerdictBox, ScoreBar,
                       AffiliateButtons, SpecTable, ProsCons, Disclosure…
  app/
    page.tsx               ← homepage
    [category]/page.tsx    ← 8 category hubs (quick picks, reviews, guide, FAQ)
    reviews/[slug]/        ← review template (verdict box, bench data, specs)
    vs/[slug]/             ← comparison template (TLDR, face-off, rounds)
    blog/ + blog/[slug]/   ← guides (answer-first, takeaways, inline product)
    affiliate-disclosure/  ← FTC-compliant disclosure page
    sitemap.ts robots.ts   ← auto-generated
```

## 4. Deploy to Vercel (recommended)

1. Push this folder to a GitHub repo.
2. vercel.com → New Project → import the repo. Framework auto-detects Next.js.
3. Deploy. Add your custom domain under Settings → Domains.
4. Submit `https://yourdomain.com/sitemap.xml` in Google Search Console.

Alternative hosts: Netlify (auto-detects Next.js) or any Node server
(`npm run build && npm start`).

## 5. Production checklist

- [ ] Swap the Google Fonts `<link>` in `src/app/layout.tsx` for `next/font/google`
      (zero layout shift; the link-tag version is used so the project builds offline)
- [ ] Replace ImageSlot placeholders with real `next/image` photos
- [ ] Add GA4 via `next/script` with `strategy="afterInteractive"`
- [ ] Write About / Methodology / Editorial Policy pages (copy the
      `affiliate-disclosure` page as a starting template)
- [ ] Verify Amazon ASINs in `data.ts` are current (sample ASINs included; a
      few placeholders marked `B0DEXAMPLE…` must be replaced)
- [ ] Amazon requires the disclosure statement on monetized pages — the
      `<Disclosure />` component handles this; keep it above the first link

## Notes on compliance

- Amazon ToS: don't display cached prices — buttons say "Check price" by design.
- FTC: disclosure appears above the first affiliate link on every monetized
  page and in the footer sitewide.
- Apply to Amazon Associates only once you have real content and some traffic;
  you need 3 qualifying sales within 180 days to keep the account.
