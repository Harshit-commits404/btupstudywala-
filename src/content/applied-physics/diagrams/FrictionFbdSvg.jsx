import React from 'react';

export const FrictionFbdSvg = () => {
  return (
    <svg
      viewBox="0 0 540 240"
      className="w-full h-auto max-h-[270px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="f-arr-red" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#E63946" />
        </marker>
        <marker id="f-arr-blue" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb" />
        </marker>
        <marker id="f-arr-emerald" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#059669" />
        </marker>
        <marker id="f-arr-slate" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#64748b" />
        </marker>
      </defs>

      {/* Surface Base */}
      <line x1="30" y1="165" x2="360" y2="165" stroke="#64748b" strokeWidth="2.5" />
      {/* Hatching for floor */}
      <line x1="40" y1="165" x2="30" y2="177" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="80" y1="165" x2="70" y2="177" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="120" y1="165" x2="110" y2="177" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="160" y1="165" x2="150" y2="177" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="200" y1="165" x2="190" y2="177" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="240" y1="165" x2="230" y2="177" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="280" y1="165" x2="270" y2="177" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="320" y1="165" x2="310" y2="177" stroke="#94a3b8" strokeWidth="1.2" />

      {/* Block (Mass m) */}
      <rect
        x="130"
        y="85"
        width="110"
        height="80"
        rx="4"
        className="fill-slate-100 dark:fill-slate-800 stroke-slate-400 dark:stroke-slate-600"
        strokeWidth="2"
      />
      <text
        x="185"
        y="130"
        textAnchor="middle"
        className="fill-slate-800 dark:fill-slate-200 font-bold text-[14px] font-sans"
      >
        Block (m)
      </text>

      {/* Center of Gravity */}
      <circle cx="185" cy="125" r="4" fill="#E63946" />

      {/* Normal Reaction R (Upward) */}
      <line
        x1="185"
        y1="85"
        x2="185"
        y2="20"
        stroke="#2563eb"
        strokeWidth="2.5"
        markerEnd="url(#f-arr-blue)"
      />
      <text
        x="195"
        y="26"
        className="fill-blue-600 dark:fill-blue-400 font-bold text-[12px] font-mono"
      >
        Normal Reaction (R)
      </text>

      {/* Weight W = mg (Downward) */}
      <line
        x1="185"
        y1="125"
        x2="185"
        y2="215"
        stroke="#64748b"
        strokeWidth="2.5"
        markerEnd="url(#f-arr-slate)"
      />
      <text
        x="195"
        y="215"
        className="fill-slate-700 dark:fill-slate-300 font-bold text-[12px] font-mono"
      >
        Weight W = mg
      </text>

      {/* Applied Force P (Rightward) */}
      <line
        x1="240"
        y1="125"
        x2="325"
        y2="125"
        stroke="#059669"
        strokeWidth="2.5"
        markerEnd="url(#f-arr-emerald)"
      />
      <text
        x="260"
        y="112"
        className="fill-emerald-600 dark:fill-emerald-400 font-bold text-[12px] font-mono"
      >
        Applied Force (P)
      </text>

      {/* Friction Force F (Leftward at contact line) */}
      <line
        x1="130"
        y1="165"
        x2="45"
        y2="165"
        stroke="#E63946"
        strokeWidth="3"
        markerEnd="url(#f-arr-red)"
      />
      <text
        x="45"
        y="152"
        className="fill-red-600 dark:fill-red-400 font-extrabold text-[12px] font-mono"
      >
        Friction Force (F)
      </text>

      {/* Right Side Info Box */}
      <g transform="translate(365, 30)">
        <rect
          x="0"
          y="0"
          width="160"
          height="175"
          rx="8"
          className="fill-red-50/70 dark:fill-red-950/20 stroke-red-200 dark:stroke-red-900/50"
        />
        <text x="12" y="22" className="fill-red-700 dark:fill-red-400 font-bold font-mono text-[11px] uppercase tracking-wider">
          Equilibrium & Friction
        </text>

        <text x="12" y="48" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
          Vertical Balance:
        </text>
        <text x="24" y="66" className="fill-blue-600 dark:fill-blue-400 font-bold font-mono text-[12px]">
          R = mg
        </text>

        <text x="12" y="92" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
          Limiting Friction:
        </text>
        <text x="24" y="110" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[13px]">
          F = μ · R
        </text>

        <text x="12" y="136" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
          Coefficient of Friction:
        </text>
        <text x="24" y="156" className="fill-red-700 dark:fill-red-400 font-bold font-mono text-[13px]">
          μ = F / R
        </text>
      </g>
    </svg>
  );
};

export default FrictionFbdSvg;
