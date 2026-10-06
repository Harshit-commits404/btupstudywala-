import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const ChapterCard = ({
  chapterId = 'ch-1',
  number = '01',
  title = 'Chapter Title',
  topicCount,
  to,
  actionLabel = 'Open Chapter',
}) => {
  const targetUrl = to || `/chapter/${chapterId}`;
  const cleanTitle = title.replace(/^Unit\s+\d+:\s*/i, '');

  return (
    <Link
      to={targetUrl}
      className="group rounded-xl border border-border bg-surface hover:border-accent/40 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-150 shadow-xs hover:-translate-y-0.5"
    >
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-red-500/20">
            UNIT {parseInt(number, 10) || number}
          </span>
          {topicCount && (
            <span className="text-xs font-mono text-text-muted">
              {topicCount} topics
            </span>
          )}
        </div>

        <h4 className="text-base sm:text-lg font-bold font-display text-text-primary group-hover:text-accent transition-colors">
          {cleanTitle}
        </h4>
      </div>

      <div className="shrink-0 flex items-center gap-1.5 text-xs font-semibold text-accent">
        <span>{actionLabel}</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default ChapterCard;
