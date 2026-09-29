import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  ArrowRight,
  ArrowDown,
  Sparkles,
} from 'lucide-react';
import { semestersData } from '../data/semestersData';
import { ThemeToggle } from '../components/common/ThemeToggle';

export const DashboardPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#070b14] text-white selection:bg-brand-500/30 selection:text-brand-200">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (~100VH ON DESKTOP, PROPER FULL-SCREEN HERO) */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-screen min-h-[100dvh] lg:h-screen lg:min-h-[700px] flex flex-col justify-between overflow-hidden">
        
        {/* Subtle Ambient Background Lighting & Vignettes */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Centered ambient radial accent glow */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/4 w-[650px] h-[520px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Top subtle vignette for header */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#070b14]/80 via-transparent to-transparent pointer-events-none" />

          {/* Bottom subtle vignette grounding the hero */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070b14] via-[#070b14]/60 to-transparent pointer-events-none" />
        </div>

        {/* Minimal Floating Transparent Header */}
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

          {/* Minimal Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link
              to="/"
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/10 backdrop-blur-md transition-colors"
            >
              Home
            </Link>
            <Link
              to="/semesters"
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-500/20 hover:bg-brand-500/30 text-brand-300 border border-brand-500/30 backdrop-blur-md transition-colors"
            >
              All Semesters
            </Link>
            <ThemeToggle />
          </div>
        </header>

        {/* Hero Main Content Canvas */}
        <div className="relative z-20 flex-1 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 py-8 sm:py-12 max-w-4xl mx-auto w-full text-center">
          
          <div className="space-y-5 sm:space-y-6 flex flex-col items-center">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-300 text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
              <span>For Polytechnic Diploma Students</span>
            </div>

            {/* Main Brand Title, Headline & Tagline */}
            <div className="space-y-3 sm:space-y-4">
              <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-brand-400 uppercase block">
                BTEUP Study
              </span>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.15] sm:leading-[1.12]">
                Polytechnic ki padhai, <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-cyan-400 bg-clip-text text-transparent">
                  ab apni language mein.
                </span>
              </h1>

              <p className="text-base sm:text-xl lg:text-2xl font-medium text-slate-200 font-sans leading-relaxed pt-1">
                "Ratne ke liye nahi, <span className="text-white font-bold">samajhne ke liye."</span>
              </p>

              {/* Subtle secondary supporting line */}
              <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-xl mx-auto">
                Simple notes. Clear concepts. Made for Polytechnic students.
              </p>
            </div>

            {/* Small Elegant CTA */}
            <div className="pt-2 sm:pt-4">
              <a
                href="#semesters"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('semesters')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-brand-500/20 hover:bg-brand-500/30 text-brand-300 hover:text-white border border-brand-500/30 hover:border-brand-400/50 backdrop-blur-md font-semibold text-sm sm:text-base tracking-wide transition-all duration-200 group cursor-pointer shadow-lg shadow-brand-500/15 hover:shadow-brand-500/25 hover:-translate-y-0.5"
              >
                <span>Start Learning</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5 text-brand-400 group-hover:text-white" />
              </a>
            </div>

          </div>
        </div>

        {/* Hero Bottom Scroll Cue */}
        <div className="relative z-20 pb-5 sm:pb-6 flex justify-center items-center">
          <a
            href="#semesters"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('semesters')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex flex-col items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-brand-300 transition-colors cursor-pointer"
            aria-label="Scroll to semester selection"
          >
            <span className="flex items-center gap-1 text-[11px] font-medium tracking-wider">
              <span>Start Learning</span>
              <ArrowDown className="w-3 h-3 transition-transform group-hover:translate-y-0.5" />
            </span>
            <div className="w-4 h-7 rounded-full border border-slate-600/80 group-hover:border-brand-400/80 flex items-start justify-center p-1 transition-colors">
              <div className="w-1 h-1.5 bg-brand-400 rounded-full animate-bounce" />
            </div>
          </a>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. CHOOSE YOUR SEMESTER SECTION (DEDICATED SECTION BELOW HERO) */}
      {/* ========================================================================= */}
      <section
        id="semesters"
        className="relative z-10 w-full bg-[#070b14] py-16 sm:py-24 px-4 sm:px-8 lg:px-12 scroll-mt-6"
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

          {/* 6 Semester Cards Grid - Preserving Existing Glassmorphic Card Style */}
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
      {/* 3. SLEEK MINIMAL FOOTER STRIP */}
      {/* ========================================================================= */}
      <footer className="relative z-30 w-full px-4 sm:px-8 lg:px-12 py-3 border-t border-white/10 bg-slate-950/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-slate-300 font-medium">BTEUP Diploma Syllabus Companion</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="hidden sm:inline text-slate-400">100% Free & Open-Source</span>
        </div>

        <div className="text-slate-400 text-xs">
          Empowering UP Polytechnic Diploma Engineering
        </div>
      </footer>

    </div>
  );
};

export default DashboardPage;
