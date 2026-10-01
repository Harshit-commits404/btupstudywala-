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
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4 text-white">
        <div className="w-16 h-16 rounded-2xl bg-red-600/10 text-red-500 flex items-center justify-center mx-auto border border-red-600/20">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold font-display text-white">
          Subject Not Found
        </h2>
        <p className="text-sm text-neutral-400">
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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-10 text-[#f5f5f5]">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* ========================================================================= */}
      {/* SUBJECT TEXTBOOK HEADER PLATE */}
      {/* ========================================================================= */}
      <div className="relative rounded-3xl border border-white/10 bg-[#121212] p-6 sm:p-10 shadow-sm overflow-hidden">
        {/* Top red gradient hairline */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-600" />
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

        <div className="relative space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-red-600/15 text-red-400 border border-red-600/30">
                {branch.code} • SEMESTER 0{semesterNum}
              </span>

              {isCommonSemester && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-xs font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Common BTEUP Subject</span>
                </span>
              )}

              <span className="font-mono text-xs text-neutral-400">
                BTEUP CURRICULUM
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 bg-red-600/10 px-3 py-1 rounded-full border border-red-600/25">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Digital Course Textbook</span>
            </span>
          </div>

          {/* Subject Title with Red Vertical Accent Line */}
          <div>
            <span className="text-xs font-mono text-red-400 uppercase font-bold tracking-widest block mb-1">
              SUBJECT OVERVIEW
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight flex items-center gap-3">
              <span className="w-2 h-8 sm:w-2.5 sm:h-10 rounded-full bg-red-600 inline-block shadow-[0_0_12px_rgba(230,57,70,0.6)]" />
              <span>{subject.name}</span>
            </h1>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 max-w-3xl leading-relaxed">
            {hasChapters
              ? 'Comprehensive digital textbook notes designed specifically for UP Polytechnic diploma engineering students. Read conceptual breakdowns, clear bilingual explanations, step-by-step derivations, and high-probability exam questions.'
              : 'Official curriculum subject for BTEUP diploma students. Detailed unit outlines and structured learning material will be published in the upcoming curriculum release.'}
          </p>

          {/* Stats Bar */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white">{hasChapters ? chapters.length : 0}</span>
              <span>Syllabus Units</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Bilingual (Hinglish) Notes</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <span className="text-red-400 font-bold">★</span>
              <span>Exam PYQ Highlights</span>
            </div>
            {isCommonSemester && (
              <>
                <span>•</span>
                <div className="flex items-center gap-1.5 text-emerald-400">
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
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <ListOrdered className="w-5 h-5 text-red-500" />
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
              Textbook Table of Contents
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500">
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
                  className="group relative rounded-2xl border border-white/10 bg-[#171717] hover:border-red-500/70 hover:bg-[#1c1c1c] p-5 sm:p-7 shadow-xs hover:shadow-[0_14px_35px_-8px_rgba(230,57,70,0.22)] overflow-hidden"
                  style={{
                    transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, background 220ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                    
                    {/* Unit Number & Title Information */}
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-xs font-extrabold px-2.5 py-0.5 rounded bg-red-600/15 text-red-400 border border-red-600/30">
                          UNIT {unitNum}
                        </span>

                        <span className="inline-flex items-center gap-1 text-xs font-mono text-neutral-400">
                          <Clock className="w-3.5 h-3.5 text-red-400" />
                          <span>{ch.duration || '6 Periods'}</span>
                        </span>

                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          Complete Notes
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-red-400 transition-colors">
                        {ch.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
                        {ch.description}
                      </p>

                      {/* Sections Sub-Topics Preview */}
                      {ch.sections && ch.sections.length > 0 && (
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {ch.sections.slice(0, 4).map((sec) => (
                            <span
                              key={sec.id}
                              className="text-[11px] font-sans px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/5"
                            >
                              {sec.title}
                            </span>
                          ))}
                          {ch.sections.length > 4 && (
                            <span className="text-[11px] font-mono text-neutral-500 px-1 py-0.5">
                              +{ch.sections.length - 4} more topics
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Action Button: Read Unit Notes with 220ms Animated Arrow */}
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
          <div className="rounded-2xl border border-white/10 bg-[#121212] p-8 sm:p-12 text-center space-y-4">
            <Clock className="w-10 h-10 text-red-500 mx-auto" />
            <h3 className="text-xl font-bold font-display text-white">
              Content Coming Soon
            </h3>
            <p className="text-sm text-neutral-400 max-w-md mx-auto">
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

        {/* Back to Semester Action */}
        <div className="pt-4 flex items-center justify-between">
          <button
            onClick={() => navigate(semesterBackUrl)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-400 hover:text-red-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {semesterTitle} Subjects</span>
          </button>

          <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
            BTEUP Study • {subject.name}
          </span>
        </div>
      </section>

    </div>
  );
};

export default SubjectPage;
