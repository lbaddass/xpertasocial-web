import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base Infrastructure
        carbon: "#0F0F0F",
        slateUI: "#1A1A1A",
        grafito: "#0a0e1a",

        // Neon Accent System
        neonBlue: "#00E5FF",
        neonPink: "#FF1CF7",
        neonLime: "#C8FF00",

        // Legacy/Fallback
        techWhite: "#E8F5E9",
        signalRed: "#E63946",
        moneyGreen: "#4CAF50",

        // Sitio comercial: identidad original (carbón + neón), modernizada.
        void: "#050505", // fondo de página
        panel: "#0D0F12", // tarjetas
        panel2: "#13161B", // tarjetas elevadas / hover
        neonAmber: "#FFB547", // acento de Amazon Ads
      },
      fontFamily: {
        sans: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "76rem",
        prose: "44rem",
      },
      boxShadow: {
        glow: "0 0 28px -6px rgba(0, 229, 255, 0.55)",
        "glow-sm": "0 0 18px -8px rgba(0, 229, 255, 0.6)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(0, 229, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 229, 255, 0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
