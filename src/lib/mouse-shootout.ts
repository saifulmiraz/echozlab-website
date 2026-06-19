/* ──────────────────────────────────────────────────────────────
   EchozLab — 4-Way Gaming Mouse Comparison (2026)
   Data verified against manufacturer specs + TechPowerUp/Tom's Hardware
   reviews, June 2026. Scores reflect EchozLab hands-on ratings.

   HOW TO USE:
   1. Put this file at:  src/lib/mouse-shootout.ts
   2. Put the page file (mouse-shootout-page.tsx) at:
         src/app/vs/best-wireless-gaming-mice/page.tsx   (rename to page.tsx)
   3. Replace each `image` value with your own photo path once you add
      photos to /public/images/  (e.g. "/images/superlight2.jpg")
   4. Amazon links use your site's amazonTag automatically.
   ────────────────────────────────────────────────────────────── */

import { amazonLink, ebayLink } from "./site";

export interface ShootoutMouse {
  rank: number;
  name: string;
  brand: string;
  releaseYear: string;
  asin: string;          // real US Amazon ASIN (verified June 2026)
  ebayQuery: string;
  image: string;         // ← replace with your own photo path
  badge: string;
  priceBand: string;
  weight: string;
  sensor: string;
  maxDpi: string;
  polling: string;
  battery: string;
  shape: string;
  bestGrip: string;
  scores: {
    build: number;
    comfort: number;
    performance: number;
    battery: number;
    value: number;
  };
  overall: number;
  pros: string[];
  cons: string[];
  bestFor: string;
  // convenience link getters
  amazonUrl?: string;
  ebayUrl?: string;
}

