import React from 'react';

export const StokesLawSphereSvg = () => {
  return (
    <svg
      viewBox="0 0 520 240"
      className="w-full h-auto max-h-[270px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="stk-arr-red" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#E63946" />
        </marker>
        <marker id="stk-arr-blue" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb" />
        </marker>
        <marker id="stk-arr-emerald" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#059669" />
        </marker>
      </defs>

      {/* Viscous Medium Container */}
      <rect
        x="60"
        y="25"
        width="190"
        height="195"
        rx="8"
        className="fill-slate-100/70 dark:fill-slate-900/60 stroke-slate-300 dark:stroke-slate-700"
        strokeWidth="1.5"
      />
      <text x="75" y="45" className="fill-slate-500 dark:fill-slate-400 font-mono text-[10px]">
        Viscous Fluid (Viscosity η)
      </text>

      {/* Streamlines around falling sphere */}
      <path d="M 120 70 Q 110 120 120 170" fill="none" stroke="#94a3b8" strokeDasharray="3 2" />
      <path d="M 190 70 Q 200 120 190 170" fill="none" stroke="#94a3b8" strokeDasharray="3 2" />

      {/* Falling Sphere (Radius r) */}
      <circle
        cx="155"
        cy="120"
        r="24"
        fill="#334155"
        className="dark:fill-slate-600 stroke-slate-700 dark:stroke-slate-400"
        strokeWidth="2"
      />
      <text x="155" y="125" textAnchor="middle" className="fill-white font-bold text-[12px] font-sans">
        r
      </text>

      {/* Downward Velocity Indicator */}
      <text x="75" y="125" className="fill-slate-600 dark:fill-slate-400 font-mono text-[11px]">
        Velocity (v) ↓
      </text>

      {/* Upward Viscous Drag Force Fv = 6πηrv */}
      <line
        x1="140"
        y1="96"
        x2="140"
        y2="40"
        stroke="#E63946"
        strokeWidth="2.8"
        markerEnd="url(#stk-arr-red)"
      />
      <text x="110" y="35" className="fill-red-600 dark:fill-red-400 font-extrabold text-[12px] font-mono">
        Fv = 6πηrv (Viscous Drag)
      </text>

      {/* Upward Buoyancy Force Fb */}
      <line
        x1="170"
        y1="96"
        x2="170"
        y2="55"
        stroke="#2563eb"
        strokeWidth="2.2"
        markerEnd="url(#stk-arr-blue)"
      />
      <text x="175" y="65" className="fill-blue-600 dark:fill-blue-400 font-bold text-[11px] font-mono">
        Fb (Buoyancy)
      </text>

      {/* Downward Weight W = mg */}
      <line
        x1="155"
        y1="144"
        x2="155"
        y2="210"
        stroke="#059669"
        strokeWidth="3"
        markerEnd="url(#stk-arr-emerald)"
      />
      <text x="165" y="210" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-[12px] font-mono">
        W = mg (Weight)
      </text>

      {/* Right Equations Panel */}
      <g transform="translate(285, 30)">
        <rect
          x="0"
          y="0"
          width="215"
          height="180"
          rx="8"
          className="fill-red-50/80 dark:fill-red-950/30 stroke-red-200 dark:stroke-red-900/50"
        />
        <text x="14" y="24" className="fill-red-700 dark:fill-red-400 font-bold font-mono text-[11px] uppercase tracking-wider">
          Stoke's Law Summary
        </text>

        <text x="14" y="52" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
          Viscous Opposing Force:
        </text>
        <text x="24" y="74" className="fill-red-600 dark:fill-red-400 font-extrabold font-mono text-[16px]">
          F = 6 π η r v
        </text>

        <text x="14" y="104" className="fill-slate-700 dark:fill-slate-300 font-mono text-[10px]">
          η = Coefficient of viscosity
        </text>
        <text x="14" y="120" className="fill-slate-700 dark:fill-slate-300 font-mono text-[10px]">
          r = Radius of spherical body
        </text>
        <text x="14" y="136" className="fill-slate-700 dark:fill-slate-300 font-mono text-[10px]">
          v = Terminal velocity in medium
        </text>

        <text x="14" y="162" className="fill-emerald-700 dark:fill-emerald-400 font-bold font-mono text-[11px]">
          Terminal state: Fv + Fb = Weight
        </text>
      </g>
    </svg>
  );
};

export default StokesLawSphereSvg;
