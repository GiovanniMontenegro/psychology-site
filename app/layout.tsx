import type { Metadata } from "next";
import "./globals.css";
import { StructuredData } from "@/components/structured-data";
import { siteContent } from "@/data/site-content";

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.seo.siteUrl),
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  keywords: siteContent.seo.keywords,
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    url: "/",
    siteName: siteContent.professional.name,
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: `${siteContent.professional.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: ["/android-chrome-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
