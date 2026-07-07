import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "@/data/site-content";

export const metadata: Metadata = {
  title: `${siteContent.professional.name} | Psicoterapia sistemico-relazionale ed EMDR`,
  description: siteContent.seo.description,
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: `${siteContent.professional.name} | Psicoterapia sistemico-relazionale ed EMDR`,
    description: siteContent.seo.description,
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
