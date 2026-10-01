import React from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { getSemesterById } from '../data/semestersData';
import { getSubjectsBySemester } from '../data/subjectsData';
import { getChaptersBySubject } from '../data/chaptersData';
import { getBranchById } from '../data/branchesData';
import { Breadcrumb } from '../components/common/Breadcrumb';
import {
  BookOpen,
  Clock,
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  Sparkles,
  Layers,
} from 'lucide-react';

export const SemesterPage = ({ fixedSemesterId }) => {
  const { semesterId: rawSemesterId, branchId: rawBranchId, semesterNum } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Detect branch from params, pathname, or query string
  const queryBranch = new URLSearchParams(location.search).get('branch');
  const pathParts = location.pathname.split('/').filter(Boolean);
  
  // If first part is a branch slug (e.g. /cse/semester-1, /mechanical/semester-1)
  let detectedBranch = rawBranchId || queryBranch;
  if (!detectedBranch && pathParts.length > 0) {
    const firstPart = pathParts[0];
    if (['cse', 'mechanical', 'me', 'electronics', 'ece', 'instrumentation', 'ic', 'information-technology', 'it'].includes(firstPart.toLowerCase())) {
      detectedBranch = firstPart;
    }
  }
  const branch = getBranchById(detectedBranch || 'cse');

  // 2. Detect semester ID
  let targetSemesterId = fixedSemesterId || rawSemesterId || semesterNum;
  if (!targetSemesterId) {
    if (location.pathname.includes('semester-1')) {
      targetSemesterId = 1;
    } else {
      // Check for /semester/X
      const semIndex = pathParts.indexOf('semester');
      if (semIndex !== -1 && pathParts[semIndex + 1]) {
        targetSemesterId = pathParts[semIndex + 1];
      }
    }
  }

  const semester = getSemesterById(targetSemesterId || 1, branch.id);

  // If invalid semester ID
  if (!semester) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4 text-white">
        <div className="w-16 h-16 rounded-2xl bg-red-600/10 text-red-500 flex items-center justify-center mx-auto border border-red-600/20">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold font-display text-white">
          Semester Not Found
        </h2>
        <p className="text-sm text-neutral-400">
          The requested semester does not exist in the curriculum structure.
        </p>
        <button
          onClick={() => navigate(`/branch/${branch.id}`)}
          className="btn-primary-red text-sm"
        >
          View {branch.code} Learning Path
        </button>
      </div>
    );
  }

  const isCommonSemester = semester.isCommon || semester.number === 1;

  const breadcrumbItems = [
    { label: 'Branches', to: '/#branches' },
    { label: `${branch.code} Learning Path`, to: `/branch/${branch.id}` },
    { label: `${semester.title}${isCommonSemester ? ' (Common)' : ''}` },
  ];

  // If semester is unavailable (Even Cycle or Branch Curriculum in Review)
  if (!semester.isAvailable) {
    const isEven = !semester.isOdd;
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-white">
        <Breadcrumb items={breadcrumbItems} />

        <div className="rounded-3xl border border-white/10 bg-[#121212] p-8 sm:p-14 text-center">
          <div className="w-16 h-16 rounded-2xl bg-red-600/15 border border-red-600/30 text-red-500 flex items-center justify-center mx-auto mb-5">
            <Clock className="w-8 h-8" />
          </div>

          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold bg-red-600/15 text-red-400 border border-red-600/30 mb-4">
            {isEven ? 'EVEN CYCLE • COMING SOON' : 'CURRICULUM IN REVIEW • COMING SOON'}
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-3">
            {branch.name} • {semester.title}
          </h1>

          <p className="text-base text-neutral-300 max-w-xl mx-auto leading-relaxed mb-8">
            {isEven
              ? 'This semester is scheduled for the upcoming even academic cycle. Active study material is currently live for odd semesters.'
              : `Is branch ke ${semester.title} ke specialized syllabus aur notes preparation phase mein hain. BTEUP ka 1st Semester sabhi branches ke liye common hai aur live available hai.`}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate(`/branch/${branch.id}`)}
              className="btn-secondary-dark text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to {branch.code} Path</span>
            </button>
            <button
              onClick={() => navigate(`/${branch.id}/semester-1`)}
              className="btn-primary-red text-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore 1st Semester (Common)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Retrieve subjects (for Semester 1, this returns the shared common subjects)
  const subjects = getSubjectsBySemester(semester.id, branch.id);
  const hasSubjects = subjects && subjects.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-10 text-[#f5f5f5]">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Semester Header Card with Red Accent */}
      <div className="relative rounded-3xl border border-white/10 bg-[#121212] p-6 sm:p-10 shadow-sm overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-600" />
        
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-red-600/15 text-red-400 border border-red-600/30">
              {branch.code} • SEMESTER 0{semester.number}
            </span>

            {/* Subtle Informational Label for Common Semester 1 */}
            {isCommonSemester && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-xs font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Common BTEUP Semester</span>
              </span>
            )}

            <span className="text-xs font-mono text-neutral-400">
              {semester.year} • {semester.cycle}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active Semester</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight mb-3 flex items-center gap-3">
          <span className="w-2 h-8 sm:w-2.5 sm:h-10 rounded-full bg-red-600 inline-block shadow-[0_0_12px_rgba(230,57,70,0.6)]" />
          <span>{semester.title} Curriculum</span>
        </h1>

        <p className="text-base text-neutral-300 max-w-3xl leading-relaxed">
          {isCommonSemester
            ? `Unified first-year engineering syllabus for UP Polytechnic diploma students (${branch.name}). Select a curriculum subject below to enter its verified digital textbook, study unit breakdown, derivations, and exam focus points.`
            : `${semester.description} Select a curriculum subject below to enter its digital textbook, study unit breakdown, derivations, and exam focus points.`}
        </p>

        {/* Subtle Common Semester Informational Label / Card */}
        {isCommonSemester && (
          <div className="mt-6 flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-neutral-300 text-xs sm:text-sm">
            <div className="w-8 h-8 rounded-lg bg-red-600/15 text-red-400 flex items-center justify-center shrink-0 mt-0.5 border border-red-600/30">
              <Layers className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <span className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider block">
                Semester 1 • Common Across Branches
              </span>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                BTEUP polytechnic first semester curriculum is uniform for CSE, Mechanical, Electronics, Instrumentation, and IT streams. Study content, chapters, and derivations are verified and shared across all branches.
              </p>
            </div>
          </div>
        )}

        {/* Switch odd semester quick pills in Red-Black theme */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="font-mono text-neutral-400">Available Odd Semesters in {branch.code}:</span>
          <div className="flex items-center gap-2">
            {branch.id === 'cse' ? (
              [1, 3, 5].map((num) => (
                <Link
                  key={num}
                  to={num === 1 ? `/${branch.id}/semester-1` : `/semester/${num}`}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all ${
                    num === semester.number
                      ? 'bg-red-600 text-white shadow-xs'
                      : 'bg-white/5 hover:bg-white/10 text-neutral-300'
                  }`}
                >
                  0{num} - Sem {num}
                </Link>
              ))
            ) : (
              <span className="px-3 py-1.5 rounded-lg font-mono text-xs font-semibold bg-red-600 text-white shadow-xs">
                01 - Sem 1 (Common)
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Curriculum Subject Textbook Catalogue with 220ms Hover Interaction */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold block">
              Curriculum Modules
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
              Course Subjects ({subjects.length})
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500">
            {isCommonSemester ? 'BTEUP Common First Year • 2026' : 'BTEUP Syllabus 2026'}
          </span>
        </div>

        {hasSubjects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {subjects.map((subject, idx) => {
              const chapters = getChaptersBySubject(subject.id);
              const chapterCount = chapters?.length || 0;

              return (
                <Link
                  key={subject.id}
                  to={`/subject/${subject.id}?branch=${branch.id}`}
                  className="group relative rounded-2xl border border-white/10 bg-[#171717] hover:border-red-500/70 hover:bg-[#1c1c1c] p-6 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-[0_14px_35px_-8px_rgba(230,57,70,0.22)]"
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
                  <div className="space-y-3">
                    {/* Top Subject Code & Module Index */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-red-400 px-2 py-0.5 rounded bg-red-600/15 border border-red-600/30">
                        COURSE 0{idx + 1}
                      </span>
                      
                      {chapterCount > 0 ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>{chapterCount} {chapterCount === 1 ? 'Unit' : 'Units'} Live</span>
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono text-neutral-500">
                          Syllabus Pending
                        </span>
                      )}
                    </div>

                    {/* Subject Title */}
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-red-400 transition-colors">
                      {subject.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2">
                      Official syllabus coverage with chapter notes, derivations, and exam question points.
                    </p>
                  </div>

                  {/* Footer Action with Animated Arrow */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-red-400 group-hover:underline">
                      Open Subject Textbook
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-red-600 group-hover:text-white text-neutral-400 flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-[#121212] p-8 text-center space-y-3">
            <BookOpen className="w-8 h-8 text-red-500 mx-auto" />
            <h3 className="text-lg font-bold text-white">
              No subjects added yet for this semester.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
              Curriculum data will be populated for this semester in upcoming intake releases.
            </p>
          </div>
        )}
      </section>

    </div>
  );
};

export default SemesterPage;
