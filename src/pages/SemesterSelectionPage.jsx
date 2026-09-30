import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { semestersData, ACADEMIC_CYCLE } from '../data/semestersData';
import {
  Laptop,
  ArrowRight,
  Clock,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
  BookOpen
} from 'lucide-react';

export const SemesterSelectionPage = () => {
  const breadcrumbItems = [
    { label: 'Branches', to: '/#branches' },
    { label: 'CSE Learning Path' }
  ];

  // Subject quick tags for each semester to enrich the pathway
  const semesterSubjectsPreview = {
    1: ['Applied Physics - 1', 'Mathematics - 1', 'Applied Chemistry', 'FEEE', 'Intro to IT', 'Communication Skills'],
    2: ['Applied Mathematics - 2', 'Applied Physics - 2', 'Programming in C', 'Basics of IT'],
    3: ['DBMS (Database Management)', 'Computer Network (CN)', 'Operating System (OS)'],
    4: ['Data Structures using C', 'Communication Skills - 2', 'E-Commerce', 'Energy Conservation'],
    5: ['Information Security', 'Multimedia Technologies', 'Industrial Training'],
    6: ['Android Apps Development', 'Cloud Computing', 'Major Engineering Project'],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* CSE Learning Path Header Plate */}
      <div className="relative rounded-3xl border border-slate-200/80 dark:border-cyan-500/20 bg-white dark:bg-[#0c1a2d] p-6 sm:p-10 overflow-hidden shadow-sm">
        {/* Subtle engineering line along the top */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-500" />
        
        {/* Background grid details */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="relative space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md font-mono text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              <Laptop className="w-3.5 h-3.5" />
              <span>DIPLOMA IN COMPUTER SCIENCE & ENGINEERING</span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Active Cycle: Odd Semesters</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            CSE Learning Path
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Uttar Pradesh Polytechnic 3-year diploma curriculum progression. Select your semester below to access structured unit notes, derivations, and BTEUP exam preparation.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>• Odd Semesters: 01, 03, 05 (Available Now)</span>
            <span>• Even Semesters: 02, 04, 06 (Upcoming Cycle)</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TIMELINE-INSPIRED / ASYMMETRIC SEMESTER LEARNING PATH */}
      {/* ========================================================================= */}
      <div className="relative space-y-8">
        
        {/* Vertical Timeline Spine (Hidden on tiny screens) */}
        <div className="hidden md:block absolute left-8 lg:left-12 top-6 bottom-6 w-0.5 border-l-2 border-dashed border-slate-300 dark:border-cyan-500/25" />

        <div className="space-y-6">
          {semestersData.map((sem, index) => {
            const isActive = sem.isAvailable;
            const subjectsList = semesterSubjectsPreview[sem.number] || [];

            return (
              <div
                key={sem.id}
                className="relative flex flex-col md:flex-row items-stretch md:items-center gap-4 lg:gap-8 group"
              >
                {/* Timeline Milestone Marker (Number Bubble) */}
                <div className="hidden md:flex flex-col items-center justify-center shrink-0 z-10">
                  <div
                    className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl border-2 flex flex-col items-center justify-center font-mono transition-all duration-200 shadow-md ${
                      isActive
                        ? 'bg-slate-900 dark:bg-[#070f1c] border-cyan-500 text-cyan-400 group-hover:scale-105 group-hover:shadow-cyan-500/20'
                        : 'bg-slate-100 dark:bg-[#0c1a2d] border-slate-300 dark:border-white/10 text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400">
                      SEM
                    </span>
                    <span className="text-2xl lg:text-3xl font-extrabold leading-none">
                      0{sem.number}
                    </span>
                  </div>
                </div>

                {/* Milestone Content Card */}
                <div
                  className={`flex-1 rounded-2xl sm:rounded-3xl border p-5 sm:p-7 transition-all duration-200 ${
                    isActive
                      ? 'bg-white dark:bg-[#0c1a2d] border-slate-200 dark:border-cyan-500/30 hover:border-cyan-400 dark:hover:border-cyan-400 shadow-sm hover:shadow-lg hover:shadow-cyan-500/10'
                      : 'bg-slate-100/60 dark:bg-[#0c1a2d]/40 border-slate-200 dark:border-white/5 opacity-75'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    
                    {/* Left: Info & Subjects */}
                    <div className="space-y-3">
                      {/* Mobile Header: Visible on mobile where timeline bubble is hidden */}
                      <div className="flex md:hidden items-center justify-between">
                        <span className="font-mono text-xl font-black text-cyan-600 dark:text-cyan-400">
                          0{sem.number}
                        </span>
                        {isActive ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            Available Now
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                            Coming Soon
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                          {sem.year} • {sem.cycle}
                        </span>

                        <div className="hidden md:inline-flex">
                          {isActive ? (
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              <span>Available Now</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                              <Clock className="w-3 h-3" />
                              <span>Coming Soon</span>
                            </span>
                          )}
                        </div>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                        {sem.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                        {sem.description}
                      </p>

                      {/* Subject Preview Pills */}
                      <div className="pt-1">
                        <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold block mb-1.5">
                          Curriculum Subjects:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {subjectsList.map((subj, idx) => (
                            <span
                              key={idx}
                              className={`text-[11px] font-sans px-2.5 py-0.5 rounded-md border ${
                                isActive
                                  ? 'bg-slate-50 dark:bg-[#12263d] text-slate-700 dark:text-slate-200 border-slate-200 dark:border-cyan-500/20'
                                  : 'bg-slate-200/50 dark:bg-white/5 text-slate-500 dark:text-slate-400 border-transparent'
                              }`}
                            >
                              {subj}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Action CTA */}
                    <div className="lg:shrink-0 pt-3 lg:pt-0">
                      {isActive ? (
                        <Link
                          to={`/semester/${sem.id}`}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-600/25 transition-all w-full lg:w-auto"
                        >
                          <span>Explore Semester {sem.number}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      ) : (
                        <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-white/10 text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium w-full lg:w-auto select-none bg-slate-50/50 dark:bg-white/[0.02]">
                          <Lock className="w-3.5 h-3.5 text-slate-400" />
                          <span>Opens in Even Term</span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};

export default SemesterSelectionPage;
