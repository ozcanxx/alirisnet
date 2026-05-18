import type { Metadata } from "next"
import { DM_Serif_Display, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Providers from "@/components/Providers"

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aliris Clinical Research Partner — AI-Powered CRO",
  description:
    "Aliris Clinical Research Partner accelerates clinical trials with intelligent automation — from protocol design to regulatory submission.",
  metadataBase: new URL("https://aliris.net"),
  openGraph: {
    title: "Aliris Clinical Research Partner",
    description: "Accelerating clinical research with intelligent automation.",
    siteName: "Aliris Clinical Research Partner",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
