import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { LearningLayout } from '../components/learning/LearningLayout';
import { getChapter } from '../data/chaptersData';
import { getChapterContent } from '../content';
import { getBranchById } from '../data/branchesData';

export const ChapterPage = () => {
  const { subjectId, chapterId, branchId: paramBranchId } = useParams();
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

  // Retrieve chapter metadata from dataset
  const chapter = getChapter(subjectId, chapterId);

  // Fallback defaults if chapter not found
  const activeSubjectId = chapter?.subjectId || subjectId || 'applied-physics-1';
  const activeChapterId = chapter?.id || chapterId || 'units-and-dimensions';
  const semesterNum = chapter?.semesterId || 1;
  const isCommonSemester = semesterNum === 1;
  const semesterSuffix = semesterNum === 1 ? 'st' : semesterNum === 2 ? 'nd' : semesterNum === 3 ? 'rd' : 'th';
  const subjectName = chapter?.subjectName || 'Applied Physics - 1';
  const chapterTitle = chapter?.title || 'Units and Dimensions';
  const chapterNumber = chapter?.number || '01';
  const duration = chapter?.duration || '6 Periods';

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

  // Get dynamic study content component from the shared single content source
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
    >
      <ContentComponent />
    </LearningLayout>
  );
};

export default ChapterPage;
