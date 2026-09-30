import React from 'react';

export const CapillaryActionSvg = () => {
  return (
    <svg
      viewBox="0 0 520 250"
      className="w-full h-auto max-h-[280px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="cap-arr-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="#E63946" />
        </marker>
        <marker id="cap-arr-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="#2563eb" />
        </marker>
      </defs>

      {/* Beaker Container */}
      <rect
        x="60"
        y="140"
        width="220"
        height="95"
        rx="4"
        className="fill-blue-500/10 dark:fill-blue-500/15 stroke-slate-400 dark:stroke-slate-600"
        strokeWidth="2"
      />
      {/* Liquid outside level */}
      <line x1="60" y1="160" x2="280" y2="160" stroke="#3b82f6" strokeWidth="2" />
      <text x="70" y="155" className="fill-blue-600 dark:fill-blue-400 font-sans text-[10px]">
        Liquid Surface Level
      </text>

      {/* Capillary Glass Tube */}
      <rect
        x="145"
        y="30"
        width="50"
        height="190"
        fill="none"
        stroke="#64748b"
        strokeWidth="2.5"
      />

      {/* Liquid inside Capillary Tube (Risen Column) */}
      <path
        d="M 146 160 L 146 80 Q 170 95 194 80 L 194 160 Z"
        fill="#3b82f6"
        opacity="0.3"
      />
      {/* Meniscus curve */}
      <path
        d="M 146 80 Q 170 95 194 80"
        fill="none"
        stroke="#1d4ed8"
        strokeWidth="2.5"
      />

      {/* Surface Tension Vectors T along meniscus edges */}
      <line x1="147" y1="82" x2="135" y2="52" stroke="#E63946" strokeWidth="2.2" markerEnd="url(#cap-arr-red)" />
      <line x1="193" y1="82" x2="205" y2="52" stroke="#E63946" strokeWidth="2.2" markerEnd="url(#cap-arr-red)" />
      <text x="110" y="55" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[11px]">
        T cos θ
      </text>
      <text x="210" y="55" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[11px]">
        T cos θ
      </text>

      {/* Height Dimension Line (h) */}
      <line x1="215" y1="85" x2="215" y2="160" stroke="#2563eb" strokeWidth="1.8" />
      <line x1="210" y1="85" x2="220" y2="85" stroke="#2563eb" strokeWidth="1.8" />
      <line x1="210" y1="160" x2="220" y2="160" stroke="#2563eb" strokeWidth="1.8" />
      <text x="225" y="126" className="fill-blue-600 dark:fill-blue-400 font-bold font-serif italic text-[14px]">
        Height (h)
      </text>

      {/* Capillary Radius r Dimension */}
      <line x1="145" y1="210" x2="195" y2="210" stroke="#64748b" strokeWidth="1.2" />
      <line x1="145" y1="205" x2="145" y2="215" stroke="#64748b" strokeWidth="1.2" />
      <line x1="195" y1="205" x2="195" y2="215" stroke="#64748b" strokeWidth="1.2" />
      <text x="170" y="222" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[10px] font-mono">
        Diameter = 2r
      </text>

      {/* Right Equations Panel */}
      <g transform="translate(310, 35)">
        <rect
          x="0"
          y="0"
          width="190"
          height="175"
          rx="8"
          className="fill-red-50/80 dark:fill-red-950/30 stroke-red-200 dark:stroke-red-900/50"
        />
        <text x="14" y="24" className="fill-red-700 dark:fill-red-400 font-bold font-mono text-[11px] uppercase tracking-wider">
          Ascent Formula
        </text>

        <text x="14" y="52" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
          Upward surface tension force:
        </text>
        <text x="24" y="70" className="fill-blue-600 dark:fill-blue-400 font-bold font-mono text-[12px]">
          F_up = 2πr · T cos θ
        </text>

        <text x="14" y="96" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
          Liquid column weight:
        </text>
        <text x="24" y="114" className="fill-slate-700 dark:fill-slate-300 font-bold font-mono text-[12px]">
          W = (π r² h) · ρ g
        </text>

        <text x="14" y="140" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
          Equating forces:
        </text>
        <text x="20" y="160" className="fill-red-700 dark:fill-red-300 font-extrabold font-mono text-[13px]">
          h = 2T cos(θ) / (r ρ g)
        </text>
      </g>
    </svg>
  );
};

export default CapillaryActionSvg;
