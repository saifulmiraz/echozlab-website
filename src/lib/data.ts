import type { Author, Category, Comparison, Post, Product } from "./data-types";

/* ──────────────────────────────────────────────────────────────
   EchozLab content data — AMAZON-ONLY EDITION
   Every product below is sold on US Amazon with a real ASIN
   (verified June 2026). Specs come from manufacturer pages and
   independent reviews (TechPowerUp, Tom's Hardware, RTINGS, PC Gamer).

   Scores are EchozLab editorial ratings — presented as opinion,
   NOT fabricated lab measurements. Adjust any number to match your
   own hands-on experience, and put your real name in `authors`.

   PHOTOS: each product's review uses the ImageSlot placeholder until
   you add your own photos to /public/images/ and swap them in.
   ────────────────────────────────────────────────────────────── */

export const authors: Author[] = [
  {
    name: "EchozLab Team",            // ← change to your real name
    role: "Reviews",
    bio: "We buy and use gaming gear, then write up honest, plain-English verdicts for US gamers — no fluff, no paid scores.",
  },
];

export const categories: Category[] = [
  {
    slug: "gaming-mice",
    name: "Gaming Mice",
    blurb:
      "Wireless flagships, budget champs and everything between — picked for shape, weight and real-world feel, not just spec sheets. Match the mouse to your grip first.",
    buyingGuide: [
      {
        heading: "Shape matters more than sensor specs",
        body: "Every modern sensor tracks flawlessly past human limits, so DPI numbers above ~3,000 are mostly marketing. The decision that actually affects your aim is shape and weight — match the mouse to your hand size and grip style (palm, claw or fingertip), then pick the best-built option in your budget.",
      },
      {
        heading: "Wireless has caught up to wired",
        body: "Flagship 2.4 GHz connections (Logitech LIGHTSPEED, Razer HyperSpeed) are now effectively as fast as a cable. Pay for a comfortable shape and good battery life rather than worrying about wireless latency. Bluetooth, however, is still too slow for competitive play — use the dongle.",
      },
      {
        heading: "Does 8,000 Hz polling matter?",
        body: "Most flagships now offer up to 8K polling, but the benefit is fractions of a millisecond and only perceptible on 360 Hz+ monitors — and it sharply cuts battery life. For the vast majority of players, 1,000 Hz remains the right setting.",
      },
    ],
    faq: [
      {
        q: "What weight should a gaming mouse be?",
        a: "For competitive FPS, most players prefer 50–65 g. Ultralight mice (under 50 g) suit fast, wrist-driven aim, while heavier mice (70 g+) can feel more controlled for slower-sensitivity and MMO play.",
      },
      {
        q: "Wired or wireless gaming mouse?",
        a: "Flagship wireless is now as fast as wired for nearly everyone, so choose wireless for freedom of movement if your budget allows. Wired mice remain a great value pick and never need charging.",
      },
      {
        q: "How many DPI do I actually need?",
        a: "Most players game between 400 and 1,600 DPI. Headline figures like 30,000+ DPI are marketing — what matters is that the sensor tracks accurately at the setting you actually use.",
      },
    ],
  },
  {
    slug: "gaming-keyboards",
    name: "Gaming Keyboards",
    blurb:
      "Hall-effect, optical and classic mechanical boards — chosen for switch feel, build quality and the features that actually help in-game, like rapid trigger.",
    buyingGuide: [
      {
        heading: "Hall-effect & rapid trigger changed the game",
        body: "Magnetic (Hall-effect) switches let a key reset the instant you start lifting your finger, which makes movement in shooters measurably crisper. If you play Valorant, CS2 or Apex seriously, a rapid-trigger board is the single biggest keyboard upgrade available right now.",
      },
      {
        heading: "Pick your size",
        body: "Full-size boards include a numpad; TKL (tenkeyless) drops it for more mouse room; 60–65% boards go even smaller, freeing maximum desk space for low-sensitivity players. TKL is the best all-round choice for most gamers.",
      },
    ],
    faq: [
      {
        q: "Are Hall-effect keyboards worth it?",
        a: "For competitive movement shooters, yes — adjustable actuation and rapid trigger give a real, repeatable advantage. For typing and casual play, a good mechanical board is still excellent and usually cheaper.",
      },
      {
        q: "Which switch type is best for gaming?",
        a: "Linear switches (smooth, no bump) are the competitive favourite. Tactile switches suit players who also type a lot, and clicky switches are loud — great feel, but consider anyone nearby.",
      },
    ],
  },
  {
    slug: "gaming-headsets",
    name: "Gaming Headsets",
    blurb:
      "Wired and wireless headsets judged on sound clarity for footsteps, mic quality your teammates will appreciate, and comfort across long sessions.",
    buyingGuide: [
      {
        heading: "Clear mids beat booming bass",
        body: "Headsets with huge bass can bury the directional cues that win competitive rounds. For FPS, look for a more neutral tuning so footsteps and reloads stay easy to place. For single-player immersion, a warmer, bassier sound is more fun.",
      },
      {
        heading: "Wired vs wireless",
        body: "Wired headsets give you the best sound-per-dollar and never need charging. Wireless adds convenience and, on good models, no meaningful latency penalty — but you pay more for the same audio quality.",
      },
    ],
    faq: [
      {
        q: "Do I need surround sound for gaming?",
        a: "Usually not. Good stereo imaging plus a game's own audio engine often places enemies more accurately than virtual surround processing, which can smear directional cues.",
      },
      {
        q: "Wired or wireless gaming headset?",
        a: "Wired offers the best value and zero charging. Wireless is worth it for comfort and freedom if your budget stretches — modern 2.4 GHz models have negligible latency.",
      },
    ],
  },
  {
    slug: "gaming-monitors",
    name: "Gaming Monitors",
    blurb:
      "Fast IPS and OLED panels chosen for motion clarity, low input lag and real-world value — from 1080p high-refresh esports screens to 1440p OLED endgame displays.",
    buyingGuide: [
      {
        heading: "1440p high-refresh is the sweet spot",
        body: "Modern GPUs comfortably drive 1440p past 144–240 fps in most titles, and the jump in sharpness over 1080p is immediately visible. For pure competitive FPS on a budget, a 1080p 240 Hz panel still delivers the highest frame rates per dollar.",
      },
      {
        heading: "Refresh rate vs resolution",
        body: "Competitive players should prioritise refresh rate (Hz) for smoother motion and lower latency. Players who value visual fidelity in single-player games should lean toward higher resolution and, ideally, an OLED panel for contrast.",
      },
    ],
    faq: [
      {
        q: "Is OLED burn-in a problem for gaming?",
        a: "With mixed use and modern panel protections (pixel-shift, compensation cycles), burn-in is no longer a practical concern for most gamers within the warranty period. The real risk case is the same static UI displayed many hours a day, every day.",
      },
      {
        q: "How many Hz do I need?",
        a: "144 Hz is a huge upgrade over 60 Hz and plenty for most players. Competitive FPS players benefit from 240 Hz; beyond that, gains are smaller and need a powerful GPU to reach.",
      },
    ],
  },
  {
    slug: "gaming-chairs",
    name: "Gaming Chairs",
    blurb:
      "Chairs and ergonomic seating judged on long-session comfort, build quality and adjustability — because the right chair matters more after hour four than hour one.",
    buyingGuide: [
      {
        heading: "Adjustability beats aesthetics",
        body: "Lumbar support, armrest adjustment and seat firmness affect comfort far more than racing stripes. Look for adjustable lumbar and 3D/4D armrests; if your budget reaches ergonomic mesh office chairs, compare them seriously against gaming chairs.",
      },
    ],
    faq: [
      {
        q: "Gaming chair or office chair?",
        a: "At the same price, ergonomic office chairs often win on pure long-session comfort, while gaming chairs win on recline range, looks and value in the $200–400 range. Pick based on whether you prioritise posture or recline/aesthetics.",
      },
    ],
  },
  {
    slug: "streaming",
    name: "Streaming Equipment",
    blurb:
      "Microphones, webcams and control surfaces for building a clean stream setup — with audio prioritised, because viewers forgive video far sooner than bad sound.",
    buyingGuide: [
      {
        heading: "Upgrade audio before video",
        body: "Viewers tolerate modest video quality but click away from bad audio fast. A good USB microphone improves your stream more than any webcam upgrade at the same price — start there.",
      },
    ],
    faq: [
      {
        q: "USB or XLR microphone for streaming?",
        a: "Start with a quality USB mic — they're excellent now and need no extra hardware. Move to XLR only when you want an audio interface, hardware processing or multiple mics.",
      },
    ],
  },
  {
    slug: "pc-components",
    name: "PC Components",
    blurb:
      "SSDs, RAM and core parts picked for real gaming value — focused on the upgrades that genuinely improve load times, responsiveness and frame consistency.",
    buyingGuide: [
      {
        heading: "An SSD is the upgrade you feel most",
        body: "If you're still on a hard drive or a slow SATA SSD, a fast NVMe drive transforms boot, load and install times. It's one of the most noticeable upgrades you can make, and current Gen4 drives are inexpensive.",
      },
    ],
    faq: [
      {
        q: "Do faster SSDs improve gaming?",
        a: "They dramatically cut load times versus hard drives. Between top Gen4 and Gen5 NVMe drives, in-game differences are small — so prioritise proven reliability and thermals over headline sequential speeds.",
      },
    ],
  },
  {
    slug: "console-accessories",
    name: "Console Accessories",
    blurb:
      "Controllers, storage and add-ons that genuinely improve PS5, Xbox and Switch play — tested for value and real benefit, not novelty.",
    buyingGuide: [
      {
        heading: "Storage and controllers give the biggest payoff",
        body: "A console SSD upgrade or a pro controller with back buttons delivers far more day-to-day benefit than most other accessories. Spend there first before cosmetic add-ons.",
      },
    ],
    faq: [
      {
        q: "Are pro controllers worth the money?",
        a: "For competitive shooters and fighters, back buttons and trigger stops are a genuine advantage. For casual play, a quality standard or third-party controller with hall-effect sticks is the smarter buy.",
      },
    ],
  },
];

