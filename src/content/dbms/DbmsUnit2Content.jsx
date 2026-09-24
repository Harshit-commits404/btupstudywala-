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
  Key,
  Layers,
  GitBranch,
  Network,
  Share2,
  Lock,
} from 'lucide-react';

export const DbmsUnit2Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* ========================================================= */}
      {/* CHAPTER TITLEPLATE / HERO HEADER */}
      {/* ========================================================= */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 02</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Database Management System (DBMS)
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Syllabus: 8 Periods</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 font-medium border border-amber-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Weightage: 10–12 Marks</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Data Model and Keys
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (डेटा मॉडल, कुंजियाँ एवं इकाई संबंध)
          </p>
        </div>

        {/* Syllabus Topics Chip Bar */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Define Data Model</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Network Model</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Hierarchical Model</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">E-R Model & Pros/Cons</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Concept of Keys (Super, Candidate, Primary, Foreign)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Constraints</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Strong & Weak Entity Sets</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Kisi bhi real-world system (jaise University, Bank ya Hospital) ka database design karne se pehle data ke aapas ke sambandho aur rules ko define karna zaroori hota hai. Is unit mein hum Data Models (Hierarchical, Network, E-R Model), unke fayde aur nuksan, database keys (Super, Candidate, Primary, Foreign Key), database constraints aur Strong vs Weak Entity sets ko detail mein Hinglish mein samjhenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 2.1 DEFINE DATA MODEL */}
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
            Define Data Model
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (डेटा मॉडल की परिभाषा एवं महत्व)
          </div>
        </div>

        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Definition • Data Model</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A Data Model is a collection of conceptual tools for describing data, data relationships, data semantics, and consistency constraints of a database."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Data Model ek conceptual framework ya blueprint hota hai jo yeh batata hai ki database mein data kis structure mein store hoga, unke beech kya rishta (relationships) hoga, aur un par kaun se niyam (constraints) lagu honge.
            </span>
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Ek Data Model ke teen mukhya components hote hain:
        </p>
        <ol className="list-decimal list-outside pl-5 space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6">
          <li><strong>Structural Part:</strong> Data ko represent karne ke niyam aur building blocks (Tables, Nodes, Records).</li>
          <li><strong>Manipulative Part:</strong> Data par perform kiye jaane wale operations (Insert, Update, Delete, Query).</li>
          <li><strong>Integrity Rules:</strong> Data ki shuddhata aur accuracy banaye rakhne ke niyam (Constraints).</li>
        </ol>
      </section>

      {/* ========================================================= */}
      {/* 2.2 DATA MODELS */}
      {/* ========================================================= */}
      <section id="sec-2-2" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Data Models: Network, Hierarchical & E-R Model
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (नेटवर्क मॉडल, पदानुक्रमित मॉडल एवं ई-आर मॉडल)
          </div>
        </div>

        {/* 1. Hierarchical Model */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
              MODEL 1
            </span>
            <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100">
              Hierarchical Data Model (पदानुक्रमित मॉडल)
            </h3>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
            Is model ko IBM ne 1968 mein IMS (Information Management System) ke saath develop kiya tha. Isme data ek inverted tree structure (ulthe ped ki tarah) ke roop mein organize hota hai jisme:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-1.5 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6">
            <li>Sabse upar ek <strong>Root Node</strong> hota hai jiska koi parent nahi hota.</li>
            <li>Har child node ka sirf <strong>ek hi parent node</strong> ho sakta hai (1:N relationship).</li>
            <li>Ek parent ke kai children ho sakte hain.</li>
          </ul>

          {/* Educational Tree Diagram */}
          <div className="my-6 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 text-center font-mono text-xs">
            <div className="text-brand-600 dark:text-brand-400 font-bold mb-3 uppercase tracking-wider text-[11px]">
              Diagram 2.1 • Hierarchical Tree Structure (Parent-Child)
            </div>
            <div className="inline-block p-2.5 rounded-lg bg-brand-500/10 text-brand-700 dark:text-brand-300 border border-brand-500/30 font-bold">
              COLLEGE (Root Node)
            </div>
            <div className="text-slate-400 my-1">│ ─── Branches ─── │</div>
            <div className="flex justify-center gap-6 sm:gap-12">
              <div className="space-y-2">
                <div className="p-2 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold">DEPARTMENT</div>
                <div className="text-slate-400 text-[10px]">│</div>
                <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">TEACHER</div>
              </div>
              <div className="space-y-2">
                <div className="p-2 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold">STUDENT</div>
                <div className="text-slate-400 text-[10px]">│</div>
                <div className="p-1.5 rounded bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">COURSE</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Network Model */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20">
              MODEL 2
            </span>
            <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100">
              Network Data Model (नेटवर्क मॉडल)
            </h3>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
            Is model ko CODASYL (Conference on Data Systems Languages) committee ne 1971 mein introduce kiya tha. Yeh Hierarchical model ka generalized version hai.
          </p>
          <ul className="list-disc list-outside pl-5 space-y-1.5 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6">
            <li>Isme data <strong>Graph Structure</strong> ke roop mein store hota hai.</li>
            <li>Yahan ek child node ke <strong>ek se zyada parent nodes</strong> ho sakte hain.</li>
            <li>Yeh <strong>Many-to-Many (M:N) relationships</strong> ko natural roop se support karta hai.</li>
            <li>Isme relationships ko <strong>Sets</strong> (Owner record and Member records) aur physical pointers se link kiya jata hai.</li>
          </ul>

          {/* Educational Network Graph Diagram */}
          <div className="my-6 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 text-center font-mono text-xs">
            <div className="text-purple-600 dark:text-purple-400 font-bold mb-3 uppercase tracking-wider text-[11px]">
              Diagram 2.2 • Network Graph Model (Multiple Parents Allowed)
            </div>
            <div className="flex justify-center gap-8 mb-2">
              <div className="p-2 rounded bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 font-bold">
                STORE A (Owner 1)
              </div>
              <div className="p-2 rounded bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 font-bold">
                STORE B (Owner 2)
              </div>
            </div>
            <div className="text-slate-400 text-[11px] my-1">
              ↘ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↙
            </div>
            <div className="inline-block p-2.5 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-bold">
              PRODUCT X (Child node having 2 parents)
            </div>
          </div>
        </div>

        {/* 3. Entity-Relationship (E-R) Model */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
              MODEL 3 ★
            </span>
            <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100">
              Entity-Relationship (E-R) Model (ई-आर मॉडल)
            </h3>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
            E-R Model ko <strong>Peter Chen</strong> ne 1976 mein propose kiya tha. Yeh ek High-Level Conceptual Data Model hai jise diagrammatic form (ER Diagram) mein represent kiya jata hai.
          </p>

          <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">Core ER Building Blocks:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
              <span className="font-bold text-brand-600 dark:text-brand-400 block mb-1">1. Entity (इकाई)</span>
              <p className="text-slate-600 dark:text-slate-300 text-xs">Real-world object jiska independent existence ho (jaise: Student, Teacher, Car).</p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
              <span className="font-bold text-brand-600 dark:text-brand-400 block mb-1">2. Attribute (गुण)</span>
              <p className="text-slate-600 dark:text-slate-300 text-xs">Entity ki characteristics ya properties (jaise: Student ka RollNo, Name, Age).</p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
              <span className="font-bold text-brand-600 dark:text-brand-400 block mb-1">3. Relationship (संबंध)</span>
              <p className="text-slate-600 dark:text-slate-300 text-xs">Do ya do se zyada entities ke beech logical association (jaise: Student <em>ENROLLS IN</em> Course).</p>
            </div>
          </div>

          {/* ER Diagram Standard Symbols Reference Table */}
          <div className="my-6">
            <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Table 2.1 • Standard ER Diagram Notation Symbols</span>
              <span className="text-[10px] md:hidden">↔ Swipe horizontally</span>
            </div>
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs">
              <table className="w-full text-left border-collapse text-sm min-w-[500px]">
                <thead>
                  <tr className="bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold">
                    <th className="py-2.5 px-4">Geometric Symbol</th>
                    <th className="py-2.5 px-4">Represents</th>
                    <th className="py-2.5 px-4">Description / Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70 text-slate-700 dark:text-slate-300 font-mono text-xs">
                  <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                    <td className="py-2 px-4 font-bold text-brand-600 dark:text-brand-400">Rectangle [ ▭ ]</td>
                    <td className="py-2 px-4 font-sans font-medium">Strong Entity Set</td>
                    <td className="py-2 px-4 font-sans">e.g. STUDENT, EMPLOYEE</td>
                  </tr>
                  <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                    <td className="py-2 px-4 font-bold text-brand-600 dark:text-brand-400">Double Rectangle [ ⧉ ]</td>
                    <td className="py-2 px-4 font-sans font-medium">Weak Entity Set</td>
                    <td className="py-2 px-4 font-sans">e.g. DEPENDENT, LOAN_INSTALLMENT</td>
                  </tr>
                  <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                    <td className="py-2 px-4 font-bold text-brand-600 dark:text-brand-400">Diamond [ ◇ ]</td>
                    <td className="py-2 px-4 font-sans font-medium">Relationship Set</td>
                    <td className="py-2 px-4 font-sans">e.g. ENROLLS, WORKS_IN</td>
                  </tr>
                  <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                    <td className="py-2 px-4 font-bold text-brand-600 dark:text-brand-400">Double Diamond [ ◈ ]</td>
                    <td className="py-2 px-4 font-sans font-medium">Identifying Relationship</td>
                    <td className="py-2 px-4 font-sans">Links weak entity with strong owner entity</td>
                  </tr>
                  <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                    <td className="py-2 px-4 font-bold text-brand-600 dark:text-brand-400">Ellipse [ ⬭ ]</td>
                    <td className="py-2 px-4 font-sans font-medium">Attribute</td>
                    <td className="py-2 px-4 font-sans">e.g. Name, Salary</td>
                  </tr>
                  <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                    <td className="py-2 px-4 font-bold text-brand-600 dark:text-brand-400">Underlined Text in Ellipse</td>
                    <td className="py-2 px-4 font-sans font-medium">Key Attribute (Primary Key)</td>
                    <td className="py-2 px-4 font-sans">e.g. <u>Roll_No</u>, <u>Emp_Id</u></td>
                  </tr>
                  <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                    <td className="py-2 px-4 font-bold text-brand-600 dark:text-brand-400">Double Ellipse [ ⯀ ]</td>
                    <td className="py-2 px-4 font-sans font-medium">Multivalued Attribute</td>
                    <td className="py-2 px-4 font-sans">Attribute with multiple values, e.g. Phone_No</td>
                  </tr>
                  <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                    <td className="py-2 px-4 font-bold text-brand-600 dark:text-brand-400">Dashed Ellipse</td>
                    <td className="py-2 px-4 font-sans font-medium">Derived Attribute</td>
                    <td className="py-2 px-4 font-sans">Calculated from another attribute, e.g. Age from DOB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2.3 ADVANTAGES & DISADVANTAGES OF EACH DATA MODEL */}
      {/* ========================================================= */}
      <section id="sec-2-3" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Advantages & Disadvantages of Each Data Model
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (डेटा मॉडल्स के गुण एवं दोषों की विस्तृत तुलना)
          </div>
        </div>

        {/* Comprehensive Comparative Table */}
        <div className="my-6">
          <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>Table 2.2 • Advantages & Disadvantages Comparison</span>
            <span className="text-[10px] md:hidden">↔ Swipe horizontally</span>
          </div>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs">
            <table className="w-full text-left border-collapse text-sm min-w-[620px]">
              <thead>
                <tr className="bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold">
                  <th className="py-3 px-4">Data Model</th>
                  <th className="py-3 px-4 text-emerald-600 dark:text-emerald-400">Advantages (लाभ)</th>
                  <th className="py-3 px-4 text-rose-600 dark:text-rose-400">Disadvantages (हानियां)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-slate-100">
                    Hierarchical Model
                  </td>
                  <td className="py-3 px-4">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Simple conceptual structure (tree-like).</li>
                      <li>Fast searching for 1:N hierarchy.</li>
                      <li>Parent-child integrity automatically maintained.</li>
                    </ul>
                  </td>
                  <td className="py-3 px-4">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>M:N relationships represent karna mushkil hai.</li>
                      <li>Parent delete hone par child records bhi delete ho jaate hain (deletion anomaly).</li>
                      <li>Rigid structure, data independence poor hai.</li>
                    </ul>
                  </td>
                </tr>

                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-slate-100">
                    Network Model
                  </td>
                  <td className="py-3 px-4">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Many-to-Many (M:N) ko naturally support karta hai.</li>
                      <li>Multi-parent flexibility provide karta hai.</li>
                      <li>CODASYL standard par based hai.</li>
                    </ul>
                  </td>
                  <td className="py-3 px-4">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Structure complex aur confusing graph ban jata hai.</li>
                      <li>Pointers ka heavy use memory overhead badhata hai.</li>
                      <li>Data navigation ke liye low-level programming zaroori hai.</li>
                    </ul>
                  </td>
                </tr>

                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-slate-100">
                    E-R Model ★
                  </td>
                  <td className="py-3 px-4">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Highly visual, non-technical logo ko bhi samajh aa jata hai.</li>
                      <li>Database design ka industry-standard first step hai.</li>
                      <li>Relational tables mein convert karna bahut aasan hai.</li>
                    </ul>
                  </td>
                  <td className="py-3 px-4">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Yeh sirf conceptual design tool hai, direct physical DBMS query support nahi karta.</li>
                      <li>Complex enterprise systems ke liye ER diagrams bahut bade aur clunky ho jaate hain.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2.4 CONCEPT OF KEYS */}
      {/* ========================================================= */}
      <section id="sec-2-4" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.4
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Concept of Keys in Relational DBMS
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (प्राइमरी, कैंडिडेट, सुपर एवं फॉरेन की की विस्तृत व्याख्या)
          </div>
        </div>

        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Definition • Keys</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A Key is an attribute or set of attributes that helps to uniquely identify any row (tuple) of data in a table and establishes relationships between tables."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Ek table mein laakhon rows mein se kisi ek specific row ko bina kisi confusion ke pehchanne ke liye Key ka use kiya jata hai.
            </span>
          </div>
        </div>

        {/* Key Hierarchy Formula / Visual */}
        <div className="study-formula-block">
          <div className="text-[11px] font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold mb-1">
            Mathematical Relationship Among Keys
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white tracking-wider my-2">
            Super Key ⊇ Candidate Key ⊇ Primary Key
          </div>
          <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-1">
            Every Primary Key is a Candidate Key, and every Candidate Key is a Super Key.
          </div>
        </div>

        {/* Detailed Explanation of Keys */}
        <div className="space-y-6 my-6">
          {/* Super Key */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 flex items-center gap-2">
              <Key className="w-4 h-4 text-brand-500" />
              <span>1. Super Key (सुपर की)</span>
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-2">
              Attributes ka koi bhi aisa set jo table ki har row ko uniquely identify kar sake. Isme redundant (extra) attributes bhi shamil ho sakte hain:
            </p>
            <div className="p-2.5 rounded bg-white dark:bg-slate-800/80 font-mono text-xs text-brand-600 dark:text-brand-400">
              Examples in Student Table: &#123;Roll_No&#125;, &#123;Roll_No, Name&#125;, &#123;Roll_No, Branch&#125;, &#123;Aadhar_No, Name&#125;
            </div>
          </div>

          {/* Candidate Key */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 flex items-center gap-2">
              <Key className="w-4 h-4 text-emerald-500" />
              <span>2. Candidate Key (उम्मीदवार की / Minimal Super Key)</span>
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-2">
              Aisi Super Key jisme se agar koi bhi attribute hata diya jaye, to uniqueness kho jaye (Minimal Super Key with NO extra attributes):
            </p>
            <div className="p-2.5 rounded bg-white dark:bg-slate-800/80 font-mono text-xs text-emerald-600 dark:text-emerald-400">
              Examples: &#123;Roll_No&#125; aur &#123;Aadhar_No&#125; dono Candidate Keys hain (kyunki dono akele unique hain).
            </div>
          </div>

          {/* Primary Key */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 flex items-center gap-2">
              <Key className="w-4 h-4 text-purple-500" />
              <span>3. Primary Key (प्राथमिक कुंजी) ★</span>
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-2">
              Candidate Keys mein se Database Designer dwara chuni gayi main key jo do sharton ko hamesha poora karti hai:
            </p>
            <div className="flex gap-4 font-mono text-xs my-2">
              <span className="px-2.5 py-1 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold border border-purple-500/20">1. NOT NULL (Kabhi empty nahi ho sakti)</span>
              <span className="px-2.5 py-1 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold border border-purple-500/20">2. UNIQUE (Har row ke liye alag value)</span>
            </div>
          </div>

          {/* Foreign Key */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 flex items-center gap-2">
              <Share2 className="w-4 h-4 text-amber-500" />
              <span>4. Foreign Key (विदेशी कुंजी / Referenced Key)</span>
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-2">
              Ek table ka aisa attribute jo doosri table ki <strong>Primary Key</strong> ko reference karta hai. Yeh do tables ke beech sambandh (relationship) sthapit karne aur <strong>Referential Integrity</strong> banaye rakhne ke liye zaroori hai.
            </p>

            {/* Visual Example of FK linking */}
            <div className="p-3 rounded-lg bg-white dark:bg-slate-800/80 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1 mt-2">
              <div>Table 1: DEPARTMENT (<strong>Dept_Id [PK]</strong>, Dept_Name)</div>
              <div>Table 2: EMPLOYEE (Emp_Id [PK], Emp_Name, <strong>Dept_Id [FK referencing DEPARTMENT]</strong>)</div>
              <div className="text-[11px] text-amber-600 dark:text-amber-400 font-sans mt-1">
                Rule: EMPLOYEE table mein wahi Dept_Id daali ja sakti hai jo DEPARTMENT table mein exist karti ho!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2.5 CONSTRAINTS */}
      {/* ========================================================= */}
      <section id="sec-2-5" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.5
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Constraints in Relational Database
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (डेटाबेस अखंडता प्रतिबंध)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Constraints ve niyam (rules) hain jo table ke attributes par apply kiye jaate hain taaki database mein invalid ya corrupt data enter na ho sake:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900 dark:text-white mb-1">
              <Lock className="w-3.5 h-3.5 text-brand-500" />
              <span>1. Domain Constraint</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Har attribute ki value uske defined data type aur atomic domain ke anusaar honi chahiye (jaise Age integer ho aur positive ho).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900 dark:text-white mb-1">
              <Lock className="w-3.5 h-3.5 text-brand-500" />
              <span>2. Key Constraint</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Table mein do rows ka primary key kabhi bhi duplicate ya saman nahi ho sakta.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900 dark:text-white mb-1">
              <Lock className="w-3.5 h-3.5 text-brand-500" />
              <span>3. Entity Integrity Constraint</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Primary Key ka koi bhi attribute kabhi <strong>NULL</strong> (empty/khali) nahi ho sakta.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900 dark:text-white mb-1">
              <Lock className="w-3.5 h-3.5 text-brand-500" />
              <span>4. Referential Integrity Constraint</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Foreign Key ki value ya to referenced table ki Primary Key value se match honi chahiye ya poori tarah NULL honi chahiye.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2.6 STRONG ENTITY SET AND WEAK ENTITY SET */}
      {/* ========================================================= */}
      <section id="sec-2-6" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.6
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Strong Entity Set and Weak Entity Set
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (प्रबल इकाई समुच्चय एवं दुर्बल इकाई समुच्चय)
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          {/* Strong Entity Set */}
          <div className="p-5 rounded-2xl border border-brand-500/30 bg-brand-50/20 dark:bg-brand-500/[0.03] space-y-2.5">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              STRONG ENTITY SET
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Strong Entity Set (प्रबल इकाई समुच्चय)
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Ek aisa entity set jiske paas apna <strong>Primary Key</strong> banane ke liye paryapt (sufficient) attributes hote hain.
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <li>Isko kisi doosri entity par depend nahi hona padta.</li>
              <li>ER diagram mein ise <strong>Single Rectangle</strong> [ ▭ ] se darshaya jata hai.</li>
              <li>Example: <code>EMPLOYEE (Emp_Id, Name, Salary)</code> jahan <code>Emp_Id</code> primary key hai.</li>
            </ul>
          </div>

          {/* Weak Entity Set */}
          <div className="p-5 rounded-2xl border border-amber-500/30 bg-amber-50/20 dark:bg-amber-500/[0.03] space-y-2.5">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
              WEAK ENTITY SET
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Weak Entity Set (दुर्बल इकाई समुच्चय)
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Ek aisa entity set jiske paas apna Primary Key banane ke liye paryapt attributes <strong>nahi</strong> hote. Yeh apni pehchan ke liye Strong Entity par nirbhar karta hai.
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <li>Isko <strong>Double Rectangle</strong> [ ⧉ ] se darshaya jata hai.</li>
              <li>Iske relationship ko <strong>Double Diamond</strong> (Identifying Relationship) se darshaya jata hai.</li>
              <li>Iske paas Primary key nahi balki <strong>Partial Key / Discriminator</strong> hota hai (dashed underline).</li>
              <li>Example: <code>DEPENDENT (Dep_Name, Relationship, Age)</code>. Bina Employee ke Dependent ka koi astitva nahi hai!</li>
            </ul>
          </div>
        </div>

        {/* Comparison Table: Strong vs Weak Entity */}
        <div className="my-6">
          <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>Table 2.3 • Strong vs Weak Entity Set Comparison</span>
            <span className="text-[10px] md:hidden">↔ Swipe horizontally</span>
          </div>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs">
            <table className="w-full text-left border-collapse text-sm min-w-[540px]">
              <thead>
                <tr className="bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold">
                  <th className="py-2.5 px-4">Parameter</th>
                  <th className="py-2.5 px-4 text-brand-600 dark:text-brand-400">Strong Entity Set</th>
                  <th className="py-2.5 px-4 text-amber-600 dark:text-amber-400">Weak Entity Set</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-medium text-slate-900 dark:text-slate-100">Primary Key</td>
                  <td className="py-2 px-4 font-semibold text-emerald-600 dark:text-emerald-400">Apni khud ki Primary Key hoti hai</td>
                  <td className="py-2 px-4 font-semibold text-rose-600 dark:text-rose-400">Apni Primary Key nahi hoti (Partial Key + Strong PK se banti hai)</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-medium text-slate-900 dark:text-slate-100">Symbol</td>
                  <td className="py-2 px-4 font-mono">Single Rectangle [ ▭ ]</td>
                  <td className="py-2 px-4 font-mono">Double Rectangle [ ⧉ ]</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-medium text-slate-900 dark:text-slate-100">Relationship</td>
                  <td className="py-2 px-4">Single Diamond [ ◇ ]</td>
                  <td className="py-2 px-4">Double Diamond [ ◈ ] (Identifying Relationship)</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-medium text-slate-900 dark:text-slate-100">Existence Dependency</td>
                  <td className="py-2 px-4">Independent hoti hai</td>
                  <td className="py-2 px-4">Strong entity par poori tarah dependent hoti hai</td>
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
                <p className="font-semibold text-slate-900 dark:text-slate-100">Can a Primary Key contain NULL values?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5 font-bold">Ans: No. Entity Integrity Constraint forbids NULL in Primary Keys.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Who proposed the E-R Model and in which year?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5">Ans: Peter Chen in 1976.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Which symbol represents a Weak Entity Set in ER diagram?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5">Ans: Double Rectangle.</p>
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
                <p className="font-semibold text-slate-900 dark:text-slate-100">Differentiate between Super Key and Candidate Key with an example.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: A Super Key is any set of attributes that uniquely identifies a row (may have redundant fields, e.g. &#123;RollNo, Name&#125;). A Candidate Key is a minimal super key without any extra attributes (e.g. &#123;RollNo&#125;).</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">What is Referential Integrity Constraint? Explain with Foreign Key.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: It ensures that a foreign key value in a child table must match a valid primary key value in the referenced parent table (or be null), preventing orphan records.</p>
              </li>
            </ol>
          </div>

          {/* 5 Mark Questions */}
          <div className="p-5 rounded-xl border border-brand-500/20 bg-brand-500/[0.02] dark:bg-brand-500/[0.04]">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-brand-500/20">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20">
                5 MARKS QUESTIONS
              </span>
              <span className="text-xs text-slate-400 font-mono">Long Explanations & Comparisons</span>
            </div>
            <ol className="list-decimal list-outside pl-5 space-y-4 text-sm text-slate-800 dark:text-slate-200">
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Compare Hierarchical, Network, and ER Data Models with neat diagrams and advantages/disadvantages.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Draw the Tree structure for Hierarchical (1:N only, single parent), Graph structure for Network (M:N supported, multi-parent), and ER diagram symbols. Present the comparative table highlighting ease of use, data independence, and relationship support.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">What is a Weak Entity Set? Explain how it is represented in an ER diagram with a suitable real-world example.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Explain absence of primary key, reliance on owner strong entity, identifying relationship (double diamond), partial key (discriminator), and draw the EMPLOYEE-DEPENDENT ER diagram.</p>
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
              <li><strong>Hierarchical:</strong> Tree, Parent-Child (1:N), Single Parent.</li>
              <li><strong>Network:</strong> Graph, M:N support, Multiple Parents allowed.</li>
              <li><strong>E-R Model:</strong> Peter Chen (1976), Entity (Rectangle), Attribute (Ellipse), Relationship (Diamond).</li>
              <li><strong>Candidate Key:</strong> Minimal Super Key.</li>
              <li><strong>Primary Key:</strong> Candidate Key chosen by DBA (Unique + NOT NULL).</li>
              <li><strong>Foreign Key:</strong> References Primary Key of another table (Referential Integrity).</li>
              <li><strong>Weak Entity:</strong> Has no primary key of its own, identified by Double Rectangle + Identifying Relationship (Double Diamond).</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
};

export default DbmsUnit2Content;
