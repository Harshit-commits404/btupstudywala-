import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const SemesterCard = ({ semester }) => {
  const { id, number, title, isAvailable, isCommon } = semester;
  const formattedNumber = number < 10 ? `0${number}` : `${number}`;

  if (!isAvailable) {
    return (
      <div
        className="rounded-2xl border border-border/60 bg-surface/40 p-5 sm:p-6 flex flex-col justify-between opacity-60 select-none"
        aria-disabled="true"
      >
        <div>
          <span className="font-mono text-2xl sm:text-3xl font-extrabold text-text-muted/60 block mb-3">
            {formattedNumber}
          </span>

          <h3 className="text-lg font-bold font-display text-text-secondary">
            {title}
          </h3>

          <p className="text-xs text-text-muted mt-1 font-medium">
            Coming Soon
          </p>
        </div>

        <div className="mt-6 pt-3 border-t border-border/50 text-[11px] font-mono text-text-muted">
          Upcoming Term
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/semester/${id}`}
      className="premium-card group p-5 sm:p-6 flex flex-col justify-between"
      aria-label={`Open ${title}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-2xl sm:text-3xl font-extrabold text-accent group-hover:scale-105 transition-transform duration-200">
            {formattedNumber}
          </span>

          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Live</span>
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

      <div className="mt-6 pt-3 border-t border-border flex items-center justify-between text-xs">
        <span className="text-accent font-semibold">Open Semester</span>
        <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform duration-200 group-hover:translate-x-1.5" />
      </div>
    </Link>
  );
};

export default SemesterCard;
