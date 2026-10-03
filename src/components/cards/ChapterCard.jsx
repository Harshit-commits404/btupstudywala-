import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, FileText } from 'lucide-react';

export const ChapterCard = ({
  chapterId = 'ch-1',
  number = '01',
  title = 'Chapter will appear here',
  description = 'Chapter learning objectives, concept breakdown, and topic explanations will be listed here.',
  estimatedTime = '6 Periods',
  to,
  badge = 'Active Unit',
  actionLabel = 'Read Unit Notes',
}) => {
  const targetUrl = to || `/chapter/${chapterId}`;

  return (
    <div
      className="group rounded-2xl border border-border bg-surface hover:border-border-hover p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-card-light dark:shadow-card-dark hover:shadow-card-hover-light dark:hover:shadow-card-hover-dark transition-all duration-200 hover:-translate-y-1"
    >
      <div className="flex items-start gap-4">
        {/* Unit number badge */}
        <div className="w-12 h-12 rounded-xl bg-red-600/10 text-accent border border-red-600/25 flex flex-col items-center justify-center font-mono shrink-0 shadow-xs">
          <span className="text-[9px] uppercase font-bold text-text-muted leading-none">UNIT</span>
          <span className="font-extrabold text-sm leading-none mt-0.5">{number}</span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-base sm:text-lg font-bold font-display text-text-primary group-hover:text-accent transition-colors">
              {title}
            </h4>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-red-600/10 text-accent border border-red-600/25">
              {badge}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-text-secondary max-w-2xl leading-relaxed">
            {description}
          </p>

          <div className="flex items-center gap-4 pt-1 text-xs font-mono text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>{estimatedTime}</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>Complete Study Notes</span>
            </span>
          </div>
        </div>
      </div>

      <div className="sm:shrink-0 pt-2 sm:pt-0">
        <Link
          to={targetUrl}
          className="btn-primary-red text-xs sm:text-sm w-full sm:w-auto group"
        >
          <span>{actionLabel}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ChapterCard;
