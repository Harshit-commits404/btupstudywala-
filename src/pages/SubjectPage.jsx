import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSubjectById } from '../data/subjectsData';
import { getChaptersBySubject } from '../data/chaptersData';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { ChapterCard } from '../components/cards/ChapterCard';
import { EmptyState } from '../components/common/EmptyState';
import { Button } from '../components/common/Button';
import {
  Clock,
  ArrowLeft,
  AlertCircle,
  Sparkles,
} from 'lucide-react';


export const SubjectPage = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const subject = getSubjectById(subjectId);

  // If subject ID is invalid or not found
  if (!subject) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <EmptyState
          icon={AlertCircle}
          title="Subject Not Found"
          description="The requested subject does not exist in the curriculum structure."
          actionLabel="Back to 1st Semester"
          onAction={() => navigate('/semester/1')}
        />
      </div>
    );
  }

  const semesterNum = subject.semesterId || 1;
  const semesterTitle = `${semesterNum}${semesterNum === 1 ? 'st' : semesterNum === 2 ? 'nd' : semesterNum === 3 ? 'rd' : 'th'} Semester`;
  const chapters = getChaptersBySubject(subject.id);
  const hasChapters = chapters && chapters.length > 0;

  const breadcrumbItems = [
    { label: 'Semesters', to: '/semesters' },
    { label: semesterTitle, to: `/semester/${semesterNum}` },
    { label: subject.name },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Subject Header Card */}
      <div className="rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-dark-card/70 p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              Semester 0{semesterNum}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Curriculum Subject
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            {hasChapters ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{chapters.length} Active Chapter Available</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Syllabus Intake Pending</span>
              </>
            )}
          </span>
        </div>

        {/* Subject Name */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight mb-4">
          {subject.name}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          {hasChapters
            ? 'Official curriculum study chapters for BTEUP diploma engineering students. Read conceptual breakdowns, clear Hinglish explanations, derivations, and exam focus points.'
            : 'Official curriculum subject for BTEUP diploma students. Chapter outlines and structured learning material will be published once the syllabus is confirmed.'}
        </p>
      </div>

      {hasChapters ? (
        /* Active Chapter Listing */
        <section className="space-y-6">
          <SectionHeader
            badge="Curriculum Chapters"
            title="Chapters & Modules"
            subtitle={`Select a chapter from ${subject.name} to access comprehensive Hinglish notes, formulas, and BTEUP exam preparation.`}
          />

          <div className="space-y-4">
            {chapters.map((ch) => (
              <ChapterCard
                key={ch.id}
                chapterId={ch.id}
                number={ch.number}
                title={ch.title}
                description={ch.description}
                estimatedTime={ch.duration}
                to={ch.path || `/chapter/${subject.id}/${ch.id}`}
                badge="Active Chapter"
                actionLabel="Start Learning"
              />
            ))}
          </div>

          {/* Polite Notice for Remaining Chapters */}
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-white/[0.1] bg-slate-50/50 dark:bg-white/[0.02] p-5 sm:p-6 text-center backdrop-blur-sm">
            <div className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Clock className="w-4 h-4 text-brand-500" />
              <span>
                Subsequent chapters for {subject.name} will be added in upcoming curriculum updates.
              </span>
            </div>
          </div>

          <div className="pt-2">
            <Button
              onClick={() => navigate(`/semester/${semesterNum}`)}
              variant="secondary"
              size="md"
              icon={ArrowLeft}
              iconPosition="left"
            >
              Back to {semesterTitle}
            </Button>
          </div>
        </section>
      ) : (
        /* Polished Generic Empty State Notice for subjects without syllabus yet */
        <div className="rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-dark-card/40 p-8 sm:p-14 text-center backdrop-blur-md">
          <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto mb-5">
            <Clock className="w-8 h-8" />
          </div>

          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 mb-4">
            Curriculum Update
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mb-3">
            Content coming soon
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed mb-8">
            The detailed syllabus and chapter-wise learning material will be added soon.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              onClick={() => navigate(`/semester/${semesterNum}`)}
              variant="secondary"
              size="md"
              icon={ArrowLeft}
              iconPosition="left"
            >
              Back to {semesterTitle}
            </Button>

            <Button
              onClick={() => navigate('/semesters')}
              variant="ghost"
              size="md"
            >
              Explore All Semesters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectPage;


