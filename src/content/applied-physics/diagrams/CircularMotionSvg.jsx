import React from 'react';

export const CircularMotionSvg = () => {
  return (
    <svg
      viewBox="0 0 520 240"
      className="w-full h-auto max-h-[270px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="cm-arr-red" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#E63946" />
        </marker>
        <marker id="cm-arr-blue" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb" />
        </marker>
        <marker id="cm-arr-emerald" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#059669" />
        </marker>
      </defs>

      {/* Circular Trajectory Path */}
      <circle
        cx="160"
        cy="120"
        r="80"
        fill="none"
        stroke="#cbd5e1"
        className="dark:stroke-slate-700"
        strokeWidth="2"
        strokeDasharray="4 3"
      />

      {/* Center of Circle O */}
      <circle cx="160" cy="120" r="4" fill="#E63946" />
      <text x="142" y="125" className="fill-slate-700 dark:fill-slate-300 font-bold text-[12px] font-mono">
        O
      </text>

      {/* Radius r vector */}
      <line x1="160" y1="120" x2="230" y2="80" stroke="#64748b" strokeWidth="1.8" />
      <text
        x="188"
        y="95"
        className="fill-slate-600 dark:fill-slate-400 font-bold font-serif italic text-[13px]"
      >
        r
      </text>

      {/* Particle P */}
      <circle cx="230" cy="80" r="10" fill="#E63946" stroke="#991b1b" strokeWidth="1.5" />
      <text x="230" y="84" textAnchor="middle" className="fill-white font-bold text-[10px] font-mono">
        P
      </text>

      {/* Tangential Linear Velocity v */}
      <line
        x1="230"
        y1="80"
        x2="185"
        y2="5"
        stroke="#2563eb"
        strokeWidth="2.8"
        markerEnd="url(#cm-arr-blue)"
      />
      <text
        x="120"
        y="25"
        className="fill-blue-600 dark:fill-blue-400 font-bold text-[12px] font-mono"
      >
        Linear Velocity (v⃗)
      </text>

      {/* Centripetal Acceleration ac (Radially Inward) */}
      <line
        x1="230"
        y1="80"
        x2="175"
        y2="112"
        stroke="#E63946"
        strokeWidth="2.8"
        markerEnd="url(#cm-arr-red)"
      />
      <text
        x="215"
        y="125"
        className="fill-red-600 dark:fill-red-400 font-extrabold text-[12px] font-mono"
      >
        ac = v²/r
      </text>

      {/* Angular Velocity ω curved direction indicator */}
      <path
        d="M 160 55 A 65 65 0 0 0 110 80"
        fill="none"
        stroke="#059669"
        strokeWidth="2"
        markerEnd="url(#cm-arr-emerald)"
      />
      <text x="95" y="60" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-[12px] font-mono">
        ω (rad/s)
      </text>

      {/* Right Side Formulas Panel */}
      <g transform="translate(290, 25)">
        <rect
          x="0"
          y="0"
          width="215"
          height="185"
          rx="8"
          className="fill-slate-50 dark:fill-slate-900/80 stroke-slate-200 dark:stroke-slate-700"
          strokeWidth="1"
        />
        <text x="14" y="24" className="fill-red-700 dark:fill-red-400 font-bold font-mono text-[11px] uppercase tracking-wider">
          Circular Motion Relations
        </text>

        <text x="14" y="52" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
          Linear & Angular Velocity:
        </text>
        <text x="26" y="70" className="fill-blue-600 dark:fill-blue-400 font-bold font-mono text-[13px]">
          v = r · ω
        </text>

        <text x="14" y="98" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
          Centripetal Acceleration:
        </text>
        <text x="26" y="116" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[13px]">
          ac = v² / r = r · ω²
        </text>

        <text x="14" y="144" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
          Centripetal Force:
        </text>
        <text x="26" y="164" className="fill-emerald-600 dark:fill-emerald-400 font-bold font-mono text-[13px]">
          Fc = (m · v²) / r
        </text>
      </g>
    </svg>
  );
};

export default CircularMotionSvg;
