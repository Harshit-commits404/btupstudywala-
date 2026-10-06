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
  const formattedNumber = parseInt(number, 10) < 10 ? `0${parseInt(number, 10)}` : `${parseInt(number, 10)}`;

  return (
    <Link
      to={targetUrl}
      className="premium-card group p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
    >
      <div className="space-y-1">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-sm font-bold text-accent">
            {formattedNumber}
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
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
      </div>
    </Link>
  );
};

export default ChapterCard;
