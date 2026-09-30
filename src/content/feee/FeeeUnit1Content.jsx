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

export const FeeeUnit1Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 01</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            FEEE (Semester 1)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Overview of Electronic Components
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Active vs Passive</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Resistor/Capacitor/Inductor</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Semiconductors</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">PN Junction</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">BJT & FET</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Electronics is the study of manipulating electron flow for useful work. In this unit, we will cover the foundational building blocks of all electronic circuits: Active components, Passive components, and Semiconductors like diodes and transistors.
        </p>
      </header>

      
      {/* ========================================================= */}
      {/* 1.1 Active and Passive Components */}
      {/* ========================================================= */}
      <section id="sec-1-1" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.1
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Active and Passive Components
          </h2>
        </div>
        <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700"><thead><tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700"><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Feature</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Active Components</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Passive Components</th></tr></thead><tbody><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Definition</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Can amplify a signal or inject power into a circuit.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Can only consume, store, or release energy. Cannot amplify.</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>External Power</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Requires an external power source to operate.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Does not require an external power source.</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Examples</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Transistors, Diodes, Op-Amps</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Resistors (R), Capacitors (C), Inductors (L)</td></tr></tbody></table></div>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Passive Components Detail</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Resistor (R):</strong> Opposes current flow (Ohm). Converts electrical energy to heat.</li>
<li><strong>Capacitor (C):</strong> Stores energy in an electrostatic field (Farad). Blocks DC, passes AC.</li>
<li><strong>Inductor (L):</strong> Stores energy in a magnetic field (Henry). Opposes sudden changes in current.</li>
</ul>
      </section>

      {/* ========================================================= */}
      {/* 1.2 Semiconductors */}
      {/* ========================================================= */}
      <section id="sec-1-2" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Semiconductors
          </h2>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-5 mb-6"><div className="flex items-start gap-3"><div className="mt-1"><BookOpen className="w-5 h-5 text-brand-500" /></div><div><h4 className="font-bold text-slate-900 dark:text-white mb-1">Semiconductor</h4><p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Material whose conductivity lies between a conductor and an insulator (e.g. Silicon, Germanium).</p></div></div></div>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Intrinsic:</strong> Pure semiconductor. Acts as an insulator at absolute zero.</li>
<li><strong>Extrinsic:</strong> Impurities added (doping) to increase conductivity.</li>
<li><strong>N-Type:</strong> Doped with pentavalent impurity (Phosphorus). Majority carriers: Electrons.</li>
<li><strong>P-Type:</strong> Doped with trivalent impurity (Boron). Majority carriers: Holes.</li>
</ul>
      </section>

      {/* ========================================================= */}
      {/* 1.3 PN Junction Diode and Transistors */}
      {/* ========================================================= */}
      <section id="sec-1-3" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            PN Junction Diode and Transistors
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">A PN junction diode is formed by joining P-type and N-type material. It acts as a one-way valve for current.</p>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Forward Bias:</strong> Positive to P, Negative to N. Current flows easily.</li>
<li><strong>Reverse Bias:</strong> Positive to N, Negative to P. Current is blocked.</li>
</ul>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Transistors</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>BJT (Bipolar Junction Transistor):</strong> Current-controlled device. Terminals: Emitter, Base, Collector. Types: NPN, PNP.</li>
<li><strong>FET (Field Effect Transistor):</strong> Voltage-controlled device. Terminals: Source, Gate, Drain. Example: MOSFET (used heavily in digital ICs).</li>
</ul>
      </section>
    </article>
  );
};
export default FeeeUnit1Content;
