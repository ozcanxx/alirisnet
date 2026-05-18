"use client"

import { useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useLang } from "@/lib/i18n"
import { TealGlowBackground } from "@/components/ui/background-components"

const EASE = [0.21, 0.47, 0.32, 0.98] as const

function InputField({
  id,
  label,
  type = "text",
  multiline = false,
  required = true,
}: {
  id: string
  label: string
  type?: string
  multiline?: boolean
  required?: boolean
}) {
  const base =
    "w-full bg-white border border-ink/[0.12] rounded-xl px-4 text-ink font-sans text-sm placeholder:text-ink-soft/40 focus:outline-none focus:border-teal/60 focus:ring-1 focus:ring-teal/40 transition-colors duration-200"
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[11px] font-sans font-semibold text-ink/50 uppercase tracking-[0.12em]">
        {label}
        {required && <span className="text-teal ml-0.5" aria-hidden="true">*</span>}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          placeholder={label}
          required={required}
          className={`${base} py-3 resize-none`}
          aria-required={required}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={label}
          required={required}
          className={`${base} h-11`}
          aria-required={required}
        />
      )}
    </div>
  )
}

export default function Contact() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const reducedMotion = useReducedMotion() ?? false
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <TealGlowBackground
      className="py-24 lg:py-32 overflow-hidden"
    >
    <section
      id="contact"
      ref={ref}
      className="relative"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: headline + trust copy ─────────────────── */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:pt-2"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-7 bg-teal flex-shrink-0" aria-hidden="true" />
              <span className="text-[11px] font-sans font-semibold text-teal uppercase tracking-[0.16em]">
                {t.contact.eyebrow}
              </span>
            </div>
            <h2
              id="contact-heading"
              className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.08] tracking-tight text-ink mb-5"
            >
              {t.contact.title}
            </h2>
            <p className="font-sans text-base text-ink-soft leading-relaxed mb-10 max-w-md">
              {t.contact.subtitle}
            </p>

            {/* Trust indicators */}
            <div className="space-y-3">
              {[
                { text: "48-hour response guarantee" },
                { text: "Strict confidentiality — NDAs available" },
                { text: "Global coverage across 24 markets" },
              ].map(({ text }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 text-teal">
                    {i === 0 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm font-sans text-ink-soft">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: form ──────────────────────────────────── */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE, delay: 0.15 }}
          >
            <div className="rounded-2xl bg-white border border-ink/[0.08] shadow-sm p-7 lg:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center text-teal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-sans font-semibold text-lg text-ink">
                    Request Received
                  </h3>
                  <p className="font-sans text-sm text-ink-soft max-w-xs">
                    We&apos;ll review your project details and get back to you within 48 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-5"
                  aria-label="Contact form"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <InputField id="name"    label={t.contact.nameLabel}    required />
                    <InputField id="company" label={t.contact.companyLabel} required />
                  </div>
                  <InputField id="email"   label={t.contact.emailLabel}   type="email" required />
                  <InputField id="message" label={t.contact.messageLabel} multiline    required />

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-1 flex items-center justify-center gap-2 w-full min-h-[52px] rounded-full bg-teal text-white font-sans font-semibold text-sm hover:brightness-110 active:brightness-90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-white cursor-pointer"
                    aria-live="polite"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      t.contact.submit
                    )}
                  </button>

                  <p className="text-center text-[11px] font-sans text-ink/40 leading-relaxed">
                    {t.contact.trustNote}
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </TealGlowBackground>
  )
}
