import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import { ThemeProvider } from "./ThemeProvider";
import AuthProvider from "./AuthProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";
import { AttributionCapture } from "@/components/contact/AttributionCapture";
import { FloatingContact } from "@/components/contact/FloatingContact";
import { site } from "@/config/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site?.url || process.env.NEXT_PUBLIC_SITE_URL || "https://xpertasocial.com"),
  title: {
    default: "XpertaSocial | Publicidad, sitios web y posicionamiento conectados",
    template: "%s | XpertaSocial",
  },
  description:
    "Amazon Ads, Google Ads, sitios web, tiendas en línea y SEO, GEO y AEO integrados en un solo sistema de ventas medible. Ciudad de México.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${spaceGrotesk.variable} ${grotesk.variable} ${plexMono.variable} ${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Tag Manager */}
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
      </head>
      <body className="antialiased min-h-dvh flex flex-col bg-bg-primary text-text-primary">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5PCNSH54"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ThemeProvider>
          <AuthProvider>
            <GoogleAnalytics />
            {children}
          </AuthProvider>
        </ThemeProvider>
        <AttributionCapture />
        <FloatingContact />
        <Analytics />
      </body>
    </html>
  );
}
