import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { LearningLayout } from '../components/learning/LearningLayout';
import { getChapter } from '../data/chaptersData';
import { getChapterContent } from '../content';
import { getBranchById } from '../data/branchesData';
import { getSubjectById } from '../data/subjectsData';
import { AlertCircle, Clock, ArrowLeft } from 'lucide-react';

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

  // If both chapter and subject are unrecognized, show subject not found
  if (!chapter && !currentSubject) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4 text-text-primary">
        <div className="w-16 h-16 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mx-auto border border-red-500/25">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold font-display text-text-primary">
          Chapter or Subject Not Found
        </h2>
        <p className="text-sm text-text-secondary max-w-md mx-auto">
          The requested study unit does not exist in the BTEUP curriculum structure.
        </p>
        <button
          onClick={() => navigate(`/branch/${branch.id}`)}
          className="btn-primary-red text-sm"
        >
          Back to {branch.code} Learning Path
        </button>
      </div>
    );
  }

  const activeChapterId = chapter?.id || paramChapterId || 'unit-1';
  const semesterNum = chapter?.semesterId || currentSubject?.semesterId || (routeSemesterId ? parseInt(routeSemesterId, 10) : 1);
  const isCommonSemester = semesterNum === 1;
  const semesterSuffix = semesterNum === 1 ? 'st' : semesterNum === 2 ? 'nd' : semesterNum === 3 ? 'rd' : 'th';
  const subjectName = chapter?.subjectName || currentSubject?.name || 'Subject Notes';
  const chapterTitle = chapter?.title || 'Chapter Notes';
  const chapterNumber = chapter?.number || '01';
  const duration = chapter?.duration || '8 Periods';

  const semesterBackUrl = isCommonSemester
    ? `/${branch.id}/semester-1`
    : `/semester/${semesterNum}`;

  const subjectBackUrl = (queryBranch || paramBranchId)
    ? `/subject/${activeSubjectId}?branch=${branch.id}`
    : `/subject/${activeSubjectId}`;

  const breadcrumbItems = [
    { label: 'Branches', to: '/#branches' },
    { label: `${branch.code} Path`, to: `/branch/${branch.id}` },
    { label: `${semesterNum}${semesterSuffix} Semester${isCommonSemester ? ' (Common)' : ''}`, to: semesterBackUrl },
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

  // Target section for scrolling if sectionId or sub-topic was passed
  const targetSection =
    paramSectionId ||
    (chapter?.sections?.some((s) => s.id === paramChapterId) ? paramChapterId : null);

  // Get dynamic study content component strictly scoped to activeSubjectId
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
          <div className="w-14 h-14 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mx-auto border border-red-500/25">
            <Clock className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-bold font-display text-text-primary">
            {chapterTitle} Notes Coming Soon
          </h2>
          <p className="text-sm text-text-secondary max-w-md mx-auto">
            The syllabus notes for {subjectName} are currently being prepared for publishing.
          </p>
          <div className="pt-2">
            <button
              onClick={handleBackToSubject}
              className="btn-primary-red text-sm inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to {subjectName} Index</span>
            </button>
          </div>
        </div>
      )}
    </LearningLayout>
  );
};

export default ChapterPage;
