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

export const ItaiUnit1Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 01</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Introduction to IT and AI (Semester 1)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Introduction to Computers and Peripherals
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Computer Def.</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Generations</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">CPU</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Primary/Secondary Memory</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Peripherals</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Computers modern era ki backbone hain. Is unit mein hum computers ki basic definition, unke working principles, internal components (CPU, Memory), aur external devices (Printers, Scanners) ke baare mein detail mein samjhenge.
        </p>
      </header>

      
      {/* ========================================================= */}
      {/* 1.1 Introduction and Generations of Computer */}
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
            Introduction and Generations of Computer
          </h2>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-5 mb-6"><div className="flex items-start gap-3"><div className="mt-1"><BookOpen className="w-5 h-5 text-brand-500" /></div><div><h4 className="font-bold text-slate-900 dark:text-white mb-1">Computer Definition</h4><p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data according to instructions (program).</p></div></div></div>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Generations of Computers</span></h3>
        <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700"><thead><tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700"><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Generation</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Time Period</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Key Technology</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Examples</th></tr></thead><tbody><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300">First</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">1940-1956</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Vacuum Tubes</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">ENIAC, UNIVAC</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Second</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">1956-1963</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Transistors</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">IBM 1401</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Third</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">1964-1971</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Integrated Circuits (IC)</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">IBM 360</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Fourth</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">1971-Present</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Microprocessors</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">PCs, Laptops</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Fifth</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Present-Future</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Artificial Intelligence</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Robotics, Quantum</td></tr></tbody></table></div>
      </section>

      {/* ========================================================= */}
      {/* 1.2 CPU and Memory */}
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
            CPU and Memory
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Central Processing Unit (CPU) computer ka brain hota hai. Iske 3 main components hain:</p>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>ALU (Arithmetic Logic Unit):</strong> Performs math and logic operations.</li>
<li><strong>CU (Control Unit):</strong> Coordinates operations and data flow.</li>
<li><strong>Registers:</strong> Fastest, temporary memory for the CPU.</li>
</ul>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Computer Memory</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Primary Memory (RAM):</strong> Volatile memory, holds active data.</li>
<li><strong>Primary Memory (ROM):</strong> Non-volatile, holds BIOS.</li>
<li><strong>Secondary Memory:</strong> Permanent storage like Hard Disks (HDD), SSDs, CDs.</li>
</ul>
      </section>

      {/* ========================================================= */}
      {/* 1.3 Peripherals (Input/Output Devices) */}
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
            Peripherals (Input/Output Devices)
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Peripherals wo external devices hain jo computer system se connect hote hain.</p>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Input Devices:</strong> Keyboard, Mouse, Scanner (Converts hard copy to digital).</li>
<li><strong>Output Devices:</strong> Monitor, Printer (Converts digital to hard copy).</li>
<li><strong>Other:</strong> Sound card (processes audio), Modem (Modulator-Demodulator for internet), CMOS Battery (Powers the BIOS clock).</li>
</ul>
      </section>
    </article>
  );
};
export default ItaiUnit1Content;
