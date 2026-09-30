import React from 'react';

export const ConservationOfEnergySvg = () => {
  return (
    <svg
      viewBox="0 0 540 280"
      className="w-full h-auto max-h-[300px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="ce-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="#64748b" />
        </marker>
        <marker id="ce-fall-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="#E63946" />
        </marker>
      </defs>

      {/* Ground Line */}
      <line x1="30" y1="240" x2="510" y2="240" stroke="#475569" strokeWidth="3" />
      <text x="35" y="258" className="fill-slate-500 dark:fill-slate-400 font-mono text-[11px]">
        Ground (h = 0)
      </text>

      {/* Vertical Trajectory Path (Dashed) */}
      <line
        x1="120"
        y1="40"
        x2="120"
        y2="240"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />

      {/* Height Dimension Line (h) */}
      <line x1="60" y1="40" x2="60" y2="240" stroke="#64748b" strokeWidth="1.5" />
      <line x1="52" y1="40" x2="68" y2="40" stroke="#64748b" strokeWidth="1.5" />
      <line x1="52" y1="240" x2="68" y2="240" stroke="#64748b" strokeWidth="1.5" />
      <text
        x="45"
        y="145"
        textAnchor="middle"
        className="fill-slate-700 dark:fill-slate-300 font-bold font-serif italic text-[13px]"
      >
        Height (h)
      </text>

      {/* Falling Arrow */}
      <line
        x1="140"
        y1="80"
        x2="140"
        y2="190"
        stroke="#E63946"
        strokeWidth="2"
        strokeDasharray="4 2"
        markerEnd="url(#ce-fall-arr)"
      />
      <text
        x="150"
        y="140"
        className="fill-red-600 dark:fill-red-400 font-bold text-[10px] font-mono"
      >
        Free Fall (g)
      </text>

      {/* POINT A (Top) */}
      <circle cx="120" cy="40" r="12" fill="#E63946" stroke="#991b1b" strokeWidth="1.5" />
      <text x="120" y="44" textAnchor="middle" className="fill-white font-bold text-[11px] font-mono">
        A
      </text>
      <g transform="translate(200, 25)">
        <rect
          x="0"
          y="0"
          width="300"
          height="45"
          rx="6"
          className="fill-slate-50 dark:fill-slate-900/80 stroke-slate-200 dark:stroke-slate-700"
        />
        <text x="12" y="18" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[11px]">
          Point A (Initial state, Height = h, v = 0):
        </text>
        <text x="12" y="34" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
          PE = mgh,  KE = 0  ⇒  <strong className="text-slate-900 dark:text-white">Total E = mgh</strong>
        </text>
      </g>

      {/* POINT B (Intermediate, fallen x, height h-x) */}
      <circle cx="120" cy="130" r="12" fill="#2563eb" stroke="#1d4ed8" strokeWidth="1.5" />
      <text x="120" y="134" textAnchor="middle" className="fill-white font-bold text-[11px] font-mono">
        B
      </text>
      <g transform="translate(200, 108)">
        <rect
          x="0"
          y="0"
          width="300"
          height="45"
          rx="6"
          className="fill-slate-50 dark:fill-slate-900/80 stroke-slate-200 dark:stroke-slate-700"
        />
        <text x="12" y="18" className="fill-blue-600 dark:fill-blue-400 font-bold font-mono text-[11px]">
          Point B (Fallen distance = x, Height = h - x):
        </text>
        <text x="12" y="34" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
          PE = mg(h-x),  KE = mgx  ⇒  <strong className="text-slate-900 dark:text-white">Total E = mgh</strong>
        </text>
      </g>

      {/* POINT C (Just before hitting ground, height = 0) */}
      <circle cx="120" cy="225" r="12" fill="#059669" stroke="#047857" strokeWidth="1.5" />
      <text x="120" y="229" textAnchor="middle" className="fill-white font-bold text-[11px] font-mono">
        C
      </text>
      <g transform="translate(200, 195)">
        <rect
          x="0"
          y="0"
          width="300"
          height="45"
          rx="6"
          className="fill-slate-50 dark:fill-slate-900/80 stroke-slate-200 dark:stroke-slate-700"
        />
        <text x="12" y="18" className="fill-emerald-600 dark:fill-emerald-400 font-bold font-mono text-[11px]">
          Point C (At ground, Height = 0, Max velocity):
        </text>
        <text x="12" y="34" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
          PE = 0,  KE = ½mv² = mgh  ⇒  <strong className="text-slate-900 dark:text-white">Total E = mgh</strong>
        </text>
      </g>

      {/* Bottom Summary Bar */}
      <text
        x="350"
        y="266"
        textAnchor="middle"
        className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[12px]"
      >
        Conclusion: E_A = E_B = E_C = mgh = Constant
      </text>
    </svg>
  );
};

export default ConservationOfEnergySvg;
