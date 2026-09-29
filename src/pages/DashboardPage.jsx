import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { semestersData } from '../data/semestersData';
import { ThemeToggle } from '../components/common/ThemeToggle';

export const DashboardPage = () => {
  return (
    <div className="relative w-full min-h-screen lg:h-screen lg:max-h-screen overflow-x-hidden overflow-y-auto lg:overflow-hidden bg-[#070b14] text-white flex flex-col justify-between selection:bg-brand-500/30 selection:text-brand-200">
      
      {/* ========================================================================= */}
      {/* 1. HERO BACKGROUND IMAGE & CINEMATIC OVERLAYS */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* The provided hero image with artwork names already included */}
        <img
          src="/images/bteup-study-hero.jpg"
          alt="BTEUP Study Heroes"
          className="w-full h-full object-cover object-[70%_20%] sm:object-[74%_center] lg:object-[78%_center] xl:object-[80%_center] transition-transform duration-700 ease-out"
          loading="eager"
          fetchPriority="high"
        />

        {/* Left-side dark cinematic gradient overlay to ensure crystal-clear text readability without covering the developers or their artwork names */}
        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/90 to-transparent w-full md:w-[48%] lg:w-[44%] xl:w-[40%]" />

        {/* Mobile full subtle scrim to ensure text legibility on narrow portrait viewports */}
        <div className="absolute inset-0 bg-[#070b14]/70 sm:hidden" />

        {/* Bottom subtle vignette to softly ground the viewport without obscuring desk artwork */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070b14]/90 via-[#070b14]/30 to-transparent" />

        {/* Top subtle vignette for the header */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#070b14]/75 via-transparent to-transparent" />

        {/* Ambient radial accent glow behind the main headline on the far left */}
        <div className="absolute -left-24 top-1/4 w-[420px] h-[420px] bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* 2. MINIMAL FLOATING TRANSPARENT HEADER */}
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

      {/* ========================================================================= */}
      {/* 3. MAIN CONTENT CANVAS (FOCUSED ON LEFT OPEN AREA) */}
      {/* ========================================================================= */}
      <main className="relative z-20 flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-6 sm:py-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headline, Tagline & Semester Selection */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-5 sm:space-y-6 max-w-lg xl:max-w-xl">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-300 text-xs font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
              <span>For Polytechnic Diploma Students</span>
            </div>

            {/* Main Brand Title, Headline & Tagline */}
            <div className="space-y-2 sm:space-y-2.5">
              <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-400 uppercase block">
                BTEUP Study
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-extrabold font-display text-white tracking-tight leading-[1.12]">
                Polytechnic ki padhai, <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-cyan-400 bg-clip-text text-transparent">
                  ab apni language mein.
                </span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-slate-300 font-sans">
                “Ratne ke liye nahi, <span className="text-white font-bold">samajhne ke liye.”</span>
              </p>
            </div>

            {/* Semester Selection Box */}
            <div className="pt-1 sm:pt-2 space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-xs sm:text-sm font-mono font-bold text-slate-200 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-400 shadow-[0_0_8px_#38bdf8] inline-block" />
                  <span>Choose Your Semester</span>
                </h2>
                <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                  Odd Semesters Active
                </span>
              </div>

              {/* 6 Semester Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {semestersData.map((sem) => {
                  const isActive = sem.isAvailable;
                  return (
                    <Link
                      key={sem.id}
                      to={`/semester/${sem.id}`}
                      className={`group relative p-2.5 sm:p-3 rounded-2xl border transition-all duration-200 flex flex-col justify-between backdrop-blur-xl ${
                        isActive
                          ? 'bg-slate-900/70 hover:bg-brand-950/60 border-white/15 hover:border-brand-400/60 shadow-lg hover:shadow-brand-500/20 hover:-translate-y-0.5'
                          : 'bg-slate-950/50 hover:bg-slate-900/60 border-white/5 hover:border-amber-500/30'
                      }`}
                    >
                      {/* Ambient hover glow for active cards */}
                      {isActive && (
                        <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-brand-500/25 transition-all" />
                      )}

                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`font-mono text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded-md border ${
                            isActive
                              ? 'bg-brand-500/15 text-brand-300 border-brand-500/30'
                              : 'bg-white/5 text-slate-400 border-white/10'
                          }`}
                        >
                          {sem.shortName}
                        </span>

                        {isActive ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
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

          </div>

          {/* Right Column: Left completely empty to showcase the developers and artwork names */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7 h-full pointer-events-none" />

        </div>
      </main>

      {/* ========================================================================= */}
      {/* 4. SLEEK MINIMAL FOOTER STRIP */}
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
