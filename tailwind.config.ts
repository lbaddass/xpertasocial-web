import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grafito: "#0a0e1a",
        grafitoMedium: "#1a1d2e",
        techWhite: "#E8F5E9",
        signalRed: "#E63946",
        techCyan: "#06B6D4",
        moneyGreen: "#4CAF50",
        warningAmber: "#F59E0B",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(76,175,80,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(76,175,80,0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
