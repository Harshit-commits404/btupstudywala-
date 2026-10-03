import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lock, Clock } from 'lucide-react';

export const SemesterCard = ({ semester }) => {
  const { id, number, title, tagline, description, isAvailable } = semester;

  if (!isAvailable) {
    return (
      <div
        className="group relative rounded-2xl border border-border/60 bg-surface/60 p-6 flex flex-col justify-between opacity-75 select-none shadow-card-light dark:shadow-card-dark"
        aria-disabled="true"
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-text-muted">
              Semester 0{number}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary text-text-muted border border-border">
              <Clock className="w-3 h-3 text-accent" />
              <span>Coming Soon</span>
            </span>
          </div>

          <h3 className="text-xl font-bold font-display text-text-secondary mb-2">
            {title}
          </h3>

          <p className="text-xs font-medium text-text-muted mb-3">
            {tagline}
          </p>

          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-text-muted">
          <span className="flex items-center gap-1.5 font-mono">
            <Lock className="w-3.5 h-3.5" />
            <span>Opens in Even Term</span>
          </span>
          <span className="font-mono text-[11px]">Upcoming</span>
        </div>
      </div>
    );
  }

  // Active / Available Semester Card
  return (
    <Link
      to={`/semester/${id}`}
      className="group relative rounded-2xl border border-border bg-surface hover:border-border-hover p-6 flex flex-col justify-between overflow-hidden shadow-card-light dark:shadow-card-dark hover:shadow-card-hover-light dark:hover:shadow-card-hover-dark transition-all duration-200 hover:-translate-y-1"
      aria-label={`Open ${title}`}
    >
      {/* Subtle top crimson accent line on hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-accent">
            Semester 0{number}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available Now</span>
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-display text-text-primary mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="text-xs font-semibold text-accent/90 mb-3">
          {tagline}
        </p>

        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
        <span className="text-xs font-bold text-accent group-hover:underline">
          Explore Syllabus
        </span>
        <div className="w-8 h-8 rounded-lg bg-secondary text-text-secondary group-hover:bg-accent group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs">
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default SemesterCard;
