import React from 'react';

export const PlaneAndSolidAngleSvg = () => {
  return (
    <svg
      viewBox="0 0 560 220"
      className="w-full h-auto max-h-[260px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arrow-red"
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 7 3.5, 0 7" fill="#E63946" />
        </marker>
        <marker
          id="arrow-slate"
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 7 3.5, 0 7" fill="#64748b" />
        </marker>
      </defs>

      {/* Background Separator */}
      <line
        x1="280"
        y1="20"
        x2="280"
        y2="200"
        stroke="#cbd5e1"
        strokeDasharray="4 4"
        className="dark:stroke-slate-700"
      />

      {/* LEFT PANEL: PLANE ANGLE (RADIAN) */}
      <g transform="translate(10, 0)">
        <text
          x="135"
          y="24"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-white font-bold text-[13px] tracking-wide"
        >
          Plane Angle (समतल कोण, θ)
        </text>

        {/* Vertex & Rays */}
        <circle cx="50" cy="130" r="4" fill="#E63946" />
        <text x="38" y="134" className="fill-slate-600 dark:fill-slate-300 text-[11px] font-mono">
          O
        </text>

        {/* Lower Radius */}
        <line x1="50" y1="130" x2="190" y2="130" stroke="#64748b" strokeWidth="2" />
        <text
          x="120"
          y="146"
          textAnchor="middle"
          className="fill-slate-600 dark:fill-slate-400 text-[11px] font-serif"
        >
          Radius (r)
        </text>

        {/* Upper Radius */}
        <line x1="50" y1="130" x2="165" y2="55" stroke="#64748b" strokeWidth="2" />
        <text
          x="95"
          y="82"
          textAnchor="middle"
          className="fill-slate-600 dark:fill-slate-400 text-[11px] font-serif"
        >
          r
        </text>

        {/* Arc s */}
        <path
          d="M 190 130 A 140 140 0 0 0 165 55"
          fill="none"
          stroke="#E63946"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <text
          x="196"
          y="90"
          className="fill-red-600 dark:fill-red-400 font-bold text-[12px] font-sans"
        >
          Arc (s)
        </text>

        {/* Angle θ arc */}
        <path
          d="M 95 130 A 45 45 0 0 0 87 106"
          fill="none"
          stroke="#E63946"
          strokeWidth="1.5"
        />
        <text
          x="102"
          y="118"
          className="fill-red-600 dark:fill-red-400 font-bold text-[12px] font-mono"
        >
          θ
        </text>

        {/* Formula Box */}
        <rect
          x="40"
          y="170"
          width="190"
          height="32"
          rx="6"
          className="fill-red-50/80 dark:fill-red-950/30 stroke-red-200 dark:stroke-red-900/50"
          strokeWidth="1"
        />
        <text
          x="135"
          y="191"
          textAnchor="middle"
          className="fill-red-700 dark:fill-red-300 font-mono text-[12px] font-bold"
        >
          θ = s / r (Unit: Radian)
        </text>
      </g>

      {/* RIGHT PANEL: SOLID ANGLE (STERADIAN) */}
      <g transform="translate(290, 0)">
        <text
          x="135"
          y="24"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-white font-bold text-[13px] tracking-wide"
        >
          Solid Angle (ठोस कोण, Ω)
        </text>

        {/* Vertex O */}
        <circle cx="45" cy="115" r="4" fill="#E63946" />
        <text x="32" y="119" className="fill-slate-600 dark:fill-slate-300 text-[11px] font-mono">
          O
        </text>

        {/* Cone Rays */}
        <line x1="45" y1="115" x2="190" y2="72" stroke="#64748b" strokeWidth="1.8" />
        <line x1="45" y1="115" x2="190" y2="152" stroke="#64748b" strokeWidth="1.8" />
        <line
          x1="45"
          y1="115"
          x2="210"
          y2="112"
          stroke="#94a3b8"
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        <text
          x="115"
          y="132"
          textAnchor="middle"
          className="fill-slate-600 dark:fill-slate-400 text-[11px] font-serif"
        >
          Radius (r)
        </text>

        {/* Intercepted Spherical Cap Area */}
        <ellipse
          cx="190"
          cy="112"
          rx="18"
          ry="40"
          className="fill-red-500/20 stroke-red-600 dark:stroke-red-400"
          strokeWidth="2"
        />
        <text
          x="222"
          y="116"
          className="fill-red-600 dark:fill-red-400 font-bold text-[12px] font-sans"
        >
          Area (dA)
        </text>

        {/* Solid angle curve Ω */}
        <path
          d="M 85 98 C 95 106, 95 120, 85 128"
          fill="none"
          stroke="#E63946"
          strokeWidth="1.5"
        />
        <text
          x="96"
          y="117"
          className="fill-red-600 dark:fill-red-400 font-bold text-[12px] font-mono"
        >
          dΩ
        </text>

        {/* Formula Box */}
        <rect
          x="40"
          y="170"
          width="190"
          height="32"
          rx="6"
          className="fill-red-50/80 dark:fill-red-950/30 stroke-red-200 dark:stroke-red-900/50"
          strokeWidth="1"
        />
        <text
          x="135"
          y="191"
          textAnchor="middle"
          className="fill-red-700 dark:fill-red-300 font-mono text-[12px] font-bold"
        >
          dΩ = dA / r² (Unit: Steradian)
        </text>
      </g>
    </svg>
  );
};

export default PlaneAndSolidAngleSvg;
