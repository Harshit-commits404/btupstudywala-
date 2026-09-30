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

export const CsUnit5Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 05</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Communication Skills in English (Semester 1)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Professional Writing
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">CV & Cover Letter</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Agenda & Minutes</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Notices, Memos & Circulars</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Letters & Reports</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Email Drafting</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Workplace communication heavily relies on written documents. This unit covers standard structures for CVs, Letters, Agenda, Minutes, Notices, Memos, Circulars, Reports, and Emails.
        </p>
      </header>

      
      {/* ========================================================= */}
      {/* 5.1 CV / Resume and Covering Letter */}
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
            CV / Resume and Covering Letter
          </h2>
        </div>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>CV vs Resume</span></h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">A <strong>Resume</strong> is a short, concise document (1-2 pages) summarizing skills and experience tailored for a specific job. A <strong>CV (Curriculum Vitae)</strong> is a detailed document covering one's entire academic and professional history.</p>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Structure of a Resume</span></h3>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li>Contact Information</li>
<li>Objective / Summary</li>
<li>Education Qualifications</li>
<li>Technical / Soft Skills</li>
<li>Projects / Work Experience</li>
</ul>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Covering Letter</span></h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">A formal letter attached to a resume. It highlights why you are a good fit for the job.</p>
        <div className="bg-slate-800 text-slate-200 p-4 rounded-lg font-mono text-sm mb-6 overflow-x-auto"><pre>To,
The HR Manager,
Tech Solutions Ltd.

Subject: Application for Junior Engineer

Dear Sir/Madam,
With reference to your advertisement, I wish to apply for the position...</pre></div>
      </section>

      {/* ========================================================= */}
      {/* 5.2 Agenda and Minutes */}
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
            Agenda and Minutes
          </h2>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-5 mb-6"><div className="flex items-start gap-3"><div className="mt-1"><BookOpen className="w-5 h-5 text-brand-500" /></div><div><h4 className="font-bold text-slate-900 dark:text-white mb-1">Agenda</h4><p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">A list of topics to be discussed in a meeting. It is sent BEFORE the meeting so attendees can prepare.</p></div></div></div>
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-5 mb-6"><div className="flex items-start gap-3"><div className="mt-1"><BookOpen className="w-5 h-5 text-brand-500" /></div><div><h4 className="font-bold text-slate-900 dark:text-white mb-1">Minutes of Meeting (MoM)</h4><p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">The official written record of what was discussed, decided, and assigned during a meeting. It is prepared AFTER the meeting.</p></div></div></div>
      </section>

      {/* ========================================================= */}
      {/* 5.3 Notices, Memos, and Circulars */}
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
            Notices, Memos, and Circulars
          </h2>
        </div>
        <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700"><thead><tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700"><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Document</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Purpose</th><th className="p-3 text-left font-semibold text-slate-900 dark:text-white">Audience</th></tr></thead><tbody><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Notice</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Formal announcement of an event or rule.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">General Public or all students/employees.</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Memo (Memorandum)</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Quick, internal communication (e.g. policy change). No formal salutation needed.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Internal Staff.</td></tr><tr className="border-t border-slate-200 dark:border-slate-700/50"><td className="p-3 text-sm text-slate-700 dark:text-slate-300"><strong>Circular</strong></td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">A printed letter distributed to a large number of people.</td><td className="p-3 text-sm text-slate-700 dark:text-slate-300">Multiple branches or departments.</td></tr></tbody></table></div>
      </section>

      {/* ========================================================= */}
      {/* 5.4 Official Letters and Reports */}
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
            Official Letters and Reports
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Official letters are used for external communication (complaints, inquiries, orders).</p>
        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
<li>Sender's Address & Date</li>
<li>Receiver's Address</li>
<li>Subject Line</li>
<li>Salutation (Dear Sir/Madam)</li>
<li>Body</li>
<li>Sign-off (Yours faithfully)</li>
</ul>
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" /><span>Report Writing</span></h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">A report is a formal document analyzing an issue, project, or event, usually backed by facts and data, ending with recommendations. E.g., A report on a technical failure in the lab.</p>
      </section>

      {/* ========================================================= */}
      {/* 5.5 Email Drafting */}
      {/* ========================================================= */}
      <section id="sec-5-5" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.5
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Email Drafting
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">Emails are the standard form of digital business communication. They must be professional, clear, and concise.</p>
        <div className="bg-slate-800 text-slate-200 p-4 rounded-lg font-mono text-sm mb-6 overflow-x-auto"><pre>To: manager@company.com
Subject: Request for Leave - Medical Appointment

Dear Mr. Sharma,

I am writing to request a one-day leave on 25th October to attend a medical appointment. I have handed over my tasks to Amit.

Thank you for understanding.

Best regards,
Rohit Kumar</pre></div>
      </section>
    </article>
  );
};
export default CsUnit5Content;
