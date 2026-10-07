import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

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
  index = 1,
}) => {
  const resolvedId = subject?.id || propSubjectId || 'template-preview';
  const resolvedName = subject?.name || propTitle || 'Subject';
  const formattedIndex = index < 10 ? `0${index}` : `${index}`;

  if (isTemplate || (!subject && description)) {
    return (
      <div className="premium-card p-5 flex flex-col justify-between border-dashed">
        <div>
          <span className="font-mono text-xs font-bold text-text-muted block mb-2">
            {subjectCode || 'BTEUP'}
          </span>
          <h3 className="text-base font-bold font-display text-text-primary">
            {resolvedName}
          </h3>
        </div>

        <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-xs">
          <Link
            to={`/subject/${resolvedId}`}
            className="inline-flex items-center gap-1 font-semibold text-accent"
          >
            <span>{status || 'Preview'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/subject/${resolvedId}`}
      className="premium-card group p-5 flex flex-col justify-between"
      aria-label={`View ${resolvedName}`}
    >
      <div>
        <span className="font-mono text-xs font-bold text-accent group-hover:scale-105 transition-transform duration-200 block mb-2">
          {formattedIndex}
        </span>

        <h3 className="text-base font-bold font-display text-text-primary leading-snug group-hover:text-accent transition-colors">
          {resolvedName}
        </h3>
      </div>

      <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-xs">
        <span className="font-mono text-text-muted">
          {chapterCount ? `${chapterCount} Units` : actionText}
        </span>
        <ChevronRight className="w-4 h-4 text-accent transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default SubjectCard;
