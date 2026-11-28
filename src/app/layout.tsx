import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "./ThemeProvider";
import AuthProvider from "./AuthProvider";
import { Analytics } from "@vercel/analytics/next";
import { AttributionCapture } from "@/components/contact/AttributionCapture";
import { FloatingContact } from "@/components/contact/FloatingContact";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://xpertasocial.com"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-bg-primary text-text-primary min-h-dvh flex flex-col">
        <ThemeProvider>
          <AuthProvider>
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
