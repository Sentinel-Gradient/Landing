import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24" role="contentinfo">
      <div className="gradient-divider mb-8" aria-hidden="true" />
      <div className="footer-line border-t border-white/10 pt-8 text-sm text-gray-azure-muted">
        <span>&copy; {currentYear} Sentinel Gradient LLC</span>
        <span className="footer-dot" aria-hidden="true">•</span>
        <span>Charlottesville, Virginia</span>
        <span className="footer-dot" aria-hidden="true">•</span>
        <Link href="mailto:info@sentinelgradient.com">info@sentinelgradient.com</Link>
        <span className="footer-dot" aria-hidden="true">•</span>
        <nav aria-label="Footer navigation" className="footer-nav">
          <Link href="/about" className="transition-colors hover:text-off-white">
            About
          </Link>
          <Link href="/capabilities" className="transition-colors hover:text-off-white">
            Capabilities
          </Link>
          <Link href="/contracts" className="transition-colors hover:text-off-white">
            Contracts
          </Link>
          <Link href="/contact" className="transition-colors hover:text-off-white">
            Contact
          </Link>
        </nav>
        <span className="footer-dot" aria-hidden="true">•</span>
        <Link
          href="https://www.linkedin.com/company/sentinel-gradient/"
          aria-label="Sentinel Gradient LinkedIn"
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 text-off-white transition-colors hover:border-white hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5zM3 9.75h3.95V21H3zM9.5 9.75h3.78v1.54h.05c.52-.98 1.8-2.02 3.7-2.02 3.96 0 4.69 2.61 4.69 6v6.72h-3.95v-5.96c0-1.42-.03-3.24-1.98-3.24-1.98 0-2.29 1.55-2.29 3.14V21H9.5z"
            />
          </svg>
        </Link>
      </div>
    </footer>
  );
}
