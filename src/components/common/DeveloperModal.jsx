import React, { useEffect } from 'react';
import { X, GraduationCap, ArrowRight } from 'lucide-react';

export const DeveloperModal = ({ isOpen, onClose }) => {
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
      aria-labelledby="developer-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-2xl rounded-xl border border-border bg-surface shadow-xl p-4 sm:p-6 overflow-hidden text-text-primary flex flex-col">
        
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-secondary cursor-pointer transition-colors"
          title="Close (Esc)"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex flex-col items-start gap-2 mb-4 pr-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-accent">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h2 id="developer-modal-title" className="font-display font-extrabold text-lg tracking-tight text-text-primary">
              BTEUP <span className="text-accent">Study</span>
            </h2>
          </div>
          <p className="text-xs text-text-muted">
            Made by two final-year Polytechnic students — Ashish & Harshit
          </p>
        </div>

        {/* Image Showcase */}
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-black/40 border border-border my-2 shadow-inner flex items-center justify-center">
          <img
            src="/images/developer-intro.jpg"
            alt="BTEUP Study Creators Ashish & Harshit - Final-Year Polytechnic Students"
            className="w-full h-full object-contain"
            loading="eager"
          />
        </div>

        {/* Tagline & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border mt-2">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-sm font-semibold text-text-primary">
              "Polytechnic ki padhai, ab apni language mein."
            </p>
            <p className="text-xs text-accent font-medium">
              "Ratne ke liye nahi, <span className="text-text-primary font-bold">samajhne ke liye."</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-primary-foreground font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>Continue Learning</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default DeveloperModal;
