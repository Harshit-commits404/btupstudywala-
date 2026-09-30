import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lock, Clock } from 'lucide-react';

export const SemesterCard = ({ semester }) => {
  const { id, number, title, tagline, description, isAvailable } = semester;

  if (!isAvailable) {
    return (
      <div
        className="group relative rounded-2xl border border-white/5 bg-[#121212] p-6 flex flex-col justify-between opacity-70 select-none"
        aria-disabled="true"
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-500">
              Semester 0{number}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/5 text-neutral-400 border border-white/10">
              <Clock className="w-3 h-3 text-red-400" />
              <span>Coming Soon</span>
            </span>
          </div>

          <h3 className="text-xl font-bold font-display text-neutral-300 mb-2">
            {title}
          </h3>

          <p className="text-xs font-medium text-neutral-500 mb-3">
            {tagline}
          </p>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500">
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
      className="group relative rounded-2xl border border-white/10 bg-[#171717] hover:border-red-500/70 hover:bg-[#1c1c1c] p-6 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-[0_14px_35px_-8px_rgba(230,57,70,0.22)]"
      style={{
        transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, background 220ms ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
      }}
      aria-label={`Open ${title}`}
    >
      {/* Subtle top crimson accent line on hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-red-400">
            Semester 0{number}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available Now</span>
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2 group-hover:text-red-400 transition-colors">
          {title}
        </h3>

        <p className="text-xs font-semibold text-red-400/80 mb-3">
          {tagline}
        </p>

        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs font-bold text-red-400 group-hover:underline">
          Explore Syllabus
        </span>
        <div className="w-8 h-8 rounded-lg bg-white/5 text-neutral-400 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center transition-all duration-200">
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default SemesterCard;
