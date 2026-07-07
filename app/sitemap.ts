import type { MetadataRoute } from "next";
import { siteContent } from "@/data/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteContent.seo.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
