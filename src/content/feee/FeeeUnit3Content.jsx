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

export const FeeeUnit3Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 03</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            FEEE (Semester 1)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Overview of Digital Electronics
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Analog vs Digital</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Number Systems</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Boolean Algebra</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Logic Gates</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Truth Tables</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Modern technology relies heavily on digital systems. This unit introduces analog vs digital signals, number systems used by computers (binary/hex), and the foundational logic gates of all processors.
        </p>
      </header>

      
      {/* ========================================================= */}
      {/* 3.1 Analog vs Digital Electronics */}
      {/* ========================================================= */}
      <section id="sec-3-1" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.1
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Analog vs Digital Electronics
          </h2>
        </div>
        <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700"><thead><tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700"><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Feature</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Analog Signals</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Digital Signals</th></tr></thead><tbody><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Nature</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Continuous values over a given range.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Discrete values (usually 0 and 1).</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Noise Immunity</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Prone to noise and distortion.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Highly resistant to noise.</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Example</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Traditional microphone audio wave.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Computer data, Binary code.</td></tr></tbody></table></div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5"><strong>Advantages of Digital:</strong> High precision, easy storage, cheaper to manufacture in large scales (ICs), and highly reliable.</p>
      </section>

      {/* ========================================================= */}
      {/* 3.2 Number Systems */}
      {/* ========================================================= */}
      <section id="sec-3-2" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Number Systems
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Digital systems use different number bases for computation and representation.</p>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Decimal (Base 10):</strong> 0-9. Used by humans.</li>
<li><strong>Binary (Base 2):</strong> 0, 1. Used by digital logic circuits.</li>
<li><strong>Octal (Base 8):</strong> 0-7.</li>
<li><strong>Hexadecimal (Base 16):</strong> 0-9 and A-F (where A=10...F=15). Used heavily in computer memory addressing.</li>
</ul>
      </section>

      {/* ========================================================= */}
      {/* 3.3 Logic Gates and Truth Tables */}
      {/* ========================================================= */}
      <section id="sec-3-3" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Logic Gates and Truth Tables
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Logic gates process binary inputs (1/True or 0/False) based on Boolean Algebra.</p>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Basic Gates</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>AND Gate (Y = A.B):</strong> Output is 1 ONLY if BOTH inputs are 1.</li>
<li><strong>OR Gate (Y = A+B):</strong> Output is 1 if AT LEAST ONE input is 1.</li>
<li><strong>NOT Gate (Y = A'):</strong> Inverter. Output is the opposite of the input.</li>
</ul>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Universal Gates</span></h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Called universal because any circuit can be built using only these.</p>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>NAND Gate:</strong> NOT-AND. Output is 0 only if both inputs are 1.</li>
<li><strong>NOR Gate:</strong> NOT-OR. Output is 1 only if both inputs are 0.</li>
</ul>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Exclusive Gates</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>XOR Gate:</strong> Output is 1 if inputs are DIFFERENT (0,1 or 1,0).</li>
<li><strong>XNOR Gate:</strong> Output is 1 if inputs are the SAME (0,0 or 1,1).</li>
</ul>
      </section>
    </article>
  );
};
export default FeeeUnit3Content;
