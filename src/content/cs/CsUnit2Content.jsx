import React from 'react';
import {
  BookOpen,
  Award,
  CheckCircle2,
  Compass,
  Brain,
  Clock,
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
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Meaning & Concept</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Soft Skills vs Hard Skills</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Core Characteristics</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Emotional Intelligence (EQ)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Time Management Frameworks</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Team Dynamics & Leadership</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Modern engineering industry me recruitment criteria badal chuka hai. Company hiring managers kehte hain ki technical coding ya machine calculation hum training dekar sikha sakte hain, lekin positive attitude, teamwork, patience aur client communication candidate ke andar pehle se hona chahiye. Is unit me hum Soft Skills ke core concepts aur workplace applications ko deeply analyze karenge.
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

        {/* Concept & Definition */}
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          <strong>Soft Skills</strong> ek vyakti ke aise non-technical, behavioral traits, interpersonal habits aur social graces hote hain jo determine karte hain ki woh doosre logon (colleagues, managers, clients, workers) ke sath kitni effectively interact, collaborate aur communicate karta hai.
        </p>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <BookOpen className="w-5 h-5 text-brand-500" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Formal Academic Definition:</h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                "Soft skills are the personal attributes, personality traits, and interpersonal communication capabilities needed for a person's harmonious, productive, and synergistic integration into a professional workplace."
              </p>
            </div>
          </div>
        </div>

        {/* The Employability Gap */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>The Industry Employability Gap: Kyun Reject Hote Hain Diploma Students?</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          NASSCOM aur Confederation of Indian Industry (CII) ki surveys ke anusaar, lagbhag <strong>75% engineering aur diploma graduates</strong> technical subjects me passing marks laane ke bawajood campus placement interviews me reject ho jaate hain. Iska primary kaaran lack of technical degree nahi, balki:
        </p>

        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
          <li>Basic English me apna self-introduction na de pana aur nervousness me eye contact drop karna.</li>
          <li>Group Discussion (GD) me doosron ke points ko aggressively cut karna ya bilkul chup baith jaana.</li>
          <li>Team pressure me frustration dikhana aur constructive criticism ko personally attack samajhna.</li>
          <li>Email etiquette aur professional workplace reporting manners ki awareness na hona.</li>
        </ul>

        {/* Quote Callout */}
        <div className="p-4 rounded-lg bg-brand-500/10 border-l-4 border-brand-500 mb-6">
          <p className="text-sm font-semibold italic text-brand-900 dark:text-brand-300">
            "Your technical knowledge is your ticket to enter the race. Your soft skills determine whether you finish first or get disqualified at the starting line."
          </p>
        </div>
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
            Soft Skills vs Hard Skills: Detailed Comparative Study
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          Engineering students aksar sochte hain ki syllabus ke formulas aur technical labs hi sab kuch hain. Par asal workplace me dono ka balance zaroori hota hai:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              <tr>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Comparison Dimension</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Hard Skills (Technical Competencies)</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Soft Skills (Behavioral & Human Skills)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Core Focus</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Specific machines, software tools, mathematical formulas, and scientific rules.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Human behavior, emotional regulation, teamwork, negotiation, and communication.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">How They are Learned</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Classroom lectures, lab practicals, textbooks, and formal diploma certification.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Daily life social interactions, self-reflection, practice, and corporate culture immersion.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Measurability (Testing)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Directly quantifiable via written semester exam, percentage, test scores, degrees.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Intangible and subjective; judged through behavior, peer reviews, client feedback.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Transferability Across Jobs</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Job-specific (AutoCAD is useless for a medical nurse; soldering iron is useless for bank clerk).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Universally transferable (Active listening is equally vital for software developer and civil engineer).</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Obsolescence (Shelf Life)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Expires fast! Programming frameworks change every 3-5 years; machines get replaced by automation.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Permanent life-long asset! Leadership, honesty, and emotional maturity never get outdated.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Engineering Examples</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Python programming, PLC ladder logic, Transformer winding, surveying, CAD modeling.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Conflict resolution, meeting presentation, client negotiations, empathy, punctuality.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Famous Rule Box */}
        <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 mb-6">
          <h4 className="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>The Hiring Formula:</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>"Hard skills get you the interview; Soft skills get you the job and the promotions."</strong><br />
            Agar do candidates ke paas exactly same 85% marks hain, to HR us candidate ko select karegi jo team me polite hai, actively communicate karta hai, aur crisis situations me calm reh kar problem solve karta hai.
          </p>
        </div>
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
            Core Characteristics of Soft Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 text-brand-600 dark:text-brand-400">1. Universally Transferable</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Yeh kisi ek company, designation ya department tak limited nahi hoti. Agar aap mechanical engineering se software role me switch karte hain, to aapka time management aur team collaboration skill 100% waise hi kaam karega.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 text-brand-600 dark:text-brand-400">2. Intangible & Behavioral</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Inhe pen-paper exam me rate karna mushkil hota hai. Inka pata tab chalta hai jab koi tough client pressure me baat karta hai ya project deadline miss hone par employee kaise react karta hai.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 text-brand-600 dark:text-brand-400">3. Synergistic Multiplier Effect</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Soft skills technical capability ko multiply kar deti hain. Ek genius coder jo kisi team member se baat nahi kar pata uski value kam ho jaati hai, jabki ek average coder jo poori team ko motivate karke guide karta hai woh Tech Lead ban jaata hai.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 text-brand-600 dark:text-brand-400">4. Habit-Driven & Long-Term</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Aap ek raat pehle book padh kar soft skills nahi seekh sakte. Yeh daily practice, patience, self-discipline aur conscious listening se slow development ka result hoti hain.
            </p>
          </div>
        </div>
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
            Key Soft Skills: Frameworks and Real-World Examples
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          Polytechnic students aur fresh diploma engineers ke professional excellence ke liye mukhya soft skills aur unke working principles niche diye gaye hain:
        </p>

        {/* 1. Time Management Frameworks */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>1. Time Management: Eisenhower Matrix & Pomodoro Technique</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Time management ka matlab zyada ghante kaam karna nahi hai, balki tasks ko sahi priority dekar smart execution karna hai:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-xs sm:text-sm text-brand-600 dark:text-brand-400 mb-2 flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>Eisenhower Matrix (Urgent vs Important):</span>
            </h4>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc pl-4">
              <li><strong>Do First (Urgent & Important):</strong> Kal ka semester practical exam, production line breakdown.</li>
              <li><strong>Schedule (Not Urgent but Important):</strong> Long-term career coding practice, fitness, soft skills reading.</li>
              <li><strong>Delegate (Urgent but Not Important):</strong> Routine repetitive administrative tasks.</li>
              <li><strong>Eliminate (Not Urgent & Not Important):</strong> Mindless social media scrolling, binge watching.</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-xs sm:text-sm text-brand-600 dark:text-brand-400 mb-2 flex items-center gap-1.5">
              <Brain className="w-4 h-4" />
              <span>The Pomodoro Technique:</span>
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              Focus aur mental fatigue ko balance karne ka proven scientific tool:
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-4">
              <li>25 minutes uninterrupted high-intensity focused study/work.</li>
              <li>5 minutes complete relaxation break (no screen, water sip).</li>
              <li>Har 4 pomodoros (100 min work) ke baad 20-30 min ka long break.</li>
            </ul>
          </div>
        </div>

        {/* 2. Emotional Intelligence */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>2. Emotional Intelligence (EQ / Emotional Quotient)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Harvard psychologist Daniel Goleman ke anusaar, career success me <strong>80% role Emotional Intelligence (EQ)</strong> ka hota hai aur sirf 20% role IQ ka hota hai. Iske 5 pillars hain:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">Self-Awareness</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">Apne emotions, strengths, weaknesses aur triggers ko pehchanna.</p>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">Self-Regulation</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">Gusse, impulsive decisions aur frustration par control rakhna.</p>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">Motivation</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">Failures aur setbacks ke baad bhi internal drive aur enthusiasm maintain karna.</p>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">Empathy</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">Doosron ke perspective aur feelings ko unke shoes me khade hokar samajhna.</p>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg sm:col-span-2 lg:col-span-2">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">Social Skills & Relationship Management</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">Trust build karna, conflicts ko peacefully resolve karna aur team ko inspire karna.</p>
          </div>
        </div>

        {/* 3. Teamwork & Conflict Resolution */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>3. Teamwork, Conflict Resolution & Leadership</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Jab alag-alag background aur opinions ke log ek project me kaam karte hain, to disagreement aana natural hai. Workplace excellence ka sign hai ki conflict ko personal ladai banane ke bajaye constructive problem solving me badal diya jaaye:
        </p>

        <div className="space-y-3 mb-6">
          <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1 text-emerald-600 dark:text-emerald-400">Collaborative Problem Solving (Win-Win Mindset):</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              "Main jeetunga aur tum haaroge" (Win-Lose) ke bajaye focus common goal par hona chahiye — <em>"Project kaise best delivery hoga aur client requirement kaise satisfy hogi?"</em>
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1 text-blue-600 dark:text-blue-400">Leadership Without Title:</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Leader banne ke liye "Manager" tag ka wait mat karo. Jab project me koi blocker aaye, proactive initiative lena, responsibility accept karna aur juniors ko guide karna real leadership hoti hai.
            </p>
          </div>
        </div>

        {/* Quick Revision Takeaway */}
        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <h4 className="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-500" />
            <span>Unit 2 Quick Revision Takeaway</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            • Soft skills are behavioral, people-centric, non-technical competencies.<br />
            • Hard skills are measurable technical abilities; Soft skills are transferable life-long assets.<br />
            • Time management tools: Eisenhower Matrix (Urgent vs Important) and Pomodoro Technique.<br />
            • Emotional Intelligence (EQ) comprises Self-awareness, Self-regulation, Motivation, Empathy, and Social skills.<br />
            • Employers hire for hard skills, but promote and value candidates for their soft skills.
          </p>
        </div>
      </section>
    </article>
  );
};

export default CsUnit2Content;
