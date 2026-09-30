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
      {/* Dark translucent backdrop with click-to-close */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container in Red & Black Theme */}
      <div
        className="relative z-10 w-[94vw] max-w-[680px] md:max-w-[760px] xl:max-w-[820px] max-h-[94vh] rounded-2xl sm:rounded-3xl bg-[#0e0e0e] border border-red-600/35 shadow-[0_25px_70px_rgba(139,0,0,0.4)] p-4 sm:p-5 md:p-6 flex flex-col justify-between overflow-hidden group text-white transition-all duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top subtle red hairline */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-700" />

        {/* Top Close "×" Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#171717] hover:bg-[#222222] border border-white/15 hover:border-red-500/50 flex items-center justify-center text-neutral-300 hover:text-red-400 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-2 sm:mb-3 pr-10">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-red-700 to-red-500 p-[1px] shadow-md shadow-red-700/30">
            <div className="w-full h-full rounded-[11px] bg-[#080808] flex items-center justify-center text-red-500">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <div className="flex flex-wrap items-baseline gap-2">
            <span id="modal-title" className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white">
              BTEUP <span className="text-red-500">Study</span>
            </span>
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-red-600/15 text-red-300 border border-red-600/30">
              Made by two final-year Polytechnic students — Ashish & Harshit
            </span>
          </div>
        </div>

        {/* Modal Image Showcase (Contains Full 16:9 Photo with Contain & Zero Cropping) */}
        <div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-black/90 border border-white/10 my-1 sm:my-2 shadow-inner flex items-center justify-center">
          <img
            src="/images/developer-intro.jpg"
            alt="BTEUP Study Creators Ashish & Harshit - Final-Year Polytechnic Students"
            className="w-full h-full object-contain"
            loading="eager"
          />
          {/* Subtle frame reflection */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
        </div>

        {/* Modal Footer / Tagline & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 sm:pt-3 border-t border-white/10 mt-1">
          <div className="text-center sm:text-left space-y-0.5">
            <p className="text-xs sm:text-sm font-semibold text-white">
              "Polytechnic ki padhai, ab apni language mein."
            </p>
            <p className="text-[11px] sm:text-xs text-red-400 font-medium">
              "Ratne ke liye nahi, <span className="text-white font-bold">samajhne ke liye."</span>
            </p>
          </div>

          <button
            onClick={onStartLearning}
            className="w-full sm:w-auto btn-primary-red whitespace-nowrap text-xs sm:text-sm"
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
