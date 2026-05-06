import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import {
  Montserrat,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", rel: "icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/android-chrome-192x192.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  title: {
    default: "Sentinel Gradient - AI and Machine Learning Research",
    template: "%s | Sentinel Gradient",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.shortName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SentinelGradient",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased bg-sg-night text-off-white`}
      >
        <a
          href="#main-content"
          className="skip-to-content"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
        {googleAnalyticsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}', { page_path: window.location.pathname });
            `,
              }}
            />
          </>
        ) : null}
      </body>
    </html>
  );
}
