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
    <div className="group rounded-2xl border border-slate-200/80 dark:border-cyan-500/20 bg-white dark:bg-[#0c1a2d] p-5 sm:p-6 transition-all duration-200 hover:border-cyan-400 dark:hover:border-cyan-400 hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-start gap-4">
        {/* Unit number badge */}
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/25 flex flex-col items-center justify-center font-mono shrink-0">
          <span className="text-[9px] uppercase font-bold text-slate-500 dark:text-slate-400 leading-none">UNIT</span>
          <span className="font-extrabold text-sm leading-none mt-0.5">{number}</span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {title}
            </h4>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              {badge}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            {description}
          </p>

          <div className="flex items-center gap-4 pt-1 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-500" />
              <span>{estimatedTime}</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-cyan-500" />
              <span>Complete Study Notes</span>
            </span>
          </div>
        </div>
      </div>

      <div className="sm:shrink-0 pt-2 sm:pt-0">
        <Link
          to={targetUrl}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-600/25 transition-all w-full sm:w-auto"
        >
          <span>{actionLabel}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
};

export default ChapterCard;
