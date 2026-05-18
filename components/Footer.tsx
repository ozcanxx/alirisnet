"use client"

import { useLang } from "@/lib/i18n"

function AlirisLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/aliris-logo.png"
      alt="Aliris Clinical Research Partner"
      height={40}
      style={{ height: "40px", width: "auto" }}
    />
  )
}

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  const links: [string, string][] = [
    [t.nav.services, "#services"],
    [t.nav.about,    "#about"],
    [t.nav.contact,  "#contact"],
  ]

  return (
    <footer className="bg-white border-t border-ink/[0.08]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center">
          <AlirisLogo />
        </div>

        {/* Nav */}
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-xs font-sans text-ink-soft hover:text-ink transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-sm"
            >
              {label}
            </a>
          ))}
          <a
            href="https://aliris.net"
            className="text-xs font-sans text-ink-soft hover:text-ink transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-sm"
          >
            aliris.net
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-[11px] font-sans text-ink/40">
          © {year} Aliris Clinical Research Partner. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
