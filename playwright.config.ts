import { defineConfig, devices } from "@playwright/test";

const PORT = Number(process.env.E2E_PORT || 3100);

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  retries: 0,
  reporter: "list",
  use: {
    baseURL: `http://localhost:${PORT}`,
    // Usa el Chrome instalado en el equipo; no descarga navegadores.
    channel: "chrome",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], channel: "chrome" } },
    { name: "mobile", use: { ...devices["Pixel 7"], channel: "chrome" } },
  ],
  webServer: {
    // Requiere `npm run build` previo. LEAD_DESTINATION=log registra los leads en consola.
    command: `npx next start -p ${PORT}`,
    port: PORT,
    reuseExistingServer: false,
    env: { LEAD_DESTINATION: "log" },
  },
});
