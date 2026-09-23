import React, { useState, useEffect } from 'react';
import { Breadcrumb } from '../common/Breadcrumb';
import {
  List,
  Type,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Clock,
  Sparkles,
  BookOpen,
} from 'lucide-react';

export const LearningLayout = ({
  breadcrumbItems = [],
  chapterNumber = '01',
  chapterTitle = 'Chapter Title',
  subjectName = 'Applied Physics - 1',
  duration = '6 Periods',
  sections = [],
  children,
  onBackToSubject,
}) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const [fontSize, setFontSize] = useState('base'); // sm, base, lg
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }

      // Check current visible section
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const fontSizeClasses = {
    sm: 'text-[14.5px] leading-relaxed tracking-normal',
    base: 'text-[16px] sm:text-[16.5px] leading-[1.8] tracking-normal',
    lg: 'text-[18px] sm:text-[18.5px] leading-[1.9] tracking-normal',
  };

  return (
    <div className="min-h-screen pb-28 text-slate-800 dark:text-slate-200 relative selection:bg-brand-500/20 selection:text-brand-400">
      {/* Subtle Ambient Radial Lighting for Premium Atmosphere */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[400px] bg-gradient-to-b from-brand-500/[0.07] via-brand-500/[0.02] to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Top Reading Scroll Progress Bar with Glowing Tip */}
      <div className="fixed top-16 left-0 right-0 h-[3px] bg-slate-200/50 dark:bg-slate-800/50 z-30 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-brand-600 via-brand-500 to-accent-cyan transition-all duration-150 ease-out shadow-[0_0_10px_rgba(49,120,255,0.7)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        {/* Top Utility Bar: Breadcrumbs & Reading Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 border-b border-slate-200/70 dark:border-slate-800/80 text-xs">
          <Breadcrumb items={breadcrumbItems} />

          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 shrink-0">
            {/* Reading Time Pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-medium">
              <Clock className="w-3.5 h-3.5 text-brand-500" />
              <span>~18 min study</span>
            </div>

            {/* Read Percentage */}
            <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500 hidden md:inline">
              {Math.round(scrollProgress)}% read
            </span>

            <div className="h-3.5 w-[1px] bg-slate-200 dark:bg-slate-800 hidden sm:block" />

            {/* Text Size Switcher */}
            <div className="flex items-center gap-1.5">
              <Type className="w-3.5 h-3.5 text-slate-400" />
              <div className="inline-flex items-center space-x-1 border border-slate-200 dark:border-slate-800 rounded-md p-0.5 bg-slate-50 dark:bg-slate-900/60 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setFontSize('sm')}
                  className={`px-2 py-0.5 rounded transition-all ${
                    fontSize === 'sm'
                      ? 'font-bold text-brand-600 dark:text-brand-400 bg-white dark:bg-slate-800 shadow-xs'
                      : 'hover:text-slate-900 dark:hover:text-white text-slate-500'
                  }`}
                  aria-label="Small font size"
                >
                  A-
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('base')}
                  className={`px-2 py-0.5 rounded transition-all ${
                    fontSize === 'base'
                      ? 'font-bold text-brand-600 dark:text-brand-400 bg-white dark:bg-slate-800 shadow-xs'
                      : 'hover:text-slate-900 dark:hover:text-white text-slate-500'
                  }`}
                  aria-label="Default font size"
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('lg')}
                  className={`px-2 py-0.5 rounded transition-all ${
                    fontSize === 'lg'
                      ? 'font-bold text-brand-600 dark:text-brand-400 bg-white dark:bg-slate-800 shadow-xs'
                      : 'hover:text-slate-900 dark:hover:text-white text-slate-500'
                  }`}
                  aria-label="Large font size"
                >
                  A+
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sticky Table of Contents Dropdown */}
        <div className="lg:hidden mb-6 sticky top-18 z-20 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-lg p-3 shadow-md">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200"
          >
            <span className="flex items-center gap-2">
              <List className="w-4 h-4 text-brand-500" />
              <span>Chapter Index:</span>
              <span className="text-brand-600 dark:text-brand-400 font-medium truncate max-w-[200px]">
                {sections.find((s) => s.id === activeSection)?.title || 'Contents'}
              </span>
            </span>
            {isMobileMenuOpen ? (
              <ChevronUp className="w-4 h-4 text-slate-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {isMobileMenuOpen && (
            <nav className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1 max-h-64 overflow-y-auto">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-xs transition-colors flex items-center justify-between ${
                    activeSection === sec.id
                      ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border-l-2 border-brand-500'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span>{sec.title}</span>
                </button>
              ))}
            </nav>
          )}
        </div>

        {/* Two-Column Document Reading Layout: Left Sidebar + Main Reading Document */}
        <div className="flex items-start gap-12 xl:gap-16">
          {/* Chapter Navigation Sidebar (Desktop, Left Column) */}
          <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-24 self-start">
            <div className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/40 backdrop-blur-sm shadow-xs">
              <div className="pb-3.5 mb-3.5 border-b border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Chapter {chapterNumber}</span>
                </div>
                <h3 className="text-base font-bold font-display text-slate-900 dark:text-white leading-snug">
                  {chapterTitle}
                </h3>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">
                  {subjectName} • {duration}
                </span>
              </div>

              {/* Table of Contents List */}
              <nav className="space-y-1">
                <div className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2 mb-1.5">
                  Table of Contents
                </div>
                {sections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-all duration-150 flex items-center gap-2 group ${
                        isActive
                          ? 'text-brand-600 dark:text-brand-400 font-bold bg-brand-500/10 border-l-[3px] border-brand-500 pl-2 shadow-xs'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <span className="truncate">{sec.title}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Exam High-Yield Mini Note */}
              <div className="mt-5 p-3 rounded-lg border border-amber-500/20 bg-amber-500/5 dark:bg-amber-500/[0.04] text-[11px] text-amber-800 dark:text-amber-300 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>BTEUP Exam Weightage</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                  Chapter 1 carries <strong>8–10 Marks</strong> in final exams. Homogeneity & Simple Pendulum derivation are repeated frequently.
                </p>
              </div>

              {/* Back to Subject Action */}
              <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800/80">
                <button
                  type="button"
                  onClick={onBackToSubject}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 rounded text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/40 dark:hover:bg-slate-800/40 transition-colors font-medium"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Subject Overview</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Main Reading Document Canvas */}
          <main
            className={`w-full max-w-[780px] xl:max-w-[820px] mx-auto lg:mx-0 ${fontSizeClasses[fontSize]}`}
          >
            {children}

            {/* Document Footer Navigation */}
            <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-sm">
              <button
                type="button"
                onClick={onBackToSubject}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to {subjectName}</span>
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                <span>BTEUP Study • Chapter 1 Complete</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default LearningLayout;
