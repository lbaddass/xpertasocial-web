import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "./ThemeProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { MetaPixel, MetaPixelNoscript } from "@/components/MetaPixel";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/config/site";
import "./globals.css";

// Identidad tipográfica de XpertaSocial: Space Grotesk (texto) + IBM Plex Mono (etiquetas).
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "XpertaSocial | Publicidad, sitios web y posicionamiento conectados",
    template: "%s | XpertaSocial",
  },
  description:
    "Google Ads, Meta Ads, Amazon Ads, sitios web, tiendas en línea y SEO, GEO y AEO integrados en un solo sistema de ventas medible. Ciudad de México.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager — IDs existentes. Se migran a variables de entorno y Consent Mode en la Sesión 4. */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5PCNSH54');`}
        </Script>
        <Script id="ga-src" strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-Y4VM4XNER6"></Script>
        <Script id="ga-inline" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y4VM4XNER6');
          `}
        </Script>
        <MetaPixel />
      </head>
      <body
        className={`${grotesk.variable} ${plexMono.variable} antialiased min-h-dvh flex flex-col`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5PCNSH54"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <MetaPixelNoscript />
        <ThemeProvider>
          <GoogleAnalytics />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