export const products: Product[] = [
  // ── GAMING MICE ──────────────────────────────────────────────
  {
    slug: "razer-viper-v3-pro",
    category: "gaming-mice",
    name: "Razer Viper V3 Pro",
    brand: "Razer",
    asin: "B0CW25XR5R",
    ebayQuery: "Razer Viper V3 Pro wireless",
    priceBand: "~$159",
    badge: "Best for FPS",
    oneLiner: "A 54 g symmetrical flagship that's become the default competitive FPS mouse.",
    overall: 9.4,
    scores: { performance: 9.6, build: 9.5, features: 9.0, value: 8.5 },
    pros: [
      "Ultralight 54 g with excellent rigidity",
      "Focus Pro 35K Gen-2 sensor with 1-DPI step adjustment",
      "Gen-3 optical switches rated for 90M clicks",
      "Up to 8K HyperPolling for high-refresh setups",
    ],
    cons: [
      "Premium price",
      "8K polling cuts battery to ~17 hours",
      "Symmetrical shape suits claw/fingertip more than large-handed palm grip",
    ],
    specs: [
      ["Weight", "54 g"],
      ["Sensor", "Focus Pro 35K Gen-2"],
      ["Max DPI", "35,000"],
      ["Polling", "Up to 8,000 Hz (HyperPolling)"],
      ["Battery", "~95 h @ 1K / ~17 h @ 8K"],
      ["Connection", "HyperSpeed 2.4 GHz, USB-C wired"],
    ],
    verdict:
      "The Viper V3 Pro pairs an ultralight 54 g body with a top-tier sensor and the switches and polling that competitive players want. If you claw or fingertip grip and play FPS seriously, it's about as safe a high-end pick as exists.",
    sections: [
      {
        heading: "Design & build",
        body: "A clean ambidextrous shape with a slightly taller hump than the previous Viper, in a rigid 54 g shell with no flex or rattle. The matte coating grips well without feeling tacky and resists fingerprints.",
      },
      {
        heading: "Performance",
        body: "The Focus Pro 35K Gen-2 sensor tracks flawlessly, and the Gen-3 optical switches feel crisp with no double-click worries. With the HyperPolling dongle you get true 8K polling, though the practical benefit only shows on very high-refresh monitors.",
      },
      {
        heading: "Who should buy it",
        body: "Competitive FPS players who claw or fingertip grip and want a proven, ultralight wireless flagship. Large-handed palm grippers may prefer a fuller shape.",
      },
    ],
    testedWeeks: 0,
    updated: "2026-06-17",
    author: "EchozLab Team",
  },
  {
    slug: "logitech-g502-x-plus",
    category: "gaming-mice",
    name: "Logitech G502 X Plus",
    brand: "Logitech",
    asin: "B0B7BP6Y67",
    ebayQuery: "Logitech G502 X Plus wireless",
    priceBand: "~$129",
    badge: "Best for MMO / all-purpose",
    oneLiner: "The button-loaded all-rounder for players who want macros and a dual-mode wheel.",
    overall: 8.8,
    scores: { performance: 9.0, build: 9.0, features: 9.4, value: 8.3 },
    pros: [
      "13 programmable buttons — great for MMO/MOBA and productivity",
      "Dual-mode hyper-fast scroll wheel",
      "LIGHTFORCE hybrid switches and HERO 25K sensor",
      "RGB lightstrip looks excellent",
    ],
    cons: [
      "Heavier than esports mice",
      "Busy shape isn't ideal for pure twitch FPS",
      "Premium price",
    ],
    specs: [
      ["Weight", "~106 g"],
      ["Sensor", "HERO 25K"],
      ["Max DPI", "25,600"],
      ["Polling", "1,000 Hz"],
      ["Buttons", "13 programmable"],
      ["Connection", "LIGHTSPEED 2.4 GHz, USB-C wired"],
    ],
    verdict:
      "If you want one mouse that does everything — MMOs, MOBAs, productivity and casual FPS — the G502 X Plus is the versatile pick. Its extra buttons and dual-mode wheel make it a genuine workhorse, at the cost of esports-level lightness.",
    sections: [
      {
        heading: "Design & build",
        body: "A refined take on the iconic G502 shape with a solid build, satisfying dual-mode scroll wheel and one of the nicer RGB implementations on any mouse.",
      },
      {
        heading: "Who should buy it",
        body: "Players who value extra buttons and versatility over minimum weight. If your games involve lots of abilities or you also use the mouse for work, this is the one.",
      },
    ],
    testedWeeks: 0,
    updated: "2026-06-17",
    author: "EchozLab Team",
  },
  {
    slug: "logitech-g305-lightspeed",
    category: "gaming-mice",
    name: "Logitech G305 Lightspeed",
    brand: "Logitech",
    asin: "B07CMS5Q5N",
    ebayQuery: "Logitech G305 Lightspeed",
    priceBand: "~$45",
    badge: "Best budget wireless",
    oneLiner: "Years on, still the value benchmark for reliable wireless gaming on a budget.",
    overall: 8.6,
    scores: { performance: 8.6, build: 8.4, features: 8.0, value: 9.6 },
    pros: [
      "Genuine LIGHTSPEED wireless at a budget price",
      "Long battery life on a single AA",
      "Reliable HERO sensor",
      "Compact shape suits small-to-medium hands",
    ],
    cons: [
      "AA battery adds weight",
      "No RGB",
      "Basic feet",
    ],
    specs: [
      ["Weight", "~99 g (with battery)"],
      ["Sensor", "HERO"],
      ["Max DPI", "12,000"],
      ["Polling", "1,000 Hz"],
      ["Battery", "Up to 250 h (1x AA)"],
      ["Connection", "LIGHTSPEED 2.4 GHz"],
    ],
    verdict:
      "The G305 remains the easiest budget recommendation in gaming: real LIGHTSPEED wireless and a dependable sensor for a fraction of flagship prices. If you want wireless without spending big, start here.",
    sections: [
      {
        heading: "Why it still wins on value",
        body: "Few mice near this price offer true low-latency wireless. The single-AA design means huge battery life and easy swaps, at the cost of a little extra weight.",
      },
    ],
    testedWeeks: 0,
    updated: "2026-06-17",
    author: "EchozLab Team",
  },

  // ── GAMING KEYBOARDS ─────────────────────────────────────────
  {
    slug: "steelseries-apex-pro-tkl",
    category: "gaming-keyboards",
    name: "SteelSeries Apex Pro TKL (Gen 3)",
    brand: "SteelSeries",
    asin: "B07TBGQ6P7",
    ebayQuery: "SteelSeries Apex Pro TKL Gen 3",
    priceBand: "~$199",
    badge: "Best Hall-effect",
    oneLiner: "Adjustable magnetic switches, rapid trigger and a polished feature set in a premium TKL.",
    overall: 9.2,
    scores: { performance: 9.6, build: 9.3, features: 9.5, value: 8.3 },
    pros: [
      "OmniPoint HyperMagnetic switches with per-key adjustable actuation",
      "Rapid trigger and Rapid Tap/SOCD for competitive movement",
      "OLED info screen and premium aluminium top plate",
      "PBT keycaps and USB-C",
    ],
    cons: [
      "Expensive",
      "Software has a learning curve",
    ],
    specs: [
      ["Layout", "TKL (tenkeyless)"],
      ["Switches", "OmniPoint 3.0 HyperMagnetic"],
      ["Actuation", "Adjustable per key"],
      ["Keycaps", "PBT"],
      ["Extras", "OLED screen, RGB, USB-C"],
    ],
    verdict:
      "The Apex Pro TKL packs the rapid-trigger magnetic-switch tech competitive players want into a genuinely premium, well-built board. It's expensive, but it's one of the most complete Hall-effect keyboards you can buy on Amazon.",
    sections: [
      {
        heading: "Why Hall-effect matters here",
        body: "Per-key adjustable actuation plus rapid trigger means faster, more repeatable inputs for movement-heavy shooters — and the build, keycaps and OLED screen make it feel worth the premium.",
      },
    ],
    testedWeeks: 0,
    updated: "2026-06-17",
    author: "EchozLab Team",
  },
  {
    slug: "razer-huntsman-v3-pro-tkl",
    category: "gaming-keyboards",
    name: "Razer Huntsman V3 Pro TKL",
    brand: "Razer",
    asin: "B0CN8GP2K6",
    ebayQuery: "Razer Huntsman V3 Pro TKL",
    priceBand: "~$199",
    badge: "Best for analog optical",
    oneLiner: "Analog optical switches with rapid trigger and Snap Tap — a top competitive alternative.",
    overall: 9.1,
    scores: { performance: 9.5, build: 9.2, features: 9.3, value: 8.3 },
    pros: [
      "Analog optical switches with adjustable actuation",
      "Rapid trigger and Snap Tap support",
      "Doubleshot PBT keycaps, media dial and wrist rest",
      "Excellent build quality",
    ],
    cons: [
      "Premium price",
      "Optical analog feel differs from magnetic — try if you can",
    ],
    specs: [
      ["Layout", "TKL (tenkeyless)"],
      ["Switches", "Razer Analog Optical Gen-2"],
      ["Actuation", "Adjustable"],
      ["Keycaps", "Doubleshot PBT"],
      ["Extras", "Media dial, wrist rest, RGB"],
    ],
    verdict:
      "Razer's answer to the adjustable-actuation crowd, the Huntsman V3 Pro TKL brings analog optical switches, rapid trigger and Snap Tap in a beautifully built package. A strong rival to the Apex Pro TKL — choose based on switch feel preference.",
    sections: [
      {
        heading: "Optical vs magnetic",
        body: "Both deliver adjustable actuation and rapid trigger; the difference is switch feel. If you can, try both — many players prefer one distinctly over the other.",
      },
    ],
    testedWeeks: 0,
    updated: "2026-06-17",
    author: "EchozLab Team",
  },

  // ── GAMING HEADSETS ──────────────────────────────────────────
  {
    slug: "hyperx-cloud-iii-wired",
    category: "gaming-headsets",
    name: "HyperX Cloud III (Wired)",
    brand: "HyperX",
    asin: "B0C3BV19Q3",
    ebayQuery: "HyperX Cloud III wired headset",
    priceBand: "~$99",
    badge: "Best value wired",
    oneLiner: "The comfort-and-value benchmark, refined again with angled 53 mm drivers.",
    overall: 8.9,
    scores: { performance: 8.7, build: 9.0, features: 8.5, value: 9.4 },
    pros: [
      "Legendary HyperX comfort with memory-foam cushions",
      "Angled 53 mm drivers with clear, balanced sound",
      "Sturdy aluminium frame",
      "Clear detachable 10 mm mic",
    ],
    cons: [
      "Wired only (a wireless version exists separately)",
      "No standout extra features",
    ],
    specs: [
      ["Drivers", "53 mm angled"],
      ["Connection", "USB-C / USB-A / 3.5 mm"],
      ["Mic", "Detachable 10 mm noise-cancelling"],
      ["Frame", "Aluminium"],
      ["Audio", "DTS Headphone:X Spatial"],
    ],
    verdict:
      "The Cloud III nails the fundamentals — comfort, clear sound and a good mic — at a price that's hard to argue with. For most players, it's the safest wired headset recommendation on Amazon.",
    sections: [
      {
        heading: "Comfort & sound",
        body: "HyperX's memory foam and aluminium frame remain a comfort benchmark, and the retuned 53 mm drivers deliver clear, balanced audio that keeps directional cues easy to place.",
      },
    ],
    testedWeeks: 0,
    updated: "2026-06-17",
    author: "EchozLab Team",
  },
  {
    slug: "steelseries-arctis-nova-7",
    category: "gaming-headsets",
    name: "SteelSeries Arctis Nova 7 (Wireless)",
    brand: "SteelSeries",
    asin: "B0B57FYJHL",
    ebayQuery: "SteelSeries Arctis Nova 7 wireless",
    priceBand: "~$179",
    badge: "Best wireless",
    oneLiner: "Dual 2.4 GHz + Bluetooth, a strong mic and tuning that keeps footsteps audible.",
    overall: 8.7,
    scores: { performance: 8.6, build: 8.5, features: 9.2, value: 8.4 },
    pros: [
      "Simultaneous 2.4 GHz game audio + Bluetooth (e.g. Discord on phone)",
      "Balanced tuning that preserves directional cues",
      "Comfortable, long battery life",
      "Good retractable mic",
    ],
    cons: [
      "Ski-band fit isn't for everyone",
      "No active noise cancelling at this price",
    ],
    specs: [
      ["Drivers", "40 mm"],
      ["Connection", "2.4 GHz + Bluetooth (simultaneous)"],
      ["Battery", "~38 h"],
      ["Mic", "Retractable ClearCast Gen 2"],
      ["Weight", "~325 g"],
    ],
    verdict:
      "The Nova 7 covers what competitive players actually need: clear directional sound, a mic teammates don't complain about and dual-wireless convenience. A well-rounded wireless pick.",
    sections: [
      {
        heading: "Dual wireless is the killer feature",
        body: "Running game audio over 2.4 GHz while taking Discord or a phone call over Bluetooth at the same time is genuinely useful, and the balanced tuning keeps footsteps clear.",
      },
    ],
    testedWeeks: 0,
    updated: "2026-06-17",
    author: "EchozLab Team",
  },

  // ── GAMING MONITORS ──────────────────────────────────────────
  {
    slug: "lg-ultragear-27gs93qe",
    category: "gaming-monitors",
    name: "LG UltraGear 27GS93QE",
    brand: "LG",
    asin: "B0DF786923",
    ebayQuery: "LG UltraGear 27GS93QE OLED 240Hz",
    priceBand: "~$520",
    badge: "Best OLED value",
    oneLiner: "27-inch 1440p 240 Hz OLED with near-instant response — superb motion clarity.",
    overall: 9.1,
    scores: { performance: 9.6, build: 8.9, features: 8.9, value: 8.6 },
    pros: [
      "1440p 240 Hz OLED with ~0.03 ms response",
      "Excellent contrast and color out of the box",
      "G-Sync Compatible and FreeSync Premium Pro",
      "HDMI 2.1 and DisplayPort",
    ],
    cons: [
      "OLED text fringing on desktop (subpixel layout)",
      "Premium price vs LCD",
      "HDR brightness is highlight-limited",
    ],
    specs: [
      ["Panel", "27\" OLED, 2560×1440"],
      ["Refresh", "240 Hz"],
      ["Response", "~0.03 ms GtG"],
      ["HDR", "DisplayHDR True Black 400"],
      ["Sync", "G-Sync Compatible / FreeSync Premium Pro"],
    ],
    verdict:
      "This UltraGear hits the current sweet spot: 1440p, 240 Hz and OLED motion clarity at a price that's finally reasonable. If your GPU can drive it, the difference over an LCD is obvious from the first session.",
    sections: [
      {
        heading: "Motion & image",
        body: "OLED's near-instant pixel response means essentially no ghosting at any refresh rate, and the contrast makes games look fantastic. The usual OLED caveats (desktop text fringing) apply but rarely matter in games.",
      },
    ],
    testedWeeks: 0,
    updated: "2026-06-17",
    author: "EchozLab Team",
  },

  // ── GAMING CHAIRS ────────────────────────────────────────────
  {
    slug: "razer-iskur-v2",
    category: "gaming-chairs",
    name: "Razer Iskur V2",
    brand: "Razer",
    asin: "B0CXXNK4QP",
    ebayQuery: "Razer Iskur V2 gaming chair",
    priceBand: "~$649",
    badge: "Best lumbar support",
    oneLiner: "An adaptive built-in lumbar system that genuinely supports your back over long sessions.",
    overall: 8.7,
    scores: { performance: 8.6, build: 9.0, features: 8.8, value: 8.2 },
    pros: [
      "Adjustable adaptive lumbar arch — better than most pillow systems",
      "Solid build and dense foam",
      "Wide, supportive seat",
      "6D armrests",
    ],
    cons: [
      "Expensive",
      "Firm seat divides opinion",
      "Heavy to assemble",
    ],
    specs: [
      ["Lumbar", "Adjustable adaptive arch"],
      ["Armrests", "6D"],
      ["Upholstery", "Synthetic leather"],
      ["Recline", "Up to ~152°"],
      ["Capacity", "Check listing for your size"],
    ],
    verdict:
      "The Iskur V2's adaptive lumbar system is the standout — it actually supports the curve of your lower back rather than relying on a loose pillow. If long-session back support is your priority, it's a strong pick.",
    sections: [
      {
        heading: "The lumbar is the point",
        body: "Most gaming chairs treat lumbar support as an afterthought. The Iskur V2's built-in adjustable arch is the reason to buy it — combined with dense foam and 6D armrests, it holds up over long sessions.",
      },
    ],
    testedWeeks: 0,
    updated: "2026-06-17",
    author: "EchozLab Team",
  },

  // ── STREAMING ────────────────────────────────────────────────
  {
    slug: "elgato-stream-deck-mk2",
    category: "streaming",
    name: "Elgato Stream Deck MK.2",
    brand: "Elgato",
    asin: "B09738CV2G",
    ebayQuery: "Elgato Stream Deck MK.2",
    priceBand: "~$149",
    badge: "Streaming essential",
    oneLiner: "Fifteen customizable LCD keys that become the control surface for your whole setup.",
    overall: 8.9,
    scores: { performance: 8.8, build: 8.9, features: 9.4, value: 8.4 },
    pros: [
      "Huge plugin ecosystem (OBS, Twitch, audio, smart home)",
      "Folders and profiles turn 15 keys into hundreds of actions",
      "Mature, reliable software",
      "Genuinely useful even on non-stream days",
    ],
    cons: [
      "Per-key cost adds up vs a macro pad",
      "Wants a dedicated USB port",
    ],
    specs: [
      ["Keys", "15 customizable LCD"],
      ["Connection", "USB-C"],
      ["Software", "Windows / macOS"],
      ["Mount", "Detachable stand"],
    ],
    verdict:
      "The Stream Deck is the rare gadget that earns desk space immediately. If you run OBS or juggle apps while streaming, it's the first quality-of-life upgrade to make.",
    sections: [
      {
        heading: "Why it sticks",
        body: "Scene switches, mic mute, clip markers, lighting — after a week it's muscle memory, and the plugin store keeps it useful well beyond streaming.",
      },
    ],
    testedWeeks: 0,
    updated: "2026-06-17",
    author: "EchozLab Team",
  },
  {
    slug: "elgato-wave-3",
    category: "streaming",
    name: "Elgato Wave:3",
    brand: "Elgato",
    asin: "B088HHWC47",
    ebayQuery: "Elgato Wave 3 USB microphone",
    priceBand: "~$149",
    badge: "Best USB mic for streamers",
    oneLiner: "A clean-sounding USB condenser with smart software mixing built in.",
    overall: 8.6,
    scores: { performance: 8.7, build: 8.6, features: 8.8, value: 8.4 },
    pros: [
      "Crisp, clear condenser sound",
      "Wave Link software mixing is genuinely useful",
      "Built-in clipguard prevents distortion",
      "Solid build and capacitive mute",
    ],
    cons: [
      "Condenser picks up room noise — treat your space",
      "Needs a boom arm for best results",
    ],
    specs: [
      ["Type", "USB condenser"],
      ["Pattern", "Cardioid"],
      ["Sample rate", "Up to 24-bit / 96 kHz"],
      ["Software", "Wave Link mixing"],
    ],
    verdict:
      "The Wave:3 sounds great and its Wave Link software makes balancing game, chat and mic audio easy — a strong streaming USB mic if your room is reasonably quiet.",
    sections: [
      {
        heading: "Sound & software",
        body: "Clean cardioid pickup plus Wave Link's software mixer is a powerful combo for streamers who want control without an external mixer.",
      },
    ],
    testedWeeks: 0,
    updated: "2026-06-17",
    author: "EchozLab Team",
  },

  // ── PC COMPONENTS ────────────────────────────────────────────
  {
    slug: "samsung-990-pro-2tb",
    category: "pc-components",
    name: "Samsung 990 Pro 2TB NVMe SSD",
    brand: "Samsung",
    asin: "B0BHJJ9Y77",
    ebayQuery: "Samsung 990 Pro 2TB NVMe",
    priceBand: "~$169",
    badge: "Best gaming SSD",
    oneLiner: "A fast, reliable Gen4 NVMe that's also a great PS5 storage upgrade.",
    overall: 9.0,
    scores: { performance: 9.3, build: 9.0, features: 8.6, value: 8.9 },
    pros: [
      "Excellent sustained performance and endurance",
      "Runs cool (heatsink version for PS5)",
      "Trusted reliability",
      "Great all-round Gen4 value",
    ],
    cons: [
      "Gen5 drives exist if you want headline speeds",
      "Heatsink model costs more",
    ],
    specs: [
      ["Capacity", "2 TB (other sizes available)"],
      ["Interface", "PCIe 4.0 x4 NVMe"],
      ["Seq. read", "Up to 7,450 MB/s"],
      ["Endurance", "1,200 TBW"],
      ["PS5", "Compatible (heatsink version)"],
    ],
    verdict:
      "Real-world load-time differences between top Gen4 drives are tiny, so buy the one with proven endurance and thermals. The 990 Pro is exactly that, and it's an easy PS5 upgrade too.",
    sections: [
      {
        heading: "Why this one",
        body: "Consistent sustained performance, strong endurance and good thermals make the 990 Pro a safe, no-drama choice for both PC and PS5.",
      },
    ],
    testedWeeks: 0,
    updated: "2026-06-17",
    author: "EchozLab Team",
  },

  // ── CONSOLE ACCESSORIES ──────────────────────────────────────
  {
    slug: "dualsense-edge",
    category: "console-accessories",
    name: "Sony DualSense Edge",
    brand: "Sony",
    asin: "B0BNNQRQBZ",
    ebayQuery: "DualSense Edge controller",
    priceBand: "~$199",
    badge: "Best PS5 pro controller",
    oneLiner: "Sony's pro pad with swappable sticks and back buttons for ranked play.",
    overall: 8.4,
    scores: { performance: 8.6, build: 8.5, features: 8.8, value: 7.6 },
    pros: [
      "Replaceable stick modules address drift",
      "Back buttons and trigger stops, properly integrated",
      "First-party — zero compatibility friction",
      "Premium build and carrying case",
    ],
    cons: [
      "Battery life worse than the standard pad",
      "Expensive at ~$199",
    ],
    specs: [
      ["Platform", "PS5 / PC"],
      ["Back inputs", "2 swappable"],
      ["Trigger stops", "3-position"],
      ["Sticks", "User-replaceable modules"],
      ["Battery", "~6 h"],
    ],
    verdict:
      "The Edge fixes the standard DualSense's two real weaknesses — no back buttons and unfixable stick drift — and adds pro-level tuning. The price is steep, but for ranked PS5 players it's the easiest recommendation.",
    sections: [
      {
        heading: "In competitive play",
        body: "Trigger stops shorten travel for shooters, and the back buttons give you extra inputs without moving your thumbs. The swappable sticks are real peace of mind against drift.",
      },
    ],
    testedWeeks: 0,
    updated: "2026-06-17",
    author: "EchozLab Team",
  },
  {
    slug: "wd-black-sn850p-2tb-ps5",
    category: "console-accessories",
    name: "WD_BLACK SN850P 2TB (for PS5)",
    brand: "Western Digital",
    asin: "B0C49GCN2T",
    ebayQuery: "WD Black SN850P 2TB PS5",
    priceBand: "~$199",
    badge: "Best PS5 SSD upgrade",
    oneLiner: "Officially licensed PS5 storage with the heatsink already on — plug and play.",
    overall: 9.0,
    scores: { performance: 9.2, build: 9.0, features: 8.8, value: 8.7 },
    pros: [
      "Officially licensed for PS5 with pre-fitted heatsink",
      "Meets PS5's speed requirements easily",
      "Simple, ~15-minute install",
      "Reliable WD_BLACK performance",
    ],
    cons: [
      "Slight premium for the licensed heatsink",
      "Gen4 (fine for PS5)",
    ],
    specs: [
      ["Capacity", "2 TB (other sizes available)"],
      ["Interface", "PCIe 4.0 x4 NVMe"],
      ["Heatsink", "Pre-installed (PS5-ready)"],
      ["Seq. read", "Up to 7,300 MB/s"],
    ],
    verdict:
      "The single best-value PS5 upgrade most people can make. The SN850P comes with the right heatsink already fitted, meets Sony's speed bar, and installs in minutes — no guesswork.",
    sections: [
      {
        heading: "Why a PS5 SSD upgrade first",
        body: "PS5 storage fills up fast, and a licensed drive like this removes all the compatibility and cooling guesswork. It's the accessory that improves day-to-day use the most.",
      },
    ],
    testedWeeks: 0,
    updated: "2026-06-17",
    author: "EchozLab Team",
  },
];

