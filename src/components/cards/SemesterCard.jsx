import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lock, Clock } from 'lucide-react';

export const SemesterCard = ({ semester }) => {
  const { id, number, title, tagline, description, isAvailable } = semester;

  if (!isAvailable) {
    return (
      <div
        className="group relative rounded-2xl border border-slate-200/60 dark:border-white/[0.06] bg-slate-100/50 dark:bg-dark-card/30 p-6 flex flex-col justify-between transition-all duration-200 opacity-65 cursor-not-allowed select-none"
        aria-disabled="true"
      >
        <div>
          {/* Header Row: Semester number + Coming Soon tag */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-500">
              Semester 0{number}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-200/80 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400 border border-slate-300/60 dark:border-white/[0.08]">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>Coming Soon</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold font-display text-slate-700 dark:text-slate-300 mb-2">
            {title}
          </h3>

          {/* Tagline */}
          <p className="text-xs font-medium text-slate-500 dark:text-slate-500 mb-3">
            {tagline}
          </p>

          {/* Description */}
          <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Footer info: Lock indicator */}
        <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/[0.05] flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
          <span className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span>Opens in Even Term</span>
          </span>
          <span className="text-[11px] font-mono text-slate-400">Inactive</span>
        </div>
      </div>
    );
  }

  // Active / Available Semester Card
  return (
    <Link
      to={`/semester/${id}`}
      className="group relative rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-dark-card/70 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/5 hover:bg-slate-50 dark:hover:bg-dark-cardHover/90 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-brand-500/40"
      aria-label={`Open ${title}`}
    >
      {/* Subtle top ambient accent line on hover */}
      <div className="absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Header Row: Semester number + Active status tag */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-brand-600 dark:text-brand-400">
            Semester 0{number}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active Term</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors duration-200">
          {title}
        </h3>

        {/* Tagline */}
        <p className="text-xs font-semibold text-brand-700/80 dark:text-brand-400/80 mb-3">
          {tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Footer CTA */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
          View Syllabus Template
        </span>
        <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-200">
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
};
