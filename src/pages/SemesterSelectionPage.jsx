import React from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { SemesterCard } from '../components/cards/SemesterCard';
import { semestersData, ACADEMIC_CYCLE } from '../data/semestersData';
import { Info } from 'lucide-react';

export const SemesterSelectionPage = () => {
  const breadcrumbItems = [{ label: 'Semesters' }];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <SectionHeader
        badge={`Academic Term • ${ACADEMIC_CYCLE.currentTerm}`}
        title="Semester Selection"
        subtitle="Select your current semester to explore the syllabus structure. In accordance with the academic calendar, odd semesters are currently available for study."
      />

      {/* Academic Cycle Status Notice */}
      <div className="rounded-2xl border border-brand-500/20 bg-brand-500/5 dark:bg-brand-500/10 p-4 sm:p-5 flex items-start gap-3.5 backdrop-blur-md">
        <Info className="w-5 h-5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong className="font-semibold text-slate-900 dark:text-white">
            Current Semester Status:
          </strong>{' '}
          Odd semesters (<strong>1st, 3rd, 5th</strong>) are open. Even semesters (<strong>2nd, 4th, 6th</strong>) are marked <em>Coming Soon</em> and will become accessible when the even academic cycle begins.
        </div>
      </div>

      {/* 6 Semester Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {semestersData.map((semester) => (
          <SemesterCard key={semester.id} semester={semester} />
        ))}
      </div>
    </div>
  );
};

export default SemesterSelectionPage;
