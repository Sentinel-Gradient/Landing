import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const initiatives = [
  {
    title: "Research",
    description:
      "Developing applied R&D programs that turn AI and machine learning concepts into measurable results.",
    icon: "/globe.svg",
  },
  {
    title: "Development",
    description:
      "Engineering computer vision, NLP, automation, and decision-support prototypes for real-world environments.",
    icon: "/window.svg",
  },
  {
    title: "Consulting",
    description:
      "Working directly with partners to define practical AI solutions, evaluation plans, and deployment paths.",
    icon: "/file.svg",
  },
];

const proofPoints = [
  { label: "SAM status", value: "Active" },
  { label: "UEI", value: "LZQMAV479P59" },
  { label: "CAGE", value: "178C5" },
  { label: "NAICS", value: "541511 / 541512 / 541715" },
];

const engagementPath = [
  {
    step: "01",
    title: "Frame the decision",
    description: "Define the operational problem, available data, constraints, and measurable success criteria.",
  },
  {
    step: "02",
    title: "Prototype the system",
    description: "Build applied AI, computer vision, automation, NLP, or decision-support capabilities around the use case.",
  },
  {
    step: "03",
    title: "Validate performance",
    description: "Test, optimize, and document model behavior so partners can evaluate readiness with evidence.",
  },
];

export const revalidate = 86400;

export async function generateMetadata() {
  return buildMetadata({
    route: "/",
    title: "AI & Machine Learning Research Partner",
    description:
      "Sentinel Gradient LLC is a Virginia AI and machine learning research firm serving government and commercial organizations.",
    imageSlug: "home",
  });
}

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    naics: siteConfig.naics,
    sameAs: siteConfig.sameAs,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.shortName,
    url: siteConfig.url,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
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

        <StructuredData id="organization-schema" data={organizationSchema} />
        <StructuredData id="website-schema" data={websiteSchema} />

        <section className="mt-16 grid gap-10 md:mt-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-start">
          <div className="max-w-2xl space-y-6 reveal-up">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-azure-subtle">
              Applied AI &amp; Machine Learning Systems
            </p>
            <h1 className="text-4xl leading-tight sm:text-5xl">
              Advancing Machine Intelligence Through Rigorous Research.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-azure">
              Sentinel Gradient LLC develops advanced artificial intelligence and machine learning systems for government and
              commercial organizations. We help clients solve complex problems, improve decisions, automate critical workflows,
              and turn data into measurable results.
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-gray-azure">
              Start with our{" "}
              <Link href="/capabilities" className="underline decoration-sg-light-azure hover:text-off-white">
                technical capabilities
              </Link>{" "}
              , review the{" "}
              <Link
                href="/documents/sentinel-gradient-capability-statement.pdf"
                className="underline decoration-sg-light-azure hover:text-off-white"
              >
                capability statement
              </Link>{" "}
              , or evaluate{" "}
              <Link href="/contracts" className="underline decoration-sg-light-azure hover:text-off-white">
                contracting readiness
              </Link>
              .
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ButtonLink
                href="/capabilities"
                className="reveal-up reveal-delay-1"
                eventName="nav_internal_click"
                eventParams={{ destination: "capabilities", location: "home_hero" }}
              >
                Explore Our Research
              </ButtonLink>
              <ButtonLink
                href="/contact"
                variant="secondary"
                className="reveal-up reveal-delay-2"
                eventName="nav_internal_click"
                eventParams={{ destination: "contact", location: "home_hero" }}
              >
                Contact for Collaboration
              </ButtonLink>
            </div>
          </div>

          <div className="relative reveal-up reveal-delay-1">
            <div className="data-panel" aria-label="Sentinel Gradient applied AI workflow">
              <div className="data-panel-grid" aria-hidden="true" />
              <div className="relative space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-azure-subtle">
                    System Focus
                  </p>
                  <h2 className="mt-3 text-3xl">From applied research to deployable intelligence.</h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {["Computer vision", "Predictive analytics", "Intelligent automation", "Decision algorithms"].map(
                    (item) => (
                      <div key={item} className="rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-gray-azure">
                        <span className="block h-1 w-10 rounded-full bg-sg-light-azure" aria-hidden="true" />
                        <span className="mt-3 block">{item}</span>
                      </div>
                    ),
                  )}
                </div>
                <div className="rounded-2xl border border-white/15 bg-sg-night/60 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-gray-azure-subtle">Public company data</p>
                  <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                    {proofPoints.map((point) => (
                      <div key={point.label}>
                        <dt className="text-xs uppercase tracking-[0.2em] text-gray-azure-subtle">{point.label}</dt>
                        <dd className="mt-1 text-sm font-semibold text-off-white">{point.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="mt-16 rounded-3xl border border-[rgba(31,151,193,0.45)] bg-[rgba(31,151,193,0.10)] p-6 shadow-2xl backdrop-blur reveal-up md:p-8"
          aria-label="Highlighted Sentinel Gradient experience"
        >
          <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-azure-subtle">
                Highlighted experience
              </p>
              <h2 className="mt-3 text-3xl">NIH-funded GALVAT support.</h2>
            </div>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-gray-azure">
                Sentinel Gradient supported Applied Universal Dynamics Corporation as a subcontractor, developing AI vision
                capabilities for ultra-low vision assistive technology.
              </p>
              <Link
                href="/contracts"
                className="inline-flex text-sm font-semibold text-off-white underline decoration-sg-light-azure underline-offset-4 hover:text-[#1f97c1]"
              >
                View contracting readiness
              </Link>
            </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="mt-24 grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
          aria-label="Sentinel Gradient services"
        >
          {initiatives.map((item, index) => (
            <Card
              key={item.title}
              className={index === 1 ? "reveal-up reveal-delay-1" : index === 2 ? "reveal-up reveal-delay-2" : "reveal-up"}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5">
                <Image
                  src={item.icon}
                  alt=""
                  width={28}
                  height={28}
                  style={{ filter: "invert(1) brightness(1.8)" }}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-2xl font-semibold text-off-white">{item.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-azure">{item.description}</p>
            </Card>
          ))}
        </section>

        <section className="mt-24 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="reveal-up">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gray-azure-subtle">
              Engagement Path
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">A clear route from problem framing to validated capability.</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-azure">
              The site now mirrors how a partner evaluates us: understand the technical fit, review evidence, then open a
              focused collaboration discussion.
            </p>
          </div>
          <ol className="grid gap-4">
            {engagementPath.map((item, index) => (
              <li key={item.step} className={`process-row reveal-up ${index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""}`}>
                <span className="process-step">{item.step}</span>
                <div>
                  <h3 className="text-xl font-semibold text-off-white">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-azure">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <Card className="mt-24 grid gap-6 rounded-3xl border border-white/15 bg-white/5 p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl">Evaluate fit with our latest capability statement.</h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-azure">
              Review Sentinel Gradient&apos;s company overview, core competencies, differentiators, past performance, and contract
              identifiers in one concise PDF.
            </p>
          </div>
          <ButtonLink
            href="/documents/sentinel-gradient-capability-statement.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            eventName="capability_pdf_download"
            eventParams={{ source: "home_final_cta" }}
          >
            Download PDF
          </ButtonLink>
        </Card>

        <Footer />
      </main>
    </div>
  );
}
