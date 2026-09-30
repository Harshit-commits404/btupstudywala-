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
  Cpu,
  HardDrive,
  Monitor,
  Printer,
  Layers,
  ArrowRight,
  Server,
  Zap,
} from 'lucide-react';
import EducationalFigure from '../../components/common/EducationalFigure';

export const ItaiUnit1Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      {/* HEADER / TITLEPLATE */}
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 01</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Introduction to IT and AI (Semester 1)
          </span>
          <span className="text-slate-400">•</span>
          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>12 Periods / Exam Weightage: 10-12 Marks</span>
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Introduction to Computers and Peripherals
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Computer Definition & Characteristics</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Five Generations</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">CPU Architecture (ALU, CU, Registers)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Memory Hierarchy (RAM, ROM, Cache, Secondary)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">I/O Peripherals & Motherboard Ports</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Modern computing world ki foundational unit jisme hum computer system ka basic conceptual model, historical evolution (Generations), core execution engine (CPU & Memory hierarchy), aur external interaction peripherals ko deeply explore karenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 1.1 Introduction and Generations of Computer */}
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
            1.1. Introduction and Generations of Computer
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
                Computer ki Definition aur Basic Concept
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <strong>Computer</strong> ek programmable electronic device hai jo raw data ko input ke roop me accept karta hai, use set of instructions (programs) ke hisab se process karta hai, meaningful result (information) produce karta hai, aur future use ke liye data ko store karta hai.
              </p>
            </div>
          </div>
        </div>

        {/* Working Principle: The IPO Cycle */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Working Principle: The IPO Cycle (Input-Process-Output)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
          Duniya ka koi bhi computer ho — chahe wo chhota smartwatch ho ya supercomputer — hamesha <strong>IPO Model</strong> par kaam karta hai:
        </p>

        <div className="grid sm:grid-cols-4 gap-3 mb-6">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-center shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-2 font-bold font-mono">1</div>
            <h5 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Input</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Keyboard, Mouse ya sensors dwara user se raw data lena.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-center shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-2 font-bold font-mono">2</div>
            <h5 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Process</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">CPU dwara arithmetic calculations aur logical decisions lena.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-center shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-2 font-bold font-mono">3</div>
            <h5 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Output</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Monitor par display ya printer dwara final results show karna.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-center shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto mb-2 font-bold font-mono">4</div>
            <h5 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Storage</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Hard drive ya SSD me future reuse ke liye file save karna.</p>
          </div>
        </div>

        {/* Embedded Figure: Von Neumann Architecture */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Von_Neumann_Architecture.svg/640px-Von_Neumann_Architecture.svg.png"
          alt="Von Neumann Computer Architecture Diagram showing Input, Central Processing Unit with Control Unit and ALU, Memory Unit, and Output"
          caption="Figure 1.1: Classic Von Neumann Computer Architecture & Input-Process-Output Flow"
          source="Wikimedia Commons"
          maxWidth="max-w-xl"
          fallback={
            <div className="p-4 rounded-lg bg-card text-center text-xs font-mono border border-border">
              <div className="font-bold text-primary mb-2">Von Neumann Architecture</div>
              <div>Input Device ──► [ CPU (ALU + Control Unit + Registers) ] ⇄ Memory ──► Output Device</div>
            </div>
          }
        />

        {/* Characteristics of Computers */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Major Characteristics of Computers (Exam Favourite)</span>
        </h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2 mb-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              1. Speed (Gati)
            </h5>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Computer calculations ko microseconds (10⁻⁶ s), nanoseconds (10⁻⁹ s) ya picoseconds (10⁻¹² s) me perform karta hai. Modern CPUs billions of instructions per second (Gigahertz clock speed) execute karte hain.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2 mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              2. Accuracy (Shuddhata)
            </h5>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Computers 100% accurate hote hain. Calculation me error tabhi aati hai jab human programmer ya user input me galti kare — jise computing me <strong>GIGO (Garbage In, Garbage Out)</strong> kaha jata hai.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2 mb-1.5">
              <Clock className="w-4 h-4 text-blue-500" />
              3. Diligence (Karyakshemta)
            </h5>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Manushya lagatar kaam karne par thak jata hai aur uski concentration toot jati hai. Lekin computer bina thake, bina bore hue lagatar 24/7 same speed aur accuracy ke sath repetitive tasks execute kar sakta hai.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2 mb-1.5">
              <Layers className="w-4 h-4 text-purple-500" />
              4. Versatility & Storage
            </h5>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Same computer engineering drawing (AutoCAD) banane, complex scientific matrix calculations solve karne, music play karne aur internet par video stream karne ke liye use hota hai. Massive amount of data permanently save karta hai.
            </p>
          </div>
        </div>

        {/* Detailed 5 Generations Breakdown */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Generations of Computers (1st to 5th Generation Deep Dive)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
          Hardware components me aane wale revolutionary technological changes ke aadhar par computer evolution ko paanch generations me divide kiya gaya hai:
        </p>

        <div className="space-y-4 mb-6">
          {/* 1st Gen */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                First Generation (1940 – 1956): Vacuum Tube Era
              </h5>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-600 dark:text-red-400 font-bold">Vacuum Tubes</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Key Technology:</strong> Electronic circuitry ke liye hazaron <strong>Vacuum Tubes</strong> aur memory ke liye <strong>Magnetic Drums</strong> use hote the.
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
              <li><strong>Language:</strong> Sirf binary <strong>Machine Language (0s and 1s)</strong> me program hote the. Har new problem ke liye hardware rewiring karni padti thi.</li>
              <li><strong>Characteristics:</strong> Size me ek poore kamre ke barabar, electricity consumption bohot high, excessive heat produce hoti thi jisse vacuum tubes baar-baar burn ho jate the (low reliability).</li>
              <li><strong>Examples:</strong> ENIAC (Electronic Numerical Integrator and Computer), EDVAC, UNIVAC-1.</li>
            </ul>
          </div>

          {/* 2nd Gen */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                Second Generation (1956 – 1963): Transistor Revolution
              </h5>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">Transistors</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Key Technology:</strong> Bell Labs dwara invent kiye gaye semiconductor <strong>Transistors</strong> ne bulky vacuum tubes ko replace kiya.
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
              <li><strong>Advantages:</strong> Transistor size me bohot chhota tha, kam heat emit karta tha, aur energy efficient tha. Computers kafi chhote, saste aur 10 times fast ho gaye.</li>
              <li><strong>Memory & Language:</strong> Magnetic Core main memory shuru hui. <strong>Assembly Language</strong> (Mnemonics jaise ADD, SUB) aur early High-Level Languages (FORTRAN, COBOL) invent hui.</li>
              <li><strong>Examples:</strong> IBM 1401, IBM 7090, CDC 1604.</li>
            </ul>
          </div>

          {/* 3rd Gen */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                Third Generation (1964 – 1971): Integrated Circuit (IC)
              </h5>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">Integrated Circuits (IC)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Key Technology:</strong> Jack Kilby aur Robert Noyce dwara invent ki gayi <strong>IC (Integrated Circuit)</strong>. Ek single silicon semiconductor chip par saikdon transistors, diodes aur resistors fabricate kiye gaye (SSI & MSI).
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
              <li><strong>Breakthroughs:</strong> Punched cards ki jagah <strong>Keyboard aur Monitors</strong> ka use shuru hua. Time-sharing <strong>Operating Systems</strong> aaye jisse multiple programs ek sath run ho sake.</li>
              <li><strong>Examples:</strong> IBM 360 series, PDP-8 (First successful minicomputer).</li>
            </ul>
          </div>

          {/* 4th Gen */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                Fourth Generation (1971 – Present): VLSI & Microprocessors
              </h5>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">Microprocessor (VLSI/ULSI)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Key Technology:</strong> <strong>VLSI (Very Large Scale Integration)</strong> technology se poore CPU ko ek single microchip par place kar diya gaya — jise <strong>Microprocessor</strong> (jaise Intel 4004, 8085) kaha gaya.
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
              <li><strong>Personal Computer (PC) Era:</strong> Computers desk par rakhne layak ban gaye (Laptops, Desktops). GUI (Graphical User Interface) jaise Windows OS, Mouse, aur Internet ka mass expansion hua.</li>
              <li><strong>Examples:</strong> IBM PC, Apple Macintosh, Modern Intel Core i5/i7/i9 and AMD Ryzen PCs.</li>
            </ul>
          </div>

          {/* 5th Gen */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                Fifth Generation (Present & Beyond): Artificial Intelligence & Quantum
              </h5>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">AI & Parallel Processing</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Key Technology:</strong> <strong>ULSI (Ultra Large Scale Integration)</strong>, Parallel Processing, <strong>Artificial Intelligence (AI)</strong>, Machine Learning, Neural Networks aur <strong>Quantum Computing</strong>.
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
              <li><strong>Capabilities:</strong> Voice recognition (Siri, Alexa), Natural Language Processing, self-driving cars, supercomputing aur smart decision-making.</li>
              <li><strong>Examples:</strong> Param Supercomputers, IBM Watson, Google Quantum AI computers.</li>
            </ul>
          </div>
        </div>

        {/* Yaad Rakho Box */}
        <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block text-sm mb-1 text-amber-800 dark:text-amber-300">Exam Point (याद रखो):</strong>
            BTEUP semester exams me Generation ka question aate hi table banakar 4 parameters jarur likhein: <em>1. Time Period, 2. Core Switching Element, 3. Primary Memory / Language, 4. Classic Example</em>.
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.2 CPU and Memory */}
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
            1.2. Central Processing Unit (CPU) and Memory Hierarchy
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
          <strong>Central Processing Unit (CPU)</strong> ko computer ka <strong>"Brain"</strong> kaha jata hai. Yeh computer me aane wali sabhi instructions ko interpret, schedule aur execute karta hai.
        </p>

        {/* CPU 3 Major Subunits */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <Cpu className="w-4 h-4" />
              <span>1. ALU (Arithmetic Logic Unit)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Sabhi mathematical calculations aur comparison decisions ALU ke andar hote hain:
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 list-disc list-inside space-y-1">
              <li><strong>Arithmetic:</strong> Addition (+), Subtraction (-), Multiplication (*), Division (/).</li>
              <li><strong>Logic:</strong> Comparison (&lt;, &gt;, &lt;=, &gt;=, ==) aur Boolean operations (AND, OR, NOT).</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
              <Server className="w-4 h-4" />
              <span>2. CU (Control Unit)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              CPU ka <strong>Traffic Police</strong> ya supervisor hai. Yeh actual calculation nahi karta, balki timing signals aur control signals generate karta hai:
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 list-disc list-inside space-y-1">
              <li>Memory se instruction <strong>Fetch</strong> karta hai.</li>
              <li>Instruction ko <strong>Decode</strong> karta hai.</li>
              <li>ALU ya I/O device ko command dekar <strong>Execute</strong> karwata hai.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-2">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
              <HardDrive className="w-4 h-4" />
              <span>3. CPU Registers</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              CPU chip ke andar built-in ultra-high-speed temporary storage locations:
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 list-disc list-inside space-y-1">
              <li><strong>PC (Program Counter):</strong> Agli execute hone wali instruction ka memory address rakhta hai.</li>
              <li><strong>IR (Instruction Register):</strong> Current executing instruction ko hold karta hai.</li>
              <li><strong>MAR & MDR:</strong> Memory address aur data transfer buffers.</li>
              <li><strong>Accumulator (AC):</strong> ALU calculation ka intermediate result store karta hai.</li>
            </ul>
          </div>
        </div>

        {/* Embedded Figure: CPU Internal Architecture */}
        <EducationalFigure
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Computer_architecture_block_diagram.svg/640px-Computer_architecture_block_diagram.svg.png"
          alt="CPU architecture block diagram showing connections between Control Unit, Arithmetic Logic Unit, Registers, Data Bus, Address Bus, and Main Memory"
          caption="Figure 1.2: CPU Internal Block Diagram: ALU, Control Unit, and Internal Registers Connected via System Buses"
          source="Wikimedia Commons"
          maxWidth="max-w-xl"
          fallback={
            <div className="p-4 rounded-lg bg-card text-center text-xs font-mono border border-border">
              <div className="font-bold text-primary mb-2">CPU Internal Organization</div>
              <div>[ Control Unit ] ⇄ [ ALU ] ⇄ [ Registers (PC, AC, IR) ] ⇄ [ System Bus ] ⇄ RAM</div>
            </div>
          }
        />

        {/* Memory Hierarchy */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Computer Memory Hierarchy (Pyramid Model)</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
          Computer memory ko cost, capacity aur speed ke balance ke hisab se arrange kiya jata hai. Upar se niche aane par: <em>Speed kam hoti hai, Capacity badhti hai, aur Cost per bit kafi sasti ho jati hai</em>:
        </p>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 font-mono text-xs text-center space-y-2 mb-6">
          <div className="p-2 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 max-w-xs mx-auto font-bold">
            1. CPU Registers (&lt; 1 KB) — Fastest (Nanoseconds)
          </div>
          <div className="p-2 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 max-w-sm mx-auto font-bold">
            2. Cache Memory (L1, L2, L3: 4MB – 32MB) — SRAM Based
          </div>
          <div className="p-2 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 max-w-md mx-auto font-bold">
            3. Primary Memory / RAM (8GB – 64GB) — DRAM Based
          </div>
          <div className="p-2 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 max-w-lg mx-auto font-bold">
            4. Secondary Storage (SSD / HDD: 512GB – 4TB) — Non-Volatile
          </div>
          <div className="p-2 rounded bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/20 max-w-xl mx-auto font-bold">
            5. Tertiary / Backup Storage (Cloud, Magnetic Tapes) — Slowest & Cheapest
          </div>
        </div>

        {/* RAM vs ROM Detailed Comparison */}
        <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-3">
          Detailed Comparison: RAM vs ROM (Primary Memory)
        </h4>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                <th className="p-3 font-semibold text-slate-900 dark:text-white">Feature</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">RAM (Random Access Memory)</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-white">ROM (Read Only Memory)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Nature</td>
                <td className="p-3 text-red-600 dark:text-red-400 font-bold">Volatile (Power off hote hi data erase)</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Non-Volatile (Power off hone par bhi data safe)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Operation</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Read and Write dono allowed hote hain</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Normal operation me sirf Read allowed hota hai</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Role in Computer</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Active programs aur running apps ka live data hold karta hai</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">BIOS / UEFI firmware hold karta hai (Booting bootstrap loader)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Types</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">SRAM (Static RAM), DRAM (Dynamic RAM, DDR4/DDR5)</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">PROM, EPROM (UV erase), EEPROM (Flash BIOS)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Speed & Capacity</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Bohot fast, capacity 8GB – 64GB typical</td>
                <td className="p-3 text-slate-700 dark:text-slate-300">Slower than RAM, capacity 8MB – 64MB small chip</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Secondary Storage: HDD vs SSD */}
        <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-3">
          Secondary Storage: HDD (Hard Disk) vs SSD (Solid State Drive)
        </h4>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-amber-500" />
              HDD (Traditional Magnetic Hard Disk)
            </h5>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Isme spinning magnetic platters aur ek mechanical read/write head hota hai (5400 ya 7200 RPM).
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 list-disc list-inside space-y-1">
              <li><strong>Pros:</strong> Large storage capacity at very low cost per GB.</li>
              <li><strong>Cons:</strong> Mechanical parts ke karan slow read/write (100-150 MB/s), shock lagne par physical damage ka khatra, sound/vibration produce karta hai.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-500" />
              SSD (Solid State Drive - Modern Flash)
            </h5>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Isme koi moving mechanical parts nahi hote; yeh semiconductor NAND flash memory chips par data store karta hai.
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-400 list-disc list-inside space-y-1">
              <li><strong>Pros:</strong> Ultra-fast read/write speeds (500 MB/s on SATA to 7000 MB/s on NVMe M.2), instant boot time (under 10s), silent, shock-resistant.</li>
              <li><strong>Cons:</strong> Cost per GB is higher than HDD.</li>
            </ul>
          </div>
        </div>

        {/* Common Confusion Box */}
        <div className="p-4 rounded-xl border border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/20 text-xs sm:text-sm text-blue-900 dark:text-blue-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block text-sm mb-1 text-blue-800 dark:text-blue-300">Common Student Confusion:</strong>
            Students aksar sochte hain ki <em>"Phone me 128GB memory hai to wo RAM hai"</em>. 128GB secondary storage (Internal Storage) hoti hai jisme photos/files save rehti hain. Phone ki active RAM 6GB ya 8GB hoti hai jo current apps ko fast chalane ke liye hoti hai.
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.3 Peripherals (Input/Output Devices) */}
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
            1.3. Peripherals (Input, Output, and Hardware Interface Devices)
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
          <strong>Peripherals</strong> wo sabhi hardware devices hain jo computer system unit (cabinet/motherboard) se bahar se jude hote hain taaki user computer ke sath interact kar sake aur data ka aadan-pradan (input/output) ho sake.
        </p>

        {/* Input Devices Breakdown */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Major Input Devices (Detailed Examination)</span>
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-1">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm">Keyboard (QWERTY)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Standard alphanumeric primary input device (101 to 104 keys). Isme Function keys (F1-F12), numeric keypad, cursor control keys aur modifier keys (Shift, Ctrl, Alt) hote hain. Key press karte hi matrix circuit scan code computer ko bhejta hai.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-1">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm">Optical Mouse</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Hand-held pointing device jisme niche ek LED aur optical sensor laga hota hai. Desk surface ki microscopic images capture karke screen par cursor ka X-Y coordinate movement calculate karta hai (DPI resolution).
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-1">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm">Optical Scanners</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Physical document ya photo ko digital image (soft copy) me convert karta hai.
              <br />• <strong>OCR (Optical Character Recognition):</strong> Printed text ko editable computer text banata hai.
              <br />• <strong>OMR:</strong> Exam answer sheets ke pencil/pen bubbles read karta hai.
              <br />• <strong>Barcode & QR Scanner:</strong> Product codes scan karta hai.
            </p>
          </div>
        </div>

        {/* Output Devices: Monitors and Printers */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Major Output Devices: Display Monitors & Printers</span>
        </h3>

        <div className="space-y-4 mb-6">
          {/* Display Technologies */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2 mb-2">
              <Monitor className="w-4 h-4 text-blue-500" />
              Display Monitors: CRT vs LCD vs LED vs OLED
            </h5>
            <div className="grid sm:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-300">
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <strong className="block text-slate-900 dark:text-white mb-1">CRT (Cathode Ray Tube):</strong>
                Purane bulky monitors jo electron beam ko phosphor coated screen par shoot karke picture banate the. Heavy aur high power consuming.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <strong className="block text-slate-900 dark:text-white mb-1">LCD & LED:</strong>
                Liquid Crystal Display jo CCFL backlight use karta tha, aur modern LED monitors jo energy-efficient Light Emitting Diodes use karte hain. Flat screen, low power, sharp full HD/4K resolution.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <strong className="block text-slate-900 dark:text-white mb-1">OLED (Organic LED):</strong>
                Har individual pixel khud apni light emit karta hai. Perfect deep black contrast, ultra-thin displays, vibrant colors.
              </div>
            </div>
          </div>

          {/* Printers: Impact vs Non-Impact */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2 mb-2">
              <Printer className="w-4 h-4 text-emerald-500" />
              Printers Classification: Impact vs Non-Impact Printers
            </h5>
            <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 space-y-1.5">
                <strong className="font-bold text-slate-900 dark:text-white block text-sm">1. Impact Printers (e.g. Dot Matrix)</strong>
                <p>Isme ek print head ribbon par physical hammer ki tarah strike karta hai. Shorgul (noise) bohot zyada hota hai, speed slow hoti hai, lekin carbon copy (multi-part invoice bills) nikalne ke liye banks aur railway ticketing me aaj bhi use hota hai.</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 space-y-1.5">
                <strong className="font-bold text-slate-900 dark:text-white block text-sm">2. Non-Impact Printers (Inkjet & Laser)</strong>
                <p>Isme ribbon par koi physical strike nahi hoti:</p>
                <ul className="list-disc list-inside space-y-0.5 text-xs">
                  <li><strong>Inkjet:</strong> Tiny nozzles se liquid ink ki microscopic boondein paper par spray karta hai (Color photos ke liye best).</li>
                  <li><strong>Laser Printer:</strong> Laser beam, rotating photosensitive drum aur dry toner powder use karta hai. Ultra-sharp text, extremely fast (20-50 pages per minute - PPM).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Specialized Motherboard Components */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Essential Motherboard Hardware & Connectivity Components</span>
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h5 className="font-bold text-slate-900 dark:text-white mb-1">SMPS (Power Supply Unit)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Switched-Mode Power Supply:</strong> Ghar ki 220V AC current ko computer circuits ke required stable DC voltages (+3.3V, +5V, +12V) me convert karta hai.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h5 className="font-bold text-slate-900 dark:text-white mb-1">CMOS Battery (CR2032)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Motherboard par lagi choti button-cell battery jo computer switch off hone par bhi system real-time clock (Date & Time) aur BIOS setup settings ko power deti rehti hai.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
            <h5 className="font-bold text-slate-900 dark:text-white mb-1">Ports & Connectors</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              • <strong>USB (Universal Serial Bus):</strong> Pendrive, mouse connect karne ke liye.
              <br />• <strong>HDMI & DisplayPort:</strong> High-definition video + audio output.
              <br />• <strong>RJ-45 Ethernet Port:</strong> LAN cable se wired internet connect karne ke liye.
            </p>
          </div>
        </div>

        {/* Chapter Summary Placard */}
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-brand-500/5 via-slate-50 dark:via-slate-900/60 to-transparent">
          <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-2">
            <Award className="w-4 h-4 text-brand-500" />
            Unit 1 Quick Revision Summary (Final Takeaways)
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Computer ek IPO machine hai jo raw data ko process karke information me badalta hai. CPU (ALU + CU + Registers) execution karta hai, RAM temporary processing memory hai aur ROM non-volatile BIOS store karti hai. Secondary storage me modern SSDs traditional mechanical HDDs se 10x fast hoti hain. Peripherals user aur computer hardware ke beech input aur output ka bridge banate hain.
          </p>
        </div>
      </section>
    </article>
  );
};

export default ItaiUnit1Content;
