import type { Author, Category, Comparison, Post, Product } from "./data-types";

/* ──────────────────────────────────────────────────────────────
   Sample data layer. Replace with a CMS or MDX later — every
   template reads from these arrays, so swapping the source is
   a one-file change.
   ────────────────────────────────────────────────────────────── */

export const authors: Author[] = [
  {
    name: "Alex Reyes",
    role: "Lead reviewer",
    bio: "Former collegiate Counter-Strike player. Tests every mouse and keyboard on a 1,000 fps camera rig and an open-source latency tester.",
  },
];

export const categories: Category[] = [
  {
    slug: "gaming-mice",
    name: "Gaming Mice",
    blurb:
      "Every mouse here was tested on our click-latency rig and weighed on a calibrated scale. We rank by measured performance per dollar — not by spec sheet.",
    buyingGuide: [
      {
        heading: "Sensor specs stopped mattering — shape didn't",
        body: "Any modern sensor (PAW3395, HERO 2, Focus Pro) tracks flawlessly past human limits. The real buying decision is shape and weight: match the mouse to your hand size and grip style first, then pick the best-built option in your budget.",
      },
      {
        heading: "Wireless is a solved problem",
        body: "Our latency rig measures today's 2.4 GHz flagships within a millisecond of wired mice. Don't pay extra for a cable in 2026 — pay for battery life and a comfortable shape.",
      },
      {
        heading: "When 8K polling matters (rarely)",
        body: "8,000 Hz polling reduces motion delay by fractions of a millisecond and costs CPU headroom. It's measurable on a 360 Hz+ monitor and irrelevant below 240 Hz. Most players should leave it at 1,000 Hz.",
      },
    ],
    faq: [
      {
        q: "What weight should a gaming mouse be?",
        a: "For FPS play, most competitive players land between 50–65 g. Heavier (70–90 g) suits slower-sens MMO and productivity use. Below 45 g you start trading away build rigidity.",
      },
      {
        q: "Are wireless gaming mice slower than wired?",
        a: "Not anymore. Flagship 2.4 GHz dongles measure within ~1 ms of wired connections on our rig. Bluetooth is still too slow for gaming — always use the dongle.",
      },
      {
        q: "How long should a gaming mouse last?",
        a: "Optical-switch mice routinely survive 2–4 years of heavy use. Mechanical switches can develop double-clicking after 12–18 months — check warranty length before buying.",
      },
    ],
  },
  {
    slug: "gaming-keyboards",
    name: "Gaming Keyboards",
    blurb:
      "Hall effect, optical, and classic mechanical boards — tested for actuation consistency, latency, and the stuff spec sheets hide, like stabilizer rattle.",
    buyingGuide: [
      {
        heading: "Rapid trigger changed the meta",
        body: "Magnetic (Hall effect) switches let keys reset the instant you start releasing them. For movement-heavy shooters it's a genuine, measurable advantage — the first keyboard tech in a decade that is.",
      },
      {
        heading: "Size is a rangefinder decision",
        body: "60% and 65% boards free up mousepad space for low-sens FPS players. TKL is the sweet spot for most. Full-size only makes sense if you genuinely use the numpad.",
      },
    ],
    faq: [
      {
        q: "Is rapid trigger worth it?",
        a: "If you play movement shooters (Valorant, CS2, Apex) seriously, yes — counter-strafing becomes measurably faster. For MMO and single-player games it's irrelevant.",
      },
      {
        q: "Linear, tactile, or clicky for gaming?",
        a: "Linears dominate competitive play for their smooth, consistent actuation. Tactiles are the best dual-purpose pick for typing-heavy days. Clickies are a roommate-relationship risk.",
      },
    ],
  },
  {
    slug: "gaming-headsets",
    name: "Gaming Headsets",
    blurb:
      "Measured frequency response, mic clarity samples, and comfort scores from multi-hour sessions — because 'immersive sound' on a box means nothing.",
    buyingGuide: [
      {
        heading: "Footsteps live in the midrange",
        body: "Headsets tuned with huge bass boosts bury directional cues. For competitive play, look for a flat-to-bright tuning — our measurements flag which models actually deliver it.",
      },
    ],
    faq: [
      {
        q: "Do I need virtual surround sound?",
        a: "Usually not. Good stereo imaging plus the game's own HRTF (like CS2's or Valorant's) beats most virtual surround DSP, which can smear positional cues.",
      },
    ],
  },
  {
    slug: "gaming-monitors",
    name: "Gaming Monitors",
    blurb:
      "Response times measured at every refresh rate, real input lag numbers, and burn-in truth for OLED — tested with a colorimeter and a photodiode rig.",
    buyingGuide: [
      {
        heading: "1440p 240 Hz is the competitive sweet spot",
        body: "Modern GPUs drive 1440p esports titles past 240 fps comfortably, and the pixel density jump from 1080p is immediately visible. OLED at this spec is the current endgame.",
      },
    ],
    faq: [
      {
        q: "Is OLED burn-in a real risk for gaming?",
        a: "With mixed use, modern panels with pixel-shift and compensation cycles show no visible burn-in in our long-term testing. Static HUDs 8+ hours daily remain the risky case.",
      },
    ],
  },
  {
    slug: "gaming-chairs",
    name: "Gaming Chairs",
    blurb:
      "Sat in for weeks, not unboxed for an afternoon. Foam density, recline mechanics, and how each chair actually treats your back at hour six.",
    buyingGuide: [
      {
        heading: "Buy for foam and adjustability, not embroidery",
        body: "Cold-cured foam density and 4D armrests matter more than racing stripes. If your budget reaches mesh ergonomic territory, compare seriously — our crossover guide covers it.",
      },
    ],
    faq: [
      {
        q: "Gaming chair or office chair?",
        a: "At equal price, ergonomic office chairs usually win on long-session comfort. Gaming chairs win on aesthetics, recline range, and value at the $200–350 tier.",
      },
    ],
  },
  {
    slug: "streaming",
    name: "Streaming Equipment",
    blurb:
      "Mics judged by recorded samples, webcams by low-light frames, capture cards by measured latency. Build a broadcast-quality setup without the guesswork.",
    buyingGuide: [
      {
        heading: "Upgrade audio before video",
        body: "Viewers forgive 1080p video and never forgive bad audio. A $100 dynamic USB mic moves your production value further than any webcam upgrade.",
      },
    ],
    faq: [
      {
        q: "USB or XLR microphone?",
        a: "Start USB — modern USB mics are excellent and zero-hassle. Move to XLR when you want an audio interface, hardware processing, or multi-mic setups.",
      },
    ],
  },
  {
    slug: "pc-components",
    name: "PC Components",
    blurb:
      "GPUs, CPUs, SSDs and cooling — benchmarked at the settings people actually play, with frame-time consistency weighted over peak averages.",
    buyingGuide: [
      {
        heading: "Buy the GPU, build around it",
        body: "Your graphics card determines 80% of gaming performance. Set your GPU budget first, then pair a CPU that won't bottleneck it — our pairing guide maps the safe combos.",
      },
    ],
    faq: [
      {
        q: "Is buying a used GPU safe?",
        a: "Generally yes, with precautions: buy from sellers with photos of the actual card, test under load within the return window, and prefer eBay's money-back guarantee over local cash deals.",
      },
    ],
  },
  {
    slug: "console-accessories",
    name: "Console Accessories",
    blurb:
      "Pro controllers, SSD upgrades, and the add-ons that actually improve PS5, Xbox, and Switch sessions — tested on real hardware, not press releases.",
    buyingGuide: [
      {
        heading: "The SSD upgrade is the best money you'll spend",
        body: "A PS5 storage upgrade is a 15-minute job and current Gen4 drives are cheap. It outvalues nearly every other accessory on this list.",
      },
    ],
    faq: [
      {
        q: "Are pro controllers worth $200?",
        a: "If you play competitive shooters or fighters daily: the back paddles and trigger stops are real advantages. For casual play, a $50 third-party controller with hall-effect sticks is the smarter buy.",
      },
    ],
  },
];

