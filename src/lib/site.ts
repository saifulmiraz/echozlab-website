export const site = {
  name: "EchozLab",
  tagline: "Gear reviews with receipts.",
  url: "https://echozlab.com",
  description:
    "Hands-on gaming gear reviews backed by bench data. Mice, keyboards, headsets, monitors, chairs, streaming equipment, PC components and console accessories — tested, measured, ranked.",
  twitter: "@echozlab",
  // ── Affiliate IDs — paste your real IDs here when you have them (guide Part 9) ──
  amazonTag: "echozlab20-20", // Amazon Associates tracking ID
  ebayCampaignId: "5339157057", // eBay Partner Network campid
};

/** Build an Amazon affiliate link from an ASIN. */
export function amazonLink(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${site.amazonTag}`;
}

/** Build an eBay Partner Network search link (great for used/refurb). */
export function ebayLink(query: string): string {
  const q = encodeURIComponent(query);
  return `https://www.ebay.com/sch/i.html?_nkw=${q}&campid=${site.ebayCampaignId}&mkcid=1&mkrid=711-53200-19255-0&toolid=10001&mkevt=1`;
}

/** Attributes every outbound merchant link must carry. */
export const affiliateRel = "sponsored nofollow noopener";
