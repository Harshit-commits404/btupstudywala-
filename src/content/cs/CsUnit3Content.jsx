import React from 'react';
import { BookOpen, Sparkles, AlertCircle, Clock, Compass } from 'lucide-react';

export const CsUnit3Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 03</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Communication Skills in English (Semester 1)
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
          Unit 3 Notes
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans mt-4">
          Detailed notes based strictly on the BTEUP syllabus for Communication Skills in English.
        </p>
      </header>
      <section className="space-y-6">
        <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Study Content</h2>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Comprehensive topics and notes for this unit.
          </p>
        </div>
      </section>
    </article>
  );
};
export default CsUnit3Content;
