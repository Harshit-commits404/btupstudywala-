import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { getSemestersByBranch } from '../data/semestersData';
import { getBranchById } from '../data/branchesData';
import { ArrowRight } from 'lucide-react';

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
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 text-text-primary">
      
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="space-y-2 pb-4 border-b border-border">
        <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider">
          {branch.code} • Diploma Curriculum
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-text-primary tracking-tight">
          {branch.name}
        </h1>
        <p className="text-xs sm:text-sm text-text-secondary">
          Select a semester to access subjects, notes, and exam preparation.
        </p>
      </div>

      {/* Clean Semesters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {semesters.map((sem) => {
          const isActive = sem.isAvailable;
          const isCommon = sem.isCommon || sem.number === 1;
          const semesterLink = isCommon
            ? `/${branch.id}/semester-1`
            : `/semester/${sem.id}?branch=${branch.id}`;

          if (!isActive) {
            return (
              <div
                key={sem.id}
                className="rounded-xl border border-border/60 bg-surface/40 p-5 flex flex-col justify-between opacity-70 select-none shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-text-muted">
                      SEM 0{sem.number}
                    </span>
                    <span className="text-[11px] font-medium text-text-muted px-2 py-0.5 rounded bg-secondary">
                      Coming Soon
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-text-secondary">
                    Semester {sem.number}
                  </h3>
                </div>
                <div className="mt-5 pt-3 border-t border-border/50 text-xs text-text-muted font-mono">
                  Upcoming session
                </div>
              </div>
            );
          }

          return (
            <Link
              key={sem.id}
              to={semesterLink}
              className="group rounded-xl border border-border bg-surface hover:border-accent/40 p-5 flex flex-col justify-between transition-all duration-150 shadow-xs hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-accent">
                    SEM 0{sem.number}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Available</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-text-primary group-hover:text-accent transition-colors leading-snug">
                  Semester {sem.number}
                </h3>

                {isCommon && (
                  <p className="text-xs text-text-muted mt-1 font-medium">
                    Common BTEUP Semester
                  </p>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-xs">
                <span className="text-accent font-semibold">Open Semester</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform duration-150 group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
};

export default SemesterSelectionPage;
