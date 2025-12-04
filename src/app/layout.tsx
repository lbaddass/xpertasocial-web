import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

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

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#interests", label: "Focus" },
  { href: "#tech-stack", label: "Stack" },
  { href: "#projects", label: "Systems" },
  { href: "#playbook", label: "Playbook" },
  { href: "#contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "XpertaSocial | Growth Engineering Systems",
  description: "Automated revenue infrastructure. Not an agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${grotesk.variable} ${plexMono.variable} antialiased bg-carbon text-techWhite selection:bg-neonBlue selection:text-black`}>
        <Navbar />
        <main className="pt-16 min-h-screen relative">
          <div className="fixed inset-0 z-[-1] opacity-20 bg-grid-pattern pointer-events-none" />
          {children}
        </main>
      </body>
    </html>
  );
}
