import React from 'react';

export const TorqueConceptSvg = () => {
  return (
    <svg
      viewBox="0 0 540 230"
      className="w-full h-auto max-h-[270px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="tq-arr-red" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#E63946" />
        </marker>
        <marker id="tq-arr-blue" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb" />
        </marker>
        <marker id="tq-arr-emerald" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#059669" />
        </marker>
      </defs>

      {/* Axis of Rotation / Hinge O */}
      <circle cx="80" cy="140" r="8" fill="#E63946" stroke="#991b1b" strokeWidth="2" />
      <text x="75" y="170" className="fill-slate-700 dark:fill-slate-300 font-bold text-[12px] font-mono">
        Axis (O)
      </text>

      {/* Lever Arm / Door / Spanner Bar */}
      <rect
        x="80"
        y="132"
        width="210"
        height="16"
        rx="3"
        className="fill-slate-200 dark:fill-slate-700 stroke-slate-400 dark:stroke-slate-500"
        strokeWidth="1.5"
      />

      {/* Distance r Dimension Line */}
      <line x1="80" y1="110" x2="290" y2="110" stroke="#64748b" strokeWidth="1.5" />
      <line x1="80" y1="104" x2="80" y2="116" stroke="#64748b" strokeWidth="1.5" />
      <line x1="290" y1="104" x2="290" y2="116" stroke="#64748b" strokeWidth="1.5" />
      <text
        x="185"
        y="102"
        textAnchor="middle"
        className="fill-slate-700 dark:fill-slate-300 font-bold font-mono text-[12px]"
      >
        Perpendicular Distance (r)
      </text>

      {/* Point of Application P */}
      <circle cx="290" cy="140" r="4" fill="#2563eb" />
      <text x="296" y="156" className="fill-blue-600 dark:fill-blue-400 font-bold text-[11px] font-mono">
        P
      </text>

      {/* Applied Force Vector F */}
      <line
        x1="290"
        y1="140"
        x2="290"
        y2="30"
        stroke="#E63946"
        strokeWidth="3.2"
        markerEnd="url(#tq-arr-red)"
      />
      <text
        x="300"
        y="42"
        className="fill-red-600 dark:fill-red-400 font-extrabold text-[14px] font-mono"
      >
        Applied Force (F⃗)
      </text>

      {/* Right Angle Indicator between r and F */}
      <rect
        x="272"
        y="122"
        width="18"
        height="18"
        fill="none"
        stroke="#E63946"
        strokeWidth="1.5"
      />
      <circle cx="281" cy="131" r="1.5" fill="#E63946" />

      {/* Rotational Direction Curved Arrow (Torque τ) */}
      <path
        d="M 120 75 A 70 70 0 0 1 180 55"
        fill="none"
        stroke="#059669"
        strokeWidth="2.5"
        markerEnd="url(#tq-arr-emerald)"
      />
      <text
        x="120"
        y="48"
        className="fill-emerald-600 dark:fill-emerald-400 font-extrabold text-[13px] font-mono"
      >
        Torque (τ) [Turning Effect]
      </text>

      {/* Right Side Formula Placard */}
      <g transform="translate(360, 35)">
        <rect
          x="0"
          y="0"
          width="165"
          height="145"
          rx="8"
          className="fill-red-50/80 dark:fill-red-950/30 stroke-red-200 dark:stroke-red-900/50"
        />
        <text x="14" y="24" className="fill-red-700 dark:fill-red-400 font-bold font-mono text-[11px] uppercase tracking-wider">
          Torque Formula
        </text>

        <text x="14" y="54" className="fill-slate-900 dark:fill-white font-extrabold font-mono text-[15px]">
          τ = F × r
        </text>

        <text x="14" y="78" className="fill-slate-600 dark:fill-slate-400 font-mono text-[11px]">
          If angle θ between r & F:
        </text>
        <text x="14" y="98" className="fill-blue-600 dark:fill-blue-400 font-bold font-mono text-[13px]">
          τ = F · r · sin θ
        </text>

        <text x="14" y="124" className="fill-slate-700 dark:fill-slate-300 font-mono text-[10px]">
          SI Unit: Newton-metre (N·m)
        </text>
      </g>
    </svg>
  );
};

export default TorqueConceptSvg;
