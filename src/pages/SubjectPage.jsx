import React from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { getSubjectById } from '../data/subjectsData';
import { getChaptersBySubject } from '../data/chaptersData';
import { getBranchById } from '../data/branchesData';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';

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
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-4 text-text-primary">
        <h2 className="text-xl font-bold font-display text-text-primary">
          Subject Not Found
        </h2>
        <p className="text-sm text-text-secondary">
          The requested subject does not exist.
        </p>
        <button
          onClick={() => navigate(`/branch/${branch.id}`)}
          className="btn-primary-red text-xs !py-2 !px-4"
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
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 text-text-primary">
      
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Clean Subject Header */}
      <div className="space-y-2 pb-4 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider">
            SEMESTER {semesterNum}
          </span>
          {isCommonSemester && (
            <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">
              Common BTEUP Subject
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-text-primary tracking-tight">
          {subject.name}
        </h1>

        <p className="text-xs sm:text-sm text-text-secondary">
          {hasChapters ? `${chapters.length} study units available` : 'Units under preparation'}
        </p>
      </div>

      {/* Units List */}
      {hasChapters ? (
        <div className="space-y-3 sm:space-y-4">
          {chapters.map((ch, idx) => {
            const baseTarget = ch.path || `/chapter/${subject.id}/${ch.id}`;
            const targetUrl = queryBranch ? `${baseTarget}?branch=${branch.id}` : baseTarget;
            const unitNumberDisplay = ch.number ? `UNIT ${parseInt(ch.number, 10)}` : `UNIT ${idx + 1}`;
            
            // Clean unit title without duplicate "Unit X:" prefix if present
            const cleanTitle = ch.title.replace(/^Unit\s+\d+:\s*/i, '');
            const topicCount = ch.sections?.length || 0;

            return (
              <Link
                key={ch.id}
                to={targetUrl}
                className="group rounded-xl border border-border bg-surface hover:border-accent/40 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-150 shadow-xs hover:-translate-y-0.5"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-red-500/20">
                      {unitNumberDisplay}
                    </span>
                    {topicCount > 0 && (
                      <span className="text-xs font-mono text-text-muted">
                        {topicCount} {topicCount === 1 ? 'topic' : 'topics'}
                      </span>
                    )}
                  </div>

                  <h2 className="text-base sm:text-lg font-bold font-display text-text-primary group-hover:text-accent transition-colors">
                    {cleanTitle}
                  </h2>
                </div>

                <div className="shrink-0 flex items-center gap-1.5 text-xs font-semibold text-accent">
                  <span>Open Chapter</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-surface p-8 sm:p-12 text-center space-y-4">
          <BookOpen className="w-8 h-8 text-accent mx-auto" />
          <h2 className="text-lg font-bold font-display text-text-primary">
            Content Coming Soon
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto">
            The notes for {subject.name} are currently being prepared.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate(semesterBackUrl)}
              className="btn-secondary-dark text-xs !py-2 !px-4 inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Semester {semesterNum}</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default SubjectPage;
