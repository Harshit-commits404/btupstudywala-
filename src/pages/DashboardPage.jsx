import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { branchesData } from '../data/branchesData';

export const DashboardPage = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12 text-text-primary">
      
      {/* 1. HERO / INTRODUCTION */}
      <section className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4 pt-2 sm:pt-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent tracking-wider uppercase px-3 py-1 rounded-full bg-accent-soft border border-red-500/20">
          BTEUP Polytechnic Notes
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-text-primary tracking-tight">
          Polytechnic notes, simplified.
        </h1>
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
          Clean conceptual notes, formulas, derivations, and exam preparation. Free and open for diploma students.
        </p>
      </section>

      {/* 2. SELECT YOUR BRANCH */}
      <section className="space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-border">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-text-primary">
              Select Branch
            </h2>
            <p className="text-xs sm:text-sm text-text-muted mt-0.5">
              Choose your engineering stream to view available semesters
            </p>
          </div>
          <span className="text-xs font-mono text-text-muted hidden sm:inline">
            5 Engineering Streams
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {branchesData.map((branch) => {
            const isCse = branch.id === 'cse';
            const statusLabel = isCse ? 'Sem 1, 3, 5 Live' : 'Sem 1 (Common) Live';

            return (
              <Link
                key={branch.id}
                to={`/branch/${branch.id}`}
                className="group relative rounded-xl border border-border bg-surface hover:border-accent/40 p-5 sm:p-6 flex flex-col justify-between transition-all duration-150 shadow-xs hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-red-500/20">
                      {branch.code}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{statusLabel}</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-display text-text-primary group-hover:text-accent transition-colors leading-snug">
                    {branch.name}
                  </h3>
                </div>

                <div className="mt-5 pt-3.5 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-text-muted font-medium">View Semesters</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform duration-150 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. QUICK COMMON SEMESTER 1 SHORTCUT */}
      <section className="rounded-xl border border-border bg-surface p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent-soft text-accent flex items-center justify-center shrink-0 border border-red-500/20">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-text-primary block">
              1st Semester is Common for All Branches
            </span>
            <span className="text-text-muted text-xs">
              Applied Physics, Mathematics-1, Chemistry, FEEE, and IT notes are shared across all streams.
            </span>
          </div>
        </div>

        <Link
          to="/semester/1"
          className="btn-primary-red text-xs !py-2 !px-4 whitespace-nowrap self-end sm:self-center"
        >
          <span>Open Semester 1</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </Link>
      </section>

    </div>
  );
};

export default DashboardPage;
