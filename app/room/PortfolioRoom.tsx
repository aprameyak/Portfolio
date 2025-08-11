'use client';
import React, { useState } from 'react';
import InteractiveObject from './InteractiveObject';

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

const PC = () => (
  <svg viewBox="0 0 380 240" className="ir-icon" aria-hidden>
    <rect x="20" y="24" width="340" height="180" rx="12" fill="#1a2030" stroke="#2e3b57" strokeWidth="6" />
    <rect x="40" y="44" width="300" height="120" rx="8" fill="#0e1320" />
    <rect x="150" y="204" width="80" height="8" rx="4" fill="#aeb8c6" />
    <rect x="170" y="214" width="40" height="6" rx="3" fill="#c7d1df" />
  </svg>
);

const Notebook = () => (
  <svg viewBox="0 0 240 160" className="ir-icon" aria-hidden>
    <rect x="18" y="18" width="204" height="124" rx="10" fill="#fff5e6" stroke="#e2c9a7" strokeWidth="4" />
    <line x1="40" y1="42" x2="200" y2="42" stroke="#e8d6be" strokeWidth="2" />
    <line x1="40" y1="66" x2="200" y2="66" stroke="#e8d6be" strokeWidth="2" />
    <line x1="40" y1="90" x2="200" y2="90" stroke="#e8d6be" strokeWidth="2" />
    <line x1="40" y1="114" x2="200" y2="114" stroke="#e8d6be" strokeWidth="2" />
    <rect x="26" y="24" width="6" height="112" rx="3" fill="#d9b3ff" />
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

  return (
    <div className={`room${isDark ? ' room--dark' : ''}`}>
      <div className="room__inner">
        {/* Wall and floor */}
        <div className="wall" />
        <div className="floor" />

        {/* Window and whiteboard */}
        <div className="window">
          <Window dark={isDark} />
        </div>
        <div className="whiteboard">
          <Whiteboard />
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
            <div className="desk__pc">
              <InteractiveObject label="Projects" ariaLabel="Open Projects">
                <PC />
              </InteractiveObject>
            </div>
            <div className="desk__notebook">
              <InteractiveObject label="Notes & Articles" ariaLabel="Open Notes">
                <Notebook />
              </InteractiveObject>
            </div>
            <div className="desk__phone">
              <InteractiveObject label="Contact" ariaLabel="Open Contact">
                <Phone />
              </InteractiveObject>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioRoom;


