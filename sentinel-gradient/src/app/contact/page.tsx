import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const revalidate = 86400;

export async function generateMetadata() {
  return buildMetadata({
    route: "/contact",
    title: "Contact Sentinel Gradient — AI Assurance & Interpretability Experts",
    description:
      "Reach Sentinel Gradient LLC to discuss artificial intelligence, machine learning, computer vision, NLP, and applied R&D engagements.",
  });
}

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: absoluteUrl("/contact"),
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        ...siteConfig.address,
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      <div className="hero-aurora" aria-hidden="true" />
      <main
        id="main-content"
        className="relative mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-6 py-24 sm:px-10 lg:px-16"
      >
        <Header />
        <StructuredData id="contact-schema" data={contactSchema} />

        <section className="mt-16 flex flex-col gap-8 md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-6 reveal-up">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-azure-subtle">Collaboration Inquiries</p>
            <h1 className="text-4xl leading-tight sm:text-5xl">Contact Sentinel Gradient.</h1>
            <p className="text-lg leading-relaxed text-gray-azure">
              Share the program, research initiative, or technical evaluation you are advancing. We respond with alignment notes,
              points of contact, and recommended next steps so engagements begin with clarity. For company data and contracting
              context, review our{" "}
              <Link href="/contracts" className="underline decoration-sg-light-azure hover:text-off-white">
                collaboration readiness overview
              </Link>
              .
            </p>
          </div>
          <Card className="max-w-md space-y-4 text-sm text-gray-azure">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-azure-subtle">Engagement Signals</p>
            <ul className="sg-bullet-list space-y-3">
              <li>
                Direct leadership contact for AI, machine learning, and applied R&amp;D discussions.
              </li>
              <li>
                Charlottesville-based small business with active SAM registration.
              </li>
              <li>
                Provide mission context so we can align scope, technical focus, and next steps from the outset.
              </li>
            </ul>
          </Card>
        </section>

        <Card className="mt-24 space-y-6 rounded-3xl border border-white/12 bg-white/5 p-10 shadow-2xl backdrop-blur">
          <div className="space-y-4">
            <h2 className="text-3xl">Coordinate with Sentinel Gradient</h2>
            <p className="max-w-3xl text-base leading-relaxed text-gray-azure">
              Email{" "}
              <a
                href="mailto:info@sentinelgradient.com"
                className="font-semibold text-off-white underline decoration-sg-light-azure"
              >
                info@sentinelgradient.com
              </a>{" "}
              with mission context, technology focus, and desired timelines, or use the form below to prepare a structured inquiry.
            </p>
          </div>
          <ContactForm location="contact_page" />
        </Card>

        <div className="mt-20 space-y-6">
          <h2 className="text-3xl">Additional Resources</h2>
          <div className="flex flex-wrap gap-4 text-gray-azure">
            <ButtonLink
              href="/capabilities"
              className="inline-flex"
              eventName="nav_internal_click"
              eventParams={{ destination: "capabilities", location: "contact_resources" }}
            >
              Review Capabilities
            </ButtonLink>
            <ButtonLink
              href="mailto:info@sentinelgradient.com"
              variant="light"
              eventName="contact_email_click"
              eventParams={{ location: "contact_resources" }}
            >
              Email Sentinel Gradient
            </ButtonLink>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
