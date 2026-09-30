import React from 'react';

export const VenturiTubeSvg = () => {
  return (
    <svg
      viewBox="0 0 540 240"
      className="w-full h-auto max-h-[270px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="vt-arr-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="#2563eb" />
        </marker>
        <marker id="vt-arr-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#E63946" />
        </marker>
      </defs>

      {/* Venturi Tube Body */}
      {/* Top wall */}
      <path
        d="M 40 100 L 160 100 Q 230 100 250 120 L 290 120 Q 310 100 380 100 L 500 100"
        fill="none"
        stroke="#475569"
        strokeWidth="3"
      />
      {/* Bottom wall */}
      <path
        d="M 40 200 L 160 200 Q 230 200 250 180 L 290 180 Q 310 200 380 200 L 500 200"
        fill="none"
        stroke="#475569"
        strokeWidth="3"
      />

      {/* Fluid stream interior fill */}
      <path
        d="M 40 100 L 160 100 Q 230 100 250 120 L 290 120 Q 310 100 380 100 L 500 100 L 500 200 L 380 200 Q 310 200 290 180 L 250 180 Q 230 200 160 200 L 40 200 Z"
        fill="#3b82f6"
        opacity="0.15"
      />

      {/* Streamlines inside tube */}
      <path d="M 40 125 L 160 125 Q 230 125 250 135 L 290 135 Q 310 125 380 125 L 500 125" fill="none" stroke="#60a5fa" strokeDasharray="5 3" />
      <path d="M 40 150 L 500 150" fill="none" stroke="#60a5fa" strokeWidth="1.5" />
      <path d="M 40 175 L 160 175 Q 230 175 250 165 L 290 165 Q 310 175 380 175 L 500 175" fill="none" stroke="#60a5fa" strokeDasharray="5 3" />

      {/* Manometer Column 1 (Wider Section A1, High Pressure P1) */}
      <line x1="120" y1="100" x2="120" y2="25" stroke="#64748b" strokeWidth="2.5" />
      <line x1="135" y1="100" x2="135" y2="25" stroke="#64748b" strokeWidth="2.5" />
      {/* Liquid in Column 1 (Higher level due to higher P1) */}
      <rect x="121" y="45" width="13" height="55" fill="#3b82f6" opacity="0.4" />
      <line x1="121" y1="45" x2="134" y2="45" stroke="#2563eb" strokeWidth="2" />
      <text x="127" y="18" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold font-mono text-[11px]">
        P1 (High)
      </text>

      {/* Manometer Column 2 (Narrow Section A2, Low Pressure P2) */}
      <line x1="262" y1="120" x2="262" y2="25" stroke="#64748b" strokeWidth="2.5" />
      <line x1="277" y1="120" x2="277" y2="25" stroke="#64748b" strokeWidth="2.5" />
      {/* Liquid in Column 2 (Lower level due to lower P2) */}
      <rect x="263" y="80" width="13" height="40" fill="#3b82f6" opacity="0.4" />
      <line x1="263" y1="80" x2="276" y2="80" stroke="#2563eb" strokeWidth="2" />
      <text x="270" y="18" textAnchor="middle" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[11px]">
        P2 (Low)
      </text>

      {/* Pressure Difference h */}
      <line x1="150" y1="45" x2="250" y2="45" stroke="#94a3b8" strokeDasharray="3 2" />
      <line x1="150" y1="80" x2="250" y2="80" stroke="#94a3b8" strokeDasharray="3 2" />
      <line x1="245" y1="45" x2="245" y2="80" stroke="#E63946" strokeWidth="1.8" />
      <text x="235" y="66" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[11px]">
        Δh
      </text>

      {/* Section 1 Labels (Wide) */}
      <text x="75" y="135" className="fill-slate-700 dark:fill-slate-300 font-bold font-mono text-[12px]">
        Area A1
      </text>
      <line x1="60" y1="150" x2="95" y2="150" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#vt-arr-blue)" />
      <text x="65" y="172" className="fill-blue-600 dark:fill-blue-400 font-bold font-mono text-[11px]">
        v1 (Lower)
      </text>

      {/* Section 2 Labels (Narrow Constriction) */}
      <text x="270" y="140" textAnchor="middle" className="fill-slate-800 dark:fill-white font-bold font-mono text-[11px]">
        A2 &lt; A1
      </text>
      <line x1="260" y1="150" x2="305" y2="150" stroke="#E63946" strokeWidth="3" markerEnd="url(#vt-arr-red)" />
      <text x="270" y="170" textAnchor="middle" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[11px]">
        v2 (Higher)
      </text>

      {/* Bottom Formula Banner */}
      <rect
        x="60"
        y="212"
        width="420"
        height="24"
        rx="4"
        className="fill-slate-100/90 dark:fill-slate-800/80 stroke-slate-200 dark:stroke-slate-700"
      />
      <text
        x="270"
        y="228"
        textAnchor="middle"
        className="fill-slate-800 dark:fill-slate-200 font-mono font-bold text-[11px]"
      >
        Continuity: A1·v1 = A2·v2  |  Bernoulli: P + ½ρv² + ρgh = Constant
      </text>
    </svg>
  );
};

export default VenturiTubeSvg;
