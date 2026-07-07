import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "@/data/site-content";

export const metadata: Metadata = {
  title: `${siteContent.professional.name} | Psicologa`,
  description: siteContent.seo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteContent.professional.name} | Psicologa`,
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