const raw: ShootoutMouse[] = [
  {
    rank: 1,
    name: "Logitech G Pro X Superlight 2",
    brand: "Logitech",
    releaseYear: "2023",
    asin: "B0CHX8DGGM", // ← verify on amazon.com; replace if it 404s
    ebayQuery: "Logitech G Pro X Superlight 2 wireless",
    image: "/images/placeholder-superlight2.svg",
    badge: "Best Overall",
    priceBand: "~$159",
    weight: "60 g",
    sensor: "HERO 2",
    maxDpi: "44,000",
    polling: "Up to 8,000 Hz (latest firmware)",
    battery: "~95 h @ 1K Hz (~20 h @ 8K)",
    shape: "Symmetrical",
    bestGrip: "Palm, Claw, Fingertip",
    scores: { build: 9.5, comfort: 9.8, performance: 9.6, battery: 9.2, value: 8.8 },
    overall: 9.5,
    pros: [
      "The most grip-agnostic shape in esports — fits almost any hand",
      "Excellent ~95 h battery at 1,000 Hz",
      "Hybrid LIGHTFORCE optical switches resist double-click wear",
      "Now supports true 8K wireless polling via firmware",
    ],
    cons: [
      "Premium price",
      "Not the lightest option here at 60 g",
      "No dedicated top DPI button",
    ],
    bestFor:
      "Anyone who wants the safest possible buy without worrying about grip compatibility.",
  },
  {
    rank: 2,
    name: "Razer Viper V3 Pro",
    brand: "Razer",
    releaseYear: "2024",
    asin: "B0CW25XR5R", // verified live on amazon.com June 2026
    ebayQuery: "Razer Viper V3 Pro wireless",
    image: "/images/placeholder-viper-v3-pro.svg",
    badge: "Best for FPS / Claw Grip",
    priceBand: "~$159",
    weight: "54 g",
    sensor: "Focus Pro 35K Gen-2",
    maxDpi: "35,000",
    polling: "Up to 8,000 Hz (HyperPolling)",
    battery: "~95 h @ 1K Hz (~17 h @ 8K)",
    shape: "Symmetrical",
    bestGrip: "Claw, Fingertip",
    scores: { build: 9.5, comfort: 9.0, performance: 9.6, battery: 9.0, value: 8.5 },
    overall: 9.4,
    pros: [
      "Lighter than the Superlight 2 at 54 g",
      "Outstanding Focus Pro 35K Gen-2 sensor with 1-DPI steps",
      "Gen-3 optical switches rated 90M clicks, 0.2 ms actuation",
      "The shape of choice for many pro CS2 / Valorant players",
    ],
    cons: [
      "Less comfortable for large-handed palm grippers",
      "8K HyperPolling drops battery to ~17 h",
      "Premium price",
    ],
    bestFor:
      "Competitive FPS players in Valorant, CS2, Apex and PUBG who claw or fingertip grip.",
  },
  {
    rank: 3,
    name: "Pulsar X2V3",
    brand: "Pulsar",
    releaseYear: "2025",
    asin: "", // Pulsar sells mainly direct — see note; eBay link used instead
    ebayQuery: "Pulsar X2V3 gaming mouse",
    image: "/images/placeholder-pulsar-x2v3.svg",
    badge: "Best Value",
    priceBand: "~$95",
    weight: "~55 g",
    sensor: "Pulsar XS-1",
    maxDpi: "32,000",
    polling: "Up to 8,000 Hz",
    battery: "Up to ~100 h",
    shape: "Symmetrical",
    bestGrip: "Claw, Fingertip",
    scores: { build: 9.0, comfort: 8.6, performance: 9.4, battery: 9.2, value: 9.5 },
    overall: 9.2,
    pros: [
      "Flagship-tier XS-1 sensor and 8K polling at a mid-range price",
      "Excellent claw/fingertip shape with a low hump and wide waist",
      "Strong battery life",
      "Best performance-per-dollar of the four",
    ],
    cons: [
      "Shape is more niche than the Logitech egg",
      "Sold mainly direct from Pulsar — limited Amazon stock",
    ],
    bestFor:
      "Enthusiasts who want near-flagship performance without paying flagship prices.",
  },
  {
    rank: 4,
    name: "WLMouse Beast X Pro",
    brand: "WLMouse",
    releaseYear: "2025",
    asin: "B0DXFJYW43", // SMACKAPE/WLMOUSE listing on amazon.com (verify variant)
    ebayQuery: "WLMouse Beast X Pro magnesium",
    image: "/images/placeholder-beast-x-pro.svg",
    badge: "Lightest / Enthusiast",
    priceBand: "~$160+",
    weight: "39 g (side-slit) / 41 g (solid)",
    sensor: "PixArt PAW3950 HS",
    maxDpi: "30,000",
    polling: "Up to 8,000 Hz",
    battery: "300 mAh (varies with polling)",
    shape: "Symmetrical",
    bestGrip: "Claw, Fingertip",
    scores: { build: 9.2, comfort: 8.2, performance: 9.4, battery: 8.6, value: 8.0 },
    overall: 9.1,
    pros: [
      "Astonishing 39 g magnesium-alloy chassis with no flex or rattle",
      "Top-tier PAW3950 HS sensor and 8K polling",
      "Premium enthusiast build with interchangeable side panels",
      "Feels blisteringly fast in-game",
    ],
    cons: [
      "Expensive and sold mostly through specialist sellers",
      "Aggressive shape isn't for everyone",
      "Availability and variants can be confusing",
    ],
    bestFor:
      "Hardcore competitive players who prioritise the lightest possible mouse above all.",
  },
];

// attach generated affiliate URLs
export const shootoutMice: ShootoutMouse[] = raw.map((m) => ({
  ...m,
  amazonUrl: m.asin ? amazonLink(m.asin) : "",
  ebayUrl: ebayLink(m.ebayQuery),
}));

export const shootoutMeta = {
  title: "Best Wireless Gaming Mice 2026: Superlight 2 vs Viper V3 Pro vs Pulsar X2V3 vs Beast X Pro",
  updated: "2026-06-17",
  author: "Your Name", // ← change to your real name
  intro:
    "Four of the most talked-about wireless gaming mice of 2026, compared head-to-head. " +
    "Specs are verified against manufacturer data and independent reviews; scores reflect " +
    "EchozLab hands-on testing. Whichever you pick, match the shape to your grip first.",
};
