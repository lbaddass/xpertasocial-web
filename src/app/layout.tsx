import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
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
  title: "José Luis García Orobio – Growth Engineer",
  description:
    "Growth Engineer, Full-Stack Automation & AI Systems Architect. I design, build, and deploy systems that automate revenue, scale operations, and turn AI into real product infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${grotesk.variable} ${plexMono.variable} antialiased bg-[#05060b] text-techWhite selection:bg-signalRed selection:text-white`}>
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#05060b]/80 backdrop-blur-xl h-16 flex items-center justify-between px-6 md:px-10 lg:px-16">
          <div className="font-mono text-xs md:text-sm tracking-[0.3em] font-semibold text-techWhite">
            XPERTA<span className="text-signalRed">SOCIAL</span> / JOSE LUIS G.O.
          </div>
          <div className="flex items-center gap-4 md:gap-6 text-[11px] md:text-xs font-mono text-techWhite/70">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-techCyan transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
