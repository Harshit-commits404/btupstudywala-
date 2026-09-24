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
  GitBranch,
  Split,
  Table,
  Check,
  X,
  Layers,
} from 'lucide-react';

export const DbmsUnit4Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* ========================================================= */}
      {/* CHAPTER TITLEPLATE / HERO HEADER */}
      {/* ========================================================= */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 04</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Database Management System (DBMS)
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Syllabus: 10 Periods</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 font-medium border border-amber-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Weightage: 12–15 Marks</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Relational Database Design & Normalization
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (कार्यात्मक निर्भरता एवं सामान्यीकरण: 1NF से 5NF तक)
          </p>
        </div>

        {/* Syllabus Topics Chip Bar */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Functional Dependencies (FD)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Normalization & Database Anomalies</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">1NF (Atomicity)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">2NF (Partial Dependency)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">3NF (Transitive Dependency)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">BCNF (Boyce-Codd Normal Form)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Multivalued Dependencies & 4NF</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Fifth Normal Form (5NF / PJNF)</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          BTEUP Board exams mein Normalization sabse zyada marks carry karne wala chapter hai. Agar database ko bina soche-samjhe design kiya jaye, to usme data duplication, insertion anomalies, deletion anomalies aur update anomalies paida ho jaati hain. Is unit mein hum Functional Dependencies, Anomalies aur har ek Normal Form (1NF se lekar 5NF tak) ko step-by-step worked tables ke saath Hinglish mein deeply samjhenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 4.1 FUNCTIONAL DEPENDENCIES */}
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
            Functional Dependencies (FD)
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (कार्यात्मक निर्भरता: अवधारणा एवं आर्मस्ट्रांग के नियम)
          </div>
        </div>

        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Definition • Functional Dependency (FD)</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "In a relation R, an attribute Y is functionally dependent on attribute X (written as X → Y) if and only if each value of X uniquely determines exactly one value of Y."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> <code>X → Y</code> ka matlab hai agar humein X ki value pata ho, to hum Y ki value bina kisi shak ke nikaal sakte hain. Yahan X ko <strong>Determinant</strong> aur Y ko <strong>Dependent</strong> kehte hain.
            </span>
          </div>
        </div>

        {/* DEDICATED FD FORMULA BLOCK */}
        <div className="study-formula-block">
          <div className="text-[11px] font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold mb-1">
            Functional Dependency Condition
          </div>
          <div className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-white tracking-wider my-2">
            If t1[X] = t2[X], then t1[Y] must equal t2[Y]
          </div>
          <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-1">
            Example: Roll_No → Student_Name (Same roll number cannot have two different names)
          </div>
        </div>

        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          Types of Functional Dependencies:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 text-sm">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1">1. Trivial FD</strong>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              Agar right side attribute left side ka hi subset ho (<code>Y ⊆ X</code>), jaise <code>&#123;Roll_No, Name&#125; → Roll_No</code>. Yeh hamesha true hoti hai.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1">2. Non-Trivial FD</strong>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              Agar right side attribute left side ka subset na ho (<code>Y ⊄ X</code>), jaise <code>Roll_No → Name</code>. Agar <code>X ∩ Y = ∅</code> ho, to use Completely Non-trivial kehte hain.
            </p>
          </div>
        </div>

        {/* Armstrong's Axioms */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          Armstrong's Axioms (Inference Rules for FDs):
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-3">
          1974 mein William W. Armstrong ne FDs se nayi dependencies derive karne ke liye 3 fundamental axioms diye:
        </p>
        <div className="space-y-2.5 font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 my-4 pl-3 border-l-2 border-brand-500">
          <div>• <strong>Reflexivity Rule:</strong> If Y ⊆ X, then X → Y</div>
          <div>• <strong>Augmentation Rule:</strong> If X → Y, then XZ → YZ (adding attribute Z to both sides)</div>
          <div>• <strong>Transitivity Rule:</strong> If X → Y and Y → Z, then X → Z</div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4.2 NORMALIZATION & DATABASE ANOMALIES */}
      {/* ========================================================= */}
      <section id="sec-4-2" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Normalization for Relational Databases & Anomalies
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (सामान्यीकरण की आवश्यकता एवं डेटाबेस विसंगतियां)
          </div>
        </div>

        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Definition • Normalization</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "Normalization is a systematic step-by-step process of organizing data in a database to eliminate data redundancy and prevent undesirable anomalies (Insertion, Deletion, and Update)."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Ek badi, unorganized table ko choti, logically structured tables mein bina kisi data loss ke todna (decompose karna) Normalization kehlata hai.
            </span>
          </div>
        </div>

        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          The Three Dangerous Database Anomalies:
        </h3>

        {/* Bad Unnormalized Table Example */}
        <div className="my-6">
          <div className="text-[11px] font-mono text-rose-500 uppercase tracking-wider mb-1.5">
            Bad Table Example: EMPLOYEE_DEPARTMENT (Unnormalized Table with Anomalies)
          </div>
          <div className="overflow-x-auto border border-rose-500/30 rounded-lg shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[500px]">
              <thead>
                <tr className="bg-rose-500/10 border-b border-rose-500/20 text-slate-900 dark:text-white font-mono">
                  <th className="py-2.5 px-3">Emp_Id</th>
                  <th className="py-2.5 px-3">Emp_Name</th>
                  <th className="py-2.5 px-3">Dept_Id</th>
                  <th className="py-2.5 px-3">Dept_Name</th>
                  <th className="py-2.5 px-3">Dept_Head</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-500/15 font-mono text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="py-2 px-3 font-bold">E101</td>
                  <td className="py-2 px-3">Vikas</td>
                  <td className="py-2 px-3">D01</td>
                  <td className="py-2 px-3">CSE</td>
                  <td className="py-2 px-3">Dr. Sharma</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold">E102</td>
                  <td className="py-2 px-3">Pooja</td>
                  <td className="py-2 px-3">D01</td>
                  <td className="py-2 px-3">CSE</td>
                  <td className="py-2 px-3">Dr. Sharma</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold">E103</td>
                  <td className="py-2 px-3">Arun</td>
                  <td className="py-2 px-3">D02</td>
                  <td className="py-2 px-3">Civil</td>
                  <td className="py-2 px-3">Dr. Verma</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4 my-6 text-sm">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-rose-600 dark:text-rose-400 block mb-1">1. Insertion Anomaly (सम्मिलन विसंगति)</strong>
            <p className="text-slate-600 dark:text-slate-300">
              Agar college mein ek naya department <em>"Mechanical (D03)"</em> open hua jisme abhi koi employee hire nahi hua hai, to hum use table mein insert nahi kar sakte kyunki <code>Emp_Id</code> primary key hai aur wo NULL nahi ho sakti!
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-rose-600 dark:text-rose-400 block mb-1">2. Deletion Anomaly (विलोपन विसंगति)</strong>
            <p className="text-slate-600 dark:text-slate-300">
              Civil department (D02) mein sirf ek hi employee <em>Arun</em> hai. Agar Arun job chhod deta hai aur hum uski row delete karte hain, to Civil department aur uske head Dr. Verma ki puri information bhi hamesha ke liye delete ho jayegi!
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-rose-600 dark:text-rose-400 block mb-1">3. Updation Anomaly (अद्यतन विसंगति)</strong>
            <p className="text-slate-600 dark:text-slate-300">
              CSE department ke head Dr. Sharma badal gaye. CSE mein 50 employees hain. Humein 50 alag-alag rows mein update karna padega. Agar galti se 49 rows update hui aur ek choot gayi, to data inconsistent ho jayega!
            </p>
          </div>
        </div>

        {/* Normalization Hierarchy Flow */}
        <div className="my-6 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 text-center font-mono text-xs">
          <div className="text-brand-600 dark:text-brand-400 font-bold mb-3 uppercase tracking-wider">
            Educational Diagram 4.1 • Normalization Progression Pipeline
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="p-2 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">UNF</span>
            <span>→</span>
            <span className="p-2 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">1NF (Atomicity)</span>
            <span>→</span>
            <span className="p-2 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">2NF (No Partial FD)</span>
            <span>→</span>
            <span className="p-2 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">3NF (No Transitive FD)</span>
            <span>→</span>
            <span className="p-2 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold border border-purple-500/20">BCNF</span>
            <span>→</span>
            <span className="p-2 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">4NF</span>
            <span>→</span>
            <span className="p-2 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">5NF</span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4.3 1NF */}
      {/* ========================================================= */}
      <section id="sec-4-3" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            First Normal Form (1NF)
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (प्रथम सामान्य रूप: परमाणविक मान एवं दोहराव रहित समूह)
          </div>
        </div>

        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Rule • First Normal Form (1NF)</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A relation is in 1NF if and only if all attribute values are atomic (indivisible) and there are no repeating groups or multivalued attributes."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Har cell mein sirf <strong>single value</strong> honi chahiye (jaise comma laga kar do phone number ya subjects ek saath nahi likhe ja sakte).
            </span>
          </div>
        </div>

        {/* 1NF Worked Step-by-Step Transformation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-xs sm:text-sm font-mono">
          <div>
            <div className="text-rose-500 font-bold mb-1 flex items-center gap-1">
              <X className="w-3.5 h-3.5" />
              <span>Not in 1NF (Multi-valued Subject cell)</span>
            </div>
            <div className="overflow-x-auto border border-rose-500/30 rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead className="bg-rose-500/10 border-b border-rose-500/20">
                  <tr><th className="p-2">Roll</th><th className="p-2">Name</th><th className="p-2 text-rose-500">Subjects</th></tr>
                </thead>
                <tbody className="divide-y divide-rose-500/10">
                  <tr><td className="p-2">101</td><td className="p-2">Aman</td><td className="p-2 text-rose-500">DBMS, OS</td></tr>
                  <tr><td className="p-2">102</td><td className="p-2">Riya</td><td className="p-2 text-rose-500">CN</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div className="text-emerald-500 font-bold mb-1 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>Converted to 1NF (Atomic Values)</span>
            </div>
            <div className="overflow-x-auto border border-emerald-500/30 rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead className="bg-emerald-500/10 border-b border-emerald-500/20">
                  <tr><th className="p-2">Roll</th><th className="p-2">Name</th><th className="p-2 text-emerald-500">Subject</th></tr>
                </thead>
                <tbody className="divide-y divide-emerald-500/10">
                  <tr><td className="p-2 font-bold">101</td><td className="p-2">Aman</td><td className="p-2 text-emerald-600 dark:text-emerald-400 font-semibold">DBMS</td></tr>
                  <tr><td className="p-2 font-bold">101</td><td className="p-2">Aman</td><td className="p-2 text-emerald-600 dark:text-emerald-400 font-semibold">OS</td></tr>
                  <tr><td className="p-2 font-bold">102</td><td className="p-2">Riya</td><td className="p-2 text-emerald-600 dark:text-emerald-400 font-semibold">CN</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4.4 2NF */}
      {/* ========================================================= */}
      <section id="sec-4-4" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.4
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Second Normal Form (2NF) & Partial Dependency
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (द्वितीय सामान्य रूप: आंशिक निर्भरता का उन्मूलन)
          </div>
        </div>

        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Rule • Second Normal Form (2NF)</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A relation is in 2NF if and only if it is in 1NF and NO non-prime attribute is partially dependent on any candidate key (i.e. every non-prime attribute is fully functionally dependent on the primary key)."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Agar table ka Primary Key composite (2 ya zyada columns se bana) hai, to koi bhi ordinary column primary key ke aadhe-adhure hisse par depend nahi karna chahiye; use poore Primary Key par depend karna chahiye!
            </span>
          </div>
        </div>

        {/* 2NF Worked Transformation Example */}
        <div className="my-6 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 space-y-4">
          <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            Worked Step-by-Step 2NF Decomposition:
          </span>
          <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
            <div>Table: <code>STUDENT_PROJECT (<u>Roll_No</u>, <u>Project_Id</u>, Student_Name, Project_Name, Submission_Date)</code></div>
            <div>Primary Key: <code>&#123;Roll_No, Project_Id&#125;</code> (Composite Key)</div>
            <div className="text-rose-500 font-mono">
              • Partial FD 1: Roll_No → Student_Name (Sirf Roll_No par depend karta hai, Project_Id par nahi!)<br />
              • Partial FD 2: Project_Id → Project_Name (Sirf Project_Id par depend karta hai!)
            </div>
            <div className="pt-2 font-bold text-slate-900 dark:text-white">
              Decomposition into Three 2NF Tables:
            </div>
            <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 space-y-1 pl-3 border-l-2 border-emerald-500">
              <div>1. STUDENT (<u>Roll_No</u>, Student_Name)  [2NF Valid]</div>
              <div>2. PROJECT (<u>Project_Id</u>, Project_Name)  [2NF Valid]</div>
              <div>3. PROJECT_SUBMISSION (<u>Roll_No</u>, <u>Project_Id</u>, Submission_Date)  [2NF Valid]</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4.5 3NF */}
      {/* ========================================================= */}
      <section id="sec-4-5" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.5
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Third Normal Form (3NF) & Transitive Dependency
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (तृतीय सामान्य रूप: संक्रामक निर्भरता का उन्मूलन)
          </div>
        </div>

        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Rule • Third Normal Form (3NF)</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A relation is in 3NF if it is in 2NF and NO non-prime attribute is transitively dependent on the primary key. Formally, for every non-trivial functional dependency X → A, either X is a Super Key OR A is a Prime Attribute."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Non-prime attribute kisi doosre non-prime attribute par depend nahi hona chahiye (jaise: Roll_No → City, aur City → ZipCode, to Roll_No → ZipCode ek Transitive Dependency hai).
            </span>
          </div>
        </div>

        {/* 3NF Worked Transformation Example */}
        <div className="my-6 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 space-y-4">
          <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            Worked Step-by-Step 3NF Decomposition:
          </span>
          <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
            <div>Table: <code>STUDENT_CITY (<u>Roll_No</u>, Name, City, State, Pin_Code)</code></div>
            <div className="text-rose-500 font-mono">
              • Roll_No → Pin_Code (Primary Key determines Pin_Code)<br />
              • Pin_Code → City, State (Non-prime attribute determines another non-prime attribute! Transitive!)
            </div>
            <div className="pt-2 font-bold text-slate-900 dark:text-white">
              Decomposition into Two 3NF Tables:
            </div>
            <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 space-y-1 pl-3 border-l-2 border-emerald-500">
              <div>1. STUDENT (<u>Roll_No</u>, Name, <u>Pin_Code [FK]</u>)</div>
              <div>2. LOCATION_LOOKUP (<u>Pin_Code</u>, City, State)</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4.6 BCNF */}
      {/* ========================================================= */}
      <section id="sec-4-6" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.6
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Boyce-Codd Normal Form (BCNF / 3.5NF)
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (बॉयस-कॉड सामान्य रूप: 3NF का सख्त संस्करण)
          </div>
        </div>

        <div className="my-6 pl-4 border-l-[3.5px] border-purple-500 bg-purple-50/40 dark:bg-purple-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Rule • Boyce-Codd Normal Form (BCNF)</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A relation R is in BCNF if and only if for every non-trivial functional dependency X → Y, X is a SUPER KEY of R."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">3NF vs BCNF Difference:</strong> 3NF mein chhoot thi ki agar right-side attribute Prime Attribute ho to left side bina Super Key hue bhi chal jati thi. BCNF mein yeh chhoot khatam kar di gayi: left side (X) ka <strong>Super Key hona anivarya (mandatory)</strong> hai!
            </span>
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
          Isliye: <em>Every relation in BCNF is always in 3NF, but every relation in 3NF is NOT necessarily in BCNF.</em>
        </p>
      </section>

      {/* ========================================================= */}
      {/* 4.7 MULTIVALUED DEPENDENCIES & 4NF */}
      {/* ========================================================= */}
      <section id="sec-4-7" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.7
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Multivalued Dependencies & Fourth Normal Form (4NF)
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (बहु-मान निर्भरता एवं चतुर्थ सामान्य रूप)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Jab ek table mein do independent multivalued attributes ek hi primary key par depend karte hain, to <strong>Multivalued Dependency (MVD, X ↠ Y)</strong> paida hoti hai:
        </p>

        <div className="my-6 pl-4 border-l-[3.5px] border-emerald-500 bg-emerald-50/40 dark:bg-emerald-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Rule • Fourth Normal Form (4NF)</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A relation is in 4NF if and only if it is in BCNF and contains NO non-trivial multivalued dependencies."
          </blockquote>
        </div>

        <div className="my-6 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-xs sm:text-sm">
          <strong className="text-brand-600 dark:text-brand-400 block mb-1">Classic 4NF Example:</strong>
          <p className="text-slate-600 dark:text-slate-300 mb-2">
            Table: <code>TEACHER_COURSE_HOBBY (Teacher, Course, Hobby)</code>.<br />
            Ek teacher kai courses padha sakta hai aur uske kai hobbies ho sakte hain. Course aur Hobby ka aapas mein koi rishta nahi hai, par table mein unke cross combinations store karne padte hain (duplication).
          </p>
          <div className="font-mono text-emerald-600 dark:text-emerald-400 pl-3 border-l-2 border-emerald-500 space-y-1">
            <div>Decomposition into two 4NF tables:</div>
            <div>1. TEACHER_COURSE (<u>Teacher</u>, <u>Course</u>)</div>
            <div>2. TEACHER_HOBBY (<u>Teacher</u>, <u>Hobby</u>)</div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4.8 5NF */}
      {/* ========================================================= */}
      <section id="sec-4-8" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 4.8
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Fifth Normal Form (5NF / Project-Join Normal Form PJNF)
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (पंचम सामान्य रूप: जॉइन निर्भरता एवं दोषरहित अपघटन)
          </div>
        </div>

        <div className="my-6 pl-4 border-l-[3.5px] border-emerald-500 bg-emerald-50/40 dark:bg-emerald-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Rule • Fifth Normal Form (5NF / PJNF)</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A relation is in 5NF (also called Project-Join Normal Form) if and only if it is in 4NF and cannot be losslessly decomposed into any smaller tables without join dependency."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Jab 3 ya zyada entities ke beech cyclic relationship hota hai jise 2 tables mein nahi toda ja sakta (sirf 3 tables mein toda ja sakta hai lossless join ke liye), wahan 5NF lagu hota hai.
            </span>
          </div>
        </div>

        {/* Master Comparison Table for Normal Forms */}
        <div className="my-6">
          <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>Table 4.1 • Master Normalization Summary Table</span>
            <span className="text-[10px] md:hidden">↔ Swipe horizontally</span>
          </div>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs">
            <table className="w-full text-left border-collapse text-sm min-w-[600px]">
              <thead>
                <tr className="bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold">
                  <th className="py-2.5 px-4">Normal Form</th>
                  <th className="py-2.5 px-4">Condition to Satisfy</th>
                  <th className="py-2.5 px-4 text-rose-600 dark:text-rose-400">Problem Eliminated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-bold text-brand-600 dark:text-brand-400">1NF</td>
                  <td className="py-2 px-4">Atomic attribute values, no repeating groups</td>
                  <td className="py-2 px-4">Multivalued attributes, non-atomic data</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-bold text-brand-600 dark:text-brand-400">2NF</td>
                  <td className="py-2 px-4">1NF + No Partial Functional Dependency</td>
                  <td className="py-2 px-4">Partial key dependencies</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-bold text-brand-600 dark:text-brand-400">3NF</td>
                  <td className="py-2 px-4">2NF + No Transitive Functional Dependency</td>
                  <td className="py-2 px-4">Transitive dependencies (Non-key → Non-key)</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-bold text-purple-600 dark:text-purple-400">BCNF</td>
                  <td className="py-2 px-4">In every FD X → Y, X must be a Super Key</td>
                  <td className="py-2 px-4">Remaining functional dependency anomalies</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-bold text-emerald-600 dark:text-emerald-400">4NF</td>
                  <td className="py-2 px-4">BCNF + No non-trivial Multivalued Dependencies</td>
                  <td className="py-2 px-4">Multivalued redundancy (MVD)</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-bold text-emerald-600 dark:text-emerald-400">5NF</td>
                  <td className="py-2 px-4">4NF + No Join Dependencies (Lossless Join)</td>
                  <td className="py-2 px-4">Join dependency redundancy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* EXAM FOCUS */}
      {/* ========================================================= */}
      <section id="exam-focus" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              BOARD EXAM PREPARATION
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Exam Focus: Important Definitions & Questions
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (BTEUP बोर्ड परीक्षा के लिए अति महत्वपूर्ण प्रश्न)
          </div>
        </div>

        <div className="space-y-6">
          {/* 1 Mark Questions */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                1 MARK QUESTIONS
              </span>
              <span className="text-xs text-slate-400 font-mono">Very Short Answers</span>
            </div>
            <ol className="list-decimal list-outside pl-5 space-y-3 text-sm text-slate-800 dark:text-slate-200">
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">What is Partial Dependency?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5 font-bold">Ans: When a non-prime attribute depends on a part of a composite primary key.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Which normal form eliminates Transitive Dependency?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5 font-bold">Ans: Third Normal Form (3NF).</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">What is the condition for a relation to be in BCNF?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5">Ans: For every non-trivial functional dependency X → Y, X must be a Super Key.</p>
              </li>
            </ol>
          </div>

          {/* 2-3 Mark Questions */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                2–3 MARKS QUESTIONS
              </span>
              <span className="text-xs text-slate-400 font-mono">Short Answers</span>
            </div>
            <ol className="list-decimal list-outside pl-5 space-y-4 text-sm text-slate-800 dark:text-slate-200">
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Differentiate between 3NF and BCNF.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: In 3NF, for X → A, either X is a super key or A is a prime attribute. In BCNF, X must strictly be a super key (no prime attribute exception allowed).</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Explain Insertion, Deletion, and Update Anomalies in short.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Insertion anomaly prevents adding valid data without unrelated attributes. Deletion anomaly unintentionally destroys related data. Update anomaly causes data inconsistency when updating duplicated data across multiple rows.</p>
              </li>
            </ol>
          </div>

          {/* 5 Mark Questions */}
          <div className="p-5 rounded-xl border border-brand-500/20 bg-brand-500/[0.02] dark:bg-brand-500/[0.04]">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-brand-500/20">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20">
                5 MARKS QUESTIONS
              </span>
              <span className="text-xs text-slate-400 font-mono">Long Explanations & Step-by-Step Numericals</span>
            </div>
            <ol className="list-decimal list-outside pl-5 space-y-4 text-sm text-slate-800 dark:text-slate-200">
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Explain 1NF, 2NF, and 3NF with suitable table examples and step-by-step transformation.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Start with unnormalized table containing multivalued attributes. Convert to 1NF by creating atomic rows. Identify partial dependency in composite key and decompose into 2NF tables. Identify transitive dependency and decompose into 3NF tables.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">What are Multivalued Dependencies? Explain Fourth Normal Form (4NF) with a suitable example.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Define MVD (X ↠ Y). Explain the teacher-course-hobby example where two independent 1:N attributes generate redundant Cartesian combinations. Show decomposition into two separate 4NF tables.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* QUICK REVISION */}
      {/* ========================================================= */}
      <section id="quick-revision" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              LAST MINUTE REVISION
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-emerald-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Last Minute Quick Revision Summary
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (परीक्षा से पहले 5 मिनट का त्वरित दोहराव)
          </div>
        </div>

        <div className="space-y-6 pt-1">
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-3 pb-1 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Core Takeaways & Rules</span>
            </h4>
            <ul className="list-disc list-outside pl-5 space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-300">
              <li><strong>Normalization:</strong> Eliminates redundancy and insertion/deletion/update anomalies.</li>
              <li><strong>1NF:</strong> All values atomic; no repeating groups.</li>
              <li><strong>2NF:</strong> 1NF + No Partial Dependency.</li>
              <li><strong>3NF:</strong> 2NF + No Transitive Dependency.</li>
              <li><strong>BCNF:</strong> For every X → Y, X must strictly be a Super Key.</li>
              <li><strong>4NF:</strong> BCNF + No non-trivial Multivalued Dependencies (MVD).</li>
              <li><strong>5NF (PJNF):</strong> Lossless Join Decomposition; no Join Dependency.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
};

export default DbmsUnit4Content;
