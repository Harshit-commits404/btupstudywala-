import React, { useState, useEffect } from 'react';
import { Breadcrumb } from '../common/Breadcrumb';
import {
  List,
  Type,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Clock,
  BookOpen,
  Bookmark,
  Share2,
  CheckCircle2
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
          if (rect.top <= 200 && rect.bottom >= 80) {
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
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const fontSizeClasses = {
    sm: 'text-[15px] leading-[1.8]',
    base: 'text-[16.5px] leading-[1.85]',
    lg: 'text-[18px] leading-[1.95]',
  };

  return (
    <div className="min-h-screen pb-28 text-slate-800 dark:text-slate-200 relative selection:bg-cyan-500/25 selection:text-cyan-600 dark:selection:text-cyan-300">
      
      {/* Top Reading Scroll Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-[3px] bg-slate-200 dark:bg-[#0c1a2d] z-30 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-300 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(6,182,212,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        
        {/* Top Utility Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 border-b border-slate-200/80 dark:border-cyan-500/15 text-xs">
          <Breadcrumb items={breadcrumbItems} />

          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 shrink-0 font-mono">
            {/* Reading Duration Pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#0c1a2d] text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-cyan-500/20">
              <Clock className="w-3.5 h-3.5 text-cyan-500" />
              <span>{duration}</span>
            </div>

            {/* Read Percentage */}
            <span className="hidden md:inline text-cyan-600 dark:text-cyan-400 font-semibold">
              {Math.round(scrollProgress)}% read
            </span>

            <div className="h-3.5 w-[1px] bg-slate-200 dark:border-white/10 hidden sm:block" />

            {/* Font Size Adjuster */}
            <div className="flex items-center gap-1.5">
              <Type className="w-3.5 h-3.5 text-slate-400" />
              <div className="inline-flex items-center space-x-1 border border-slate-200 dark:border-cyan-500/20 rounded-lg p-0.5 bg-slate-50 dark:bg-[#0c1a2d]">
                <button
                  type="button"
                  onClick={() => setFontSize('sm')}
                  className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                    fontSize === 'sm'
                      ? 'font-bold text-cyan-600 dark:text-cyan-400 bg-white dark:bg-[#12263d] shadow-xs'
                      : 'hover:text-slate-900 dark:hover:text-white text-slate-500'
                  }`}
                  aria-label="Small font size"
                >
                  A-
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('base')}
                  className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                    fontSize === 'base'
                      ? 'font-bold text-cyan-600 dark:text-cyan-400 bg-white dark:bg-[#12263d] shadow-xs'
                      : 'hover:text-slate-900 dark:hover:text-white text-slate-500'
                  }`}
                  aria-label="Default font size"
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('lg')}
                  className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                    fontSize === 'lg'
                      ? 'font-bold text-cyan-600 dark:text-cyan-400 bg-white dark:bg-[#12263d] shadow-xs'
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

        {/* Mobile Sticky Index Accordion */}
        <div className="lg:hidden mb-6 sticky top-18 z-20 bg-white/95 dark:bg-[#0c1a2d]/95 backdrop-blur-md border border-slate-200 dark:border-cyan-500/20 rounded-xl p-3 shadow-md">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200"
          >
            <span className="flex items-center gap-2">
              <List className="w-4 h-4 text-cyan-500" />
              <span>Chapter Index:</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold truncate max-w-[200px]">
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
            <nav className="mt-3 pt-3 border-t border-slate-100 dark:border-white/5 space-y-1 max-h-64 overflow-y-auto">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors flex items-center justify-between ${
                    activeSection === sec.id
                      ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border-l-2 border-cyan-500'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span>{sec.title}</span>
                </button>
              ))}
            </nav>
          )}
        </div>

        {/* Textbook Layout: Sidebar + Main Reading Document Canvas */}
        <div className="flex items-start gap-10 xl:gap-14">
          
          {/* Chapter Navigation Sidebar (Desktop) */}
          <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-24 self-start">
            <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-cyan-500/20 bg-white dark:bg-[#0c1a2d] shadow-xs">
              <div className="pb-3.5 mb-3.5 border-b border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>CHAPTER {chapterNumber}</span>
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
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-all flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? 'text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-500/10 border-l-[3px] border-cyan-500 pl-2 shadow-xs'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                      }`}
                    >
                      <span className="truncate">{sec.title}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Back to Subject Action */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-white/5">
                <button
                  type="button"
                  onClick={onBackToSubject}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors font-semibold cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Subject Index</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Main Reading Document Canvas (Clean Textbook Reading Experience) */}
          <main
            className={`w-full max-w-[800px] xl:max-w-[840px] mx-auto lg:mx-0 reading-content ${fontSizeClasses[fontSize]}`}
          >
            {children}

            {/* Document Completion Footer */}
            <div className="mt-20 pt-8 border-t border-slate-200 dark:border-cyan-500/20 flex flex-wrap items-center justify-between gap-4 text-sm">
              <button
                type="button"
                onClick={onBackToSubject}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to {subjectName} Index</span>
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                <span>BTEUP Study Textbook • Chapter {chapterNumber}</span>
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default LearningLayout;
