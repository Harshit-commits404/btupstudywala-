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
            <Route path="semester/:semesterId" element={<SemesterPage />} />
            <Route path="subject/:subjectId" element={<SubjectPage />} />
            <Route path="chapter/:chapterId" element={<ChapterPage />} />
            <Route path="chapter/:subjectId/:chapterId" element={<ChapterPage />} />

            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
