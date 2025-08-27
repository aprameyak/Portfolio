'use client';
import React, { useState } from 'react';
import InteractiveObject from './InteractiveObject';
import { useRouter } from 'next/navigation';

// Realistic SVG elements
const Window = ({ dark = false }: { dark?: boolean }) => (
  <svg viewBox="0 0 400 260" className="ir-icon" aria-hidden>
    <defs>
      <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#b3e5ff" />
        <stop offset="100%" stopColor="#e0f3ff" />
      </linearGradient>
      <linearGradient id="nightSky" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#0b1530" />
        <stop offset="100%" stopColor="#172447" />
      </linearGradient>
    </defs>
    <rect x="6" y="6" width="388" height="248" rx="10" fill={dark ? '#162038' : '#eef3ff'} stroke="#cfd7f3" strokeWidth="4" />
    <rect x="18" y="18" width="364" height="224" rx="6" fill={dark ? 'url(#nightSky)' : 'url(#sky)'} />
    {dark ? (
      <g opacity="0.9">
        <circle cx="320" cy="48" r="14" fill="#fff7cc" />
        {Array.from({ length: 18 }).map((_, i) => (
          <circle key={i} cx={30 + (i * 18) % 340} cy={40 + ((i * 27) % 170)} r={Math.random() * 1.8 + 0.6} fill="#f6faff" opacity="0.9" />
        ))}
      </g>
    ) : (
      <g opacity="0.9">
        <circle cx="340" cy="48" r="22" fill="#ffe29b" />
        <rect x="18" y="18" width="364" height="224" fill="url(#sky)" opacity="0.3" />
        <path d="M60 170 C 100 130, 160 130, 200 170 S 300 210, 340 170" fill="#9ad0ff" opacity="0.25" />
      </g>
    )}
    <line x1="200" y1="18" x2="200" y2="242" stroke="#cfd7f3" strokeWidth="4" />
    <line x1="18" y1="130" x2="382" y2="130" stroke="#cfd7f3" strokeWidth="4" />
  </svg>
);

const WallBookshelf = () => (
  <svg viewBox="0 0 380 220" className="ir-icon" aria-hidden>
    {/* Frame */}
    <rect x="8" y="8" width="364" height="204" rx="12" fill="#f6efe6" stroke="#c9b9a6" strokeWidth="6" />
    {/* Single clean shelf */}
    <rect x="24" y="120" width="332" height="8" rx="2" fill="#c8a67f" />
    {/* Evenly spaced upright books */}
    {[
      { x: 40, h: 90, fill: '#ffb3ba', stroke: '#cc8f95' },
      { x: 78, h: 84, fill: '#bae1ff', stroke: '#90b6d6' },
      { x: 116, h: 96, fill: '#baffc9', stroke: '#8fca9e' },
      { x: 154, h: 88, fill: '#ffd6a5', stroke: '#d6a874' },
      { x: 192, h: 92, fill: '#cbb6ff', stroke: '#a793eb' },
      { x: 230, h: 86, fill: '#ffcfe1', stroke: '#d6a2b6' },
      { x: 268, h: 94, fill: '#c8f0ff', stroke: '#9fcfe6' },
    ].map(({ x, h, fill, stroke }, i) => (
      <g key={i}>
        <rect x={x} y={120 - h} width={24} height={h} rx={4} fill={fill} stroke={stroke} strokeWidth={3} />
        <rect x={x} y={120 - Math.min(16, h - 8)} width={24} height={6} rx={3} fill="rgba(255,255,255,0.4)" />
      </g>
    ))}
  </svg>
);
const Whiteboard = () => (
  <svg viewBox="0 0 460 280" className="ir-icon" aria-hidden>
    <rect x="6" y="6" width="448" height="268" rx="12" fill="#ffffff" stroke="#d9dee7" strokeWidth="6" />
    <rect x="20" y="20" width="420" height="240" rx="8" fill="#fbfcfe" />
    <g opacity="0.6" stroke="#a2b2c8" strokeWidth="3">
      <line x1="40" y1="80" x2="200" y2="80" />
      <line x1="40" y1="120" x2="260" y2="120" />
      <line x1="40" y1="160" x2="220" y2="160" />
    </g>
    <rect x="360" y="210" width="60" height="14" rx="6" fill="#ffb3c7" />
    <rect x="290" y="210" width="60" height="14" rx="6" fill="#b5e3a1" />
    <rect x="220" y="210" width="60" height="14" rx="6" fill="#9fd3ff" />
  </svg>
);

