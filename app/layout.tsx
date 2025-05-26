import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Aprameya Kannan | Full Stack Developer & Cloud Architect",
  description: "Full Stack Developer and AWS Certified Solutions Architect specializing in cloud-native applications, AI/ML, and modern web development.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Cloud Architect",
    "AWS Certified",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    "AI/ML Engineer"
  ],
  authors: [{ name: "Aprameya Kannan" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aprameyak.vercel.app",
    title: "Aprameya Kannan | Full Stack Developer & Cloud Architect",
    description: "Full Stack Developer and AWS Certified Solutions Architect specializing in cloud-native applications, AI/ML, and modern web development.",
    siteName: "Aprameya Kannan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aprameya Kannan | Full Stack Developer & Cloud Architect",
    description: "Full Stack Developer and AWS Certified Solutions Architect specializing in cloud-native applications, AI/ML, and modern web development.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://aprameyak.vercel.app'),
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
      </head>
      <body className={`${inter.className} antialiased bg-background text-text`}>
        {children}
      </body>
    </html>
  );
}
