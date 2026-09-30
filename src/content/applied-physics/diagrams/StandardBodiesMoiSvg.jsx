import React from 'react';

export const StandardBodiesMoiSvg = () => {
  return (
    <svg
      viewBox="0 0 560 250"
      className="w-full h-auto max-h-[280px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 4 Quadrants: 2x2 grid */}
      {/* Horizontal Divider */}
      <line x1="20" y1="125" x2="540" y2="125" stroke="#cbd5e1" strokeDasharray="3 3" className="dark:stroke-slate-800" />
      {/* Vertical Divider */}
      <line x1="280" y1="10" x2="280" y2="240" stroke="#cbd5e1" strokeDasharray="3 3" className="dark:stroke-slate-800" />

      {/* 1. UNIFORM ROD (Top-Left) */}
      <g transform="translate(10, 5)">
        <text x="130" y="20" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 font-bold text-[12px] font-sans">
          1. Uniform Rod (Length L)
        </text>
        {/* Rod body */}
        <rect x="50" y="55" width="160" height="12" rx="4" className="fill-slate-300 dark:fill-slate-600 stroke-slate-400 dark:stroke-slate-500" />
        {/* Central Axis */}
        <line x1="130" y1="28" x2="130" y2="92" stroke="#E63946" strokeWidth="2.2" strokeDasharray="4 2" />
        <circle cx="130" cy="61" r="3" fill="#E63946" />
        {/* Formula */}
        <text x="130" y="112" textAnchor="middle" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[13px]">
          I = ML² / 12
        </text>
      </g>

      {/* 2. CIRCULAR RING (Top-Right) */}
      <g transform="translate(290, 5)">
        <text x="130" y="20" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 font-bold text-[12px] font-sans">
          2. Circular Ring (Radius R)
        </text>
        {/* Ring (Hollow) */}
        <ellipse cx="130" cy="62" rx="55" ry="24" fill="none" stroke="#2563eb" strokeWidth="6" />
        {/* Central Axis */}
        <line x1="130" y1="28" x2="130" y2="95" stroke="#E63946" strokeWidth="2.2" strokeDasharray="4 2" />
        {/* Formula */}
        <text x="130" y="112" textAnchor="middle" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[13px]">
          I = MR²
        </text>
      </g>

      {/* 3. CIRCULAR DISC (Bottom-Left) */}
      <g transform="translate(10, 130)">
        <text x="130" y="20" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 font-bold text-[12px] font-sans">
          3. Circular Disc (Radius R)
        </text>
        {/* Solid Disc */}
        <ellipse cx="130" cy="60" rx="55" ry="24" className="fill-blue-500/20 dark:fill-blue-500/30 stroke-blue-600 dark:stroke-blue-400" strokeWidth="2" />
        {/* Central Axis */}
        <line x1="130" y1="26" x2="130" y2="94" stroke="#E63946" strokeWidth="2.2" strokeDasharray="4 2" />
        {/* Formula */}
        <text x="130" y="110" textAnchor="middle" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[13px]">
          I = MR² / 2
        </text>
      </g>

      {/* 4. SOLID SPHERE (Bottom-Right) */}
      <g transform="translate(290, 130)">
        <text x="130" y="20" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 font-bold text-[12px] font-sans">
          4. Solid Sphere (Radius R)
        </text>
        {/* Sphere with equator line */}
        <circle cx="130" cy="60" r="28" className="fill-emerald-500/20 dark:fill-emerald-500/30 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2" />
        <ellipse cx="130" cy="60" rx="28" ry="10" fill="none" stroke="#059669" strokeWidth="1" strokeDasharray="3 3" />
        {/* Diameter Axis */}
        <line x1="130" y1="24" x2="130" y2="96" stroke="#E63946" strokeWidth="2.2" strokeDasharray="4 2" />
        {/* Formula */}
        <text x="130" y="110" textAnchor="middle" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[13px]">
          I = 2MR² / 5
        </text>
      </g>
    </svg>
  );
};

export default StandardBodiesMoiSvg;
