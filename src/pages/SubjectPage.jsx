import React from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { getSubjectById } from '../data/subjectsData';
import { getChaptersBySubject } from '../data/chaptersData';
import { getBranchById } from '../data/branchesData';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ArrowLeft, ChevronRight, BookOpen } from 'lucide-react';

export const SubjectPage = () => {
  const { subjectId, branchId: paramBranchId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Detect branch context
  const queryBranch = new URLSearchParams(location.search).get('branch');
  const pathParts = location.pathname.split('/').filter(Boolean);
  let detectedBranch = paramBranchId || queryBranch;
  if (!detectedBranch && pathParts.length > 0) {
    const firstPart = pathParts[0];
    if (['cse', 'mechanical', 'me', 'electronics', 'ece', 'instrumentation', 'ic', 'information-technology', 'it'].includes(firstPart.toLowerCase())) {
      detectedBranch = firstPart;
    }
  }
  const branch = getBranchById(detectedBranch || 'cse');

  const subject = getSubjectById(subjectId);

  if (!subject) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-4 text-text-primary">
        <h2 className="text-xl font-bold font-display text-text-primary">
          Subject Not Found
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary">
          The requested subject does not exist in the curriculum.
        </p>
        <button
          onClick={() => navigate(`/branch/${branch.id}`)}
          className="btn-primary"
        >
          Back to {branch.code} Semesters
        </button>
      </div>
    );
  }

  const semesterNum = subject.semesterId || 1;
  const isCommonSemester = semesterNum === 1;
  const chapters = getChaptersBySubject(subject.id);
  const hasChapters = chapters && chapters.length > 0;

  const semesterBackUrl = isCommonSemester
    ? `/${branch.id}/semester-1`
    : `/semester/${semesterNum}?branch=${branch.id}`;

  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: branch.code, to: `/branch/${branch.id}` },
    { label: `Semester ${semesterNum}`, to: semesterBackUrl },
    { label: subject.name },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-text-primary">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Clean Subject Header Plate */}
      <div className="space-y-2 pb-4 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider">
            {branch.code} • SEMESTER 0{semesterNum}
          </span>
          {isCommonSemester && (
            <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              Common BTEUP Subject
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold font-display text-text-primary tracking-tight">
          {subject.name}
        </h1>

        <p className="text-xs sm:text-sm text-text-secondary">
          {hasChapters ? `${chapters.length} syllabus study units available` : 'Units under preparation'}
        </p>
      </div>

      {/* Digital Textbook Shelf: Editorial Unit Rows */}
      {hasChapters ? (
        <div className="space-y-2.5">
          {chapters.map((ch, idx) => {
            const baseTarget = ch.path || `/chapter/${subject.id}/${ch.id}`;
            const targetUrl = queryBranch ? `${baseTarget}?branch=${branch.id}` : baseTarget;
            const unitNumberDisplay = ch.number 
              ? (parseInt(ch.number, 10) < 10 ? `0${parseInt(ch.number, 10)}` : `${parseInt(ch.number, 10)}`) 
              : (idx < 9 ? `0${idx + 1}` : `${idx + 1}`);
            
            // Clean unit title without duplicate "Unit X:" prefix
            const cleanTitle = ch.title.replace(/^Unit\s+\d+:\s*/i, '');
            const topicCount = ch.sections?.length || 0;

            return (
              <Link
                key={ch.id}
                to={targetUrl}
                className="editorial-row group"
              >
                {/* Left Teal Accent Line on Hover */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                  aria-hidden="true"
                />

                <div className="flex items-center gap-3.5 sm:gap-6 min-w-0">
                  <div className="flex flex-col items-center justify-center shrink-0 w-8">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-accent">
                      {unitNumberDisplay}
                    </span>
                    <span className="font-mono text-[9px] text-text-muted uppercase tracking-tight">
                      Unit
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-sm sm:text-base font-semibold font-display text-text-primary group-hover:text-accent transition-colors truncate">
                      {cleanTitle}
                    </h2>
                    {ch.description && (
                      <p className="text-xs text-text-muted hidden sm:block truncate mt-0.5">
                        {ch.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 pl-2">
                  {topicCount > 0 && (
                    <span className="font-mono text-[11px] text-text-muted px-2 py-0.5 rounded bg-surface-secondary border border-border group-hover:border-accent/30 group-hover:text-accent transition-colors whitespace-nowrap">
                      {topicCount} topics
                    </span>
                  )}

                  <div className="w-7 h-7 rounded-md flex items-center justify-center text-text-muted group-hover:text-accent transition-colors">
                    <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-surface p-8 sm:p-12 text-center space-y-4 shadow-subtle">
          <BookOpen className="w-8 h-8 text-accent mx-auto" />
          <h2 className="text-lg font-bold font-display text-text-primary">
            Content Coming Soon
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto">
            The study material for {subject.name} is currently being prepared.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate(semesterBackUrl)}
              className="btn-secondary inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Semester {semesterNum}</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default SubjectPage;
