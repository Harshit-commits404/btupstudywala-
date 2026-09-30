import React from 'react';

export const StressStrainCurveSvg = () => {
  return (
    <svg
      viewBox="0 0 540 250"
      className="w-full h-auto max-h-[280px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="ssc-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="#64748b" />
        </marker>
      </defs>

      {/* Coordinate Axes */}
      {/* Strain Axis (Horizontal) */}
      <line x1="60" y1="200" x2="500" y2="200" stroke="#64748b" strokeWidth="2" markerEnd="url(#ssc-arr)" />
      <text x="440" y="224" className="fill-slate-700 dark:fill-slate-300 font-bold text-[12px] font-mono">
        Strain (ε) →
      </text>

      {/* Stress Axis (Vertical) */}
      <line x1="60" y1="200" x2="60" y2="20" stroke="#64748b" strokeWidth="2" markerEnd="url(#ssc-arr)" />
      <text x="15" y="25" className="fill-slate-700 dark:fill-slate-300 font-bold text-[12px] font-mono">
        Stress (σ) ↑
      </text>

      {/* Origin O */}
      <circle cx="60" cy="200" r="3.5" fill="#64748b" />
      <text x="46" y="214" className="fill-slate-500 font-mono text-[11px]">
        O
      </text>

      {/* Elastic Region Shaded Background */}
      <rect x="60" y="35" width="100" height="165" fill="#2563eb" opacity="0.06" />
      <text x="110" y="190" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold text-[10px] uppercase font-mono">
        Elastic Region
      </text>

      {/* Plastic Region Shaded Background */}
      <rect x="160" y="35" width="310" height="165" fill="#E63946" opacity="0.04" />
      <text x="315" y="190" textAnchor="middle" className="fill-red-600 dark:fill-red-400 font-bold text-[10px] uppercase font-mono">
        Plastic Deformation Region
      </text>

      {/* Stress-Strain Curve Path */}
      {/* O -> P (straight line, Hooke's Law) -> E (elastic limit) -> Y (yield) -> U (ultimate) -> F (fracture) */}
      <path
        d="M 60 200 L 130 110 Q 145 95 160 90 Q 210 92 280 60 Q 380 35 440 50 Q 460 60 470 75"
        fill="none"
        stroke="#E63946"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* POINT P: Proportional Limit */}
      <circle cx="130" cy="110" r="4" fill="#2563eb" />
      <line x1="130" y1="110" x2="130" y2="200" stroke="#94a3b8" strokeDasharray="3 2" strokeWidth="1" />
      <text x="100" y="105" className="fill-blue-600 dark:fill-blue-400 font-bold text-[11px] font-mono">
        P (Hooke's Law)
      </text>

      {/* POINT E: Elastic Limit */}
      <circle cx="160" cy="90" r="4" fill="#059669" />
      <text x="155" y="80" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-[11px] font-mono">
        E (Elastic Limit)
      </text>

      {/* POINT Y: Yield Point */}
      <circle cx="210" cy="85" r="4" fill="#d97706" />
      <text x="215" y="98" className="fill-amber-600 dark:fill-amber-400 font-bold text-[11px] font-mono">
        Y (Yield Point)
      </text>

      {/* POINT U: Ultimate Tensile Strength */}
      <circle cx="410" cy="40" r="4" fill="#E63946" />
      <text x="360" y="32" className="fill-red-600 dark:fill-red-400 font-extrabold text-[11px] font-mono">
        U (Ultimate Strength)
      </text>

      {/* POINT F: Fracture / Breaking Point */}
      <circle cx="470" cy="75" r="5" fill="#991b1b" />
      <text x="445" y="95" className="fill-red-800 dark:fill-red-400 font-bold text-[11px] font-mono">
        F (Breaking Point)
      </text>
    </svg>
  );
};

export default StressStrainCurveSvg;
