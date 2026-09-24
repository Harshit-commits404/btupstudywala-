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
  Layers,
  ArrowRight,
  ShieldAlert,
  GitBranch,
  Timer,
  Lock,
} from 'lucide-react';

export const OsUnit2Content = () => {
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
            Operating System (OS)
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
            Process Management & Deadlock
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (प्रोसेस प्रबंधन, सीपीयू शेड्यूलिंग, सिंक्रोनाइज़ेशन एवं गतिरोध)
          </p>
        </div>

        {/* Syllabus Topics Chip Bar */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Process Concepts & States</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Operations on Processes</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">CPU Scheduling Criteria</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Scheduling Algorithms (FCFS, SJF, Priority, RR)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Inter-Process Communication (IPC)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Process Synchronization & Critical Section</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Deadlock: Conditions, Prevention & Avoidance</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Operating System ka sabse dynamic aur mahatvapoorna hissa Process Management hai. Is unit mein hum samjhenge ki Program aur Process mein kya antar hai, Process Control Block (PCB) kya hota hai, Process States ka transition kaise hota hai, Gantt charts ke saath numerical-style CPU Scheduling algorithms (FCFS, SJF, Priority, Round Robin), Critical Section problem, Semaphores aur Deadlock (Conditions, Prevention aur Banker's Algorithm) ko Hinglish mein step-by-step deeply study karenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 2.1 PROCESS CONCEPTS & PROCESS STATES */}
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
            Process Concepts & Process States
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (प्रोग्राम बनाम प्रोसेस, पीसीबी एवं 5-स्टेट लाइफ-साइकिल)
          </div>
        </div>

        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Definition • Process vs Program</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A Program is a passive entity stored on disk (executable file), whereas a Process is an active entity representing a program in execution, with its own program counter, stack, data, and memory space."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> Hard disk par rakha hua <code>chrome.exe</code> ek Program hai (passive). Lekin jab aap us par double click karke run kar dete hain aur wo RAM mein load ho jata hai, to wo ek <strong>Process</strong> ban jata hai (active).
            </span>
          </div>
        </div>

        {/* PCB Description */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          Process Control Block (PCB / Task Control Block)
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Har process ko identify aur track karne ke liye OS kernel ek data structure maintain karta hai jise <strong>PCB</strong> kehte hain. Isme nimnalikhit jankari hoti hai:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 text-xs font-mono">
          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
            <strong>• Process ID (PID):</strong> Unique integer ID (e.g. 1042).
          </div>
          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
            <strong>• Process State:</strong> New, Ready, Running, Waiting, Terminated.
          </div>
          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
            <strong>• Program Counter (PC):</strong> Next instruction ka memory address.
          </div>
          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
            <strong>• CPU Registers:</strong> Accumulators, index registers, stack pointers.
          </div>
          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
            <strong>• Memory Management Info:</strong> Base/Limit registers ya Page Tables.
          </div>
          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
            <strong>• I/O Status Info:</strong> Allocated devices aur open files ki list.
          </div>
        </div>

        {/* EDUCATIONAL PROCESS STATE TRANSITION DIAGRAM */}
        <div className="my-8 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/50 space-y-4">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 text-center">
            Educational Diagram 2.1 • Five-State Process Transition Model
          </div>

          <div className="max-w-2xl mx-auto space-y-3 font-mono text-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 text-center">
              {/* New */}
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 font-bold w-28">
                NEW<br /><span className="text-[10px] font-sans font-normal text-slate-500">Being Created</span>
              </div>
              <div className="text-slate-400 text-[11px]">── Admitted ──►</div>

              {/* Ready */}
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 font-bold w-28">
                READY<br /><span className="text-[10px] font-sans font-normal text-slate-500">In RAM queue</span>
              </div>
              <div className="text-slate-400 text-[11px]">── Dispatch ──►</div>

              {/* Running */}
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-bold w-28">
                RUNNING<br /><span className="text-[10px] font-sans font-normal text-slate-500">On CPU Core</span>
              </div>
              <div className="text-slate-400 text-[11px]">── Exit ──►</div>

              {/* Terminated */}
              <div className="p-3 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold w-28">
                TERMINATED<br /><span className="text-[10px] font-sans font-normal text-slate-500">Finished</span>
              </div>
            </div>

            {/* Loopbacks */}
            <div className="pt-2 text-center text-slate-500 text-[11px] font-sans space-y-1">
              <div>• <strong>Interrupt / Time Slice Expiry:</strong> RUNNING ──► READY (Context switch back to queue)</div>
              <div>• <strong>I/O or Event Wait:</strong> RUNNING ──► WAITING / BLOCKED</div>
              <div>• <strong>I/O Completion:</strong> WAITING / BLOCKED ──► READY (Never direct to Running!)</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2.2 OPERATIONS ON PROCESSES */}
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
            Operations on Processes
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (प्रोसेस निर्माण, समाप्ति, ज़ॉम्बी एवं अनाथ प्रोसेस)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          OS mein process execution ke dauran do pramukh operations hote hain: <strong>Creation</strong> aur <strong>Termination</strong>:
        </p>

        <div className="space-y-4 my-6 text-sm">
          {/* Creation */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">1. Process Creation (fork)</h4>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              Ek existing process (Parent) naye process (Child) ko create karta hai system call <code>fork()</code> ke dwara. Isse ek <strong>Process Tree</strong> banti hai. Parent ko child ka PID return hota hai, aur child ko 0 return hota hai.
            </p>
          </div>

          {/* Termination */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">2. Process Termination (exit)</h4>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              Jab process apna aakhiri statement execute kar leta hai, to wo <code>exit()</code> system call call karta hai. OS uske allocated resources (memory, open files) ko deallocate kar deta hai.
            </p>
          </div>

          {/* Zombie vs Orphan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 dark:bg-amber-500/[0.03]">
              <span className="font-bold text-amber-700 dark:text-amber-400 block mb-1">Zombie Process (लाश प्रोसेस)</span>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                Ek aisa child process jo terminate ho chuka hai, lekin uske parent ne abhi tak <code>wait()</code> call karke uska exit status read nahi kiya hai. Yeh process table mein entry occupy karke rakhta hai.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 dark:bg-rose-500/[0.03]">
              <span className="font-bold text-rose-700 dark:text-rose-400 block mb-1">Orphan Process (अनाथ प्रोसेस)</span>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                Ek aisa child process jiska parent terminate ho gaya bina child ke khatam hone ka intezar kiye. Linux mein ese processes ko <code>init / systemd (PID = 1)</code> process adopt kar leta hai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2.3 CPU SCHEDULING CONCEPTS & CRITERIA */}
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
            CPU Scheduling Concepts & Criteria
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (प्रीमेप्टिव बनाम नॉन-प्रीमेप्टिव एवं शेड्यूलिंग मानदंड)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Jab Ready Queue mein kai processes hote hain, to CPU Scheduler tay karta hai ki agla CPU turn kis process ko milega:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 text-sm">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1">Preemptive Scheduling (सकर्मक)</strong>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              CPU chal rahe process se zabardasti chheena ja sakta hai agar koi high priority process aa jaye ya time quantum khatam ho jaye (e.g. Round Robin, SRTF).
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-slate-700 dark:text-slate-300 block mb-1">Non-Preemptive Scheduling (अकर्मक)</strong>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              Ek baar jab CPU kisi process ko de diya jata hai, to wo tab tak CPU nahi chhodta jab tak wo terminate na ho jaye ya khud I/O ke liye wait na kare (e.g. FCFS).
            </p>
          </div>
        </div>

        {/* Dedicated Scheduling Formulas Box */}
        <div className="study-formula-block">
          <div className="text-[11px] font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold mb-2">
            Essential CPU Scheduling Numerical Formulas
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-mono text-slate-900 dark:text-white">
            <div className="p-2.5 rounded bg-white/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              Turnaround Time (TAT) = Completion Time (CT) − Arrival Time (AT)
            </div>
            <div className="p-2.5 rounded bg-white/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              Waiting Time (WT) = Turnaround Time (TAT) − Burst Time (BT)
            </div>
          </div>
          <div className="text-xs text-slate-500 font-mono mt-2">
            Average TAT = Σ(TAT) / N &nbsp;|&nbsp; Average WT = Σ(WT) / N
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2.4 CPU SCHEDULING ALGORITHMS */}
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
            CPU Scheduling Algorithms (Worked Step-by-Step Numericals)
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (गैंट चार्ट, एफसीएफएस, एसजेएफ, प्रायोरिटी एवं राउंड रॉबिन)
          </div>
        </div>

        {/* ALGORITHM 1: FCFS */}
        <div className="mb-12 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              1. First-Come, First-Served (FCFS) Scheduling
            </h3>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
              Non-Preemptive
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Jo process pehle aata hai (Lowest Arrival Time), use CPU pehle milta hai. FIFO queue dwara implement hota hai.
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead className="bg-slate-100 dark:bg-slate-800">
                <tr><th className="p-2">Process</th><th className="p-2">Arrival Time (AT)</th><th className="p-2">Burst Time (BT)</th><th className="p-2 text-brand-600">Completion Time (CT)</th><th className="p-2 text-brand-600">TAT (CT - AT)</th><th className="p-2 text-emerald-600">WT (TAT - BT)</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr><td className="p-2 font-bold">P1</td><td className="p-2">0</td><td className="p-2">4</td><td className="p-2">4</td><td className="p-2">4 - 0 = 4</td><td className="p-2">4 - 4 = 0</td></tr>
                <tr><td className="p-2 font-bold">P2</td><td className="p-2">1</td><td className="p-2">3</td><td className="p-2">7</td><td className="p-2">7 - 1 = 6</td><td className="p-2">6 - 3 = 3</td></tr>
                <tr><td className="p-2 font-bold">P3</td><td className="p-2">2</td><td className="p-2">1</td><td className="p-2">8</td><td className="p-2">8 - 2 = 6</td><td className="p-2">6 - 1 = 5</td></tr>
                <tr><td className="p-2 font-bold">P4</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">10</td><td className="p-2">10 - 3 = 7</td><td className="p-2">7 - 2 = 5</td></tr>
              </tbody>
            </table>
          </div>

          {/* FCFS Gantt Chart */}
          <div className="p-3 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center font-mono text-xs">
            <div className="text-[11px] text-slate-500 mb-1">Gantt Chart:</div>
            <div className="flex border border-slate-300 dark:border-slate-600 rounded overflow-hidden max-w-md mx-auto">
              <div className="flex-1 bg-brand-500/20 py-1.5 border-r border-slate-300 dark:border-slate-600">P1 (0-4)</div>
              <div className="flex-1 bg-purple-500/20 py-1.5 border-r border-slate-300 dark:border-slate-600">P2 (4-7)</div>
              <div className="w-16 bg-amber-500/20 py-1.5 border-r border-slate-300 dark:border-slate-600">P3 (7-8)</div>
              <div className="flex-1 bg-emerald-500/20 py-1.5">P4 (8-10)</div>
            </div>
            <div className="pt-2 text-slate-700 dark:text-slate-300 font-bold">
              Average Turnaround Time = (4 + 6 + 6 + 7) / 4 = 5.75 ms | Average Waiting Time = (0 + 3 + 5 + 5) / 4 = 3.25 ms
            </div>
          </div>
          <p className="text-xs text-rose-500 font-mono">
            Convoy Effect: Agar pehla process bahut bada ho, to piche ke sabhi chote processes ko lamba intezar karna padta hai.
          </p>
        </div>

        {/* ALGORITHM 2: SJF */}
        <div className="mb-12 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              2. Shortest Job First (SJF) & SRTF Scheduling
            </h3>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
              Provably Optimal Min WT
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Jiska <strong>Burst Time (CPU execution time)</strong> sabse kam hota hai, use CPU pehle diya jata hai:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-1 text-xs text-slate-700 dark:text-slate-300">
            <li><strong>Non-Preemptive SJF:</strong> Ek baar CPU milne par process complete hone tak execute hota hai.</li>
            <li><strong>Preemptive SJF (SRTF - Shortest Remaining Time First):</strong> Agar naya process kam remaining time wala aa jaye, to current process preempt ho jata hai.</li>
          </ul>
        </div>

        {/* ALGORITHM 3: Round Robin */}
        <div className="mb-8 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              3. Round Robin (RR) Scheduling ★
            </h3>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">
              Time Quantum Bound
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Time-Sharing systems ke liye design kiya gaya hai. Har process ko barabar <strong>Time Quantum (q)</strong> milta hai. Agar process quantum ke andar finish nahi hota, to use interrupt karke ready queue ke aakhri mein daal diya jata hai:
          </p>
          <div className="p-3 rounded-lg bg-white dark:bg-slate-800/80 font-mono text-xs text-slate-700 dark:text-slate-300">
            <div>• If Time Quantum is very large (q → ∞) ⇒ RR becomes FCFS.</div>
            <div>• If Time Quantum is extremely small ⇒ Context switching overhead becomes very high, degrading performance.</div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2.5 INTER-PROCESS COMMUNICATION (IPC) */}
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
            Inter-Process Communication (IPC)
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (इंटर-प्रोसेस कम्युनिकेशन: शेयर्ड मेमोरी बनाम मैसेज पासिंग)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Cooperating processes ko aapas mein data aur status exchange karne ke liye IPC ki zaroorat hoti hai. IPC ke do pramukh models hote hain:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-sm">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1">1. Shared Memory Model</strong>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-2">
              Dono processes ke beech RAM ka ek common region share kar diya jata hai. Ek process usme data write karta hai aur doosra read karta hai.
            </p>
            <span className="text-emerald-600 font-mono text-xs font-bold">Fastest speed (No kernel intervention after setup).</span>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-purple-600 dark:text-purple-400 block mb-1">2. Message Passing Model</strong>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-2">
              Processes kernel system calls (<code>send()</code> aur <code>receive()</code>) ke jariye message queues dwara baatchit karte hain.
            </p>
            <span className="text-brand-600 font-mono text-xs font-bold">Best for distributed networks and multi-computer systems.</span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2.6 PROCESS SYNCHRONIZATION & CRITICAL SECTION */}
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
            Process Synchronization & Critical Section
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (प्रक्रिया तुल्यकालन, क्रिटिकल सेक्शन एवं सेमाफोर)
          </div>
        </div>

        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Definition • Critical Section</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A Critical Section is a segment of code where shared resources (shared variables, files, tables) are accessed. To avoid a Race Condition, only one process must be allowed to execute in its critical section at any given time."
          </blockquote>
        </div>

        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          The Three Mandatory Criteria for Critical Section Solution:
        </h3>
        <div className="space-y-3 my-4 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1">1. Mutual Exclusion (पारस्परिक अपवर्जन)</strong>
            <p className="text-slate-600 dark:text-slate-300">Agar process P1 apne critical section mein execute kar raha hai, to koi bhi doosra process apne critical section mein enter nahi kar sakta.</p>
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">2. Progress (प्रगति)</strong>
            <p className="text-slate-600 dark:text-slate-300">Agar critical section khali hai aur koi process enter karna chahta hai, to sirf wahi processes decide karenge jo enter hona chahte hain (unrelated processes delay nahi kar sakte).</p>
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-purple-600 dark:text-purple-400 block mb-1">3. Bounded Waiting (सीमित प्रतीक्षा)</strong>
            <p className="text-slate-600 dark:text-slate-300">Ek process ko critical section mein enter karne ki request bhejne ke baad kitni baar doosre process andar ja sakte hain, uski ek nishchit limit honi chahiye (Starvation prevention).</p>
          </div>
        </div>

        {/* Semaphores */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-2">
          Semaphores (सेमाफोर: Mutex एवं Counting)
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">
          Edsger Dijkstra ne synchronization ke liye ek integer variable introduce kiya jise <strong>Semaphore (S)</strong> kehte hain, jise sirf do atomic operations se access kiya ja sakta hai:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs my-2">
          <div className="p-3 rounded-lg bg-slate-900 text-brand-300">
            wait(S) ya P(S):<br />
            while (S &lt;= 0); // wait<br />
            S--;
          </div>
          <div className="p-3 rounded-lg bg-slate-900 text-emerald-300">
            signal(S) ya V(S):<br />
            S++;
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2.7 DEADLOCK & DEADLOCK CONDITIONS */}
      {/* ========================================================= */}
      <section id="sec-2-7" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.7
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Deadlock & The 4 Coffman Conditions
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (गतिरोध की परिभाषा एवं चार कॉफमैन स्थितियाँ)
          </div>
        </div>

        <div className="my-6 pl-4 border-l-[3.5px] border-rose-500 bg-rose-50/40 dark:bg-rose-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-1.5">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Definition • Deadlock (गतिरोध)</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A Deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource held by some other process in the set, with none of them able to make progress."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Chauraha (Intersection) Analogy:</strong> Chaar gaadiyan ek chauraha par aamne-saamne aakar fas gayi hain. Har gaadi aage badhne ke liye agle raste ka intezar kar rahi hai par koi peeche hatne ko taiyar nahi hai. Yeh ek Deadlock hai!
            </span>
          </div>
        </div>

        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          The 4 Necessary Coffman Conditions for Deadlock:
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
          1971 mein Edward G. Coffman ne bataya ki deadlock aane ke liye ye <strong>chaaron shartein ek saath (simultaneously)</strong> poori honi chahiye:
        </p>

        <div className="space-y-3 my-4 text-xs sm:text-sm font-mono">
          <div className="p-3.5 rounded-xl border border-rose-500/20 bg-rose-500/5 dark:bg-rose-500/[0.03]">
            <strong className="text-rose-600 dark:text-rose-400 block mb-1">1. Mutual Exclusion:</strong>
            Resource non-shareable hai (ek samay mein sirf ek process use kar sakta hai, jaise Printer).
          </div>
          <div className="p-3.5 rounded-xl border border-rose-500/20 bg-rose-500/5 dark:bg-rose-500/[0.03]">
            <strong className="text-rose-600 dark:text-rose-400 block mb-1">2. Hold and Wait:</strong>
            Process ke paas kam se kam ek resource pehle se held hai aur wo doosre resource ke liye wait kar raha hai.
          </div>
          <div className="p-3.5 rounded-xl border border-rose-500/20 bg-rose-500/5 dark:bg-rose-500/[0.03]">
            <strong className="text-rose-600 dark:text-rose-400 block mb-1">3. No Preemption:</strong>
            Resource ko process se zabardasti nahi chheena ja sakta; process use apni marzi se hi release karega.
          </div>
          <div className="p-3.5 rounded-xl border border-rose-500/20 bg-rose-500/5 dark:bg-rose-500/[0.03]">
            <strong className="text-rose-600 dark:text-rose-400 block mb-1">4. Circular Wait:</strong>
            Processes ka ek circular chain ban jata hai: P0 waits for P1, P1 waits for P2, ..., Pn waits for P0!
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2.8 DEADLOCK PREVENTION */}
      {/* ========================================================= */}
      <section id="sec-2-8" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.8
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Deadlock Prevention
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (गतिरोध निवारण: कॉफमैन शर्तों को अमान्य करना)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Deadlock Prevention ka sidha siddhanta hai: <strong>Coffman ki chaaron sharton mein se kam se kam ek shart ko kabhi poora na hone dena</strong>:
        </p>

        <div className="space-y-4 my-6 text-sm">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1">1. Eliminate Mutual Exclusion:</strong>
            Resources ko shareable banana (Read-only files shareable hain, lekin printer jaise hardware ko fully shareable banana practical nahi hai; spooling use karte hain).
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1">2. Eliminate Hold and Wait:</strong>
            Protocol lagu karna ki process shuru hone se pehle apne sabhi required resources ek saath request kare, ya agar naye resource maangne hon to pehle current resources release kare (Disadvantage: Resource utilization low).
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1">3. Allow Preemption:</strong>
            Agar koi process resource maangta hai jo available nahi hai, to uske paas pehle se held sabhi resources forcibly preempt karke doosre processes ko de diye jayein.
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1">4. Eliminate Circular Wait (Most Practical!):</strong>
            Sabhi resources ko ek unique numerical order <code>F: R → N</code> assign karna. Process sirf <strong>increasing numerical order</strong> mein hi resource request kar sakta hai. Isse cycle ban hi nahi sakti!
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2.9 DEADLOCK AVOIDANCE */}
      {/* ========================================================= */}
      <section id="sec-2-9" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 2.9
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Deadlock Avoidance: Banker's Algorithm
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (गतिरोध बचाव: बैंकर एल्गोरिदम एवं सुरक्षित अनुक्रम)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Deadlock Avoidance mein OS har resource request aane par pehle check karta hai ki kya resource allocate karne ke baad system <strong>Safe State</strong> mein rahega ya nahi. Agar unsafe state aane ka risk ho, to request hold kar di jaati hai.
        </p>

        {/* Banker's Formula Placard */}
        <div className="study-formula-block">
          <div className="text-[11px] font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold mb-1">
            Banker's Algorithm Core Matrix Relation
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white tracking-wider my-2">
            Need[i][j] = Max[i][j] − Allocation[i][j]
          </div>
          <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-1">
            Safety Condition: If Need[i] ≤ Available, process Pi can complete and releases its Allocation back to Available.
          </div>
        </div>

        {/* Worked Banker's Numerical */}
        <div className="my-6 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 space-y-3">
          <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            Worked Step-by-Step Safe Sequence Finding:
          </span>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            Consider 5 Processes (P0, P1, P2, P3, P4) and 3 Resources A, B, C with Available = <code>[3, 3, 2]</code>.
          </p>
          <div className="font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1.5 pl-3 border-l-2 border-brand-500">
            <div>1. Calculate Need Matrix = Max − Allocation for all processes.</div>
            <div>2. Check P0: Need [7, 4, 3] ≤ Available [3, 3, 2] ? False. P0 must wait.</div>
            <div>3. Check P1: Need [1, 2, 2] ≤ Available [3, 3, 2] ? True! P1 executes and returns its Allocation [2, 0, 0]. New Available = [5, 3, 2].</div>
            <div>4. Check P3: Need [0, 1, 1] ≤ Available [5, 3, 2] ? True! P3 executes. New Available = [7, 4, 3].</div>
            <div>5. Check P4, P0, P2 sequentially. All satisfy condition!</div>
          </div>
          <div className="pt-2 text-sm font-sans font-bold text-slate-900 dark:text-white flex items-center justify-between border-t border-slate-200 dark:border-slate-700">
            <span>Resulting Safe Sequence:</span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400 text-base">⟨ P1, P3, P4, P0, P2 ⟩ (System is in Safe State)</span>
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
                <p className="font-semibold text-slate-900 dark:text-slate-100">What is Turnaround Time formula?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5 font-bold">Ans: TAT = Completion Time (CT) − Arrival Time (AT).</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Name the four Coffman conditions for deadlock.</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5">Ans: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">What is a Zombie process?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5">Ans: A terminated process whose parent has not yet called wait() to read its termination exit status.</p>
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
                <p className="font-semibold text-slate-900 dark:text-slate-100">Differentiate between Preemptive and Non-Preemptive CPU Scheduling.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Non-preemptive leaves CPU in process control until natural termination/yield (e.g. FCFS). Preemptive forcefully reclaims CPU on priority trigger or time slice expiration (e.g. Round Robin, SRTF).</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">State the 3 requirements for solving Critical Section problem.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: (1) Mutual Exclusion (only 1 process inside), (2) Progress (unrelated processes cannot block entry), (3) Bounded Waiting (finite bound on wait cycles).</p>
              </li>
            </ol>
          </div>

          {/* 5 Mark Questions */}
          <div className="p-5 rounded-xl border border-brand-500/20 bg-brand-500/[0.02] dark:bg-brand-500/[0.04]">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-brand-500/20">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20">
                5 MARKS QUESTIONS
              </span>
              <span className="text-xs text-slate-400 font-mono">Numericals & Flowcharts</span>
            </div>
            <ol className="list-decimal list-outside pl-5 space-y-4 text-sm text-slate-800 dark:text-slate-200">
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Draw and explain the 5-State Process Transition Diagram.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Draw the clear diagram showing New, Ready, Running, Waiting, Terminated. Detail each state transition trigger: Admitted, Scheduler dispatch, Timer interrupt, I/O wait, I/O completion, Exit.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Explain Banker's Algorithm for Deadlock Avoidance with a clear numerical example.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Present the Available, Max, Allocation, and Need matrices. Demonstrate step-by-step row selection satisfying Need ≤ Available, update Available vector on simulated release, and conclude with the resulting Safe Sequence.</p>
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
              <li><strong>Process:</strong> Program in execution (stored in RAM with PCB).</li>
              <li><strong>5 States:</strong> New → Ready → Running → Terminated (with Waiting loop).</li>
              <li><strong>TAT:</strong> CT − AT | <strong>WT:</strong> TAT − BT.</li>
              <li><strong>Round Robin:</strong> Preemptive time quantum slicing (no starvation).</li>
              <li><strong>Critical Section Requirements:</strong> Mutual Exclusion, Progress, Bounded Waiting.</li>
              <li><strong>4 Deadlock Conditions:</strong> Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.</li>
              <li><strong>Banker's Algorithm:</strong> Need = Max − Allocation; finds Safe Sequence.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
};

export default OsUnit2Content;
