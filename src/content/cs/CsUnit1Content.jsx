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

export const CsUnit1Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 01</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Communication Skills in English (Semester 1)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Communication: Theory and Practice
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Meaning & Definition</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Process</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Verbal/Non-Verbal</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">7 C's</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Barriers</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Tools</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Communication ek fundamental skill hai jo har professional aur personal environment mein zaroori hoti hai. Is unit mein hum communication ki definition, process, types, barriers, aur modern tools ke baare mein detail mein samjhenge taaki hum effective aur clear messages deliver kar sakein.
        </p>
      </header>

      
      {/* ========================================================= */}
      {/* 1.1 Meaning and Definition of Communication */}
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
            Meaning and Definition of Communication
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Communication basically ek aisi process hai jismein hum ideas, thoughts, feelings, aur information doosre logo ke saath exchange karte hain.</p>
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-5 mb-6"><div className="flex items-start gap-3"><div className="mt-1"><BookOpen className="w-5 h-5 text-brand-500" /></div><div><h4 className="font-bold text-slate-900 dark:text-white mb-1">Definition</h4><p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Communication is the transfer of information from a sender to a receiver, with the information being understood by the receiver. (Koontz and O'Donnell)</p></div></div></div>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Importance of Communication</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Smooth functioning of organization:</strong> Bina clear communication ke koi bhi company ya team efficiently kaam nahi kar sakti.</li>
<li><strong>Decision making:</strong> Sahi aur timely information decisions lene mein help karti hai.</li>
<li><strong>Building Relationships:</strong> Acha communication trust aur understanding build karta hai.</li>
</ul>
      </section>

      {/* ========================================================= */}
      {/* 1.2 The Communication Process */}
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
            The Communication Process
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Communication ek continuous, two-way cycle hai. Is process ke main elements ye hain:</p>
        <ol className="list-decimal list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Sender:</strong> Jo message bhejna chahta hai.</li>
<li><strong>Encoding:</strong> Idea ko words ya symbols mein convert karna.</li>
<li><strong>Message:</strong> Actual idea ya information.</li>
<li><strong>Medium/Channel:</strong> Jis raste ya tool (email, phone, letter) se message bheja jaata hai.</li>
<li><strong>Receiver:</strong> Jiske liye message bheja gaya hai.</li>
<li><strong>Decoding:</strong> Receiver ka message ko samajhna.</li>
<li><strong>Feedback:</strong> Receiver ka response sender ko wapas milna, jo cycle complete karta hai.</li>
</ol>
        <div className="bg-amber-50 dark:bg-amber-500/10 border-l-4 border-amber-500 p-4 mb-6"><div className="flex items-start gap-3"><AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 mt-0.5 shrink-0" /><div className="text-amber-800 dark:text-amber-200 text-sm sm:text-base">Feedback is the most important part of the communication process because it confirms whether the message was understood correctly or not.</div></div></div>
      </section>

      {/* ========================================================= */}
      {/* 1.3 Types of Communication */}
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
            Types of Communication
          </h2>
        </div>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Formal vs Informal Communication</span></h3>
        <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700"><thead><tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700"><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Feature</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Formal Communication</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Informal Communication</th></tr></thead><tbody><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Meaning</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Follows official rules and hierarchy.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Spontaneous, based on personal relations (Grapevine).</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Speed</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Slow, structured, systematic.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Very fast, unstructured.</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Examples</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Memos, official reports, circulars.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Lunch break chats, rumors.</td></tr></tbody></table></div>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Verbal vs Non-Verbal Communication</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Verbal Communication:</strong> Uses words. Includes both Oral (spoken) and Written forms.</li>
<li><strong>Non-Verbal Communication:</strong> Does not use words. Includes body language (kinesics), gestures, facial expressions, eye contact, and tone of voice (paralanguage).</li>
</ul>
      </section>

      {/* ========================================================= */}
      {/* 1.4 7 C's of Effective Communication */}
      {/* ========================================================= */}
      <section id="sec-1-4" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.4
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            7 C's of Effective Communication
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Apne message ko effective banane ke liye 7 C's ka dhyan rakhna zaroori hai:</p>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Clear:</strong> Message asaan aur sidha hona chahiye.</li>
<li><strong>Concise:</strong> Kam shabdo mein zyada baat kehna.</li>
<li><strong>Concrete:</strong> Specific facts aur figures use karna.</li>
<li><strong>Correct:</strong> Grammar aur facts sahi hone chahiye.</li>
<li><strong>Consideration:</strong> Receiver ka point of view (You-attitude) samajhna.</li>
<li><strong>Complete:</strong> Poori jankari dena.</li>
<li><strong>Courteous:</strong> Respectful aur polite rehna.</li>
</ul>
      </section>

      {/* ========================================================= */}
      {/* 1.5 Barriers to Communication and Tools */}
      {/* ========================================================= */}
      <section id="sec-1-5" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.5
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Barriers to Communication and Tools
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Barriers wo rukawatein hain jo message ko receiver tak pohochne ya samajhne mein problem create karti hain.</p>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Types of Barriers</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Physical/Environmental:</strong> Noise, poor lighting, distance.</li>
<li><strong>Semantic/Language:</strong> Tough vocabulary, technical jargon, different languages.</li>
<li><strong>Psychological:</strong> Stress, anger, lack of attention.</li>
<li><strong>Organizational:</strong> Strict rules, complicated hierarchy.</li>
</ul>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Ways to Overcome Barriers</span></h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Simple language use karna, active listening practice karna, aur constructive feedback dena barriers ko kam karta hai.</p>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Tools and Devices of Communication</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li><strong>Telephones & Smartphones:</strong> Instant voice and text communication.</li>
<li><strong>Email:</strong> Formal, documented, and quick written communication.</li>
<li><strong>Video Conferencing (Zoom, Teams):</strong> Virtual face-to-face meetings.</li>
</ul>
      </section>
    </article>
  );
};
export default CsUnit1Content;
