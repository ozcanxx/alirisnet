"use client"

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react"

export type Lang = "en" | "tr"

interface ServiceItem {
  title: string
  desc: string
}

interface ProcessStep {
  number: string
  title: string
  desc: string
  ai: boolean
}

interface TrustPoint {
  title: string
  desc: string
}

export interface SiteTranslations {
  nav: {
    services: string
    about: string
    contact: string
    cta: string
  }
  hero: {
    eyebrow: string
    headline: [string, string, string]
    subtext: string
    cta1: string
    cta2: string
    stats: Array<{ value: string; label: string }>
  }
  services: {
    eyebrow: string
    title: string
    subtitle: string
    items: ServiceItem[]
  }
  process: {
    eyebrow: string
    title: string
    steps: ProcessStep[]
  }
  trust: {
    eyebrow: string
    title: string
    subtitle: string
    points: TrustPoint[]
    compliance: string[]
  }
  contact: {
    eyebrow: string
    title: string
    subtitle: string
    nameLabel: string
    companyLabel: string
    emailLabel: string
    messageLabel: string
    submit: string
    trustNote: string
  }
}

const translations: Record<Lang, SiteTranslations> = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
      cta: "Get in Touch",
    },
    hero: {
      eyebrow: "AI-Powered Clinical Research Organization",
      headline: [
        "Innovative AI-powered",
        "solutions for clinical",
        "trial operations.",
      ],
      subtext:
        "ALIRIS is an innovative CRO & SMO partner optimizing your clinical research operations through AI-powered systems.",
      cta1: "Start a Project",
      cta2: "Explore Services",
      stats: [
        { value: "150+", label: "Clinical Trials Managed" },
        { value: "24",   label: "Regulatory Markets" },
        { value: "98%",  label: "On-Time Delivery" },
      ],
    },
    services: {
      eyebrow: "What We Do",
      title: "End-to-End Clinical Research Services",
      subtitle:
        "ALIRIS delivers AI-powered and operationally focused solutions across all stages of clinical research projects.",
      items: [
        {
          title: "Site Management Organization (SMO)",
          desc: "We provide site coordination, operational management, and clinical trial support services for research centers and hospitals.",
        },
        {
          title: "AI-Based Feasibility",
          desc: "Our AI-powered feasibility solutions provide predictive insights into protocol suitability, recruitment potential, and operational planning.",
        },
        {
          title: "Clinical Trial Management & Site Oversight",
          desc: "We provide end-to-end clinical trial management including operational planning, project coordination, timeline management, and comprehensive study oversight. We ensure sustainable study performance, quality, and regulatory compliance.",
        },
        {
          title: "AI-Based Patient Recruitment",
          desc: "We optimize patient recruitment through real-time eligibility analysis and data-driven recruitment strategies.",
        },
        {
          title: "Regulatory Compliance & Study Start-Up",
          desc: "We support ethics submissions, regulatory processes, and compliance management in accordance with international standards. We efficiently manage study activation, documentation, contract, and site preparation processes.",
        },
        {
          title: "Monitoring & Study Close-Out",
          desc: "We conduct monitoring activities throughout the study lifecycle and coordinate efficient study close-out processes.",
        },
      ],
    },
    process: {
      eyebrow: "How It Works",
      title: "From Protocol to Submission — Accelerated",
      steps: [
        {
          number: "01",
          title: "Discovery & Strategy",
          desc: "We analyze your compound profile, target indication, and competitive landscape to define the optimal trial design and regulatory pathway.",
          ai: false,
        },
        {
          number: "02",
          title: "Protocol Design",
          desc: "AI models search thousands of similar trials to recommend optimal endpoints, sample sizes, adaptive designs, and site selection criteria.",
          ai: true,
        },
        {
          number: "03",
          title: "Site Activation",
          desc: "Intelligent feasibility scoring and streamlined IRB/EC processes activate sites up to 40% faster than the industry average.",
          ai: true,
        },
        {
          number: "04",
          title: "Trial Execution",
          desc: "Real-time monitoring dashboards, automated data capture, and AI-driven deviation detection keep every site synchronized and compliant.",
          ai: true,
        },
        {
          number: "05",
          title: "Regulatory Submission",
          desc: "Complete eCTD dossiers assembled by AI, validated by our regulatory experts, and submitted with full global compliance.",
          ai: true,
        },
      ],
    },
    trust: {
      eyebrow: "Why ALIRIS",
      title: "Faster, more efficient, and sustainable clinical trial operations.",
      subtitle:
        "ALIRIS combines AI-powered systems with strong site and project operational expertise to support the timely execution of clinical research projects. We deliver data-driven, efficient, and sustainable solutions across feasibility, regulatory submissions, study start-up, patient recruitment, monitoring, and all stages of clinical trial operations.",
      points: [
        {
          title: "AI-Powered Feasibility",
          desc: "Fast and data-driven analysis for protocol suitability, recruitment potential, and operational planning.",
        },
        {
          title: "Real-Time Adaptive Monitoring",
          desc: "Continuous AI surveillance across all trial sites detects protocol deviations within hours, not days.",
        },
        {
          title: "Global Regulatory Expertise",
          desc: "In-house specialists for FDA, EMA, PMDA, and ANVISA with a track record across 24 regulatory markets.",
        },
        {
          title: "Data Integrity by Design",
          desc: "CDISC, HL7 FHIR, and 21 CFR Part 11 compliant architecture ensures data quality from collection to submission.",
        },
        {
          title: "Intelligent Patient Recruitment",
          desc: "Accelerates recruitment processes through real-time patient eligibility analysis and optimized patient identification.",
        },
        {
          title: "Flexible & Innovative Partnership Model",
          desc: "ALIRIS combines CRO & SMO expertise with AI-driven innovation to deliver agile, scalable, and customized clinical research solutions.",
        },
      ],
      compliance: ["ICH GCP", "CDISC", "21 CFR Part 11", "GDPR", "ISO 27001"],
    },
    contact: {
      eyebrow: "Start Your Journey",
      title: "Ready to Accelerate Your Clinical Program?",
      subtitle:
        "Share your compound and therapeutic area — we'll outline a tailored research roadmap within 48 hours.",
      nameLabel: "Your Name",
      companyLabel: "Company / Organization",
      emailLabel: "Work Email",
      messageLabel: "Tell us about your compound and development goals...",
      submit: "Request a Consultation",
      trustNote: "We respond within 48 hours · All inquiries are strictly confidential",
    },
  },

  tr: {
    nav: {
      services: "Hizmetler",
      about: "Hakkımızda",
      contact: "İletişim",
      cta: "İletişime Geç",
    },
    hero: {
      eyebrow: "Yapay Zeka Destekli Klinik Araştırma Organizasyonu",
      headline: [
        "Klinik araştırmalar için",
        "yapay zeka destekli",
        "yenilikçi operasyon çözümleri.",
      ],
      subtext:
        "ALIRIS; klinik araştırma projelerinizde süreçlerinizi yapay zeka destekli sistemlerle optimize eden yenilikçi CRO & SMO partnerinizdir.",
      cta1: "Proje Başlat",
      cta2: "Hizmetleri Keşfet",
      stats: [
        { value: "150+", label: "Yönetilen Klinik Çalışma" },
        { value: "24",   label: "Düzenleyici Pazar" },
        { value: "98%",  label: "Zamanında Teslimat" },
      ],
    },
    services: {
      eyebrow: "Ne Yapıyoruz",
      title: "Uçtan Uca Klinik Araştırma ve Destek Hizmetleri",
      subtitle:
        "ALIRIS, klinik araştırma süreçlerinin tüm aşamalarında yapay zeka destekli ve operasyon odaklı çözümler sunar.",
      items: [
        {
          title: "Site Management Organization (SMO)",
          desc: "Araştırma merkezleri ve hastaneler için saha koordinasyonu, operasyon yönetimi ve klinik araştırma süreç desteği sağlıyoruz.",
        },
        {
          title: "AI-Based Feasibility",
          desc: "Yapay zeka destekli feasibility analizleri ile protokol uygunluğu, recruitment potansiyeli ve operasyonel öngörüler sunuyoruz.",
        },
        {
          title: "Clinical Trial Management & Site Oversight",
          desc: "Klinik araştırma projelerinde operasyonel planlama, proje koordinasyonu, zaman yönetimi ve süreç takibini uçtan uca yönetiyoruz.",
        },
        {
          title: "AI-Based Patient Recruitment",
          desc: "Gerçek zamanlı hasta uygunluğu analizleri ve veri odaklı recruitment stratejileri ile hasta bulma süreçlerini optimize ediyoruz.",
        },
        {
          title: "Regulatory Compliance & Study Start-Up",
          desc: "Etik kurul, otorite başvuruları ve regülasyon süreçlerinde uluslararası standartlara uygun destek sağlıyoruz. Sözleşme, merkez hazırlığı, dokümantasyon ve aktivasyon süreçlerini etkin şekilde yönetiyoruz.",
        },
        {
          title: "Monitoring & Study Close-Out",
          desc: "Çalışma süresince monitoring faaliyetlerini yürütüyor ve çalışma kapanış süreçlerini koordineli şekilde tamamlıyoruz.",
        },
      ],
    },
    process: {
      eyebrow: "Nasıl Çalışıyoruz",
      title: "Protokolden Başvuruya — Hızlandırılmış",
      steps: [
        {
          number: "01",
          title: "Keşif & Strateji",
          desc: "Bileşik profilinizi, hedef endikasyonunuzu ve rekabet ortamını analiz ederek optimal araştırma tasarımı ve düzenleyici yolu belirleriz.",
          ai: false,
        },
        {
          number: "02",
          title: "Protokol Tasarımı",
          desc: "Yapay zeka modelleri binlerce benzer araştırmayı analiz ederek optimal uç noktalar, örneklem boyutu ve adaptif tasarım önerir.",
          ai: true,
        },
        {
          number: "03",
          title: "Site Aktivasyonu",
          desc: "Akıllı fizibilite puanlaması ve hızlandırılmış IRB/etik kurul süreçleri siteleri sektör ortalamasına kıyasla %40 daha hızlı aktive eder.",
          ai: true,
        },
        {
          number: "04",
          title: "Araştırma Yürütme",
          desc: "Gerçek zamanlı izleme panoları, otomatik veri toplama ve yapay zeka sapma tespiti tüm siteleri senkronize ve uyumlu tutar.",
          ai: true,
        },
        {
          number: "05",
          title: "Düzenleyici Başvuru",
          desc: "Yapay zeka tarafından derlenen tam eCTD dosyaları, düzenleyici uzmanlarımızca doğrulanır ve küresel uyumlulukla sunulur.",
          ai: true,
        },
      ],
    },
    trust: {
      eyebrow: "Neden ALIRIS",
      title: "Klinik araştırmalarda daha hızlı ve daha verimli operasyonlar.",
      subtitle:
        "ALIRIS, yapay zeka destekli sistemleri saha ve proje operasyon deneyimiyle bir araya getirerek klinik araştırma süreçlerinin planlanan zaman çizelgesine uygun şekilde yürütülmesini destekler. Feasibility, regulatory submission, study start-up, patient recruitment, monitoring ve klinik çalışma operasyonlarının tüm aşamalarında veri odaklı, verimli ve sürdürülebilir çözümler sunar.",
      points: [
        {
          title: "Yapay Zeka Destekli Feasibility",
          desc: "Protokol uygunluğu, recruitment potansiyeli ve operasyonel süreçler için hızlı ve veri odaklı analizler sağlar.",
        },
        {
          title: "Gerçek Zamanlı Adaptif İzleme",
          desc: "Tüm araştırma sitelerinde sürekli yapay zeka gözetimi, protokol sapmalarını günler değil saatler içinde tespit eder.",
        },
        {
          title: "Küresel Düzenleyici Uzmanlık",
          desc: "FDA, EMA, PMDA ve ANVISA için yerinde uzmanlar; 24 düzenleyici pazarda kanıtlanmış geçmiş.",
        },
        {
          title: "Tasarım Gereği Veri Bütünlüğü",
          desc: "CDISC, HL7 FHIR ve 21 CFR Part 11 uyumlu mimari, toplamadan başvuruya veri kalitesini güvence altına alır.",
        },
        {
          title: "Akıllı Patient Recruitment",
          desc: "Gerçek zamanlı hasta uygunluğu analizleri ile recruitment süreçlerini hızlandırır ve uygun hasta erişimini optimize eder.",
        },
        {
          title: "Esnek ve Yenilikçi İş Ortaklığı Modeli",
          desc: "ALIRIS, CRO & SMO uzmanlığını yapay zeka destekli yenilikçi çözümlerle birleştirerek çevik, ölçeklenebilir ve ihtiyaçlara özel klinik araştırma çözümleri sunar.",
        },
      ],
      compliance: ["ICH GCP", "CDISC", "21 CFR Part 11", "GDPR", "ISO 27001"],
    },
    contact: {
      eyebrow: "Yolculuğunuzu Başlatın",
      title: "Klinik Programınızı Hızlandırmaya Hazır mısınız?",
      subtitle:
        "Bileşiğinizi ve terapötik alanınızı paylaşın — 48 saat içinde özel bir araştırma yol haritası sunalım.",
      nameLabel: "Adınız",
      companyLabel: "Şirket / Kuruluş",
      emailLabel: "Kurumsal E-posta",
      messageLabel: "Bileşiğiniz ve geliştirme hedefleriniz hakkında bilgi verin...",
      submit: "Danışmanlık Talep Et",
      trustNote: "48 saat içinde yanıt veriyoruz · Tüm başvurular kesinlikle gizlidir",
    },
  },
}

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: SiteTranslations
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
