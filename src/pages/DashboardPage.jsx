import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Layers,
  Sparkles,
  CheckCircle2,
  Compass,
} from 'lucide-react';
import { semestersData, ACADEMIC_CYCLE } from '../data/semestersData';
import { SemesterCard } from '../components/cards/SemesterCard';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';

export const DashboardPage = () => {
  const navigate = useNavigate();

  const scrollToSemesters = () => {
    const el = document.getElementById('semester-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/semesters');
    }
  };

  const steps = [
    {
      number: '01',
      title: 'Select Semester',
      description: 'Choose your active odd semester (1st, 3rd, or 5th) to view the curriculum syllabus.',
      icon: Layers,
    },
    {
      number: '02',
      title: 'Select Subject',
      description: 'Pick any subject from your diploma branch to explore its structured modules.',
      icon: BookOpen,
    },
    {
      number: '03',
      title: 'Select Chapter',
      description: 'Access individual chapter units with clearly defined learning outcomes.',
      icon: Compass,
    },
    {
      number: '04',
      title: 'Start Learning',
      description: 'Read concepts, Hinglish breakdowns, circuit diagrams, and exam revision points.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-16 pb-6 text-center max-w-4xl mx-auto px-4">
        {/* Subtle radial ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-64 sm:h-80 bg-brand-500/10 blur-3xl rounded-full -z-10 pointer-events-none" />

        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 mb-6 backdrop-blur-sm animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Academic Term: {ACADEMIC_CYCLE.currentTerm} Open</span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-500 dark:text-slate-400">100% Free & Open-Source</span>
        </div>

        {/* Main Hero Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
          BTEUP <span className="text-brand-600 dark:text-brand-400">Study</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-200 mb-4">
          Learn your syllabus. Understand the concepts.
        </p>

        {/* Supporting description */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
          A clean, student-first learning companion for BTEUP Polytechnic diploma students. Structured, easy-to-understand learning material designed for conceptual clarity and exam confidence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <Button
            onClick={scrollToSemesters}
            size="lg"
            variant="primary"
            icon={ArrowRight}
            iconPosition="right"
            className="w-full sm:w-auto"
          >
            Start Learning
          </Button>

          <Button
            onClick={() => navigate('/semesters')}
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Explore All Semesters
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-white/[0.06] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>No Account Required</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Open Source Project</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 col-span-2 sm:col-span-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Odd Semesters Active</span>
          </div>
        </div>
      </section>

      {/* Semester Selection Grid Section */}
      <section id="semester-grid" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Curriculum Directory"
          title="Choose Your Semester"
          subtitle="Odd semesters (1st, 3rd, 5th) are actively open. Even semesters (2nd, 4th, 6th) will unlock in the upcoming academic cycle."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {semestersData.map((semester) => (
            <SemesterCard key={semester.id} semester={semester} />
          ))}
        </div>
      </section>

      {/* How It Works Section: 4 Simple Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-dark-card/40 p-8 sm:p-12 backdrop-blur-xl">
          <SectionHeader
            badge="Simple Learning Journey"
            title="How BTEUP Study Works"
            subtitle="Straightforward, barrier-free learning designed for diploma engineering students."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-200/80 dark:border-white/[0.06] bg-white dark:bg-dark-card/80 p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400">
                        Step {step.number}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold font-display text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Template Preview Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-3xl border border-dashed border-brand-500/30 bg-gradient-to-br from-brand-500/5 via-transparent to-brand-500/5 p-8 sm:p-10 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 mb-4">
            <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white mb-3">
            Open-Source Architecture Ready
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-6">
            BTEUP Study V1 establishes the clean UI/UX frontend layout, semester routing, and structured reading canvas. Real syllabus subjects, chapter breakdowns, and Hinglish notes will be added by the project owner.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/subject/template-preview">
              <Button variant="secondary" size="md">
                Preview Subject Template
              </Button>
            </Link>
            <Link to="/chapter/ch-1">
              <Button variant="primary" size="md">
                Preview Reading Notes Template
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
