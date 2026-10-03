import React, { useEffect } from 'react';
import { X, GraduationCap, ArrowRight } from 'lucide-react';

export const DeveloperModal = ({ isOpen, onClose, onStartLearning }) => {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fadeIn"
    >
      {/* Translucent backdrop with click-to-close */}
      <div
        className="fixed inset-0 bg-slate-950/75 dark:bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container in Theme-Aware Style */}
      <div
        className="relative z-10 w-[94vw] max-w-[680px] md:max-w-[760px] xl:max-w-[820px] max-h-[94vh] rounded-2xl sm:rounded-3xl bg-surface border border-border shadow-2xl p-4 sm:p-5 md:p-6 flex flex-col justify-between overflow-hidden group text-text-primary transition-all duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top subtle crimson hairline */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-600" />

        {/* Top Close "×" Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary hover:bg-surface border border-border hover:border-border-hover flex items-center justify-center text-text-secondary hover:text-accent transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-2 sm:mb-3 pr-10">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-accent-soft border border-red-500/30 flex items-center justify-center text-accent shadow-xs shrink-0">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div className="flex flex-wrap items-baseline gap-2">
            <span id="modal-title" className="font-display font-extrabold text-base sm:text-lg tracking-tight text-text-primary">
              BTEUP <span className="text-accent">Study</span>
            </span>
            <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-red-600/10 text-accent border border-red-600/25">
              Made by two final-year Polytechnic students — Ashish & Harshit
            </span>
          </div>
        </div>

        {/* Modal Image Showcase (Contains Full 16:9 Photo with Contain & Zero Cropping) */}
        <div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900/90 dark:bg-black/95 border border-border my-1 sm:my-2 shadow-inner flex items-center justify-center">
          <img
            src="/images/developer-intro.jpg"
            alt="BTEUP Study Creators Ashish & Harshit - Final-Year Polytechnic Students"
            className="w-full h-full object-contain"
            loading="eager"
          />
          {/* Frame border highlight */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
        </div>

        {/* Modal Footer / Tagline & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 sm:pt-3 border-t border-border mt-1">
          <div className="text-center sm:text-left space-y-0.5">
            <p className="text-xs sm:text-sm font-semibold text-text-primary">
              "Polytechnic ki padhai, ab apni language mein."
            </p>
            <p className="text-[11px] sm:text-xs text-accent font-medium">
              "Ratne ke liye nahi, <span className="text-text-primary font-bold">samajhne ke liye."</span>
            </p>
          </div>

          <button
            onClick={onStartLearning}
            className="w-full sm:w-auto btn-primary-red whitespace-nowrap text-xs sm:text-sm cursor-pointer"
          >
            <span>Start Learning</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default DeveloperModal;
