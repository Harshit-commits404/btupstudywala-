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
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-text-primary">
      
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="space-y-1.5 pb-4 border-b border-border">
        <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider">
          {branch.code} • Semesters
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-text-primary tracking-tight">
          {branch.name}
        </h1>
        <p className="text-xs sm:text-sm text-text-secondary">
          Select a semester to view syllabus subjects and notes.
        </p>
      </div>

      {/* Clean Semesters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                className="rounded-xl border border-border/60 bg-surface/30 p-5 flex flex-col justify-between opacity-60 select-none"
              >
                <div>
                  <h3 className="text-lg font-bold font-display text-text-secondary">
                    Semester {sem.number}
                  </h3>
                  <span className="text-xs text-text-muted mt-1 inline-block">
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
              className="group rounded-xl border border-border bg-surface hover:border-accent/40 p-5 flex flex-col justify-between transition-all duration-150 shadow-xs hover:-translate-y-0.5"
            >
              <div>
                <h3 className="text-lg font-bold font-display text-text-primary group-hover:text-accent transition-colors leading-snug">
                  Semester {sem.number}
                </h3>

                {isCommon && (
                  <p className="text-xs text-text-muted mt-1 font-medium">
                    Common BTEUP Semester
                  </p>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-border flex items-center justify-between text-xs">
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
