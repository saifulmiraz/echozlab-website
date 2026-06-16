export interface Category {
  slug: string;
  name: string;
  blurb: string;
  buyingGuide: { heading: string; body: string }[];
  faq: { q: string; a: string }[];
}

export interface Scores {
  performance: number;
  build: number;
  features: number;
  value: number;
}

export interface Product {
  slug: string; // review URL slug
  category: string; // category slug
  name: string;
  brand: string;
  asin: string;
  ebayQuery: string;
  priceBand: string; // "$159" — display only; CTAs say "check price"
  badge?: string; // "Best overall", "Budget pick"…
  oneLiner: string;
  overall: number; // 0–10, one decimal
  scores: Scores;
  pros: string[];
  cons: string[];
  specs: [string, string][];
  verdict: string;
  sections: { heading: string; body: string }[];
  testedWeeks: number;
  updated: string; // ISO date
  author: string;
}

export interface Comparison {
  slug: string;
  a: string; // product slug
  b: string; // product slug
  title: string;
  tldrA: string; // "Buy A if…"
  tldrB: string;
  rounds: { heading: string; body: string; winner: "a" | "b" | "tie" }[];
  verdict: string;
  updated: string;
  author: string;
}

export interface Post {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  answerFirst: string; // direct answer for the first 100 words
  body: { heading: string; body: string }[];
  takeaways: string[];
  relatedProductSlug?: string;
  updated: string;
  author: string;
  readMins: number;
}

export interface Author {
  name: string;
  role: string;
  bio: string;
}
