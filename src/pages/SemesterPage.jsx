import React from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { getSemesterById } from '../data/semestersData';
import { getSubjectsBySemester } from '../data/subjectsData';
import { getChaptersBySubject } from '../data/chaptersData';
import { getBranchById } from '../data/branchesData';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ArrowRight, BookOpen } from 'lucide-react';

export const SemesterPage = ({ fixedSemesterId }) => {
  const { semesterId: rawSemesterId, branchId: rawBranchId, semesterNum } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Detect branch
  const queryBranch = new URLSearchParams(location.search).get('branch');
  const pathParts = location.pathname.split('/').filter(Boolean);
  
  let detectedBranch = rawBranchId || queryBranch;
  if (!detectedBranch && pathParts.length > 0) {
    const firstPart = pathParts[0];
    if (['cse', 'mechanical', 'me', 'electronics', 'ece', 'instrumentation', 'ic', 'information-technology', 'it'].includes(firstPart.toLowerCase())) {
      detectedBranch = firstPart;
    }
  }
  const branch = getBranchById(detectedBranch || 'cse');

  // 2. Detect semester ID
  let targetSemesterId = fixedSemesterId || rawSemesterId || semesterNum;
  if (!targetSemesterId) {
    if (location.pathname.includes('semester-1')) {
      targetSemesterId = 1;
    } else {
      const semIndex = pathParts.indexOf('semester');
      if (semIndex !== -1 && pathParts[semIndex + 1]) {
        targetSemesterId = pathParts[semIndex + 1];
      }
    }
  }

  const semester = getSemesterById(targetSemesterId || 1, branch.id);

  if (!semester) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-4 text-text-primary">
        <h2 className="text-xl font-bold font-display text-text-primary">
          Semester Not Found
        </h2>
        <p className="text-sm text-text-secondary">
          The requested semester is not available.
        </p>
        <button
          onClick={() => navigate(`/branch/${branch.id}`)}
          className="btn-primary-red text-xs !py-2 !px-4"
        >
          View {branch.code} Semesters
        </button>
      </div>
    );
  }

  const isCommonSemester = semester.isCommon || semester.number === 1;

  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: branch.code, to: `/branch/${branch.id}` },
    { label: `Semester ${semester.number}${isCommonSemester ? ' (Common)' : ''}` },
  ];

  if (!semester.isAvailable) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6 text-text-primary">
        <Breadcrumb items={breadcrumbItems} />

        <div className="rounded-xl border border-border bg-surface p-8 sm:p-12 text-center space-y-4">
          <span className="text-xs font-mono font-semibold text-text-muted px-2.5 py-1 rounded bg-secondary">
            Coming Soon
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-text-primary">
            {semester.title} Notes
          </h1>
          <p className="text-sm text-text-secondary max-w-md mx-auto">
            Content for this semester will be available in the upcoming session.
          </p>
          <div className="pt-2">
            <Link
              to={branch.id === 'cse' ? '/branch/cse' : `/${branch.id}/semester-1`}
              className="btn-primary-red text-xs !py-2 !px-4"
            >
              <span>{branch.id === 'cse' ? 'View Available Semesters' : 'Open Semester 1 Notes'}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const subjects = getSubjectsBySemester(semester.id, branch.id);
  const hasSubjects = subjects && subjects.length > 0;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 text-text-primary">
      
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="space-y-2 pb-4 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider">
            {branch.code} • SEMESTER 0{semester.number}
          </span>
          {isCommonSemester && (
            <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">
              Common BTEUP Semester
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-text-primary tracking-tight">
          {semester.title} Subjects
        </h1>
        <p className="text-xs sm:text-sm text-text-secondary">
          Select a subject to view its syllabus units, notes, and derivations.
        </p>
      </div>

      {/* Subjects Grid */}
      {hasSubjects ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {subjects.map((subject) => {
            const chapters = getChaptersBySubject(subject.id);
            const chapterCount = chapters?.length || 0;

            return (
              <Link
                key={subject.id}
                to={`/subject/${subject.id}?branch=${branch.id}`}
                className="group rounded-xl border border-border bg-surface hover:border-accent/40 p-5 flex flex-col justify-between transition-all duration-150 shadow-xs hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-text-muted">
                    <span>{subject.code || 'BTEUP'}</span>
                    {chapterCount > 0 ? (
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                        {chapterCount} {chapterCount === 1 ? 'Unit' : 'Units'}
                      </span>
                    ) : (
                      <span>Coming Soon</span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-display text-text-primary group-hover:text-accent transition-colors leading-snug">
                    {subject.name}
                  </h3>
                </div>

                <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-accent font-semibold">Open Subject</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform duration-150 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-surface p-8 text-center space-y-3">
          <BookOpen className="w-6 h-6 text-accent mx-auto" />
          <h3 className="text-base font-bold text-text-primary">
            No subjects added yet
          </h3>
          <p className="text-xs text-text-secondary">
            Subjects for this semester will be available shortly.
          </p>
        </div>
      )}

    </div>
  );
};

export default SemesterPage;
