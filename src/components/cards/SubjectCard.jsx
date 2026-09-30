import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export const SubjectCard = ({
  subject,
  subjectId: propSubjectId,
  title: propTitle,
  actionText = 'Open Subject Textbook',
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
    return (
      <div className="group relative rounded-2xl border border-dashed border-slate-300 dark:border-white/10 bg-white/60 dark:bg-[#0c1a2d]/50 p-6 flex flex-col justify-between transition-all duration-200">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10">
              {subjectCode || 'SUB-101'}
            </span>
            <span className="inline-flex items-center text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              {status || 'Template Slot'}
            </span>
          </div>

          <h3 className="text-lg font-bold font-display text-slate-800 dark:text-slate-200 mb-2">
            {resolvedName}
          </h3>

          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
            {description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">Curriculum Structure</span>
          <Link
            to={`/subject/${resolvedId}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
          >
            <span>Preview Subject</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/subject/${resolvedId}`}
      className="group relative rounded-2xl border border-slate-200/80 dark:border-cyan-500/20 bg-white dark:bg-[#0c1a2d] p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400 dark:hover:border-cyan-400 shadow-xs hover:shadow-lg hover:shadow-cyan-500/10"
      aria-label={`View ${resolvedName}`}
    >
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            Semester 0{semesterId}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
            <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
            <span>Curriculum Module</span>
          </span>
        </div>

        <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {resolvedName}
        </h3>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 group-hover:underline">
          {actionText}
        </span>
        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 group-hover:bg-cyan-600 group-hover:text-white flex items-center justify-center transition-all duration-200">
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard;