export const products: Product[] = [
  {
    slug: "logitech-g-pro-x-superlight-2",
    category: "gaming-mice",
    name: "Logitech G Pro X Superlight 2",
    brand: "Logitech",
    asin: "B0CHX8DGGM",
    ebayQuery: "Logitech G Pro X Superlight 2",
    priceBand: "~$159",
    badge: "Best overall",
    oneLiner: "The safe-shape benchmark every other wireless mouse gets measured against.",
    overall: 9.2,
    scores: { performance: 9.6, build: 9.3, features: 8.4, value: 8.8 },
    pros: [
      "Measured click latency under 1 ms on our rig",
      "60 g with zero shell flex or rattle",
      "Shape fits the widest range of grips we've tested",
      "95-hour battery survives two weeks of evenings",
    ],
    cons: [
      "No dedicated DPI button on top",
      "Stock PTFE feet are merely okay — worth replacing",
      "Premium price for a featureless (in the good way) mouse",
    ],
    specs: [
      ["Weight", "60 g (measured 60.4 g)"],
      ["Sensor", "HERO 2, 32,000 DPI"],
      ["Polling", "1,000 Hz (2,000 Hz via firmware)"],
      ["Switches", "LIGHTFORCE hybrid optical"],
      ["Battery", "95 h rated / 88 h measured"],
      ["Connection", "LIGHTSPEED 2.4 GHz, USB-C wired"],
    ],
    verdict:
      "Three weeks on the bench and the Superlight 2 did exactly one thing remarkably: nothing wrong. Click latency, sensor consistency, and battery all measured at or above spec. If your hand fits the egg shape — and most do — this is still the default answer at the high end.",
    sections: [
      {
        heading: "Design & build",
        body: "The shell is a near-clone of the original Superlight, which is the point: it's the most grip-agnostic shape in esports. Our unit weighed 60.4 g on a calibrated scale with zero creak under a 5 kg squeeze test. The USB-C port (finally) sits deep enough for aftermarket paracords.",
      },
      {
        heading: "Performance on the bench",
        body: "On our photodiode latency rig the Superlight 2 averaged 0.9 ms click latency over 500 actuations — statistically tied with wired competitors. Sensor tracking stayed clean to 6.2 m/s on the tracking sled. The 2,000 Hz firmware mode worked flawlessly, though we measured no human-perceptible benefit over 1,000 Hz on a 240 Hz display.",
      },
      {
        heading: "Battery & software",
        body: "We measured 88 hours at 1,000 Hz with default lighting (there is none — bless). G HUB remains heavier than it needs to be, but onboard memory means you can configure once and uninstall it.",
      },
      {
        heading: "Who should buy it — and who shouldn't",
        body: "Buy it if you want the proven shape with flagship internals and you keep mice for years. Skip it if you have very large hands (look at ergo options) or if you're price-sensitive — last year's model delivers 95% of this for less.",
      },
    ],
    testedWeeks: 3,
    updated: "2026-05-18",
    author: "Alex Reyes",
  },
  {
    slug: "razer-viper-v3-pro",
    category: "gaming-mice",
    name: "Razer Viper V3 Pro",
    brand: "Razer",
    asin: "B0CSPSPLBW",
    ebayQuery: "Razer Viper V3 Pro",
    priceBand: "~$149",
    badge: "Best for claw grip",
    oneLiner: "Lower-profile rival with true 8K wireless polling and a flatter, claw-friendly shape.",
    overall: 9.0,
    scores: { performance: 9.5, build: 9.0, features: 9.0, value: 8.5 },
    pros: [
      "True 8,000 Hz wireless polling included",
      "Flatter shape excels for claw and fingertip",
      "Excellent stock feet — best out of the box",
    ],
    cons: [
      "8K polling cuts battery to ~24 h",
      "Side buttons sit slightly far forward",
    ],
    specs: [
      ["Weight", "54 g (measured 54.7 g)"],
      ["Sensor", "Focus Pro 35K Gen-2"],
      ["Polling", "8,000 Hz wireless (HyperPolling)"],
      ["Switches", "Optical Gen-3"],
      ["Battery", "95 h @ 1K / ~24 h @ 8K"],
      ["Connection", "HyperSpeed 2.4 GHz, USB-C"],
    ],
    verdict:
      "The Viper V3 Pro is the technical flex of the category — 8K wireless polling that actually works. For claw and fingertip players it edges out the Superlight 2; palm grippers should stay with the egg.",
    sections: [
      {
        heading: "Design & build",
        body: "Lower hump, longer body: this is a claw-grip shape through and through. At 54.7 g measured it undercuts the Superlight 2 while keeping a rigid shell.",
      },
      {
        heading: "Performance on the bench",
        body: "Click latency averaged 0.8 ms. At 8,000 Hz polling we measured motion-to-photon improvements of roughly 0.6 ms versus 1K — real, but only meaningful on 360 Hz panels. CPU overhead at 8K was ~3% on a mid-range chip.",
      },
    ],
    testedWeeks: 3,
    updated: "2026-05-02",
    author: "Alex Reyes",
  },
  {
    slug: "wooting-80he",
    category: "gaming-keyboards",
    name: "Wooting 80HE",
    brand: "Wooting",
    asin: "B0DEXAMPLE1",
    ebayQuery: "Wooting 80HE keyboard",
    priceBand: "~$199",
    badge: "Best Hall effect",
    oneLiner: "The rapid-trigger benchmark — analog magnetic switches with the most trusted firmware in esports.",
    overall: 9.4,
    scores: { performance: 9.8, build: 9.0, features: 9.5, value: 8.9 },
    pros: [
      "Rapid trigger with per-key actuation from 0.1 mm",
      "Web-based config, no bloatware install",
      "Gasket mount sounds far better than most gaming boards",
    ],
    cons: ["Demand often outruns stock", "No wireless option"],
    specs: [
      ["Layout", "80% (TKL + extras)"],
      ["Switches", "Lekker L60 magnetic"],
      ["Actuation", "0.1–4.0 mm adjustable"],
      ["Polling", "8,000 Hz wired"],
      ["Mount", "Gasket, FR4 plate"],
    ],
    verdict:
      "Wooting built the rapid-trigger category and the 80HE is still the cleanest execution: measurably consistent actuation, instant web config, and a build that finally matches the firmware.",
    sections: [
      {
        heading: "Performance on the bench",
        body: "Actuation-point consistency measured within ±0.05 mm across our sampled keys — the tightest tolerance we've recorded. Counter-strafe timing in CS2 improved by a measurable 8–12 ms versus a standard mechanical board in our scripted test.",
      },
    ],
    testedWeeks: 4,
    updated: "2026-04-20",
    author: "Alex Reyes",
  },
  {
    slug: "steelseries-arctis-nova-7",
    category: "gaming-headsets",
    name: "SteelSeries Arctis Nova 7",
    brand: "SteelSeries",
    asin: "B0B57FYJHL",
    ebayQuery: "SteelSeries Arctis Nova 7 wireless",
    priceBand: "~$179",
    badge: "Best wireless",
    oneLiner: "Simultaneous 2.4 GHz + Bluetooth, a genuinely good mic, and tuning that keeps footsteps audible.",
    overall: 8.7,
    scores: { performance: 8.6, build: 8.5, features: 9.2, value: 8.4 },
    pros: [
      "Dual wireless: game audio + Discord on phone at once",
      "Neutral-bright tuning preserves directional cues",
      "38-hour measured battery",
    ],
    cons: ["Ski-band fit isn't for everyone", "ANC absent at this price"],
    specs: [
      ["Drivers", "40 mm neodymium"],
      ["Connection", "2.4 GHz + Bluetooth simultaneous"],
      ["Battery", "38 h measured"],
      ["Mic", "Retractable ClearCast Gen 2"],
      ["Weight", "325 g"],
    ],
    verdict:
      "The Nova 7 nails the things competitive players actually need — clear mids for footsteps, a mic teammates don't complain about, and battery you stop thinking about.",
    sections: [
      {
        heading: "Sound on the bench",
        body: "Our measurement rig shows a mild bass shelf and present upper-mids — close enough to neutral that positional audio stays sharp. Mic frequency response is unusually full for a headset boom.",
      },
    ],
    testedWeeks: 3,
    updated: "2026-03-30",
    author: "Alex Reyes",
  },
  {
    slug: "lg-ultragear-27gx790a",
    category: "gaming-monitors",
    name: "LG UltraGear 27GX790A",
    brand: "LG",
    asin: "B0DEXAMPLE2",
    ebayQuery: "LG UltraGear 27 OLED 480Hz",
    priceBand: "~$799",
    badge: "Best OLED",
    oneLiner: "1440p OLED at 480 Hz — motion clarity that makes LCD esports panels look smeared.",
    overall: 9.1,
    scores: { performance: 9.7, build: 8.8, features: 8.9, value: 8.2 },
    pros: [
      "0.03 ms measured response — zero ghosting at any rate",
      "480 Hz with OLED contrast is a generational jump",
      "Excellent factory calibration",
    ],
    cons: ["Price", "Text fringing on subpixel layout", "Brightness in HDR highlights only"],
    specs: [
      ["Panel", "27\" WOLED, 2560×1440"],
      ["Refresh", "480 Hz"],
      ["Response", "0.03 ms GtG (measured)"],
      ["Input lag", "1.8 ms measured @480 Hz"],
      ["Sync", "G-Sync Compatible / FreeSync Premium"],
    ],
    verdict:
      "If your GPU and wallet can feed it, this is the cleanest motion we've ever measured on the bench. Esports players upgrading from 240 Hz LCD will see the difference in the first flick.",
    sections: [
      {
        heading: "Motion on the bench",
        body: "Pursuit-camera shots show essentially perfect pixel transitions at every refresh rate. Measured input lag of 1.8 ms puts it among the fastest displays we've tested.",
      },
    ],
    testedWeeks: 5,
    updated: "2026-05-25",
    author: "Alex Reyes",
  },
  {
    slug: "secretlab-titan-evo",
    category: "gaming-chairs",
    name: "Secretlab Titan Evo",
    brand: "Secretlab",
    asin: "B0DEXAMPLE3",
    ebayQuery: "Secretlab Titan Evo chair",
    priceBand: "~$549",
    badge: "Best overall",
    oneLiner: "The gaming chair that survives the six-month test — adjustable lumbar that actually adjusts.",
    overall: 8.8,
    scores: { performance: 8.7, build: 9.2, features: 8.8, value: 8.3 },
    pros: [
      "4-way integrated lumbar beats every pillow system",
      "Cold-cure foam keeps shape after months",
      "Magnetic head pillow stays put",
    ],
    cons: ["Firm seat isn't for everyone", "Heavy assembly"],
    specs: [
      ["Sizes", "S / R / XL"],
      ["Upholstery", "NEO Hybrid Leatherette / SoftWeave"],
      ["Recline", "85–165°"],
      ["Lumbar", "Integrated 4-way"],
      ["Warranty", "5 yr (extended)"],
    ],
    verdict:
      "Six months in, the foam hasn't packed out and the lumbar still does its job — which is more than we can say for most chairs we've cycled through the lab.",
    sections: [
      {
        heading: "Long-session comfort",
        body: "The firm cold-cure foam divides opinion in week one and wins it by week four. The integrated lumbar's range covers slouchers and upright posture types alike.",
      },
    ],
    testedWeeks: 26,
    updated: "2026-02-14",
    author: "Alex Reyes",
  },
  {
    slug: "elgato-stream-deck-mk2",
    category: "streaming",
    name: "Elgato Stream Deck MK.2",
    brand: "Elgato",
    asin: "B09738CV2G",
    ebayQuery: "Elgato Stream Deck MK.2",
    priceBand: "~$149",
    badge: "Streaming essential",
    oneLiner: "Fifteen LCD keys that quietly become the control surface for your entire desk.",
    overall: 8.9,
    scores: { performance: 8.8, build: 8.9, features: 9.4, value: 8.4 },
    pros: [
      "Plugin ecosystem covers OBS, Twitch, smart home, DAWs",
      "Folders and profiles multiply 15 keys into hundreds",
      "Rock-solid software after years of updates",
    ],
    cons: ["Per-key cost adds up", "Wants a USB port, not a hub"],
    specs: [
      ["Keys", "15 customizable LCD"],
      ["Connection", "USB-C"],
      ["Software", "Windows / macOS"],
      ["Mount", "Detachable stand"],
    ],
    verdict:
      "The rare streaming gadget that earns desk space even on no-stream days. If you run OBS, this is the first quality-of-life purchase to make.",
    sections: [
      {
        heading: "In daily use",
        body: "Scene switches, mic mute, clip markers, even lighting control — after a month, reaching for it is muscle memory. The plugin store is the moat no competitor has matched.",
      },
    ],
    testedWeeks: 8,
    updated: "2026-01-22",
    author: "Alex Reyes",
  },
  {
    slug: "dualsense-edge",
    category: "console-accessories",
    name: "Sony DualSense Edge",
    brand: "Sony",
    asin: "B0BNNQRQBZ",
    ebayQuery: "DualSense Edge controller",
    priceBand: "~$199",
    badge: "Best PS5 pro controller",
    oneLiner: "Sony's pro pad with swappable sticks — the back buttons your ranked grind has been missing.",
    overall: 8.4,
    scores: { performance: 8.6, build: 8.5, features: 8.8, value: 7.6 },
    pros: [
      "Replaceable stick modules end drift anxiety",
      "Back buttons + trigger stops, properly integrated",
      "First-party means zero compatibility friction",
    ],
    cons: ["Battery is worse than the standard pad", "$199 is steep"],
    specs: [
      ["Platform", "PS5 / PC"],
      ["Back inputs", "2 swappable (lever/dome)"],
      ["Trigger stops", "3-position"],
      ["Stick modules", "User-replaceable"],
      ["Battery", "~6 h measured"],
    ],
    verdict:
      "The Edge fixes the standard DualSense's two real weaknesses — no back buttons, un-serviceable sticks — and introduces one of its own in battery life. For ranked players it's still the easiest recommendation on PS5.",
    sections: [
      {
        heading: "In competitive play",
        body: "Trigger stops cut measured trigger travel time roughly in half for shooters. The dome-style back buttons proved easier to hit consistently than the levers in our blind testing.",
      },
    ],
    testedWeeks: 6,
    updated: "2026-03-08",
    author: "Alex Reyes",
  },
  {
    slug: "samsung-990-pro-2tb",
    category: "pc-components",
    name: "Samsung 990 Pro 2TB",
    brand: "Samsung",
    asin: "B0BHJJ9Y77",
    ebayQuery: "Samsung 990 Pro 2TB NVMe",
    priceBand: "~$169",
    badge: "Best gaming SSD",
    oneLiner: "The Gen4 drive that ends the storage conversation — also the no-brainer PS5 upgrade.",
    overall: 9.0,
    scores: { performance: 9.3, build: 9.0, features: 8.6, value: 8.9 },
    pros: [
      "Sustained writes don't fall off a cliff like budget drives",
      "Runs cool enough for PS5 with the heatsink model",
      "Top-tier endurance rating",
    ],
    cons: ["Gen5 exists if you need bragging rights", "Heatsink model costs extra"],
    specs: [
      ["Capacity", "2 TB (1/4 TB available)"],
      ["Interface", "PCIe 4.0 x4 NVMe"],
      ["Seq. read", "7,450 MB/s"],
      ["Endurance", "1,200 TBW"],
      ["PS5 compatible", "Yes (heatsink version)"],
    ],
    verdict:
      "Game load times between top Gen4 drives differ by tenths of a second — so buy the one with proven endurance and thermals. That's this one.",
    sections: [
      {
        heading: "On the bench",
        body: "Sustained write tests held above 1.5 GB/s after cache exhaustion where budget drives drop below 500 MB/s. In the PS5 bay it stayed under 60 °C through a 200 GB transfer.",
      },
    ],
    testedWeeks: 12,
    updated: "2026-04-11",
    author: "Alex Reyes",
  },
];

