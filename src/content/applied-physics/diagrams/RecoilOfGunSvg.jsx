import React from 'react';

export const RecoilOfGunSvg = () => {
  return (
    <svg
      viewBox="0 0 540 220"
      className="w-full h-auto max-h-[260px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="recoil-arr-left" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="7 0, 0 3.5, 7 7" fill="#E63946" />
        </marker>
        <marker id="recoil-arr-right" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb" />
        </marker>
      </defs>

      {/* STATE 1: BEFORE FIRING */}
      <g transform="translate(10, 15)">
        <text
          x="10"
          y="20"
          className="fill-slate-800 dark:fill-slate-200 font-bold text-[12px] font-sans uppercase tracking-wider"
        >
          1. Before Firing (State of Rest)
        </text>

        {/* Gun Outline */}
        <rect
          x="120"
          y="32"
          width="130"
          height="22"
          rx="3"
          className="fill-slate-300 dark:fill-slate-700 stroke-slate-400 dark:stroke-slate-600"
        />
        <rect
          x="120"
          y="54"
          width="40"
          height="40"
          rx="4"
          className="fill-slate-300 dark:fill-slate-700 stroke-slate-400 dark:stroke-slate-600"
        />
        {/* Bullet inside barrel */}
        <rect
          x="215"
          y="37"
          width="20"
          height="12"
          rx="2"
          className="fill-amber-500 stroke-amber-600"
        />

        <text x="320" y="52" className="fill-slate-700 dark:fill-slate-300 font-mono text-[12px]">
          Gun (Mass M) + Bullet (Mass m) at rest (v = 0)
        </text>
        <text
          x="320"
          y="72"
          className="fill-emerald-600 dark:fill-emerald-400 font-bold font-mono text-[13px]"
        >
          Total Initial Momentum Pi = 0
        </text>
      </g>

      {/* Dividing dashed line */}
      <line
        x1="20"
        y1="115"
        x2="520"
        y2="115"
        stroke="#cbd5e1"
        strokeDasharray="4 4"
        className="dark:stroke-slate-800"
      />

      {/* STATE 2: AFTER FIRING */}
      <g transform="translate(10, 125)">
        <text
          x="10"
          y="20"
          className="fill-slate-800 dark:fill-slate-200 font-bold text-[12px] font-sans uppercase tracking-wider"
        >
          2. After Firing (Action & Reaction)
        </text>

        {/* Recoil arrow for gun */}
        <line
          x1="50"
          y1="50"
          x2="105"
          y2="50"
          stroke="#E63946"
          strokeWidth="2.5"
          markerStart="url(#recoil-arr-left)"
        />
        <text
          x="25"
          y="75"
          className="fill-red-600 dark:fill-red-400 font-bold text-[11px] font-mono"
        >
          Recoil Velocity (V)
        </text>

        {/* Gun recoiling backward */}
        <rect
          x="110"
          y="38"
          width="130"
          height="22"
          rx="3"
          className="fill-slate-400 dark:fill-slate-600 stroke-slate-500"
        />
        <rect
          x="110"
          y="60"
          width="40"
          height="40"
          rx="4"
          className="fill-slate-400 dark:fill-slate-600 stroke-slate-500"
        />
        <text x="140" y="53" className="fill-white font-bold text-[11px] font-mono">
          Gun (M)
        </text>

        {/* Bullet flying forward */}
        <rect
          x="300"
          y="42"
          width="24"
          height="14"
          rx="4"
          className="fill-amber-500 stroke-amber-600"
        />
        {/* Bullet speed arrow */}
        <line
          x1="335"
          y1="49"
          x2="410"
          y2="49"
          stroke="#2563eb"
          strokeWidth="2.5"
          markerEnd="url(#recoil-arr-right)"
        />
        <text
          x="345"
          y="72"
          className="fill-blue-600 dark:fill-blue-400 font-bold text-[11px] font-mono"
        >
          Bullet Velocity (v)
        </text>

        {/* Formula Box */}
        <rect
          x="420"
          y="30"
          width="105"
          height="48"
          rx="6"
          className="fill-red-50/90 dark:fill-red-950/40 stroke-red-200 dark:stroke-red-900/60"
        />
        <text x="430" y="48" className="fill-slate-800 dark:fill-slate-200 font-mono text-[10px]">
          MV + mv = 0
        </text>
        <text x="430" y="66" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[11px]">
          V = - (m/M) v
        </text>
      </g>
    </svg>
  );
};

export default RecoilOfGunSvg;
