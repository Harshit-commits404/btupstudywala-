import React, { useState, useEffect } from 'react';
import { X, Star, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const FeedbackModal = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(5);
  const [category, setCategory] = useState('notes');
  const [feedbackText, setFeedbackText] = useState('');
  const [branch, setBranch] = useState('CSE');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;

    setIsSubmitting(true);

    try {
      // Store locally to prevent duplicate spam and keep submission history
      const savedFeedback = JSON.parse(localStorage.getItem('bteup_feedback_records') || '[]');
      savedFeedback.push({
        id: Date.now(),
        date: new Date().toISOString(),
        rating,
        category,
        branch,
        message: feedbackText.trim(),
      });
      localStorage.setItem('bteup_feedback_records', JSON.stringify(savedFeedback));
      localStorage.setItem('bteup_last_feedback_time', String(Date.now()));
    } catch {
      // Local storage fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFeedbackText('');
        onClose();
      }, 1800);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-md rounded-xl border border-border bg-surface shadow-elevated p-5 sm:p-6 overflow-hidden text-text-primary">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-accent-soft text-accent flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 id="feedback-modal-title" className="text-sm sm:text-base font-bold font-display text-text-primary">
                Student Feedback & Suggestions
              </h3>
              <p className="text-[11px] text-text-muted">
                BTEUP Study ko aur better banane mein help karein
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-text-muted hover:text-text-primary hover:bg-surface-secondary cursor-pointer"
            aria-label="Close feedback modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
            <h4 className="text-base font-bold font-display text-text-primary">
              Feedback Receive Ho Gaya!
            </h4>
            <p className="text-xs text-text-secondary max-w-xs mx-auto">
              Aapka feedback record kar liya gaya hai. Thank you for helping UP Polytechnic students!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Rating */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-text-secondary block">
                Study Material Rating:
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 text-text-muted hover:text-amber-400 focus:outline-none transition-colors cursor-pointer"
                    aria-label={`Rate ${star} stars`}
                  >
                    <Star
                      className={`w-5 h-5 ${
                        star <= rating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-text-muted/40'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-mono text-text-muted ml-2">
                  {rating}/5
                </span>
              </div>
            </div>

            {/* Branch & Category */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-medium text-text-secondary block">
                  Branch:
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full text-xs rounded-md border border-border bg-surface-secondary px-2.5 py-1.5 text-text-primary focus:outline-none focus:border-accent"
                >
                  <option value="CSE">CSE</option>
                  <option value="ME">Mechanical</option>
                  <option value="ECE">Electronics</option>
                  <option value="IC">Instrumentation</option>
                  <option value="IT">Information Tech</option>
                  <option value="Other">Other Branch</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-text-secondary block">
                  Feedback Topic:
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full text-xs rounded-md border border-border bg-surface-secondary px-2.5 py-1.5 text-text-primary focus:outline-none focus:border-accent"
                >
                  <option value="notes">Notes / Content</option>
                  <option value="syllabus">Syllabus Request</option>
                  <option value="bug">Typo / Mistake</option>
                  <option value="suggestion">General Suggestion</option>
                </select>
              </div>
            </div>

            {/* Feedback Message */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-text-secondary block">
                Your Feedback / Suggestion:
              </label>
              <textarea
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="Koi suggestion, correction ya naya subject jo aap chahte hain..."
                rows={4}
                required
                className="w-full text-xs rounded-md border border-border bg-surface-secondary p-2.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent resize-none"
              />
            </div>

            {/* Action Buttons & Google Form link */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href="https://forms.gle/as6uMZQ8QxmDpt1q6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-accent hover:underline inline-flex items-center gap-1 font-mono self-start sm:self-auto"
              >
                <span>Google Form pe bharein ↗</span>
              </a>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-secondary text-xs !py-1.5 !px-3"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting || !feedbackText.trim()}
                  className="btn-primary text-xs !py-1.5 !px-3.5 inline-flex items-center gap-1.5 disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Bhej rahe hain...' : 'Submit Feedback'}</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;
