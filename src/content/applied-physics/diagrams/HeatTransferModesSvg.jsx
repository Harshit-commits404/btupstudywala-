import React from 'react';

export const HeatTransferModesSvg = () => {
  return (
    <svg
      viewBox="0 0 560 260"
      className="w-full h-auto max-h-[290px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="htm-arr-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="#E63946" />
        </marker>
        <marker id="htm-arr-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="#2563eb" />
        </marker>
      </defs>

      {/* Burner / Flame at bottom */}
      <g transform="translate(190, 200)">
        {/* Burner base */}
        <rect x="0" y="30" width="80" height="12" rx="3" fill="#475569" />
        {/* Flames */}
        <path d="M 15 30 Q 25 5 28 30 Z" fill="#E63946" />
        <path d="M 30 30 Q 40 0 45 30 Z" fill="#f59e0b" />
        <path d="M 45 30 Q 55 5 58 30 Z" fill="#E63946" />
        <path d="M 35 30 Q 40 10 43 30 Z" fill="#3b82f6" opacity="0.6" />
        <text x="40" y="55" textAnchor="middle" className="fill-slate-500 font-mono text-[10px]">
          Heat Source
        </text>
      </g>

      {/* Pot / Pan with Liquid */}
      {/* Pan body */}
      <rect
        x="130"
        y="110"
        width="200"
        height="90"
        rx="8"
        className="fill-slate-100 dark:fill-slate-800 stroke-slate-500 dark:stroke-slate-400"
        strokeWidth="2.5"
      />
      {/* Water inside pan */}
      <rect x="135" y="125" width="190" height="70" rx="4" fill="#3b82f6" opacity="0.25" />

      {/* 1. CONDUCTION (Along the solid metal handle) */}
      <g>
        {/* Metal Handle extending to left */}
        <rect
          x="30"
          y="125"
          width="100"
          height="14"
          rx="4"
          className="fill-slate-300 dark:fill-slate-600 stroke-slate-400 dark:stroke-slate-500"
          strokeWidth="1.5"
        />
        {/* Heat transfer arrow through handle */}
        <line x1="120" y1="132" x2="40" y2="132" stroke="#E63946" strokeWidth="2.5" markerEnd="url(#htm-arr-red)" />

        <rect x="15" y="65" width="135" height="50" rx="6" className="fill-red-50/90 dark:fill-red-950/40 stroke-red-200 dark:stroke-red-900/60" />
        <text x="25" y="82" className="fill-red-700 dark:fill-red-400 font-bold font-mono text-[11px]">
          1. CONDUCTION
        </text>
        <text x="25" y="98" className="fill-slate-600 dark:fill-slate-300 font-sans text-[10px]">
          Heat flows along solid handle via particle vibrations
        </text>
      </g>

      {/* 2. CONVECTION (Circulating water currents) */}
      <g>
        {/* Upward central hot current */}
        <path d="M 230 185 L 230 145" stroke="#E63946" strokeWidth="2.5" markerEnd="url(#htm-arr-red)" />
        {/* Downward side cool currents */}
        <path d="M 165 145 L 165 180" stroke="#2563eb" strokeWidth="2" markerEnd="url(#htm-arr-blue)" strokeDasharray="3 2" />
        <path d="M 295 145 L 295 180" stroke="#2563eb" strokeWidth="2" markerEnd="url(#htm-arr-blue)" strokeDasharray="3 2" />

        <rect x="165" y="15" width="130" height="50" rx="6" className="fill-blue-50/90 dark:fill-blue-950/40 stroke-blue-200 dark:stroke-blue-900/60" />
        <text x="175" y="32" className="fill-blue-700 dark:fill-blue-400 font-bold font-mono text-[11px]">
          2. CONVECTION
        </text>
        <text x="175" y="48" className="fill-slate-600 dark:fill-slate-300 font-sans text-[10px]">
          Circulating fluid currents (hot rises, cool sinks)
        </text>
      </g>

      {/* 3. RADIATION (Electromagnetic thermal waves) */}
      <g>
        {/* Wavy radiation lines to the right */}
        <path d="M 335 155 Q 350 145 365 155 T 395 155" fill="none" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#htm-arr-red)" />
        <path d="M 335 175 Q 350 165 365 175 T 395 175" fill="none" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#htm-arr-red)" />
        <path d="M 275 220 Q 300 220 330 230 T 380 230" fill="none" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#htm-arr-red)" />

        <rect x="405" y="125" width="140" height="50" rx="6" className="fill-amber-50/90 dark:fill-amber-950/40 stroke-amber-200 dark:stroke-amber-900/60" />
        <text x="415" y="142" className="fill-amber-700 dark:fill-amber-400 font-bold font-mono text-[11px]">
          3. RADIATION
        </text>
        <text x="415" y="158" className="fill-slate-600 dark:fill-slate-300 font-sans text-[10px]">
          Electromagnetic waves traveling without medium
        </text>
      </g>
    </svg>
  );
};

export default HeatTransferModesSvg;
