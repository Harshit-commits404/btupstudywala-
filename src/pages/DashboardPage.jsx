import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  ArrowRight,
  ArrowDown,
  Sparkles,
  X,
  Users,
} from 'lucide-react';
import { semestersData } from '../data/semestersData';
import { ThemeToggle } from '../components/common/ThemeToggle';

export const DashboardPage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show developer introduction modal once per browser session
    const hasSeenModal = sessionStorage.getItem('bteup_developer_intro_seen');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    sessionStorage.setItem('bteup_developer_intro_seen', 'true');
  };

  const handleStartLearning = () => {
    handleCloseModal();
    setTimeout(() => {
      document.getElementById('semesters')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showModal) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  return (
    <div className="relative w-full min-h-screen bg-[#070b14] text-white selection:bg-brand-500/30 selection:text-brand-200">
      
      {/* ========================================================================= */}
      {/* 1. DEVELOPER PROMOTIONAL POPUP / MODAL */}
      {/* ========================================================================= */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fadeIn"
        >
          {/* Subtle dark translucent backdrop with click-to-close */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={handleCloseModal}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div
            className="relative z-10 w-[94vw] max-w-[680px] md:max-w-[760px] xl:max-w-[820px] max-h-[94vh] rounded-2xl sm:rounded-3xl bg-[#0b101e] border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.85)] p-4 sm:p-5 md:p-6 flex flex-col justify-between overflow-hidden group"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close "×" Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-brand-400 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2.5 mb-2 sm:mb-3 pr-10">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-400 p-[1px] shadow-md shadow-brand-500/25">
                <div className="w-full h-full rounded-[11px] bg-slate-950 flex items-center justify-center text-brand-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
              </div>
              <div className="flex flex-wrap items-baseline gap-2">
                <span id="modal-title" className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white">
                  BTEUP <span className="text-brand-400">Study</span>
                </span>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-brand-500/15 text-brand-300 border border-brand-500/30">
                  Built by Ashish & Harshit
                </span>
              </div>
            </div>

            {/* Modal Image Showcase (Contains Full 16:9 Photo with Contain & No Cropping) */}
            <div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950/80 border border-white/10 my-1 sm:my-2 shadow-inner flex items-center justify-center">
              <img
                src="/images/developer-intro.jpg"
                alt="BTEUP Study Creators Ashish & Harshit"
                className="w-full h-full object-contain"
                loading="eager"
              />
              {/* Subtle glass frame reflection */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>

            {/* Modal Footer / Compact Tagline & CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 sm:pt-3 border-t border-white/10 mt-1">
              <div className="text-center sm:text-left space-y-0.5">
                <p className="text-xs sm:text-sm font-semibold text-white">
                  "Polytechnic ki padhai, ab apni language mein."
                </p>
                <p className="text-[11px] sm:text-xs text-brand-300 font-medium">
                  "Ratne ke liye nahi, <span className="text-white font-bold">samajhne ke liye."</span>
                </p>
              </div>

              <button
                onClick={handleStartLearning}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. MINIMAL HEADER */}
      {/* ========================================================================= */}
      <header className="relative z-30 w-full px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="BTEUP Study Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-400 p-[1px] shadow-lg shadow-brand-500/25">
            <div className="w-full h-full rounded-[11px] bg-slate-950/90 flex items-center justify-center text-brand-400 group-hover:text-white transition-colors duration-200">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
              BTEUP <span className="text-brand-400">Study</span>
            </span>
            <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
              Polytechnic Learning Platform
            </span>
          </div>
        </Link>

        {/* Header Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Creator Intro Button */}
          <button
            onClick={() => setShowModal(true)}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 backdrop-blur-md transition-colors cursor-pointer"
            title="Meet the creators"
          >
            <Users className="w-3.5 h-3.5 text-brand-400" />
            <span>Creators</span>
          </button>
          
          <Link
            to="/semesters"
            className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-500/20 hover:bg-brand-500/30 text-brand-300 border border-brand-500/30 backdrop-blur-md transition-colors"
          >
            All Semesters
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 3. CLEAN HOMEPAGE BANNER (NO FULL-SCREEN IMAGE HERO) */}
      {/* ========================================================================= */}
      <section className="relative z-10 w-full pt-8 sm:pt-14 pb-8 sm:pb-12 px-4 sm:px-8 text-center max-w-4xl mx-auto">
        {/* Subtle Ambient Glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[550px] h-[350px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="space-y-4 sm:space-y-5 flex flex-col items-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-300 text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
            <span>For Polytechnic Diploma Students</span>
          </div>

          {/* Heading */}
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.15] sm:leading-[1.12]">
              Polytechnic ki padhai, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-cyan-400 bg-clip-text text-transparent">
                ab apni language mein.
              </span>
            </h1>

            <p className="text-base sm:text-xl lg:text-2xl font-medium text-slate-200 font-sans leading-relaxed">
              "Ratne ke liye nahi, <span className="text-white font-bold">samajhne ke liye."</span>
            </p>

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-xl mx-auto">
              Simple notes. Clear concepts. Made for Polytechnic students.
            </p>
          </div>

          {/* Start Learning Cue */}
          <div className="pt-2 sm:pt-4">
            <a
              href="#semesters"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('semesters')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-brand-500/20 hover:bg-brand-500/30 text-brand-300 hover:text-white border border-brand-500/30 hover:border-brand-400/50 backdrop-blur-md font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 group cursor-pointer shadow-lg shadow-brand-500/10 hover:shadow-brand-500/20 hover:-translate-y-0.5"
            >
              <span>Explore Semesters</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5 text-brand-400 group-hover:text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CHOOSE YOUR SEMESTER SECTION (PRIMARY CONTENT) */}
      {/* ========================================================================= */}
      <section
        id="semesters"
        className="relative z-10 w-full bg-[#070b14] py-10 sm:py-16 px-4 sm:px-8 lg:px-12 scroll-mt-6"
      >
        <div className="max-w-5xl mx-auto w-full space-y-8 sm:space-y-10">
          
          {/* Section Header & Subtitle */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight flex items-center justify-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-400 shadow-[0_0_8px_#38bdf8] inline-block" />
              <span>Choose Your Semester</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-sans">
              Select your semester and start learning.
            </p>
          </div>

          {/* 6 Semester Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {semestersData.map((sem) => {
              const isActive = sem.isAvailable;
              return (
                <Link
                  key={sem.id}
                  to={`/semester/${sem.id}`}
                  className={`group relative p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between backdrop-blur-xl ${
                    isActive
                      ? 'bg-slate-900/70 hover:bg-brand-950/60 border-white/15 hover:border-brand-400/60 shadow-lg hover:shadow-brand-500/20 hover:-translate-y-0.5'
                      : 'bg-slate-950/50 hover:bg-slate-900/60 border-white/5 hover:border-amber-500/30'
                  }`}
                >
                  {/* Ambient hover glow for active cards */}
                  {isActive && (
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-brand-500/25 transition-all" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-[11px] sm:text-xs font-bold px-2 py-0.5 rounded-md border ${
                        isActive
                          ? 'bg-brand-500/15 text-brand-300 border-brand-500/30'
                          : 'bg-white/5 text-slate-400 border-white/10'
                      }`}
                    >
                      {sem.shortName}
                    </span>

                    {isActive ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Active</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-medium text-amber-400/90 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                        Soon
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-1">
                    <span
                      className={`text-xs sm:text-sm font-bold transition-colors ${
                        isActive
                          ? 'text-white group-hover:text-brand-300'
                          : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {sem.title}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-all ${
                        isActive
                          ? 'text-slate-400 group-hover:text-brand-300 group-hover:translate-x-1'
                          : 'text-slate-600 group-hover:text-amber-400'
                      }`}
                    />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SLEEK MINIMAL FOOTER STRIP */}
      {/* ========================================================================= */}
      <footer className="relative z-30 w-full px-4 sm:px-8 lg:px-12 py-3 border-t border-white/10 bg-slate-950/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-slate-300 font-medium">BTEUP Diploma Syllabus Companion</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="hidden sm:inline text-slate-400">100% Free & Open-Source</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowModal(true)}
            className="hover:text-brand-300 transition-colors cursor-pointer text-slate-400"
          >
            Creators: Ashish & Harshit
          </button>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">
            Empowering UP Polytechnic Diploma Engineering
          </span>
        </div>
      </footer>

    </div>
  );
};

export default DashboardPage;
