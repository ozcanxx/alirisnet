"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useLang, type Lang } from "@/lib/i18n"

const EASE = [0.21, 0.47, 0.32, 0.98] as const

function AlirisLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/aliris-logo.png"
      alt="Aliris Clinical Research Partner"
      height={48}
      style={{ height: "48px", width: "auto" }}
    />
  )
}

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const navLinks: [string, string][] = [
    [t.nav.services, "#services"],
    [t.nav.about,    "#about"],
    [t.nav.contact,  "#contact"],
  ]

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: EASE }}
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-ink/[0.06] py-3 shadow-sm"
          : "bg-transparent py-5",
      ].join(" ")}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-sm"
          aria-label="Aliris Clinical Research Partner — home"
        >
          <AlirisLogo />
        </a>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative text-sm font-sans font-medium text-ink-soft hover:text-ink transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-sm group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-teal group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          {/* EN / TR toggle */}
          <div
            className="flex items-center gap-0.5 p-[3px] rounded-full border border-ink/[0.12] bg-ink/[0.03]"
            role="group"
            aria-label="Language selection"
          >
            {(["en", "tr"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={[
                  "px-3 py-1 rounded-full text-[11px] font-sans font-semibold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal cursor-pointer",
                  lang === l
                    ? "bg-teal text-white shadow-sm"
                    : "text-ink-soft hover:text-ink",
                ].join(" ")}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-full bg-teal text-white text-sm font-sans font-semibold hover:brightness-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </motion.header>
  )
}
