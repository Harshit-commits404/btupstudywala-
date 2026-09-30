import React from 'react';

export const MoiTheoremsSvg = () => {
  return (
    <svg
      viewBox="0 0 580 240"
      className="w-full h-auto max-h-[280px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="moi-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="#64748b" />
        </marker>
      </defs>

      {/* Center Divider */}
      <line
        x1="290"
        y1="15"
        x2="290"
        y2="225"
        stroke="#cbd5e1"
        strokeDasharray="4 4"
        className="dark:stroke-slate-700"
      />

      {/* LEFT: THEOREM OF PARALLEL AXES */}
      <g transform="translate(10, 0)">
        <text
          x="135"
          y="24"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-white font-bold text-[12px] tracking-wide uppercase font-sans"
        >
          (A) Parallel Axes Theorem
        </text>

        {/* Irregular Rigid Body Outline */}
        <path
          d="M 60 120 C 50 60, 150 50, 210 80 C 240 100, 220 180, 170 190 C 100 200, 70 160, 60 120 Z"
          className="fill-slate-100 dark:fill-slate-800/60 stroke-slate-300 dark:stroke-slate-700"
          strokeWidth="1.5"
        />
        <text x="70" y="80" className="fill-slate-500 dark:fill-slate-400 font-mono text-[11px]">
          Body (Mass M)
        </text>

        {/* Center of Mass Axis (Ic) */}
        <line x1="125" y1="35" x2="125" y2="195" stroke="#2563eb" strokeWidth="2.5" />
        <circle cx="125" cy="120" r="4" fill="#2563eb" />
        <text x="132" y="124" className="fill-blue-600 dark:fill-blue-400 font-bold font-mono text-[11px]">
          CM (G)
        </text>
        <text x="125" y="30" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold font-mono text-[12px]">
          Axis Ic
        </text>

        {/* Parallel Target Axis (I) */}
        <line x1="195" y1="35" x2="195" y2="195" stroke="#E63946" strokeWidth="2.5" />
        <text x="195" y="30" textAnchor="middle" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[12px]">
          Axis I
        </text>

        {/* Perpendicular Distance h */}
        <line x1="125" y1="155" x2="195" y2="155" stroke="#64748b" strokeWidth="1.5" />
        <line x1="125" y1="150" x2="125" y2="160" stroke="#64748b" strokeWidth="1.5" />
        <line x1="195" y1="150" x2="195" y2="160" stroke="#64748b" strokeWidth="1.5" />
        <text
          x="160"
          y="150"
          textAnchor="middle"
          className="fill-slate-700 dark:fill-slate-300 font-bold font-serif italic text-[13px]"
        >
          h
        </text>

        {/* Formula Box */}
        <rect
          x="35"
          y="200"
          width="200"
          height="30"
          rx="5"
          className="fill-red-50/80 dark:fill-red-950/30 stroke-red-200 dark:stroke-red-900/50"
        />
        <text
          x="135"
          y="220"
          textAnchor="middle"
          className="fill-red-700 dark:fill-red-400 font-bold font-mono text-[13px]"
        >
          I = Ic + M · h²
        </text>
      </g>

      {/* RIGHT: THEOREM OF PERPENDICULAR AXES */}
      <g transform="translate(300, 0)">
        <text
          x="135"
          y="24"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-white font-bold text-[12px] tracking-wide uppercase font-sans"
        >
          (B) Perpendicular Axes Theorem
        </text>

        {/* Planar Lamina (Isometric Perspective) */}
        <ellipse
          cx="135"
          cy="135"
          rx="85"
          ry="45"
          className="fill-slate-100 dark:fill-slate-800/60 stroke-slate-300 dark:stroke-slate-700"
          strokeWidth="1.5"
        />
        <text x="65" y="125" className="fill-slate-500 dark:fill-slate-400 font-mono text-[10px]">
          Planar Lamina
        </text>

        {/* Origin O */}
        <circle cx="135" cy="135" r="3.5" fill="#E63946" />
        <text x="122" y="146" className="fill-slate-600 dark:fill-slate-400 font-mono text-[11px]">
          O
        </text>

        {/* In-Plane X-Axis (Ix) */}
        <line
          x1="135"
          y1="135"
          x2="225"
          y2="155"
          stroke="#2563eb"
          strokeWidth="2.2"
          markerEnd="url(#moi-arr)"
        />
        <text x="230" y="162" className="fill-blue-600 dark:fill-blue-400 font-bold font-mono text-[12px]">
          X-Axis (Ix)
        </text>

        {/* In-Plane Y-Axis (Iy) */}
        <line
          x1="135"
          y1="135"
          x2="55"
          y2="145"
          stroke="#059669"
          strokeWidth="2.2"
          markerEnd="url(#moi-arr)"
        />
        <text x="25" y="158" className="fill-emerald-600 dark:fill-emerald-400 font-bold font-mono text-[12px]">
          Y-Axis (Iy)
        </text>

        {/* Perpendicular Z-Axis (Iz) Normal to Plane */}
        <line
          x1="135"
          y1="135"
          x2="135"
          y2="35"
          stroke="#E63946"
          strokeWidth="3"
          markerEnd="url(#moi-arr)"
        />
        <text x="135" y="30" textAnchor="middle" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[13px]">
          Z-Axis (Iz)
        </text>

        {/* Formula Box */}
        <rect
          x="35"
          y="200"
          width="200"
          height="30"
          rx="5"
          className="fill-red-50/80 dark:fill-red-950/30 stroke-red-200 dark:stroke-red-900/50"
        />
        <text
          x="135"
          y="220"
          textAnchor="middle"
          className="fill-red-700 dark:fill-red-400 font-bold font-mono text-[13px]"
        >
          Iz = Ix + Iy
        </text>
      </g>
    </svg>
  );
};

export default MoiTheoremsSvg;
