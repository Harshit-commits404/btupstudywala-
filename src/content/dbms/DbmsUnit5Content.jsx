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
  Code,
  Terminal,
  Database,
  Search,
  PlusCircle,
  Edit,
  Trash2,
} from 'lucide-react';

export const DbmsUnit5Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* ========================================================= */}
      {/* CHAPTER TITLEPLATE / HERO HEADER */}
      {/* ========================================================= */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 05</span>
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
            SQL & MySQL Commands
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (एसक्यूएल डेटा प्रकार, डीडीएल, डीएमएल एवं डेटा पुनर्प्राप्ति कमांड्स)
          </p>
        </div>

        {/* Syllabus Topics Chip Bar */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">MySQL Data Types</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Data Definition Commands (DDL)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Data Manipulation Commands (DML)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Data Retrieval Commands (DQL/SELECT)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Types of Operators (Arithmetic, Comparison, Logical)</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          SQL (Structured Query Language) relational databases ke saath interact karne ki de-facto standard language hai. MySQL duniya ka sabse popular open-source relational database management system hai. Is unit mein hum MySQL ke data types, database table structure banane aur modify karne ke DDL commands, data insert aur update karne ke DML commands, data search karne ke SELECT queries aur sabhi prakar ke operators ko practical syntax ke saath Hinglish mein deeply samjhenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 5.1 MYSQL DATA TYPES */}
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
            MySQL Data Types
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (मायएसक्यूएल डेटा प्रकार: संख्यात्मक, स्ट्रिंग एवं दिनांक)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          MySQL mein table banate samay har column ka data type declare karna zaroori hota hai taaki memory sahi tarike se allocate ho sake:
        </p>

        <div className="space-y-4 my-6 text-sm">
          {/* Numeric Types */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-brand-600 dark:text-brand-400 text-base mb-2">1. Numeric Data Types (संख्यात्मक)</h4>
            <div className="space-y-1 font-mono text-xs text-slate-700 dark:text-slate-300">
              <div>• <code>INT / INTEGER</code>: Standard 4-byte integer (-2,147,483,648 to 2,147,483,647). Roll numbers, IDs ke liye.</div>
              <div>• <code>SMALLINT</code>: 2-byte integer (-32,768 to 32,767). Small quantities ke liye.</div>
              <div>• <code>FLOAT(p)</code> & <code>DOUBLE</code>: Floating-point decimal numbers. Scientific values ke liye.</div>
              <div>• <code>DECIMAL(M, D)</code>: Exact fixed-point number (e.g. <code>DECIMAL(10, 2)</code> means 10 digits total, 2 after decimal). Currency/salary ke liye best.</div>
            </div>
          </div>

          {/* String Types */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-emerald-600 dark:text-emerald-400 text-base mb-2">2. String / Character Types (अक्षर एवं टेक्स्ट)</h4>
            <div className="space-y-1 font-mono text-xs text-slate-700 dark:text-slate-300">
              <div>• <code>CHAR(size)</code>: Fixed-length string (0 to 255 chars). Fixed sizes jaise Pincode, State codes (UP, DL) ke liye.</div>
              <div>• <code>VARCHAR(size)</code>: Variable-length string (0 to 65,535 chars). Names, addresses ke liye best kyunki memory save karta hai.</div>
              <div>• <code>TEXT</code>: Long text content (up to 64 KB). Articles, descriptions ke liye.</div>
            </div>
          </div>

          {/* Date & Time Types */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-purple-600 dark:text-purple-400 text-base mb-2">3. Date & Time Types (दिनांक एवं समय)</h4>
            <div className="space-y-1 font-mono text-xs text-slate-700 dark:text-slate-300">
              <div>• <code>DATE</code>: Format <code>'YYYY-MM-DD'</code> (e.g. <code>'2026-03-15'</code>). DOB ke liye.</div>
              <div>• <code>TIME</code>: Format <code>'HH:MM:SS'</code>. Timing ke liye.</div>
              <div>• <code>DATETIME</code>: Format <code>'YYYY-MM-DD HH:MM:SS'</code>. Timestamp records ke liye.</div>
            </div>
          </div>
        </div>

        {/* Academic Comparison: CHAR vs VARCHAR */}
        <div className="my-6">
          <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>Table 5.1 • CHAR vs VARCHAR Difference</span>
            <span className="text-[10px] md:hidden">↔ Swipe horizontally</span>
          </div>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs">
            <table className="w-full text-left border-collapse text-sm min-w-[500px]">
              <thead>
                <tr className="bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold">
                  <th className="py-2.5 px-4">Feature</th>
                  <th className="py-2.5 px-4">CHAR(n)</th>
                  <th className="py-2.5 px-4 text-emerald-600 dark:text-emerald-400 font-bold">VARCHAR(n)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-medium text-slate-900 dark:text-slate-100">Length</td>
                  <td className="py-2 px-4">Fixed-length string (n bytes hamesha lega)</td>
                  <td className="py-2 px-4">Variable-length string (sirf actual characters + 1 byte lega)</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-medium text-slate-900 dark:text-slate-100">Padding</td>
                  <td className="py-2 px-4">Choti value hone par right side space pad karta hai</td>
                  <td className="py-2 px-4">Koi padding nahi karta, space waste nahi hoti</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-medium text-slate-900 dark:text-slate-100">Performance</td>
                  <td className="py-2 px-4 font-semibold text-emerald-600 dark:text-emerald-400">Faster access (static size)</td>
                  <td className="py-2 px-4">Slightly slower than CHAR</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5.2 DATA DEFINITION COMMANDS (DDL) */}
      {/* ========================================================= */}
      <section id="sec-5-2" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Data Definition Commands (DDL)
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (डेटा परिभाषा कमांड्स: स्कीमा निर्माण एवं संशोधन)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          DDL commands database ke <strong>Structure / Schema</strong> ko create, modify aur delete karte hain. Yeh <strong>Auto-Committed</strong> hote hain (inhe rollback nahi kiya ja sakta):
        </p>

        <div className="space-y-5 my-6 text-sm">
          {/* CREATE */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 dark:text-white">
              <PlusCircle className="w-4 h-4 text-brand-500" />
              <span>1. CREATE TABLE</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-2">
              Database mein naya table banane ke liye use hota hai:
            </p>
            <div className="p-3 rounded-lg bg-slate-900 text-brand-300 font-mono text-xs overflow-x-auto">
              {`CREATE TABLE Student (
    Roll_No INT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Branch VARCHAR(20) DEFAULT 'CSE',
    Marks DECIMAL(5,2) CHECK (Marks >= 0 AND Marks <= 100)
);`}
            </div>
          </div>

          {/* ALTER */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 dark:text-white">
              <Edit className="w-4 h-4 text-brand-500" />
              <span>2. ALTER TABLE</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-2">
              Existing table ke structure ko modify (column add, modify ya drop) karne ke liye:
            </p>
            <div className="p-3 rounded-lg bg-slate-900 text-brand-300 font-mono text-xs overflow-x-auto space-y-1">
              <div>-- Naya column add karna:</div>
              <div>ALTER TABLE Student ADD Email VARCHAR(100);</div>
              <div className="pt-1">-- Column ka data type badalna:</div>
              <div>ALTER TABLE Student MODIFY Name VARCHAR(80);</div>
              <div className="pt-1">-- Column ko delete karna:</div>
              <div>ALTER TABLE Student DROP COLUMN Email;</div>
            </div>
          </div>

          {/* DROP vs TRUNCATE */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 dark:text-white">
              <Trash2 className="w-4 h-4 text-rose-500" />
              <span>3. DROP TABLE & TRUNCATE TABLE</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900 text-brand-300 font-mono text-xs overflow-x-auto space-y-2">
              <div>DROP TABLE Student; -- Pura table aur uska structure dono delete ho jaate hain.</div>
              <div>TRUNCATE TABLE Student; -- Table ka data saaf ho jata hai par table ka structure bacha rehta hai.</div>
            </div>
          </div>
        </div>

        {/* Academic Comparison: DROP vs TRUNCATE vs DELETE */}
        <div className="my-6">
          <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>Table 5.2 • DROP vs TRUNCATE vs DELETE (BTEUP Repeated Question)</span>
            <span className="text-[10px] md:hidden">↔ Swipe horizontally</span>
          </div>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs">
            <table className="w-full text-left border-collapse text-sm min-w-[560px]">
              <thead>
                <tr className="bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold">
                  <th className="py-2.5 px-4">Parameter</th>
                  <th className="py-2.5 px-4">DROP</th>
                  <th className="py-2.5 px-4">TRUNCATE</th>
                  <th className="py-2.5 px-4">DELETE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-medium text-slate-900 dark:text-slate-100">Category</td>
                  <td className="py-2 px-4 font-mono">DDL</td>
                  <td className="py-2 px-4 font-mono">DDL</td>
                  <td className="py-2 px-4 font-mono text-brand-600 dark:text-brand-400">DML</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-medium text-slate-900 dark:text-slate-100">Structure</td>
                  <td className="py-2 px-4 text-rose-600 dark:text-rose-400">Pura table structure destroy ho jata hai</td>
                  <td className="py-2 px-4 text-emerald-600 dark:text-emerald-400">Structure surakshit rehta hai</td>
                  <td className="py-2 px-4 text-emerald-600 dark:text-emerald-400">Structure surakshit rehta hai</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-medium text-slate-900 dark:text-slate-100">WHERE Clause</td>
                  <td className="py-2 px-4">Nahi use ho sakta</td>
                  <td className="py-2 px-4">Nahi use ho sakta</td>
                  <td className="py-2 px-4 font-bold text-brand-600 dark:text-brand-400">WHERE clause supported hai</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-medium text-slate-900 dark:text-slate-100">Rollback</td>
                  <td className="py-2 px-4">Cannot rollback</td>
                  <td className="py-2 px-4">Cannot rollback</td>
                  <td className="py-2 px-4 text-emerald-600 dark:text-emerald-400">Rollback possible hai (Transactions)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5.3 DATA MANIPULATION COMMANDS (DML) */}
      {/* ========================================================= */}
      <section id="sec-5-3" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Data Manipulation Commands (DML)
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (डेटा हेरफेर कमांड्स: इन्सर्ट, अपडेट एवं डिलीट)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          DML commands table ke andar data records ko modify karne ke liye use hote hain:
        </p>

        <div className="space-y-4 my-6 text-sm">
          {/* INSERT */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">1. INSERT INTO</h4>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-2">Table mein naye records daalne ke liye:</p>
            <div className="p-3 rounded-lg bg-slate-900 text-brand-300 font-mono text-xs overflow-x-auto space-y-1">
              <div>INSERT INTO Student (Roll_No, Name, Branch, Marks)</div>
              <div>VALUES (101, 'Aman Verma', 'CSE', 85.50);</div>
            </div>
          </div>

          {/* UPDATE */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">2. UPDATE</h4>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-2">Existing records ko modify karne ke liye (WHERE zaroor lagayein):</p>
            <div className="p-3 rounded-lg bg-slate-900 text-brand-300 font-mono text-xs overflow-x-auto space-y-1">
              <div>UPDATE Student</div>
              <div>SET Marks = 92.00, Branch = 'IT'</div>
              <div>WHERE Roll_No = 101;</div>
            </div>
          </div>

          {/* DELETE */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">3. DELETE FROM</h4>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-2">Specific records ko delete karne ke liye:</p>
            <div className="p-3 rounded-lg bg-slate-900 text-brand-300 font-mono text-xs overflow-x-auto space-y-1">
              <div>DELETE FROM Student</div>
              <div>WHERE Roll_No = 101;</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5.4 DATA RETRIEVAL COMMANDS (DQL/SELECT) */}
      {/* ========================================================= */}
      <section id="sec-5-4" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.4
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Data Retrieval Commands (DQL: SELECT Statement)
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (डेटा पुनर्प्राप्ति कमांड्स: सिलेक्ट क्वेरी एवं क्लॉज़)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Database se data fetch karne ke liye <code>SELECT</code> command ka use kiya jata hai:
        </p>

        {/* Master SELECT Syntax Structure */}
        <div className="my-6 p-4 rounded-xl border border-brand-500/30 bg-slate-900 text-xs sm:text-sm font-mono text-brand-300 space-y-1">
          <div className="text-slate-400 text-xs font-sans mb-1">Standard SQL Query Anatomy:</div>
          <div>SELECT column1, column2, AGGREGATE_FUNCTION(column3)</div>
          <div>FROM Table_Name</div>
          <div>WHERE filter_conditions</div>
          <div>GROUP BY grouping_column</div>
          <div>HAVING aggregate_filter_condition</div>
          <div>ORDER BY sort_column ASC|DESC;</div>
        </div>

        {/* Aggregate Functions List */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-4 text-center font-mono text-xs">
          <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold">COUNT()</div>
          <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold">SUM()</div>
          <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold">AVG()</div>
          <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold">MIN()</div>
          <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold">MAX()</div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5.5 TYPES OF OPERATORS */}
      {/* ========================================================= */}
      <section id="sec-5-5" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.5
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Types of Operators in MySQL
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (मायएसक्यूएल ऑपरेटर्स: अंकगणितीय, तुलनात्मक एवं तार्किक)
          </div>
        </div>

        <div className="space-y-6 my-6 text-sm">
          {/* Arithmetic */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-brand-600 dark:text-brand-400 text-base mb-2">1. Arithmetic Operators (अंकगणितीय)</h4>
            <div className="p-2 rounded bg-white dark:bg-slate-800/80 font-mono text-xs space-y-1">
              <div><code>+</code> (Addition), <code>-</code> (Subtraction), <code>*</code> (Multiplication), <code>/</code> (Division), <code>%</code> (Modulus)</div>
              <div className="text-slate-500 dark:text-slate-400 pt-1">Example: SELECT Name, Salary, (Salary * 1.10) AS Incremented_Salary FROM Employee;</div>
            </div>
          </div>

          {/* Comparison */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-emerald-600 dark:text-emerald-400 text-base mb-2">2. Comparison Operators (तुलनात्मक)</h4>
            <div className="p-2 rounded bg-white dark:bg-slate-800/80 font-mono text-xs space-y-1">
              <div><code>=</code> (Equal to), <code>!=</code> ya <code>&lt;&gt;</code> (Not Equal to), <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code></div>
              <div className="text-slate-500 dark:text-slate-400 pt-1">Example: SELECT * FROM Student WHERE Marks &gt;= 75;</div>
            </div>
          </div>

          {/* Logical */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-purple-600 dark:text-purple-400 text-base mb-2">3. Logical & Special Operators (तार्किक एवं विशेष)</h4>
            <div className="p-2 rounded bg-white dark:bg-slate-800/80 font-mono text-xs space-y-2">
              <div>• <code>AND</code>: Dono conditions true honi chahiye.</div>
              <div>• <code>OR</code>: Koi ek condition true honi chahiye.</div>
              <div>• <code>NOT</code>: Condition ko reverse (ulat) karta hai.</div>
              <div>• <code>BETWEEN ... AND</code>: Range check karta hai (e.g. <code>WHERE Marks BETWEEN 60 AND 90</code>).</div>
              <div>• <code>IN(...)</code>: Multiple values ki list se match karta hai (e.g. <code>WHERE Branch IN ('CSE', 'IT')</code>).</div>
              <div>• <code>LIKE</code>: Pattern matching (Wildcards: <code>%</code> = multiple chars, <code>_</code> = single char). E.g. <code>WHERE Name LIKE 'A%'</code> (starts with A).</div>
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
                <p className="font-semibold text-slate-900 dark:text-slate-100">Which wildcard in SQL represents exactly one character?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5 font-bold">Ans: Underscore ( _ ).</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Is TRUNCATE a DDL or DML command?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5 font-bold">Ans: DDL (Data Definition Language).</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">What is the default sorting order of ORDER BY clause?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5 font-bold">Ans: Ascending (ASC).</p>
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
                <p className="font-semibold text-slate-900 dark:text-slate-100">Differentiate between CHAR and VARCHAR in MySQL.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: CHAR has a fixed storage length and pads spaces for shorter strings. VARCHAR dynamically stores only the characters entered, saving significant storage space.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">What is the difference between WHERE clause and HAVING clause?</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: WHERE filters individual records before grouping. HAVING filters grouped rows after the GROUP BY clause and can use aggregate functions (e.g. HAVING COUNT(*) &gt; 5).</p>
              </li>
            </ol>
          </div>

          {/* 5 Mark Questions */}
          <div className="p-5 rounded-xl border border-brand-500/20 bg-brand-500/[0.02] dark:bg-brand-500/[0.04]">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-brand-500/20">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20">
                5 MARKS QUESTIONS
              </span>
              <span className="text-xs text-slate-400 font-mono">Queries & Command Syntax</span>
            </div>
            <ol className="list-decimal list-outside pl-5 space-y-4 text-sm text-slate-800 dark:text-slate-200">
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Explain DDL and DML commands with their syntax and clear examples.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Provide exact SQL statements for CREATE TABLE, ALTER TABLE, DROP TABLE (DDL) and INSERT INTO, UPDATE, DELETE FROM (DML). Highlight that DDL changes structure while DML changes data.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Differentiate between DROP, TRUNCATE, and DELETE commands in SQL.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Provide the comparative table covering command category (DDL vs DML), structure removal, WHERE clause support, execution speed, and transaction rollback capability.</p>
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
              <li><strong>DDL:</strong> CREATE, ALTER, DROP, TRUNCATE, RENAME (Auto-commit, schema-level).</li>
              <li><strong>DML:</strong> INSERT, UPDATE, DELETE (Data instance level, rollback possible).</li>
              <li><strong>DQL:</strong> SELECT (Query and fetch).</li>
              <li><strong>CHAR vs VARCHAR:</strong> CHAR is fixed-length; VARCHAR is dynamic variable-length.</li>
              <li><strong>DROP:</strong> Deletes table structure + data.</li>
              <li><strong>TRUNCATE:</strong> Deletes all data fast, keeps structure.</li>
              <li><strong>DELETE:</strong> Deletes specific rows using WHERE.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
};

export default DbmsUnit5Content;
