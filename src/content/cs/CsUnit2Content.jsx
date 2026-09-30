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

export const CsUnit2Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 02</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Communication Skills in English (Semester 1)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Soft Skills for Professional Excellence
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Meaning of Soft Skills</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Soft vs Hard Skills</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Characteristics</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Importance</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Key Examples</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Aaj ke competitive era mein, sirf technical (hard) skills hona kaafi nahi hai. Professional success ke liye Soft Skills ka hona utna hi zaroori hai. Is unit mein hum samjhenge soft skills kya hote hain aur inki professional life mein kya importance hai.
        </p>
      </header>

      
      {/* ========================================================= */}
      {/* 2.1 Meaning and Definition of Soft Skills */}
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
            Meaning and Definition of Soft Skills
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Soft skills ek vyakti ke personality traits, communication abilities, aur interpersonal skills hote hain jo define karte hain ki wo doosro ke saath kitni achhi tarah kaam karta hai.</p>
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-5 mb-6"><div className="flex items-start gap-3"><div className="mt-1"><BookOpen className="w-5 h-5 text-brand-500" /></div><div><h4 className="font-bold text-slate-900 dark:text-white mb-1">Definition</h4><p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Soft skills are non-technical, interpersonal skills that describe how you work and interact with others.</p></div></div></div>
      </section>

      {/* ========================================================= */}
      {/* 2.2 Soft Skills vs Hard Skills */}
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
            Soft Skills vs Hard Skills
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Hard skills aur Soft skills dono career ke liye zaroori hain, par inmein clear difference hota hai:</p>
        <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700"><thead><tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700"><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Feature</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Soft Skills</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Hard Skills</th></tr></thead><tbody><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Nature</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Interpersonal, behavioral, non-technical.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Technical, quantifiable, specific to a job.</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Acquisition</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Developed over time through experience and interaction.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Learned through formal education and training.</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Measurement</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Hard to measure or test objectively.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Easy to measure (e.g., certificates, exams).</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Examples</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Teamwork, Communication, Time Management.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Programming, Accounting, AutoCAD.</td></tr></tbody></table></div>
        <div className="bg-amber-50 dark:bg-amber-500/10 border-l-4 border-amber-500 p-4 mb-6"><div className="flex items-start gap-3"><AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 mt-0.5 shrink-0" /><div className="text-amber-800 dark:text-amber-200 text-sm sm:text-base">Remember: Hard skills get you the interview, but Soft skills get you the job and promotions.</div></div></div>
      </section>

      {/* ========================================================= */}
      {/* 2.3 Characteristics of Soft Skills */}
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
            Characteristics of Soft Skills
          </h2>
        </div>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Transferable:</strong> Kisi bhi industry ya job role mein apply kiye ja sakte hain.</li>
<li><strong>Intangible:</strong> Inhe physically touch nahi kiya ja sakta, sirf behavior mein observe kiya jaata hai.</li>
<li><strong>People-centric:</strong> Ye completely human interactions par base hote hain.</li>
</ul>
      </section>

      {/* ========================================================= */}
      {/* 2.4 Importance and Examples of Soft Skills */}
      {/* ========================================================= */}
      <section id="sec-2-4" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.4
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Importance and Examples of Soft Skills
          </h2>
        </div>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Importance in Professional Life</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Leadership:</strong> Good soft skills are mandatory for leadership and management roles.</li>
<li><strong>Problem Solving:</strong> Helps navigate workplace conflicts peacefully.</li>
<li><strong>Client Relations:</strong> Builds trust and rapport with customers.</li>
</ul>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Key Examples of Soft Skills</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Communication:</strong> Active listening, clear speaking, and writing.</li>
<li><strong>Teamwork:</strong> Cooperating with others to achieve a common goal.</li>
<li><strong>Time Management:</strong> Prioritizing tasks to meet deadlines efficiently.</li>
<li><strong>Emotional Intelligence:</strong> Managing your own emotions and understanding others.</li>
</ul>
      </section>
    </article>
  );
};
export default CsUnit2Content;
