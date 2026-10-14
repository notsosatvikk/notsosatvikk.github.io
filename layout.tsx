import type { Metadata, Viewport } from "next";
import { siteDescription, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Satvik Gupta | Product, Analytics and AI",
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Satvik Gupta | Product, Analytics and AI",
    description: siteDescription,
    siteName: "Satvik Gupta",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Satvik Gupta. I find the signal. Then I build the next move." }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Satvik Gupta | Product, Analytics and AI",
    description: siteDescription,
    images: ["/og-image.webp"]
  },
  icons: { icon: "/icon.svg" },
  robots: { index: true, follow: true },
  category: "portfolio"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#efe6d6" },
    { media: "(prefers-color-scheme: dark)", color: "#812d3b" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
