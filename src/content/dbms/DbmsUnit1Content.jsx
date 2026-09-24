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
  Database,
  Layers,
  Table,
  Cpu,
  ShieldCheck,
  Server,
  UserCheck,
  FileSpreadsheet,
} from 'lucide-react';

export const DbmsUnit1Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* ========================================================= */}
      {/* CHAPTER TITLEPLATE / HERO HEADER */}
      {/* ========================================================= */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 01</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Database Management System (DBMS)
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Syllabus: 6 Periods</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 font-medium border border-amber-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Weightage: 8–10 Marks</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Introduction to DBMS & Architecture
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (डेटाबेस सिस्टम की मूल अवधारणाएं एवं आर्किटेक्चर)
          </p>
        </div>

        {/* Syllabus Topics Chip Bar */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Database System Concepts & Architecture</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Components of DBMS</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Table Structure (Tuples, Attributes, Degree, Cardinality)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Schema Definition</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Three Views of Data (External, Conceptual, Internal)</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Modern computing world mein data sabse bada asset hai. Banking systems, railway reservations, college portals se lekar social media tak, har jagah massive amount of data ko reliably store, update aur retrieve karne ke liye Database Management System (DBMS) ki zaroorat hoti hai. Is unit mein hum database system ke basic concepts, traditional file system ki kamiyan, DBMS architecture, components, relational table structure aur ANSI-SPARC 3-tier architecture ko Hinglish mein deeply samjhenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 1.1 DATABASE SYSTEM CONCEPTS AND ARCHITECTURE */}
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
            Database System Concepts and Architecture
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (डेटाबेस सिस्टम की मूल अवधारणाएं एवं आर्किटेक्चर)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-5">
          Sabse pehle samajhte hain ki Data aur Information mein kya antar hai:
        </p>

        {/* Data vs Information Definition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-sm mb-2">
              <Database className="w-4 h-4" />
              <span>Data (कच्चे तथ्य)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Data raw facts, unorganized figures aur symbols ka collection hota hai jiska apna koi specific meaning nahi hota (jaise: <code>"Amit", 21, 95</code>).
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Information (सूचना)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Jab raw data ko process aur format karke meaningful aur decision-making banane layak bana diya jaye, to use Information kehte hain (jaise: <em>"Student Amit ki age 21 hai aur uske marks 95% hain."</em>).
            </p>
          </div>
        </div>

        {/* Database Definition Placard */}
        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Definition • Database</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A database is an organized collection of logically related, persistent data stored in an electronic format so that it can be easily accessed, managed, and updated."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Aapas mein related data ka ek vyavasthit (organized) bhandaar jise computer system mein electronic roop se store kiya jata hai taaki jab chahein tab fast aur accurate access mil sake.
            </span>
          </div>
        </div>

        {/* DBMS Definition Placard */}
        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Definition • DBMS (Database Management System)</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A DBMS is a specialized software package designed to define, manipulate, retrieve, and manage data in a database while ensuring data security, integrity, and concurrency."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> DBMS ek system software hai jo user aur physical database ke beech ek interface ki tarah kaam karta hai (jaise MySQL, Oracle, PostgreSQL, MS Access).
            </span>
          </div>
        </div>

        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          Traditional File Processing System vs DBMS
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          DBMS aane se pehle data ko OS files (.txt, .dat, .csv) mein store kiya jata tha. Is purani approach mein bahut saari gambheer samasyayein thi:
        </p>

        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 pl-5">
          <li><strong>Data Redundancy (डेटा दोहराव):</strong> Ek hi student ki details Library file mein bhi store hoti thi, Accounts file mein bhi aur Hostel file mein bhi. Memory waste hoti thi.</li>
          <li><strong>Data Inconsistency (डेटा असंगति):</strong> Agar student ne phone number change karwaya aur Library file update ho gayi par Accounts update nahi hui, to data mismatched ho jata hai.</li>
          <li><strong>Difficulty in Accessing Data:</strong> Naye report format ke liye naya C/C++ program likhna padta tha. Direct query search sambhav nahi thi.</li>
          <li><strong>Data Isolation:</strong> Data alag-alag formats mein alag files mein bikhra rehta tha.</li>
          <li><strong>Concurrent Access Anomalies:</strong> Agar do log ek saath railway reservation file update karein, to file corrupt ho jaati thi.</li>
          <li><strong>Lack of Security & Integrity:</strong> Sensitive data (jaise salary/passwords) ko granular level par restrict nahi kiya ja sakta tha.</li>
        </ul>

        {/* Academic Comparison Table: File System vs DBMS */}
        <div className="my-6">
          <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>Table 1.1 • File Processing System vs Database Management System</span>
            <span className="text-[10px] md:hidden">↔ Swipe horizontally</span>
          </div>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs">
            <table className="w-full text-left border-collapse text-sm min-w-[560px]">
              <thead>
                <tr className="bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold">
                  <th className="py-3 px-4">Parameter</th>
                  <th className="py-3 px-4">File Processing System</th>
                  <th className="py-3 px-4 text-brand-600 dark:text-brand-400 font-bold">DBMS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70 text-slate-700 dark:text-slate-300">
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2.5 px-4 font-medium text-slate-900 dark:text-slate-100">Data Redundancy</td>
                  <td className="py-2.5 px-4">Zyada redundancy aur duplication hota hai</td>
                  <td className="py-2.5 px-4 font-semibold text-emerald-600 dark:text-emerald-400">Controlled aur minimum redundancy hoti hai</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2.5 px-4 font-medium text-slate-900 dark:text-slate-100">Data Consistency</td>
                  <td className="py-2.5 px-4">Inconsistent data ki sambhavna bahut high hoti hai</td>
                  <td className="py-2.5 px-4 font-semibold text-emerald-600 dark:text-emerald-400">Strict consistency ensure hoti hai</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2.5 px-4 font-medium text-slate-900 dark:text-slate-100">Query Handling</td>
                  <td className="py-2.5 px-4">Koi standard query language nahi hoti</td>
                  <td className="py-2.5 px-4">Powerful declarative query language (SQL) hoti hai</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2.5 px-4 font-medium text-slate-900 dark:text-slate-100">Concurrency Control</td>
                  <td className="py-2.5 px-4">Multiple users ek saath access nahi kar sakte safely</td>
                  <td className="py-2.5 px-4">Concurrent multi-user transactions safely supported hote hain</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2.5 px-4 font-medium text-slate-900 dark:text-slate-100">Crash Recovery</td>
                  <td className="py-2.5 px-4">Crash hone par data loss ka khatra rehta hai</td>
                  <td className="py-2.5 px-4">Automatic backup aur log-based recovery hoti hai</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* DBMS Architecture (1-tier, 2-tier, 3-tier) */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          DBMS Architecture Tiers (1-Tier, 2-Tier, 3-Tier)
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          DBMS architecture yeh define karta hai ki database software, application logic aur end user physical environment mein kaise connect hote hain:
        </p>

        {/* EDUCATIONAL ARCHITECTURE DIAGRAM */}
        <div className="my-7 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/50 space-y-6">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 text-center">
            Educational Diagram 1.1 • Tier-Based DBMS Architecture Models
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            {/* 1-Tier */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 text-center flex flex-col justify-between">
              <div>
                <span className="font-bold text-brand-600 dark:text-brand-400 block mb-1">1-Tier Architecture</span>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] mb-3">Client + Application + DB sabhi ek hi local machine par hote hain.</p>
              </div>
              <div className="py-3 px-2 rounded-lg bg-brand-500/10 border border-brand-500/20 font-mono text-[11px] text-brand-700 dark:text-brand-300">
                [ User + App + DB ]<br />(Single PC / Standalone)
              </div>
              <span className="text-[10px] text-slate-400 mt-2 block">Example: Local MS Access / SQLite</span>
            </div>

            {/* 2-Tier */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 text-center flex flex-col justify-between">
              <div>
                <span className="font-bold text-brand-600 dark:text-brand-400 block mb-1">2-Tier (Client-Server)</span>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] mb-3">Client machine par UI & App logic, Server par DBMS database hota hai.</p>
              </div>
              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="p-2 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">Client (App & UI)</div>
                <div className="text-slate-400">↕ JDBC / ODBC Connection</div>
                <div className="p-2 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 font-bold">Database Server</div>
              </div>
              <span className="text-[10px] text-slate-400 mt-2 block">Example: Bank Cashier Terminal</span>
            </div>

            {/* 3-Tier */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 text-center flex flex-col justify-between">
              <div>
                <span className="font-bold text-brand-600 dark:text-brand-400 block mb-1">3-Tier Architecture ★</span>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] mb-3">End User, Application Server aur Database Server poori tarah separate hote hain.</p>
              </div>
              <div className="space-y-1 font-mono text-[11px]">
                <div className="p-1.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">Client (Web Browser)</div>
                <div className="text-slate-400">↕ HTTP/HTTPS</div>
                <div className="p-1.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">Application Server</div>
                <div className="text-slate-400">↕ Database Driver</div>
                <div className="p-1.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 font-bold">Database Server</div>
              </div>
              <span className="text-[10px] text-slate-400 mt-2 block">Example: Modern Web Applications</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.2 COMPONENTS OF DBMS */}
      {/* ========================================================= */}
      <section id="sec-1-2" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Components of DBMS
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (DBMS के प्रमुख घटक)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          Database Management System paanch (5) pramukh components se milkar banta hai:
        </p>

        <div className="space-y-4 my-6">
          {/* Component 1: Hardware */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 flex items-center gap-2">
              <Server className="w-4 h-4 text-brand-500" />
              <span>1. Hardware (हार्डवेयर)</span>
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Physical electronic devices jahan data physically reside karta hai aur process hota hai. Isme server CPUs, main memory (RAM), secondary storage (Hard Disks, SSDs), storage controllers aur networking hardware shaamil hain.
            </p>
          </div>

          {/* Component 2: Software */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-brand-500" />
              <span>2. Software (सॉफ्टवेयर)</span>
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Programs ka set jo database ko access aur control karta hai. Isme Operating System, actual DBMS engine software (jaise Oracle, MySQL), network communication software aur application programs aate hain.
            </p>
          </div>

          {/* Component 3: Data */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 flex items-center gap-2">
              <Database className="w-4 h-4 text-brand-500" />
              <span>3. Data & Metadata (डेटा एवं मेटाडेटा)</span>
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              DBMS ka sabse mahatvapoorna bhaag. Isme do prakar ka data hota hai: (a) <strong>User Data</strong> (records of customers, students), aur (b) <strong>Metadata</strong> (Data about data - yaani tables ke names, column types, constraints, index information jise <em>Data Dictionary</em> mein rakha jata hai).
            </p>
          </div>

          {/* Component 4: Procedures */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-500" />
              <span>4. Procedures & Rules (नियम एवं प्रक्रियाएं)</span>
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Ve instructions aur rules jo database ke design aur usage ko govern karte hain (jaise: login rules, daily backup procedures, disaster recovery protocols, auditing guidelines).
            </p>
          </div>

          {/* Component 5: Users */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-brand-500" />
              <span>5. Database Users (उपयोगकर्ता)</span>
            </h4>
            <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed space-y-1 mt-2">
              <div>• <strong>DBA (Database Administrator):</strong> Pura database system manage karne wala superuser (schema design, security, privileges, performance tuning).</div>
              <div>• <strong>Application Programmers:</strong> Software developers jo SQL queries use karke front-end apps (Java, Python, PHP, C#) banate hain.</div>
              <div>• <strong>Sophisticated / Casual Users:</strong> Analysts jo business insights ke liye ad-hoc SQL queries run karte hain.</div>
              <div>• <strong>Naive / End Users:</strong> Aam log jo mobile apps/websites par click karke database use karte hain bina technical knowledge ke (jaise ATM user ya online shopping customer).</div>
            </div>
          </div>
        </div>

        {/* Internal Engine Modules Highlight */}
        <div className="my-6 pl-4 border-l-[3.5px] border-amber-500 bg-amber-500/[0.06] py-3.5 pr-4 rounded-r-md text-sm">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-1">
            <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>EXAM NOTE • Internal DBMS Engine Structure</span>
          </div>
          <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
            DBMS software engine ke andar do mukhya modules hote hain:
            <strong> Query Processor</strong> (DDL interpreter, DML compiler, Query evaluation engine jo execution plan choose karta hai) aur <strong>Storage Manager</strong> (Buffer manager, File manager, Authorization & integrity manager, Transaction manager jo ACID properties ensure karta hai).
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.3 TABLE STRUCTURE */}
      {/* ========================================================= */}
      <section id="sec-1-3" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Table Structure in Relational DBMS
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (रिलेशनल मॉडल में टेबल की संरचना एवं शब्दावली)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Relational Database mein data 2-dimensional tables (jinhe mathematical terms mein <strong>Relation</strong> kehte hain) ke roop mein organize hota hai. Aaiye iski sabhi core terms ko ek worked example se samajhte hain:
        </p>

        {/* WORKED TEXTBOOK TABLE EXAMPLE */}
        <div className="my-6">
          <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>Worked Example • Relation: STUDENT</span>
            <span className="text-brand-600 dark:text-brand-400 font-bold">Degree = 4 | Cardinality = 4</span>
          </div>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs">
            <table className="w-full text-left border-collapse text-sm min-w-[500px]">
              <thead>
                <tr className="bg-brand-500/10 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-mono">
                  <th className="py-3 px-4 font-bold text-brand-600 dark:text-brand-400">Roll_No (PK)</th>
                  <th className="py-3 px-4 font-bold">Name</th>
                  <th className="py-3 px-4 font-bold">Branch</th>
                  <th className="py-3 px-4 font-bold">Semester</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70 font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                  <td className="py-2.5 px-4 font-bold text-brand-600 dark:text-brand-400">101</td>
                  <td className="py-2.5 px-4">Rahul Sharma</td>
                  <td className="py-2.5 px-4">CSE</td>
                  <td className="py-2.5 px-4">3</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                  <td className="py-2.5 px-4 font-bold text-brand-600 dark:text-brand-400">102</td>
                  <td className="py-2.5 px-4">Priya Verma</td>
                  <td className="py-2.5 px-4">IT</td>
                  <td className="py-2.5 px-4">3</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                  <td className="py-2.5 px-4 font-bold text-brand-600 dark:text-brand-400">103</td>
                  <td className="py-2.5 px-4">Aman Khan</td>
                  <td className="py-2.5 px-4">CSE</td>
                  <td className="py-2.5 px-4">3</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                  <td className="py-2.5 px-4 font-bold text-brand-600 dark:text-brand-400">104</td>
                  <td className="py-2.5 px-4">Neha Singh</td>
                  <td className="py-2.5 px-4">ECE</td>
                  <td className="py-2.5 px-4">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Relational Table Terminology Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 block mb-1">
              1. Tuple (टपल / Row)
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Table ki ek horizontal row ko <strong>Tuple</strong> ya record kehte hain. Upar table mein 4 tuples hain (ek tuple ek complete student entity ko represent karta hai).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 block mb-1">
              2. Attribute (एट्रीब्यूट / Column)
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Table ke vertical column ko <strong>Attribute</strong> ya field kehte hain. Upar table mein 4 attributes hain: <code>Roll_No, Name, Branch, Semester</code>.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 block mb-1">
              3. Degree (डिग्री)
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Kisi relation mein total number of attributes (columns) ko us relation ki <strong>Degree</strong> kehte hain. Yahan <code>Degree = 4</code>.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 block mb-1">
              4. Cardinality (कार्डिनैलिटी)
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Kisi relation mein total number of tuples (rows) ko us relation ki <strong>Cardinality</strong> kehte hain. Yahan <code>Cardinality = 4</code>.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 col-span-1 sm:col-span-2">
            <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 block mb-1">
              5. Domain (डोमेन)
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Kisi attribute ke liye permissible atomic values ka set uska <strong>Domain</strong> kehlata hai. Jaise <code>Semester</code> ka domain <code>&#123;1, 2, 3, 4, 5, 6&#125;</code> hai; isme koi 15 ya ABC input nahi kar sakta.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.4 SCHEMA DEFINITION AND DATA INDEPENDENCE */}
      {/* ========================================================= */}
      <section id="sec-1-4" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.4
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Schema Definition & Data Independence
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (स्कीमा की परिभाषा एवं डेटा स्वतंत्रता)
          </div>
        </div>

        {/* Schema Definition Placard */}
        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Definition • Schema vs Instance</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A Database Schema is the overall structural blueprint and design of the database (rarely modified), whereas a Database Instance is the actual data populated in the database at a specific moment in time (frequently changing)."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Real-Life Analogy:</strong> Ek makaan ka <em>Architectural Blueprint</em> uska Schema hai (jo ek baar banta hai), aur makaan ke andar rehne wale log aur furniture uska <em>Instance</em> hain (jo samay ke saath badalte rehte hain).
            </span>
          </div>
        </div>

        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          Concept of Data Independence (डेटा स्वतंत्रता)
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Data Independence ka matlab hai kisi ek level ke schema ko modify karne par uske agle higher level ke schema aur application programs ko bina modify kiye chalana. Data Independence do prakar ki hoti hai:
        </p>

        {/* Comparison Table: Logical vs Physical Data Independence */}
        <div className="my-6">
          <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>Table 1.2 • Logical vs Physical Data Independence</span>
            <span className="text-[10px] md:hidden">↔ Swipe horizontally</span>
          </div>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs">
            <table className="w-full text-left border-collapse text-sm min-w-[560px]">
              <thead>
                <tr className="bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold">
                  <th className="py-3 px-4">Parameter</th>
                  <th className="py-3 px-4 text-brand-600 dark:text-brand-400">Logical Data Independence</th>
                  <th className="py-3 px-4 text-emerald-600 dark:text-emerald-400">Physical Data Independence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70 text-slate-700 dark:text-slate-300">
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2.5 px-4 font-medium text-slate-900 dark:text-slate-100">Definition</td>
                  <td className="py-2.5 px-4">Conceptual schema ko badalne par External schema / User views par koi asar na padna</td>
                  <td className="py-2.5 px-4">Internal/Physical storage structure badalne par Conceptual schema par koi asar na padna</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2.5 px-4 font-medium text-slate-900 dark:text-slate-100">Location</td>
                  <td className="py-2.5 px-4 font-mono text-xs">External Level aur Conceptual Level ke beech</td>
                  <td className="py-2.5 px-4 font-mono text-xs">Conceptual Level aur Internal Level ke beech</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2.5 px-4 font-medium text-slate-900 dark:text-slate-100">Typical Example</td>
                  <td className="py-2.5 px-4">Table mein naya column add karna ya do tables ko merge karna</td>
                  <td className="py-2.5 px-4">Hard disk change karna, B-Tree index lagana, compression use karna</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2.5 px-4 font-medium text-slate-900 dark:text-slate-100">Complexity</td>
                  <td className="py-2.5 px-4 font-semibold text-amber-600 dark:text-amber-400">Achieve karna kafi difficult hota hai</td>
                  <td className="py-2.5 px-4 font-semibold text-emerald-600 dark:text-emerald-400">Aasani se achieve ho jata hai</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.5 THREE VIEWS OF DATA */}
      {/* ========================================================= */}
      <section id="sec-1-5" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.5
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Three Views of Data (ANSI-SPARC Architecture)
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (डेटा के तीन स्तर: बाहरी, वैचारिक एवं आंतरिक व्यू)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          1975 mein ANSI-SPARC committee ne DBMS ke liye 3-level architecture prastut kiya tha jiska main objective users ko physical storage details se alag (abstract) rakhna tha:
        </p>

        {/* EDUCATIONAL 3-LEVEL ARCHITECTURE DIAGRAM */}
        <div className="my-8 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/50 space-y-4">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 text-center">
            Educational Diagram 1.2 • ANSI-SPARC Three-Level Architecture
          </div>

          <div className="max-w-xl mx-auto space-y-3 font-mono text-xs text-center">
            {/* External Views */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20">
                External View 1<br /><span className="text-[10px] font-sans text-slate-500">(Student View)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20">
                External View 2<br /><span className="text-[10px] font-sans text-slate-500">(Faculty View)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20">
                External View 3<br /><span className="text-[10px] font-sans text-slate-500">(Accounts View)</span>
              </div>
            </div>

            <div className="text-slate-400 text-[11px] py-1">
              ↕ External / Conceptual Mapping (Logical Data Independence)
            </div>

            {/* Conceptual Level */}
            <div className="p-4 rounded-xl bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 font-bold text-sm">
              CONCEPTUAL LEVEL (Logical View)
              <div className="text-[11px] font-sans font-normal text-slate-600 dark:text-slate-400 mt-1">
                Defines all entities, attributes, relationships, security rules & constraints.
              </div>
            </div>

            <div className="text-slate-400 text-[11px] py-1">
              ↕ Conceptual / Internal Mapping (Physical Data Independence)
            </div>

            {/* Internal Level */}
            <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-bold text-sm">
              INTERNAL LEVEL (Physical View)
              <div className="text-[11px] font-sans font-normal text-slate-600 dark:text-slate-400 mt-1">
                Data layout on disk, byte allocation, record indexing, hashing & compression.
              </div>
            </div>

            <div className="text-slate-400 text-[11px] py-1">
              ↕ Operating System Device Drivers
            </div>

            {/* Physical Storage */}
            <div className="p-3 rounded-lg bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold">
              PHYSICAL DATABASE (Hard Disk / SSD Storage)
            </div>
          </div>
        </div>

        {/* Detailed Explanation of Three Views */}
        <div className="space-y-6 my-6">
          {/* View 1 */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
                LEVEL 1
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                1. External View / View Level (बाहरी स्तर)
              </h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-2">
              Yeh user ke sabse kareeb ka level hota hai. Har user ko pura database dekhne ki permission ya zaroorat nahi hoti. Is level par alag-alag users ke liye custom <strong>Views (Sub-schemas)</strong> banaye jaate hain:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>College portal par ek <strong>Student</strong> sirf apna attendance aur result dekh sakta hai (uske paas faculty salary ka view nahi hota).</li>
              <li><strong>Accounts Clerk</strong> ko fees aur dues ka view milta hai par exam marks modify karne ka view nahi milta.</li>
              <li>Yeh level data security aur simplicity dono badhata hai.</li>
            </ul>
          </div>

          {/* View 2 */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20">
                LEVEL 2
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                2. Conceptual View / Logical Level (वैचारिक स्तर)
              </h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-2">
              Yeh database ka middle level hai jo define karta hai ki <strong>"Database mein kya data store hai aur data ke aapas mein kya relationships hain"</strong>:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>Pura organization-wide logical view yahi hota hai (sab entities, attributes, data types aur integrity constraints jaise Primary Key, Foreign Key).</li>
              <li>Is level ko Database Administrators (DBA) aur Database Designers manage karte hain.</li>
              <li>Isko physical storage ki internal working se koi matlab nahi hota.</li>
            </ul>
          </div>

          {/* View 3 */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                LEVEL 3
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                3. Internal View / Physical Level (आंतरिक स्तर)
              </h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-2">
              Yeh sabse lowest level hai jo describe karta hai ki <strong>"Data physically storage devices (Hard Disk/SSD) par kaise store hai"</strong>:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>Data records ka byte length, memory allocation aur data compression techniques.</li>
              <li>File organization (Sequential, Direct/Indexed, Hashing).</li>
              <li>Access paths aur search optimization ke liye B-Trees aur B+ Trees indexing structure.</li>
            </ul>
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
                <p className="font-semibold text-slate-900 dark:text-slate-100">Define Degree and Cardinality of a relation.</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5">Ans: Degree = Total number of attributes (columns). Cardinality = Total number of tuples (rows).</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">What is Metadata?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5">Ans: Data about data (stored inside Data Dictionary, e.g. schema, column types, permissions).</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Who is a DBA?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5">Ans: Database Administrator, responsible for design, security, privileges, maintenance, and backup.</p>
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
                <p className="font-semibold text-slate-900 dark:text-slate-100">Differentiate between File Processing System and DBMS.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: File systems suffer from data redundancy, inconsistency, and lack of concurrent multi-user support, whereas DBMS provides centralized control, SQL querying, consistency, and ACID security.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Explain the difference between Physical and Logical Data Independence.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Physical data independence allows changing physical storage without changing conceptual schema. Logical data independence allows altering conceptual schema without breaking user views and application code.</p>
              </li>
            </ol>
          </div>

          {/* 5 Mark Questions */}
          <div className="p-5 rounded-xl border border-brand-500/20 bg-brand-500/[0.02] dark:bg-brand-500/[0.04]">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-brand-500/20">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20">
                5 MARKS QUESTIONS
              </span>
              <span className="text-xs text-slate-400 font-mono">Long Explanations</span>
            </div>
            <ol className="list-decimal list-outside pl-5 space-y-4 text-sm text-slate-800 dark:text-slate-200">
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Explain the Three-Level ANSI-SPARC Architecture of DBMS with a neat diagram.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Draw the 3-level diagram showing External View, Conceptual View, and Internal View. Detail how mappings provide data abstraction and explain the role of each layer in shielding end-users from physical disk layout.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Describe the major components of a Database Management System.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Detail Hardware, Software, Data (User Data & Data Dictionary), Procedures, and Users (DBA, Application Programmers, Naive Users), along with Query Processor and Storage Manager internal components.</p>
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
              <li><strong>DBMS:</strong> Software that defines, manipulates, and manages structured electronic data.</li>
              <li><strong>Three Views:</strong> External (User View), Conceptual (Logical View), Internal (Physical Storage View).</li>
              <li><strong>Degree:</strong> Number of Columns (Attributes).</li>
              <li><strong>Cardinality:</strong> Number of Rows (Tuples).</li>
              <li><strong>Schema vs Instance:</strong> Schema is the static structure design; Instance is the live data at any moment.</li>
              <li><strong>Data Independence:</strong> Ability to alter lower-level schema without modifying higher-level schema.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
};

export default DbmsUnit1Content;
