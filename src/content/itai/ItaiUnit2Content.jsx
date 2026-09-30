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
  Layers,
  Monitor,
  FolderTree,
  FileSpreadsheet,
  FileText,
  Sliders,
  Cloud,
  HardDrive,
  ShieldCheck,
  Cpu,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const ItaiUnit2Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* HEADER / TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 02</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Introduction to IT and AI (Semester 1)
          </span>
          <span className="text-slate-400">•</span>
          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>10 Periods / Exam Weightage: 10-12 Marks</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Operating System and Application Software
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Software Classification (System vs App)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Language Translators (Compiler vs Interpreter)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">OS Functions & Windows GUI</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Microsoft Office (Word, Excel, PowerPoint)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Google Workspace & Cloud Collaboration</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Computer hardware bina instructions ke lifeless physical box hota hai. Is unit me hum samjhenge ki kaise Operating System hardware resources ko manage karta hai aur Application Suites (MS Office & Google Workspace) modern professional workflows ko streamline karte hain.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 2.1 Software Classification */}
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
            2.1. Software Classification: System, Application & Translators
          </h2>
        </div>

        {/* Definition Placard */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 p-2 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 text-base">
                Software kya hota hai?
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <strong>Software</strong> programs, procedures, aur data ka ek collection hai jo computer hardware ko batata hai ki kya kaam karna hai aur kaise karna hai. Hardware aur Software ek hi gaadi ke do pahiye hain — hardware physical body hai aur software uski aatma (soul) hai.
              </p>
            </div>
          </div>
        </div>

        {/* Software Classification Hierarchy */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Major Classification: System Software vs Application Software</span>
        </h3>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* System Software */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-base text-primary">1. System Software</h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">Hardware Manager</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Wo software jo computer ke internal operations, memory, CPU aur connected peripherals ko directly control aur maintain karta hai:
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
              <li><strong>Operating System:</strong> Windows, Linux, Android (core platform).</li>
              <li><strong>Device Drivers:</strong> Hardware components (printer, graphics card, webcam) ko OS se baat karwane wale translator programs.</li>
              <li><strong>Utility Software:</strong> System maintenance tools — jaise Antivirus software, Disk Defragmenter, Backup utilities aur WinRAR/ZIP tools.</li>
            </ul>
          </div>

          {/* Application Software */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-base text-emerald-600 dark:text-emerald-400">2. Application Software</h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">End-User Task Solver</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Wo software jo end-user ke specific tasks (jaise document likhna, accounts maintain karna, video dekhna) ko poora karne ke liye banaye jate hain:
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
              <li><strong>General Purpose:</strong> MS Office, Adobe Acrobat, VLC Media Player, Google Chrome browser (har koi use kar sakta hai).</li>
              <li><strong>Customized / Special Purpose:</strong> Kisi specific organization ke liye tailor-made banaye gaye software — jaise Railway Reservation System (IRCTC), College Fee Management, Banking Core Software (TCS BaNCS).</li>
            </ul>
          </div>
        </div>

        {/* Language Translators: Assembler, Compiler, Interpreter */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Language Translators (Compiler vs Interpreter vs Assembler)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
          Computer hardware sirf binary language (0s aur 1s) samajhta hai. Programmers human-readable High-Level Languages (C, C++, Java, Python) me code likhte hain. Source code ko binary machine code me badalne ke liye <strong>Language Translators</strong> use hote hain:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Feature</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Compiler</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Interpreter</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Assembler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Translation Method</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Poore program ko ek hi baar me scan karke machine code me translate karta hai</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Source code ko line-by-line translate karta hai aur turant execute karta hai</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Assembly language mnemonics (ADD, MOV) ko machine code me badalta hai</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Error Reporting</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Compilation ke baad saari syntax errors ki complete list ek sath deta hai</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Pehli error aate hi execution rok deta hai; error theek hone tak aage nahi badhta</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Assembly syntax errors ko translate karte samay flag karta hai</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Execution Speed</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Fast (.exe direct run hoti hai)</td>
                <td className="p-3 text-amber-600 dark:text-amber-400 font-bold">Slow (har baar line-by-line interpretation)</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Very fast (hardware close mapping)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Example Languages</td>
                <td className="p-3 text-slate-700 dark:text-slate-300 font-mono">C, C++, Rust, Go</td>
                <td className="p-3 text-slate-700 dark:text-slate-300 font-mono">Python, JavaScript, PHP</td>
                <td className="p-3 text-slate-700 dark:text-slate-300 font-mono">8085 / 8086 Assembly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2.2 Operating System and Windows Basics */}
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
            2.2. Operating System Functions and Windows GUI Basics
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
          <strong>Operating System (OS)</strong> ek master system software hai jo computer ke hardware aur user/application programs ke beech ek bridge (interface) ka kaam karta hai. Bina OS ke user computer ke circuits ko commands nahi de sakta.
        </p>

        {/* Embedded Figure: OS Placement */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Operating_system_placement.svg/640px-Operating_system_placement.svg.png"
          alt="Operating system position diagram showing Users at top, Applications in middle, Operating System managing hardware at the core"
          caption="Figure 2.1: Operating System as the Bridge between Users, Applications, and Computer Hardware"
          source="Wikimedia Commons"
          maxWidth="max-w-md"
          fallback={
            <div className="p-4 rounded-lg bg-card text-center text-xs font-mono border border-border">
              <div className="font-bold text-primary mb-2">OS Architecture Layer</div>
              <div>[ Users ] ──► [ Applications (Word, Browser) ] ──► [ Operating System ] ──► [ Hardware (CPU, RAM, Disks) ]</div>
            </div>
          }
        />

        {/* 5 Core Functions of OS */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Core Functions of Operating System (Exam 5-Marks Guarantee)</span>
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-1">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5 text-primary">
              <Cpu className="w-4 h-4" />
              1. Process Management
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Multiple programs jab ek sath chalte hain to CPU time ko unke beech divide karna (CPU Scheduling - Round Robin, FCFS) aur deadlock prevent karna.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-1">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <HardDrive className="w-4 h-4" />
              2. Memory Management
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Har running program ko RAM ka space allocate karna aur program close hote hi use deallocate (free) karna. Virtual memory handle karna.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-1">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5 text-blue-500">
              <FolderTree className="w-4 h-4" />
              3. File Management
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Hard drive par files aur folders ko organized tree directory structure me store karna, read/write permissions dena (NTFS, FAT32).
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-1">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5 text-amber-500">
              <Sliders className="w-4 h-4" />
              4. Device Management
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Connected I/O devices (keyboard, printer, pen drive) ke data flow ko device drivers aur buffer queues ke through smoothly chalana.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-1">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5 text-purple-500">
              <ShieldCheck className="w-4 h-4" />
              5. Security & Protection
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              User authentication (passwords, PIN, biometrics) aur program isolation taaki ek virus dusre application ka data steal na kar sake.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-1">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5 text-rose-500">
              <Monitor className="w-4 h-4" />
              6. User Interface
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              User ko computer chalane ke liye Graphical User Interface (GUI - Windows) ya Command Line Interface (CLI - Linux terminal) provide karna.
            </p>
          </div>
        </div>

        {/* Windows Desktop Elements Breakdown */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Windows Desktop GUI Components (WIMP Model)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
          Modern Windows OS <strong>WIMP paradigm (Windows, Icons, Menus, Pointer)</strong> par chalta hai. Iske main components:
        </p>

        <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm mb-6">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">Desktop & Icons:</strong>
            Booting ke baad screen par dikhne wala primary workspace. Isme System icons (This PC, Recycle Bin, Network) aur user shortcuts hote hain.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">Taskbar:</strong>
            Screen ke bottom par horizontal strip jisme Start Button, search bar, open apps ke buttons, aur right corner me System Tray (Clock, Wi-Fi, Volume) hota hai.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">File Explorer (Win + E):</strong>
            Drives (C:, D:), folders aur files ko browse karne ke liye visual manager with address bar, search bar aur navigation pane.
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <strong className="text-slate-900 dark:text-white block font-bold mb-1">Control Panel / Settings:</strong>
            Hardware configuration, display resolution, network settings aur software install/uninstall karne ka administrative center.
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2.3 Application Suites: Office & Google Workspace */}
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
            2.3. Application Suites: Microsoft Office vs Google Workspace
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
          <strong>Office Productivity Suite</strong> related application programs ka ek bundle hota hai jo office tasks, documentation, data analysis aur professional presentations ko efficiently perform karne ke liye design kiya jata hai.
        </p>

        {/* MS Office Suite */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Core Microsoft Office Applications</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-3 mb-6">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-2">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
              <FileText className="w-4 h-4" />
              <span>Microsoft Word</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Word Processor:</strong> Reports, letters, resumes aur projects create karne ke liye.
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 list-disc list-inside space-y-0.5">
              <li>Font formatting, paragraph alignment, margins.</li>
              <li><strong>Mail Merge:</strong> Single letter ko saikdon alag-alag recipients ke naam par automatically generate karna.</li>
              <li>Tables, images, spell checker (F7), header & footer.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
              <FileSpreadsheet className="w-4 h-4" />
              <span>Microsoft Excel</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Spreadsheet:</strong> Grid of Rows (1, 2, 3...) aur Columns (A, B, C...) jiska intersection <strong>Cell</strong> kehlata hai (e.g. A1).
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 list-disc list-inside space-y-0.5">
              <li>Mathematical formulas (<code>=SUM(A1:A10)</code>, <code>=AVERAGE()</code>, <code>=IF()</code>).</li>
              <li>Charts & Graphs: Data visualization (Bar chart, Pie chart).</li>
              <li>Sorting, filtering, pivot tables financial analysis ke liye.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-2">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
              <Monitor className="w-4 h-4" />
              <span>Microsoft PowerPoint</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Presentation Software:</strong> Visual slides banakar seminars, business meetings aur lectures present karne ke liye.
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 list-disc list-inside space-y-0.5">
              <li>Slide transitions (slide change effects) aur custom animations.</li>
              <li>Slide Master, audio/video embeds, presenter notes.</li>
              <li>F5 shortcut key se full screen slideshow start hota hai.</li>
            </ul>
          </div>
        </div>

        {/* Google Workspace vs MS Office */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Cloud Productivity: Google Workspace (Docs, Sheets, Drive)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
          Google Workspace browser-based cloud suite hai. Iska sabse bada fayda yeh hai ki file local disk par save karne ki zaroorat nahi hoti, sabkuch <strong>Google Drive</strong> me real-time auto-save hota hai:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Feature</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Traditional Desktop Office (MS Office)</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Cloud Suite (Google Workspace)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Storage & Saving</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Local hard drive par manual Save (Ctrl + S) karna padta hai</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Cloud me continuous Real-Time Auto-Save hota hai</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Collaboration</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">File ko email ya pendrive se bhejkar alag-alag edit karna padta hai</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Multiple users ek hi document ko real-time me simultaneously edit kar sakte hain</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Internet Requirement</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Offline fully functional rehta hai</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Internet zaroori hai (offline mode cache support available)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Cross-Device Access</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Sirf usi device par jisme file saved ho</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Mobile, tablet, laptop kisi bhi browser se Gmail login karke access ho jata hai</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Yaad Rakho Box */}
        <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block text-sm mb-1 text-emerald-800 dark:text-emerald-300">Exam Point (याद रखो):</strong>
            Compiler aur Interpreter ka difference, aur OS ke 5 core functions (Process, Memory, File, Device, Security) BTEUP exam me har saal puche jane wale regular questions hain. Hamesha structured headings aur clear points me answer likhein.
          </div>
        </div>
      </section>
    </article>
  );
};

export default ItaiUnit2Content;
