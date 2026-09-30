import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Cpu,
  ArrowRight,
  ArrowDown,
  Sparkles,
  BookOpen,
  Wrench,
  Radio,
  Sliders,
  Laptop,
  CheckCircle2,
  Clock,
  Compass,
  Users,
  X,
  FileText,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';
import { DeveloperModal } from '../components/common/DeveloperModal';

export const DashboardPage = () => {
  const [showDeveloperModal, setShowDeveloperModal] = useState(false);
  const [selectedBranchModal, setSelectedBranchModal] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Show developer introduction modal once per browser session
    const hasSeenModal = sessionStorage.getItem('bteup_developer_intro_seen');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setShowDeveloperModal(true);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseDeveloperModal = () => {
    setShowDeveloperModal(false);
    sessionStorage.setItem('bteup_developer_intro_seen', 'true');
  };

  const handleStartLearningFromModal = () => {
    handleCloseDeveloperModal();
    navigate('/semesters');
  };

  // Branch data as explicitly required by prompt
  const branches = [
    {
      id: 'cse',
      code: 'CSE',
      name: 'Computer Science & Engineering',
      description: 'Programming, DBMS, Networks, Operating Systems aur core computer concepts.',
      isAvailable: true,
      statusText: 'Available Now',
      icon: Laptop,
      semestersAvailable: 'Sem 1, 3, 5 Open',
      link: '/semesters',
    },
    {
      id: 'me',
      code: 'ME',
      name: 'Mechanical Engineering',
      description: 'Machines, manufacturing, thermodynamics aur mechanical fundamentals.',
      isAvailable: false,
      statusText: 'Coming Soon',
      icon: Wrench,
      semestersAvailable: 'Curriculum in Review',
    },
    {
      id: 'ece',
      code: 'ECE',
      name: 'Electronics Engineering',
      description: 'Electronic devices, circuits, communication aur digital concepts.',
      isAvailable: false,
      statusText: 'Coming Soon',
      icon: Radio,
      semestersAvailable: 'Curriculum in Review',
    },
    {
      id: 'ic',
      code: 'IC',
      name: 'Instrumentation & Control',
      description: 'Measurement, sensors, control systems aur instrumentation concepts.',
      isAvailable: false,
      statusText: 'Coming Soon',
      icon: Sliders,
      semestersAvailable: 'Curriculum in Review',
    },
    {
      id: 'it',
      code: 'IT',
      name: 'Information Technology',
      description: 'IT fundamentals, programming, networking aur modern technology concepts.',
      isAvailable: false,
      statusText: 'Coming Soon',
      icon: Cpu,
      semestersAvailable: 'Curriculum in Review',
    },
  ];

  const handleBranchClick = (branch) => {
    if (branch.isAvailable) {
      navigate(branch.link);
    } else {
      setSelectedBranchModal(branch);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-slate-50 dark:bg-[#070f1c] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* 1. DEVELOPER PROMOTIONAL POPUP / MODAL (PRESERVED IN FULL) */}
      <DeveloperModal
        isOpen={showDeveloperModal}
        onClose={handleCloseDeveloperModal}
        onStartLearning={handleStartLearningFromModal}
      />

      {/* 2. COMING SOON STREAM MODAL (FOR UNAVAILABLE BRANCHES) */}
      {selectedBranchModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedBranchModal(null)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white dark:bg-[#0c1a2d] border border-slate-200 dark:border-cyan-500/20 p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBranchModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-500">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-amber-500 font-bold uppercase tracking-wider block">
                  {selectedBranchModal.code} • Coming Soon
                </span>
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                  {selectedBranchModal.name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Is branch ke notes aur official BTEUP syllabus preparation phase mein hain. Filhal <strong>Computer Science & Engineering (CSE)</strong> ke Semester 1, 3, aur 5 ke comprehensive notes live hain!
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => {
                  setSelectedBranchModal(null);
                  navigate('/semesters');
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-500/25 transition-all"
              >
                <span>Explore CSE Notes</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedBranchModal(null)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. NEW HERO SECTION WITH MODERN ACADEMIC + ENGINEERING AESTHETICS */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-cyan-500/15 overflow-hidden">
        {/* Subtle engineering background grid and blueprint lines */}
        <div className="absolute inset-0 bg-tech-grid opacity-60 dark:opacity-75 pointer-events-none" />
        <div className="absolute inset-0 bg-blueprint-lines opacity-40 dark:opacity-50 pointer-events-none" />

        {/* Ambient subtle radial glow (no gaudy rainbow gradient) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="relative max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
          
          {/* Engineering Metadata / Eyebrow Stamp */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/80 dark:bg-[#0c1a2d]/80 border border-slate-200 dark:border-cyan-500/30 text-slate-700 dark:text-cyan-300 text-xs font-mono tracking-wider shadow-xs backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="font-bold">BTEUP DIPLOMA COMPANION</span>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span>UP POLYTECHNIC 2026</span>
          </div>

          {/* Core Required Hero Title & Tagline */}
          <div className="space-y-3 sm:space-y-4">
            <div className="font-mono text-xs sm:text-sm font-extrabold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">
              BTEUP STUDY
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight leading-[1.15] sm:leading-[1.12]">
              Polytechnic ki padhai, <br className="hidden sm:inline" />
              <span className="text-cyan-600 dark:text-cyan-400">
                ab thodi aur simple.
              </span>
            </h1>

            <p className="text-base sm:text-xl lg:text-2xl font-medium text-slate-700 dark:text-slate-200 max-w-2xl mx-auto leading-relaxed">
              "Concept samjho. Notes padho. <span className="font-bold text-slate-900 dark:text-white">Exam ke liye confidently prepare karo."</span>
            </p>

            <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              [No Paywalls • Pure Conceptual Hinglish Notes • BTEUP Syllabus-Aligned]
            </p>
          </div>

          {/* Primary CTAs as explicitly required */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            {/* Primary CTA: Explore Courses */}
            <button
              onClick={() => {
                document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm tracking-wide shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Courses</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            {/* Secondary CTA: Start Learning */}
            <Link
              to="/semesters"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm tracking-wide shadow-md shadow-cyan-600/20 hover:shadow-cyan-600/35 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Technical Specs Strip */}
          <div className="pt-8 sm:pt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto text-left">
            <div className="p-3 sm:p-3.5 rounded-xl border border-slate-200/80 dark:border-cyan-500/15 bg-white/70 dark:bg-[#0c1a2d]/60 backdrop-blur-xs">
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase font-bold block mb-0.5">
                01 // Language
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 block">
                Bilingual Hinglish
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Clear & intuitive</span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xl border border-slate-200/80 dark:border-cyan-500/15 bg-white/70 dark:bg-[#0c1a2d]/60 backdrop-blur-xs">
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase font-bold block mb-0.5">
                02 // Accuracy
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 block">
                Official Syllabus
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Strict BTEUP units</span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xl border border-slate-200/80 dark:border-cyan-500/15 bg-white/70 dark:bg-[#0c1a2d]/60 backdrop-blur-xs">
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase font-bold block mb-0.5">
                03 // Exam Focus
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 block">
                Repeated PYQs
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Starred questions</span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xl border border-slate-200/80 dark:border-cyan-500/15 bg-white/70 dark:bg-[#0c1a2d]/60 backdrop-blur-xs">
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase font-bold block mb-0.5">
                04 // Access
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 block">
                100% Free
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">No login or barriers</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CHOOSE YOUR BRANCH SECTION (EXPLICIT REQUIREMENT) */}
      {/* ========================================================================= */}
      <section
        id="branches"
        className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-14"
      >
        <div className="space-y-10 sm:space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              <Compass className="w-3.5 h-3.5" />
              <span>Select Your Stream</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
              Choose Your Branch
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans">
              Apni branch select karo aur apni preparation start karo.
            </p>
          </div>

          {/* 5 Engineering Branch Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {branches.map((branch) => {
              const Icon = branch.icon;
              const isActive = branch.isAvailable;

              return (
                <div
                  key={branch.id}
                  onClick={() => handleBranchClick(branch)}
                  className={`group relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer overflow-hidden ${
                    isActive
                      ? 'bg-white dark:bg-[#0c1a2d] border-cyan-500/40 hover:border-cyan-400 dark:hover:border-cyan-300 shadow-lg hover:shadow-cyan-500/15 hover:-translate-y-1'
                      : 'bg-slate-100/60 dark:bg-[#0c1a2d]/40 border-slate-200 dark:border-white/5 hover:border-amber-500/40 opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Subtle active stream top accent line */}
                  {isActive && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-500" />
                  )}

                  <div>
                    {/* Top Meta: Code Stamp + Status Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                            isActive
                              ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 group-hover:scale-105'
                              : 'bg-slate-200 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-300/60 dark:border-white/10'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-sm font-extrabold tracking-wider text-slate-900 dark:text-white">
                          [{branch.code}]
                        </span>
                      </div>

                      {isActive ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>{branch.statusText}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25">
                          <Clock className="w-3 h-3 text-amber-500" />
                          <span>{branch.statusText}</span>
                        </span>
                      )}
                    </div>

                    {/* Branch Title */}
                    <h3
                      className={`text-lg sm:text-xl font-bold font-display mb-2.5 transition-colors ${
                        isActive
                          ? 'text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400'
                          : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {branch.name}
                    </h3>

                    {/* Branch Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {branch.description}
                    </p>
                  </div>

                  {/* Card Footer: Action Indicator */}
                  <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                      {branch.semestersAvailable}
                    </span>

                    <div
                      className={`inline-flex items-center gap-1.5 text-xs font-bold transition-transform group-hover:translate-x-1 ${
                        isActive
                          ? 'text-cyan-600 dark:text-cyan-400'
                          : 'text-amber-600 dark:text-amber-400'
                      }`}
                    >
                      <span>{isActive ? 'Enter Branch' : 'Notify Me'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Primary CSE Active Notice */}
          <div className="p-4 sm:p-5 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 dark:bg-cyan-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-xs">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-500 shrink-0">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block">
                  ACTIVE BRANCH • COMPUTER SCIENCE & ENGINEERING
                </span>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                  Semester 1, 3, aur 5 ke units, formulas aur exam notes currently active hain.
                </p>
              </div>
            </div>

            <Link
              to="/semesters"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-600/25 shrink-0 whitespace-nowrap transition-all"
            >
              <span>Explore CSE Path</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ABOUT PLATFORM SECTION (#about) */}
      {/* ========================================================================= */}
      <section
        id="about"
        className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 dark:border-cyan-500/15 bg-white/50 dark:bg-[#060d19]/60 scroll-mt-14"
      >
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-xs font-semibold uppercase tracking-wider bg-slate-200/60 dark:bg-white/5 text-slate-700 dark:text-slate-300">
              <Users className="w-3.5 h-3.5 text-cyan-500" />
              <span>Platform Philosophy</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
              Polytechnic Diploma Students Ke Liye, Students Dwara
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              BTEUP Study ka vision diploma students ko bina kisi complex subscription ya heavy language ke, unki apni bolchal wali bhasha mein technical concepts sikhana hai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1a2d] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                Conceptual Clarity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Ratne ke bajaye concept ko intuitively samjho. Formulas aur derivations step-by-step breakdown ke sath provide kiye gaye hain.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1a2d] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                Exam Preparation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Har chapter mein high-probability repeated exam questions aur quick revision points highlighted hain taaki paper mein direct benefit ho.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1a2d] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                Open & Independent
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Koi login barrier nahi, koi ads nahi. Ek pure digital textbook experience jo har diploma student ke mobile par bina lag ke chale.
              </p>
            </div>
          </div>

          {/* Creators Strip */}
          <div className="p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-cyan-500/20 bg-slate-100/80 dark:bg-[#0c1a2d] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-500">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold block">
                  DESIGNED & DEVELOPED BY
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  Ashish & Harshit • Polytechnic Alumni
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowDeveloperModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10 transition-colors cursor-pointer"
            >
              <span>View Creator Intro</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default DashboardPage;
