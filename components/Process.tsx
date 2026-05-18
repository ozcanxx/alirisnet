"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useLang } from "@/lib/i18n"

const EASE = [0.21, 0.47, 0.32, 0.98] as const

function AIBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal/10 border border-teal/25 text-teal text-[10px] font-sans font-semibold uppercase tracking-wider">
      <span className="w-1 h-1 rounded-full bg-teal" aria-hidden="true" />
      AI
    </span>
  )
}

export default function Process() {
  const { t } = useLang()
  const ref   = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const reducedMotion = useReducedMotion() ?? false

  return (
    <section
      id="process"
      ref={ref}
      className="bg-white py-24 lg:py-32 overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-7 bg-teal flex-shrink-0" aria-hidden="true" />
            <span className="text-[11px] font-sans font-semibold text-teal uppercase tracking-[0.16em]">
              {t.process.eyebrow}
            </span>
          </div>
          <h2
            id="process-heading"
            className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight text-ink"
          >
            {t.process.title}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal connector (desktop) */}
          <div
            className="hidden lg:block absolute top-[1.125rem] left-0 right-0 h-px bg-ink/[0.08]"
            aria-hidden="true"
          />

          <ol className="relative flex flex-col lg:flex-row gap-10 lg:gap-6">
            {t.process.steps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={reducedMotion ? {} : { opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE, delay: reducedMotion ? 0 : 0.15 + i * 0.1 }}
                className="relative flex-1 flex flex-col gap-4"
              >
                {/* Vertical connector (mobile) */}
                {i < t.process.steps.length - 1 && (
                  <span
                    className="lg:hidden absolute left-[0.9375rem] top-[2.25rem] bottom-[-2.5rem] w-px bg-ink/[0.08]"
                    aria-hidden="true"
                  />
                )}

                {/* Number circle */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                  <div className="relative flex-shrink-0 w-[30px] h-[30px] rounded-full border-2 border-teal bg-white flex items-center justify-center">
                    <span className="font-sans font-bold text-[10px] text-teal">
                      {step.number}
                    </span>
                    {inView && (
                      <motion.span
                        initial={reducedMotion ? {} : { scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.35, ease: "easeOut" }}
                        className="absolute inset-[-5px] rounded-full border border-teal/25"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  {step.ai && <span className="lg:hidden"><AIBadge /></span>}
                </div>

                {/* Content */}
                <div className="pl-[46px] lg:pl-0">
                  {step.ai && (
                    <span className="hidden lg:inline-flex mb-2"><AIBadge /></span>
                  )}
                  <h3 className="font-sans font-semibold text-[0.9375rem] text-ink mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[0.8125rem] text-ink-soft leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
