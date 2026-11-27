import { expect, test } from "@playwright/test";

test.describe("Navegación principal", () => {
  test("Home muestra H1, CTA y precios del catálogo", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Que te encuentren");
    await expect(page.getByRole("link", { name: "Cotizar mi proyecto" }).first()).toHaveAttribute("href", "/diagnostico");
    await expect(page.getByText("$7,500").first()).toBeVisible();
    await expect(page.getByText("450 USD/mes").first()).toBeVisible();
    await expect(page.getByText("$2,500/mes").first()).toBeVisible(); // Meta Ads
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

test.describe("Formulario → WhatsApp", () => {
  test("envío inválido muestra errores y no abre WhatsApp", async ({ page }) => {
    await page.addInitScript(() => {
      (window as unknown as { __opened: string[] }).__opened = [];
      window.open = ((url: string) => {
        (window as unknown as { __opened: string[] }).__opened.push(String(url));
        return {} as Window;
      }) as typeof window.open;
    });
    await page.goto("/diagnostico");
    await page.getByRole("button", { name: "Continuar en WhatsApp" }).click();
    await expect(page.getByText("Escribe tu nombre.")).toBeVisible();
    const opened = await page.evaluate(() => (window as unknown as { __opened: string[] }).__opened);
    expect(opened).toHaveLength(0);
  });

  test("envío válido abre WhatsApp con nombre, solución y origen, y registra generate_lead una vez", async ({ page }) => {
    await page.route(/googletagmanager\.com|google-analytics\.com/, (r) => r.abort());
    await page.addInitScript(() => {
      (window as unknown as { __opened: string[] }).__opened = [];
      window.open = ((url: string) => {
        (window as unknown as { __opened: string[] }).__opened.push(String(url));
        return {} as Window;
      }) as typeof window.open;
    });
    await page.goto("/diagnostico?solucion=Google%20Ads&utm_source=meta&utm_campaign=prueba");
    const form = page.locator("#contenido form").first();
    await expect(form.getByLabel("¿Qué necesitas?")).toHaveValue("Google Ads");
    await form.getByLabel("Nombre").fill("Ana Prueba");
    await form.getByLabel("Negocio o empresa").fill("Constructora Demo");
    await form.getByRole("button", { name: "Continuar en WhatsApp" }).click();

    await expect(page.getByTestId("lead-success")).toBeVisible();
    const opened = await page.evaluate(() => (window as unknown as { __opened: string[] }).__opened);
    expect(opened).toHaveLength(1);
    const url = new URL(opened[0]);
    expect(url.hostname).toBe("wa.me");
    expect(url.pathname).toBe("/525660213375");
    const text = url.searchParams.get("text") ?? "";
    expect(text).toContain("Ana Prueba");
    expect(text).toContain("Constructora Demo");
    expect(text).toContain("Google Ads");
    expect(text).toContain("Origen: meta / prueba");

    const leads = await page.evaluate(() =>
      ((window as unknown as { dataLayer: ArrayLike<unknown>[] }).dataLayer || [])
        .map((e) => Array.from(e as ArrayLike<unknown>))
        .filter((e) => e[0] === "event" && e[1] === "generate_lead"),
    );
    expect(leads).toHaveLength(1);
  });

  test("API de leads sigue validando (422) y acepta honeypot sin guardar", async ({ request }) => {
    const bad = await request.post("/api/leads", { data: { name: "x" } });
    expect(bad.status()).toBe(422);
    const bot = await request.post("/api/leads", { data: { empresa_web: "spam" } });
    expect(bot.status()).toBe(200);
  });
});

test.describe("Planes con CTA directo a WhatsApp", () => {
  test("cada plan del sitio web abre WhatsApp con el plan escrito", async ({ page }) => {
    await page.goto("/diseno-paginas-web");
    const cta = page.getByRole("link", { name: "Lo quiero" }).first();
    const href = (await cta.getAttribute("href")) ?? "";
    expect(href).toContain("wa.me/525660213375");
    expect(decodeURIComponent(href)).toContain("Sitio corporativo");
  });
});

test.describe("Páginas de campaña (Meta)", () => {
  for (const [slug, plan] of [
    ["pagina-web", "Landing Page Express"],
    ["tienda-en-linea", "Tienda Shopify"],
    ["anuncios", "Crecimiento"],
    ["presencia-digital", "Presencia digital"],
  ]) {
    test(`/lp/${slug} carga, es noindex y sus planes abren WhatsApp`, async ({ page }) => {
      const res = await page.goto(`/lp/${slug}`);
      expect(res?.status()).toBe(200);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      const links = page.locator('a[href*="wa.me/525660213375"]');
      expect(await links.count()).toBeGreaterThan(3);
      const hrefs = await links.evaluateAll((els) => els.map((e) => decodeURIComponent((e as HTMLAnchorElement).href)));
      expect(hrefs.some((h) => h.includes(plan))).toBe(true);
    });
  }

  test("/lp/no-existe responde 404", async ({ request }) => {
    const res = await request.get("/lp/no-existe");
    expect(res.status()).toBe(404);
  });
});
