"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useLang } from "@/lib/i18n"

const EASE = [0.21, 0.47, 0.32, 0.98] as const

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
}
const item = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}

function ArrowRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M2.5 7.5h10M9 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ── Subtle dot-grid on white ───────────────────────────────── */
function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern id="hero-grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#0B1929" opacity="0.07" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
      {/* Soft teal radial at top-center — very restrained */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #0E9D87 0%, transparent 70%)" }}
      />
    </div>
  )
}

export default function Hero() {
  const { t } = useLang()
  const ref   = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const reducedMotion = useReducedMotion() ?? false

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <GridBackground />

      {/* Centered content */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full px-6 lg:px-12 pt-28 pb-20 text-center">
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Eyebrow */}
            <motion.div
              variants={item}
              className="inline-flex items-center gap-3 mb-9"
            >
              <span className="h-px w-7 bg-teal flex-shrink-0" aria-hidden="true" />
              <span className="text-[11px] font-sans font-semibold text-teal uppercase tracking-[0.16em]">
                {t.hero.eyebrow}
              </span>
              <span className="h-px w-7 bg-teal flex-shrink-0" aria-hidden="true" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-heading"
              variants={item}
              className="font-serif text-[clamp(2.8rem,6vw,5rem)] leading-[1.06] tracking-tight text-ink mb-7"
            >
              <span className="block">{t.hero.headline[0]}</span>
              <span className="block">{t.hero.headline[1]}</span>
              <span className="block italic text-teal">
                {t.hero.headline[2]}
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={item}
              className="font-sans text-[1.0625rem] leading-relaxed text-ink-soft max-w-xl mx-auto mb-10"
            >
              {t.hero.subtext}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center gap-3 mb-16"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-teal text-white font-sans font-semibold text-sm hover:brightness-110 active:brightness-90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {t.hero.cta1}
                <ArrowRight />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full border border-ink/20 text-ink font-sans font-medium text-sm hover:border-ink/40 hover:bg-ink/[0.04] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
              >
                {t.hero.cta2}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item}>
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 pt-8 border-t border-ink/[0.08]">
                {t.hero.stats.map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-1">
                    <span className="font-serif text-[2.1rem] leading-none text-ink">
                      {s.value}
                    </span>
                    <span className="text-[11px] font-sans font-medium text-ink-soft uppercase tracking-[0.1em]">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="relative z-10 flex justify-center pb-8"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] font-sans text-ink/25 uppercase tracking-[0.2em]">
            Scroll
          </span>
          <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
            <rect x="1" y="1" width="10" height="16" rx="5" stroke="#0B1929" strokeWidth="1" opacity="0.15" />
            <motion.rect
              x="4.5" y="4" width="3" height="4" rx="1.5"
              fill="#0B1929" opacity="0.3"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
