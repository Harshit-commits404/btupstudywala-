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
  Calculator,
  GitMerge,
  Filter,
  Columns,
  TableProperties,
  ArrowRightLeft,
} from 'lucide-react';

export const DbmsUnit3Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* ========================================================= */}
      {/* CHAPTER TITLEPLATE / HERO HEADER */}
      {/* ========================================================= */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 03</span>
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
            <span>Weightage: 10–12 Marks</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Relational Model & Algebra
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (रिलेशनल मॉडल, ई-आर मैपिंग एवं रिलेशनल बीजगणित)
          </p>
        </div>

        {/* Syllabus Topics Chip Bar */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">The Relational Data Model</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Relational Database Constraints</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">ER/EER to Relational Model Mapping</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Relational Algebra vs Calculus</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Basic Operations (Union, Intersection, Diff, Product)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Additional Operations (Projection, Selection, Division, Rename, Join)</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Modern DBMS systems ka 90% se zyada hissa Relational Data Model par aadharit hai. Is unit mein hum Edgar F. Codd dwara banaye gaye Relational Model, uske constraints, ER diagram ko practical database tables mein convert karne ke step-by-step niyam, aur SQL queries ke theoretical foundation — Relational Algebra (Selection, Projection, Join, Division, etc.) aur Relational Calculus ko deeply samjhenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 3.1 THE RELATIONAL DATA MODEL */}
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
            The Relational Data Model
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (रिलेशनल डेटा मॉडल का परिचय एवं सिद्धांत)
          </div>
        </div>

        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Definition • Relational Model</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "The Relational Model represents the database as a collection of relations (tables), where each relation has a name and is set of tuples (rows) representing attributes (columns)."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Dr. E.F. Codd ne 1970 mein IBM research paper mein is model ko introduce kiya tha. Isme data ko mathematically tables (Relations) ke roop mein dekha jata hai.
            </span>
          </div>
        </div>

        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          Mathematical Properties of a Relation:
        </h3>
        <ul className="list-disc list-outside pl-5 space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6">
          <li><strong>Atomicity of Attributes:</strong> Table ke kisi bhi cell mein composite ya multivalued data nahi ho sakta (sirf single atomic value).</li>
          <li><strong>No Duplicate Tuples:</strong> Table mein do rows bilkul idential nahi ho sakti (Primary key uniqueness).</li>
          <li><strong>Ordering is Irrelevant:</strong> Tuples (rows) aur Attributes (columns) ka sequence/order badalne se table ka meaning change nahi hota.</li>
          <li><strong>Distinct Attribute Names:</strong> Ek hi table ke andar do columns ke naam saman nahi ho sakte.</li>
        </ul>
      </section>

      {/* ========================================================= */}
      {/* 3.2 RELATIONAL DATABASE CONSTRAINTS */}
      {/* ========================================================= */}
      <section id="sec-3-2" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Relational Database Constraints
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (रिलेशनल डेटाबेस प्रतिबंध एवं उनका उल्लंघन प्रबंधन)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Relational model mein data integrity banaye rakhne ke liye chaar (4) core constraints hote hain:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 text-sm">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1">1. Domain Constraint</strong>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">Har column value uske data type (INT, VARCHAR, DATE) aur defined range ke anusaar honi chahiye.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1">2. Key Constraint</strong>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">Candidate key aur Primary key ki value kisi bhi do rows ke liye duplicate nahi ho sakti.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1">3. Entity Integrity Constraint</strong>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">Primary key value kabhi bhi <code>NULL</code> (khali) nahi ho sakti.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1">4. Referential Integrity Constraint</strong>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">Foreign key ki value parent table ke primary key se match honi chahiye ya null honi chahiye.</p>
          </div>
        </div>

        {/* Handling Referential Violations */}
        <div className="my-6 pl-4 border-l-[3.5px] border-amber-500 bg-amber-500/[0.06] py-3.5 pr-4 rounded-r-md text-sm">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-1">
            <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>EXAM FAVORITE • Handling DELETE / UPDATE on Referenced Tables</span>
          </div>
          <p className="text-slate-800 dark:text-slate-200 leading-relaxed mb-2">
            Agar parent table ka koi record delete ya update kiya jaye jisko child table reference kar rahi hai, to 3 options hote hain:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-1 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
            <li><strong>ON DELETE RESTRICT (Reject):</strong> Deletion ko mana kar diya jata hai jab tak child records exist karte hain.</li>
            <li><strong>ON DELETE CASCADE:</strong> Parent record delete hone par sabhi related child records bhi automatically delete ho jaate hain.</li>
            <li><strong>ON DELETE SET NULL:</strong> Parent record delete hone par child table mein Foreign Key ki value NULL set ho jaati hai.</li>
          </ul>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3.3 ER/EER TO RELATIONAL MODEL MAPPING */}
      {/* ========================================================= */}
      <section id="sec-3-3" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            ER / EER to Relational Model Mapping
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (ई-आर आरेख को रिलेशनल टेबल्स में बदलने के नियम)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          BTEUP exams mein ER diagram ko relational tables mein convert karne ka 5-mark question aksar pucha jata hai. Iske step-by-step rules nimnalikhit hain:
        </p>

        {/* Step by Step Conversion Rules */}
        <div className="space-y-5 my-6 text-sm">
          {/* Step 1 */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <span className="font-mono font-bold text-xs uppercase text-brand-600 dark:text-brand-400 block mb-1">
              Step 1: Mapping Strong (Regular) Entity Sets
            </span>
            <p className="text-slate-700 dark:text-slate-300">
              Har Strong Entity ke liye ek separate table banaiye. Uske sabhi simple attributes table ke columns banenge, aur entity ka Key attribute table ka <strong>Primary Key</strong> banega. Composite attribute ke sirf components ko shamil karein.
            </p>
            <div className="mt-2 font-mono text-xs text-slate-500 dark:text-slate-400 pl-3 border-l-2 border-brand-500">
              Entity: STUDENT(<u>Roll_No</u>, Name, Dob) ⇒ Table: <strong>STUDENT(<u>Roll_No</u>, Name, Dob)</strong>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <span className="font-mono font-bold text-xs uppercase text-brand-600 dark:text-brand-400 block mb-1">
              Step 2: Mapping Weak Entity Sets
            </span>
            <p className="text-slate-700 dark:text-slate-300">
              Weak entity ke liye ek table banaiye. Isme weak entity ke attributes ke saath-saath <strong>Owner Strong Entity ki Primary Key</strong> ko Foreign Key ke roop mein shamil karein. Table ka Primary Key composite hoga: <code>&#123;Owner_PK + Partial_Key&#125;</code>.
            </p>
            <div className="mt-2 font-mono text-xs text-slate-500 dark:text-slate-400 pl-3 border-l-2 border-brand-500">
              Table: <strong>DEPENDENT(<u>Emp_Id</u>, <u>Dep_Name</u>, Relation, Age)</strong>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <span className="font-mono font-bold text-xs uppercase text-brand-600 dark:text-brand-400 block mb-1">
              Step 3: Mapping 1:1 Binary Relationships
            </span>
            <p className="text-slate-700 dark:text-slate-300">
              Kisi ek table ki Primary Key ko doosri table mein <strong>Foreign Key</strong> ke roop mein add kar dijiye (preferred: us table mein daalein jiski participation total ho taaki NULL values kam se kam aayin).
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <span className="font-mono font-bold text-xs uppercase text-brand-600 dark:text-brand-400 block mb-1">
              Step 4: Mapping 1:N (One-to-Many) Relationships ★
            </span>
            <p className="text-slate-700 dark:text-slate-300">
              <strong>"One" side</strong> entity ki Primary Key ko <strong>"Many" (N) side</strong> wali table mein Foreign Key ke roop mein rakh dein.
            </p>
            <div className="mt-2 font-mono text-xs text-slate-500 dark:text-slate-400 pl-3 border-l-2 border-brand-500">
              Department (1) ── Works_In ── (N) Employee<br />
              ⇒ Table: <strong>EMPLOYEE(Emp_Id [PK], Emp_Name, <u>Dept_Id [FK]</u>)</strong>
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <span className="font-mono font-bold text-xs uppercase text-brand-600 dark:text-brand-400 block mb-1">
              Step 5: Mapping M:N (Many-to-Many) Relationships ★
            </span>
            <p className="text-slate-700 dark:text-slate-300">
              M:N ke liye ek <strong>naya Relationship Table (Junction Table)</strong> banaya jata hai. Is nayi table mein dono entities ki Primary Keys ko Foreign Keys ke roop mein rakha jata hai, aur dono milkar composite Primary Key banati hain.
            </p>
            <div className="mt-2 font-mono text-xs text-slate-500 dark:text-slate-400 pl-3 border-l-2 border-brand-500">
              Student (M) ── Enrolls ── (N) Course<br />
              ⇒ New Junction Table: <strong>ENROLLMENT(<u>Roll_No</u>, <u>Course_Id</u>, Grade)</strong>
            </div>
          </div>

          {/* Step 6 */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <span className="font-mono font-bold text-xs uppercase text-brand-600 dark:text-brand-400 block mb-1">
              Step 6: Mapping Multivalued Attributes
            </span>
            <p className="text-slate-700 dark:text-slate-300">
              Multivalued attribute (jaise Phone_Number) ke liye ek <strong>naya table</strong> banaiye jisme entity ki Primary Key aur wo multivalued attribute hoga.
            </p>
            <div className="mt-2 font-mono text-xs text-slate-500 dark:text-slate-400 pl-3 border-l-2 border-brand-500">
              ⇒ Table: <strong>STUDENT_PHONE(<u>Roll_No</u>, <u>Phone_No</u>)</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3.4 RELATIONAL ALGEBRA VS CALCULUS */}
      {/* ========================================================= */}
      <section id="sec-3-4" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.4
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Relational Algebra & Relational Calculus
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (प्रक्रियात्मक बनाम गैर-प्रक्रियात्मक क्वेरी भाषाएं)
          </div>
        </div>

        {/* Academic Comparison Table */}
        <div className="my-6">
          <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>Table 3.1 • Relational Algebra vs Relational Calculus</span>
            <span className="text-[10px] md:hidden">↔ Swipe horizontally</span>
          </div>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs">
            <table className="w-full text-left border-collapse text-sm min-w-[560px]">
              <thead>
                <tr className="bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold">
                  <th className="py-2.5 px-4">Parameter</th>
                  <th className="py-2.5 px-4 text-brand-600 dark:text-brand-400">Relational Algebra</th>
                  <th className="py-2.5 px-4 text-purple-600 dark:text-purple-400">Relational Calculus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-medium text-slate-900 dark:text-slate-100">Language Type</td>
                  <td className="py-2 px-4 font-semibold text-brand-600 dark:text-brand-400">Procedural (प्रक्रियात्मक)</td>
                  <td className="py-2 px-4 font-semibold text-purple-600 dark:text-purple-400">Non-procedural / Declarative (घोषणात्मक)</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-medium text-slate-900 dark:text-slate-100">Philosophy</td>
                  <td className="py-2 px-4">Yeh batata hai <strong>"WHAT"</strong> data chahiye aur <strong>"HOW"</strong> use nikaalna hai (step-by-step).</td>
                  <td className="py-2 px-4">Yeh sirf batata hai <strong>"WHAT"</strong> data chahiye (bina bataye ki use kaise retrieve karein).</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-medium text-slate-900 dark:text-slate-100">Execution Plan</td>
                  <td className="py-2 px-4">Operations ka specific order hota hai (e.g. Selection pehle ya Join pehle).</td>
                  <td className="py-2 px-4">DBMS Query Optimizer khud best execution plan tay karta hai.</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-medium text-slate-900 dark:text-slate-100">Classification</td>
                  <td className="py-2 px-4">Basic and Additional Algebraic operations.</td>
                  <td className="py-2 px-4">Tuple Relational Calculus (TRC) & Domain Relational Calculus (DRC).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3.5 BASIC RELATIONAL ALGEBRA OPERATIONS */}
      {/* ========================================================= */}
      <section id="sec-3-5" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.5
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Basic Relational Algebra Operations
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (यूनियन, इंटरसेक्शन, डिफरेंस एवं कार्तेशियन गुणन)
          </div>
        </div>

        {/* Union Compatibility Rule Placard */}
        <div className="my-6 pl-4 border-l-[3.5px] border-amber-500 bg-amber-500/[0.06] py-3.5 pr-4 rounded-r-md text-sm">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-1">
            <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>CRITICAL RULE • Union Compatibility (Type Compatibility)</span>
          </div>
          <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
            Set operations (Union ∪, Intersection ∩, Difference −) sirf tabhi perform kiye ja sakte hain jab dono relations <strong>Union Compatible</strong> hon:
            (1) Dono relations mein attributes ki sankhya barabar honi chahiye <code>Degree(R) = Degree(S)</code>, aur (2) Corresponding attributes ke domains bilkul saman hone chahiye.
          </p>
        </div>

        <div className="space-y-6 my-6">
          {/* Union */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                1. Union (R ∪ S)
              </h4>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
                R ∪ S
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-2">
              Yeh un sabhi tuples ka set return karta hai jo relation R mein hon, ya S mein hon, ya dono mein hon. Duplicates automatically remove ho jaate hain:
            </p>
            <div className="p-2.5 rounded bg-white dark:bg-slate-800/80 font-mono text-xs text-brand-600 dark:text-brand-400">
              R ∪ S = &#123; t | t ∈ R or t ∈ S &#125;
            </div>
          </div>

          {/* Intersection */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                2. Intersection (R ∩ S)
              </h4>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
                R ∩ S
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-2">
              Yeh sirf un tuples ko return karta hai jo R aur S <strong>dono mein common</strong> hon:
            </p>
            <div className="p-2.5 rounded bg-white dark:bg-slate-800/80 font-mono text-xs text-brand-600 dark:text-brand-400">
              R ∩ S = &#123; t | t ∈ R and t ∈ S &#125;  (Mathematically: R − (R − S))
            </div>
          </div>

          {/* Set Difference */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                3. Set Difference (R − S)
              </h4>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
                R − S
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-2">
              Yeh un tuples ko return karta hai jo relation R mein to hain lekin S mein <strong>nahi</strong> hain. (Note: R − S ≠ S − R):
            </p>
            <div className="p-2.5 rounded bg-white dark:bg-slate-800/80 font-mono text-xs text-brand-600 dark:text-brand-400">
              R − S = &#123; t | t ∈ R and t ∉ S &#125;
            </div>
          </div>

          {/* Cartesian Product */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                4. Cartesian Product / Cross Product (R × S)
              </h4>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
                R × S
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-2">
              Yeh R ke har ek tuple ko S ke har ek tuple ke saath combine karke naye tuples banata hai (Cross combination):
            </p>
            <div className="grid grid-cols-2 gap-2 font-mono text-xs my-2">
              <div className="p-2 rounded bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                Degree = Degree(R) + Degree(S)
              </div>
              <div className="p-2 rounded bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                Cardinality = Cardinality(R) × Cardinality(S)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3.6 ADDITIONAL RELATIONAL OPERATIONS */}
      {/* ========================================================= */}
      <section id="sec-3-6" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 3.6
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Additional Relational Algebraic Operations
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (प्रोजेक्शन, सिलेक्शन, डिवीजन, रीनेम एवं जॉइन ऑपरेशन्स)
          </div>
        </div>

        <div className="space-y-6 my-6">
          {/* Selection */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                1. Selection (σ - Sigma): Horizontal Partitioning
              </h4>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
                σ_condition(R)
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-2">
              Yeh un <strong>Rows (Tuples)</strong> ko filter karke select karta hai jo di gayi condition ko satisfy karte hain:
            </p>
            <div className="p-2.5 rounded bg-white dark:bg-slate-800/80 font-mono text-xs text-brand-600 dark:text-brand-400">
              Query Example: σ_(Branch = 'CSE' ∧ Semester = 3)(STUDENT)
            </div>
          </div>

          {/* Projection */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                2. Projection (π - Pi): Vertical Partitioning
              </h4>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
                π_attributes(R)
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-2">
              Yeh table ke sirf chuninda <strong>Columns (Attributes)</strong> ko chunta hai aur duplicate rows ko discard kar deta hai:
            </p>
            <div className="p-2.5 rounded bg-white dark:bg-slate-800/80 font-mono text-xs text-brand-600 dark:text-brand-400">
              Query Example: π_(Roll_No, Name)(STUDENT)
            </div>
          </div>

          {/* Rename */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                3. Rename (ρ - Rho)
              </h4>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
                ρ_NewName(R)
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-2">
              Relation ka ya uske attributes ka temporary naam badalne ke liye use hota hai (self-joins mein useful):
            </p>
            <div className="p-2.5 rounded bg-white dark:bg-slate-800/80 font-mono text-xs text-brand-600 dark:text-brand-400">
              Query Example: ρ_STUDENT_CSE(σ_(Branch='CSE')(STUDENT))
            </div>
          </div>

          {/* Join Operations */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                4. Join Operations (⋈) ★
              </h4>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
                R ⋈_condition S
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-3">
              Do tables ke related data ko common attribute ke aadhar par combine karna:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li><strong>Theta Join (⋈_θ):</strong> Kisi general comparison operator (&lt;, &gt;, =, ≤, ≥) par aadharit join.</li>
              <li><strong>Equi Join:</strong> Theta join jisme comparison operator hamesha equality <code>'='</code> hota hai. Isme common attribute do baar aata hai.</li>
              <li><strong>Natural Join (⋈):</strong> Equi join ka special case jisme common attributes par equality apply hoti hai aur duplicate column ko automatically remove kar diya jata hai.</li>
              <li><strong>Outer Joins:</strong>
                <span className="block pl-3 text-xs font-mono mt-0.5 text-slate-500 dark:text-slate-400">
                  • Left Outer Join (⟕): Left table ke sabhi rows + matching right rows (unmatched right becomes NULL).<br />
                  • Right Outer Join (⟖): Right table ke sabhi rows + matching left rows.<br />
                  • Full Outer Join (⟗): Dono tables ke sabhi rows (missing pairs padded with NULL).
                </span>
              </li>
            </ul>
          </div>

          {/* Division Operation */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                5. Division Operation (R ÷ S)
              </h4>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
                R ÷ S
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-2">
              Division operation ka upayog "FOR ALL" ya "ALL" wali queries solve karne ke liye kiya jata hai.
            </p>
            <div className="p-2.5 rounded bg-white dark:bg-slate-800/80 font-mono text-xs text-brand-600 dark:text-brand-400">
              Classic BTEUP Query: "Find Roll_No of students who have enrolled in ALL courses offered by CSE department."
            </div>
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
                <p className="font-semibold text-slate-900 dark:text-slate-100">Which symbol denotes Selection in Relational Algebra?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5 font-bold">Ans: Greek letter Sigma (σ).</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">What is the condition for Union Compatibility?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5">Ans: Both relations must have same number of attributes with identical respective data domains.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">What is the degree and cardinality of R × S?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5 font-bold">Ans: Degree = Degree(R) + Degree(S); Cardinality = Cardinality(R) × Cardinality(S).</p>
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
                <p className="font-semibold text-slate-900 dark:text-slate-100">Differentiate between Natural Join and Equi Join.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Equi Join equates common columns and retains duplicate column names in the output table. Natural Join equates common columns and automatically eliminates the duplicate column.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Explain the difference between Selection (σ) and Projection (π).</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Selection operates horizontally to filter rows based on a boolean predicate. Projection operates vertically to extract chosen columns and eliminate duplicate records.</p>
              </li>
            </ol>
          </div>

          {/* 5 Mark Questions */}
          <div className="p-5 rounded-xl border border-brand-500/20 bg-brand-500/[0.02] dark:bg-brand-500/[0.04]">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-brand-500/20">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20">
                5 MARKS QUESTIONS
              </span>
              <span className="text-xs text-slate-400 font-mono">Long Explanations & Algorithm Rules</span>
            </div>
            <ol className="list-decimal list-outside pl-5 space-y-4 text-sm text-slate-800 dark:text-slate-200">
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Explain the step-by-step procedure to map an ER Diagram into a Relational Schema.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Detail Step 1 (Strong entity), Step 2 (Weak entity with composite PK), Step 3 (1:1 relationships), Step 4 (1:N relationships via foreign key on N side), Step 5 (M:N relationships using separate junction table), and Step 6 (Multivalued attributes table).</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Explain Inner Joins and Outer Joins (Left, Right, Full) with suitable table examples.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Illustrate with two sample tables (e.g. Employee and Department). Show resulting tables for Natural Join, Left Outer Join, Right Outer Join, and Full Outer Join with NULL padding.</p>
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
              <li><strong>Selection (σ):</strong> Filters rows horizontally.</li>
              <li><strong>Projection (π):</strong> Selects columns vertically, removes duplicate rows.</li>
              <li><strong>Relational Algebra:</strong> Procedural (how and what).</li>
              <li><strong>Relational Calculus:</strong> Declarative (what only).</li>
              <li><strong>1:N Mapping:</strong> Put "1" side's Primary Key as Foreign Key in the "N" side table.</li>
              <li><strong>M:N Mapping:</strong> Create a new table containing PKs of both entities.</li>
              <li><strong>Multivalued Attribute:</strong> Create a separate table with Parent PK + Attribute.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
};

export default DbmsUnit3Content;
