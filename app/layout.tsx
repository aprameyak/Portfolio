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
  title: "Aprameya Kannan | Full-Stack Developer",
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
    title: "Aprameya Kannan | Full-Stack Developer",
    description: "Full-stack web developer specializing in TypeScript, React, Python, and AI integration.",
    url: "https://yourdomain.com",
    siteName: "Aprameya Kannan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aprameya Kannan | Full-Stack Developer",
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
      { url: "/faviconFiles/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/faviconFiles/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/faviconFiles/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/faviconFiles/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/faviconFiles/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/faviconFiles/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/faviconFiles/site.webmanifest",
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
