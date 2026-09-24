import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LearningLayout } from '../components/learning/LearningLayout';
import { getChapter } from '../data/chaptersData';
import { getChapterContent } from '../content';

export const ChapterPage = () => {
  const { subjectId, chapterId } = useParams();
  const navigate = useNavigate();

  // Retrieve chapter metadata from dataset
  const chapter = getChapter(subjectId, chapterId);

  // Fallback defaults if chapter not found
  const activeSubjectId = chapter?.subjectId || subjectId || 'applied-physics-1';
  const activeChapterId = chapter?.id || chapterId || 'units-and-dimensions';
  const semesterNum = chapter?.semesterId || 1;
  const semesterSuffix = semesterNum === 1 ? 'st' : semesterNum === 2 ? 'nd' : semesterNum === 3 ? 'rd' : 'th';
  const subjectName = chapter?.subjectName || 'Applied Physics - 1';
  const chapterTitle = chapter?.title || 'Units and Dimensions';
  const chapterNumber = chapter?.number || '01';
  const duration = chapter?.duration || '6 Periods';

  const breadcrumbItems = [
    { label: 'Semesters', to: '/semesters' },
    { label: `${semesterNum}${semesterSuffix} Semester`, to: `/semester/${semesterNum}` },
    { label: subjectName, to: `/subject/${activeSubjectId}` },
    { label: chapterTitle },
  ];

  const sections = chapter?.sections || [
    { id: 'overview', title: 'Chapter Overview' },
    { id: 'exam-focus', title: '★ Exam Focus' },
    { id: 'quick-revision', title: '⚡ Quick Revision' },
  ];

  const handleBackToSubject = () => {
    navigate(`/subject/${activeSubjectId}`);
  };

  // Get dynamic study content component
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
