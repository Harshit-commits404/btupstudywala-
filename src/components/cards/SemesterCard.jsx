import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lock, Clock } from 'lucide-react';

export const SemesterCard = ({ semester }) => {
  const { id, number, title, tagline, description, isAvailable } = semester;

  if (!isAvailable) {
    return (
      <div
        className="group relative rounded-2xl border border-slate-200/80 dark:border-white/5 bg-slate-100/50 dark:bg-[#0c1a2d]/40 p-6 flex flex-col justify-between opacity-70 select-none"
        aria-disabled="true"
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-500">
              Semester 0{number}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              <Clock className="w-3 h-3 text-amber-500" />
              <span>Coming Soon</span>
            </span>
          </div>

          <h3 className="text-xl font-bold font-display text-slate-700 dark:text-slate-300 mb-2">
            {title}
          </h3>

          <p className="text-xs font-medium text-slate-500 mb-3">
            {tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-xs text-slate-500">
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
      className="group relative rounded-2xl border border-slate-200/80 dark:border-cyan-500/20 bg-white dark:bg-[#0c1a2d] p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400 dark:hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
      aria-label={`Open ${title}`}
    >
      {/* Subtle top accent line on hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">
            Semester 0{number}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available Now</span>
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>

        <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-400/80 mb-3">
          {tagline}
        </p>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 group-hover:underline">
          Explore Syllabus
        </span>
        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 group-hover:bg-cyan-600 group-hover:text-white flex items-center justify-center transition-all duration-200">
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
};

export default SemesterCard;
