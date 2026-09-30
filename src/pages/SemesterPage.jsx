import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getSemesterById, semestersData } from '../data/semestersData';
import { getSubjectsBySemester } from '../data/subjectsData';
import { getChaptersBySubject } from '../data/chaptersData';
import { Breadcrumb } from '../components/common/Breadcrumb';
import {
  BookOpen,
  Clock,
  ArrowLeft,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export const SemesterPage = () => {
  const { semesterId } = useParams();
  const navigate = useNavigate();
  const semester = getSemesterById(semesterId);

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
          onClick={() => navigate('/semesters')}
          className="btn-primary-red text-sm"
        >
          View CSE Learning Path
        </button>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'CSE Learning Path', to: '/semesters' },
    { label: semester.title },
  ];

  // If even semester (Coming Soon)
  if (!semester.isAvailable) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-white">
        <Breadcrumb items={breadcrumbItems} />

        <div className="rounded-3xl border border-white/10 bg-[#121212] p-8 sm:p-14 text-center">
          <div className="w-16 h-16 rounded-2xl bg-red-600/15 border border-red-600/30 text-red-500 flex items-center justify-center mx-auto mb-5">
            <Clock className="w-8 h-8" />
          </div>

          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold bg-red-600/15 text-red-400 border border-red-600/30 mb-4">
            EVEN CYCLE • COMING SOON
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-3">
            {semester.title}
          </h1>

          <p className="text-base text-neutral-300 max-w-xl mx-auto leading-relaxed mb-8">
            This semester is scheduled for the upcoming even academic cycle. Active study material is currently live for odd semesters (1st, 3rd, and 5th Semester).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate('/semesters')}
              className="btn-secondary-dark text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Learning Path</span>
            </button>
            <button
              onClick={() => navigate('/semester/1')}
              className="btn-primary-red text-sm"
            >
              <span>Explore 1st Semester</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const subjects = getSubjectsBySemester(semester.id);
  const hasSubjects = subjects && subjects.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-10 text-[#f5f5f5]">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Semester Header Card with Red Accent */}
      <div className="relative rounded-3xl border border-white/10 bg-[#121212] p-6 sm:p-10 shadow-sm overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-600" />
        
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-red-600/15 text-red-400 border border-red-600/30">
              CSE • SEMESTER 0{semester.number}
            </span>
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
          {semester.description} Select a curriculum subject below to enter its digital textbook, study unit breakdown, derivations, and exam focus points.
        </p>

        {/* Switch odd semester quick pills in Red-Black theme */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="font-mono text-neutral-400">Switch Active Odd Semester:</span>
          <div className="flex items-center gap-2">
            {semestersData
              .filter((s) => s.isAvailable)
              .map((s) => (
                <Link
                  key={s.id}
                  to={`/semester/${s.id}`}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all ${
                    s.id === semester.id
                      ? 'bg-red-600 text-white shadow-xs'
                      : 'bg-white/5 hover:bg-white/10 text-neutral-300'
                  }`}
                >
                  0{s.number} - {s.shortName}
                </Link>
              ))}
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
          <span className="text-xs font-mono text-neutral-500">BTEUP Syllabus 2026</span>
        </div>

        {hasSubjects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {subjects.map((subject, idx) => {
              const chapters = getChaptersBySubject(subject.id);
              const chapterCount = chapters?.length || 0;

              return (
                <Link
                  key={subject.id}
                  to={`/subject/${subject.id}`}
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
