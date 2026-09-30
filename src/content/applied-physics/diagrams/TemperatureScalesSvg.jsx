import React from 'react';

export const TemperatureScalesSvg = () => {
  return (
    <svg
      viewBox="0 0 560 270"
      className="w-full h-auto max-h-[300px] select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 4 Reference Horizontal Calibration Lines */}
      {/* 1. Boiling Point */}
      <line x1="60" y1="50" x2="500" y2="50" stroke="#E63946" strokeWidth="1" strokeDasharray="4 3" opacity="0.7" />
      <text x="65" y="44" className="fill-red-600 dark:fill-red-400 font-bold text-[11px] font-sans">
        Boiling Point of Water
      </text>

      {/* 2. Normal Human Body Temperature */}
      <line x1="60" y1="105" x2="500" y2="105" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      <text x="65" y="100" className="fill-amber-600 dark:fill-amber-400 font-medium text-[10px] font-sans">
        Human Body Temp
      </text>

      {/* 3. Freezing Point */}
      <line x1="60" y1="150" x2="500" y2="150" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 3" opacity="0.7" />
      <text x="65" y="145" className="fill-blue-600 dark:fill-blue-400 font-bold text-[11px] font-sans">
        Freezing Point of Water
      </text>

      {/* 4. Absolute Zero */}
      <line x1="60" y1="210" x2="500" y2="210" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
      <text x="65" y="205" className="fill-slate-500 dark:fill-slate-400 font-medium text-[10px] font-sans">
        Absolute Zero (0 K)
      </text>

      {/* THERMOMETER 1: CELSIUS (°C) */}
      <g transform="translate(195, 20)">
        <text x="25" y="15" textAnchor="middle" className="fill-slate-900 dark:fill-white font-bold text-[12px] font-mono">
          Celsius (°C)
        </text>
        {/* Stem */}
        <rect x="18" y="24" width="14" height="175" rx="7" className="fill-slate-100 dark:fill-slate-800 stroke-slate-400 dark:stroke-slate-600" />
        {/* Red liquid column up to 100°C */}
        <rect x="21" y="30" width="8" height="168" rx="4" fill="#E63946" />
        {/* Bulb */}
        <circle cx="25" cy="205" r="14" fill="#E63946" />

        {/* Values on scale */}
        <text x="38" y="34" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[11px]">100°</text>
        <text x="38" y="89" className="fill-amber-600 dark:fill-amber-400 font-mono text-[10px]">37°</text>
        <text x="38" y="134" className="fill-blue-600 dark:fill-blue-400 font-bold font-mono text-[11px]">0°</text>
        <text x="38" y="194" className="fill-slate-500 font-mono text-[10px]">-273.15°</text>
      </g>

      {/* THERMOMETER 2: FAHRENHEIT (°F) */}
      <g transform="translate(305, 20)">
        <text x="25" y="15" textAnchor="middle" className="fill-slate-900 dark:fill-white font-bold text-[12px] font-mono">
          Fahrenheit (°F)
        </text>
        {/* Stem */}
        <rect x="18" y="24" width="14" height="175" rx="7" className="fill-slate-100 dark:fill-slate-800 stroke-slate-400 dark:stroke-slate-600" />
        {/* Red liquid column */}
        <rect x="21" y="30" width="8" height="168" rx="4" fill="#E63946" />
        {/* Bulb */}
        <circle cx="25" cy="205" r="14" fill="#E63946" />

        {/* Values on scale */}
        <text x="38" y="34" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[11px]">212°</text>
        <text x="38" y="89" className="fill-amber-600 dark:fill-amber-400 font-mono text-[10px]">98.6°</text>
        <text x="38" y="134" className="fill-blue-600 dark:fill-blue-400 font-bold font-mono text-[11px]">32°</text>
        <text x="38" y="194" className="fill-slate-500 font-mono text-[10px]">-459.67°</text>
      </g>

      {/* THERMOMETER 3: KELVIN (K) */}
      <g transform="translate(415, 20)">
        <text x="25" y="15" textAnchor="middle" className="fill-slate-900 dark:fill-white font-bold text-[12px] font-mono">
          Kelvin (K)
        </text>
        {/* Stem */}
        <rect x="18" y="24" width="14" height="175" rx="7" className="fill-slate-100 dark:fill-slate-800 stroke-slate-400 dark:stroke-slate-600" />
        {/* Red liquid column */}
        <rect x="21" y="30" width="8" height="168" rx="4" fill="#E63946" />
        {/* Bulb */}
        <circle cx="25" cy="205" r="14" fill="#E63946" />

        {/* Values on scale */}
        <text x="38" y="34" className="fill-red-600 dark:fill-red-400 font-bold font-mono text-[11px]">373.15</text>
        <text x="38" y="89" className="fill-amber-600 dark:fill-amber-400 font-mono text-[10px]">310.15</text>
        <text x="38" y="134" className="fill-blue-600 dark:fill-blue-400 font-bold font-mono text-[11px]">273.15</text>
        <text x="38" y="194" className="fill-slate-500 font-mono text-[10px]">0 K</text>
      </g>

      {/* Bottom Conversion Relation Box */}
      <g transform="translate(80, 238)">
        <rect
          x="0"
          y="0"
          width="400"
          height="28"
          rx="5"
          className="fill-red-50/80 dark:fill-red-950/30 stroke-red-200 dark:stroke-red-900/50"
        />
        <text
          x="200"
          y="18"
          textAnchor="middle"
          className="fill-red-700 dark:fill-red-300 font-mono font-bold text-[12px]"
        >
          C / 5 = (F - 32) / 9 = (K - 273.15) / 5
        </text>
      </g>
    </svg>
  );
};

export default TemperatureScalesSvg;
