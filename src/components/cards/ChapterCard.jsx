import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const ChapterCard = ({
  chapterId = 'ch-1',
  number = '01',
  title = 'Chapter Title',
  topicCount,
  to,
  actionLabel = 'Open Unit',
}) => {
  const targetUrl = to || `/chapter/${chapterId}`;
  const cleanTitle = title.replace(/^Unit\s+\d+:\s*/i, '');
  const formattedNumber = parseInt(number, 10) < 10 ? `0${parseInt(number, 10)}` : `${parseInt(number, 10)}`;

  return (
    <Link
      to={targetUrl}
      className="editorial-row group"
    >
      <div className="flex items-center gap-3.5 sm:gap-6 min-w-0">
        <div className="flex flex-col items-center justify-center shrink-0 w-8">
          <span className="font-mono text-xs sm:text-sm font-semibold text-accent">
            {formattedNumber}
          </span>
          <span className="font-mono text-[9px] text-text-muted uppercase">
            Unit
          </span>
        </div>

        <div className="min-w-0">
          <h4 className="text-sm sm:text-base font-semibold font-display text-text-primary group-hover:text-accent transition-colors truncate">
            {cleanTitle}
          </h4>
        </div>
      </div>

      <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 pl-2">
        {topicCount && (
          <span className="text-[11px] font-mono text-text-muted px-2 py-0.5 rounded bg-surface-secondary border border-border">
            {topicCount} topics
          </span>
        )}

        <div className="w-7 h-7 rounded-md flex items-center justify-center text-text-muted group-hover:text-accent transition-colors">
          <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default ChapterCard;