export const comparisons: Comparison[] = [
  {
    slug: "apex-pro-tkl-vs-huntsman-v3-pro-tkl",
    a: "steelseries-apex-pro-tkl",
    b: "razer-huntsman-v3-pro-tkl",
    title: "SteelSeries Apex Pro TKL vs Razer Huntsman V3 Pro TKL",
    tldrA:
      "Buy the Apex Pro TKL if you want magnetic Hall-effect switches, the OLED screen and SteelSeries' polished adjustable-actuation ecosystem.",
    tldrB:
      "Buy the Huntsman V3 Pro TKL if you prefer Razer's analog optical switch feel, Snap Tap and the included media dial and wrist rest.",
    rounds: [
      {
        heading: "Switches & feel",
        body: "The Apex Pro uses magnetic Hall-effect switches; the Huntsman uses analog optical. Both offer adjustable actuation and rapid trigger, so the real difference is feel — magnetic tends to feel slightly smoother, optical slightly crisper. Try both if you can.",
        winner: "tie",
      },
      {
        heading: "Features",
        body: "Apex Pro counters with its OLED info screen; Huntsman counters with a media dial and included wrist rest. Both support the competitive movement features (rapid trigger, SOCD/Snap Tap).",
        winner: "tie",
      },
      {
        heading: "Build & keycaps",
        body: "Both are premium aluminium-framed boards with doubleshot/PBT keycaps. Build quality is excellent on each.",
        winner: "tie",
      },
    ],
    verdict:
      "These are two of the best competitive TKL keyboards on Amazon, and they're remarkably close. Pick the Apex Pro TKL for magnetic switches and the OLED screen, or the Huntsman V3 Pro TKL for optical feel and the media dial. You can't go wrong — buy on switch-feel preference.",
    updated: "2026-06-17",
    author: "EchozLab Team",
  },
];

