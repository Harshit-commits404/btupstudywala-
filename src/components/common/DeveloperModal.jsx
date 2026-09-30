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
      {/* Subtle dark translucent backdrop with click-to-close */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        className="relative z-10 w-[94vw] max-w-[680px] md:max-w-[760px] xl:max-w-[820px] max-h-[94vh] rounded-2xl sm:rounded-3xl bg-[#091222] border border-cyan-500/25 shadow-[0_25px_70px_rgba(0,0,0,0.85)] p-4 sm:p-5 md:p-6 flex flex-col justify-between overflow-hidden group text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close "×" Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-2 sm:mb-3 pr-10">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 p-[1px] shadow-md shadow-cyan-500/25">
            <div className="w-full h-full rounded-[11px] bg-slate-950 flex items-center justify-center text-cyan-400">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <div className="flex flex-wrap items-baseline gap-2">
            <span id="modal-title" className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white">
              BTEUP <span className="text-cyan-400">Study</span>
            </span>
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              Built by Ashish & Harshit
            </span>
          </div>
        </div>

        {/* Modal Image Showcase (Contains Full 16:9 Photo with Contain & No Cropping) */}
        <div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950/80 border border-white/10 my-1 sm:my-2 shadow-inner flex items-center justify-center">
          <img
            src="/images/developer-intro.jpg"
            alt="BTEUP Study Creators Ashish & Harshit"
            className="w-full h-full object-contain"
            loading="eager"
          />
          {/* Subtle glass frame reflection */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
        </div>

        {/* Modal Footer / Compact Tagline & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 sm:pt-3 border-t border-white/10 mt-1">
          <div className="text-center sm:text-left space-y-0.5">
            <p className="text-xs sm:text-sm font-semibold text-white">
              "Polytechnic ki padhai, ab apni language mein."
            </p>
            <p className="text-[11px] sm:text-xs text-cyan-300 font-medium">
              "Ratne ke liye nahi, <span className="text-white font-bold">samajhne ke liye."</span>
            </p>
          </div>

          <button
            onClick={onStartLearning}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
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