const DeskLamp = ({ on = true }: { on?: boolean }) => (
  <svg viewBox="0 0 220 220" className="ir-icon" aria-hidden>
    <defs>
      <radialGradient id="lampGlow" cx="50%" cy="70%" r="60%">
        <stop offset="0%" stopColor="rgba(255,255,200,0.9)" />
        <stop offset="100%" stopColor="rgba(255,255,200,0)" />
      </radialGradient>
    </defs>
    <circle cx="140" cy="140" r="80" fill="url(#lampGlow)" opacity={on ? 0.45 : 0.15} />
    <rect x="60" y="160" width="56" height="10" rx="5" fill="#6b6f7a" />
    <rect x="85" y="80" width="8" height="80" rx="4" fill="#7a7f8a" />
    <rect x="85" y="76" width="60" height="8" rx="4" fill="#7a7f8a" />
    <circle cx="147" cy="80" r="18" fill={on ? '#ffe59a' : '#d8cfb3'} stroke="#bfa47a" strokeWidth="3" />
  </svg>
);

const Laptop = () => (
  <svg viewBox="0 0 380 240" className="ir-icon" aria-hidden>
    <rect x="60" y="40" width="260" height="140" rx="12" fill="#1a2030" stroke="#2e3b57" strokeWidth="6" />
    <rect x="76" y="56" width="228" height="100" rx="8" fill="#0e1320" />
    <rect x="40" y="190" width="300" height="16" rx="8" fill="#c7d1df" />
    <rect x="54" y="188" width="272" height="6" rx="3" fill="#aeb8c6" />
  </svg>
);

const Briefcase = () => (
  <svg viewBox="0 0 260 200" className="ir-icon" aria-hidden>
    <rect x="20" y="60" width="220" height="110" rx="16" fill="#8a5c38" stroke="#6b4428" strokeWidth="6" />
    <rect x="98" y="34" width="64" height="28" rx="8" fill="#b1865f" stroke="#8a6746" strokeWidth="4" />
    <rect x="118" y="108" width="24" height="10" rx="4" fill="#2a1d10" />
    <line x1="20" y1="104" x2="240" y2="104" stroke="#6b4428" strokeWidth="6" />
  </svg>
);

const Books = () => (
  <svg viewBox="0 0 280 180" className="ir-icon" aria-hidden>
    {/* Upright books with page caps, spine bands, and bookmarks */}
    <g>
      {/* Book 1 (pink) */}
      <rect x="20" y="36" width="54" height="112" rx="6" fill="#ffb3ba" stroke="#cc8f95" strokeWidth="4" />
      <rect x="22" y="36" width="50" height="10" rx="4" fill="#fff6f7" />
      <rect x="24" y="72" width="46" height="8" rx="4" fill="#e09aa2" opacity="0.8" />
      <rect x="24" y="92" width="46" height="8" rx="4" fill="#e09aa2" opacity="0.6" />
      <path d="M40 52 L48 52 L48 74 L44 70 L40 74 Z" fill="#e26f7b" />

      {/* Book 2 (mint) */}
      <rect x="88" y="44" width="54" height="104" rx="6" fill="#baffc9" stroke="#8fca9e" strokeWidth="4" />
      <rect x="90" y="44" width="50" height="10" rx="4" fill="#f3fff6" />
      <rect x="92" y="78" width="46" height="8" rx="4" fill="#9fdcab" opacity="0.85" />
      <rect x="92" y="98" width="46" height="8" rx="4" fill="#9fdcab" opacity="0.65" />
      <path d="M118 60 L126 60 L126 82 L122 78 L118 82 Z" fill="#79c391" />

      {/* Book 3 (blue) taller */}
      <rect x="156" y="28" width="54" height="120" rx="6" fill="#bae1ff" stroke="#90b6d6" strokeWidth="4" />
      <rect x="158" y="28" width="50" height="10" rx="4" fill="#f5fbff" />
      <rect x="160" y="70" width="46" height="8" rx="4" fill="#9fc6e6" opacity="0.85" />
      <rect x="160" y="90" width="46" height="8" rx="4" fill="#9fc6e6" opacity="0.65" />
      <path d="M182 46 L190 46 L190 68 L186 64 L182 68 Z" fill="#7ab3df" />
    </g>

    {/* Flat book (cream) to clarify the context */}
    <g>
      <rect x="56" y="150" width="132" height="14" rx="6" fill="#e6d7b8" stroke="#d1c1a2" strokeWidth="3" />
      <rect x="56" y="142" width="132" height="12" rx="6" fill="#fff6e1" />
      <rect x="60" y="144" width="124" height="2" rx="1" fill="#ead9bc" />
      <rect x="60" y="148" width="124" height="2" rx="1" fill="#ead9bc" />
    </g>
  </svg>
);

