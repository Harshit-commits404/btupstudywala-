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

export const ItaiUnit2Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 02</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Introduction to IT and AI (Semester 1)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Operating System and Application Software
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Software Types</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">OS Functions</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Windows Desktop</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Office Suites</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Google Docs/Drive</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Computer bina software ke sirf ek khali box hai. Is unit mein hum hardware ko manage karne wale Operating System (OS) aur users ke kaam aane wale Application Software (MS Office, Google Workspace) ko cover karenge.
        </p>
      </header>

      
      {/* ========================================================= */}
      {/* 2.1 Software Classification */}
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
            Software Classification
          </h2>
        </div>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>System Software:</strong> Software that runs the hardware and provides a platform for applications (e.g., Windows OS, Device Drivers).</li>
<li><strong>Application Software:</strong> Software designed to perform specific user tasks (e.g., MS Word, Chrome Browser).</li>
<li><strong>Utility Software:</strong> Tools that help maintain the system (e.g., Antivirus, Disk Cleaners).</li>
</ul>
      </section>

      {/* ========================================================= */}
      {/* 2.2 Operating System and Windows Basics */}
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
            Operating System and Windows Basics
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">An Operating System (OS) is the master control program that acts as an interface between the user and the computer hardware.</p>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Functions of an OS</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li>Process Management (Allocating CPU time)</li>
<li>Memory Management (Managing RAM)</li>
<li>File Management (Folders and files)</li>
<li>Device Management (Using drivers to talk to printers/scanners)</li>
</ul>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5"><strong>Windows OS Desktop Components:</strong> Includes the Taskbar, Start Menu, Desktop Icons (Shortcuts), and Menu Bars inside applications.</p>
      </section>

      {/* ========================================================= */}
      {/* 2.3 Application Suites: Office & Google Workspace */}
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
            Application Suites: Office & Google Workspace
          </h2>
        </div>
        <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700"><thead><tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700"><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Tool Type</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">MS Office</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Google Suite (Cloud)</th></tr></thead><tbody><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Word Processor</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">MS Word</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Google Docs</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Spreadsheet</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">MS Excel</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Google Sheets</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Presentation</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">MS PowerPoint</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Google Slides</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Storage</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">OneDrive</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Google Drive</td></tr></tbody></table></div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5"><strong>Antivirus and Drivers:</strong> Application installation requires executing a setup file. Device drivers must be installed so the OS recognizes new hardware. Antivirus software must be installed to protect the system from malware.</p>
      </section>
    </article>
  );
};
export default ItaiUnit2Content;
