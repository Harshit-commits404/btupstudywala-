import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { branchesData } from '../data/branchesData';

export const DashboardPage = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12 sm:space-y-16 text-text-primary">
      
      {/* 1. HOMEPAGE HERO (Compact, Premium, Attractive) */}
      <section className="relative text-center max-w-3xl mx-auto space-y-4 pt-2 sm:pt-6 pb-2">
        {/* Subtle Ambient Red Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-36 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/25 text-accent text-xs font-mono font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>BTEUP STUDY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-text-primary tracking-tight leading-[1.12]">
            Learn smarter.{' '}
            <span className="bg-gradient-to-r from-accent via-red-500 to-rose-400 bg-clip-text text-transparent">
              Understand better.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto font-medium">
            Polytechnic notes, syllabus and concepts — made simple.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#branches"
              className="btn-primary-red !px-5 !py-2.5 text-xs sm:text-sm group"
            >
              <span>Choose Branch</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <Link
              to="/semester/1"
              className="btn-secondary-dark !px-5 !py-2.5 text-xs sm:text-sm"
            >
              <BookOpen className="w-3.5 h-3.5 text-accent" />
              <span>Common 1st Year Notes</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CHOOSE YOUR BRANCH */}
      <section id="branches" className="space-y-6 scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-border">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-text-primary tracking-tight flex items-center gap-2.5">
              <span className="w-1.5 h-6 rounded-full bg-accent inline-block" />
              <span>Choose Your Branch</span>
            </h2>
            <p className="text-xs sm:text-sm text-text-muted mt-1">
              Select your engineering stream to view available semesters
            </p>
          </div>

          <span className="text-xs font-mono text-text-muted">
            5 Polytechnic Streams
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {branchesData.map((branch) => {
            const Icon = branch.icon;
            const isCse = branch.id === 'cse';
            const statusLabel = isCse ? 'Sem 1, 3, 5 Live' : 'Sem 1 (Common) Live';

            return (
              <Link
                key={branch.id}
                to={`/branch/${branch.id}`}
                className="premium-card group p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-soft border border-accent/25 flex items-center justify-center text-accent transition-transform duration-200 group-hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20">
                        {branch.code}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{statusLabel}</span>
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-display text-text-primary group-hover:text-accent transition-colors leading-snug">
                    {branch.name}
                  </h3>

                  <p className="text-xs text-text-secondary mt-1.5 line-clamp-1">
                    {branch.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-text-muted font-medium">Explore Semesters</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform duration-200 group-hover:translate-x-1.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. COMMON SEMESTER 1 SHOWCASE CARD */}
      <section className="premium-card p-5 sm:p-6 border-l-4 border-l-accent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-accent-soft border border-accent/25 flex items-center justify-center text-accent shrink-0 mt-0.5">
            <Layers className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base text-text-primary">
                1st Semester Common Curriculum
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                Unified
              </span>
            </div>
            <p className="text-xs text-text-secondary max-w-xl">
              Applied Physics, Mathematics-1, Chemistry, FEEE, and IT notes are shared across all BTEUP branches.
            </p>
          </div>
        </div>

        <Link
          to="/semester/1"
          className="btn-primary-red text-xs !py-2 !px-4 whitespace-nowrap self-stretch sm:self-auto"
        >
          <span>Open Semester 1</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </Link>
      </section>

    </div>
  );
};

export default DashboardPage;
