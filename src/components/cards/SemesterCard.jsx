import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const SemesterCard = ({ semester }) => {
  const { id, number, title, isAvailable, isCommon } = semester;

  if (!isAvailable) {
    return (
      <div
        className="rounded-xl border border-border/60 bg-surface/40 p-5 flex flex-col justify-between opacity-70 select-none shadow-xs"
        aria-disabled="true"
      >
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold text-text-muted">
              SEM 0{number}
            </span>
            <span className="text-[11px] font-medium text-text-muted px-2 py-0.5 rounded bg-secondary">
              Coming Soon
            </span>
          </div>

          <h3 className="text-lg font-bold font-display text-text-secondary">
            {title}
          </h3>
        </div>

        <div className="mt-5 pt-3 border-t border-border/50 text-xs text-text-muted font-mono">
          Upcoming session
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/semester/${id}`}
      className="group rounded-xl border border-border bg-surface hover:border-accent/40 p-5 flex flex-col justify-between transition-all duration-150 shadow-xs hover:-translate-y-0.5"
      aria-label={`Open ${title}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono font-bold text-accent">
            SEM 0{number}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Available</span>
          </span>
        </div>

        <h3 className="text-lg font-bold font-display text-text-primary group-hover:text-accent transition-colors leading-snug">
          {title}
        </h3>

        {isCommon && (
          <p className="text-xs text-text-muted mt-1 font-medium">
            Common BTEUP Semester
          </p>
        )}
      </div>

      <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-xs">
        <span className="text-accent font-semibold">Open Semester</span>
        <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform duration-150 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default SemesterCard;
