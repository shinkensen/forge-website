import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16233D",
        paper: "#F7F6F1",
        blueprint: "#24425C",
        "blueprint-deep": "#0E2136",
        "blueprint-mid": "#183350",
        copper: "#B5651D",
        "copper-light": "#D98A4A",
        circuit: "#3F7A5C",
        line: "#CFC9B8",
        "line-dark": "rgba(247,246,241,0.18)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(181,101,29,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(181,101,29,0.08) 1px, transparent 1px)",
        "blueprint-grid-dark":
          "linear-gradient(rgba(247,246,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(247,246,241,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
