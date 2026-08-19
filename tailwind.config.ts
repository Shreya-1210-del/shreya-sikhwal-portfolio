import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0E14",
          900: "#0D1219",
          800: "#121822",
          700: "#1A222F",
          600: "#232D3D",
        },
        paper: {
          100: "#F6F7F9",
          200: "#EDEFF2",
          300: "#C7CDD6",
          400: "#8B94A3",
        },
        signal: {
          cyan: "#4FD1E5",
          amber: "#F4A340",
          coral: "#F0665C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(237,239,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(237,239,242,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "draw-line": "draw-line 1.6s ease-out forwards",
        "fade-up": "fade-up 0.7s ease-out forwards",
        blink: "blink 1.1s step-end infinite",
      },
      keyframes: {
        "draw-line": {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
