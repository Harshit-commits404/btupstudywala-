import React, { useState, useEffect } from 'react';
import { Breadcrumb } from '../common/Breadcrumb';
import {
  List,
  Type,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Clock,
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
  const [fontSize, setFontSize] = useState('base');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }

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
    <div className="min-h-screen pb-24 text-text-primary bg-background relative selection:bg-red-600/20 selection:text-text-primary transition-colors duration-150">
      
      {/* Subtle Reading Scroll Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-[2px] bg-secondary z-30 pointer-events-none">
        <div
          className="h-full bg-accent transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        
        {/* Top Utility Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-6 border-b border-border text-xs">
          <Breadcrumb items={breadcrumbItems} />

          <div className="flex items-center gap-3 text-text-muted shrink-0 font-mono">
            {duration && (
              <div className="hidden sm:flex items-center gap-1 text-text-muted">
                <Clock className="w-3.5 h-3.5" />
                <span>{duration}</span>
              </div>
            )}

            {/* Font Size Adjuster */}
            <div className="flex items-center gap-1 border border-border rounded-lg p-0.5 bg-surface">
              <Type className="w-3 h-3 text-text-muted ml-1 mr-0.5" />
              <button
                type="button"
                onClick={() => setFontSize('sm')}
                className={`px-1.5 py-0.5 rounded text-xs transition-colors cursor-pointer ${
                  fontSize === 'sm' ? 'font-bold text-accent bg-accent-soft' : 'text-text-muted hover:text-text-primary'
                }`}
                aria-label="Small font size"
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => setFontSize('base')}
                className={`px-1.5 py-0.5 rounded text-xs transition-colors cursor-pointer ${
                  fontSize === 'base' ? 'font-bold text-accent bg-accent-soft' : 'text-text-muted hover:text-text-primary'
                }`}
                aria-label="Default font size"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => setFontSize('lg')}
                className={`px-1.5 py-0.5 rounded text-xs transition-colors cursor-pointer ${
                  fontSize === 'lg' ? 'font-bold text-accent bg-accent-soft' : 'text-text-muted hover:text-text-primary'
                }`}
                aria-label="Large font size"
              >
                A+
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sticky Index Accordion */}
        {sections.length > 0 && (
          <div className="lg:hidden mb-6 sticky top-18 z-20 bg-surface/95 backdrop-blur-md border border-border rounded-xl p-3 shadow-xs">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full flex items-center justify-between text-xs font-semibold text-text-primary cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <List className="w-4 h-4 text-accent" />
                <span>Contents:</span>
                <span className="text-accent font-bold truncate max-w-[200px]">
                  {sections.find((s) => s.id === activeSection)?.title || 'Overview'}
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
                        ? 'bg-accent-soft text-accent font-bold'
                        : 'text-text-secondary hover:bg-secondary hover:text-text-primary'
                    }`}
                  >
                    <span>{sec.title}</span>
                  </button>
                ))}
              </nav>
            )}
          </div>
        )}

        {/* Textbook Layout: Sidebar + Main Reading Document Canvas */}
        <div className="flex items-start gap-8 xl:gap-12">
          
          {/* Chapter Navigation Sidebar (Desktop) */}
          {sections.length > 0 && (
            <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-22 self-start">
              <div className="p-4 rounded-xl border border-border bg-surface shadow-xs">
                <div className="pb-3 mb-3 border-b border-border">
                  <span className="text-[11px] font-mono font-bold text-accent uppercase tracking-wider block">
                    {subjectName}
                  </span>
                  <h3 className="text-sm font-bold font-display text-text-primary leading-snug mt-1">
                    {chapterTitle}
                  </h3>
                </div>

                {/* Table of Contents List */}
                <nav className="space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-wider px-2 block mb-1">
                    Table of Contents
                  </span>
                  {sections.map((sec) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                          isActive
                            ? 'text-accent bg-accent-soft font-bold'
                            : 'text-text-secondary hover:text-text-primary hover:bg-secondary'
                        }`}
                      >
                        <span className="truncate block">{sec.title}</span>
                      </button>
                    );
                  })}
                </nav>

                {/* Back to Subject Action */}
                <div className="mt-4 pt-3 border-t border-border">
                  <button
                    type="button"
                    onClick={onBackToSubject}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs text-text-muted hover:text-accent transition-colors font-medium cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Subject</span>
                  </button>
                </div>
              </div>
            </aside>
          )}

          {/* Main Reading Document Canvas */}
          <main
            className={`w-full max-w-[820px] mx-auto lg:mx-0 reading-content ${fontSizeClasses[fontSize]}`}
          >
            <div className="bg-surface rounded-2xl p-6 sm:p-10 border border-border shadow-card mb-8">
              {/* Document Header Plate */}
              <div className="pb-6 mb-8 border-b border-border space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
                    {subjectName}
                  </span>
                  <span className="text-text-muted text-xs">•</span>
                  <span className="text-xs font-mono text-text-muted uppercase">
                    Unit {chapterNumber}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-text-primary tracking-tight">
                  {chapterTitle}
                </h1>
              </div>

              {/* Educational Content Notes */}
              {children}
            </div>

            {/* Document Completion Footer */}
            <div className="pt-4 flex items-center justify-between gap-4 text-xs">
              <button
                type="button"
                onClick={onBackToSubject}
                className="inline-flex items-center gap-1.5 text-text-muted hover:text-accent font-medium transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to {subjectName}</span>
              </button>

              <span className="text-text-muted font-mono">
                BTEUP Study • Chapter {chapterNumber}
              </span>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default LearningLayout;
