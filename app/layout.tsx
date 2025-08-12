import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './interactive-room.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Aprameya Kannan',
  description: 'My portfolio',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} antialiased bg-background text-text`}>
        <header className="fixed inset-x-0 top-0 z-50 py-3">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="text-xl md:text-2xl font-semibold gradient-text drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">Aprameya Kannan</h1>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

