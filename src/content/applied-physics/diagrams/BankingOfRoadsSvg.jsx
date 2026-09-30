import React from 'react';

export const BankingOfRoadsSvg = () => {
  return (
    <svg
      viewBox="0 0 540 250"
      className="w-full h-auto max-h-[280px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="bank-arr-red" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#E63946" />
        </marker>
        <marker id="bank-arr-blue" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb" />
        </marker>
        <marker id="bank-arr-slate" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#64748b" />
        </marker>
      </defs>

      {/* Horizontal Ground */}
      <line x1="40" y1="200" x2="340" y2="200" stroke="#64748b" strokeWidth="2" />

      {/* Banked Incline Surface (Angle θ) */}
      <line x1="60" y1="200" x2="330" y2="105" stroke="#334155" className="dark:stroke-slate-300" strokeWidth="3.5" />
      {/* Hatching under incline */}
      <path d="M 60 200 L 330 105 L 330 200 Z" fill="#cbd5e1" className="dark:fill-slate-800" opacity="0.4" />

      {/* Angle θ Arc */}
      <path
        d="M 120 200 A 60 60 0 0 0 115 180"
        fill="none"
        stroke="#E63946"
        strokeWidth="1.8"
      />
      <text x="126" y="194" className="fill-red-600 dark:fill-red-400 font-bold text-[12px] font-mono">
        θ
      </text>

      {/* Vehicle Block on Incline (Rotated) */}
      <g transform="translate(195, 152) rotate(-19)">
        {/* Car / Block */}
        <rect
          x="-35"
          y="-30"
          width="70"
          height="30"
          rx="3"
          className="fill-slate-100 dark:fill-slate-800 stroke-slate-600 dark:stroke-slate-400"
          strokeWidth="2"
        />
        <text
          x="0"
          y="-11"
          textAnchor="middle"
          className="fill-slate-800 dark:fill-slate-200 font-bold text-[11px] font-sans"
        >
          Vehicle (m)
        </text>
      </g>

      {/* Center of Mass Point */}
      <circle cx="205" cy="132" r="3.5" fill="#E63946" />

      {/* Normal Reaction R (Perpendicular to Incline) */}
      <line
        x1="205"
        y1="132"
        x2="165"
        y2="30"
        stroke="#2563eb"
        strokeWidth="2.8"
        markerEnd="url(#bank-arr-blue)"
      />
      <text
        x="130"
        y="25"
        className="fill-blue-600 dark:fill-blue-400 font-bold text-[13px] font-mono"
      >
        Normal Reaction (R)
      </text>

      {/* Vertical Dotted Axis from Center of Mass */}
      <line x1="205" y1="132" x2="205" y2="40" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
      {/* Component R cos θ (Vertical) */}
      <line
        x1="205"
        y1="132"
        x2="205"
        y2="45"
        stroke="#2563eb"
        strokeWidth="2.5"
        markerEnd="url(#bank-arr-blue)"
      />
      <text
        x="212"
        y="58"
        className="fill-blue-600 dark:fill-blue-400 font-bold text-[12px] font-mono"
      >
        R cos θ
      </text>

      {/* Angle θ between R and R cos θ */}
      <path
        d="M 195 85 A 45 45 0 0 1 205 85"
        fill="none"
        stroke="#E63946"
        strokeWidth="1.5"
      />
      <text x="195" y="78" className="fill-red-600 dark:fill-red-400 font-bold text-[10px] font-mono">
        θ
      </text>

      {/* Horizontal Component R sin θ (Towards Curve Center / Left) */}
      <line
        x1="205"
        y1="132"
        x2="95"
        y2="132"
        stroke="#E63946"
        strokeWidth="3"
        markerEnd="url(#bank-arr-red)"
      />
      <text
        x="100"
        y="122"
        className="fill-red-600 dark:fill-red-400 font-extrabold text-[12px] font-mono"
      >
        R sin θ = mv²/r (Fc)
      </text>

      {/* Weight W = mg (Straight Down) */}
      <line
        x1="205"
        y1="132"
        x2="205"
        y2="225"
        stroke="#64748b"
        strokeWidth="2.5"
        markerEnd="url(#bank-arr-slate)"
      />
      <text
        x="212"
        y="225"
        className="fill-slate-700 dark:fill-slate-300 font-bold text-[12px] font-mono"
      >
        Weight = mg
      </text>

      {/* Right Equations Panel */}
      <g transform="translate(350, 30)">
        <rect
          x="0"
          y="0"
          width="175"
          height="175"
          rx="8"
          className="fill-red-50/80 dark:fill-red-950/30 stroke-red-200 dark:stroke-red-900/50"
        />
        <text x="12" y="24" className="fill-red-700 dark:fill-red-400 font-bold font-mono text-[11px] uppercase tracking-wider">
          Banking Equations
        </text>

        <text x="12" y="52" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
          Vertical equilibrium:
        </text>
        <text x="22" y="70" className="fill-blue-600 dark:fill-blue-400 font-bold font-mono text-[12px]">
          R cos θ = mg  — (1)
        </text>

        <text x="12" y="96" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
          Centripetal provision:
        </text>
        <text x="22" y="114" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[12px]">
          R sin θ = mv² / r  — (2)
        </text>

        <text x="12" y="138" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
          Dividing (2) by (1):
        </text>
        <text x="22" y="158" className="fill-red-700 dark:fill-red-300 font-extrabold font-mono text-[13px]">
          tan θ = v² / (r g)
        </text>
      </g>
    </svg>
  );
};

export default BankingOfRoadsSvg;
