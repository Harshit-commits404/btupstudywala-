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

export const ItaiUnit5Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 05</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Introduction to IT and AI (Semester 1)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Fundamentals and Applications of AI
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">AI Scope</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">AI vs ML vs DL</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">ChatGPT/Gemini</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Prompt Engineering</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Search</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Applications</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Artificial Intelligence future of computing hai. Is unit mein hum AI ki basics, ML aur DL ke difference, Generative AI (ChatGPT, Gemini), prompt engineering, aur AI ke real-world applications ko samjhenge.
        </p>
      </header>

      
      {/* ========================================================= */}
      {/* 5.1 Definition, Scope and Types of AI */}
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
            Definition, Scope and Types of AI
          </h2>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-5 mb-6"><div className="flex items-start gap-3"><div className="mt-1"><BookOpen className="w-5 h-5 text-brand-500" /></div><div><h4 className="font-bold text-slate-900 dark:text-white mb-1">Artificial Intelligence</h4><p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">The simulation of human intelligence processes by machines, especially computer systems. (Learning, Reasoning, Self-correction).</p></div></div></div>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Stages of AI</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Narrow AI (Weak AI):</strong> Dedicated to one task (e.g. Siri, Chess AI). We are currently at this stage.</li>
<li><strong>General AI (Strong AI):</strong> AI with human-level cognitive abilities across any domain.</li>
<li><strong>Super AI:</strong> AI that surpasses human intelligence.</li>
</ul>
      </section>

      {/* ========================================================= */}
      {/* 5.2 AI vs ML vs DL */}
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
            AI vs ML vs DL
          </h2>
        </div>
        <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700"><thead><tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700"><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Concept</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Explanation</th></tr></thead><tbody><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>AI</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">The broad umbrella of creating intelligent machines.</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Machine Learning (ML)</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">A subset of AI. Algorithms that allow computers to learn from data without explicit programming.</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Deep Learning (DL)</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">A subset of ML. Uses artificial neural networks (inspired by the human brain) to process complex data (images, voice).</td></tr></tbody></table></div>
      </section>

      {/* ========================================================= */}
      {/* 5.3 Generative AI and Prompt Engineering */}
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
            Generative AI and Prompt Engineering
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Generative AI tools (like ChatGPT by OpenAI, Gemini by Google) can create new text, code, or images based on training data.</p>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Prompt Engineering</span></h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">The skill of designing the best inputs (prompts) to get the most accurate and useful outputs from an AI.</p>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Clarity:</strong> Be specific about what you want.</li>
<li><strong>Context:</strong> Provide background (e.g. 'Act as a developer').</li>
<li><strong>Constraints:</strong> Set length/format limits (e.g. 'Summarize in 3 bullet points').</li>
</ul>
      </section>

      {/* ========================================================= */}
      {/* 5.4 Search Algorithms and Applications */}
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
            Search Algorithms and Applications
          </h2>
        </div>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Uninformed Search (Blind):</strong> No clues/domain knowledge about the goal (e.g. Breadth-First Search).</li>
<li><strong>Informed Search (Heuristic):</strong> Uses a heuristic function to guess how close it is to the goal, making it much faster (e.g. A* search in maps).</li>
</ul>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Applications in Diverse Fields</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Healthcare:</strong> Early disease diagnosis via MRI analysis.</li>
<li><strong>Finance:</strong> Fraud detection and algorithmic trading.</li>
<li><strong>Agriculture:</strong> Crop monitoring and yield prediction using drones.</li>
</ul>
      </section>
    </article>
  );
};
export default ItaiUnit5Content;
