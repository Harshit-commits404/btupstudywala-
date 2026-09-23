import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export const SubjectCard = ({
  subject,
  subjectId: propSubjectId,
  title: propTitle,
  actionText = 'Start Learning',
  isTemplate = false,
  subjectCode,
  description,
  chapterCount,
  status,
}) => {
  const resolvedId = subject?.id || propSubjectId || 'template-preview';
  const resolvedName = subject?.name || propTitle || 'Subject';
  const semesterId = subject?.semesterId || 1;

  if (isTemplate || (!subject && description)) {
    // Template demonstration mode (used for inactive/preview slots)
    return (
      <div className="group relative rounded-2xl border border-dashed border-slate-300 dark:border-white/[0.12] bg-white/60 dark:bg-dark-card/50 p-6 flex flex-col justify-between transition-all duration-300 hover:border-brand-500/50 hover:bg-slate-50 dark:hover:bg-dark-cardHover/70 backdrop-blur-md">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.08]">
              {subjectCode || 'SUB-101'}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              <span>{status || 'Template Slot'}</span>
            </span>
          </div>

          <h3 className="text-lg font-bold font-display text-slate-800 dark:text-slate-200 mb-2">
            {resolvedName}
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
            {description}
          </p>

          {chapterCount && (
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span>{chapterCount}</span>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/[0.06] flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">Template Structure</span>
          <Link
            to={`/subject/${resolvedId}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
          >
            <span>Preview Subject</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  // Polished real subject card
  return (
    <Link
      to={`/subject/${resolvedId}`}
      className="group relative rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-dark-card/70 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/5 hover:bg-slate-50 dark:hover:bg-dark-cardHover/90 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-brand-500/40"
      aria-label={`View ${resolvedName}`}
    >
      {/* Subtle top ambient accent line on hover */}
      <div className="absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Minimal visual information */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
            Semester 0{semesterId}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.08]">
            <BookOpen className="w-3 h-3 text-brand-500" />
            <span>Subject</span>
          </span>
        </div>

        {/* Subject Name */}
        <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-200">
          {resolvedName}
        </h3>
      </div>

      {/* Neutral action */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
        <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors">
          {actionText}
        </span>
        <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-200">
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard;

