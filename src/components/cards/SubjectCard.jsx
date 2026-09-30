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
      <div className="group relative rounded-2xl border border-dashed border-white/10 bg-[#121212] p-6 flex flex-col justify-between transition-all duration-200">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/10">
              {subjectCode || 'SUB-101'}
            </span>
            <span className="inline-flex items-center text-[11px] font-mono px-2 py-0.5 rounded bg-red-600/15 text-red-400 border border-red-600/30">
              {status || 'Template Slot'}
            </span>
          </div>

          <h3 className="text-lg font-bold font-display text-white mb-2">
            {resolvedName}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
            {description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs font-mono text-neutral-500">Curriculum Structure</span>
          <Link
            to={`/subject/${resolvedId}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:underline"
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
      aria-label={`View ${resolvedName}`}
    >
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-red-600/15 text-red-400 border border-red-600/30">
            Semester 0{semesterId}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400">
            <BookOpen className="w-3.5 h-3.5 text-red-400" />
            <span>Curriculum Module</span>
          </span>
        </div>

        <h3 className="text-xl font-bold font-display text-white leading-snug mb-3 group-hover:text-red-400 transition-colors">
          {resolvedName}
        </h3>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs font-bold text-red-400 group-hover:underline">
          {actionText}
        </span>
        <div className="w-8 h-8 rounded-lg bg-white/5 text-neutral-400 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center transition-all duration-200">
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard;
