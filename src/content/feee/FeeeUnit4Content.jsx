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

export const FeeeUnit4Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 04</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            FEEE (Semester 1)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Electric and Magnetic Circuits
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Ohm's Law</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Kirchhoff's Laws</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Magnetic Flux</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">B-H Curve</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Faraday's Laws</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Inductance</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          The core laws of electrical engineering. This unit covers Ohm's Law, Kirchhoff's Laws for circuit analysis, and the fascinating relationship between electricity and magnetism (Faraday's Laws).
        </p>
      </header>

      
      {/* ========================================================= */}
      {/* 4.1 Ohm's Law and Basic Quantities */}
      {/* ========================================================= */}
      <section id="sec-4-1" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.1
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Ohm's Law and Basic Quantities
          </h2>
        </div>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Current (I):</strong> Flow of charge (Amperes).</li>
<li><strong>Voltage/EMF (V):</strong> Potential difference driving the current (Volts).</li>
<li><strong>Power (P):</strong> Rate of doing work (Watts). P = V × I.</li>
</ul>
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-5 mb-6"><div className="flex items-start gap-3"><div className="mt-1"><BookOpen className="w-5 h-5 text-brand-500" /></div><div><h4 className="font-bold text-slate-900 dark:text-white mb-1">Ohm's Law</h4><p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">V = I × R. The current through a conductor is directly proportional to the voltage applied, provided temperature is constant. (Not valid for semiconductors like diodes).</p></div></div></div>
      </section>

      {/* ========================================================= */}
      {/* 4.2 Kirchhoff's Laws */}
      {/* ========================================================= */}
      <section id="sec-4-2" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Kirchhoff's Laws
          </h2>
        </div>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>KCL (Kirchhoff's Current Law):</strong> Algebraic sum of currents at a node is zero. (Conservation of Charge).</li>
<li><strong>KVL (Kirchhoff's Voltage Law):</strong> Algebraic sum of voltages in a closed loop is zero. (Conservation of Energy).</li>
</ul>
      </section>

      {/* ========================================================= */}
      {/* 4.3 Magnetic Circuits and B-H Curve */}
      {/* ========================================================= */}
      <section id="sec-4-3" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Magnetic Circuits and B-H Curve
          </h2>
        </div>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>MMF (Magnetomotive Force):</strong> Drives magnetic flux (Ampere-turns). Analogous to EMF.</li>
<li><strong>Reluctance:</strong> Opposition to magnetic flux. Analogous to Resistance.</li>
</ul>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>B-H Curve and Hysteresis</span></h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">A curve showing the relationship between magnetic flux density (B) and magnetizing force (H). When AC is applied, B lags behind H. This lag is called Magnetic Hysteresis. The area inside the hysteresis loop represents energy lost as heat.</p>
      </section>

      {/* ========================================================= */}
      {/* 4.4 Electromagnetic Induction */}
      {/* ========================================================= */}
      <section id="sec-4-4" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.4
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Electromagnetic Induction
          </h2>
        </div>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Faraday's Laws</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>First Law:</strong> Whenever a conductor cuts magnetic flux, an EMF is induced.</li>
<li><strong>Second Law:</strong> Magnitude of induced EMF is proportional to the rate of change of flux linkages (e = -N dΦ/dt).</li>
</ul>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5"><strong>Lenz's Law:</strong> The direction of induced EMF always opposes the cause that produced it (hence the negative sign).</p>
      </section>
    </article>
  );
};
export default FeeeUnit4Content;
