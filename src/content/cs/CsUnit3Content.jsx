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

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Reading Comprehension: Unseen Passages
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Approach to Passages</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Main Idea</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Prefix & Suffix</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Synonyms & Antonyms</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Reading Comprehension tests your ability to process text, understand its meaning, and extract relevant information. Vocabulary skills like prefixes, suffixes, synonyms, and antonyms play a key role in this.
        </p>
      </header>

      
      {/* ========================================================= */}
      {/* 3.1 Reading Comprehension Basics */}
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
            Reading Comprehension Basics
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Reading Comprehension involves decoding unseen texts rapidly and answering questions accurately.</p>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Approach to Unseen Passages</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Skimming:</strong> Read the passage quickly to grasp the main idea (gist).</li>
<li><strong>Scanning:</strong> Read specific parts to find keywords matching the questions.</li>
<li><strong>Identifying Main Idea:</strong> Usually found in the first or last paragraph.</li>
<li><strong>Context Clues:</strong> Guess the meaning of difficult words by reading surrounding sentences.</li>
</ul>
      </section>

      {/* ========================================================= */}
      {/* 3.2 Prefix and Suffix */}
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
            Prefix and Suffix
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Affixes (prefixes and suffixes) are added to root words to change their meaning or part of speech.</p>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Prefix (Added at the beginning)</span></h3>
        <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700"><thead><tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700"><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Prefix</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Meaning</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Example</th></tr></thead><tbody><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300">un-</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">not</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">unhappy, unlock</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300">dis-</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">opposite</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">disagree, disconnect</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300">re-</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">again</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">rewrite, return</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300">mis-</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">wrong</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">misunderstand</td></tr></tbody></table></div>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Suffix (Added at the end)</span></h3>
        <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700"><thead><tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700"><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Suffix</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Function</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Example</th></tr></thead><tbody><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300">-ness</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">forms noun</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">happiness, kindness</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300">-ful</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">full of</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">beautiful, helpful</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300">-less</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">without</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">careless, homeless</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300">-ly</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">forms adverb</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">quickly, smoothly</td></tr></tbody></table></div>
      </section>

      {/* ========================================================= */}
      {/* 3.3 Synonyms and Antonyms */}
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
            Synonyms and Antonyms
          </h2>
        </div>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Synonyms</span></h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Words with similar meanings.</p>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Begin</strong> = Start</li>
<li><strong>Huge</strong> = Massive, Enormous</li>
<li><strong>Quick</strong> = Fast, Rapid</li>
</ul>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Antonyms</span></h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Words with opposite meanings.</p>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Accept</strong> × Reject</li>
<li><strong>Brave</strong> × Cowardly</li>
<li><strong>Optimistic</strong> × Pessimistic</li>
</ul>
      </section>
    </article>
  );
};
export default CsUnit3Content;
