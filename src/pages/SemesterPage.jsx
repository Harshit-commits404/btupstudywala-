import React from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { getSemesterById } from '../data/semestersData';
import { getSubjectsBySemester } from '../data/subjectsData';
import { getChaptersBySubject } from '../data/chaptersData';
import { getBranchById } from '../data/branchesData';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ArrowLeft, ChevronRight, BookOpen } from 'lucide-react';

const subjectSubtitles = {
  'applied-physics-1': 'Physics fundamentals & mechanics',
  'fundamental-electrical-electronics': 'Circuit laws & components',
  'introduction-to-it': 'Computing & AI concepts',
  'mathematics-1': 'Algebra, trigonometry & calculus',
  'applied-chemistry': 'Chemical bonding & engineering materials',
  'communication-skills-english': 'Communication theory & grammar',
  'dbms': 'Relational database systems & SQL',
  'computer-network': 'Networking models & protocols',
  'operating-system': 'Kernel, processes & memory management',
  'information-security': 'Cybersecurity & cryptography',
  'multimedia-technologies': 'Media compression & authoring tools',
};

export const SemesterPage = ({ fixedSemesterId }) => {
  const { semesterId: rawSemesterId, branchId: rawBranchId, semesterNum } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Detect branch
  const queryBranch = new URLSearchParams(location.search).get('branch');
  const pathParts = location.pathname.split('/').filter(Boolean);
  
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
      const semIndex = pathParts.indexOf('semester');
      if (semIndex !== -1 && pathParts[semIndex + 1]) {
        targetSemesterId = pathParts[semIndex + 1];
      }
    }
  }

  const semester = getSemesterById(targetSemesterId || 1, branch.id);

  if (!semester) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-4 text-text-primary">
        <h2 className="text-xl font-bold font-display text-text-primary">
          Semester Not Found
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary">
          The requested semester is not available in the curriculum.
        </p>
        <button
          onClick={() => navigate(`/branch/${branch.id}`)}
          className="btn-primary"
        >
          View {branch.code} Semesters
        </button>
      </div>
    );
  }

  const isCommonSemester = semester.isCommon || semester.number === 1;

  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: branch.code, to: `/branch/${branch.id}` },
    { label: `Semester ${semester.number}${isCommonSemester ? ' (Common)' : ''}` },
  ];

  if (!semester.isAvailable) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6 text-text-primary">
        <Breadcrumb items={breadcrumbItems} />

        <div className="rounded-xl border border-border bg-surface p-8 sm:p-12 text-center space-y-4 shadow-subtle">
          <span className="text-xs font-mono font-semibold text-text-muted px-2.5 py-1 rounded bg-surface-secondary border border-border">
            Coming Soon
          </span>
          <h1 className="text-2xl font-bold font-display text-text-primary">
            {semester.title} Notes
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto">
            Content for this semester will be available in the upcoming session.
          </p>
          <div className="pt-2">
            <Link
              to={branch.id === 'cse' ? '/branch/cse' : `/${branch.id}/semester-1`}
              className="btn-primary inline-flex items-center gap-1.5"
            >
              <span>{branch.id === 'cse' ? 'View Available Semesters' : 'Open Semester 1 Notes'}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const subjects = getSubjectsBySemester(semester.id, branch.id);
  const hasSubjects = subjects && subjects.length > 0;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-text-primary">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Header Plate (Textbook / Dashboard Style) */}
      <div className="space-y-2 pb-4 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider">
            {branch.code} • SEMESTER 0{semester.number}
          </span>
          {isCommonSemester && (
            <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              Common BTEUP Semester
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold font-display text-text-primary tracking-tight">
          {semester.title} Subjects
        </h1>
        <p className="text-xs sm:text-sm text-text-secondary">
          Select a subject to view its syllabus units, notes, and derivations.
        </p>
      </div>

      {/* Editorial Subjects Shelf */}
      {hasSubjects ? (
        <div className="space-y-2.5">
          {subjects.map((subject, idx) => {
            const chapters = getChaptersBySubject(subject.id);
            const chapterCount = chapters?.length || 0;
            const formattedIdx = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
            const subtitle = subjectSubtitles[subject.id] || 'Core Subject Module';

            return (
              <Link
                key={subject.id}
                to={`/subject/${subject.id}?branch=${branch.id}`}
                className="editorial-row group"
              >
                {/* Left Teal Accent Line on Hover */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                  aria-hidden="true"
                />

                <div className="flex items-center gap-3.5 sm:gap-6 min-w-0">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-text-muted group-hover:text-accent transition-colors shrink-0">
                    {formattedIdx}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold font-display text-text-primary group-hover:text-accent transition-colors truncate">
                      {subject.name}
                    </h3>
                    <p className="text-xs text-text-muted hidden sm:block truncate mt-0.5">
                      {subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 pl-2">
                  <span className="font-mono text-[11px] text-text-muted px-2 py-0.5 rounded bg-surface-secondary border border-border group-hover:border-accent/30 group-hover:text-accent transition-colors whitespace-nowrap">
                    {chapterCount > 0 ? `${chapterCount} Units` : 'Syllabus Notes'}
                  </span>

                  <div className="w-7 h-7 rounded-md flex items-center justify-center text-text-muted group-hover:text-accent transition-colors">
                    <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-surface p-8 text-center space-y-3">
          <BookOpen className="w-8 h-8 text-accent mx-auto" />
          <h3 className="text-base font-bold font-display text-text-primary">
            No subjects added yet
          </h3>
          <p className="text-xs text-text-secondary">
            Subjects for this semester will be available shortly.
          </p>
        </div>
      )}

    </div>
  );
};

export default SemesterPage;
