"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useLang } from "@/lib/i18n"

const EASE = [0.21, 0.47, 0.32, 0.98] as const

/* ── Per-service color config ───────────────────────────────── */
const CARD_COLORS = [
  { icon: "text-teal",        iconBg: "bg-teal/10",        border: "hover:border-teal/50",        accent: "#0E9D87" },
  { icon: "text-indigo-600",  iconBg: "bg-indigo-500/10",  border: "hover:border-indigo-400/50",  accent: "#4F46E5" },
  { icon: "text-amber-600",   iconBg: "bg-amber-500/10",   border: "hover:border-amber-400/50",   accent: "#D97706" },
  { icon: "text-emerald-600", iconBg: "bg-emerald-500/10", border: "hover:border-emerald-400/50", accent: "#059669" },
  { icon: "text-rose-600",    iconBg: "bg-rose-500/10",    border: "hover:border-rose-400/50",    accent: "#E11D48" },
  { icon: "text-violet-600",  iconBg: "bg-violet-500/10",  border: "hover:border-violet-400/50",  accent: "#7C3AED" },
]

/* ── Icons ──────────────────────────────────────────────────── */
const SERVICE_ICONS = [
  <svg key="trial" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <path d="M9 14l2 2 4-4" />
  </svg>,
  <svg key="reg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  <svg key="data" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>,
  <svg key="site" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>,
  <svg key="pv" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>,
  <svg key="med" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>,
]

interface CardProps {
  icon: React.ReactNode
  title: string
  desc: string
  colors: typeof CARD_COLORS[0]
  index: number
  inView: boolean
  reducedMotion: boolean
}

function ServiceCard({ icon, title, desc, colors, index, inView, reducedMotion }: CardProps) {
  return (
    <motion.article
      initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: EASE, delay: reducedMotion ? 0 : 0.1 + index * 0.07 }}
      className={[
        "group relative flex flex-col gap-4 p-6 rounded-2xl bg-white border border-ink/[0.08]",
        "hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-default",
        colors.border,
      ].join(" ")}
    >
      {/* Top accent bar */}
      <span
        className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: colors.accent }}
        aria-hidden="true"
      />

      {/* Icon + Title row */}
      <div className="flex items-center gap-3">
        <div className={`flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl ${colors.iconBg} ${colors.icon} transition-colors duration-200`}>
          {icon}
        </div>
        <h3 className="font-sans font-semibold text-[0.9375rem] text-ink leading-snug">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="font-sans text-[0.8125rem] text-ink-soft leading-relaxed">
        {desc}
      </p>
    </motion.article>
  )
}

export default function Services() {
  const { t } = useLang()
  const ref   = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const reducedMotion = useReducedMotion() ?? false

  return (
    <section
      id="services"
      ref={ref}
      className="bg-[#F8F9FA] py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-7 bg-teal flex-shrink-0" aria-hidden="true" />
            <span className="text-[11px] font-sans font-semibold text-teal uppercase tracking-[0.16em]">
              {t.services.eyebrow}
            </span>
          </div>
          <h2
            id="services-heading"
            className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight text-ink mb-4"
          >
            {t.services.title}
          </h2>
          <p className="font-sans text-base text-ink-soft leading-relaxed max-w-xl">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* 3-col grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((item, i) => (
            <ServiceCard
              key={item.title}
              icon={SERVICE_ICONS[i]}
              title={item.title}
              desc={item.desc}
              colors={CARD_COLORS[i]}
              index={i}
              inView={inView}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
