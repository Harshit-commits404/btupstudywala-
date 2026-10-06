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
  initialSection = null,
}) => {
  const [activeSection, setActiveSection] = useState(initialSection || sections[0]?.id || '');
  const [fontSize, setFontSize] = useState('base'); // sm, base, lg
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle initial section or URL hash scrolling
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const target = initialSection || hash;
    if (target) {
      const timer = setTimeout(() => {
        scrollToSection(target);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [initialSection]);

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
    <div className="min-h-screen pb-28 text-text-primary bg-background relative selection:bg-red-600/25 selection:text-text-primary transition-colors duration-200">
      
      {/* Top Reading Scroll Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-[3px] bg-secondary z-30 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-red-700 via-red-500 to-red-400 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(220,38,38,0.4)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        
        {/* Top Utility Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 border-b border-border text-xs">
          <Breadcrumb items={breadcrumbItems} />

          <div className="flex items-center gap-3 text-text-muted shrink-0 font-mono">
            {/* Reading Duration Pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface text-text-secondary font-medium border border-border shadow-xs">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>{duration}</span>
            </div>

            {/* Read Percentage */}
            <span className="hidden md:inline text-accent font-semibold font-mono">
              {Math.round(scrollProgress)}% read
            </span>

            <div className="h-3.5 w-[1px] bg-border hidden sm:block" />

            {/* Font Size Adjuster */}
            <div className="flex items-center gap-1.5">
              <Type className="w-3.5 h-3.5 text-text-muted" />
              <div className="inline-flex items-center space-x-1 border border-border rounded-xl p-0.5 bg-surface shadow-xs">
                <button
                  type="button"
                  onClick={() => setFontSize('sm')}
                  className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer text-xs ${
                    fontSize === 'sm'
                      ? 'font-bold text-accent bg-accent-soft shadow-xs'
                      : 'hover:text-text-primary text-text-muted'
                  }`}
                  aria-label="Small font size"
                >
                  A-
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('base')}
                  className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer text-xs ${
                    fontSize === 'base'
                      ? 'font-bold text-accent bg-accent-soft shadow-xs'
                      : 'hover:text-text-primary text-text-muted'
                  }`}
                  aria-label="Default font size"
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('lg')}
                  className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer text-xs ${
                    fontSize === 'lg'
                      ? 'font-bold text-accent bg-accent-soft shadow-xs'
                      : 'hover:text-text-primary text-text-muted'
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
        <div className="lg:hidden mb-6 sticky top-18 z-20 bg-surface/95 backdrop-blur-md border border-border rounded-xl p-3 shadow-md">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full flex items-center justify-between text-xs font-semibold text-text-primary cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <List className="w-4 h-4 text-accent" />
              <span>Chapter Index:</span>
              <span className="text-accent font-bold truncate max-w-[200px]">
                {sections.find((s) => s.id === activeSection)?.title || 'Contents'}
              </span>
            </span>
            {isMobileMenuOpen ? (
              <ChevronUp className="w-4 h-4 text-text-muted" />
            ) : (
              <ChevronDown className="w-4 h-4 text-text-muted" />
            )}
          </button>

          {isMobileMenuOpen && (
            <nav className="mt-3 pt-3 border-t border-border space-y-1 max-h-64 overflow-y-auto">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors flex items-center justify-between cursor-pointer ${
                    activeSection === sec.id
                      ? 'bg-accent-soft text-accent border-l-2 border-accent font-bold'
                      : 'text-text-secondary hover:bg-secondary hover:text-text-primary'
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
            <div className="p-5 rounded-2xl border border-border bg-surface shadow-card-light dark:shadow-card-dark">
              <div className="pb-3.5 mb-3.5 border-b border-border">
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-accent mb-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>CHAPTER {chapterNumber}</span>
                </div>
                <h3 className="text-base font-bold font-display text-text-primary leading-snug">
                  {chapterTitle}
                </h3>
                <span className="text-[11px] text-text-muted block mt-1">
                  {subjectName} • {duration}
                </span>
              </div>

              {/* Table of Contents List */}
              <nav className="space-y-1">
                <div className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest px-2 mb-1.5">
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
                          ? 'text-accent bg-accent-soft border-l-[3px] border-accent pl-2 font-bold shadow-xs'
                          : 'text-text-secondary hover:text-text-primary hover:bg-secondary'
                      }`}
                    >
                      <span className="truncate">{sec.title}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Back to Subject Action */}
              <div className="mt-5 pt-3.5 border-t border-border">
                <button
                  type="button"
                  onClick={onBackToSubject}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs text-text-muted hover:text-text-primary hover:bg-secondary transition-colors font-semibold cursor-pointer border border-transparent hover:border-border"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Subject Index</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Main Reading Document Canvas (Clean Textbook Reading Experience) */}
          <main
            className={`w-full max-w-[780px] mx-auto lg:mx-0 reading-content ${fontSizeClasses[fontSize]}`}
          >
            <div className="bg-surface rounded-2xl p-6 sm:p-10 shadow-card-light dark:shadow-card-dark border border-border mb-8">
              {children}
            </div>

            {/* Document Completion Footer */}
            <div className="mt-12 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-sm">
              <button
                type="button"
                onClick={onBackToSubject}
                className="inline-flex items-center gap-2 text-text-muted hover:text-accent font-medium transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to {subjectName} Index</span>
              </button>

              <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
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
