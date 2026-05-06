export const siteConfig = {
  name: "Sentinel Gradient LLC",
  shortName: "Sentinel Gradient",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sentinelgradient.com",
  description:
    "Sentinel Gradient LLC develops artificial intelligence and machine learning systems for government and commercial organizations.",
  email: "bhavya@sentinelgradient.com",
  phone: "+1-571-320-8885",
  address: {
    streetAddress: "218 14th St. NW",
    addressLocality: "Charlottesville",
    addressRegion: "VA",
    postalCode: "22903",
    addressCountry: "US",
  },
  naics: ["541511", "541512", "541715"],
  sameAs: ["https://www.linkedin.com/company/sentinel-gradient/"],
};

export const siteRoutes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/capabilities", priority: 0.9 },
  { path: "/contracts", priority: 0.9 },
  { path: "/contact", priority: 0.8 },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
