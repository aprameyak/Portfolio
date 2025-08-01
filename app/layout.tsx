import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Stars from "./components/Stars";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Aprameya Kannan | Full Stack Developer & Cloud Architect",
  description: "Full Stack Developer and AWS Certified Solutions Architect specializing in cloud-native applications, AI/ML, and modern web development. Building enterprise solutions at Lockheed Martin.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Cloud Architect",
    "AWS Certified",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    "AI/ML Engineer",
    "Lockheed Martin",
    "Enterprise Applications",
    "Cloud Native",
    "TypeScript",
    "Next.js",
    "AWS",
    "Portfolio"
  ],
  authors: [{ name: "Aprameya Kannan" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aprameyak.vercel.app",
    title: "Aprameya Kannan | Full Stack Developer & Cloud Architect",
    description: "Full Stack Developer and AWS Certified Solutions Architect specializing in cloud-native applications, AI/ML, and modern web development. Building enterprise solutions at Lockheed Martin.",
    siteName: "Aprameya Kannan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aprameya Kannan Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aprameya Kannan | Full Stack Developer & Cloud Architect",
    description: "Full Stack Developer and AWS Certified Solutions Architect specializing in cloud-native applications, AI/ML, and modern web development. Building enterprise solutions at Lockheed Martin.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
  metadataBase: new URL('https://aprameyak.vercel.app'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#13111C" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased bg-background text-text relative`}>
        <Stars />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
