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
  badge = 'Active Chapter',
  actionLabel = 'Start Learning',
}) => {
  const targetUrl = to || `/chapter/${chapterId}`;

  return (
    <div className="group rounded-2xl border border-slate-200/80 dark:border-white/[0.08] bg-white dark:bg-dark-card/60 p-5 sm:p-6 transition-all duration-300 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/5 hover:bg-slate-50 dark:hover:bg-dark-cardHover/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 backdrop-blur-xl">
      <div className="flex items-start gap-4">
        {/* Number badge */}
        <div className="w-11 h-11 rounded-xl bg-brand-500/10 dark:bg-brand-500/15 border border-brand-500/20 text-brand-600 dark:text-brand-400 flex items-center justify-center font-mono font-bold text-sm shrink-0">
          {number}
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <h4 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
              {title}
            </h4>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              {badge}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {description}
          </p>

          <div className="flex items-center gap-4 mt-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-500" />
              <span>{estimatedTime}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-brand-500" />
              <span>Complete Study Notes</span>
            </span>
          </div>
        </div>
      </div>

      <div className="sm:shrink-0 pt-2 sm:pt-0">
        <Link
          to={targetUrl}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white border border-brand-500 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md shadow-brand-500/20 w-full sm:w-auto"
        >
          <span>{actionLabel}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
};

