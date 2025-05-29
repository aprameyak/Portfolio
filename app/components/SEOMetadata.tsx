import { Metadata } from 'next';

export const generateMetadata = (
  title: string,
  description: string,
  path: string = ''
): Metadata => {
  const baseUrl = 'https://aprameyak.vercel.app';
  
  return {
    title: `${title} | Aprameya Kannan`,
    description,
    keywords: [
      'Full Stack Developer',
      'Software Engineer',
      'Cloud Architect',
      'AWS Certified',
      'React Developer',
      'Node.js Developer',
      'Python Developer',
      'AI/ML Engineer',
      'University of Maryland',
      'Computer Science'
    ],
    authors: [{ name: 'Aprameya Kannan' }],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `${baseUrl}${path}`,
      title: `${title} | Aprameya Kannan`,
      description,
      siteName: 'Aprameya Kannan Portfolio',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Aprameya Kannan Portfolio'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Aprameya Kannan`,
      description,
      images: [`${baseUrl}/og-image.png`]
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
      google: 'your-google-verification-code', // Add your Google verification code
    },
  };
};

export default generateMetadata; 