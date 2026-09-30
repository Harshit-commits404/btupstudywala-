import React from 'react';

export const VectorAdditionSvg = () => {
  return (
    <svg
      viewBox="0 0 580 230"
      className="w-full h-auto max-h-[270px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="v-arr-red" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#E63946" />
        </marker>
        <marker id="v-arr-blue" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb" />
        </marker>
        <marker id="v-arr-emerald" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="#059669" />
        </marker>
      </defs>

      {/* Center Divider */}
      <line
        x1="290"
        y1="15"
        x2="290"
        y2="215"
        stroke="#cbd5e1"
        strokeDasharray="4 4"
        className="dark:stroke-slate-700"
      />

      {/* LEFT: TRIANGLE LAW */}
      <g transform="translate(10, 0)">
        <text
          x="135"
          y="24"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-white font-bold text-[13px] tracking-wide"
        >
          (A) Triangle Law of Vectors
        </text>

        {/* Vector A (Base) */}
        <line
          x1="30"
          y1="160"
          x2="150"
          y2="160"
          stroke="#2563eb"
          strokeWidth="2.5"
          markerEnd="url(#v-arr-blue)"
        />
        <text
          x="90"
          y="178"
          textAnchor="middle"
          className="fill-blue-600 dark:fill-blue-400 font-bold text-[12px] font-mono"
        >
          Vector A⃗
        </text>

        {/* Vector B (Head to tail) */}
        <line
          x1="150"
          y1="160"
          x2="230"
          y2="70"
          stroke="#059669"
          strokeWidth="2.5"
          markerEnd="url(#v-arr-emerald)"
        />
        <text
          x="206"
          y="110"
          className="fill-emerald-600 dark:fill-emerald-400 font-bold text-[12px] font-mono"
        >
          Vector B⃗
        </text>

        {/* Resultant Vector R (Closing side) */}
        <line
          x1="30"
          y1="160"
          x2="230"
          y2="70"
          stroke="#E63946"
          strokeWidth="3"
          markerEnd="url(#v-arr-red)"
        />
        <text
          x="115"
          y="105"
          textAnchor="middle"
          className="fill-red-600 dark:fill-red-400 font-extrabold text-[13px] font-mono"
        >
          R⃗ = A⃗ + B⃗
        </text>

        <rect
          x="30"
          y="190"
          width="215"
          height="28"
          rx="5"
          className="fill-slate-100/80 dark:fill-slate-800/80 stroke-slate-200 dark:stroke-slate-700"
        />
        <text
          x="137"
          y="208"
          textAnchor="middle"
          className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]"
        >
          Order: Tail of A to Head of B
        </text>
      </g>

      {/* RIGHT: PARALLELOGRAM LAW */}
      <g transform="translate(300, 0)">
        <text
          x="135"
          y="24"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-white font-bold text-[13px] tracking-wide"
        >
          (B) Parallelogram Law of Vectors
        </text>

        {/* Origin O */}
        <circle cx="30" cy="160" r="3.5" fill="#E63946" />
        <text x="18" y="165" className="fill-slate-600 dark:fill-slate-300 text-[11px] font-mono">
          O
        </text>

        {/* Vector A (Adjacent side 1) */}
        <line
          x1="30"
          y1="160"
          x2="150"
          y2="160"
          stroke="#2563eb"
          strokeWidth="2.5"
          markerEnd="url(#v-arr-blue)"
        />
        <text
          x="90"
          y="178"
          textAnchor="middle"
          className="fill-blue-600 dark:fill-blue-400 font-bold text-[12px] font-mono"
        >
          A⃗
        </text>

        {/* Vector B (Adjacent side 2) */}
        <line
          x1="30"
          y1="160"
          x2="110"
          y2="70"
          stroke="#059669"
          strokeWidth="2.5"
          markerEnd="url(#v-arr-emerald)"
        />
        <text
          x="55"
          y="108"
          className="fill-emerald-600 dark:fill-emerald-400 font-bold text-[12px] font-mono"
        >
          B⃗
        </text>

        {/* Angle θ arc */}
        <path
          d="M 60 160 A 30 30 0 0 0 54 133"
          fill="none"
          stroke="#E63946"
          strokeWidth="1.5"
        />
        <text x="66" y="148" className="fill-red-600 dark:fill-red-400 font-bold text-[11px] font-mono">
          θ
        </text>

        {/* Dashed completion sides */}
        <line
          x1="110"
          y1="70"
          x2="230"
          y2="70"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <line
          x1="150"
          y1="160"
          x2="230"
          y2="70"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />

        {/* Diagonal Resultant R */}
        <line
          x1="30"
          y1="160"
          x2="230"
          y2="70"
          stroke="#E63946"
          strokeWidth="3"
          markerEnd="url(#v-arr-red)"
        />
        <text
          x="148"
          y="105"
          className="fill-red-600 dark:fill-red-400 font-extrabold text-[13px] font-mono"
        >
          Resultant R⃗
        </text>

        <rect
          x="20"
          y="190"
          width="235"
          height="28"
          rx="5"
          className="fill-red-50/80 dark:fill-red-950/30 stroke-red-200 dark:stroke-red-900/50"
        />
        <text
          x="137"
          y="208"
          textAnchor="middle"
          className="fill-red-700 dark:fill-red-300 font-mono text-[11px] font-bold"
        >
          R = √(A² + B² + 2AB cos θ)
        </text>
      </g>
    </svg>
  );
};

export default VectorAdditionSvg;
