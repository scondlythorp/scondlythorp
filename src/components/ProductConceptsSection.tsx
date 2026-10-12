import React from 'react';
import { productConceptsData } from '../data/product-concepts';
import { ExternalLink, Layers, ShieldCheck, Cpu } from 'lucide-react';

export const ProductConceptsSection: React.FC = () => {
  return (
    <div className="space-y-8 pt-4">
      {/* Brand & Section Intro */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white tracking-tight">Modou Lamin Thorp</span>
            <span className="text-slate-500">·</span>
            <span className="text-xs font-mono text-cyan-400 font-semibold">Gambian_Techie</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">
              Specification stage (v1.0)
            </span>
            <a
              href="/product-concepts.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 font-medium cursor-pointer"
            >
              Open Standalone Single-File Version
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Product Concepts and Technical Specifications
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mt-2 max-w-3xl">
            Five independent software products I have planned and documented in detail, each with architecture, database design, API design, security and testing specifications. They are in the specification stage, not live.
          </p>
        </div>
      </div>

      {/* Grid: 1 col on phones, 2 on tablets, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productConceptsData.map((concept) => (
          <article
            key={concept.id}
            tabIndex={0}
            className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 group shadow-lg"
            aria-labelledby={`concept-${concept.id}`}
          >
            {/* Original abstract SVG illustration */}
            <div className="w-full h-44 bg-slate-950 border-b border-slate-800 flex items-center justify-center overflow-hidden">
              {concept.themeVisual === 'nova-agrisense' && (
                <svg viewBox="0 0 400 180" className="w-full h-full" role="img" aria-label="Abstract vector illustration of Nova AgriSense showing agricultural crop rows and a bar chart in deep green and earth brown">
                  <rect width="400" height="180" fill="#1b382b" />
                  <path d="M0 130 Q100 115 200 128 T400 120 L400 180 L0 180 Z" fill="#4d3222" opacity="0.9" />
                  <path d="M0 145 Q120 135 240 148 T400 140 L400 180 L0 180 Z" fill="#382417" />
                  <path d="M40 180 L140 125" stroke="#2d5a3e" strokeWidth="4" strokeLinecap="round" />
                  <path d="M100 180 L170 125" stroke="#2d5a3e" strokeWidth="4" strokeLinecap="round" />
                  <path d="M160 180 L200 125" stroke="#2d5a3e" strokeWidth="4" strokeLinecap="round" />
                  <path d="M220 180 L230 125" stroke="#2d5a3e" strokeWidth="4" strokeLinecap="round" />
                  <path d="M280 180 L260 125" stroke="#2d5a3e" strokeWidth="4" strokeLinecap="round" />
                  <rect x="240" y="50" width="22" height="60" rx="3" fill="#529b6e" />
                  <rect x="272" y="32" width="22" height="78" rx="3" fill="#6bbe8b" />
                  <rect x="304" y="65" width="22" height="45" rx="3" fill="#886047" />
                  <rect x="336" y="20" width="22" height="90" rx="3" fill="#8cd9a8" />
                  <line x1="225" y1="112" x2="375" y2="112" stroke="#a37657" strokeWidth="2" />
                  <polyline points="251,45 283,28 315,55 347,15" fill="none" stroke="#d5bba8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="70" cy="50" r="24" fill="#a57754" opacity="0.35" />
                  <circle cx="70" cy="50" r="14" fill="#d5bba8" opacity="0.8" />
                </svg>
              )}

              {concept.themeVisual === 'grocloud' && (
                <svg viewBox="0 0 400 180" className="w-full h-full" role="img" aria-label="Abstract vector illustration of GroCloud showing a greenhouse structure with sensor signal waves in botanical green and soft blue">
                  <rect width="400" height="180" fill="#0d2426" />
                  <path d="M0 150 Q100 135 200 148 T400 142 L400 180 L0 180 Z" fill="#143c3a" />
                  <path d="M90 145 L90 85 L150 45 L210 85 L210 145 Z" fill="#184e46" stroke="#38a38d" strokeWidth="2" />
                  <line x1="150" y1="45" x2="150" y2="145" stroke="#38a38d" strokeWidth="1.5" />
                  <line x1="90" y1="105" x2="210" y2="105" stroke="#38a38d" strokeWidth="1.5" />
                  <circle cx="120" cy="130" r="10" fill="#2fd19d" opacity="0.6" />
                  <circle cx="150" cy="125" r="12" fill="#2fd19d" opacity="0.8" />
                  <circle cx="180" cy="130" r="10" fill="#2fd19d" opacity="0.6" />
                  <circle cx="150" cy="45" r="5" fill="#60a5fa" />
                  <path d="M165 40 A20 20 0 0 1 175 60" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                  <path d="M175 32 A32 32 0 0 1 190 65" fill="none" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
                  <path d="M185 24 A45 45 0 0 1 205 70" fill="none" stroke="#bfdbfe" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                  <path d="M230 110 Q260 60 290 85 T350 45 T390 70" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="290" cy="85" r="4" fill="#38bdf8" />
                  <circle cx="350" cy="45" r="4" fill="#60a5fa" />
                  <circle cx="350" cy="45" r="9" fill="none" stroke="#93c5fd" strokeWidth="1.5" opacity="0.7" />
                </svg>
              )}

              {concept.themeVisual === 'smart-farm' && (
                <svg viewBox="0 0 400 180" className="w-full h-full" role="img" aria-label="Abstract vector illustration of Smart Farm Management showing a field grid and an offline task checklist in forest green and neutral tones">
                  <rect width="400" height="180" fill="#132a1e" />
                  <g transform="translate(40, 50)" stroke="#2b5941" strokeWidth="1.5" fill="#1a3d2c">
                    <polygon points="60,0 160,0 120,70 20,70" />
                    <polygon points="165,0 265,0 225,70 125,70" fill="#204834" />
                    <polygon points="20,75 120,75 80,115 -20,115" />
                    <polygon points="125,75 225,75 185,115 85,115" fill="#24523b" />
                  </g>
                  <line x1="85" y1="65" x2="160" y2="65" stroke="#3b7a59" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="105" y1="85" x2="180" y2="85" stroke="#3b7a59" strokeWidth="1.5" strokeDasharray="3 3" />
                  <rect x="250" y="30" width="105" height="120" rx="6" fill="#1f3b2e" stroke="#52886a" strokeWidth="2" />
                  <rect x="280" y="24" width="45" height="12" rx="3" fill="#52886a" />
                  <rect x="265" y="52" width="12" height="12" rx="2" fill="#2ecc71" />
                  <polyline points="267,58 270,61 275,54" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                  <line x1="285" y1="58" x2="335" y2="58" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
                  <rect x="265" y="74" width="12" height="12" rx="2" fill="#2ecc71" />
                  <polyline points="267,80 270,83 275,76" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                  <line x1="285" y1="80" x2="340" y2="80" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
                  <rect x="265" y="96" width="12" height="12" rx="2" fill="#1a3d2c" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="285" y1="102" x2="325" y2="102" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="302" cy="128" r="9" fill="#132a1e" stroke="#82b89a" strokeWidth="1.5" />
                  <path d="M298 126 L306 126 L303 123" fill="none" stroke="#82b89a" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M306 130 L298 130 L301 133" fill="none" stroke="#82b89a" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              )}

              {concept.themeVisual === 'ai-control-plane' && (
                <svg viewBox="0 0 400 180" className="w-full h-full" role="img" aria-label="Abstract vector illustration of AI Operations Control Plane showing a node graph with a security shield in charcoal and blue">
                  <rect width="400" height="180" fill="#111827" />
                  <line x1="60" y1="50" x2="130" y2="90" stroke="#1f2937" strokeWidth="2" />
                  <line x1="60" y1="130" x2="130" y2="90" stroke="#1f2937" strokeWidth="2" />
                  <line x1="130" y1="90" x2="200" y2="90" stroke="#2563eb" strokeWidth="2.5" />
                  <line x1="200" y1="90" x2="270" y2="50" stroke="#1f2937" strokeWidth="2" />
                  <line x1="200" y1="90" x2="270" y2="130" stroke="#1f2937" strokeWidth="2" />
                  <line x1="270" y1="50" x2="340" y2="90" stroke="#1f2937" strokeWidth="2" />
                  <line x1="270" y1="130" x2="340" y2="90" stroke="#1f2937" strokeWidth="2" />
                  <circle cx="60" cy="50" r="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                  <circle cx="60" cy="130" r="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                  <circle cx="130" cy="90" r="10" fill="#1d4ed8" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="270" cy="50" r="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                  <circle cx="270" cy="130" r="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                  <circle cx="340" cy="90" r="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                  <g transform="translate(175, 55)">
                    <path d="M25 0 L50 12 L50 42 C50 62 25 72 25 72 C25 72 0 62 0 42 L0 12 Z" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2.5" />
                    <path d="M17 35 L23 42 L34 28" fill="none" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <circle cx="200" cy="90" r="38" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
                </svg>
              )}

              {concept.themeVisual === 'agribridge' && (
                <svg viewBox="0 0 400 180" className="w-full h-full" role="img" aria-label="Abstract vector illustration of AgriBridge Gambia showing two linked nodes with an agricultural market stall in agricultural green and warm neutral tones">
                  <rect width="400" height="180" fill="#15281e" />
                  <path d="M0 145 C120 135 280 155 400 140 L400 180 L0 180 Z" fill="#3a2e24" opacity="0.7" />
                  <path d="M70 120 Q200 40 330 120" fill="none" stroke="#48bb78" strokeWidth="3" strokeDasharray="6 4" />
                  <circle cx="70" cy="120" r="16" fill="#22543d" stroke="#68d391" strokeWidth="2.5" />
                  <path d="M63 120 L68 114 L77 125" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <text x="70" y="152" fill="#c6f6d5" fontSize="10" fontFamily="system-ui" textAnchor="middle" fontWeight="600">Producers</text>
                  <circle cx="330" cy="120" r="16" fill="#2c5282" stroke="#63b3ed" strokeWidth="2.5" />
                  <path d="M324 120 L336 120 M330 114 L330 126" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <text x="330" y="152" fill="#bee3f8" fontSize="10" fontFamily="system-ui" textAnchor="middle" fontWeight="600">Buyers</text>
                  <g transform="translate(155, 65)">
                    <polygon points="10,25 80,25 70,0 20,0" fill="#d69e2e" />
                    <polygon points="25,25 35,25 30,0 22,0" fill="#eedc82" />
                    <polygon points="45,25 55,25 50,0 42,0" fill="#eedc82" />
                    <polygon points="65,25 75,25 68,0 60,0" fill="#eedc82" />
                    <rect x="18" y="25" width="54" height="25" fill="#744210" rx="2" />
                    <rect x="23" y="30" width="12" height="8" fill="#48bb78" rx="1" />
                    <rect x="39" y="30" width="12" height="8" fill="#ed8936" rx="1" />
                    <rect x="55" y="30" width="12" height="8" fill="#ecc94b" rx="1" />
                    <circle cx="45" cy="5" r="9" fill="#38a169" stroke="#ffffff" strokeWidth="1.5" />
                    <polyline points="42,5 44,7 48,3" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                  </g>
                </svg>
              )}
            </div>

            {/* Content Area */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                    {concept.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                    {concept.status}
                  </span>
                </div>

                <h3 id={`concept-${concept.id}`} className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {concept.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  {concept.description}
                </p>
              </div>

              {/* 4 Tag Chips */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {concept.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
