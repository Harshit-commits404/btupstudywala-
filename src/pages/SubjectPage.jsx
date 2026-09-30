import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getSubjectById } from '../data/subjectsData';
import { getChaptersBySubject } from '../data/chaptersData';
import { Breadcrumb } from '../components/common/Breadcrumb';
import {
  BookOpen,
  Clock,
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  FileText,
  Bookmark,
  CheckCircle2,
  Sparkles,
  ListOrdered
} from 'lucide-react';

export const SubjectPage = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const subject = getSubjectById(subjectId);

  // If subject ID is invalid or not found
  if (!subject) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
          Subject Not Found
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          The requested subject does not exist in the curriculum structure.
        </p>
        <button
          onClick={() => navigate('/semesters')}
          className="px-5 py-2.5 rounded-xl bg-cyan-600 text-white font-semibold text-sm"
        >
          Back to CSE Learning Path
        </button>
      </div>
    );
  }

  const semesterNum = subject.semesterId || 1;
  const semesterTitle = `${semesterNum}${semesterNum === 1 ? 'st' : semesterNum === 2 ? 'nd' : semesterNum === 3 ? 'rd' : 'th'} Semester`;
  const chapters = getChaptersBySubject(subject.id);
  const hasChapters = chapters && chapters.length > 0;

  const breadcrumbItems = [
    { label: 'CSE Learning Path', to: '/semesters' },
    { label: semesterTitle, to: `/semester/${semesterNum}` },
    { label: subject.name },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-10">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* ========================================================================= */}
      {/* SUBJECT TEXTBOOK HEADER PLATE */}
      {/* ========================================================================= */}
      <div className="relative rounded-3xl border border-slate-200/80 dark:border-cyan-500/20 bg-white dark:bg-[#0c1a2d] p-6 sm:p-10 shadow-sm overflow-hidden">
        {/* Top cyan gradient hairline */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-500" />
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

        <div className="relative space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                CSE • SEMESTER 0{semesterNum}
              </span>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                BTEUP CURRICULUM
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Digital Course Textbook</span>
            </span>
          </div>

          {/* Subject Title */}
          <div>
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase font-bold tracking-widest block mb-1">
              SUBJECT OVERVIEW
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
              {subject.name}
            </h1>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {hasChapters
              ? 'Comprehensive digital textbook notes designed specifically for UP Polytechnic diploma engineering students. Read conceptual breakdowns, clear bilingual explanations, step-by-step derivations, and high-probability exam questions.'
              : 'Official curriculum subject for BTEUP diploma students. Detailed unit outlines and structured learning material will be published in the upcoming curriculum release.'}
          </p>

          {/* Stats Bar */}
          <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-mono text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-900 dark:text-white">{hasChapters ? chapters.length : 0}</span>
              <span>Syllabus Units</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Bilingual (Hinglish) Notes</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <span className="text-cyan-500 font-bold">★</span>
              <span>Exam PYQ Highlights</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DIGITAL TEXTBOOK TABLE OF CONTENTS (UNIT BY UNIT) */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-cyan-500/15">
          <div className="flex items-center gap-2">
            <ListOrdered className="w-5 h-5 text-cyan-500" />
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
              Textbook Table of Contents
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            UNIT SEQUENCE
          </span>
        </div>

        {hasChapters ? (
          <div className="space-y-4">
            {chapters.map((ch, idx) => {
              const targetUrl = ch.path || `/chapter/${subject.id}/${ch.id}`;
              const unitNum = ch.number || `0${idx + 1}`;

              return (
                <div
                  key={ch.id}
                  className="group relative rounded-2xl border border-slate-200/80 dark:border-cyan-500/20 bg-white dark:bg-[#0c1a2d] p-5 sm:p-7 transition-all duration-200 hover:border-cyan-400 dark:hover:border-cyan-400 shadow-xs hover:shadow-md"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                    
                    {/* Unit Number & Title Information */}
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-xs font-extrabold px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                          UNIT {unitNum}
                        </span>

                        <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                          <Clock className="w-3.5 h-3.5 text-cyan-500" />
                          <span>{ch.duration || '6 Periods'}</span>
                        </span>

                        <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          Complete Notes
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {ch.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                        {ch.description}
                      </p>

                      {/* Sections Sub-Topics Preview */}
                      {ch.sections && ch.sections.length > 0 && (
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {ch.sections.slice(0, 4).map((sec) => (
                            <span
                              key={sec.id}
                              className="text-[11px] font-sans px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                            >
                              {sec.title}
                            </span>
                          ))}
                          {ch.sections.length > 4 && (
                            <span className="text-[11px] font-mono text-slate-400 px-1 py-0.5">
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
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-600/25 transition-all w-full sm:w-auto"
                      >
                        <span>Read Unit Notes</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1a2d] p-8 sm:p-12 text-center space-y-4">
            <Clock className="w-10 h-10 text-cyan-500 mx-auto" />
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
              Content Coming Soon
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              The syllabus notes for {subject.name} are being prepared and will be published in the next update.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate(`/semester/${semesterNum}`)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to {semesterTitle}</span>
              </button>
            </div>
          </div>
        )}

        {/* Back to Semester Action */}
        <div className="pt-4 flex items-center justify-between">
          <button
            onClick={() => navigate(`/semester/${semesterNum}`)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {semesterTitle} Subjects</span>
          </button>

          <span className="text-xs font-mono text-slate-400 hidden sm:inline">
            BTEUP Study • {subject.name}
          </span>
        </div>
      </section>

    </div>
  );
};

export default SubjectPage;
