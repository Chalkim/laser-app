import type { Metadata } from "next"
import { Geist_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
})

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "LaserWorks | Precision Laser Cutting Systems",
  description:
    "Industrial laser cutting systems engineered for reliable throughput, clean edges, and production-ready automation.",
  applicationName: "LaserWorks",
  keywords: [
    "laser cutting machine",
    "fiber laser cutting",
    "industrial manufacturing",
    "sheet metal cutting",
    "automation",
  ],
  openGraph: {
    title: "LaserWorks | Precision Laser Cutting Systems",
    description:
      "Precision-built laser cutting systems for modern sheet metal production lines.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaserWorks | Precision Laser Cutting Systems",
    description:
      "Industrial laser cutting systems engineered for reliable throughput and production confidence.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        bodyFont.variable,
        headingFont.variable,
        fontMono.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
