import React from 'react';

export const SimplePendulumSvg = () => {
  return (
    <svg
      viewBox="0 0 460 260"
      className="w-full h-auto max-h-[280px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="pendulum-arrow-red"
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 7 3.5, 0 7" fill="#E63946" />
        </marker>
        <marker
          id="pendulum-arrow-blue"
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb" />
        </marker>
        <marker
          id="pendulum-arrow-slate"
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 7 3.5, 0 7" fill="#64748b" />
        </marker>
      </defs>

      {/* Rigid Ceiling / Support */}
      <line x1="160" y1="20" x2="300" y2="20" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
      {/* Hatching for rigid ceiling */}
      <line x1="170" y1="20" x2="180" y2="10" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="190" y1="20" x2="200" y2="10" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="210" y1="20" x2="220" y2="10" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="230" y1="20" x2="240" y2="10" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="250" y1="20" x2="260" y2="10" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="270" y1="20" x2="280" y2="10" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="290" y1="20" x2="300" y2="10" stroke="#94a3b8" strokeWidth="1.5" />

      {/* Suspension Point O */}
      <circle cx="230" cy="20" r="3.5" fill="#E63946" />
      <text x="215" y="16" className="fill-slate-800 dark:fill-slate-200 font-bold text-[12px] font-mono">
        O (Pivot)
      </text>

      {/* Vertical Equilibrium / Mean Position Line (Dashed) */}
      <line
        x1="230"
        y1="20"
        x2="230"
        y2="225"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      {/* Ghost bob at mean position */}
      <circle cx="230" cy="205" r="14" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
      <text
        x="230"
        y="238"
        textAnchor="middle"
        className="fill-slate-500 dark:fill-slate-400 text-[11px] font-sans"
      >
        Mean Position
      </text>

      {/* Pendulum String (Length l) */}
      <line x1="230" y1="20" x2="330" y2="175" stroke="#334155" className="dark:stroke-slate-300" strokeWidth="2" />
      
      {/* Length l label */}
      <text
        x="292"
        y="92"
        className="fill-slate-700 dark:fill-slate-300 font-bold text-[13px] font-serif italic"
      >
        Length (l)
      </text>

      {/* Angle θ Arc */}
      <path
        d="M 230 65 A 45 45 0 0 1 254 58"
        fill="none"
        stroke="#E63946"
        strokeWidth="1.8"
      />
      <text x="244" y="80" className="fill-red-600 dark:fill-red-400 font-bold text-[12px] font-mono">
        θ
      </text>

      {/* Tension Vector T */}
      <line
        x1="330"
        y1="175"
        x2="295"
        y2="120"
        stroke="#2563eb"
        strokeWidth="2"
        markerEnd="url(#pendulum-arrow-blue)"
      />
      <text x="272" y="132" className="fill-blue-600 dark:fill-blue-400 font-bold text-[12px] font-sans">
        Tension (T)
      </text>

      {/* Bob at displaced position */}
      <circle
        cx="330"
        cy="175"
        r="14"
        fill="#E63946"
        className="stroke-red-800 dark:stroke-red-300"
        strokeWidth="2"
      />
      <text
        x="330"
        y="179"
        textAnchor="middle"
        className="fill-white font-bold text-[11px] font-sans"
      >
        m
      </text>

      {/* Weight Force mg (Straight Down) */}
      <line
        x1="330"
        y1="175"
        x2="330"
        y2="245"
        stroke="#E63946"
        strokeWidth="2"
        markerEnd="url(#pendulum-arrow-red)"
      />
      <text x="338" y="242" className="fill-red-600 dark:fill-red-400 font-bold text-[12px] font-mono">
        W = mg
      </text>

      {/* Radial Component mg cos θ (Opposite to Tension) */}
      <line
        x1="330"
        y1="175"
        x2="370"
        y2="235"
        stroke="#64748b"
        strokeWidth="1.8"
        strokeDasharray="3 3"
        markerEnd="url(#pendulum-arrow-slate)"
      />
      <text x="375" y="235" className="fill-slate-600 dark:fill-slate-400 font-medium text-[11px] font-mono">
        mg cos θ
      </text>

      {/* Tangential Restoring Force mg sin θ (Towards Mean) */}
      <line
        x1="330"
        y1="175"
        x2="270"
        y2="215"
        stroke="#E63946"
        strokeWidth="2.5"
        markerEnd="url(#pendulum-arrow-red)"
      />
      <text
        x="248"
        y="196"
        className="fill-red-600 dark:fill-red-400 font-bold text-[11px] font-mono"
      >
        Restoring Force: -mg sin θ
      </text>

      {/* Angle θ between mg and mg cos θ */}
      <path
        d="M 330 205 A 30 30 0 0 0 348 200"
        fill="none"
        stroke="#64748b"
        strokeWidth="1.2"
      />
      <text x="336" y="217" className="fill-slate-600 dark:fill-slate-400 text-[10px] font-mono">
        θ
      </text>

      {/* Arc Displacement x at the bottom */}
      <path
        d="M 230 215 Q 280 220 330 195"
        fill="none"
        stroke="#94a3b8"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <text
        x="278"
        y="230"
        textAnchor="middle"
        className="fill-slate-500 dark:fill-slate-400 text-[11px] font-mono"
      >
        Displacement (x)
      </text>
    </svg>
  );
};

export default SimplePendulumSvg;
