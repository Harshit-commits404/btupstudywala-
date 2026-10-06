import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { MainLayout } from './layouts/MainLayout';
import { ScrollToTop } from './components/common/ScrollToTop';

import { DashboardPage } from './pages/DashboardPage';
import { SemesterSelectionPage } from './pages/SemesterSelectionPage';
import { SemesterPage } from './pages/SemesterPage';
import { SubjectPage } from './pages/SubjectPage';
import { ChapterPage } from './pages/ChapterPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="semesters" element={<SemesterSelectionPage />} />
            <Route path="branch/:branchId" element={<SemesterSelectionPage />} />
            <Route path=":branchId/semesters" element={<SemesterSelectionPage />} />

            {/* Direct branch-wise and common semester routes */}
            <Route path="semester/:semesterId" element={<SemesterPage />} />
            <Route path=":branchId/semester-1" element={<SemesterPage fixedSemesterId="1" />} />
            <Route path=":branchId/semester-:semesterNum" element={<SemesterPage />} />
            <Route path=":branchId/semester/:semesterId" element={<SemesterPage />} />
            <Route path="branch/:branchId/semester/:semesterId" element={<SemesterPage />} />

            {/* Subject routes (global and branch-contextual) */}
            <Route path="subject/:subjectId" element={<SubjectPage />} />
            <Route path=":branchId/subject/:subjectId" element={<SubjectPage />} />
            <Route path="branch/:branchId/subject/:subjectId" element={<SubjectPage />} />

            {/* Chapter study routes (global, branch-scoped, semester-scoped, and topic-scoped) */}
            <Route path="chapter/:chapterId" element={<ChapterPage />} />
            <Route path="chapter/:subjectId/:chapterId" element={<ChapterPage />} />
            <Route path="chapter/:subjectId/:chapterId/:sectionId" element={<ChapterPage />} />
            <Route path=":branchId/chapter/:chapterId" element={<ChapterPage />} />
            <Route path=":branchId/chapter/:subjectId/:chapterId" element={<ChapterPage />} />
            <Route path=":branchId/chapter/:subjectId/:chapterId/:sectionId" element={<ChapterPage />} />
            <Route path="branch/:branchId/chapter/:subjectId/:chapterId" element={<ChapterPage />} />
            <Route path="branch/:branchId/chapter/:subjectId/:chapterId/:sectionId" element={<ChapterPage />} />

            {/* Semester-scoped and topic-scoped routes */}
            <Route path="semester-:semesterNum/:subjectId/:chapterId" element={<ChapterPage />} />
            <Route path="semester-:semesterNum/:subjectId/:chapterId/:sectionId" element={<ChapterPage />} />
            <Route path="semester/:semesterId/:subjectId/:chapterId" element={<ChapterPage />} />
            <Route path="semester/:semesterId/:subjectId/:chapterId/:sectionId" element={<ChapterPage />} />
            <Route path=":branchId/semester-:semesterNum/:subjectId/:chapterId" element={<ChapterPage />} />
            <Route path=":branchId/semester-:semesterNum/:subjectId/:chapterId/:sectionId" element={<ChapterPage />} />
            <Route path=":branchId/semester/:semesterId/:subjectId/:chapterId" element={<ChapterPage />} />
            <Route path=":branchId/semester/:semesterId/:subjectId/:chapterId/:sectionId" element={<ChapterPage />} />

            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
