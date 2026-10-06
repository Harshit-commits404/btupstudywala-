import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { LearningLayout } from '../components/learning/LearningLayout';
import { getChapter } from '../data/chaptersData';
import { getChapterContent } from '../content';
import { getBranchById } from '../data/branchesData';
import { getSubjectById } from '../data/subjectsData';
import { ArrowLeft, BookOpen } from 'lucide-react';

export const ChapterPage = () => {
  const {
    subjectId: paramSubjectId,
    chapterId: paramChapterId,
    sectionId: paramSectionId,
    semesterId: paramSemesterId,
    semesterNum: paramSemesterNum,
    branchId: paramBranchId,
  } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Detect branch context if available
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

  // Semester identifier from route parameters
  const routeSemesterId = paramSemesterId || paramSemesterNum;

  // Retrieve chapter metadata strictly scoped to subject
  const chapter = getChapter({
    semesterId: routeSemesterId,
    subjectId: paramSubjectId,
    chapterId: paramChapterId,
  });

  // Identify active subject and chapter
  const activeSubjectId = chapter?.subjectId || paramSubjectId;
  const currentSubject = getSubjectById(activeSubjectId);

  if (!chapter && !currentSubject) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-4 text-text-primary">
        <h2 className="text-xl font-bold font-display text-text-primary">
          Chapter or Subject Not Found
        </h2>
        <p className="text-sm text-text-secondary">
          The requested study unit does not exist in the curriculum.
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

  const activeChapterId = chapter?.id || paramChapterId || 'unit-1';
  const semesterNum = chapter?.semesterId || currentSubject?.semesterId || (routeSemesterId ? parseInt(routeSemesterId, 10) : 1);
  const isCommonSemester = semesterNum === 1;
  const subjectName = chapter?.subjectName || currentSubject?.name || 'Subject Notes';
  const chapterTitle = chapter?.title || 'Chapter Notes';
  const chapterNumber = chapter?.number || '01';
  const duration = chapter?.duration || '6 Periods';

  const semesterBackUrl = isCommonSemester
    ? `/${branch.id}/semester-1`
    : `/semester/${semesterNum}?branch=${branch.id}`;

  const subjectBackUrl = (queryBranch || paramBranchId)
    ? `/subject/${activeSubjectId}?branch=${branch.id}`
    : `/subject/${activeSubjectId}`;

  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: branch.code, to: `/branch/${branch.id}` },
    { label: `Sem ${semesterNum}${isCommonSemester ? ' (Common)' : ''}`, to: semesterBackUrl },
    { label: subjectName, to: subjectBackUrl },
    { label: chapterTitle },
  ];

  const sections = chapter?.sections || [
    { id: 'overview', title: 'Chapter Overview' },
    { id: 'exam-focus', title: '★ Exam Focus' },
    { id: 'quick-revision', title: '⚡ Quick Revision' },
  ];

  const handleBackToSubject = () => {
    navigate(subjectBackUrl);
  };

  const targetSection =
    paramSectionId ||
    (chapter?.sections?.some((s) => s.id === paramChapterId) ? paramChapterId : null);

  const ContentComponent = getChapterContent(activeSubjectId, activeChapterId);

  return (
    <LearningLayout
      breadcrumbItems={breadcrumbItems}
      chapterNumber={chapterNumber}
      chapterTitle={chapterTitle}
      subjectName={subjectName}
      duration={duration}
      sections={sections}
      onBackToSubject={handleBackToSubject}
      initialSection={targetSection}
    >
      {ContentComponent ? (
        <ContentComponent />
      ) : (
        <div className="py-12 px-4 text-center space-y-4">
          <BookOpen className="w-8 h-8 text-accent mx-auto" />
          <h2 className="text-xl font-bold font-display text-text-primary">
            {chapterTitle} Notes Coming Soon
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto">
            The study material for this unit is currently being compiled.
          </p>
          <div className="pt-2">
            <button
              onClick={handleBackToSubject}
              className="btn-secondary-dark text-xs !py-2 !px-4 inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to {subjectName}</span>
            </button>
          </div>
        </div>
      )}
    </LearningLayout>
  );
};

export default ChapterPage;
