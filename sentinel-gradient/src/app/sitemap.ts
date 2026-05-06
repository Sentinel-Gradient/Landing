import type { MetadataRoute } from "next";
import { absoluteUrl, siteRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...siteRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: route.priority,
    })),
    {
      url: absoluteUrl("/documents/sentinel-gradient-capability-statement.pdf"),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];
}
