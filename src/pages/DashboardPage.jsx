import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, ChevronRight, MessageSquare } from 'lucide-react';
import { branchesData } from '../data/branchesData';
import heroBgImage from '../assets/bteup-study-hero.jpg';

export const GOOGLE_FEEDBACK_FORM_URL = "https://forms.gle/as6uMZQ8QxmDpt1q6";

export const DashboardPage = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-12 sm:space-y-16 text-text-primary">
      
      {/* 1. HERO SECTION (With Polytechnic Engineering Background Image & Neutral/Dark Overlay) */}
      <section className="relative z-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-subtle text-center max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-14 lg:py-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src={heroBgImage}
            alt="BTEUP Polytechnic engineering education background"
            className="w-full h-full object-cover object-center sm:object-[center_35%]"
            loading="eager"
            fetchPriority="high"
          />

          {/* Balanced Neutral/Dark Overlay (Preserves Rich Visuals while keeping text crystal clear) */}
          <div className="absolute inset-0 bg-white/65 dark:bg-black/65 sm:bg-white/55 sm:dark:bg-black/55 backdrop-blur-[1px] transition-colors duration-300" />
          
          {/* Subtle Vertical Scrim to gently anchor text */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40 dark:from-black/40 dark:via-transparent dark:to-black/40" />
        </div>

        {/* Content Container (Preserves Exact Text Content & Order) */}
        <div className="relative z-10 max-w-2xl mx-auto space-y-3.5 sm:space-y-5">
          {/* Small Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/90 dark:bg-surface/80 border border-border text-accent text-xs font-mono font-medium tracking-wide shadow-subtle backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>BTEUP STUDY</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display text-text-primary tracking-tight leading-[1.18]">
            Polytechnic ki padhai,<br className="hidden sm:inline" />
            <span className="text-accent"> ab simple language mein.</span>
          </h1>

          {/* Supporting Line */}
          <p className="text-xs sm:text-base text-text-secondary max-w-lg mx-auto font-normal leading-relaxed">
            Notes, concepts aur syllabus — sab ek jagah.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="pt-1.5 sm:pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <a
              href="#branches"
              className="btn-primary group shadow-subtle"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <Link
              to="/semester/1"
              className="btn-secondary backdrop-blur-sm"
            >
              <BookOpen className="w-4 h-4 text-accent" />
              <span>Common 1st Year Notes</span>
            </Link>
          </div>

          {/* Secondary Subtle Mantra */}
          <p className="text-xs font-mono text-text-muted pt-1 tracking-wide">
            Samjho. Padho. Clear karo.
          </p>
        </div>
      </section>

      {/* 2. EDITORIAL BRANCH SELECTION (Clean List Layout) */}
      <section id="branches" className="space-y-4 scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1 pb-3 border-b border-border">
          <div>
            <span className="text-[11px] font-mono font-semibold text-accent uppercase tracking-wider block">
              Curriculum Streams
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-text-primary tracking-tight mt-0.5">
              Choose Your Branch
            </h2>
          </div>
          <span className="text-xs font-mono text-text-muted">
            5 Polytechnic Disciplines
          </span>
        </div>

        {/* Editorial Rows */}
        <div className="space-y-2.5">
          {branchesData.map((branch, idx) => {
            const isCse = branch.id === 'cse';
            const statusLabel = isCse ? 'Sem 1, 3, 5 Live' : 'Sem 1 Common Live';
            const numberFormatted = `0${idx + 1}`;

            return (
              <Link
                key={branch.id}
                to={`/branch/${branch.id}`}
                className="editorial-row group"
              >
                {/* Left Teal Highlight Accent Line on Hover */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                  aria-hidden="true"
                />

                <div className="flex items-center gap-3.5 sm:gap-6 min-w-0">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-text-muted group-hover:text-accent transition-colors shrink-0">
                    {numberFormatted}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold font-display text-text-primary group-hover:text-accent transition-colors truncate">
                      {branch.name}
                    </h3>
                    <p className="text-xs text-text-muted hidden sm:block truncate mt-0.5">
                      {branch.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 pl-2">
                  <span className="font-mono text-[11px] text-text-muted px-2 py-0.5 rounded bg-surface-secondary border border-border group-hover:border-accent/30 group-hover:text-accent transition-colors whitespace-nowrap">
                    {statusLabel}
                  </span>

                  <div className="w-7 h-7 rounded-md flex items-center justify-center text-text-muted group-hover:text-accent transition-colors">
                    <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. COMMON SEMESTER 1 SHOWCASE (Editorial Content Block) */}
      <section className="rounded-xl border border-border bg-surface p-5 sm:p-7 space-y-4 shadow-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border">
          <div className="space-y-1">
            <span className="text-[11px] font-mono font-semibold text-accent uppercase tracking-wider block">
              Semester 01 • Common Curriculum
            </span>
            <h3 className="text-base sm:text-lg font-bold font-display text-text-primary">
              Ratne se pehle samjho.
            </h3>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 self-start sm:self-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>All Branches Unified</span>
          </span>
        </div>

        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          Applied Physics-I, Mathematics-I, Applied Chemistry, Fundamentals of Electrical & Electronics (FEEE), aur Introduction to IT & AI sabhi branches ke liye common hain. Jo syllabus mein hai, wahi padho.
        </p>

        <div className="pt-1 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="font-mono text-text-muted">
            Chapter padho → concept samjho → next unit pe jao.
          </span>

          <Link
            to="/semester/1"
            className="inline-flex items-center gap-1.5 text-accent hover:text-accent-strong font-semibold transition-colors"
          >
            <span>Open Semester 1 Notes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 4. STUDENT FEEDBACK LINK STRIP */}
      <section className="rounded-xl border border-border bg-surface p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-subtle">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-surface-secondary border border-border flex items-center justify-center text-accent shrink-0">
            <MessageSquare className="w-4 h-4 text-accent" />
          </div>
          <div>
            <h3 className="text-sm font-semibold font-display text-text-primary">
              Feedback & Syllabus Suggestions
            </h3>
            <p className="text-xs text-text-muted">
              Notes aur syllabus ko improve karne ke liye apna feedback share karein.
            </p>
          </div>
        </div>

        <a
          href={GOOGLE_FEEDBACK_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-xs !py-1.5 !px-3 shrink-0 whitespace-nowrap self-stretch sm:self-auto inline-flex items-center gap-1.5"
        >
          <span>Open Google Form</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </section>

    </div>
  );
};

export default DashboardPage;
