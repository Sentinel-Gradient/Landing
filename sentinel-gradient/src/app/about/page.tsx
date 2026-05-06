import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site";

const approachPillars = [
  "Develop AI and machine learning systems around measurable client problems and operational constraints.",
  "Prototype rapidly while preserving testing discipline, model evaluation, and deployment readiness.",
  "Build practical automation, computer vision, NLP, and decision support systems for real-world use.",
  "Work directly with partners as an agile small business with active federal registration.",
];

const teamProfiles = [
  {
    name: "Bhavya Johar",
    role: "Co-Founder & CEO",
    bio: "Leads company strategy, partnerships, and program execution. Focused on applied AI systems that create measurable value for government and commercial organizations.",
    image: "/team/bhavya_pfp.jpeg",
  },
  {
    name: "Vedant Vajre",
    role: "Co-Founder & CTO",
    bio: "Owns technical direction and system architecture. Builds machine learning, automation, and decision-support prototypes designed for reliable deployment.",
    image: "/team/vedant_pfp.jpeg",
  },
];

export const revalidate = 86400;

export async function generateMetadata() {
  return buildMetadata({
    route: "/about",
    title: "About Sentinel Gradient - Virginia AI & Machine Learning Research",
    description:
      "Learn how Sentinel Gradient LLC develops artificial intelligence and machine learning systems for government and commercial organizations.",
  });
}

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: absoluteUrl("/about"),
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      address: {
        "@type": "PostalAddress",
        ...siteConfig.address,
      },
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
        <StructuredData id="about-schema" data={aboutSchema} />

        <section className="mt-16 flex flex-col gap-8 md:mt-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-6 reveal-up">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-azure-subtle">
              About Sentinel Gradient
            </p>
            <h1 className="text-4xl leading-tight sm:text-5xl">Research with Purpose.</h1>
            <p className="text-lg leading-relaxed text-gray-azure">
              We build artificial intelligence and machine learning systems that solve complex problems, improve decisions,
              automate critical workflows, and turn data into measurable results. Our focus is powerful technology that performs
              in real-world environments.
            </p>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <ButtonLink
              href="/documents/sentinel-gradient-capability-statement.pdf"
              variant="secondary"
              download
              target="_blank"
              rel="noopener noreferrer"
              eventName="capability_pdf_download"
              eventParams={{ source: "about_page" }}
            >
              Capability Statement
            </ButtonLink>
            <ButtonLink
              href="/contact"
              className="reveal-up reveal-delay-1"
              eventName="nav_internal_click"
              eventParams={{ destination: "contact", location: "about_hero" }}
            >
              Connect With Us
            </ButtonLink>
          </div>
        </section>

        <section className="mt-20 grid gap-12 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center">
          <div className="space-y-6 reveal-up">
            <h2 className="text-3xl">Mission, Expertise, and Credibility</h2>
            <p className="text-base leading-relaxed text-gray-azure">
              Sentinel Gradient LLC exists to help government and commercial organizations apply advanced AI where decisions,
              automation, and operational outcomes matter. Our core work spans custom model development, predictive analytics,
              computer vision, autonomous systems, data engineering, NLP applications, and applied R&amp;D. Our company data and
              federal registration details are available in the{" "}
              <Link href="/contracts" className="underline decoration-sg-light-azure hover:text-off-white">
                collaboration readiness overview
              </Link>{" "}
              for partners evaluating teaming and contracting opportunities.
            </p>
            <p className="text-base leading-relaxed text-gray-azure">
              Our differentiators are direct: proven experience developing AI systems for real-world assistive technology,
              specialized expertise in computer vision and intelligent automation, and an agile operating model that keeps
              clients close to the technical work.
            </p>
            <ul className="sg-bullet-list space-y-3 text-base text-gray-azure">
              <li>
                Active SAM registration with UEI LZQMAV479P59 and CAGE Code 178C5.
              </li>
              <li>
                Past performance on NIH-funded assistive technology research and AI-based toxicity prediction.
              </li>
              <li>
                Deployable prototypes designed for low latency and edge-device performance.
              </li>
            </ul>
          </div>
          <Card
            className="relative flex h-full min-h-[320px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur reveal-up reveal-delay-1"
            role="img"
            aria-label="Abstract visualization of interconnected research gradients"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(31,151,193,0.25),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(37,103,138,0.35),transparent_60%)]" />
              <div className="absolute inset-6 rounded-3xl border border-white/15" />
              <div className="absolute inset-10 rounded-3xl border border-white/10" />
            </div>
            <div className="relative grid w-full max-w-sm gap-6">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-gray-azure">
                <p className="font-semibold text-off-white">Validated Pipelines</p>
                <p className="mt-2 leading-relaxed">
                  Model testing and deployment workflows connect datasets, metrics, and performance evidence.
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-gray-azure">
                <p className="font-semibold text-off-white">Benchmarks in Context</p>
                <p className="mt-2 leading-relaxed">
                  Real-world assistive technology and object-detection work informs practical evaluation constraints.
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-gray-azure">
                <p className="font-semibold text-off-white">Accountable Outcomes</p>
                <p className="mt-2 leading-relaxed">
                  Every prototype is oriented toward measurable value, decision support, and deployment readiness.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mt-24 space-y-8">
          <div className="reveal-up">
            <h2 className="text-3xl">Our Approach</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-azure">
              We stay grounded in disciplined applied research practices so partners can trust both the technical direction and
              the implementation path.
            </p>
          </div>
          <ul className="grid gap-6 md:grid-cols-2">
            {approachPillars.map((pillar) => (
              <li key={pillar} className="reveal-up">
                <Card className="text-base leading-relaxed text-gray-azure">{pillar}</Card>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-24 space-y-10">
          <div className="reveal-up">
            <h2 className="text-3xl">Team Leadership</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-azure">
              Co-founders translating applied AI research into deployable capability.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {teamProfiles.map((profile, index) => (
              <Card key={profile.name} className={index === 1 ? "reveal-up reveal-delay-1" : "reveal-up"}>
                <div className="flex items-center gap-6">
                  <div className="relative size-24 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white/10 aspect-square">
                    <Image
                      src={profile.image}
                      alt={`${profile.name} headshot`}
                      fill
                      className="object-cover"
                      sizes="96px"
                      priority={index === 0}
                    />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-off-white">{profile.name}</p>
                    <p className="text-sm uppercase tracking-[0.25em] text-gray-azure-subtle">{profile.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed text-gray-azure">{profile.bio}</p>
              </Card>
            ))}
          </div>
        </section>

        <Card className="mt-24 flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/5 p-10 shadow-2xl backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl">Download Our Capability Statement</h2>
            <p className="text-base leading-relaxed text-gray-azure">
              Review our company data, differentiators, core competencies, and past performance summaries prepared for partner
              and contracting discussions.
            </p>
          </div>
          <ButtonLink
            href="/documents/sentinel-gradient-capability-statement.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download PDF
          </ButtonLink>
        </Card>

        <Footer />
      </main>
    </div>
  );
}
