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

        // XpertaSocial 2026 marketing tokens (Catálogo de servicios 2026)
        ink: {
          DEFAULT: "#0E1726", // fondo oscuro principal
          800: "#16213A",
          700: "#22304D",
          600: "#3A4A66",
        },
        mint: {
          DEFAULT: "#3DD9A4", // acento sobre fondo oscuro
          600: "#10B981",
          700: "#047857", // acento sobre fondo claro (contraste AA)
          50: "#E7F8F1",
        },
        paper: "#FFFFFF",
        surface: "#F4F6F9",
        line: "#E3E8EF",
        body: "#0F172A",
        muted: "#4B5565",
        caution: "#FFF6DB",
      },
      fontFamily: {
        sans: ["var(--font-grotesk)"],
        mono: ["var(--font-plex-mono)"],
        brand: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
        prose: "44rem",
      },
      borderRadius: {
        card: "1rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(14, 23, 38, 0.06), 0 8px 24px -12px rgba(14, 23, 38, 0.12)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(0, 229, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 229, 255, 0.03) 1px, transparent 1px)",
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
