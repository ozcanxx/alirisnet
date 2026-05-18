import Navbar           from "@/components/Navbar"
import Hero             from "@/components/Hero"
import { GeminiSection } from "@/components/GeminiSection"
import TrustAbout       from "@/components/TrustAbout"
import Services         from "@/components/Services"
import Process          from "@/components/Process"
import Contact          from "@/components/Contact"
import Footer           from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GeminiSection />
        <TrustAbout />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
