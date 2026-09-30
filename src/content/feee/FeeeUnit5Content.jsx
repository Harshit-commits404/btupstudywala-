import React from 'react';
import {
  BookOpen,
  Award,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  AlertCircle,
  Clock,
  Compass,
} from 'lucide-react';

export const FeeeUnit5Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 05</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            FEEE (Semester 1)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            A.C. Circuits
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">AC Cycle/Frequency</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">RMS/Avg Value</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Phase & Impedance</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">AC Power Triangle</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Polyphase</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Alternating Current (AC) is the standard for power distribution worldwide. This unit covers AC wave parameters, phase relationships in components, power calculations, and polyphase systems.
        </p>
      </header>

      
      {/* ========================================================= */}
      {/* 5.1 AC Fundamentals */}
      {/* ========================================================= */}
      <section id="sec-5-1" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.1
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            AC Fundamentals
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">AC voltage/current continuously changes in magnitude and reverses direction periodically.</p>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Frequency (f):</strong> Cycles per second (Hz). India standard is 50 Hz.</li>
<li><strong>Time Period (T):</strong> Time for one cycle. T = 1/f.</li>
<li><strong>RMS Value:</strong> The effective DC-equivalent heating value. V_rms = 0.707 × V_peak.</li>
<li><strong>Average Value:</strong> Avg of half cycle. V_avg = 0.637 × V_peak.</li>
</ul>
      </section>

      {/* ========================================================= */}
      {/* 5.2 AC Through Pure R, L, and C */}
      {/* ========================================================= */}
      <section id="sec-5-2" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            AC Through Pure R, L, and C
          </h2>
        </div>
        <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700"><thead><tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700"><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Circuit</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Phase Relation (V vs I)</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Opposition Factor</th></tr></thead><tbody><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Pure Resistor (R)</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">V and I are in phase (0°)</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Resistance (R)</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Pure Inductor (L)</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Current lags Voltage by 90°</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Inductive Reactance (X_L = 2πfL)</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Pure Capacitor (C)</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Current leads Voltage by 90°</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Capacitive Reactance (X_C = 1/2πfC)</td></tr></tbody></table></div>
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-5 mb-6"><div className="flex items-start gap-3"><div className="mt-1"><BookOpen className="w-5 h-5 text-brand-500" /></div><div><h4 className="font-bold text-slate-900 dark:text-white mb-1">Impedance (Z)</h4><p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">The total opposition to AC current offered by R, L, and C combined. Z = √(R² + X²)</p></div></div></div>
      </section>

      {/* ========================================================= */}
      {/* 5.3 Power in AC Circuits */}
      {/* ========================================================= */}
      <section id="sec-5-3" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Power in AC Circuits
          </h2>
        </div>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>The Power Triangle</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Apparent Power (S):</strong> V × I (Unit: VA). Total power supplied.</li>
<li><strong>Active/True Power (P):</strong> V × I × cos(φ) (Unit: W). Useful power consumed by resistance.</li>
<li><strong>Reactive Power (Q):</strong> V × I × sin(φ) (Unit: VAR). Power oscillating in reactive parts.</li>
</ul>
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-5 mb-6"><div className="flex items-start gap-3"><div className="mt-1"><BookOpen className="w-5 h-5 text-brand-500" /></div><div><h4 className="font-bold text-slate-900 dark:text-white mb-1">Power Factor (cos φ)</h4><p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Ratio of True Power to Apparent Power. Represents system efficiency. Always between 0 and 1.</p></div></div></div>
      </section>

      {/* ========================================================= */}
      {/* 5.4 Polyphase Systems (3-Phase) */}
      {/* ========================================================= */}
      <section id="sec-5-4" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.4
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Polyphase Systems (3-Phase)
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">A 3-phase system generates three AC voltages separated by 120 degrees.</p>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Advantages over Single-Phase</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li>Requires less conductor material for same power transmission.</li>
<li>Produces constant, smooth power.</li>
<li>3-phase motors are self-starting and more robust.</li>
</ul>
      </section>
    </article>
  );
};
export default FeeeUnit5Content;
