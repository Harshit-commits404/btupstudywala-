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
      <div className="group relative rounded-2xl border border-dashed border-border bg-surface p-6 flex flex-col justify-between transition-all duration-200 shadow-card-light dark:shadow-card-dark">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-secondary text-text-muted border border-border">
              {subjectCode || 'SUB-101'}
            </span>
            <span className="inline-flex items-center text-[11px] font-mono px-2 py-0.5 rounded bg-red-600/10 text-accent border border-red-600/25">
              {status || 'Template Slot'}
            </span>
          </div>

          <h3 className="text-lg font-bold font-display text-text-primary mb-2">
            {resolvedName}
          </h3>

          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
            {description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
          <span className="text-xs font-mono text-text-muted">Curriculum Structure</span>
          <Link
            to={`/subject/${resolvedId}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline"
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
      className="group relative rounded-2xl border border-border bg-surface hover:border-border-hover p-6 flex flex-col justify-between overflow-hidden shadow-card-light dark:shadow-card-dark hover:shadow-card-hover-light dark:hover:shadow-card-hover-dark transition-all duration-200 hover:-translate-y-1"
      aria-label={`View ${resolvedName}`}
    >
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-red-600/10 text-accent border border-red-600/25">
            Semester 0{semesterId}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted">
            <BookOpen className="w-3.5 h-3.5 text-accent" />
            <span>Curriculum Module</span>
          </span>
        </div>

        <h3 className="text-xl font-bold font-display text-text-primary leading-snug mb-3 group-hover:text-accent transition-colors">
          {resolvedName}
        </h3>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
        <span className="text-xs font-bold text-accent group-hover:underline">
          {actionText}
        </span>
        <div className="w-8 h-8 rounded-lg bg-secondary text-text-secondary group-hover:bg-accent group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs">
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard;
