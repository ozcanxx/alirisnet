"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useLang } from "@/lib/i18n"

const EASE = [0.21, 0.47, 0.32, 0.98] as const

const POINT_COLORS = [
  { icon: "text-teal",        bg: "bg-teal/10",        border: "border-teal/20"        },
  { icon: "text-indigo-600",  bg: "bg-indigo-500/10",  border: "border-indigo-300/30"  },
  { icon: "text-amber-600",   bg: "bg-amber-500/10",   border: "border-amber-300/30"   },
  { icon: "text-emerald-600", bg: "bg-emerald-500/10", border: "border-emerald-300/30" },
  { icon: "text-rose-600",    bg: "bg-rose-500/10",    border: "border-rose-300/30"    },
  { icon: "text-violet-600",  bg: "bg-violet-500/10",  border: "border-violet-300/30"  },
]

const POINT_ICONS = [
  /* AI Feasibility — clock/speed */
  <svg key="feasibility" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
  </svg>,
  /* Adaptive Monitoring — activity */
  <svg key="monitor" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>,
  /* Regulatory — globe */
  <svg key="globe" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>,
  /* Data Integrity — lock */
  <svg key="lock" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>,
  /* Patient Recruitment — user-plus */
  <svg key="patient" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="19" y1="8" x2="19" y2="14" />
    <line x1="22" y1="11" x2="16" y2="11" />
  </svg>,
  /* Partnership Model — layers */
  <svg key="partnership" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>,
]

const LARGE_STATS = [
  { value: "150+", label: "Clinical Trials", color: "text-teal" },
  { value: "40%",  label: "Faster Timelines", color: "text-indigo-600" },
  { value: "24",   label: "Global Markets",   color: "text-amber-600" },
  { value: "98%",  label: "On-Time Rate",     color: "text-emerald-600" },
]

export default function TrustAbout() {
  const { t } = useLang()
  const ref   = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const reducedMotion = useReducedMotion() ?? false

  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#F8F9FA] py-24 lg:py-32"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Stats grid ────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {LARGE_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE, delay: reducedMotion ? 0 : i * 0.07 }}
              className="flex flex-col items-center justify-center gap-1.5 py-8 px-4 bg-white rounded-2xl border border-ink/[0.07] shadow-sm text-center"
            >
              <span className={`font-serif text-[2.5rem] lg:text-[3rem] leading-none ${stat.color}`}>
                {stat.value}
              </span>
              <span className="text-[11px] font-sans font-medium text-ink-soft uppercase tracking-[0.1em]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── Main content ──────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-7 bg-teal flex-shrink-0" aria-hidden="true" />
              <span className="text-[11px] font-sans font-semibold text-teal uppercase tracking-[0.16em]">
                {t.trust.eyebrow}
              </span>
            </div>
            <h2
              id="trust-heading"
              className="font-serif text-[clamp(1.7rem,3.2vw,2.5rem)] leading-[1.12] tracking-tight text-ink mb-5"
            >
              {t.trust.title}
            </h2>
            <p className="font-sans text-base text-ink-soft leading-relaxed mb-10 max-w-md">
              {t.trust.subtitle}
            </p>

            {/* Compliance badges */}
            <div>
              <p className="text-[11px] font-sans font-semibold text-ink/30 uppercase tracking-[0.14em] mb-3">
                Compliance & Standards
              </p>
              <div className="flex flex-wrap gap-2">
                {t.trust.compliance.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg border border-teal/25 bg-teal/5 text-[11px] font-sans font-semibold text-teal uppercase tracking-wider"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: 6 feature cards — 2 rows × 3 cols */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {t.trust.points.map((point, i) => (
              <motion.div
                key={point.title}
                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease: EASE, delay: reducedMotion ? 0 : 0.2 + i * 0.07 }}
                className={`flex flex-col gap-3 p-5 rounded-xl border bg-white ${POINT_COLORS[i].border} shadow-sm`}
              >
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${POINT_COLORS[i].bg} ${POINT_COLORS[i].icon}`}>
                  {POINT_ICONS[i]}
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-sm text-ink mb-1.5 leading-snug">
                    {point.title}
                  </h3>
                  <p className="font-sans text-[0.8125rem] text-ink-soft leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
