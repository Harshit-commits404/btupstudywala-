import React from 'react';

export const WorkDoneAngleSvg = () => {
  return (
    <svg
      viewBox="0 0 520 230"
      className="w-full h-auto max-h-[260px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="w-arr-red" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#E63946" />
        </marker>
        <marker id="w-arr-blue" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb" />
        </marker>
        <marker id="w-arr-slate" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#64748b" />
        </marker>
      </defs>

      {/* Ground Surface */}
      <line x1="40" y1="160" x2="480" y2="160" stroke="#64748b" strokeWidth="2.5" />
      {/* Ground hatch marks */}
      <line x1="50" y1="160" x2="40" y2="170" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="90" y1="160" x2="80" y2="170" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="130" y1="160" x2="120" y2="170" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="170" y1="160" x2="160" y2="170" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="210" y1="160" x2="200" y2="170" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="250" y1="160" x2="240" y2="170" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="290" y1="160" x2="280" y2="170" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="330" y1="160" x2="320" y2="170" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="370" y1="160" x2="360" y2="170" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="410" y1="160" x2="400" y2="170" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="450" y1="160" x2="440" y2="170" stroke="#94a3b8" strokeWidth="1.2" />

      {/* Block (Mass m) */}
      <rect
        x="90"
        y="90"
        width="90"
        height="70"
        rx="4"
        className="fill-slate-100 dark:fill-slate-800 stroke-slate-400 dark:stroke-slate-600"
        strokeWidth="2"
      />
      <text
        x="135"
        y="132"
        textAnchor="middle"
        className="fill-slate-700 dark:fill-slate-300 font-bold text-[14px] font-sans"
      >
        Mass (m)
      </text>

      {/* Center of application point */}
      <circle cx="180" cy="125" r="3.5" fill="#E63946" />

      {/* Applied Force Vector F at angle θ */}
      <line
        x1="180"
        y1="125"
        x2="310"
        y2="45"
        stroke="#E63946"
        strokeWidth="3"
        markerEnd="url(#w-arr-red)"
      />
      <text
        x="320"
        y="45"
        className="fill-red-600 dark:fill-red-400 font-extrabold text-[14px] font-mono"
      >
        Force F⃗
      </text>

      {/* Horizontal Line of Action */}
      <line
        x1="180"
        y1="125"
        x2="320"
        y2="125"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />

      {/* Angle θ Arc */}
      <path
        d="M 230 125 A 50 50 0 0 0 220 100"
        fill="none"
        stroke="#E63946"
        strokeWidth="1.8"
      />
      <text x="238" y="116" className="fill-red-600 dark:fill-red-400 font-bold text-[12px] font-mono">
        θ
      </text>

      {/* Effective Force Component F cos θ */}
      <line
        x1="180"
        y1="125"
        x2="290"
        y2="125"
        stroke="#2563eb"
        strokeWidth="2.5"
        markerEnd="url(#w-arr-blue)"
      />
      <text
        x="235"
        y="144"
        textAnchor="middle"
        className="fill-blue-600 dark:fill-blue-400 font-bold text-[12px] font-mono"
      >
        F cos θ (Work producing)
      </text>

      {/* Vertical Component F sin θ */}
      <line
        x1="180"
        y1="125"
        x2="180"
        y2="55"
        stroke="#64748b"
        strokeWidth="1.8"
        strokeDasharray="3 3"
        markerEnd="url(#w-arr-slate)"
      />
      <text
        x="130"
        y="65"
        className="fill-slate-600 dark:fill-slate-400 font-medium text-[11px] font-mono"
      >
        F sin θ
      </text>

      {/* Displacement Arrow s along ground */}
      <line
        x1="90"
        y1="190"
        x2="380"
        y2="190"
        stroke="#059669"
        strokeWidth="2.2"
        markerEnd="url(#w-arr-slate)"
      />
      <text
        x="235"
        y="210"
        textAnchor="middle"
        className="fill-emerald-700 dark:fill-emerald-400 font-bold text-[12px] font-mono"
      >
        Displacement (s)
      </text>

      {/* Right Formula Card */}
      <g transform="translate(360, 40)">
        <rect
          x="0"
          y="0"
          width="145"
          height="100"
          rx="6"
          className="fill-red-50/80 dark:fill-red-950/30 stroke-red-200 dark:stroke-red-900/50"
        />
        <text x="12" y="22" className="fill-red-700 dark:fill-red-400 font-bold font-mono text-[11px] uppercase">
          Work Formula
        </text>
        <text x="12" y="44" className="fill-slate-900 dark:fill-white font-extrabold font-mono text-[14px]">
          W = F · s cos θ
        </text>
        <text x="12" y="66" className="fill-slate-600 dark:fill-slate-300 font-mono text-[10px]">
          θ &lt; 90° : W &gt; 0 (Positive)
        </text>
        <text x="12" y="80" className="fill-slate-600 dark:fill-slate-300 font-mono text-[10px]">
          θ = 90° : W = 0 (Zero)
        </text>
        <text x="12" y="94" className="fill-slate-600 dark:fill-slate-300 font-mono text-[10px]">
          θ = 180° : W &lt; 0 (Negative)
        </text>
      </g>
    </svg>
  );
};

export default WorkDoneAngleSvg;
