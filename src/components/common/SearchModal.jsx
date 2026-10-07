import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { semestersData } from '../../data/semestersData';

export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

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
      sem.tagline?.toLowerCase().includes(query.toLowerCase()) ||
      sem.cycle?.toLowerCase().includes(query.toLowerCase())
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
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-lg rounded-xl border border-border bg-surface shadow-elevated p-4 overflow-hidden text-text-primary">
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-border pb-3 mb-3">
          <Search className="w-4 h-4 text-accent shrink-0 mr-2.5" />
          <input
            id="search-modal-title"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search semesters (e.g. 1st Semester, 3rd, 5th)..."
            autoFocus
            className="w-full bg-transparent text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-text-muted hover:text-text-primary hover:bg-surface-secondary cursor-pointer"
            title="Close (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-72 overflow-y-auto space-y-1.5 pr-1">
          {filteredSemesters.length === 0 ? (
            <div className="py-8 text-center text-xs text-text-muted font-sans">
              No matching semesters found for "{query}"
            </div>
          ) : (
            filteredSemesters.map((sem) => (
              <div
                key={sem.id}
                onClick={() => handleSelectSemester(sem)}
                className={`p-2.5 rounded-lg border flex items-center justify-between text-xs transition-colors ${
                  sem.isAvailable
                    ? 'border-border hover:border-accent/40 hover:bg-surface-secondary cursor-pointer'
                    : 'border-border/50 opacity-50 cursor-not-allowed bg-surface-secondary/40'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`font-mono font-bold px-1.5 py-0.5 rounded text-[11px] ${
                      sem.isAvailable
                        ? 'bg-accent-soft text-accent'
                        : 'bg-surface-secondary text-text-muted'
                    }`}
                  >
                    0{sem.number}
                  </span>
                  <div>
                    <span className="font-semibold text-text-primary block">
                      {sem.title}
                    </span>
                    <span className="text-[11px] text-text-muted">
                      {sem.tagline}
                    </span>
                  </div>
                </div>

                {sem.isAvailable ? (
                  <ArrowRight className="w-3.5 h-3.5 text-accent" />
                ) : (
                  <span className="text-[10px] font-mono text-text-muted">
                    Coming Soon
                  </span>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="mt-3 pt-2.5 border-t border-border flex items-center justify-between text-[11px] text-text-muted font-mono">
          <span>Press ESC to close</span>
          <span>BTEUP Study</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