export const posts: Post[] = [
  {
    slug: "what-is-polling-rate",
    title: "What Is Mouse Polling Rate — and Does 8K Actually Matter?",
    category: "gaming-mice",
    excerpt:
      "Polling rate is how often your mouse reports to your PC. Here's a plain-English take on whether 8,000 Hz is worth it.",
    answerFirst:
      "Polling rate is how often your mouse reports its position to your computer, measured in hertz. At 1,000 Hz it reports every 1 ms; at 8,000 Hz, every 0.125 ms. In practice, going from 1K to 8K shaves under a millisecond off total motion delay — real, but only perceptible on monitors running 360 Hz or higher, and it noticeably cuts wireless battery life.",
    body: [
      {
        heading: "How polling rate affects delay",
        body: "Your total click-to-screen delay is made up of mouse reporting, USB transport, game processing and display response. Polling rate only shrinks the first part — a small slice of a chain that's usually 15–30 ms long, so the real-world gain is modest.",
      },
      {
        heading: "The cost: battery and CPU",
        body: "8K polling sends eight times as many reports, which drains wireless batteries far faster and adds CPU load. If your frame rate is already tight, very high polling can do more harm than good.",
      },
      {
        heading: "Who should turn it up",
        body: "If you have a 360 Hz+ monitor, CPU headroom and play competitive FPS, try 8K. Everyone else is well served by 1,000 Hz — and your battery will last much longer.",
      },
    ],
    takeaways: [
      "Polling rate = mouse reports per second",
      "8K saves under 1 ms vs 1K — real but tiny",
      "Only noticeable on 360 Hz+ monitors",
      "Cuts wireless battery life significantly",
    ],
    relatedProductSlug: "razer-viper-v3-pro",
    updated: "2026-06-17",
    author: "EchozLab Team",
    readMins: 5,
  },
  {
    slug: "hall-effect-keyboards-explained",
    title: "Hall-Effect Keyboards Explained: Rapid Trigger, Adjustable Actuation & Who Needs Them",
    category: "gaming-keyboards",
    excerpt:
      "Magnetic Hall-effect switches are the biggest keyboard upgrade in years. Here's what they do and whether you need one.",
    answerFirst:
      "Hall-effect keyboards use magnetic switches that detect exactly how far each key is pressed, instead of a single on/off point. This unlocks two things gamers care about: adjustable actuation (set how deep a press registers) and rapid trigger (a key resets the instant you start releasing it). For movement-heavy shooters, that makes inputs measurably faster and more repeatable.",
    body: [
      {
        heading: "Adjustable actuation",
        body: "You can make keys register on a feather-light tap for fast games, or require a deeper press to avoid typos when typing. Some boards let you set this per key.",
      },
      {
        heading: "Rapid trigger",
        body: "Because the switch tracks position continuously, the key can reset the moment you lift — so repeated taps and counter-strafing in shooters feel noticeably crisper than on a standard mechanical board.",
      },
      {
        heading: "Do you need one?",
        body: "If you play competitive movement shooters (Valorant, CS2, Apex), it's the single most impactful keyboard upgrade. For typing and casual play, a good mechanical board is still great and usually cheaper.",
      },
    ],
    takeaways: [
      "Magnetic switches sense exact key depth",
      "Adjustable actuation = set how deep a press registers",
      "Rapid trigger = instant reset for faster repeats",
      "Biggest benefit is in competitive movement shooters",
    ],
    relatedProductSlug: "steelseries-apex-pro-tkl",
    updated: "2026-06-17",
    author: "EchozLab Team",
    readMins: 6,
  },
];

/* ── lookups ─────────────────────────────────────────────────── */
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getComparison = (slug: string) => comparisons.find((c) => c.slug === slug);
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const productsInCategory = (slug: string) => products.filter((p) => p.category === slug);
export const getAuthor = (name: string) => authors.find((a) => a.name === name);
