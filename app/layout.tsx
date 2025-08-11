import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './interactive-room.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Portfolio Room',
  description: 'Interactive 2D portfolio room with pixel-art aesthetics',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} antialiased bg-background text-text`}>{children}</body>
    </html>
  );
}

