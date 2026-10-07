import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const SemesterCard = ({ semester }) => {
  const { id, number, title, isAvailable, isCommon } = semester;
  const formattedNumber = number < 10 ? `0${number}` : `${number}`;

  if (!isAvailable) {
    return (
      <div
        className="rounded-xl border border-border/60 bg-surface-secondary/40 p-5 flex flex-col justify-between opacity-60 select-none cursor-not-allowed"
        aria-disabled="true"
      >
        <div>
          <span className="font-mono text-2xl font-bold text-text-muted/60 block mb-2">
            {formattedNumber}
          </span>

          <h3 className="text-base font-bold font-display text-text-secondary">
            {title}
          </h3>

          <p className="text-xs text-text-muted mt-1">
            Coming Soon
          </p>
        </div>

        <div className="mt-5 pt-3 border-t border-border/50 text-[11px] font-mono text-text-muted">
          Upcoming Term
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/semester/${id}`}
      className="premium-card group p-5 flex flex-col justify-between"
      aria-label={`Open ${title}`}
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-2xl font-bold text-accent group-hover:scale-105 transition-transform duration-200">
            {formattedNumber}
          </span>

          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Live</span>
          </span>
        </div>

        <h3 className="text-base font-bold font-display text-text-primary group-hover:text-accent transition-colors leading-snug">
          {title}
        </h3>

        {isCommon && (
          <p className="text-xs text-text-muted mt-1">
            Common BTEUP Semester
          </p>
        )}
      </div>

      <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-xs">
        <span className="text-accent font-semibold">Open Semester</span>
        <ChevronRight className="w-4 h-4 text-accent transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default SemesterCard;
