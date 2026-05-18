"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const EASE = [0.21, 0.47, 0.32, 0.98] as const

interface Metric {
  label: string
  value: number
  color: string
}

const METRICS: Metric[] = [
  { label: "Enrollment Rate",      value: 87, color: "#0E9D87" },
  { label: "Timeline Adherence",   value: 94, color: "#0E9D87" },
  { label: "Data Quality Score",   value: 98, color: "#C9943A" },
]

const ACTIVITIES = [
  { text: "Protocol Amendment Reviewed", time: "2h ago" },
  { text: "Site 04 Activation Complete",  time: "6h ago" },
  { text: "SAE Report Submitted",         time: "1d ago" },
]

function MetricRow({
  metric,
  index,
  inView,
}: {
  metric: Metric
  index: number
  inView: boolean
}) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-[11px] font-sans text-mist">{metric.label}</span>
        <span className="text-[11px] font-sans font-semibold text-cloud">
          {metric.value}%
        </span>
      </div>
      <div className="h-[5px] w-full rounded-full bg-white/[0.07] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${metric.value}%` } : { width: 0 }}
          transition={{
            duration: 1.1,
            ease: EASE,
            delay: 0.75 + index * 0.12,
          }}
          className="h-full rounded-full"
          style={{ backgroundColor: metric.color }}
        />
      </div>
    </div>
  )
}

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 36 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.85, ease: EASE, delay: 0.35 }}
      className="relative w-full max-w-[340px]"
      aria-hidden="true"
    >
      {/* ── Floating top badge ─────────────────────────────── */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity }}
        className="absolute -top-7 -left-5 z-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-navy-card border border-white/[0.1] shadow-xl shadow-midnight/60"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-bright opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-bright" />
        </span>
        <span className="text-[11px] font-sans font-medium text-cloud whitespace-nowrap">
          AI Analysis Active
        </span>
      </motion.div>

      {/* ── Main dashboard card ─────────────────────────────── */}
      <div className="relative w-full rounded-2xl bg-navy border border-white/[0.08] overflow-hidden shadow-2xl shadow-midnight/70">
        {/* Subtle inner glow */}
        <div
          className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-[0.15] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #0E9D87 0%, transparent 70%)",
          }}
        />

        {/* Header */}
        <div className="relative px-5 pt-5 pb-4 border-b border-white/[0.06]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[10px] font-sans font-semibold text-mist uppercase tracking-[0.12em] mb-1">
                Trial Monitor
              </p>
              <h3 className="text-sm font-sans font-semibold text-cloud">
                NCT-2024-AL07
              </h3>
              <p className="text-[11px] font-sans text-mist/70 mt-0.5">
                Oncology · Multi-site
              </p>
            </div>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal-bright text-[10px] font-sans font-semibold whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-bright" />
              Phase II
            </span>
          </div>
        </div>

        {/* Metrics */}
        <div className="relative px-5 py-4 space-y-3.5">
          {METRICS.map((m, i) => (
            <MetricRow key={m.label} metric={m} index={i} inView={inView} />
          ))}
        </div>

        {/* Activity feed */}
        <div className="relative px-5 pb-5 border-t border-white/[0.06] pt-4 space-y-3">
          <p className="text-[10px] font-sans font-semibold text-mist uppercase tracking-[0.12em] mb-2">
            Recent Activity
          </p>
          {ACTIVITIES.map((a) => (
            <div key={a.text} className="flex items-start gap-2.5">
              <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-sans text-cloud/90 truncate">
                  {a.text}
                </p>
                <p className="text-[10px] font-sans text-mist/50">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Floating bottom-right card ──────────────────────── */}
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{
          duration: 6.5,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1.2,
        }}
        className="absolute -bottom-6 -right-5 z-20 px-4 py-3 rounded-xl bg-midnight border border-gold/25 shadow-lg shadow-midnight/60"
      >
        <p className="text-[10px] font-sans text-gold/60 mb-0.5 font-medium uppercase tracking-wider">
          Enrolled
        </p>
        <p className="text-xl font-sans font-semibold text-gold">1,247</p>
        <p className="text-[10px] font-sans text-gold/50">of 1,400 target</p>
      </motion.div>
    </motion.div>
  )
}
