import React from 'react';

export const ThermalExpansionSvg = () => {
  return (
    <svg
      viewBox="0 0 570 230"
      className="w-full h-auto max-h-[270px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 2 Dividers */}
      <line x1="190" y1="20" x2="190" y2="185" stroke="#cbd5e1" strokeDasharray="3 3" className="dark:stroke-slate-800" />
      <line x1="380" y1="20" x2="380" y2="185" stroke="#cbd5e1" strokeDasharray="3 3" className="dark:stroke-slate-800" />

      {/* 1. LINEAR EXPANSION (1D) */}
      <g transform="translate(10, 10)">
        <text x="85" y="20" textAnchor="middle" className="fill-slate-900 dark:fill-white font-bold text-[12px] font-sans">
          1. Linear (1D)
        </text>
        {/* Original Rod L0 */}
        <rect x="20" y="55" width="100" height="12" rx="3" className="fill-slate-300 dark:fill-slate-600 stroke-slate-400 dark:stroke-slate-500" />
        <text x="70" y="50" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 font-mono text-[10px]">
          Initial L0
        </text>

        {/* Expanded Rod with ΔL in red */}
        <rect x="20" y="95" width="100" height="12" rx="3" className="fill-slate-300 dark:fill-slate-600 stroke-slate-400 dark:stroke-slate-500" />
        <rect x="120" y="95" width="30" height="12" rx="3" fill="#E63946" stroke="#991b1b" />
        <text x="135" y="90" textAnchor="middle" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[10px]">
          +ΔL
        </text>

        <text x="85" y="145" textAnchor="middle" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[12px]">
          ΔL = L0 · α · ΔT
        </text>
        <text x="85" y="165" textAnchor="middle" className="fill-slate-500 font-mono text-[10px]">
          α = Coeff. of Linear Exp.
        </text>
      </g>

      {/* 2. SUPERFICIAL EXPANSION (2D) */}
      <g transform="translate(200, 10)">
        <text x="85" y="20" textAnchor="middle" className="fill-slate-900 dark:fill-white font-bold text-[12px] font-sans">
          2. Superficial (2D)
        </text>
        {/* Original Area A0 */}
        <rect x="45" y="45" width="60" height="60" rx="3" className="fill-slate-200 dark:fill-slate-700 stroke-slate-400" />
        <text x="75" y="80" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 font-mono text-[11px]">
          Area A0
        </text>

        {/* Expanded Border ΔA in red */}
        <rect x="45" y="45" width="80" height="80" rx="3" fill="none" stroke="#E63946" strokeWidth="2" strokeDasharray="3 2" />
        <text x="130" y="105" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[10px]">
          +ΔA
        </text>

        <text x="85" y="145" textAnchor="middle" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[12px]">
          ΔA = A0 · β · ΔT
        </text>
        <text x="85" y="165" textAnchor="middle" className="fill-slate-500 font-mono text-[10px]">
          β = Coeff. of Surface Exp.
        </text>
      </g>

      {/* 3. CUBICAL EXPANSION (3D) */}
      <g transform="translate(390, 10)">
        <text x="85" y="20" textAnchor="middle" className="fill-slate-900 dark:fill-white font-bold text-[12px] font-sans">
          3. Cubical (3D)
        </text>
        {/* Isometric Cube (Original V0) */}
        <polygon points="50 75, 90 55, 130 75, 90 95" className="fill-slate-200 dark:fill-slate-700 stroke-slate-400" />
        <polygon points="50 75, 90 95, 90 125, 50 105" className="fill-slate-300 dark:fill-slate-600 stroke-slate-400" />
        <polygon points="90 95, 130 75, 130 105, 90 125" className="fill-slate-400 dark:fill-slate-500 stroke-slate-400" />
        <text x="90" y="93" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 font-bold font-mono text-[10px]">
          Vol V0
        </text>

        <text x="85" y="145" textAnchor="middle" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[12px]">
          ΔV = V0 · γ · ΔT
        </text>
        <text x="85" y="165" textAnchor="middle" className="fill-slate-500 font-mono text-[10px]">
          γ = Coeff. of Cubical Exp.
        </text>
      </g>

      {/* Bottom Ratio Banner */}
      <g transform="translate(110, 195)">
        <rect x="0" y="0" width="350" height="28" rx="5" className="fill-red-50/80 dark:fill-red-950/30 stroke-red-200 dark:stroke-red-900/50" />
        <text x="175" y="18" textAnchor="middle" className="fill-red-700 dark:fill-red-300 font-mono font-bold text-[12px]">
          BTEUP Standard Ratio: α : β : γ = 1 : 2 : 3
        </text>
      </g>
    </svg>
  );
};

export default ThermalExpansionSvg;
