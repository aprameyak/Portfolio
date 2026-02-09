'use client';

import { MinimalHero } from './components/MinimalHero';
import { MinimalProjects } from './components/MinimalProjects';
import { MinimalExperience } from './components/MinimalExperience';

import { MinimalContact } from './components/MinimalContact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MinimalHero />
      <MinimalProjects />
      <MinimalExperience />

      <MinimalContact />
      <footer className="py-20 px-8 text-center bg-white border-t border-black/5">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-300">
          © 2026 Aprameya Kannan • Built with Next.js
        </p>
      </footer>
    </main>
  );
}