export const comparisons: Comparison[] = [
  {
    slug: "superlight-2-vs-viper-v3-pro",
    a: "logitech-g-pro-x-superlight-2",
    b: "razer-viper-v3-pro",
    title: "Logitech G Pro X Superlight 2 vs Razer Viper V3 Pro",
    tldrA:
      "Buy the Superlight 2 if you palm or hybrid grip, want two-week battery, and value the most proven shape in esports.",
    tldrB:
      "Buy the Viper V3 Pro if you claw or fingertip grip, run a 360 Hz+ monitor, and want true 8K wireless polling.",
    rounds: [
      {
        heading: "Shape & comfort",
        body: "The Superlight's higher hump fills the palm; the Viper's flatter, longer shell rewards claw and fingertip grips. Neither is 'better' — your hand decides. In our grip panel of six testers, palm grippers unanimously chose Logitech, claw grippers split 2–1 for Razer.",
        winner: "tie",
      },
      {
        heading: "Bench performance",
        body: "Click latency measured 0.9 ms (Logitech) vs 0.8 ms (Razer) — a tie in practice. The Viper's 8K wireless polling is the real differentiator: ~0.6 ms lower motion delay, visible only on 360 Hz+ panels.",
        winner: "b",
      },
      {
        heading: "Battery & practicality",
        body: "88 measured hours vs 95 at 1K polling favors Razer slightly on paper — but run the Viper at its headline 8K mode and it drops to ~24 h. The Logitech never asks you to choose.",
        winner: "a",
      },
      {
        heading: "Value",
        body: "Street prices float within $10 of each other. The Razer ships with better stock feet; the Logitech holds resale value better. A wash.",
        winner: "tie",
      },
    ],
    verdict:
      "This is a grip-style decision wearing a spec-sheet costume. Palm grip: Superlight 2. Claw or fingertip, especially on a high-refresh OLED: Viper V3 Pro. You cannot buy wrong here — only buy wrong for your hand.",
    updated: "2026-05-20",
    author: "Alex Reyes",
  },
];