const Notes = () => (
  <svg viewBox="0 0 200 160" className="ir-icon" aria-hidden>
    <rect x="24" y="22" width="152" height="116" rx="10" fill="#fffdf5" stroke="#e1dcc8" strokeWidth="4" />
    <line x1="40" y1="54" x2="164" y2="54" stroke="#e6e0cd" strokeWidth="2" />
    <line x1="40" y1="80" x2="164" y2="80" stroke="#e6e0cd" strokeWidth="2" />
    <line x1="40" y1="106" x2="164" y2="106" stroke="#e6e0cd" strokeWidth="2" />
  </svg>
);

const Cup = () => (
  <svg viewBox="0 0 160 160" className="ir-icon" aria-hidden>
    <rect x="40" y="50" width="76" height="64" rx="14" fill="#e8f0ff" stroke="#c7d1e6" strokeWidth="4" />
    <path d="M116 62 C136 62, 136 102, 116 102" fill="none" stroke="#c7d1e6" strokeWidth="6" />
    <rect x="56" y="108" width="44" height="8" rx="4" fill="#c7d1e6" />
  </svg>
);

const Phone = () => (
  <svg viewBox="0 0 120 200" className="ir-icon" aria-hidden>
    <rect x="16" y="10" width="88" height="180" rx="24" fill="#232a3b" stroke="#3a4561" strokeWidth="4" />
    <rect x="26" y="32" width="68" height="128" rx="10" fill="#0e1320" />
    <circle cx="60" cy="172" r="6" fill="#9fb2ff" />
  </svg>
);

const PortfolioRoom: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const router = useRouter();

  return (
    <div className={`room${isDark ? ' room--dark' : ''}`}>
      <div className="room__inner">
        {/* Wall and floor */}
        <div className="wall" />
        <div className="floor" />

        {/* Window and whiteboard */}
        <div className="window">
          <InteractiveObject label="Enjoying the outdoors" ariaLabel="Window">
            <Window dark={isDark} />
          </InteractiveObject>
        </div>
        <div className="whiteboard">
          <InteractiveObject label="Aspiring tech professional" ariaLabel="Whiteboard">
            <Whiteboard />
          </InteractiveObject>
        </div>
        <div className="bookshelf">
          <InteractiveObject label="Studying at the University of Maryland" ariaLabel="Bookshelf">
            <WallBookshelf />
          </InteractiveObject>
        </div>

        {/* Desk and items */}
        <div className="desk">
          <div className="desk__items">
            <div className="desk__lamp">
              <InteractiveObject
                label={isDark ? 'Lights On' : 'Lights Off'}
                ariaLabel="Toggle lights"
                onClick={() => setIsDark((v) => !v)}
              >
                <DeskLamp on={isDark} />
              </InteractiveObject>
            </div>
            <div className="desk__laptop">
              <InteractiveObject label="Projects" ariaLabel="Open Projects" onClick={() => router.push('/projects')}>
                <Laptop />
              </InteractiveObject>
            </div>
            <div className="desk__briefcase">
              <InteractiveObject label="Experience" ariaLabel="Open Experience" onClick={() => router.push('/experience')}>
                <Briefcase />
              </InteractiveObject>
            </div>
            <div className="desk__phone">
              <InteractiveObject label="Contact" ariaLabel="Open Contact" onClick={() => router.push('/contact')}>
                <Phone />
              </InteractiveObject>
            </div>
            {/* Decorative items with hover labels (no clicks) */}
            <div className="desk__notes">
              <InteractiveObject label="Finding new opportunities" ariaLabel="Notes">
                <Notes />
              </InteractiveObject>
            </div>
            <div className="desk__cup">
              <InteractiveObject label="Drinking coffee" ariaLabel="Coffee">
                <Cup />
              </InteractiveObject>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioRoom;


