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

export const FeeeUnit2Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 02</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            FEEE (Semester 1)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Basic Measuring Instruments
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Ideal/Practical Sources</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Ammeter</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Voltmeter</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Wattmeter</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">CRO</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Electrical quantities cannot be seen with the naked eye; they must be measured using specialized instruments. This unit explores voltage/current sources and measuring devices like the Ammeter, Voltmeter, and CRO.
        </p>
      </header>

      
      {/* ========================================================= */}
      {/* 2.1 Voltage and Current Sources */}
      {/* ========================================================= */}
      <section id="sec-2-1" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.1
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Voltage and Current Sources
          </h2>
        </div>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Ideal Voltage Source:</strong> Maintains a constant terminal voltage regardless of load current. Internal resistance is zero.</li>
<li><strong>Practical Voltage Source:</strong> Voltage drops as load current increases due to small internal series resistance.</li>
<li><strong>Ideal Current Source:</strong> Delivers constant current regardless of terminal voltage. Internal resistance is infinite.</li>
<li><strong>Practical Current Source:</strong> Output current varies slightly due to a high parallel internal resistance.</li>
</ul>
      </section>

      {/* ========================================================= */}
      {/* 2.2 Basic Meters (Ammeter, Voltmeter, Wattmeter) */}
      {/* ========================================================= */}
      <section id="sec-2-2" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Basic Meters (Ammeter, Voltmeter, Wattmeter)
          </h2>
        </div>
        <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700"><thead><tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700"><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Meter</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Measures</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Connection in Circuit</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Ideal Resistance</th></tr></thead><tbody><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Ammeter</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Current (A)</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Series</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Zero (so it doesn't reduce current)</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Voltmeter</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Potential Difference (V)</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Parallel</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Infinite (so it draws no current)</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Wattmeter</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Active Power (W)</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Series & Parallel</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">N/A</td></tr></tbody></table></div>
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-5 mb-6"><div className="flex items-start gap-3"><div className="mt-1"><BookOpen className="w-5 h-5 text-brand-500" /></div><div><h4 className="font-bold text-slate-900 dark:text-white mb-1">Digital Multimeter (DMM)</h4><p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">A versatile device that can measure voltage, current, resistance, and test diodes, displaying the reading numerically.</p></div></div></div>
      </section>

      {/* ========================================================= */}
      {/* 2.3 Cathode Ray Oscilloscope (CRO) */}
      {/* ========================================================= */}
      <section id="sec-2-3" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Cathode Ray Oscilloscope (CRO)
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">The CRO is used to observe the exact wave shape of electrical signals over time.</p>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Block Diagram Components</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>CRT (Cathode Ray Tube):</strong> The screen. Generates and focuses the electron beam.</li>
<li><strong>Vertical Amplifier:</strong> Amplifies the input signal to move the beam up and down.</li>
<li><strong>Time Base Generator:</strong> Creates a sawtooth wave to sweep the beam left to right horizontally.</li>
<li><strong>Trigger Circuit:</strong> Synchronizes the time base with the input for a stable display.</li>
</ul>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5"><strong>Uses:</strong> Measuring peak-to-peak voltage, frequency, phase difference, and visualizing circuit noise.</p>
      </section>
    </article>
  );
};
export default FeeeUnit2Content;
