import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site";

const capabilityAreas = [
  {
    title: "Applied Machine Learning Research",
    description:
      "Custom AI and machine learning model development for classification, prediction, optimization, and operational decision support. We focus on practical systems that turn complex data into measurable results.",
    tags: ["ML", "Predictive Analytics", "Model Evaluation", "Optimization"],
  },
  {
    title: "Computer Vision & Sensor Intelligence",
    description:
      "Computer vision and sensor-based intelligence for real-world assistive technology, object detection, and low-latency perception workflows designed for complex environments.",
    tags: ["Computer Vision", "Sensors", "Detection", "Edge Performance"],
  },
  {
    title: "Natural Language Processing Applications",
    description:
      "NLP systems and language interfaces that help organizations extract, structure, and act on domain-specific information with clear evaluation criteria and deployment constraints.",
    tags: ["NLP", "Language Systems", "Information Extraction", "Evaluation"],
  },
  {
    title: "Autonomous Systems & Decision Algorithms",
    description:
      "Autonomous systems and decision algorithms that support automation, anomaly response, and high-stakes operational workflows where performance must remain understandable and testable.",
    tags: ["Autonomy", "Decision Algorithms", "Anomaly Detection", "Testing"],
  },
  {
    title: "Data Engineering & Intelligent Automation",
    description:
      "Data pipelines, workflow automation, and decision support platforms that connect applied research prototypes to secure, usable systems for government and commercial organizations.",
    tags: ["Data Engineering", "Automation", "Decision Support", "Deployment"],
  },
  {
    title: "Research Prototyping & Applied R&D",
    description:
      "Applied R&D programs that move from empirical prototypes to deployable systems, including model optimization, testing, validation, and transition planning for high-stakes environments.",
    tags: ["Applied R&D", "Prototyping", "Validation", "Secure AI"],
  },
];

const readinessSignals = [
  "Proven experience developing advanced AI systems for real-world assistive technology applications.",
  "Specialized expertise in computer vision, machine learning, and intelligent automation.",
  "Deployable prototypes designed for low latency, edge-device performance, and measurable operational value.",
];

export const revalidate = 86400;

export async function generateMetadata() {
  return buildMetadata({
    route: "/capabilities",
    title: "Our Expertise — AI, Machine Learning, Computer Vision & Applied R&D",
    description:
      "Explore Sentinel Gradient's AI, machine learning, computer vision, NLP, autonomous systems, data engineering, and applied R&D capabilities.",
  });
}

export default function CapabilitiesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Our Expertise", item: absoluteUrl("/capabilities") },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: absoluteUrl("/capabilities"),
    areaServed: "United States",
    serviceType: capabilityAreas.map((area) => area.title),
  };

  return (
    <div className="relative overflow-hidden">
      <div className="hero-aurora" aria-hidden="true" />
      <main
        id="main-content"
        className="relative mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-6 py-24 sm:px-10 lg:px-16"
      >
        <Header />

        <StructuredData id="capabilities-breadcrumbs" data={breadcrumbSchema} />
        <StructuredData id="capabilities-services" data={serviceSchema} />

        {/* Hero */}
        <section className="mt-16 flex flex-col gap-10 md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-6 reveal-up">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-azure-subtle">
              Capabilities Portfolio
            </p>
            <h1 className="text-4xl leading-tight sm:text-5xl">Our Expertise.</h1>
            <p className="text-lg leading-relaxed text-gray-azure">
              Sentinel Gradient LLC develops advanced artificial intelligence and machine learning systems for government and
              commercial organizations. Our teams help clients solve complex problems, improve decisions, automate critical
              workflows, and turn data into measurable results. Download our{" "}
              <Link
                href="/documents/sentinel-gradient-capability-statement.pdf"
                className="underline decoration-sg-light-azure hover:text-off-white"
              >
                capability statement
              </Link>{" "}
              or connect with our{" "}
              <Link href="/contracts" className="underline decoration-sg-light-azure hover:text-off-white">
                contracting team
              </Link>{" "}
              for tailored teaming discussions.
            </p>
          </div>

          <Card className="reveal-up reveal-delay-1 md:max-w-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-azure-subtle">
              Evaluation Focus
            </p>
            <ul className="sg-bullet-list mt-4 space-y-3 text-sm text-gray-azure">
              <li>
                Custom AI and machine learning model development.
              </li>
              <li>
                Predictive analytics, forecasting, and decision support.
              </li>
              <li>
                Model optimization, testing, and deployment.
              </li>
            </ul>
          </Card>
        </section>

        {/* Technical Competencies (normal dark canvas, no alt background) */}
        <section className="mt-24 space-y-8">
          <div className="reveal-up">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gray-azure-subtle">
              Technical Competencies
            </p>
            <h2 className="text-3xl sm:text-4xl">Precision-led research, ready for operational scrutiny.</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-azure">
              Each capability tile distills the engineering focus areas we bring to partners. The work is grounded in measurable
              benchmarks, collaborative workflows, and practical solutions that create value beyond research for its own sake.
            </p>
          </div>

          <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {capabilityAreas.map((area, index) => (
              <li key={area.title}>
                <Card className={`reveal-up ${index % 3 === 1 ? "reveal-delay-1" : index % 3 === 2 ? "reveal-delay-2" : ""}`}>
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl text-off-white">{area.title}</h3>
                    <p className="text-base leading-relaxed text-gray-azure">{area.description}</p>
                  </div>
                  {area.tags?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2" aria-label="Key technologies and themes">
                      {area.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-gray-azure"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </Card>
              </li>
            ))}
          </ul>
        </section>

        {/* Readiness Signals */}
        <Card className="mt-24 space-y-6">
          <h2 className="text-3xl">Readiness Signals We Deliver</h2>
          <p className="max-w-3xl text-base leading-relaxed text-gray-azure">
            Partners count on Sentinel Gradient for analytic depth, practical implementation, and clear evidence of technical
            progress. Our work emphasizes direct collaboration, deployable prototypes, and measured performance.
          </p>
          <ul className="sg-bullet-list space-y-3 text-base text-gray-azure">
            {readinessSignals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div>
            <ButtonLink
              href="/contact"
              eventName="nav_internal_click"
              eventParams={{ destination: "contact", location: "capabilities_readiness" }}
            >
              Learn More / Contact Us
            </ButtonLink>
          </div>
        </Card>

        <Footer />
      </main>
    </div>
  );
}
