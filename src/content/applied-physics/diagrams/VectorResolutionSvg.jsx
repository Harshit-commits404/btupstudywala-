import React from 'react';

export const VectorResolutionSvg = () => {
  return (
    <svg
      viewBox="0 0 480 250"
      className="w-full h-auto max-h-[270px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="vr-arr-axis" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="#64748b" />
        </marker>
        <marker id="vr-arr-red" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#E63946" />
        </marker>
        <marker id="vr-arr-blue" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb" />
        </marker>
        <marker id="vr-arr-emerald" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#059669" />
        </marker>
      </defs>

      {/* Coordinate Axes */}
      {/* X-Axis */}
      <line
        x1="50"
        y1="190"
        x2="350"
        y2="190"
        stroke="#64748b"
        strokeWidth="1.8"
        markerEnd="url(#vr-arr-axis)"
      />
      <text x="355" y="194" className="fill-slate-700 dark:fill-slate-300 font-bold text-[12px] font-mono">
        +X
      </text>

      {/* Y-Axis */}
      <line
        x1="70"
        y1="210"
        x2="70"
        y2="30"
        stroke="#64748b"
        strokeWidth="1.8"
        markerEnd="url(#vr-arr-axis)"
      />
      <text x="65" y="24" className="fill-slate-700 dark:fill-slate-300 font-bold text-[12px] font-mono">
        +Y
      </text>

      {/* Origin O */}
      <circle cx="70" cy="190" r="3.5" fill="#E63946" />
      <text x="56" y="204" className="fill-slate-600 dark:fill-slate-400 font-mono text-[11px]">
        O
      </text>

      {/* Vector A (Hypotenuse) */}
      <line
        x1="70"
        y1="190"
        x2="270"
        y2="60"
        stroke="#E63946"
        strokeWidth="3.2"
        markerEnd="url(#vr-arr-red)"
      />
      <text
        x="175"
        y="110"
        className="fill-red-600 dark:fill-red-400 font-extrabold text-[15px] font-mono"
      >
        Vector A⃗
      </text>

      {/* Projections (Dashed lines to axes) */}
      <line
        x1="270"
        y1="60"
        x2="270"
        y2="190"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <line
        x1="270"
        y1="60"
        x2="70"
        y2="60"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />

      {/* Horizontal Component Ax on X-Axis */}
      <line
        x1="70"
        y1="190"
        x2="270"
        y2="190"
        stroke="#2563eb"
        strokeWidth="3"
        markerEnd="url(#vr-arr-blue)"
      />
      <text
        x="170"
        y="212"
        textAnchor="middle"
        className="fill-blue-600 dark:fill-blue-400 font-bold text-[13px] font-mono"
      >
        Ax = A cos θ (î)
      </text>

      {/* Vertical Component Ay on Y-Axis */}
      <line
        x1="70"
        y1="190"
        x2="70"
        y2="60"
        stroke="#059669"
        strokeWidth="3"
        markerEnd="url(#vr-arr-emerald)"
      />
      <text
        x="20"
        y="125"
        className="fill-emerald-600 dark:fill-emerald-400 font-bold text-[12px] font-mono"
      >
        Ay = A sin θ (ĵ)
      </text>

      {/* Vertical Component Parallel (right side of triangle) */}
      <text
        x="278"
        y="130"
        className="fill-slate-500 dark:fill-slate-400 font-mono text-[11px]"
      >
        Ay = A sin θ
      </text>

      {/* Angle θ Arc */}
      <path
        d="M 125 190 A 55 55 0 0 0 118 159"
        fill="none"
        stroke="#E63946"
        strokeWidth="1.8"
      />
      <text x="134" y="178" className="fill-red-600 dark:fill-red-400 font-bold text-[13px] font-mono">
        θ
      </text>

      {/* Right Formula Card */}
      <g transform="translate(320, 45)">
        <rect
          x="0"
          y="0"
          width="150"
          height="120"
          rx="8"
          className="fill-slate-50 dark:fill-slate-900/90 stroke-slate-200 dark:stroke-slate-700"
          strokeWidth="1"
        />
        <text x="12" y="24" className="fill-slate-900 dark:fill-white font-bold text-[11px] uppercase tracking-wider font-mono">
          Rectangular Form
        </text>
        <text x="12" y="46" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[12px]">
          A⃗ = Axî + Ayĵ
        </text>
        <text x="12" y="70" className="fill-blue-600 dark:fill-blue-400 font-mono text-[11px]">
          Ax = A cos(θ)
        </text>
        <text x="12" y="90" className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[11px]">
          Ay = A sin(θ)
        </text>
        <text x="12" y="110" className="fill-slate-700 dark:fill-slate-300 font-bold font-mono text-[11px]">
          A = √(Ax² + Ay²)
        </text>
      </g>
    </svg>
  );
};

export default VectorResolutionSvg;
