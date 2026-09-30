import React from 'react';
import {
  Award,
  Compass,
  FileText,
  Calendar,
} from 'lucide-react';

export const CsUnit5Content = () => {
  return (
    <article className="study-section-reveal text-slate-800 dark:text-slate-200">
      <header className="mb-14 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border border-brand-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIT 05</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
            Communication Skills in English (Semester 1)
          </span>
        </div>

        <div className="space-y-1 mb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Professional Writing
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">Topics Covered:</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">CV vs Resume & Cover Letter</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Agenda & Minutes of Meeting (MoM)</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Notices, Memos & Circulars</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Official Letters & Technical Reports</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">Email Etiquette & Drafting Standards</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl border-l-2 border-brand-500/40 pl-4 py-1">
          Corporate aur engineering workspace me verbal baaton se zyada written paper trails ki value hoti hai. Har order, meeting decision, fault complaint aur job application officially document ki jaati hai. Is unit me hum standard industry formats, live model templates aur drafting techniques ko step-by-step master karenge.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 5.1 CV / Resume and Covering Letter */}
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
            CV / Resume and Covering Letter
          </h2>
        </div>

        {/* CV vs Resume */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Curriculum Vitae (CV) vs Resume: The Critical Difference</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Aksar students in dono shabdon ko ek hi samajhte hain, lekin inke scope aur purpose me bada antar hota hai:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              <tr>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Feature</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Resume</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Curriculum Vitae (CV)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Etymology / Origin</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">French word meaning <em>"Summary"</em>.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Latin phrase meaning <em>"Course of Life"</em>.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Length</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Short & concise (Strictly 1 to 2 pages max).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Detailed & comprehensive (3 to 10+ pages).</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Target Purpose</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Targeted for specific corporate job openings (customized for each role).</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Used for academic, scientific research, professorships, PhD grants.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">Content Focus</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Core skills, hands-on projects, diplomas, and immediate relevant capabilities.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Entire life history: Research publications, thesis, patents, awards, presentations.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Anatomy of a Modern Polytechnic Diploma Resume */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Structure of a Professional Chronological Resume for Freshers</span>
        </h3>

        <div className="space-y-3 mb-6">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-lg">
            <span className="font-bold text-xs sm:text-sm text-brand-600 dark:text-brand-400 block mb-0.5">1. Header:</span>
            <p className="text-xs text-slate-600 dark:text-slate-300">Full Name (bold capital), Professional Title (e.g., <em>Diploma Electrical Engineer</em>), Phone number, Professional Email (e.g. <em>rahul.sharma.ee@gmail.com</em>), LinkedIn URL, City/State.</p>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-lg">
            <span className="font-bold text-xs sm:text-sm text-brand-600 dark:text-brand-400 block mb-0.5">2. Career Objective:</span>
            <p className="text-xs text-slate-600 dark:text-slate-300">2-3 lines stating how your skills will add measurable value to the employer (avoid generic lines like <em>"seeking a challenging position"</em>).</p>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-lg">
            <span className="font-bold text-xs sm:text-sm text-brand-600 dark:text-brand-400 block mb-0.5">3. Technical & Soft Skills:</span>
            <p className="text-xs text-slate-600 dark:text-slate-300">Bullet points of hard skills (AutoCAD, PLC, MATLAB, Circuit Troubleshooting) and soft skills (Active listening, technical reporting, teamwork).</p>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-lg">
            <span className="font-bold text-xs sm:text-sm text-brand-600 dark:text-brand-400 block mb-0.5">4. Education Table:</span>
            <p className="text-xs text-slate-600 dark:text-slate-300">Reverse chronological order (Diploma in Engineering $\to$ Class 10th/12th, Board/University, Year of Passing, Percentage/CGPA).</p>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-lg">
            <span className="font-bold text-xs sm:text-sm text-brand-600 dark:text-brand-400 block mb-0.5">5. Academic Projects & Industrial Training:</span>
            <p className="text-xs text-slate-600 dark:text-slate-300">Final year diploma project title, objective, components used, and your personal contribution (e.g. <em>"Design of 12V Solar Battery Charging Controller"</em>).</p>
          </div>
        </div>

        {/* Covering Letter Model */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Covering Letter: Purpose & Model Template</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Covering letter resume ke sath bheja jane wala ek formal one-page document hota hai jo candidate ka brief introduction deta hai aur yeh explain karta hai ki candidate is specific role ke liye kyu best match hai:
        </p>

        <div className="bg-slate-900 text-slate-100 p-5 rounded-lg font-mono text-xs leading-relaxed mb-6 space-y-2 border border-slate-700">
          <p className="text-slate-400">// MODEL COVERING LETTER FOR DIPLOMA ENGINEER</p>
          <p>From:<br />Rahul Kumar<br />Diploma in Electrical Engineering<br />Lucknow, Uttar Pradesh | +91 9876543210 | rahul.ee@email.com</p>
          <p className="text-slate-400">Date: 15th October 2026</p>
          <p>To:<br />The HR Manager,<br />L&T Construction & Electrical Division,<br />Noida, Uttar Pradesh</p>
          <p className="text-yellow-400 font-bold">Subject: Application for the position of Junior Trainee Engineer (Electrical)</p>
          <p>Dear Sir/Madam,</p>
          <p>
            With reference to your job advertisement on the National Career Portal regarding the opening for Junior Trainee Engineer, I wish to submit my candidature for the same. I have recently completed my 3-Year Diploma in Electrical Engineering from Government Polytechnic, Lucknow with an aggregate of 81.4%.
          </p>
          <p>
            During my diploma curriculum, I developed a strong foundational grasp of Transformers, AC/DC Machines, and Industrial Switchgear. In my final year project, I led a four-member team to design an 'Automatic Solar Tracking System', which honed my circuit assembly, PCB soldering, and troubleshooting competencies. Furthermore, during my 4-week industrial summer training at UPPCL Substation, I gained hands-on familiarity with safety protocols and busbar maintenance.
          </p>
          <p>
            I am confident that my technical skills, disciplined work ethic, and adaptability will make me a productive contributor to L&T's engineering projects. My detailed resume is enclosed for your kind perusal. I eagerly look forward to the opportunity of an interview.
          </p>
          <p>Thanking you.<br />Yours sincerely,<br /><strong>Rahul Kumar</strong><br />Enclosure: Resume</p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5.2 Agenda and Minutes */}
      {/* ========================================================= */}
      <section id="sec-5-2" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.2
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Agenda and Minutes of Meeting (MoM)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-brand-600 dark:text-brand-400 text-sm mb-1 flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>Agenda (Meeting se Pehle ki List)</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              Agenda meeting me discuss hone wale topics aur items ka ek chronological list hota hai. Iska purpose hota hai meeting ko focus me rakhna aur time waste hone se bachana.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <strong>Key Rule:</strong> Agenda meeting date se kam se kam 2-3 din <strong>PEHLE</strong> sabhi attendees ko bheja jaata hai taaki woh data aur preparation ke sath aayein.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-emerald-600 dark:text-emerald-400 text-sm mb-1 flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <span>Minutes of Meeting (MoM - Baad ka Record)</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              Meeting ke dauran kya baatein hui, kya decisions liye gaye, aur kaunsa task kis person ko kis deadline tak diya gaya — iska official, legally binding written record MoM kehlata hai.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <strong>Key Rule:</strong> MoM meeting khatam hone ke <strong>BAAD</strong> 24 ghante ke andar circulate kiya jaata hai aur Chairperson ke signature se approve hota hai.
            </p>
          </div>
        </div>

        {/* Solved Model MoM */}
        <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-2">
          Solved Model Template: Minutes of Safety Committee Meeting
        </h4>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-lg font-mono text-xs leading-relaxed mb-6 space-y-2 border border-slate-700">
          <p className="text-center font-bold text-amber-400 text-sm">MINUTES OF THE INDUSTRIAL SAFETY COMMITTEE MEETING</p>
          <p><strong>Date & Time:</strong> October 10, 2026 | 11:00 AM - 12:30 PM<br /><strong>Venue:</strong> Conference Hall B, Plant No. 2<br /><strong>Chaired by:</strong> Mr. V. K. Singh (General Manager - Operations)</p>
          <p><strong>Members Present:</strong> R. Verma (Plant Head), S. Gupta (Safety Officer), A. Khan (Maintenance Head), P. Sharma (Electrical Engineer).<br /><strong>Apologies for Absence:</strong> M. Das (Medical Officer - On leave).</p>
          <p className="text-emerald-400 font-bold mt-2">1. Confirmation of Previous Minutes:</p>
          <p>The minutes of the previous safety meeting held on September 15 were reviewed and approved unanimously.</p>
          <p className="text-emerald-400 font-bold mt-2">2. Key Discussions & Decisions Reached:</p>
          <p>• <strong>Issue:</strong> Frequent oil spillages reported near CNC Lathe Section.<br />• <strong>Decision:</strong> Anti-skid industrial mats will be procured immediately and drip trays installed.</p>
          <p className="text-emerald-400 font-bold mt-2">3. Action Item Matrix (Accountability):</p>
          <div className="p-2 bg-slate-800 rounded">
            <p>Task 1: Procure 20 anti-skid floor mats | Assigned to: S. Gupta | Deadline: Oct 18, 2026</p>
            <p>Task 2: Electrical earthing inspection of Panel 4 | Assigned to: P. Sharma | Deadline: Oct 22, 2026</p>
          </div>
          <p className="mt-2 text-right">Recorded by: <strong>P. Sharma</strong> (Secretary) | Approved by: <strong>V. K. Singh</strong> (Chairperson)</p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5.3 Notices, Memos, and Circulars */}
      {/* ========================================================= */}
      <section id="sec-5-3" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.3
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Notices, Memos (Memorandum), and Circulars
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          Yeh teenon official administrative communication ke forms hain, lekin inke audience aur tone me antar hota hai:
        </p>

        {/* 3-Way Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              <tr>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Document</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Primary Purpose</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Target Audience</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Display / Delivery Method</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">Notice</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Formal public announcement of an upcoming event, rule, lost item, or holiday.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">All students, general staff, or general public.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Pinned on physical notice board or digital college web portal.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">Memo (Memorandum)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Short internal message to remind, instruct, or record internal policy changes.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Specific team, individual employee, or intra-department.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Hand-delivered desk paper or direct internal corporate email.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-semibold text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">Circular</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Distributing a uniform directive, rule revision, or policy to many units simultaneously.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Mass workforce across multiple branches, departments, or institutes.</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Official circulated printed circular letter or all-hands company mailing list.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Model Notice Template */}
        <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-2">
          Model Format of a Formal Notice (Put in a Box):
        </h4>
        <div className="p-5 rounded-lg border-2 border-slate-400 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/60 font-sans text-xs sm:text-sm text-slate-800 dark:text-slate-200 mb-6 space-y-2">
          <p className="text-center font-bold text-sm tracking-wide text-brand-600 dark:text-brand-400">
            GOVERNMENT POLYTECHNIC, LUCKNOW
          </p>
          <p className="text-center font-extrabold text-base tracking-widest text-slate-900 dark:text-white">
            NOTICE
          </p>
          <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 pt-1">
            <span>Ref No: GPL/2026/TR-104</span>
            <span>Date: 20th October 2026</span>
          </div>
          <p className="text-center font-bold text-sm underline pt-2 text-slate-900 dark:text-white">
            INDUSTRIAL VISIT TO BHEL (BHARAT HEAVY ELECTRICALS LTD)
          </p>
          <p className="leading-relaxed">
            All students of Diploma Semester 1 (Electrical & Mechanical Engineering) are hereby informed that an official industrial visit to BHEL Haridwar has been scheduled for <strong>5th November 2026</strong>. The visit aims to provide practical exposure to heavy transformer fabrication and steam turbine testing bays.
          </p>
          <p className="leading-relaxed">
            Interested students must submit the signed parental consent form along with a nominal travel fee of ₹500 to their respective Class Representatives by <strong>28th October 2026</strong>. Late submissions will not be accommodated under any circumstances.
          </p>
          <div className="pt-3">
            <p className="font-bold text-slate-900 dark:text-white">Dr. K. N. Sen</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Head of Department (Training & Placement)</p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5.4 Official Letters and Reports */}
      {/* ========================================================= */}
      <section id="sec-5-4" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.4
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Official Letters and Technical Reports
          </h2>
        </div>

        {/* Official Letter Structure */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Full Block Format for Official Business Letters</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Modern corporate standards me <strong>Full Block Style</strong> follow hota hai jisme saari lines left margin se start hoti hain (no indentation):
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-slate-700 dark:text-slate-300">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <strong>1. Sender's Address:</strong> Company letterhead ya top left address.
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <strong>2. Date:</strong> Full alphanumeric (e.g. <em>14 October 2026</em>).
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <strong>3. Inside Address:</strong> Recipient ka designation, company aur city.
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <strong>4. Subject Line:</strong> 1-line bold concise summary.
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <strong>5. Salutation:</strong> <em>Dear Sir / Madam,</em>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <strong>6. 3-Part Body:</strong> Intro $\to$ Detailed facts/figures $\to$ Concluding action.
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <strong>7. Complimentary Close:</strong> <em>Yours faithfully / Yours sincerely</em>.
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg">
            <strong>8. Signature & Enclosures:</strong> Name, designation, stamp, list of docs.
          </div>
        </div>

        {/* Technical Report Architecture */}
        <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
          <span>Structure of a Formal Technical Report</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-4">
          Jab industry me koi machine break down hoti hai ya new project complete hota hai, to management ek factual investigation report maangti hai:
        </p>

        <ul className="list-disc list-outside space-y-2 text-slate-700 dark:text-slate-300 text-sm mb-6 pl-5">
          <li><strong>1. Title Page:</strong> Project name, Author name, Designation, Submission date.</li>
          <li><strong>2. Executive Summary / Abstract:</strong> Poori report ka 1-paragraph summary (problem, method, main finding, recommendation).</li>
          <li><strong>3. Introduction & Background:</strong> Investigation ka objective aur context.</li>
          <li><strong>4. Methodology / Investigation Process:</strong> Lab testing steps, sensor readings, site inspection.</li>
          <li><strong>5. Findings & Data Analysis:</strong> Tables, bar charts, graphs ke sath findings.</li>
          <li><strong>6. Conclusions:</strong> Data se nikla factual final conclusion.</li>
          <li><strong>7. Recommendations:</strong> Problem solve karne ke liye action steps (e.g. replace bearings, install stabilizer).</li>
        </ul>
      </section>

      {/* ========================================================= */}
      {/* 5.5 Email Drafting */}
      {/* ========================================================= */}
      <section id="sec-5-5" className="scroll-mt-24 pt-4 first:pt-0 mb-16">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              SECTION 5.5
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-500/30 via-slate-200 dark:via-slate-800 to-transparent"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Professional Email Drafting (Corporate Netiquette)
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
          Email aaj ke corporate world ka official backbone hai. WhatsApp jaisa casual messaging corporate email me allow nahi hota:
        </p>

        {/* Email Etiquette Rules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-xs sm:text-sm text-brand-600 dark:text-brand-400 mb-1">1. Laser-Sharp Subject Line:</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Subject blank kabhi mat chhodein. Vague subjects (<em>"Help"</em>, <em>"Query"</em>, <em>"Urgent"</em>) spam folder me chale jaate hain.<br />
              <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">Good: "Leave Application: Viral Fever (12-14 Oct) - Amit Singh"</span>
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-xs sm:text-sm text-brand-600 dark:text-brand-400 mb-1">2. CC vs BCC Rules:</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              <strong>CC (Carbon Copy):</strong> Un logon ke liye jinhe loop me rakhna zaroori hai (information only).<br />
              <strong>BCC (Blind Carbon Copy):</strong> Confidential mass emails jahan recipients ke email addresses ek doosre se chupane hon.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-xs sm:text-sm text-brand-600 dark:text-brand-400 mb-1">3. Attachment Protocol:</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Email body me hamesha likhein <em>"Please find the attached report"</em>. Files ka name professional rakhein (e.g. <em>Lab_Report_Group_B.pdf</em>, not <em>doc1234.pdf</em>).
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-xs sm:text-sm text-brand-600 dark:text-brand-400 mb-1">4. Professional Signature:</h5>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              End me automated email signature set karein: Full Name, Designation, Department, Phone, Company/Institute Name.
            </p>
          </div>
        </div>

        {/* Model Professional Email */}
        <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-2">
          Solved Model Professional Email: Project Equipment Request
        </h4>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-lg font-mono text-xs leading-relaxed mb-6 space-y-2 border border-slate-700">
          <p><span className="text-slate-400">To:</span> equipment.store@polytechnic.ac.in</p>
          <p><span className="text-slate-400">Cc:</span> hod.electrical@polytechnic.ac.in</p>
          <p className="text-yellow-400 font-bold"><span className="text-slate-400">Subject:</span> Requisition for Digital Multimeters for Final Year Lab Project - Batch 04</p>
          <p className="pt-1">Respected Sir,</p>
          <p>
            I am writing on behalf of Project Batch 04 (Diploma Electrical Semester 1). We are currently fabricating our semester prototype project titled <em>'Solar Dual-Axis Inverter System'</em> under the mentorship of Prof. A. K. Joshi.
          </p>
          <p>
            To calibrate voltage and current parameters across the step-up transformer, we urgently require the following equipment for a period of one week:
          </p>
          <div className="p-2 bg-slate-800 rounded">
            <p>1. Digital Multimeter (True RMS, Fluke 101) - 02 Nos.</p>
            <p>2. Variable Regulated DC Power Supply (0-30V, 5A) - 01 No.</p>
            <p>3. Connecting Crocodile Probes - 06 Pairs.</p>
          </div>
          <p>
            The project approval letter signed by our HOD is attached herewith for your reference. We would be grateful if you could issue these instruments from the departmental central store by tomorrow afternoon.
          </p>
          <p>Thank you for your assistance.</p>
          <p className="pt-1">
            Warm regards,<br />
            <strong>Mohit Srivastava</strong><br />
            Student Leader, Project Batch 04<br />
            Roll No: 26010482012 | Government Polytechnic, Lucknow<br />
            Contact: +91 94150XXXXX
          </p>
        </div>

        {/* Quick Revision Card */}
        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <h4 className="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-500" />
            <span>Unit 5 Quick Revision Takeaway</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            • Resume is a targeted 1-2 page summary for jobs; CV is a detailed academic history.<br />
            • Always attach a tailored Covering Letter with your job resume.<br />
            • Agenda is circulated BEFORE a meeting; Minutes of Meeting (MoM) records decisions AFTER the meeting.<br />
            • Notice is a public board announcement; Memo is for internal company use; Circular is for mass workforce.<br />
            • Business emails require specific subject lines, formal greetings, concise bulleted bodies, and professional signatures.
          </p>
        </div>
      </section>
    </article>
  );
};

export default CsUnit5Content;
