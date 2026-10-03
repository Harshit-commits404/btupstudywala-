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
      link: '/branch/cse',
    },
    {
      id: 'mechanical',
      code: 'ME',
      name: 'Mechanical Engineering',
      description: 'Machines, manufacturing, thermodynamics aur mechanical fundamentals.',
      isAvailable: true,
      statusText: 'Sem 1 Common Live',
      icon: Wrench,
      semestersAvailable: 'Sem 1 Common Open • Sem 3, 5 Soon',
      link: '/branch/mechanical',
    },
    {
      id: 'electronics',
      code: 'ECE',
      name: 'Electronics Engineering',
      description: 'Electronic devices, circuits, communication aur digital concepts.',
      isAvailable: true,
      statusText: 'Sem 1 Common Live',
      icon: Radio,
      semestersAvailable: 'Sem 1 Common Open • Sem 3, 5 Soon',
      link: '/branch/electronics',
    },
    {
      id: 'instrumentation',
      code: 'IC',
      name: 'Instrumentation & Control',
      description: 'Measurement, sensors, control systems aur instrumentation concepts.',
      isAvailable: true,
      statusText: 'Sem 1 Common Live',
      icon: Sliders,
      semestersAvailable: 'Sem 1 Common Open • Sem 3, 5 Soon',
      link: '/branch/instrumentation',
    },
    {
      id: 'information-technology',
      code: 'IT',
      name: 'Information Technology',
      description: 'IT fundamentals, programming, networking aur modern technology concepts.',
      isAvailable: true,
      statusText: 'Sem 1 Common Live',
      icon: Cpu,
      semestersAvailable: 'Sem 1 Common Open • Sem 3, 5 Soon',
      link: '/branch/information-technology',
    },
  ];

  const handleBranchClick = (branch) => {
    if (branch.isAvailable) {
      if (branch.id === 'cse') {
        navigate('/branch/cse');
      } else {
        navigate(`/${branch.id}/semester-1`);
      }
    } else {
      setSelectedBranchModal(branch);
    }
  };

  return (
    <div className="relative w-full space-y-12 sm:space-y-16 pb-16 text-text-primary">
      
      {/* ========================================================================= */}
      {/* 1. DEVELOPER INTRODUCTION POPUP (Automatic session-based launch) */}
      {/* ========================================================================= */}
      <DeveloperModal
        isOpen={showDeveloperModal}
        onClose={handleCloseDeveloperModal}
        onStartLearning={handleStartLearningFromModal}
      />

      {/* ========================================================================= */}
      {/* 2. COMING SOON MODAL (For non-active branches) */}
      {/* ========================================================================= */}
      {selectedBranchModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 dark:bg-black/85 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedBranchModal(null)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-surface border border-border p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBranchModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-secondary transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-accent-soft border border-red-500/25 flex items-center justify-center text-accent">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider block">
                  {selectedBranchModal.code} • Coming Soon
                </span>
                <h3 className="text-lg font-bold font-display text-text-primary">
                  {selectedBranchModal.name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed">
              Is branch ke notes aur official BTEUP syllabus preparation phase mein hain. Filhal <strong>Computer Science & Engineering (CSE)</strong> ke Semester 1, 3, aur 5 ke comprehensive notes live hain!
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => {
                  setSelectedBranchModal(null);
                  navigate('/semesters');
                }}
                className="flex-1 btn-primary-red text-xs sm:text-sm cursor-pointer"
              >
                <span>Explore CSE Notes</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <button
                onClick={() => setSelectedBranchModal(null)}
                className="btn-secondary-dark text-xs sm:text-sm cursor-pointer"
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
          <div className="col-span-1 lg:col-span-8 rounded-[20px] bg-surface border border-border p-8 sm:p-12 relative overflow-hidden flex flex-col justify-center min-h-[400px] shadow-card-light dark:shadow-card-dark">
            {/* Ambient subtle red glow on top right */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[450px] h-[450px] bg-red-500/10 dark:bg-red-500/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[350px] h-[350px] bg-red-600/5 dark:bg-red-600/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

            <div className="relative z-10 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-secondary border border-border text-text-secondary text-xs font-mono tracking-wider shadow-xs backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-bold text-accent">BTEUP DIPLOMA COMPANION</span>
                <span className="text-text-muted">•</span>
                <span>UP POLYTECHNIC 2026</span>
              </div>

              <div className="space-y-4">
                <div className="font-mono text-xs sm:text-sm font-extrabold tracking-widest text-accent uppercase">
                  BTEUP STUDY
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-text-primary tracking-tight leading-[1.15] sm:leading-[1.12]">
                  Polytechnic ki padhai, <br className="hidden sm:inline" />
                  <span className="text-accent">
                    ab thodi aur simple.
                  </span>
                </h1>
                <p className="text-base sm:text-xl font-medium text-text-secondary max-w-2xl leading-relaxed">
                  "Concept samjho. Notes padho. <span className="font-bold text-text-primary">Exam ke liye confidently prepare karo."</span>
                </p>
                <p className="text-xs sm:text-sm font-mono text-text-muted">
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
                  className="btn-secondary-dark text-sm !px-6 !py-3 cursor-pointer"
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
              <div className="card-academic p-5 flex flex-col justify-center text-center items-center bg-surface border-border">
                <span className="text-[10px] font-mono text-accent uppercase font-bold block mb-2">01 // Language</span>
                <span className="text-sm sm:text-base font-bold text-text-primary block">Bilingual Hinglish</span>
                <span className="text-[11px] text-text-muted mt-1">Clear & intuitive</span>
              </div>
              <div className="card-academic p-5 flex flex-col justify-center text-center items-center bg-surface border-border">
                <span className="text-[10px] font-mono text-accent uppercase font-bold block mb-2">02 // Accuracy</span>
                <span className="text-sm sm:text-base font-bold text-text-primary block">Official Syllabus</span>
                <span className="text-[11px] text-text-muted mt-1">Strict BTEUP units</span>
              </div>
              <div className="card-academic p-5 flex flex-col justify-center text-center items-center bg-surface border-border">
                <span className="text-[10px] font-mono text-accent uppercase font-bold block mb-2">03 // Exam Focus</span>
                <span className="text-sm sm:text-base font-bold text-text-primary block">Repeated PYQs</span>
                <span className="text-[11px] text-text-muted mt-1">Starred questions</span>
              </div>
              <div className="card-academic p-5 flex flex-col justify-center text-center items-center bg-surface border-border">
                <span className="text-[10px] font-mono text-accent uppercase font-bold block mb-2">04 // Access</span>
                <span className="text-sm sm:text-base font-bold text-text-primary block">100% Free</span>
                <span className="text-[11px] text-text-muted mt-1">Zero login barriers</span>
              </div>
            </div>
            
            {/* Creator intro card */}
            <div className="card-academic p-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-between gap-4 border-border bg-surface">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-soft border border-red-500/25 flex items-center justify-center text-accent shrink-0 shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-text-muted font-bold block uppercase tracking-wider">
                    MADE BY FINAL-YEAR POLYTECHNIC STUDENTS
                  </span>
                  <span className="text-sm font-bold text-text-primary">Ashish & Harshit</span>
                </div>
              </div>
              <button
                onClick={() => setShowDeveloperModal(true)}
                className="text-xs font-semibold text-text-primary hover:text-accent transition-colors flex items-center gap-1 shrink-0 bg-secondary hover:bg-surface px-3 py-1.5 rounded-full border border-border cursor-pointer shadow-xs"
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
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-xs font-semibold uppercase tracking-wider bg-accent-soft text-accent border border-red-500/25">
                <Compass className="w-3.5 h-3.5 text-accent" />
                <span>Select Your Stream</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-text-primary tracking-tight flex items-center gap-3">
                <span>Choose Your Branch</span>
              </h2>
              <p className="text-sm sm:text-base text-text-secondary font-sans">
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
                      ? 'md:col-span-2 lg:col-span-2 bg-surface border-border' 
                      : 'col-span-1 bg-surface border-border'
                  }`}
                >
                  {isActive && isPrimary && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-600" />
                  )}
                  {isActive && !isPrimary && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-600 to-red-800" />
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${
                            isActive
                              ? 'bg-accent-soft text-accent border border-red-500/30'
                              : 'bg-secondary text-text-muted border border-border'
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-lg font-black tracking-wider text-accent">
                          [{branch.code}]
                        </span>
                      </div>

                      {isActive ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>{branch.statusText}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-secondary text-text-muted border border-border">
                          <Clock className="w-3 h-3" />
                          <span>{branch.statusText}</span>
                        </span>
                      )}
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-bold font-display mb-3 transition-colors ${isActive ? 'text-text-primary group-hover:text-accent' : 'text-text-secondary'}`}>
                      {branch.name}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed mb-8 ${isPrimary ? 'text-text-secondary max-w-md' : 'text-text-muted'}`}>
                      {branch.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-text-muted">
                      {branch.semestersAvailable}
                    </span>

                    <div
                      className={`inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200 ${
                        isActive
                          ? 'text-accent group-hover:text-accent-hover'
                          : 'text-text-muted group-hover:text-text-secondary'
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
          
          <div className="card-academic p-5 sm:p-6 bg-surface border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-accent-soft border border-red-500/25 flex items-center justify-center text-accent shrink-0 shadow-xs">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider block mb-1">
                  ACTIVE BRANCH • COMPUTER SCIENCE & ENGINEERING
                </span>
                <p className="text-sm text-text-secondary">
                  Semester 1, 3, aur 5 ke units, formulas aur exam notes currently active hain.
                </p>
              </div>
            </div>

            <Link
              to="/semesters"
              className="btn-primary-red text-sm whitespace-nowrap cursor-pointer"
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-xs font-semibold uppercase tracking-wider bg-accent-soft text-accent border border-red-500/25">
              <Users className="w-3.5 h-3.5 text-accent" />
              <span>Platform Philosophy</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-text-primary tracking-tight flex items-center gap-3">
              <span>Polytechnic Diploma Students Ke Liye, Students Dwara</span>
            </h2>

            <p className="text-sm sm:text-base text-text-secondary max-w-2xl">
              BTEUP Study ka vision diploma students ko bina kisi complex subscription ya heavy language ke, unki apni bolchal wali bhasha mein technical concepts sikhana hai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="card-academic p-6 sm:p-8 bg-surface border-border space-y-4">
              <div className="w-10 h-10 rounded-lg bg-accent-soft text-accent flex items-center justify-center font-mono font-bold text-base border border-red-500/25">
                01
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Conceptual Clarity
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Ratne ke bajaye concept ko intuitively samjho. Formulas aur derivations step-by-step breakdown ke sath provide kiye gaye hain.
              </p>
            </div>

            <div className="card-academic p-6 sm:p-8 bg-surface border-border space-y-4">
              <div className="w-10 h-10 rounded-lg bg-accent-soft text-accent flex items-center justify-center font-mono font-bold text-base border border-red-500/25">
                02
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Exam Preparation
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Har chapter mein high-probability repeated exam questions aur quick revision points highlighted hain taaki paper mein direct benefit ho.
              </p>
            </div>

            <div className="card-academic p-6 sm:p-8 bg-surface border-border space-y-4">
              <div className="w-10 h-10 rounded-lg bg-accent-soft text-accent flex items-center justify-center font-mono font-bold text-base border border-red-500/25">
                03
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Open & Independent
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
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
