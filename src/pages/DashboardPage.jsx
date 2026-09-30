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
    navigate('/');
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
    <div className="relative w-full min-h-screen bg-slate-100 dark:bg-[#060914] text-slate-800 dark:text-[#f8fafc] selection:bg-[#8b5cf6]/30 selection:text-slate-800 dark:selection:text-white pb-16 transition-colors duration-200">
      
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 dark:bg-[#060914]/85 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedBranchModal(null)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-slate-50 dark:bg-[#0d1424] border border-slate-300 dark:border-[#22304a] p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBranchModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-500 dark:text-[#94a3b8] hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-purple-100 dark:bg-[#8b5cf6]/15 border border-purple-200 dark:border-[#8b5cf6]/30 flex items-center justify-center text-purple-600 dark:text-[#8b5cf6]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-purple-600 dark:text-[#a78bfa] font-bold uppercase tracking-wider block">
                  {selectedBranchModal.code} • Coming Soon
                </span>
                <h3 className="text-lg font-bold font-display text-slate-800 dark:text-white">
                  {selectedBranchModal.name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-[#94a3b8] leading-relaxed">
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
      {/* 3. BENTO HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-8 sm:pt-12 pb-8 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Left: Main Hero Card */}
          <div className="col-span-1 lg:col-span-8 rounded-[20px] bg-slate-50 dark:bg-[#0d1424] border border-slate-300 dark:border-[#22304a] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-center min-h-[400px] shadow-lg">
            {/* Ambient subtle purple/teal glow */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-purple-200/50 dark:bg-[#8b5cf6]/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[400px] h-[400px] bg-teal-100/50 dark:bg-[#2dd4bf]/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="absolute inset-0 bg-tech-grid opacity-[0.15] dark:opacity-30 pointer-events-none" />

            <div className="relative z-10 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-200 dark:bg-[#111b2e] border border-slate-300 dark:border-[#8b5cf6]/30 text-slate-600 dark:text-[#94a3b8] text-xs font-mono tracking-wider shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-purple-500 dark:bg-[#8b5cf6] animate-pulse" />
                <span className="font-bold text-purple-700 dark:text-[#a78bfa]">BTEUP DIPLOMA COMPANION</span>
                <span className="text-slate-400 dark:text-[#94a3b8]">•</span>
                <span>UP POLYTECHNIC 2026</span>
              </div>

              <div className="space-y-4">
                <div className="font-mono text-xs sm:text-sm font-extrabold tracking-widest text-purple-600 dark:text-[#8b5cf6] uppercase">
                  BTEUP STUDY
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-800 dark:text-white tracking-tight leading-[1.15] sm:leading-[1.12]">
                  Polytechnic ki padhai, <br className="hidden sm:inline" />
                  <span className="text-teal-600 dark:text-[#2dd4bf]">
                    ab thodi aur simple.
                  </span>
                </h1>
                <p className="text-base sm:text-xl font-medium text-slate-600 dark:text-[#94a3b8] max-w-2xl leading-relaxed">
                  "Concept samjho. Notes padho. <span className="font-bold text-slate-800 dark:text-white">Exam ke liye confidently prepare karo."</span>
                </p>
                <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-[#64748b]">
                  [No Paywalls • Pure Conceptual Hinglish Notes • BTEUP Syllabus-Aligned]
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary-red text-sm !px-6 !py-3 group cursor-pointer"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary-dark text-sm !px-6 !py-3"
                >
                  <span>Explore Courses</span>
                  <ArrowDown className="w-4 h-4 transition-transform duration-200 hover:translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Small Bento Grid */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-4 sm:gap-6">
            <div className="grid grid-cols-2 gap-4 flex-1">
              <div className="card-academic p-5 flex flex-col justify-center text-center items-center bg-slate-50 dark:bg-[#111b2e] border-slate-300 dark:border-[#22304a]">
                <span className="text-[10px] font-mono text-teal-600 dark:text-[#2dd4bf] uppercase font-bold block mb-2">01 // Language</span>
                <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-white block">Bilingual Hinglish</span>
                <span className="text-[11px] text-slate-500 dark:text-[#94a3b8] mt-1">Clear & intuitive</span>
              </div>
              <div className="card-academic p-5 flex flex-col justify-center text-center items-center bg-slate-50 dark:bg-[#111b2e] border-slate-300 dark:border-[#22304a]">
                <span className="text-[10px] font-mono text-purple-600 dark:text-[#a78bfa] uppercase font-bold block mb-2">02 // Accuracy</span>
                <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-white block">Official Syllabus</span>
                <span className="text-[11px] text-slate-500 dark:text-[#94a3b8] mt-1">Strict BTEUP units</span>
              </div>
              <div className="card-academic p-5 flex flex-col justify-center text-center items-center bg-slate-50 dark:bg-[#111b2e] border-slate-300 dark:border-[#22304a]">
                <span className="text-[10px] font-mono text-cyan-600 dark:text-[#22d3ee] uppercase font-bold block mb-2">03 // Exam Focus</span>
                <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-white block">Repeated PYQs</span>
                <span className="text-[11px] text-slate-500 dark:text-[#94a3b8] mt-1">Starred questions</span>
              </div>
              <div className="card-academic p-5 flex flex-col justify-center text-center items-center bg-slate-50 dark:bg-[#111b2e] border-slate-300 dark:border-[#22304a]">
                <span className="text-[10px] font-mono text-emerald-600 dark:text-[#34d399] uppercase font-bold block mb-2">04 // Access</span>
                <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-white block">100% Free</span>
                <span className="text-[11px] text-slate-500 dark:text-[#94a3b8] mt-1">Zero login barriers</span>
              </div>
            </div>
            
            {/* Creator intro card */}
            <div className="card-academic p-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-between gap-4 border-slate-300 dark:border-[#8b5cf6]/30 bg-slate-50 dark:bg-gradient-to-br dark:from-[#111b2e] dark:to-[#0d1424]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-[#8b5cf6]/15 border border-purple-200 dark:border-[#8b5cf6]/30 flex items-center justify-center text-purple-600 dark:text-[#8b5cf6] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-[#94a3b8] font-bold block uppercase tracking-wider">
                    MADE BY FINAL-YEAR POLYTECHNIC STUDENTS
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white">Ashish & Harshit</span>
                </div>
              </div>
              <button
                onClick={() => setShowDeveloperModal(true)}
                className="text-xs font-medium text-slate-700 dark:text-[#f8fafc] hover:text-purple-600 dark:hover:text-[#2dd4bf] transition-colors flex items-center gap-1 shrink-0 bg-slate-200 dark:bg-white/5 px-3 py-1.5 rounded-full border border-slate-300 dark:border-white/10"
              >
                Meet the Creators <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CHOOSE YOUR BRANCH SECTION (Bento Grid) */}
      {/* ========================================================================= */}
      <section
        id="branches"
        className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto scroll-mt-14"
      >
        <div className="space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-xs font-semibold uppercase tracking-wider bg-purple-100 dark:bg-[#8b5cf6]/10 text-purple-700 dark:text-[#a78bfa] border border-purple-200 dark:border-[#8b5cf6]/25">
                <Compass className="w-3.5 h-3.5 text-purple-600 dark:text-[#8b5cf6]" />
                <span>Select Your Stream</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-800 dark:text-white tracking-tight flex items-center gap-3">
                <span>Choose Your Branch</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-[#94a3b8] font-sans">
                Apni branch select karo aur apni preparation start karo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* CSE gets a larger visual treatment in the Bento Grid */}
            {branches.map((branch, index) => {
              const Icon = branch.icon;
              const isActive = branch.isAvailable;
              const isPrimary = index === 0;

              return (
                <div
                  key={branch.id}
                  onClick={() => handleBranchClick(branch)}
                  className={`card-academic group relative p-6 sm:p-8 flex flex-col justify-between cursor-pointer ${
                    isPrimary 
                      ? 'md:col-span-2 lg:col-span-2 bg-slate-50 dark:bg-gradient-to-br dark:from-[#111b2e] dark:to-[#0d1424] border-slate-300 dark:border-[#8b5cf6]/30' 
                      : 'col-span-1 bg-slate-50 dark:bg-[#0d1424] border-slate-300 dark:border-[#22304a]'
                  }`}
                >
                  {isActive && isPrimary && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-teal-400 to-cyan-400 dark:from-[#8b5cf6] dark:via-[#2dd4bf] dark:to-[#22d3ee]" />
                  )}
                  {isActive && !isPrimary && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-[#8b5cf6] dark:to-[#6d28d9]" />
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${
                            isActive
                              ? 'bg-purple-100 dark:bg-[#8b5cf6]/15 text-purple-600 dark:text-[#8b5cf6] border border-purple-200 dark:border-[#8b5cf6]/30'
                              : 'bg-slate-200 dark:bg-white/5 text-slate-500 dark:text-[#94a3b8] border border-slate-300 dark:border-[#22304a]'
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-lg font-black tracking-wider text-purple-600 dark:text-[#a78bfa]">
                          [{branch.code}]
                        </span>
                      </div>

                      {isActive ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-[#34d399]/10 text-emerald-600 dark:text-[#34d399] border border-emerald-200 dark:border-[#34d399]/25">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#34d399] animate-pulse" />
                          <span>{branch.statusText}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-200 dark:bg-white/5 text-slate-500 dark:text-[#94a3b8] border border-slate-300 dark:border-[#22304a]">
                          <Clock className="w-3 h-3" />
                          <span>{branch.statusText}</span>
                        </span>
                      )}
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-bold font-display mb-3 transition-colors ${isActive ? 'text-slate-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-[#a78bfa]' : 'text-slate-600 dark:text-[#e2e8f0]'}`}>
                      {branch.name}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed mb-8 ${isPrimary ? 'text-slate-600 dark:text-[#cbd5e1] max-w-md' : 'text-slate-500 dark:text-[#94a3b8]'}`}>
                      {branch.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-[#22304a] flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-[#64748b]">
                      {branch.semestersAvailable}
                    </span>

                    <div
                      className={`inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200 ${
                        isActive
                          ? 'text-purple-600 dark:text-[#8b5cf6] group-hover:text-purple-700 dark:group-hover:text-[#a78bfa]'
                          : 'text-slate-500 dark:text-[#64748b] group-hover:text-slate-600 dark:group-hover:text-[#94a3b8]'
                      }`}
                    >
                      <span>{isActive ? 'Enter Branch' : 'Notify Me'}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="card-academic p-5 sm:p-6 bg-slate-50 dark:bg-[#0d1424] border-slate-300 dark:border-[#22304a] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-[#2dd4bf]/10 border border-teal-100 dark:border-[#2dd4bf]/20 flex items-center justify-center text-teal-600 dark:text-[#2dd4bf] shrink-0">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-teal-600 dark:text-[#2dd4bf] uppercase tracking-wider block mb-1">
                  ACTIVE BRANCH • COMPUTER SCIENCE & ENGINEERING
                </span>
                <p className="text-sm text-slate-600 dark:text-[#94a3b8]">
                  Semester 1, 3, aur 5 ke units, formulas aur exam notes currently active hain.
                </p>
              </div>
            </div>

            <Link
              to="/semesters"
              className="btn-primary-red text-sm whitespace-nowrap group bg-slate-900 dark:bg-[#111b2e] hover:bg-slate-800 dark:hover:bg-[#17243d] border-slate-800 dark:border-[#22304a] text-white hover:border-purple-500/50 dark:hover:border-[#8b5cf6]/50 shadow-none"
            >
              <span>Explore CSE Path</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ABOUT PLATFORM SECTION (#about) */}
      {/* ========================================================================= */}
      <section
        id="about"
        className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto scroll-mt-14"
      >
        <div className="space-y-8">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-xs font-semibold uppercase tracking-wider bg-teal-50 dark:bg-[#2dd4bf]/10 text-teal-600 dark:text-[#2dd4bf] border border-teal-200 dark:border-[#2dd4bf]/25">
              <Users className="w-3.5 h-3.5 text-teal-600 dark:text-[#2dd4bf]" />
              <span>Platform Philosophy</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-800 dark:text-white tracking-tight flex items-center gap-3">
              <span>Polytechnic Diploma Students Ke Liye, Students Dwara</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-[#94a3b8] max-w-2xl">
              BTEUP Study ka vision diploma students ko bina kisi complex subscription ya heavy language ke, unki apni bolchal wali bhasha mein technical concepts sikhana hai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="card-academic p-6 sm:p-8 bg-slate-50 dark:bg-[#0d1424] border-slate-300 dark:border-[#22304a] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-[#8b5cf6]/15 text-purple-600 dark:text-[#8b5cf6] flex items-center justify-center font-mono font-bold text-base border border-purple-200 dark:border-[#8b5cf6]/30">
                01
              </div>
              <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white">
                Conceptual Clarity
              </h3>
              <p className="text-sm text-slate-600 dark:text-[#94a3b8] leading-relaxed">
                Ratne ke bajaye concept ko intuitively samjho. Formulas aur derivations step-by-step breakdown ke sath provide kiye gaye hain.
              </p>
            </div>

            <div className="card-academic p-6 sm:p-8 bg-slate-50 dark:bg-[#0d1424] border-slate-300 dark:border-[#22304a] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-[#2dd4bf]/15 text-teal-600 dark:text-[#2dd4bf] flex items-center justify-center font-mono font-bold text-base border border-teal-200 dark:border-[#2dd4bf]/30">
                02
              </div>
              <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white">
                Exam Preparation
              </h3>
              <p className="text-sm text-slate-600 dark:text-[#94a3b8] leading-relaxed">
                Har chapter mein high-probability repeated exam questions aur quick revision points highlighted hain taaki paper mein direct benefit ho.
              </p>
            </div>

            <div className="card-academic p-6 sm:p-8 bg-slate-50 dark:bg-[#0d1424] border-slate-300 dark:border-[#22304a] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 dark:bg-[#22d3ee]/15 text-cyan-600 dark:text-[#22d3ee] flex items-center justify-center font-mono font-bold text-base border border-cyan-200 dark:border-[#22d3ee]/30">
                03
              </div>
              <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white">
                Open & Independent
              </h3>
              <p className="text-sm text-slate-600 dark:text-[#94a3b8] leading-relaxed">
                Koi login barrier nahi, koi ads nahi. Ek pure digital textbook experience jo har diploma student ke mobile par bina lag ke chale.
              </p>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default DashboardPage;
