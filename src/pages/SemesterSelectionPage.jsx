import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { getSemestersByBranch } from '../data/semestersData';
import { getBranchById } from '../data/branchesData';
import { ChevronRight } from 'lucide-react';

export const SemesterSelectionPage = () => {
  const { branchId: paramBranchId } = useParams();
  const location = useLocation();

  const queryBranch = new URLSearchParams(location.search).get('branch');
  const pathSegment = location.pathname.split('/').filter(Boolean)[0];
  const detectedBranchId = paramBranchId || queryBranch || (pathSegment !== 'semesters' ? pathSegment : 'cse');

  const branch = getBranchById(detectedBranchId);
  const semesters = getSemestersByBranch(branch.id);

  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: branch.code },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-text-primary">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Header Plate */}
      <div className="space-y-1.5 pb-4 border-b border-border">
        <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider block">
          {branch.code} • Curricular Progression
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold font-display text-text-primary tracking-tight">
          {branch.name}
        </h1>
        <p className="text-xs sm:text-sm text-text-secondary">
          Select a semester to access syllabus subjects, units, and notes.
        </p>
      </div>

      {/* Editorial Semesters List */}
      <div className="space-y-2.5">
        {semesters.map((sem) => {
          const isActive = sem.isAvailable;
          const isCommon = sem.isCommon || sem.number === 1;
          const semesterLink = isCommon
            ? `/${branch.id}/semester-1`
            : `/semester/${sem.id}?branch=${branch.id}`;

          const formattedNumber = `0${sem.number}`;
          const subtitle = isCommon
            ? 'Common BTEUP Semester'
            : isActive
            ? branch.shortName || branch.name
            : 'Coming Soon';

          if (!isActive) {
            return (
              <div
                key={sem.id}
                className="editorial-row opacity-60 cursor-not-allowed select-none bg-surface-secondary/40"
                aria-disabled="true"
              >
                <div className="flex items-center gap-3.5 sm:gap-6 min-w-0">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-text-muted shrink-0">
                    {formattedNumber}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold font-display text-text-secondary truncate">
                      Semester {sem.number}
                    </h3>
                    <p className="text-xs text-text-muted hidden sm:block truncate">
                      Upcoming Term • Even Cycle
                    </p>
                  </div>
                </div>

                <div className="shrink-0 pl-2">
                  <span className="font-mono text-[11px] text-text-muted px-2 py-0.5 rounded bg-surface border border-border">
                    Coming Soon
                  </span>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={sem.id}
              to={semesterLink}
              className="editorial-row group"
            >
              {/* Left Teal Accent on Hover */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                aria-hidden="true"
              />

              <div className="flex items-center gap-3.5 sm:gap-6 min-w-0">
                <span className="font-mono text-xs sm:text-sm font-semibold text-accent shrink-0">
                  {formattedNumber}
                </span>

                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold font-display text-text-primary group-hover:text-accent transition-colors truncate">
                    Semester {sem.number}
                  </h3>
                  <p className="text-xs text-text-muted hidden sm:block truncate mt-0.5">
                    {subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 pl-2">
                <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 whitespace-nowrap">
                  Live
                </span>

                <div className="w-7 h-7 rounded-md flex items-center justify-center text-text-muted group-hover:text-accent transition-colors">
                  <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
};

export default SemesterSelectionPage;
