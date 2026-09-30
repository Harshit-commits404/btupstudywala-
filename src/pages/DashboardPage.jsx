import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Cpu,
  ArrowRight,
  ArrowDown,
  Wrench,
  Radio,
  Sliders,
  Laptop,
  Clock,
  Compass,
  Users,
  X,
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

  // Branch data
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
    <div className="relative w-full min-h-screen bg-[#080808] text-[#f5f5f5] selection:bg-red-600/30 selection:text-red-200">
      
      {/* 1. DEVELOPER PROMOTIONAL POPUP / MODAL */}
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedBranchModal(null)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-[#111111] border border-red-600/30 p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBranchModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-red-600/15 border border-red-600/30 flex items-center justify-center text-red-500">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-wider block">
                  {selectedBranchModal.code} • Coming Soon
                </span>
                <h3 className="text-lg font-bold font-display text-white">
                  {selectedBranchModal.name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              Is branch ke notes aur official BTEUP syllabus preparation phase mein hain. Filhal <strong>Computer Science & Engineering (CSE)</strong> ke Semester 1, 3, aur 5 ke comprehensive notes live hain!
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => {
                  setSelectedBranchModal(null);
                  navigate('/semesters');
                }}
                className="flex-1 btn-primary-red text-xs sm:text-sm"
              >
                <span>Explore CSE Notes</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedBranchModal(null)}
                className="btn-secondary-dark text-xs sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. HERO SECTION — RED + BLACK ENGINEERING THEME */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] overflow-hidden bg-[#0a0a0a]">
        {/* Subtle engineering red grid & blueprint lines */}
        <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-blueprint-lines opacity-40 pointer-events-none" />

        {/* Ambient subtle crimson glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="relative max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
          
          {/* Engineering Metadata Eyebrow Stamp */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141414] border border-red-600/30 text-neutral-300 text-xs font-mono tracking-wider shadow-xs backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-bold text-red-400">BTEUP DIPLOMA COMPANION</span>
            <span className="text-neutral-600">•</span>
            <span>UP POLYTECHNIC 2026</span>
          </div>

          {/* Hero Titles */}
          <div className="space-y-3 sm:space-y-4">
            <div className="font-mono text-xs sm:text-sm font-extrabold tracking-widest text-red-500 uppercase">
              BTEUP STUDY
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.15] sm:leading-[1.12]">
              Polytechnic ki padhai, <br className="hidden sm:inline" />
              <span className="text-red-500">
                ab thodi aur simple.
              </span>
            </h1>

            <p className="text-base sm:text-xl lg:text-2xl font-medium text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              "Concept samjho. Notes padho. <span className="font-bold text-white">Exam ke liye confidently prepare karo."</span>
            </p>

            <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-xl mx-auto">
              [No Paywalls • Pure Conceptual Hinglish Notes • BTEUP Syllabus-Aligned]
            </p>
          </div>

          {/* Primary CTAs with Smooth Micro-Animations */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            {/* Primary CTA: Explore Courses */}
            <button
              onClick={() => {
                document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary-dark text-sm !px-6 !py-3"
            >
              <span>Explore Courses</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-200 hover:translate-y-0.5" />
            </button>

            {/* Secondary CTA: Start Learning */}
            <Link
              to="/semesters"
              className="btn-primary-red text-sm !px-6 !py-3 group"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Technical Specs Strip */}
          <div className="pt-8 sm:pt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto text-left">
            <div className="p-3.5 rounded-xl border border-white/[0.08] bg-[#141414] hover:border-red-500/30 transition-colors">
              <span className="text-[10px] font-mono text-red-400 uppercase font-bold block mb-0.5">
                01 // Language
              </span>
              <span className="text-xs sm:text-sm font-bold text-white block">
                Bilingual Hinglish
              </span>
              <span className="text-[11px] text-neutral-400">Clear & intuitive</span>
            </div>

            <div className="p-3.5 rounded-xl border border-white/[0.08] bg-[#141414] hover:border-red-500/30 transition-colors">
              <span className="text-[10px] font-mono text-red-400 uppercase font-bold block mb-0.5">
                02 // Accuracy
              </span>
              <span className="text-xs sm:text-sm font-bold text-white block">
                Official Syllabus
              </span>
              <span className="text-[11px] text-neutral-400">Strict BTEUP units</span>
            </div>

            <div className="p-3.5 rounded-xl border border-white/[0.08] bg-[#141414] hover:border-red-500/30 transition-colors">
              <span className="text-[10px] font-mono text-red-400 uppercase font-bold block mb-0.5">
                03 // Exam Focus
              </span>
              <span className="text-xs sm:text-sm font-bold text-white block">
                Repeated PYQs
              </span>
              <span className="text-[11px] text-neutral-400">Starred questions</span>
            </div>

            <div className="p-3.5 rounded-xl border border-white/[0.08] bg-[#141414] hover:border-red-500/30 transition-colors">
              <span className="text-[10px] font-mono text-red-400 uppercase font-bold block mb-0.5">
                04 // Access
              </span>
              <span className="text-xs sm:text-sm font-bold text-white block">
                100% Free
              </span>
              <span className="text-[11px] text-neutral-400">Zero login barriers</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CHOOSE YOUR BRANCH SECTION (WITH RED ACCENT HEADING & 220MS CARDS) */}
      {/* ========================================================================= */}
      <section
        id="branches"
        className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-14"
      >
        <div className="space-y-10 sm:space-y-12">
          
          {/* Section Heading with Red Vertical Accent Line */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-xs font-semibold uppercase tracking-wider bg-red-600/10 text-red-400 border border-red-600/25">
              <Compass className="w-3.5 h-3.5 text-red-500" />
              <span>Select Your Stream</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight flex items-center justify-center gap-3">
              <span className="w-1.5 h-8 rounded-full bg-red-600 inline-block shadow-[0_0_12px_rgba(230,57,70,0.6)]" />
              <span>Choose Your Branch</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 font-sans">
              Apni branch select karo aur apni preparation start karo.
            </p>
          </div>

          {/* 5 Engineering Branch Cards Grid with 220ms Hover Interaction */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {branches.map((branch) => {
              const Icon = branch.icon;
              const isActive = branch.isAvailable;

              return (
                <div
                  key={branch.id}
                  onClick={() => handleBranchClick(branch)}
                  className={`group relative rounded-2xl border p-6 flex flex-col justify-between cursor-pointer overflow-hidden ${
                    isActive
                      ? 'bg-[#171717] border-white/10 hover:border-red-500/70 shadow-lg hover:shadow-[0_14px_35px_-8px_rgba(230,57,70,0.25)]'
                      : 'bg-[#121212] border-white/5 hover:border-red-500/40 opacity-80 hover:opacity-100'
                  }`}
                  style={{
                    transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, background 220ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  {/* Subtle top crimson hairline for active stream */}
                  {isActive && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-600" />
                  )}

                  <div>
                    {/* Top Meta: Prominent Branch Abbreviation & Status Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${
                            isActive
                              ? 'bg-red-600/15 text-red-400 border border-red-600/30'
                              : 'bg-white/5 text-neutral-400 border border-white/10'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-base font-black tracking-wider text-red-400">
                          [{branch.code}]
                        </span>
                      </div>

                      {isActive ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>{branch.statusText}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/5 text-neutral-400 border border-white/10">
                          <Clock className="w-3 h-3 text-red-400" />
                          <span>{branch.statusText}</span>
                        </span>
                      )}
                    </div>

                    {/* Branch Title */}
                    <h3
                      className={`text-lg sm:text-xl font-bold font-display mb-2.5 transition-colors ${
                        isActive
                          ? 'text-white group-hover:text-red-400'
                          : 'text-neutral-300'
                      }`}
                    >
                      {branch.name}
                    </h3>

                    {/* Branch Description */}
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                      {branch.description}
                    </p>
                  </div>

                  {/* Card Footer: Animated Arrow → */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-neutral-400">
                      {branch.semestersAvailable}
                    </span>

                    <div
                      className={`inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-200 ${
                        isActive
                          ? 'text-red-400 group-hover:text-red-300'
                          : 'text-neutral-400 group-hover:text-red-400'
                      }`}
                    >
                      <span>{isActive ? 'Enter Branch' : 'Notify Me'}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Primary CSE Active Notice Banner */}
          <div className="p-4 sm:p-5 rounded-2xl border border-red-600/30 bg-[#121212] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-600/30 flex items-center justify-center text-red-500 shrink-0">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider block">
                  ACTIVE BRANCH • COMPUTER SCIENCE & ENGINEERING
                </span>
                <p className="text-xs sm:text-sm text-neutral-300">
                  Semester 1, 3, aur 5 ke units, formulas aur exam notes currently active hain.
                </p>
              </div>
            </div>

            <Link
              to="/semesters"
              className="btn-primary-red text-xs sm:text-sm whitespace-nowrap group"
            >
              <span>Explore CSE Path</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ABOUT PLATFORM SECTION (#about) */}
      {/* ========================================================================= */}
      <section
        id="about"
        className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] bg-[#0c0c0c] scroll-mt-14"
      >
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-xs font-semibold uppercase tracking-wider bg-red-600/10 text-red-400 border border-red-600/25">
              <Users className="w-3.5 h-3.5 text-red-500" />
              <span>Platform Philosophy</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight flex items-center justify-center gap-2.5">
              <span className="w-1.5 h-7 rounded-full bg-red-600 inline-block" />
              <span>Polytechnic Diploma Students Ke Liye, Students Dwara</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
              BTEUP Study ka vision diploma students ko bina kisi complex subscription ya heavy language ke, unki apni bolchal wali bhasha mein technical concepts sikhana hai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#141414] hover:border-red-600/30 transition-colors space-y-2">
              <div className="w-8 h-8 rounded-lg bg-red-600/15 text-red-500 flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="font-display font-bold text-base text-white">
                Conceptual Clarity
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Ratne ke bajaye concept ko intuitively samjho. Formulas aur derivations step-by-step breakdown ke sath provide kiye gaye hain.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#141414] hover:border-red-600/30 transition-colors space-y-2">
              <div className="w-8 h-8 rounded-lg bg-red-600/15 text-red-500 flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="font-display font-bold text-base text-white">
                Exam Preparation
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Har chapter mein high-probability repeated exam questions aur quick revision points highlighted hain taaki paper mein direct benefit ho.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#141414] hover:border-red-600/30 transition-colors space-y-2">
              <div className="w-8 h-8 rounded-lg bg-red-600/15 text-red-500 flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="font-display font-bold text-base text-white">
                Open & Independent
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Koi login barrier nahi, koi ads nahi. Ek pure digital textbook experience jo har diploma student ke mobile par bina lag ke chale.
              </p>
            </div>
          </div>

          {/* Creators Strip — EXACT CORRECT WORDING: Final-Year Polytechnic Students (NO alumni/graduates) */}
          <div className="p-4 sm:p-6 rounded-2xl border border-red-600/30 bg-[#141414] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-600/30 flex items-center justify-center text-red-500">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-red-400 font-bold block">
                  MADE BY FINAL-YEAR POLYTECHNIC STUDENTS
                </span>
                <span className="text-sm font-bold text-white">
                  Ashish & Harshit • Building for Fellow Students
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowDeveloperModal(true)}
              className="btn-secondary-dark text-xs !py-2 !px-4"
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
