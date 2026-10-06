import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const SubjectCard = ({
  subject,
  subjectId: propSubjectId,
  title: propTitle,
  actionText = 'Open Subject',
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
      <div className="rounded-xl border border-dashed border-border bg-surface p-5 flex flex-col justify-between shadow-xs">
        <div>
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-text-muted">
            <span>{subjectCode || 'BTEUP'}</span>
            <span>{status || 'Preview'}</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold font-display text-text-primary">
            {resolvedName}
          </h3>
        </div>

        <div className="mt-5 pt-3 border-t border-border flex items-center justify-between">
          <Link
            to={`/subject/${resolvedId}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
          >
            <span>Preview</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/subject/${resolvedId}`}
      className="group rounded-xl border border-border bg-surface hover:border-accent/40 p-5 flex flex-col justify-between transition-all duration-150 shadow-xs hover:-translate-y-0.5"
      aria-label={`View ${resolvedName}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3 text-xs font-mono text-text-muted">
          <span>Semester 0{semesterId}</span>
          {chapterCount && (
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">
              {chapterCount} Units
            </span>
          )}
        </div>

        <h3 className="text-base sm:text-lg font-bold font-display text-text-primary leading-snug group-hover:text-accent transition-colors">
          {resolvedName}
        </h3>
      </div>

      <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-xs">
        <span className="text-accent font-semibold">{actionText}</span>
        <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform duration-150 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default SubjectCard;
