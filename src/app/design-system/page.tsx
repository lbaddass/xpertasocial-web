import PageNav from "@/components/layout/PageNav";

const STDFST_CFG = {
  C: {
    BG: "#F7F7F8",
    SRF: "#FFFFFF",
    TXT: "#1A1A1C",
    TXT2: "#4A4A4D",
    ACC: "#0A84FF",
    ACC2: "#5E5CE6",
    VRF: "#32D74B",
    ERR: "#FF453A",
    BRD: "#E5E5E7",
    SHD: "rgba(0,0,0,0.04)",
  },
  F: {
    H: "Manrope, -apple-system, BlinkMacSystemFont, sans-serif",
    B: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
    D: "JetBrains Mono, SFMono-Regular, Menlo, monospace",
  },
  S: { XS: 4, SM: 8, MD: 12, LG: 20, XL: 32, XXL: 48 },
  R: { SM: 6, MD: 10, LG: 16 },
  ELEV: {
    CARD: "0 2px 6px rgba(0,0,0,0.04)",
    FLOAT: "0 4px 12px rgba(0,0,0,0.06)",
    MODAL: "0 8px 24px rgba(0,0,0,0.10)",
  },
  GRID: { COLS: 12, GUTTER: 24, MAX_W: 1220 },
  DOM: {
    SEC_A: "HERO_SENTINEL",
    SEC_B: "VALUE_PROPOSITION",
    SEC_C: "FEATURE_GRID",
    SEC_D: "SOCIAL_PROOF",
    SEC_E: "PRICING_STRIPE",
    SEC_F: "FINAL_CTA",
  },
  CMP: {
    BUTTON: {
      PRIMARY: {
        BG: "#0A84FF",
        TXT: "#FFFFFF",
        HOVER: "#006FEA",
        ACTIVE: "#005FCC",
        RADIUS: 10,
        PAD_Y: 12,
        PAD_X: 22,
        SHD: "0 2px 4px rgba(10,132,255,0.25)",
      },
      SECONDARY: {
        BG: "#FFFFFF",
        TXT: "#1A1A1C",
        BRD: "#D1D1D6",
        HOVER_BG: "#F2F2F4",
      },
    },
    CARD: {
      BG: "#FFFFFF",
      BRD: "#E5E5E7",
      RADIUS: 12,
      SHD: "0 1px 3px rgba(0,0,0,0.06)",
    },
  },
};

const DesignSystemPage = () => {
  return (
    <>
      <PageNav />
      <div
        style={{
          backgroundColor: STDFST_CFG.C.BG,
          color: STDFST_CFG.C.TXT,
          fontFamily: STDFST_CFG.F.B,
          padding: "40px",
          minHeight: "100vh",
        }}
      >
      <header
        style={{
          borderBottom: `1px solid ${STDFST_CFG.C.BRD}`,
          paddingBottom: "20px",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontFamily: STDFST_CFG.F.H,
            fontSize: "36px",
            fontWeight: 700,
          }}
        >
          Steadfast Design System
        </h1>
        <p style={{ color: STDFST_CFG.C.TXT2, marginTop: "8px" }}>
          Seed V3.0 (Apple-Like / Light Theme)
        </p>
      </header>

      <main>
        {/* Color Palette Section */}
        <section>
          <h2
            style={{
              fontFamily: STDFST_CFG.F.H,
              fontSize: "24px",
              fontWeight: 600,
              marginBottom: "20px",
            }}
          >
            Color System
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
              gap: "20px",
            }}
          >
            {Object.entries(STDFST_CFG.C).map(([name, value]) => (
              <div key={name}>
                <div
                  style={{
                    width: "100%",
                    height: "80px",
                    backgroundColor: value,
                    borderRadius: `${STDFST_CFG.R.MD}px`,
                    border: `1px solid ${STDFST_CFG.C.BRD}`,
                  }}
                ></div>
                <div style={{ marginTop: "12px", textAlign: "center" }}>
                  <div style={{ fontWeight: "600", fontSize: "14px" }}>
                    {name}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: STDFST_CFG.C.TXT2,
                      fontFamily: STDFST_CFG.F.D,
                    }}
                  >
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section style={{ marginTop: "60px" }}>
          <h2
            style={{
              fontFamily: STDFST_CFG.F.H,
              fontSize: "24px",
              fontWeight: 600,
              marginBottom: "20px",
            }}
          >
            Typography
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div>
              <p
                style={{
                  color: STDFST_CFG.C.TXT2,
                  fontSize: "14px",
                  marginBottom: "4px",
                }}
              >
                Headings (F.H)
              </p>
              <p
                style={{
                  fontFamily: STDFST_CFG.F.H,
                  fontSize: "32px",
                  fontWeight: 800,
                }}
              >
                Manrope Bold
              </p>
            </div>
            <div>
              <p
                style={{
                  color: STDFST_CFG.C.TXT2,
                  fontSize: "14px",
                  marginBottom: "4px",
                }}
              >
                Body (F.B)
              </p>
              <p
                style={{
                  fontFamily: STDFST_CFG.F.B,
                  fontSize: "16px",
                  lineHeight: 1.6,
                }}
              >
                Inter Regular. The quick brown fox jumps over the lazy dog.
              </p>
            </div>
            <div>
              <p
                style={{
                  color: STDFST_CFG.C.TXT2,
                  fontSize: "14px",
                  marginBottom: "4px",
                }}
              >
                Data / Code (F.D)
              </p>
              <p style={{ fontFamily: STDFST_CFG.F.D, fontSize: "14px" }}>
                JetBrains Mono. 1234567890
              </p>
            </div>
          </div>
        </section>

        {/* Spacing & Radius Section */}
        <section style={{ marginTop: "60px" }}>
          <h2
            style={{
              fontFamily: STDFST_CFG.F.H,
              fontSize: "24px",
              fontWeight: 600,
              marginBottom: "20px",
            }}
          >
            Sizing & Radius
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: STDFST_CFG.F.H,
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                Spacing (S)
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {Object.entries(STDFST_CFG.S).map(([name, value]) => (
                  <div
                    key={name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <span style={{ fontFamily: STDFST_CFG.F.D, width: "40px" }}>
                      {name}
                    </span>
                    <span
                      style={{
                        fontFamily: STDFST_CFG.F.D,
                        color: STDFST_CFG.C.TXT2,
                        width: "40px",
                      }}
                    >
                      {value}px
                    </span>
                    <div
                      style={{
                        height: "20px",
                        width: `${value}px`,
                        backgroundColor: STDFST_CFG.C.ACC,
                        borderRadius: "4px",
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: STDFST_CFG.F.H,
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                Radius (R)
              </h3>
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                {Object.entries(STDFST_CFG.R).map(([name, value]) => (
                  <div key={name} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        height: "70px",
                        width: "70px",
                        backgroundColor: STDFST_CFG.C.SRF,
                        border: `1px solid ${STDFST_CFG.C.BRD}`,
                        borderRadius: `${value}px`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></div>
                    <p
                      style={{
                        fontFamily: STDFST_CFG.F.D,
                        fontSize: "12px",
                        marginTop: "8px",
                      }}
                    >
                      {name} ({value}px)
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      </div>
    </>
  );
};

export default DesignSystemPage;
