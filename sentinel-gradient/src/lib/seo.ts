import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

type SeoOptions = {
  route: string;
  title: string;
  description: string;
  imageSlug?: string;
};

export function buildMetadata({ route, title, description, imageSlug }: SeoOptions): Metadata {
  const normalizedRoute = route.startsWith("/") ? route : `/${route}`;
  const isHome = normalizedRoute === "/" || normalizedRoute === "//";
  const canonicalUrl = absoluteUrl(isHome ? "/" : normalizedRoute);
  const slug = imageSlug ?? (isHome ? "home" : normalizedRoute.replace(/^\//, ""));
  const ogImage = absoluteUrl(`/og/${slug}.png`);

  return {
    title,
    description,
    keywords: [
      "Sentinel Gradient",
      "AI research company",
      "machine learning systems",
      "computer vision",
      "intelligent automation",
      "applied R&D",
      "Charlottesville Virginia AI",
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      siteName: siteConfig.shortName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.shortName} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}
