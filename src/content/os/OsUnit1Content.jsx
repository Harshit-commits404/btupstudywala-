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
  Terminal,
  Shield,
  HardDrive,
  Activity,
  Server,
} from 'lucide-react';

export const OsUnit1Content = () => {
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
            Operating System (OS)
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
            Overview of Operating System
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 font-sans">
            (ऑपरेटिंग सिस्टम का परिचय, प्रकार, लिनक्स आर्किटेक्चर एवं सिस्टम कॉल्स)
          </p>
        </div>

        {/* Syllabus Topics Chip Bar */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Introduction to OS</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Different Types of OS</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Functions & Services of OS</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">UNIX/LINUX Architecture</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Kernel (Monolithic vs Microkernel)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Services and System Calls</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">System Programs</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Bina Operating System ke koi bhi computer sirf silicon aur metal ka bejaan dabba hai. Operating System hardware aur user ke beech bridge (interface) ka kaam karta hai. Is chapter mein hum OS ke basic concepts, OS ke alag-alag types (Batch, Multiprogramming, Time-Sharing, RTOS, Distributed), OS ke mukhya functions aur services, UNIX/LINUX ka layered architecture, Kernel ke prakar, dual-mode system calls aur system programs ko Hinglish mein deeply samjhenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 1.1 INTRODUCTION TO OS */}
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
            Introduction to Operating System
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (ऑपरेटिंग सिस्टम की परिभाषा, भूमिका एवं लक्ष्य)
          </div>
        </div>

        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Definition • Operating System (OS)</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "An Operating System is a system software that acts as an intermediary between computer hardware and the computer user, providing an environment in which a user can execute programs conveniently and efficiently."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Aasan Bhasha Mein:</strong> OS computer ka "Manager" ya "Commander" hai. Jab aap MS Word ya Chrome open karte hain ya keyboard se type karte hain, to computer hardware (CPU, RAM, Hard Disk) se direct baat karne ke bajaye aapka program OS se request karta hai, aur OS hardware ko safely instruct karta hai.
            </span>
          </div>
        </div>

        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          Dual Roles / Views of Operating System:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 text-sm">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-brand-600 dark:text-brand-400 block mb-1">1. As a Resource Allocator (संसाधन आवंटक)</strong>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              Computer ke paas limited resources hote hain (CPU time, Memory, Disk space, I/O devices). OS tay karta hai ki kaun se program ko kab, kitni der ke liye aur kitni memory milegi taaki conflict na ho.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">2. As a Control Program (नियंत्रण कार्यक्रम)</strong>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              Yeh user programs ke execution ko monitor karta hai taaki koi buggy ya malicious program computer ko crash na kar sake ya unauthorized memory access na kar sake.
            </p>
          </div>
        </div>

        {/* Abstract View Diagram */}
        <div className="my-6 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 text-center font-mono text-xs">
          <div className="text-brand-600 dark:text-brand-400 font-bold mb-3 uppercase tracking-wider">
            Educational Diagram 1.1 • Abstract System Hierarchy
          </div>
          <div className="max-w-md mx-auto space-y-1.5">
            <div className="p-2 rounded bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 font-bold">End Users (Students, Programmers)</div>
            <div className="text-slate-400 text-[10px]">↕</div>
            <div className="p-2 rounded bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">Application Programs (Compiler, Browser, Games)</div>
            <div className="text-slate-400 text-[10px]">↕ System Calls API</div>
            <div className="p-2.5 rounded bg-brand-500/15 text-brand-600 dark:text-brand-400 border border-brand-500/30 font-bold text-sm">OPERATING SYSTEM (Windows, Linux, macOS)</div>
            <div className="text-slate-400 text-[10px]">↕ Hardware Drivers</div>
            <div className="p-2 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold">COMPUTER HARDWARE (CPU, RAM, Disks, I/O)</div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.2 DIFFERENT TYPES OF OS */}
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
            Different Types of Operating Systems
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (ऑपरेटिंग सिस्टम के विभिन्न प्रकार: बैच से लेकर रियल-टाइम तक)
          </div>
        </div>

        <div className="space-y-6 my-6 text-sm">
          {/* 1. Batch OS */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">1. Batch Operating System (बैच ऑपरेटिंग सिस्टम)</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              Purane zamane (1950s-60s) ka system. Isme user computer se directly interact nahi karta tha. User apne program ko punch cards par punch karke human <em>Operator</em> ko deta tha. Operator saman requirements wale jobs ka ek "Batch" banakar computer ko run karne ke liye deta tha.
            </p>
            <div className="text-xs text-rose-500 font-mono">Disadvantage: CPU utilization bahut low hota tha kyunki I/O operation ke dauran CPU idle baitha rehta tha.</div>
          </div>

          {/* 2. Multiprogramming OS */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">2. Multiprogramming Operating System (मल्टीप्रोग्रामिंग)</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              Iska main maksad <strong>CPU utilization badhana</strong> hota hai. Memory (RAM) mein ek saath kai programs (Job A, Job B, Job C) load rehte hain. Jab Job A kisi I/O operation (jaise disk read) ke liye wait karta hai, to CPU idle baithne ke bajaye turant Job B ko execute karne lagta hai.
            </p>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono">Advantage: CPU kabhi idle nahi rehta; overall throughput badh jata hai.</div>
          </div>

          {/* 3. Multitasking / Time-Sharing */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">3. Multitasking / Time-Sharing OS (मल्टीटास्किंग / टाइम-शेयरिंग) ★</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              Yeh Multiprogramming ka logical extension hai jisme CPU ka samay sabhi active tasks ke beech chote-chote <strong>Time Slices (Quantum, e.g. 10ms)</strong> mein divide kar diya jata hai. CPU itni tezi se ek program se doosre par switch (context switch) karta hai ki har user ko lagta hai computer sirf usi ke liye chal raha hai (Interactive environment).
            </p>
            <div className="text-xs text-brand-600 dark:text-brand-400 font-mono">Examples: Windows 10/11, Linux, macOS, Unix.</div>
          </div>

          {/* 4. Real-Time OS */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">4. Real-Time Operating System (RTOS) ★</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              Aise systems jahan inputs par response dene ke liye <strong>strict time constraints (deadlines)</strong> hoti hain. Agar deadline miss ho gayi to system fail ho jata hai:
            </p>
            <div className="space-y-1 font-mono text-xs text-slate-700 dark:text-slate-300 pl-3 border-l-2 border-brand-500">
              <div>• <strong>Hard RTOS:</strong> 1 millisecond ka delay bhi catastrophic fail ho sakta hai (e.g. Missile guidance, Car Airbag system, Nuclear reactor control).</div>
              <div>• <strong>Soft RTOS:</strong> Thoda delay tolerate ho sakta hai bina fatal crash ke (e.g. Video streaming, Mobile phone audio, Online gaming).</div>
            </div>
          </div>

          {/* 5. Distributed OS */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">5. Distributed Operating System (वितरित ऑपरेटिंग सिस्टम)</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Isme kai physical computers (nodes) network se jude hote hain aur ek single coherent system ki tarah behave karte hain. Computation aur data alag-alag machines par distributed rehte hain (Loosely coupled systems).
            </p>
          </div>
        </div>

        {/* Academic Comparison Table of OS Types */}
        <div className="my-6">
          <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>Table 1.1 • Summary Comparison of Operating System Types</span>
            <span className="text-[10px] md:hidden">↔ Swipe horizontally</span>
          </div>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs">
            <table className="w-full text-left border-collapse text-sm min-w-[560px]">
              <thead>
                <tr className="bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold">
                  <th className="py-2.5 px-4">OS Type</th>
                  <th className="py-2.5 px-4">Primary Goal</th>
                  <th className="py-2.5 px-4">User Interaction</th>
                  <th className="py-2.5 px-4">Key Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-bold text-slate-900 dark:text-slate-100">Batch OS</td>
                  <td className="py-2 px-4">Execute batches sequentially</td>
                  <td className="py-2 px-4 text-rose-500 font-mono">No direct interaction</td>
                  <td className="py-2 px-4 font-mono">IBM IBSYS</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-bold text-slate-900 dark:text-slate-100">Multiprogramming</td>
                  <td className="py-2 px-4">Maximize CPU utilization</td>
                  <td className="py-2 px-4">Moderate</td>
                  <td className="py-2 px-4 font-mono">Mainframe systems</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-bold text-slate-900 dark:text-slate-100">Time-Sharing</td>
                  <td className="py-2 px-4">Minimize response time</td>
                  <td className="py-2 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">Highly interactive</td>
                  <td className="py-2 px-4 font-mono">Linux, Windows</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2 px-4 font-bold text-slate-900 dark:text-slate-100">Real-Time (RTOS)</td>
                  <td className="py-2 px-4 font-bold text-amber-600 dark:text-amber-400">Strict adherence to deadlines</td>
                  <td className="py-2 px-4">Sensor / Event driven</td>
                  <td className="py-2 px-4 font-mono">VxWorks, QNX, FreeRTOS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.3 FUNCTIONS & SERVICES OF OS */}
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
            Functions & Services of Operating System
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (ऑपरेटिंग सिस्टम के मुख्य कार्य एवं सेवाएं)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          BTEUP exam mein OS ke mukhya functions ka vivaran bar-bar 5 marks mein pucha jata hai:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-sm">
          {/* Function 1 */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-2 mb-1 font-bold text-slate-900 dark:text-white">
              <Cpu className="w-4 h-4 text-brand-500" />
              <span>1. Process Management (प्रोसेस प्रबंधन)</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              Process create karna, delete karna, CPU scheduling ke dwara CPU allocate karna, aur inter-process communication (IPC) aur synchronization facilitate karna.
            </p>
          </div>

          {/* Function 2 */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-2 mb-1 font-bold text-slate-900 dark:text-white">
              <Layers className="w-4 h-4 text-emerald-500" />
              <span>2. Memory Management (स्मृति प्रबंधन)</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              Primary memory (RAM) ka track rakhna ki kaun sa hissa kaun se program ke paas hai. Programs ko memory allocate aur deallocate karna (Paging, Swapping).
            </p>
          </div>

          {/* Function 3 */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-2 mb-1 font-bold text-slate-900 dark:text-white">
              <HardDrive className="w-4 h-4 text-purple-500" />
              <span>3. File Management (फाइल प्रबंधन)</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              Secondary storage par files aur directories create karna, read/write permissions manage karna, aur logical directory structure implement karna.
            </p>
          </div>

          {/* Function 4 */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-2 mb-1 font-bold text-slate-900 dark:text-white">
              <Activity className="w-4 h-4 text-amber-500" />
              <span>4. Device (I/O) Management (डिवाइस प्रबंधन)</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              Device Drivers, Buffering (temporary data storage), Caching aur Spooling (e.g. print spooling) ke jariye I/O devices ko coordinate karna.
            </p>
          </div>

          {/* Function 5 */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-1 font-bold text-slate-900 dark:text-white">
              <Shield className="w-4 h-4 text-rose-500" />
              <span>5. Protection & Security (सुरक्षा एवं नियंत्रण)</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              Authentication (passwords), access control lists (read/write permissions), aur memory protection ke jariye unauthorized access aur malware se bachana.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.4 UNIX/LINUX ARCHITECTURE */}
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
            UNIX / LINUX Architecture
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (यूनिक्स / लिनक्स की संकेंद्री आर्किटेक्चरल संरचना)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          UNIX aur Linux ka architecture 4 concentric layers (संकेंद्री परतों) mein design kiya gaya hai:
        </p>

        {/* EDUCATIONAL UNIX LAYERED DIAGRAM */}
        <div className="my-8 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/50 space-y-4">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 text-center">
            Educational Diagram 1.2 • Concentric UNIX/Linux Architecture Layers
          </div>

          <div className="max-w-md mx-auto space-y-2 font-mono text-xs text-center">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 font-bold">
              LAYER 4: User Applications & Utilities (gcc, vi, grep, sh, bash)
            </div>
            <div className="text-slate-400 text-[10px]">↕ Command Execution / Scripts</div>
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 font-bold">
              LAYER 3: The Shell (Command Interpreter: bash, ksh, csh)
            </div>
            <div className="text-slate-400 text-[10px]">↕ System Calls (fork, exec, open, read)</div>
            <div className="p-3.5 rounded-xl bg-brand-500/20 text-brand-600 dark:text-brand-300 border border-brand-500/30 font-bold text-sm">
              LAYER 2: The Kernel (CPU, Memory & Device Management Engine)
            </div>
            <div className="text-slate-400 text-[10px]">↕ Device Drivers & I/O Bus</div>
            <div className="p-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold">
              LAYER 1: Hardware (CPU, RAM, Hard Disks, Network Cards)
            </div>
          </div>
        </div>

        <div className="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
          <div>• <strong>Hardware:</strong> Physical silicon, memory and disks.</div>
          <div>• <strong>Kernel:</strong> Core software jo memory mein hamesha rehta hai aur hardware se interact karta hai.</div>
          <div>• <strong>Shell:</strong> User aur Kernel ke beech ka interface. Yeh user dwara type kiye gaye commands ko interpret karke kernel-understandable system calls mein translate karta hai (e.g. <code>bash, sh, zsh</code>).</div>
          <div>• <strong>Utilities:</strong> Standard programs jo OS ke saath aate hain (jaise <code>ls, cp, rm, cat, grep, gcc</code>).</div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.5 THE KERNEL */}
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
            The Kernel (Monolithic vs Microkernel)
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (कर्नेल की संरचना: मोनोलिथिक बनाम माइक्रोकर्नल)
          </div>
        </div>

        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Definition • Kernel</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "The Kernel is the central, core component of an Operating System that remains continuously loaded in main memory (RAM) and directly controls all hardware resources."
          </blockquote>
        </div>

        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          Kernel Architectural Paradigms:
        </h3>

        {/* Academic Comparison Table: Monolithic vs Microkernel */}
        <div className="my-6">
          <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>Table 1.2 • Monolithic Kernel vs Microkernel (BTEUP Repeated)</span>
            <span className="text-[10px] md:hidden">↔ Swipe horizontally</span>
          </div>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs">
            <table className="w-full text-left border-collapse text-sm min-w-[560px]">
              <thead>
                <tr className="bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold">
                  <th className="py-2.5 px-4">Parameter</th>
                  <th className="py-2.5 px-4 text-brand-600 dark:text-brand-400">Monolithic Kernel</th>
                  <th className="py-2.5 px-4 text-emerald-600 dark:text-emerald-400">Microkernel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2.5 px-4 font-medium text-slate-900 dark:text-slate-100">Architecture</td>
                  <td className="py-2.5 px-4">Sabhi OS services (VFS, IPC, Drivers, Memory) ek hi single kernel space address space mein run hote hain.</td>
                  <td className="py-2.5 px-4">Sirf core functions (IPC, minimal memory, scheduling) kernel space mein rehte hain; drivers aur file systems user space mein run hote hain.</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2.5 px-4 font-medium text-slate-900 dark:text-slate-100">Performance</td>
                  <td className="py-2.5 px-4 font-bold text-emerald-600 dark:text-emerald-400">Fast (direct function calls in same memory)</td>
                  <td className="py-2.5 px-4 text-rose-500">Slightly slower (IPC message passing overhead)</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2.5 px-4 font-medium text-slate-900 dark:text-slate-100">Reliability & Crash</td>
                  <td className="py-2.5 px-4 text-rose-500">Ek driver crash hone par pura system crash ho jata hai (Blue Screen).</td>
                  <td className="py-2.5 px-4 font-bold text-emerald-600 dark:text-emerald-400">High stability (driver crash hone par sir wo user service restart ho jaati hai).</td>
                </tr>
                <tr className="even:bg-slate-50/50 dark:even:bg-slate-900/40">
                  <td className="py-2.5 px-4 font-medium text-slate-900 dark:text-slate-100">Examples</td>
                  <td className="py-2.5 px-4 font-mono text-xs">Traditional UNIX, Linux, MS-DOS</td>
                  <td className="py-2.5 px-4 font-mono text-xs">QNX, MINIX, Mach, L4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.6 SERVICES AND SYSTEM CALLS */}
      {/* ========================================================= */}
      <section id="sec-1-6" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.6
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Services and System Calls
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (सिस्टम कॉल्स की कार्यप्रणाली एवं डुअल-मोड ऑपरेशन)
          </div>
        </div>

        {/* Dual Mode Operation Placard */}
        <div className="my-6 pl-4 border-l-[3.5px] border-amber-500 bg-amber-500/[0.06] py-3.5 pr-4 rounded-r-md text-sm">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-1">
            <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>CORE CONCEPT • Dual-Mode Operation (Dual Mode Execution)</span>
          </div>
          <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
            CPU do modes mein kaam karta hai:
            (1) <strong>User Mode (Mode bit = 1):</strong> User programs run hote hain; hardware aur privileged instructions ko direct access nahi kar sakte.
            (2) <strong>Kernel Mode (Mode bit = 0):</strong> Privileged instructions execute hoti hain aur hardware ko direct access milta hai.
          </p>
        </div>

        <div className="my-6 pl-4 border-l-[3.5px] border-brand-500 bg-brand-50/40 dark:bg-brand-500/[0.04] py-3.5 pr-4 rounded-r-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Definition • System Call</span>
          </div>
          <blockquote className="text-slate-900 dark:text-slate-100 font-medium text-base sm:text-[17px] leading-relaxed italic">
            "A System Call is a programmatic interface through which a user application requests services from the operating system kernel."
          </blockquote>
          <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 not-italic">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700 dark:text-slate-300 font-medium">Kaise Kaam Karta Hai:</strong> Jab user program ko disk se file read karni ho ya screen par print karna ho, to program ek <strong>TRAP / Software Interrupt</strong> trigger karta hai. CPU User Mode (1) se Kernel Mode (0) mein switch karta hai, kernel service execute karta hai, aur result wapas dekar User Mode mein laut aata hai.
            </span>
          </div>
        </div>

        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          Types of System Calls with Standard Examples:
        </h3>
        <div className="space-y-3 font-mono text-xs sm:text-sm my-4">
          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <span className="font-sans font-bold text-brand-600 dark:text-brand-400 block mb-1">1. Process Control:</span>
            <code>fork()</code> (naya process banana), <code>exit()</code> (process terminate karna), <code>wait()</code> (child process ka intezar karna), <code>exec()</code> (naya program load karna).
          </div>
          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <span className="font-sans font-bold text-emerald-600 dark:text-emerald-400 block mb-1">2. File Management:</span>
            <code>open()</code>, <code>read()</code>, <code>write()</code>, <code>close()</code>, <code>create()</code>, <code>unlink()</code>.
          </div>
          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <span className="font-sans font-bold text-purple-600 dark:text-purple-400 block mb-1">3. Device Management:</span>
            <code>ioctl()</code>, <code>read()</code>, <code>write()</code>, request and release device.
          </div>
          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <span className="font-sans font-bold text-amber-600 dark:text-amber-400 block mb-1">4. Information Maintenance:</span>
            <code>getpid()</code> (Process ID pata karna), <code>alarm()</code>, <code>sleep()</code>, <code>time()</code>.
          </div>
          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <span className="font-sans font-bold text-rose-600 dark:text-rose-400 block mb-1">5. Communication:</span>
            <code>pipe()</code>, <code>shmget()</code> (shared memory banana), <code>socket()</code>.
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1.7 SYSTEM PROGRAMS */}
      {/* ========================================================= */}
      <section id="sec-1-7" className="scroll-mt-24 pt-4 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 1.7
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            System Programs
          </h2>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            (सिस्टम प्रोग्राम्स: यूटिलिटी एवं विकास वातावरण)
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          System Programs ek aasan environment provide karte hain program development aur execution ke liye. Yeh user interface aur system calls ke beech bridge ka kaam karte hain:
        </p>

        <ul className="list-disc list-outside pl-5 space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6">
          <li><strong>File Manipulation:</strong> Files create, copy, delete, rename, print karne wale tools (e.g. <code>cp, rm, mv, ls</code>).</li>
          <li><strong>Status Information:</strong> System date, time, memory usage, current active users check karne wale tools (e.g. <code>date, top, ps, who</code>).</li>
          <li><strong>Programming Language Support:</strong> Compilers, assemblers, debuggers aur interpreters (e.g. <code>gcc, gdb, python</code>).</li>
          <li><strong>Program Loading and Execution:</strong> Loaders, linkers jo code ko memory mein load karke run karte hain.</li>
          <li><strong>Communications:</strong> Remote login, email, web access (e.g. <code>ssh, ftp, ping</code>).</li>
        </ul>
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
                <p className="font-semibold text-slate-900 dark:text-slate-100">What is the mode bit value in Kernel Mode?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5 font-bold">Ans: Mode bit = 0 (Zero).</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Which system call is used to create a new process in UNIX?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5 font-bold">Ans: fork() system call.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">What is the main role of a Shell in UNIX?</p>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5">Ans: Command Interpreter (translates user commands to kernel system calls).</p>
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
                <p className="font-semibold text-slate-900 dark:text-slate-100">Differentiate between Hard RTOS and Soft RTOS with examples.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Hard RTOS guarantees strict deadline fulfillment without any delay (e.g. missile guidance, pacemaker). Soft RTOS permits occasional slight delay without catastrophic failure (e.g. multimedia audio/video streaming).</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">What is Dual-Mode Operation and why is it needed?</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Dual-mode operation (User mode vs Kernel mode) provides hardware protection so that erroneous user programs cannot overwrite OS memory or directly alter physical I/O devices.</p>
              </li>
            </ol>
          </div>

          {/* 5 Mark Questions */}
          <div className="p-5 rounded-xl border border-brand-500/20 bg-brand-500/[0.02] dark:bg-brand-500/[0.04]">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-brand-500/20">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20">
                5 MARKS QUESTIONS
              </span>
              <span className="text-xs text-slate-400 font-mono">Architectures & Detailed Comparisons</span>
            </div>
            <ol className="list-decimal list-outside pl-5 space-y-4 text-sm text-slate-800 dark:text-slate-200">
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Explain the architecture of UNIX / LINUX operating system with a neat diagram.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Draw the concentric layer diagram (Hardware → Kernel → Shell → Utilities &amp; User Applications). Explain each layer's responsibilities and how system calls flow from shell to kernel.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Differentiate between Monolithic Kernel and Microkernel architectures.</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Ans: Detail address space separation, performance, failure containment, extensibility, and provide real-world examples (Linux for monolithic; QNX/MINIX for microkernel).</p>
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
              <li><strong>OS:</strong> Intermediary between user programs and physical hardware.</li>
              <li><strong>Multiprogramming:</strong> Keeps CPU busy by keeping multiple jobs in RAM.</li>
              <li><strong>Time-Sharing:</strong> Fast context switching across time slices for interactive use.</li>
              <li><strong>RTOS:</strong> Strict time deadline bound (Hard vs Soft).</li>
              <li><strong>UNIX:</strong> Layered architecture (Hardware → Kernel → Shell → Utilities).</li>
              <li><strong>Kernel:</strong> Core engine loaded in RAM (Monolithic vs Microkernel).</li>
              <li><strong>System Call:</strong> Programmatic interface to request kernel services (switches User Mode 1 to Kernel Mode 0 via Trap).</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
};

export default OsUnit1Content;
