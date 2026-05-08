import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Aprameya Kannan",
  description: "Aprameya Kannan - Full-stack web developer specializing in TypeScript, React, Python, and AI integration. Portfolio showcasing full-stack applications, AI automation projects, and innovative web solutions.",
  keywords: [
    "Aprameya Kannan",
    "aprameyak",
    "full-stack developer",
    "web developer",
    "Cornell University",
    "TypeScript developer",
    "React developer",
    "Python developer",
    "New York developer",
    "software engineer",
    "AI integration",
    "full-stack applications",
    "portfolio",
    "web development",
    "frontend developer",
    "backend developer"
  ],
  authors: [{ name: "Aprameya Kannan" }],
  creator: "Aprameya Kannan",
  openGraph: {
    title: "Aprameya Kannan",
    description: "Full-stack web developer specializing in TypeScript, React, Python, and AI integration.",
    url: "https://yourdomain.com",
    siteName: "Aprameya Kannan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aprameya Kannan",
    description: "Full-stack web developer specializing in TypeScript, React, Python, and AI integration.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aprameya Kannan",
  alternateName: "aprameyak",
  jobTitle: "Full-Stack Web Developer",
  email: "aprameyakannan@gmail.com",
  url: "https://www.linkedin.com/in/aprameyak",
  sameAs: [
    "https://www.linkedin.com/in/aprameyak",
    "https://github.com/aprameyak"
  ],
  knowsAbout: [
    "TypeScript",
    "React",
    "Python",
    "Full-Stack Development",
    "AI Integration",
    "API Integration",
    "Database Integration"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  )
}
