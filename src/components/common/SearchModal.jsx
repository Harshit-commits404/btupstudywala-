import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Clock, AlertCircle } from 'lucide-react';
import { semestersData } from '../../data/semestersData';

export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredSemesters = semestersData.filter(
    (sem) =>
      sem.title.toLowerCase().includes(query.toLowerCase()) ||
      sem.tagline.toLowerCase().includes(query.toLowerCase()) ||
      sem.cycle.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelectSemester = (semester) => {
    if (semester.isAvailable) {
      navigate(`/semester/${semester.id}`);
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fade-in"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl rounded-2xl border border-slate-200 dark:border-white/[0.1] bg-white dark:bg-dark-card shadow-2xl p-4 sm:p-6 overflow-hidden">
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-slate-200 dark:border-white/[0.08] pb-3 mb-4">
          <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
          <input
            id="search-modal-title"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search semesters (e.g. 1st Semester, 3rd, Odd)..."
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors"
            title="Close (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Informational banner about V1 template scope */}
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/20 text-xs text-brand-700 dark:text-brand-300 mb-4">
          <AlertCircle className="w-4 h-4 shrink-0 text-brand-500" />
          <span>V1 Academic State: Odd semesters (1, 3, 5) are active. Subject syllabus intake is in progress.</span>
        </div>

        {/* Results List */}
        <div className="max-h-72 overflow-y-auto space-y-2 pr-1">
          {filteredSemesters.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
              No matching semesters found for "{query}"
            </div>
          ) : (
            filteredSemesters.map((sem) => (
              <div
                key={sem.id}
                onClick={() => handleSelectSemester(sem)}
                className={`p-3 rounded-xl border flex items-center justify-between transition-colors ${
                  sem.isAvailable
                    ? 'border-slate-200 dark:border-white/[0.08] hover:border-brand-500/40 hover:bg-slate-50 dark:hover:bg-dark-cardHover cursor-pointer'
                    : 'border-slate-200/50 dark:border-white/[0.04] opacity-50 cursor-not-allowed bg-slate-50/50 dark:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                      sem.isAvailable
                        ? 'bg-brand-500/15 text-brand-500 dark:text-brand-400'
                        : 'bg-slate-200 dark:bg-white/[0.05] text-slate-500'
                    }`}
                  >
                    0{sem.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        {sem.title}
                      </span>
                      <span
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                          sem.isAvailable
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                            : 'bg-slate-200/80 dark:bg-white/[0.05] text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {sem.statusText}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {sem.tagline}
                    </span>
                  </div>
                </div>

                {sem.isAvailable ? (
                  <ArrowRight className="w-4 h-4 text-brand-500" />
                ) : (
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Coming Soon
                  </span>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
          <span>Tip: Press ESC to close</span>
          <span className="font-mono text-[11px]">BTEUP Study V1</span>
        </div>
      </div>
    </div>
  );
};
