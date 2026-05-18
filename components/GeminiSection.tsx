"use client";

import React, { useState } from "react";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "framer-motion";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { useLang, type Lang } from "@/lib/i18n";

interface Slogan {
  title: string;
  desc: string;
}

const SLOGANS: Record<Lang, Slogan[]> = {
  en: [
    {
      title: "AI-Powered Feasibility",
      desc: "Fast and data-driven analysis for protocol suitability, recruitment potential, and operational planning.",
    },
    {
      title: "Intelligent Patient Recruitment",
      desc: "Accelerates recruitment processes through real-time patient eligibility analysis and optimized patient identification.",
    },
    {
      title: "Flexible & Innovative Partnership Model",
      desc: "ALIRIS combines CRO & SMO expertise with AI-driven innovation to deliver agile, scalable, and customized clinical research solutions.",
    },
    {
      title: "Turkey-Based Strategic Advantage",
      desc: "Turkey offers a strong investigator network, high patient access, and competitive operational costs — a key hub for global clinical research.",
    },
  ],
  tr: [
    {
      title: "Yapay Zeka Destekli Feasibility",
      desc: "Protokol uygunluğu, recruitment potansiyeli ve operasyonel süreçler için hızlı ve veri odaklı analizler sağlar.",
    },
    {
      title: "Akıllı Patient Recruitment",
      desc: "Gerçek zamanlı hasta uygunluğu analizleri ile recruitment süreçlerini hızlandırır ve uygun hasta erişimini optimize eder.",
    },
    {
      title: "Esnek ve Yenilikçi İş Ortaklığı Modeli",
      desc: "ALIRIS, CRO & SMO uzmanlığını yapay zeka destekli yenilikçi çözümlerle birleştirerek çevik, ölçeklenebilir ve ihtiyaçlara özel klinik araştırma çözümleri sunar.",
    },
    {
      title: "Türkiye Merkezli Stratejik Avantaj",
      desc: "Türkiye; güçlü araştırmacı ağı, yüksek hasta erişimi ve rekabetçi operasyon maliyetleri ile global klinik araştırmalar için önemli bir merkezdir.",
    },
  ],
};

function getSloganIndex(progress: number) {
  return Math.min(3, Math.floor(progress * 4));
}

export function GeminiSection() {
  const { lang } = useLang();
  const ref = React.useRef<HTMLDivElement>(null);
  const [sloganIndex, setSloganIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = getSloganIndex(latest);
    setSloganIndex((prev) => (prev !== next ? next : prev));
  });

  const pathLengthFirst  = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird  = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth  = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  const current = SLOGANS[lang][sloganIndex];

  return (
    <div
      ref={ref}
      className="h-[400vh] bg-white w-full relative overflow-clip"
      aria-label="Animated feature highlight"
    >
      {/* ── Sticky slogan overlay ────────────────────────────── */}
      <div className="sticky top-0 z-20 w-full h-0 pointer-events-none">
        <div className="flex flex-col items-center pt-14 px-4">
          {/* Step dots */}
          <div className="flex items-center gap-2 mb-6" aria-hidden="true">
            {SLOGANS[lang].map((_, i) => (
              <motion.span
                key={i}
                animate={{
                  width:           i === sloganIndex ? 24 : 6,
                  backgroundColor: i === sloganIndex ? "#0E9D87" : "#CBD5E1",
                }}
                transition={{ duration: 0.3 }}
                className="h-[6px] rounded-full"
              />
            ))}
          </div>

          {/* Animated slogan */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col items-center gap-3 text-center max-w-2xl"
            >
              <p className="font-serif text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.12] tracking-tight text-ink">
                {current.title}
              </p>
              <p className="font-sans text-sm md:text-base text-ink-soft leading-relaxed max-w-xl">
                {current.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Counter */}
          <p className="mt-4 text-[11px] font-sans text-ink/30 uppercase tracking-[0.18em]">
            {sloganIndex + 1} / {SLOGANS[lang].length}
          </p>
        </div>
      </div>

      {/* ── SVG animation ────────────────────────────────────── */}
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title=" "
        description=" "
        className="z-10 top-16"
      />
    </div>
  );
}
