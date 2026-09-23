import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Heart } from 'lucide-react';
import { semestersData } from '../../data/semestersData';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-dark-bg transition-colors duration-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-500/15 border border-brand-500/25 flex items-center justify-center text-brand-600 dark:text-brand-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl text-slate-900 dark:text-white">
                BTEUP <span className="text-brand-600 dark:text-brand-400">Study</span>
              </span>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              An open-source, student-first learning companion for BTEUP Polytechnic diploma engineering students. Read structured syllabus concepts, clear explanations, and revision notes without accounts or paywalls.
            </p>

            <div className="flex items-center gap-3 pt-1 text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Current Cycle: Odd Semesters
              </span>
              <span>•</span>
              <span>100% Free Forever</span>
            </div>
          </div>

          {/* Odd Semesters (Available) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Active Odd Semesters
            </h4>
            <ul className="space-y-2 text-sm">
              {semestersData
                .filter((s) => s.isAvailable)
                .map((sem) => (
                  <li key={sem.id}>
                    <Link
                      to={`/semester/${sem.id}`}
                      className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center justify-between"
                    >
                      <span>{sem.title}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-brand-500/10 text-brand-500">
                        Open
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Even Semesters (Coming Soon) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Even Semesters (Upcoming)
            </h4>
            <ul className="space-y-2 text-sm">
              {semestersData
                .filter((s) => !s.isAvailable)
                .map((sem) => (
                  <li
                    key={sem.id}
                    className="text-slate-400 dark:text-slate-500 flex items-center justify-between cursor-not-allowed"
                  >
                    <span>{sem.title}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/[0.04]">
                      Soon
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>
            Disclaimer: BTEUP Study is an independent open-source educational project and is not affiliated with the Board of Technical Education, Uttar Pradesh (BTEUP).
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <span className="flex items-center gap-1">
              Built for Polytechnic students with <Heart className="w-3 h-3 text-rose-500 inline fill-rose-500" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
