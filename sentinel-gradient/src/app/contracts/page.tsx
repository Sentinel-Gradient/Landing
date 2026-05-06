import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site";

const companyData = [
  { label: "SAM Status", value: "Active Registration" },
  { label: "UEI", value: "LZQMAV479P59" },
  { label: "CAGE Code", value: "178C5" },
  { label: "Business Type", value: "Minority-Owned Small Business" },
];

const naicsCodes = [
  { code: "NAICS 541511", description: "Custom Computer Programming Services" },
  {
    code: "NAICS 541715",
    description:
      "R&D in the Physical, Engineering, and Life Sciences (except Nanotechnology and Biotechnology)",
  },
  { code: "NAICS 541512", description: "Computer Systems Design Services" },
];

const researchHighlights = [
  "Supported NIH-funded research as a subcontractor developing AI vision systems for ultra-low vision assistive technology.",
  "Selected as a Phase 1 winner in the NIH OligoTox Open Data Challenge for AI-based toxicity prediction.",
  "Built real-time detection models for everyday objects in complex indoor environments.",
  "Delivered deployable prototypes designed for low latency and edge-device performance.",
];

const appliedResearchAreas = [
  "Custom AI and machine learning model development",
  "Predictive analytics and forecasting systems",
  "Computer vision and sensor-based intelligence",
  "Autonomous systems and decision algorithms",
  "Data engineering and intelligent automation",
  "Natural language processing applications",
  "Model optimization, testing, and deployment",
  "Secure AI solutions for high-stakes environments",
];

export const revalidate = 86400;

export async function generateMetadata() {
  return buildMetadata({
    route: "/contracts",
    title: "Contracts & SBIR/STTR AI Partner — Sentinel Gradient",
    description:
      "Partner with Sentinel Gradient LLC, an active SAM-registered AI and machine learning small business serving government and commercial organizations.",
  });
}

export default function ContractsPage() {
  const contractsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Ready for Collaboration",
    url: absoluteUrl("/contracts"),
    about: {
      "@type": "Organization",
      name: siteConfig.name,
      identifier: [
        { "@type": "PropertyValue", name: "UEI", value: "LZQMAV479P59" },
        { "@type": "PropertyValue", name: "CAGE Code", value: "178C5" },
      ],
      naics: siteConfig.naics,
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
        <StructuredData id="contracts-schema" data={contractsSchema} />

        <section className="mt-16 flex flex-col gap-10 md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-6 reveal-up">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-azure-subtle">
              Government & Partnerships
            </p>
            <h1 className="text-4xl leading-tight sm:text-5xl">Ready for Collaboration.</h1>
            <p className="text-lg leading-relaxed text-gray-azure">
              Sentinel Gradient LLC develops artificial intelligence and machine learning systems for government and commercial
              organizations. We help clients solve complex problems, improve decisions, automate critical workflows, and turn
              data into measurable results while coordinating closely with{" "}
              <Link href="/contact" className="underline decoration-sg-light-azure hover:text-off-white">
                contracting officers and acquisition leads
              </Link>
              .
            </p>
          </div>
          <Card className="reveal-up reveal-delay-1 max-w-md text-sm text-gray-azure">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-azure-subtle">
              Contract-Ready Signals
            </p>
            <ul className="sg-bullet-list mt-4 space-y-3">
              <li>
                Active SAM registration with UEI and CAGE identifiers available for rapid review.
              </li>
              <li>
                Agile small business able to move quickly and work directly with clients.
              </li>
              <li>
                Practical AI solutions built for measurable value, deployment readiness, and high-stakes environments.
              </li>
            </ul>
          </Card>
        </section>

        <section className="mt-24 space-y-10">
          <div className="reveal-up space-y-4">
            <h2 className="text-3xl">SBIR/STTR Focus</h2>
            <p className="max-w-3xl text-base leading-relaxed text-gray-azure">
              Sentinel Gradient is a research-native AI and machine learning small business positioned for federal R&amp;D and
              SBIR/STTR collaboration. Our programs emphasize applied research, model optimization, intelligent automation, and
              deployable prototypes that bridge scientific innovation and operational capability.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="text-gray-azure">
              <h3 className="text-2xl text-off-white">Contract Identifiers</h3>
              <p className="text-sm uppercase tracking-[0.28em] text-gray-azure-subtle">SAM active registration</p>
              <dl className="mt-4 grid gap-3 text-base leading-relaxed">
                {companyData.map((item) => (
                  <div key={item.label}>
                    <dt className="font-semibold text-off-white">{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
            <Card className="text-gray-azure">
              <h3 className="text-2xl text-off-white">NAICS Codes</h3>
              <p className="text-sm uppercase tracking-[0.28em] text-gray-azure-subtle">Registered business categories</p>
              <ul className="mt-4 space-y-3 text-base leading-relaxed">
                {naicsCodes.map((item) => (
                  <li key={item.code}>
                    <span className="font-semibold text-off-white">{item.code}</span>
                    <span className="block text-gray-azure">{item.description}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="text-gray-azure">
              <h3 className="text-2xl text-off-white">Applied Research Areas</h3>
              <p className="text-sm uppercase tracking-[0.28em] text-gray-azure-subtle">Core competencies</p>
              <ul className="sg-bullet-list mt-4 space-y-3 text-base leading-relaxed">
                {appliedResearchAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </Card>
            <Card className="text-gray-azure">
              <h3 className="text-2xl text-off-white">Research Lineage</h3>
              <p className="text-sm uppercase tracking-[0.28em] text-gray-azure-subtle">Past performance</p>
              <ul className="sg-bullet-list mt-4 space-y-3 text-base leading-relaxed">
                {researchHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <Card className="mt-24 flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/5 p-10 shadow-2xl backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl">Download Capability Statement</h2>
            <p className="text-base leading-relaxed text-gray-azure">
              Access our latest company data, differentiators, core competencies, and past performance details prepared for
              partner and contracting discussions.
            </p>
          </div>
          <ButtonLink
            href="/documents/sentinel-gradient-capability-statement.pdf"
            variant="light"
            target="_blank"
            rel="noopener noreferrer"
            download
            eventName="capability_pdf_download"
            eventParams={{ source: "contracts_page" }}
          >
            Capability Statement (PDF)
          </ButtonLink>
        </Card>

        <Card className="mt-24 space-y-6 rounded-3xl border border-white/12 bg-white/5 p-10 shadow-2xl backdrop-blur">
          <div className="space-y-4">
            <h2 className="text-3xl">Send a Contracting Inquiry</h2>
            <p className="max-w-3xl text-base leading-relaxed text-gray-azure">
              Email{" "}
              <a
                href="mailto:bhavya@sentinelgradient.com"
                className="font-semibold text-off-white underline decoration-sg-light-azure"
              >
                bhavya@sentinelgradient.com
              </a>{" "}
              with program details, acquisition timelines, and teaming needs, or use the form below to prepare an inquiry.
            </p>
          </div>
          <ContactForm
            location="contracts_page"
            submitLabel="Send Inquiry"
            subject="Sentinel Gradient Contracting Inquiry"
            buttonVariant="light"
          />
        </Card>

        <Footer />
      </main>
    </div>
  );
}
