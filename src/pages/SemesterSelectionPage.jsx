import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { getSemestersByBranch } from '../data/semestersData';
import { getBranchById } from '../data/branchesData';
import {
  Laptop,
  ArrowRight,
  Clock,
  Lock,
  Sparkles,
} from 'lucide-react';

export const SemesterSelectionPage = () => {
  const { branchId: paramBranchId } = useParams();
  const location = useLocation();

  // Extract branch ID from route params, path segments, or query string
  const queryBranch = new URLSearchParams(location.search).get('branch');
  const pathSegment = location.pathname.split('/').filter(Boolean)[0];
  const detectedBranchId = paramBranchId || queryBranch || (pathSegment !== 'semesters' ? pathSegment : 'cse');

  const branch = getBranchById(detectedBranchId);
  const semesters = getSemestersByBranch(branch.id);
  const BranchIcon = branch.icon || Laptop;

  const breadcrumbItems = [
    { label: 'Branches', to: '/#branches' },
    { label: `${branch.code} Learning Path` }
  ];

  // Subject quick tags for each semester
  const semesterSubjectsPreview = {
    1: ['Applied Physics - 1', 'Mathematics - 1', 'Applied Chemistry', 'FEEE', 'Intro to IT', 'Communication Skills'],
    2: ['Applied Mathematics - 2', 'Applied Physics - 2', 'Programming in C', 'Basics of IT'],
    3: branch.id === 'cse' 
      ? ['DBMS (Database Management)', 'Computer Network (CN)', 'Operating System (OS)']
      : ['Branch Core Subjects', 'Specialized Theory', 'Lab Practical Curriculum'],
    4: ['Data Structures using C', 'Communication Skills - 2', 'E-Commerce', 'Energy Conservation'],
    5: branch.id === 'cse'
      ? ['Information Security', 'Multimedia Technologies', 'Industrial Training']
      : ['Advanced Branch Electives', 'Industrial Training', 'Project Outline'],
    6: ['Android Apps Development', 'Cloud Computing', 'Major Engineering Project'],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 text-[#f5f5f5]">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Branch Learning Path Header Plate */}
      <div className="relative rounded-3xl border border-white/10 bg-[#121212] p-6 sm:p-10 overflow-hidden shadow-sm">
        {/* Subtle red engineering hairline along the top */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-600" />
        
        {/* Background red dot grid */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="relative space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md font-mono text-xs font-bold uppercase tracking-wider bg-red-600/10 text-red-400 border border-red-600/30">
              <BranchIcon className="w-3.5 h-3.5" />
              <span>{branch.fullName}</span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Active Cycle: Odd Semesters</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight flex items-center gap-3">
            <span className="w-2 h-8 sm:w-2.5 sm:h-10 rounded-full bg-red-600 inline-block shadow-[0_0_12px_rgba(230,57,70,0.6)]" />
            <span>{branch.code} Learning Path</span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-3xl leading-relaxed">
            Uttar Pradesh Polytechnic 3-year diploma curriculum progression for {branch.name}.
            First semester subjects are common across all BTEUP engineering branches. Select your semester below to access verified unit notes, derivations, and BTEUP exam preparation.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
            <span>• Semester 01: Common Across All Branches (Available Now)</span>
            <span>• Odd Semesters: 01{branch.id === 'cse' ? ', 03, 05 (Active)' : ' (Live)'}</span>
            <span>• Even Semesters: 02, 04, 06 (Upcoming Cycle)</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TIMELINE-INSPIRED / ASYMMETRIC SEMESTER PROGRESSION */}
      {/* ========================================================================= */}
      <div className="relative space-y-8">
        
        {/* Vertical Timeline Spine in Red */}
        <div className="hidden md:block absolute left-8 lg:left-12 top-6 bottom-6 w-0.5 border-l-2 border-dashed border-red-600/25" />

        <div className="space-y-6">
          {semesters.map((sem) => {
            const isActive = sem.isAvailable;
            const isCommon = sem.isCommon || sem.number === 1;
            const subjectsList = semesterSubjectsPreview[sem.number] || [];
            
            // Build the destination URL
            const semesterLink = isCommon
              ? `/${branch.id}/semester-1`
              : `/semester/${sem.id}`;

            return (
              <div
                key={sem.id}
                className="relative flex flex-col md:flex-row items-stretch md:items-center gap-4 lg:gap-8 group"
              >
                {/* Timeline Milestone Marker (Number Bubble) */}
                <div className="hidden md:flex flex-col items-center justify-center shrink-0 z-10">
                  <div
                    className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl border-2 flex flex-col items-center justify-center font-mono shadow-md ${
                      isActive
                        ? 'bg-[#0f0f0f] border-red-600/70 text-red-500 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(230,57,70,0.35)]'
                        : 'bg-[#141414] border-white/10 text-neutral-500'
                    }`}
                    style={{ transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease' }}
                  >
                    <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
                      SEM
                    </span>
                    <span className="text-2xl lg:text-3xl font-extrabold leading-none">
                      0{sem.number}
                    </span>
                  </div>
                </div>

                {/* Milestone Content Card with 220ms Hover Interaction */}
                <div
                  className={`flex-1 rounded-2xl sm:rounded-3xl border p-5 sm:p-7 overflow-hidden ${
                    isActive
                      ? 'bg-[#171717] border-white/10 hover:border-red-500/70 hover:bg-[#1c1c1c] shadow-sm hover:shadow-[0_14px_35px_-8px_rgba(230,57,70,0.22)]'
                      : 'bg-[#111111] border-white/5 opacity-75'
                  }`}
                  style={{
                    transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, background 220ms ease',
                  }}
                  onMouseEnter={(e) => {
                    if (isActive) {
                      e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isActive) {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    }
                  }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    
                    {/* Left: Info & Subjects */}
                    <div className="space-y-3">
                      {/* Mobile Header: Visible on mobile where timeline bubble is hidden */}
                      <div className="flex md:hidden items-center justify-between">
                        <span className="font-mono text-xl font-black text-red-500">
                          0{sem.number}
                        </span>
                        {isActive ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            Available Now
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                            {sem.statusText || 'Coming Soon'}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/10">
                          {sem.year} • {sem.cycle}
                        </span>

                        {/* Subtle Informational Label for Common Semester 1 */}
                        {isCommon && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-red-600/15 text-red-400 border border-red-600/30">
                            <Sparkles className="w-3 h-3 text-red-400" />
                            <span>Common BTEUP Semester</span>
                          </span>
                        )}

                        <div className="hidden md:inline-flex">
                          {isActive ? (
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              <span>Available Now</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                              <Clock className="w-3 h-3 text-red-400" />
                              <span>{sem.statusText || 'Coming Soon'}</span>
                            </span>
                          )}
                        </div>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
                        <span>{sem.title}</span>
                        {isCommon && (
                          <span className="text-xs font-mono font-normal text-neutral-400 hidden sm:inline">
                            (Common Across Branches)
                          </span>
                        )}
                      </h2>

                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl">
                        {isCommon
                          ? 'Foundational engineering curriculum common across all BTEUP polytechnic branches (CSE, Mechanical, Electronics, Instrumentation & IT). Access unified verified subject textbooks and chapter notes.'
                          : sem.description}
                      </p>

                      {/* Subject Preview Pills */}
                      <div className="pt-1">
                        <span className="text-[11px] font-mono text-neutral-500 uppercase font-semibold block mb-1.5">
                          {isCommon ? 'Common BTEUP Subjects:' : 'Curriculum Subjects:'}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {subjectsList.map((subj, idx) => (
                            <span
                              key={idx}
                              className={`text-[11px] font-sans px-2.5 py-0.5 rounded-md border ${
                                isActive
                                  ? 'bg-[#111111] text-neutral-200 border-white/10 group-hover:border-red-600/30'
                                  : 'bg-white/5 text-neutral-400 border-transparent'
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
                          to={semesterLink}
                          className="btn-primary-red text-xs sm:text-sm w-full lg:w-auto group"
                        >
                          <span>Explore Semester {sem.number}</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      ) : (
                        <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-neutral-400 text-xs sm:text-sm font-medium w-full lg:w-auto select-none bg-white/[0.02]">
                          <Lock className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{sem.statusText === 'Curriculum in Review' ? 'In Curriculum Review' : 'Opens in Even Term'}</span>
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
