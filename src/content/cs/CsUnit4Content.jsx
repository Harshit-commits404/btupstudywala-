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

export const CsUnit4Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 04</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Communication Skills in English (Semester 1)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Functional Grammar
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Sentences</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Parts of Speech</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Tenses</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Active/Passive Voice</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Punctuation</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Grammar is the set of structural rules of the English language. This unit covers sentences, parts of speech, tenses, active/passive voice, and punctuation marks.
        </p>
      </header>

      
      {/* ========================================================= */}
      {/* 4.1 The Sentence and its Types */}
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
            The Sentence and its Types
          </h2>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-5 mb-6"><div className="flex items-start gap-3"><div className="mt-1"><BookOpen className="w-5 h-5 text-brand-500" /></div><div><h4 className="font-bold text-slate-900 dark:text-white mb-1">Sentence Definition</h4><p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">A sentence is a group of words that makes complete sense, containing a subject and a verb.</p></div></div></div>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Declarative (Assertive):</strong> Makes a statement. (e.g., The sun rises in the east.)</li>
<li><strong>Interrogative:</strong> Asks a question. (e.g., Where are you going?)</li>
<li><strong>Imperative:</strong> Gives a command or request. (e.g., Please open the door.)</li>
<li><strong>Exclamatory:</strong> Expresses strong emotion. (e.g., What a beautiful day!)</li>
</ul>
      </section>

      {/* ========================================================= */}
      {/* 4.2 Parts of Speech */}
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
            Parts of Speech
          </h2>
        </div>
        <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700"><thead><tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700"><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Part of Speech</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Function</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Example</th></tr></thead><tbody><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Noun</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Name of person, place, thing, or idea.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">India, Computer, Happiness</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Pronoun</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Used in place of a noun.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">He, She, It, They</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Adjective</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Describes a noun.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Beautiful, Tall, Five</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Verb</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Shows action or state of being.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Run, Is, Write</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Adverb</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Modifies a verb, adjective, or adverb.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Quickly, Very</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Preposition</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Shows relationship of noun to other words.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">In, On, At, Under</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Conjunction</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Joins words or sentences.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">And, But, Because</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Interjection</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Expresses sudden emotion.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Wow!, Alas!</td></tr></tbody></table></div>
      </section>

      {/* ========================================================= */}
      {/* 4.3 Tenses */}
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
            Tenses
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Tense indicates the time of an action (Present, Past, Future). Each has four forms:</p>
        <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700"><thead><tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700"><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Form</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Present</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Past</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Future</th></tr></thead><tbody><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Simple</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">He plays.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">He played.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">He will play.</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Continuous</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">He is playing.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">He was playing.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">He will be playing.</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Perfect</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">He has played.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">He had played.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">He will have played.</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Perfect Cont.</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">He has been playing...</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">He had been playing...</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">He will have been playing...</td></tr></tbody></table></div>
      </section>

      {/* ========================================================= */}
      {/* 4.4 Active and Passive Voice */}
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
            Active and Passive Voice
          </h2>
        </div>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Active Voice:</strong> Subject performs the action. (e.g., The engineer designed the bridge.)</li>
<li><strong>Passive Voice:</strong> Subject receives the action. (e.g., The bridge was designed by the engineer.)</li>
</ul>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Transformation Rules</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li>Swap the Subject and Object.</li>
<li>Use the appropriate form of the 'be' verb.</li>
<li>Always use the Past Participle (3rd form) of the main verb.</li>
<li>Add 'by' before the new object (the doer).</li>
</ul>
      </section>

      {/* ========================================================= */}
      {/* 4.5 Punctuation */}
      {/* ========================================================= */}
      <section id="sec-4-5" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.5
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Punctuation
          </h2>
        </div>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Full Stop (.)</strong> Used at the end of declarative/imperative sentence.</li>
<li><strong>Comma (,)</strong> Used for short pauses, or separating items.</li>
<li><strong>Question Mark (?)</strong> Used at the end of a question.</li>
<li><strong>Exclamation Mark (!)</strong> Used after strong emotion.</li>
<li><strong>Colon (:)</strong> Introduces a list.</li>
<li><strong>Semicolon (;)</strong> Connects closely related independent clauses.</li>
<li><strong>Apostrophe (')</strong> Shows possession (John's).</li>
<li><strong>Quotation Marks (" ")</strong> Encloses direct speech.</li>
</ul>
      </section>
    </article>
  );
};
export default CsUnit4Content;
