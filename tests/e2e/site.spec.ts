import { expect, test, type Page } from "@playwright/test";

test.describe("Navegación principal", () => {
  test("Home muestra H1, CTA y precios del catálogo", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Que te encuentren");
    await expect(page.getByRole("link", { name: "Cotizar mi proyecto" }).first()).toHaveAttribute("href", "/diagnostico");
    await expect(page.getByText("Desde $7,500").first()).toBeVisible();
    await expect(page.getByText("450 USD/mes").first()).toBeVisible();
  });

  test("Home no contiene afirmaciones retiradas", async ({ page }) => {
    await page.goto("/");
    const text = await page.locator("body").innerText();
    for (const banned of ["3.8x", "12.5x", "124,500", "Riesgo Cero", "Andromeda", "50 variaciones", "% OFF"]) {
      expect(text, `no debe aparecer "${banned}"`).not.toContain(banned);
    }
  });

  test("/diseno-paginas-web carga con formulario y precio", async ({ page }) => {
    await page.goto("/diseno-paginas-web");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("#cotizar form")).toBeVisible();
    await expect(page.getByText("8 a 12 días hábiles").first()).toBeVisible();
  });

  test("Aviso de privacidad es borrador y noindex", async ({ page }) => {
    await page.goto("/aviso-de-privacidad");
    await expect(page.getByRole("note")).toContainText("BORRADOR");
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  });

  test("404 personalizada", async ({ page }) => {
    const res = await page.goto("/no-existe-esta-pagina");
    expect(res?.status()).toBe(404);
    await expect(page.getByText("No encontramos esta página.")).toBeVisible();
  });
});

test.describe("Redirecciones y URLs retiradas", () => {
  const redirects: [string, string, number][] = [
    ["/piso-1-infraestructura", "/diseno-paginas-web", 308],
    ["/piso-2-contenido-ia", "/#seo-geo-aeo", 307],
    ["/catalogo-ia", "/#soluciones", 307],
    ["/perfil", "/", 307],
    ["/jluisgarciaor", "/", 307],
  ];
  for (const [from, to, status] of redirects) {
    test(`${from} → ${to} (${status})`, async ({ request }) => {
      const res = await request.get(from, { maxRedirects: 0 });
      expect(res.status()).toBe(status);
      expect(res.headers()["location"]).toBe(to);
    });
  }

  for (const path of ["/facebook-ads", "/identity-lab", "/demo", "/design-system"]) {
    test(`${path} responde 410`, async ({ request }) => {
      const res = await request.get(path, { maxRedirects: 0 });
      expect(res.status()).toBe(410);
    });
  }
});

async function fillValidForm(page: Page, scope = "#contenido") {
  const form = page.locator(`${scope} form`).first();
  await form.getByLabel("Nombre").fill("Prueba Automatizada");
  await form.getByLabel("Empresa").fill("Constructora de Prueba");
  await form.getByLabel("Sector").selectOption("Construcción");
  await form.getByLabel("Solución que buscas").selectOption("Sitio web o landing page");
  await form.getByLabel("Rango de inversión").selectOption("Aún no lo sé");
  await form.getByLabel("¿Para cuándo lo necesitas?").selectOption("En 1 a 3 meses");
  await form.getByLabel("¿Tomas la decisión?").selectOption("Sí");
  await form.getByLabel("Correo").fill("prueba@example.com");
  await form.getByLabel("Teléfono o WhatsApp").fill("55 1234 5678");
  await form.getByRole("checkbox").check();
  return form;
}

test.describe("Formulario de diagnóstico", () => {
  test("envío inválido muestra errores y no envía", async ({ page }) => {
    let posted = false;
    page.on("request", (r) => {
      if (r.url().endsWith("/api/leads")) posted = true;
    });
    await page.goto("/diagnostico");
    await page.getByRole("button", { name: "Solicitar diagnóstico" }).click();
    await expect(page.getByText("Escribe tu nombre.")).toBeVisible();
    await expect(page.getByText("Necesitamos tu aceptación del aviso de privacidad.")).toBeVisible();
    expect(posted).toBe(false);
  });

  test("envío válido con UTM y gclid llega al servidor y dispara generate_lead una vez", async ({ page }) => {
    // Sin red hacia Google: solo contamos lo que el sitio empuja a dataLayer vía gtag().
    await page.route(/googletagmanager\.com|google-analytics\.com/, (r) => r.abort());
    await page.goto("/diagnostico?utm_source=google&utm_medium=cpc&utm_campaign=prueba&gclid=TEST123");
    await fillValidForm(page);

    const [req] = await Promise.all([
      page.waitForRequest((r) => r.url().endsWith("/api/leads") && r.method() === "POST"),
      page.getByRole("button", { name: "Solicitar diagnóstico" }).click(),
    ]);
    const body = req.postDataJSON() as { tracking: Record<string, string>; empresa_web: string };
    expect(body.tracking.gclid).toBe("TEST123");
    expect(body.tracking.utm_campaign).toBe("prueba");
    expect(body.empresa_web).toBe("");

    await expect(page.getByTestId("lead-success")).toBeVisible();
    const leads = await page.evaluate(() =>
      ((window as unknown as { dataLayer: ArrayLike<unknown>[] }).dataLayer || [])
        .map((e) => Array.from(e as ArrayLike<unknown>))
        .filter((e) => e[0] === "event" && e[1] === "generate_lead"),
    );
    expect(leads).toHaveLength(1);
  });

  test("API rechaza datos inválidos (422) y acepta honeypot sin guardar", async ({ request }) => {
    const bad = await request.post("/api/leads", { data: { name: "x" } });
    expect(bad.status()).toBe(422);
    const bot = await request.post("/api/leads", { data: { empresa_web: "spam" } });
    expect(bot.status()).toBe(200);
  });
});
