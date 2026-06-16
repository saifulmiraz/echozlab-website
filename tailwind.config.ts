import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0C0F16",
        surface: "#131822",
        raised: "#1A2130",
        line: "#242D3F",
        ink: "#E9EDF5",
        muted: "#8C96AB",
        amber: { DEFAULT: "#FFB454", dim: "#B97F2E" },
        signal: "#5CCFE6",
        good: "#7FD88F",
        bad: "#F2708A",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: { wrap: "76rem" },
      boxShadow: {
        lift: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 24px -12px rgba(0,0,0,0.6)",
        glow: "0 0 60px -12px rgba(255,180,84,0.25)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(60% 90% at 75% 15%, rgba(255,180,84,0.12) 0%, rgba(92,207,230,0.06) 35%, transparent 70%)",
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
