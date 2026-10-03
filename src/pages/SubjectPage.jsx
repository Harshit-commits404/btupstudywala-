import React from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { getSubjectById } from '../data/subjectsData';
import { getChaptersBySubject } from '../data/chaptersData';
import { getBranchById } from '../data/branchesData';
import { Breadcrumb } from '../components/common/Breadcrumb';
import {
  BookOpen,
  Clock,
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  ListOrdered,
  Sparkles,
} from 'lucide-react';

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

  // If subject ID is invalid or not found
  if (!subject) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4 text-text-primary">
        <div className="w-16 h-16 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mx-auto border border-red-500/25">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold font-display text-text-primary">
          Subject Not Found
        </h2>
        <p className="text-sm text-text-secondary">
          The requested subject does not exist in the curriculum structure.
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

  const semesterNum = subject.semesterId || 1;
  const isCommonSemester = semesterNum === 1;
  const semesterTitle = `${semesterNum}${semesterNum === 1 ? 'st' : semesterNum === 2 ? 'nd' : semesterNum === 3 ? 'rd' : 'th'} Semester`;
  const chapters = getChaptersBySubject(subject.id);
  const hasChapters = chapters && chapters.length > 0;

  const semesterBackUrl = isCommonSemester
    ? `/${branch.id}/semester-1`
    : `/semester/${semesterNum}`;

  const breadcrumbItems = [
    { label: 'Branches', to: '/#branches' },
    { label: `${branch.code} Learning Path`, to: `/branch/${branch.id}` },
    { label: `${semesterTitle}${isCommonSemester ? ' (Common)' : ''}`, to: semesterBackUrl },
    { label: subject.name },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-10 text-text-primary">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* ========================================================================= */}
      {/* SUBJECT TEXTBOOK HEADER PLATE */}
      {/* ========================================================================= */}
      <div className="relative rounded-3xl border border-border bg-surface p-6 sm:p-10 shadow-card-light dark:shadow-card-dark overflow-hidden">
        {/* Top red gradient hairline */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-600" />
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

        <div className="relative space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-red-600/10 text-accent border border-red-600/25">
                {branch.code} • SEMESTER 0{semesterNum}
              </span>

              {isCommonSemester && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-xs font-bold uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Common BTEUP Subject</span>
                </span>
              )}

              <span className="text-xs font-mono text-text-muted">
                Paper Code: {subject.code || '2001'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-secondary text-text-secondary border border-border">
                {chapters ? chapters.length : 0} {chapters?.length === 1 ? 'Unit' : 'Units'} Included
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-text-primary tracking-tight">
              {subject.name}
            </h1>
            <p className="text-sm sm:text-base text-accent font-medium">
              Digital Textbook & Detailed Examination Notes
            </p>
          </div>

          <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl">
            {subject.description ||
              'Official Board of Technical Education Uttar Pradesh (BTEUP) curriculum notes, formulas, step-by-step derivations, and high-frequency exam focus questions.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-accent" />
              <span>Full Unit Syllabus</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>BTEUP Exam Aligned</span>
            </div>
            {isCommonSemester && (
              <>
                <span>•</span>
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <span>Common across all branches</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DIGITAL TEXTBOOK TABLE OF CONTENTS (UNIT BY UNIT) */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-border">
          <div className="flex items-center gap-2.5">
            <ListOrdered className="w-5 h-5 text-accent" />
            <h2 className="text-xl sm:text-2xl font-bold font-display text-text-primary">
              Textbook Table of Contents
            </h2>
          </div>
          <span className="text-xs font-mono text-text-muted">
            UNIT SEQUENCE
          </span>
        </div>

        {hasChapters ? (
          <div className="space-y-4">
            {chapters.map((ch, idx) => {
              const baseTarget = ch.path || `/chapter/${subject.id}/${ch.id}`;
              const targetUrl = queryBranch ? `${baseTarget}?branch=${branch.id}` : baseTarget;
              const unitNum = ch.number || `0${idx + 1}`;

              return (
                <div
                  key={ch.id}
                  className="group relative rounded-2xl border border-border bg-surface hover:border-border-hover p-5 sm:p-7 shadow-card-light dark:shadow-card-dark hover:shadow-card-hover-light dark:hover:shadow-card-hover-dark overflow-hidden transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                    
                    {/* Unit Number & Title Information */}
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-xs font-extrabold px-2.5 py-0.5 rounded bg-red-600/10 text-accent border border-red-600/25">
                          UNIT {unitNum}
                        </span>

                        <span className="inline-flex items-center gap-1 text-xs font-mono text-text-muted">
                          <Clock className="w-3.5 h-3.5 text-accent" />
                          <span>{ch.duration || '6 Periods'}</span>
                        </span>

                        <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          Complete Notes
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold font-display text-text-primary group-hover:text-accent transition-colors">
                        {ch.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-3xl">
                        {ch.description}
                      </p>

                      {/* Sections Sub-Topics Preview */}
                      {ch.sections && ch.sections.length > 0 && (
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {ch.sections.slice(0, 4).map((sec) => (
                            <span
                              key={sec.id}
                              className="text-[11px] font-sans px-2.5 py-0.5 rounded-md bg-secondary text-text-secondary border border-border"
                            >
                              {sec.title}
                            </span>
                          ))}
                          {ch.sections.length > 4 && (
                            <span className="text-[11px] font-mono text-text-muted px-1 py-0.5">
                              +{ch.sections.length - 4} more topics
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Action Button: Read Unit Notes */}
                    <div className="w-full sm:w-auto shrink-0 pt-2 sm:pt-0">
                      <Link
                        to={targetUrl}
                        className="btn-primary-red text-xs sm:text-sm w-full sm:w-auto group"
                      >
                        <span>Read Unit Notes</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12 text-center space-y-4 shadow-card-light dark:shadow-card-dark">
            <Clock className="w-10 h-10 text-accent mx-auto" />
            <h3 className="text-xl font-bold font-display text-text-primary">
              Content Coming Soon
            </h3>
            <p className="text-sm text-text-secondary max-w-md mx-auto">
              The syllabus notes for {subject.name} are being prepared and will be published in the next update.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate(semesterBackUrl)}
                className="btn-secondary-dark text-xs sm:text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to {semesterTitle}</span>
              </button>
            </div>
          </div>
        )}

      </section>

    </div>
  );
};

export default SubjectPage;
