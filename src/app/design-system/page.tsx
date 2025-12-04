// --- STEADFAST DEV SEED V3.0 (APPLE-LIKE / LIGHT THEME) ---
const STDFST_CFG = {
  // ---------------------------------------------------------------------------
  // COLOR SYSTEM — Neutral, Clean, Mature (Apple-like)
  // ---------------------------------------------------------------------------
  C: {
    BG:  "#F7F7F8",   // Background — ultra-light neutral (Apple iOS gray)
    SRF: "#FFFFFF",   // Surfaces / Cards — pure white
    TXT: "#1A1A1C",   // Primary text — soft-black (comfort contrast)
    TXT2:"#4A4A4D",   // Secondary text — refined gray
    ACC: "#0A84FF",   // Brand Accent — Apple Blue (CTA/buttons)
    ACC2:"#5E5CE6",   // Secondary Accent — Indigo (high-trust actions)
    VRF: "#32D74B",   // Success — Apple green
    ERR: "#FF453A",   // Error — warm red
    BRD: "#E5E5E7",   // Borders — subtle separators
    SHD: "rgba(0,0,0,0.04)" // Shadows — ultra-soft
  },

  // ---------------------------------------------------------------------------
  // TYPOGRAPHY SYSTEM — Modern, Clean, Readable
  // Inspired by Apple HIG + Enterprise SaaS
  // ---------------------------------------------------------------------------
  F: {
    H: "Manrope, -apple-system, BlinkMacSystemFont, sans-serif", 
    // Headings (600–800)
    
    B: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
    // Body copy (400–500)
    
    D: "JetBrains Mono, SFMono-Regular, Menlo, monospace"
    // Code/Data/Telemetry (400)
  },

  // ---------------------------------------------------------------------------
  // SPACING & RADIUS TOKENS — Apple Consistency
  // ---------------------------------------------------------------------------
  S: { XS:4, SM:8, MD:12, LG:20, XL:32, XXL:48 },
  R: { SM:6, MD:10, LG:16 },

  // ---------------------------------------------------------------------------
  // ELEVATION SYSTEM (Shadows)
  // ---------------------------------------------------------------------------
  ELEV: {
    CARD:   "0 2px 6px rgba(0,0,0,0.04)",
    FLOAT:  "0 4px 12px rgba(0,0,0,0.06)",
    MODAL:  "0 8px 24px rgba(0,0,0,0.10)"
  },

  // ---------------------------------------------------------------------------
  // GRID MAP (12-col, Apple marketing style)
  // ---------------------------------------------------------------------------
  GRID: {
    COLS: 12,
    GUTTER: 24,
    MAX_W: 1220
  },

  // ---------------------------------------------------------------------------
  // STRUCTURE / WIREFRAME IDs
  // Mirror of the layout approach from the Fontpair demo page (clean sections)
  // ---------------------------------------------------------------------------
  DOM: {
    SEC_A: "HERO_SENTINEL",      // Clean hero, centered, big serif-like heading 
    SEC_B: "VALUE_PROPOSITION",  // Two-column feature/value section
    SEC_C: "FEATURE_GRID",       // Cards (3 or 6 items)
    SEC_D: "SOCIAL_PROOF",       // Logos, testimonials, trust indicators
    SEC_E: "PRICING_STRIPE",     // SaaS pricing block (Apple light-style)
    SEC_F: "FINAL_CTA"           // Closing call to action
  },

  // ---------------------------------------------------------------------------
  // COMPONENT BLUEPRINTS
  // ---------------------------------------------------------------------------
  CMP: {
    BUTTON: {
      PRIMARY: {
        BG: "#0A84FF",
        TXT: "#FFFFFF",
        HOVER: "#006FEA",
        ACTIVE:"#005FCC",
        RADIUS: 10,
        PAD_Y: 12,
        PAD_X: 22,
        SHD: "0 2px 4px rgba(10,132,255,0.25)"
      },
      SECONDARY: {
        BG: "#FFFFFF",
        TXT: "#1A1A1C",
        BRD: "#D1D1D6",
        HOVER_BG:"#F2F2F4"
      }
    },
    CARD: {
      BG: "#FFFFFF",
      BRD: "#E5E5E7",
      RADIUS: 12,
      SHD: "0 1px 3px rgba(0,0,0,0.06)"
    }
  }
};
