import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getSemesterById, semestersData } from '../data/semestersData';
import { getSubjectsBySemester } from '../data/subjectsData';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { EmptyState } from '../components/common/EmptyState';
import { SubjectCard } from '../components/cards/SubjectCard';
import { Button } from '../components/common/Button';
import {
  BookOpen,
  Clock,
  ArrowLeft,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

export const SemesterPage = () => {
  const { semesterId } = useParams();
  const navigate = useNavigate();
  const semester = getSemesterById(semesterId);

  // If invalid semester ID
  if (!semester) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <EmptyState
          icon={AlertCircle}
          title="Semester Not Found"
          description="The requested semester does not exist in the curriculum structure."
          actionLabel="View All Semesters"
          onAction={() => navigate('/semesters')}
        />
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Semesters', to: '/semesters' },
    { label: semester.title },
  ];

  // If even semester (Coming Soon)
  if (!semester.isAvailable) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-dark-card/60 p-8 sm:p-12 text-center backdrop-blur-xl">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mx-auto mb-5">
            <Clock className="w-8 h-8" />
          </div>

          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-4">
            Even Semester • Coming Soon
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white mb-3">
            {semester.title}
          </h1>

          <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed mb-8">
            This semester is scheduled for the upcoming even academic cycle. Active study material is currently available for odd semesters (1st, 3rd, and 5th Semester).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              onClick={() => navigate('/semesters')}
              variant="secondary"
              icon={ArrowLeft}
              iconPosition="left"
            >
              Back to Semesters
            </Button>
            <Button
              onClick={() => navigate('/semester/1')}
              variant="primary"
            >
              Explore 1st Semester
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const subjects = getSubjectsBySemester(semester.id);
  const hasSubjects = subjects && subjects.length > 0;

  // Active Odd Semester
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Semester Header */}
      <div className="rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-dark-card/70 p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
            {semester.year} • {semester.cycle}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Active Academic Term
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight mb-3">
          {semester.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          {semester.description}
        </p>

        {/* Quick Navigation to other available odd semesters */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between flex-wrap gap-4 text-xs text-slate-500">
          <span>Switch Odd Semester:</span>
          <div className="flex items-center gap-2">
            {semestersData
              .filter((s) => s.isAvailable)
              .map((s) => (
                <Link
                  key={s.id}
                  to={`/semester/${s.id}`}
                  className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                    s.id === semester.id
                      ? 'bg-brand-500 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {s.shortName}
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Section Header: Choose a Subject */}
      <section className="space-y-6">
        <SectionHeader
          badge="Curriculum Subjects"
          title="Choose a Subject"
          subtitle={
            hasSubjects
              ? `Select a subject from ${semester.title} to access its learning curriculum.`
              : 'Select a subject to access its units and chapter notes. Real syllabus subjects will be populated here by the project owner.'
          }
        />

        {hasSubjects ? (
          /* Real Subject Cards Grid: Desktop 3-col, Tablet 2-col, Mobile 1-col */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                actionText="Start Learning"
              />
            ))}
          </div>
        ) : (
          /* Polished Empty / Template State for other semesters where subjects are pending */
          <>
            <div className="rounded-3xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-dark-card/40 p-8 sm:p-12 text-center backdrop-blur-md">
              <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">
                No subjects added yet.
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed mb-6">
                Subject content will appear here once the syllabus is added. The frontend template structure is configured and ready for official BTEUP curriculum intake.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.08]">
                <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                <span>Below is the reusable card layout demonstrating future subject cards</span>
              </div>
            </div>

            {/* Subject Card Template Demonstration Slots */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              <SubjectCard
                isTemplate
                subjectId="template-preview"
                subjectCode="SUB-301"
                title="Subject will appear here"
                description="Subject curriculum overview, branch allocation, and module list will be displayed here."
                chapterCount="Chapters Pending Intake"
                status="Template Slot 1"
              />
              <SubjectCard
                isTemplate
                subjectId="template-preview"
                subjectCode="SUB-302"
                title="Subject will appear here"
                description="Subject curriculum overview, branch allocation, and module list will be displayed here."
                chapterCount="Chapters Pending Intake"
                status="Template Slot 2"
              />
              <SubjectCard
                isTemplate
                subjectId="template-preview"
                subjectCode="SUB-303"
                title="Subject will appear here"
                description="Subject curriculum overview, branch allocation, and module list will be displayed here."
                chapterCount="Chapters Pending Intake"
                status="Template Slot 3"
              />
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default SemesterPage;

