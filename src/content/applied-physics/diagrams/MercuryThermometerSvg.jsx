import React from 'react';

export const MercuryThermometerSvg = () => {
  return (
    <svg
      viewBox="0 0 540 180"
      className="w-full h-auto max-h-[220px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="mt-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="#64748b" />
        </marker>
      </defs>

      {/* Outer Glass Stem (Horizontal) */}
      <rect
        x="90"
        y="75"
        width="380"
        height="30"
        rx="8"
        className="fill-slate-100/90 dark:fill-slate-800/80 stroke-slate-400 dark:stroke-slate-500"
        strokeWidth="2"
      />

      {/* Cylindrical Glass Bulb at Left */}
      <rect
        x="35"
        y="70"
        width="60"
        height="40"
        rx="14"
        fill="#94a3b8"
        stroke="#475569"
        strokeWidth="2"
      />
      {/* Liquid Mercury inside bulb */}
      <rect
        x="38"
        y="73"
        width="54"
        height="34"
        rx="12"
        fill="#E63946"
        opacity="0.9"
      />

      {/* Narrow Capillary Bore (Centerline) */}
      <rect x="90" y="88" width="370" height="4" fill="#cbd5e1" className="dark:fill-slate-700" />
      {/* Mercury thread inside bore */}
      <rect x="90" y="88" width="220" height="4" fill="#E63946" />
      {/* Meniscus indicator */}
      <circle cx="310" cy="90" r="3" fill="#E63946" />

      {/* Expansion Chamber at Right end */}
      <ellipse cx="460" cy="90" rx="8" ry="10" fill="none" stroke="#64748b" strokeWidth="1.5" />

      {/* Scale Graduations on Glass Stem */}
      {Array.from({ length: 25 }).map((_, i) => (
        <line
          key={i}
          x1={110 + i * 14}
          y1={75}
          x2={110 + i * 14}
          y2={i % 5 === 0 ? 84 : 80}
          stroke="#475569"
          className="dark:stroke-slate-300"
          strokeWidth={i % 5 === 0 ? 1.8 : 1}
        />
      ))}
      <text x="110" y="68" className="fill-slate-600 dark:fill-slate-400 font-mono text-[9px]">0°</text>
      <text x="180" y="68" className="fill-slate-600 dark:fill-slate-400 font-mono text-[9px]">25°</text>
      <text x="250" y="68" className="fill-slate-600 dark:fill-slate-400 font-mono text-[9px]">50°</text>
      <text x="320" y="68" className="fill-slate-600 dark:fill-slate-400 font-mono text-[9px]">75°</text>
      <text x="390" y="68" className="fill-slate-600 dark:fill-slate-400 font-mono text-[9px]">100°C</text>

      {/* CALLOUT LABELS */}
      {/* 1. Bulb Callout */}
      <line x1="65" y1="115" x2="65" y2="145" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#mt-arr)" />
      <text x="65" y="160" textAnchor="middle" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[11px]">
        Mercury Bulb (पारा बल्ब)
      </text>

      {/* 2. Capillary Thread Callout */}
      <line x1="220" y1="95" x2="220" y2="145" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#mt-arr)" />
      <text x="220" y="160" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
        Fine Capillary Bore (केश नली)
      </text>

      {/* 3. Meniscus Callout */}
      <line x1="310" y1="85" x2="310" y2="35" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#mt-arr)" />
      <text x="310" y="25" textAnchor="middle" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[11px]">
        Mercury Meniscus Level
      </text>

      {/* 4. Glass Stem Callout */}
      <line x1="410" y1="110" x2="410" y2="145" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#mt-arr)" />
      <text x="410" y="160" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
        Graduated Glass Stem
      </text>
    </svg>
  );
};

export default MercuryThermometerSvg;
