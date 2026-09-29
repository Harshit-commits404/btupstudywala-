import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  ArrowRight,
  Sparkles,
  Heart,
  Code2,
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
        {/* The provided developers hero image */}
        <img
          src="/images/bteup-study-hero.jpg"
          alt="BTEUP Study Creators Ashish and Harshit"
          className="w-full h-full object-cover object-[72%_15%] sm:object-[76%_center] lg:object-[80%_center] xl:object-[82%_center] transition-transform duration-700 ease-out"
          loading="eager"
          fetchPriority="high"
        />

        {/* Left-side dark cinematic gradient overlay to ensure crystal-clear text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/85 sm:via-[#070b14]/75 to-transparent/10 w-full lg:w-[68%] xl:w-[62%]" />

        {/* Mobile full subtle scrim to balance portrait scaling */}
        <div className="absolute inset-0 bg-[#070b14]/65 sm:hidden" />

        {/* Bottom subtle vignette to ground the viewport */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#070b14] via-[#070b14]/40 to-transparent" />

        {/* Top subtle vignette for the header */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#070b14]/80 via-transparent to-transparent" />

        {/* Ambient radial accent glow behind the main headline */}
        <div className="absolute -left-20 top-1/3 w-[500px] h-[500px] bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
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
              Polytechnic Learning
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
      {/* 3. MAIN CONTENT CANVAS (LEFT-ALIGNED) */}
      {/* ========================================================================= */}
      <main className="relative z-20 flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-8 sm:py-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines, Tagline & Semester Selection */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 sm:space-y-7 max-w-xl xl:max-w-2xl">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-300 text-xs font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
              <span>For Polytechnic Diploma Students</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-2 sm:space-y-3">
              <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-400 uppercase block">
                BTEUP Study
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] font-extrabold font-display text-white tracking-tight leading-[1.12]">
                Polytechnic ki padhai, <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-cyan-400 bg-clip-text text-transparent">
                  ab apni language mein.
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-medium text-slate-300 font-sans">
                “Ratne ke liye nahi, <span className="text-white font-bold">samajhne ke liye.”</span>
              </p>
            </div>

            {/* Mobile / Inline Creator Badge */}
            <div className="flex sm:hidden items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md text-xs text-slate-300 w-fit">
              <span className="text-slate-400">Created by:</span>
              <span className="font-bold text-brand-300 font-mono text-[11px]">ASHISH</span>
              <span className="text-slate-500">&</span>
              <span className="font-bold text-cyan-300 font-mono text-[11px]">HARSHIT</span>
            </div>

            {/* Semester Selection Box */}
            <div className="pt-2 sm:pt-3 space-y-3">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {semestersData.map((sem) => {
                  const isActive = sem.isAvailable;
                  return (
                    <Link
                      key={sem.id}
                      to={`/semester/${sem.id}`}
                      className={`group relative p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between backdrop-blur-xl ${
                        isActive
                          ? 'bg-slate-900/65 hover:bg-brand-950/50 border-white/15 hover:border-brand-400/60 shadow-lg hover:shadow-brand-500/20 hover:-translate-y-0.5'
                          : 'bg-slate-950/45 hover:bg-slate-900/60 border-white/5 hover:border-amber-500/30'
                      }`}
                    >
                      {/* Ambient hover glow for active cards */}
                      {isActive && (
                        <div className="absolute -top-8 -right-8 w-20 h-20 bg-brand-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-brand-500/25 transition-all" />
                      )}

                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`font-mono text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md border ${
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
                          className={`text-sm sm:text-base font-bold transition-colors ${
                            isActive
                              ? 'text-white group-hover:text-brand-300'
                              : 'text-slate-300 group-hover:text-white'
                          }`}
                        >
                          {sem.title}
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 transition-all ${
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

          {/* Right Column: Visual Anchor on Desktop (Developers Position Tags) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 relative h-full min-h-[360px] pointer-events-none">
            
            {/* Tag for ASHISH (Glasses-wearing developer on the left side of the duo) */}
            <div className="absolute left-[8%] bottom-[42%] pointer-events-auto">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/75 border border-white/20 backdrop-blur-md shadow-xl text-xs font-mono text-slate-200 hover:border-brand-400/60 transition-colors">
                <span className="w-2 h-2 rounded-full bg-brand-400 shadow-[0_0_8px_#38bdf8] animate-pulse" />
                <span className="font-bold tracking-widest text-white">ASHISH</span>
              </div>
            </div>

            {/* Tag for HARSHIT (Developer standing beside him on the right) */}
            <div className="absolute right-[8%] bottom-[38%] pointer-events-auto">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/75 border border-white/20 backdrop-blur-md shadow-xl text-xs font-mono text-slate-200 hover:border-cyan-400/60 transition-colors">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                <span className="font-bold tracking-widest text-white">HARSHIT</span>
              </div>
            </div>

            {/* Built by Ashish & Harshit Badge over the desk area */}
            <div className="absolute right-[4%] bottom-[6%] pointer-events-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/85 border border-brand-500/30 backdrop-blur-md shadow-2xl text-xs font-medium text-slate-300">
                <Code2 className="w-3.5 h-3.5 text-brand-400" />
                <span>
                  Built by{' '}
                  <strong className="text-white font-bold tracking-wide">
                    Ashish & Harshit
                  </strong>
                </span>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* ========================================================================= */}
      {/* 4. SLEEK DESKTOP/MOBILE FOOTER STRIP */}
      {/* ========================================================================= */}
      <footer className="relative z-30 w-full px-4 sm:px-8 lg:px-12 py-3 sm:py-4 border-t border-white/10 bg-slate-950/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-slate-300 font-medium">BTEUP Diploma Syllabus Companion</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="hidden sm:inline text-slate-400">100% Free & Open-Source</span>
        </div>

        <div className="flex items-center gap-1.5 text-slate-300">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          <span>by</span>
          <strong className="text-white font-semibold">Ashish & Harshit</strong>
        </div>
      </footer>

    </div>
  );
};

export default DashboardPage;
