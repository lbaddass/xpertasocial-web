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
        // === XpertaSocial 2.0 Design System ===

        // Primary palette
        "bg-primary": "#080B09",
        "bg-secondary": "#101611",
        "bg-elevated": "#151D17",

        // Neon accent system
        neon: "#A3FF66",
        "neon-secondary": "#C5FF9A",
        "muted-green": "#315B37",

        // Text
        "text-primary": "#F5F7F4",
        "text-secondary": "#9AA59C",

        // Borders
        border: "#27332B",

        // === Legacy tokens (admin pages) ===
        carbon: "#0F0F0F",
        slateUI: "#1A1A1A",
        neonBlue: "#00E5FF",
        neonPink: "#FF1CF7",
        neonLime: "#C8FF00",
        techWhite: "#E8F5E9",
        signalRed: "#E63946",
        moneyGreen: "#4CAF50",
      },
      backgroundColor: {
        primary: "#080B09",
        secondary: "#101611",
        elevated: "#151D17",
      },
      textColor: {
        primary: "#F5F7F4",
        secondary: "#9AA59C",
      },
      borderColor: {
        border: "#27332B",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(163, 255, 102, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(163, 255, 102, 0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out both",
        "slide-up": "slideUp 0.6s ease-out both",
        "draw-line": "drawLine 1.5s ease-out forwards",
        "node-pulse": "nodePulse 2s ease-in-out infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        nodePulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(163, 255, 102, 0.3)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(163, 255, 102, 0.15)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
