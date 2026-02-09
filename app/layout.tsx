import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-inter',
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: "Aprameya Kannan",
  description: "Aprameya Kannan's Portfolio",
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
    "Booz Allen Hamilton",
    "Stanford University",
    "Enterprise Applications",
    "Cloud Native",
    "TypeScript",
    "Next.js",
    "AWS",
    "Portfolio",
    "Java",
    "JavaScript",
    "Python",
    "React",
    "Node",
    "Flask",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "DynamoDB",
    "SQLite",
    "Supabase",
    "Firebase",
    "Docker",
    "Git",
    "Agile",
    "Scrum",
    "Kanban",
    "SAFe",
    "Jira",
    "Confluence",
    "Trello",
    "Linear",
    "Notion",
    "Express.js",
    "SpringBoot",
    "LangChain",
    "Tailwind CSS",
    "JUnit",
    "Jest",
    "Pytest",
    "Azure",
    "GCP",
    "GitHub",
    "GitLab",
    "Vercel",
    "Render",
    "CI/CD",
    "Postman",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
    "BeautifulSoup",
    "Selenium",
    "Mongoose",
    "Clerk",
    "SQL",
    "Bash",
    "HTML/CSS",
    "JSON",
    "XML"
  ],
  authors: [{ name: "Aprameya Kannan" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aprameyak.vercel.app",
    title: "Aprameya Kannan",
    description: "Aprameya Kannan's Portfolio",
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
    title: "Aprameya Kannan",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${ebGaramond.variable}`}>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased bg-background text-text relative`}>

        {children}
        <Analytics />
      </body>
    </html>
  );
}