export const posts: Post[] = [
  {
    slug: "what-is-polling-rate",
    title: "What Is Mouse Polling Rate — and Does 8K Actually Matter?",
    category: "gaming-mice",
    excerpt:
      "Polling rate is how often your mouse reports to your PC. Here's what our latency rig says about whether 8,000 Hz is worth paying for.",
    answerFirst:
      "Polling rate is the frequency — measured in hertz — at which your mouse reports its position to your computer. At 1,000 Hz it reports every 1 ms; at 8,000 Hz, every 0.125 ms. On our test rig, 8K polling reduces total motion delay by roughly 0.5–0.9 ms versus 1K. That's measurable, and it's only perceptible on monitors running 360 Hz or higher.",
    body: [
      {
        heading: "How polling rate actually affects delay",
        body: "Your total click-to-photon latency stacks mouse delay, USB transport, game processing, and display response. Polling rate only shrinks the first slice. Going 1K → 8K trims under a millisecond from a chain that's typically 15–30 ms long — a 3–5% improvement at best.",
      },
      {
        heading: "The hidden cost: CPU overhead",
        body: "8K polling generates eight times the input events. On mid-range CPUs we measured 2–4% higher CPU usage and occasional frame-time spikes in CPU-bound games. If your frame rate is already struggling, 8K can make your aim feel worse, not better.",
      },
      {
        heading: "Who should turn it on",
        body: "360 Hz+ monitor, CPU headroom to spare, competitive FPS focus: enable it. Everyone else: 1,000 Hz remains the right answer, and battery life will thank you.",
      },
    ],
    takeaways: [
      "Polling rate = reports per second from mouse to PC",
      "8K saves under 1 ms versus 1K — real but tiny",
      "Only perceptible at 360 Hz+ refresh rates",
      "Costs CPU headroom and wireless battery life",
    ],
    relatedProductSlug: "razer-viper-v3-pro",
    updated: "2026-05-10",
    author: "Alex Reyes",
    readMins: 6,
  },
  {
    slug: "is-oled-burn-in-a-risk-for-gaming",
    title: "OLED Burn-In for Gamers: What the Long-Term Data Actually Shows",
    category: "gaming-monitors",
    excerpt:
      "We've run OLED gaming monitors with static HUDs for months. Here's an honest read on the burn-in risk in 2026.",
    answerFirst:
      "For typical mixed gaming use — different games, some desktop work, the occasional movie — modern gaming OLEDs show no visible burn-in within the first two years, based on our lab panels and published long-term torture tests. The genuine risk case is a single static HUD or taskbar displayed 8+ hours a day, every day.",
    body: [
      {
        heading: "Why modern panels resist burn-in",
        body: "Pixel-shift, logo dimming, and compensation cycles that run when the display sleeps have changed the math since early OLED TVs. Manufacturers now back gaming monitors with 2–3 year burn-in warranties — they wouldn't if claims were common.",
      },
      {
        heading: "Habits that eliminate most risk",
        body: "Auto-hide your taskbar, use dark mode, let compensation cycles run (don't kill power at the wall), and vary your content. That's the whole list — no babying required.",
      },
      {
        heading: "Who should still buy LCD",
        body: "If your monitor doubles as an 8-hour-a-day spreadsheet or trading display with fixed UI, a Mini-LED LCD remains the zero-anxiety choice.",
      },
    ],
    takeaways: [
      "Mixed-use gaming: burn-in is effectively a non-issue",
      "Static UI 8 h+/day remains the real risk case",
      "Check the warranty — burn-in coverage is now standard on good panels",
    ],
    relatedProductSlug: "lg-ultragear-27gx790a",
    updated: "2026-04-28",
    author: "Alex Reyes",
    readMins: 7,
  },
];

/* ── lookups ─────────────────────────────────────────────────── */
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getComparison = (slug: string) => comparisons.find((c) => c.slug === slug);
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const productsInCategory = (slug: string) => products.filter((p) => p.category === slug);
export const getAuthor = (name: string) => authors.find((a) => a.name === name);
