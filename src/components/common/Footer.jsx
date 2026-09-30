import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Heart, CheckCircle2, Clock } from 'lucide-react';
import { semestersData } from '../../data/semestersData';

export const Footer = ({ onOpenCreatorModal }) => {
  return (
    <footer className="border-t border-slate-200/80 dark:border-cyan-500/15 bg-white dark:bg-[#060c18] transition-colors duration-200 mt-20 relative overflow-hidden">
      {/* Top subtle engineering hairline */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & Platform Identity */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-cyan-950/80 border border-slate-300 dark:border-cyan-500/30 flex items-center justify-center text-cyan-500">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl text-slate-900 dark:text-white">
                BTEUP <span className="text-cyan-600 dark:text-cyan-400">STUDY</span>
              </span>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Premium, open-source learning platform for UP Polytechnic diploma students. Conceptual notes, syllabus breakdowns, and exam preparation in simple bilingual language. No accounts, no paywalls.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                Active Term: Odd Semesters (1, 3, 5)
              </span>
              <span>•</span>
              <span>100% Free & Open</span>
            </div>
          </div>

          {/* Polytechnic Engineering Branches */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>Engineering Streams</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/semesters"
                  className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center justify-between font-medium"
                >
                  <span>Computer Science (CSE)</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30">
                    Active
                  </span>
                </Link>
              </li>
              <li className="text-slate-500 dark:text-slate-400 flex items-center justify-between text-xs">
                <span>Mechanical Engg. (ME)</span>
                <span className="text-[10px] font-mono text-amber-500">Soon</span>
              </li>
              <li className="text-slate-500 dark:text-slate-400 flex items-center justify-between text-xs">
                <span>Electronics Engg. (ECE)</span>
                <span className="text-[10px] font-mono text-amber-500">Soon</span>
              </li>
              <li className="text-slate-500 dark:text-slate-400 flex items-center justify-between text-xs">
                <span>Instrumentation & Control (IC)</span>
                <span className="text-[10px] font-mono text-amber-500">Soon</span>
              </li>
              <li className="text-slate-500 dark:text-slate-400 flex items-center justify-between text-xs">
                <span>Information Technology (IT)</span>
                <span className="text-[10px] font-mono text-amber-500">Soon</span>
              </li>
            </ul>
          </div>

          {/* Quick Curriculum Semesters */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              CSE Curriculum
            </h4>
            <ul className="space-y-2 text-sm">
              {semestersData.map((sem) => (
                <li key={sem.id}>
                  {sem.isAvailable ? (
                    <Link
                      to={`/semester/${sem.id}`}
                      className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center justify-between"
                    >
                      <span>{sem.title}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-500">
                        Open
                      </span>
                    </Link>
                  ) : (
                    <span className="text-slate-400 dark:text-slate-600 flex items-center justify-between text-xs">
                      <span>{sem.title}</span>
                      <span className="text-[10px] font-mono">Even Cycle</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-cyan-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="text-center sm:text-left">
            Disclaimer: BTEUP Study is an independent open educational resource for Uttar Pradesh Polytechnic students.
          </p>

          <div className="flex items-center gap-4 shrink-0 font-mono">
            {onOpenCreatorModal && (
              <button
                type="button"
                onClick={onOpenCreatorModal}
                className="hover:text-cyan-500 transition-colors cursor-pointer underline underline-offset-2"
              >
                Creators: Ashish & Harshit
              </button>
            )}
            <span>•</span>
            <span className="flex items-center gap-1">
              Engineered with <Heart className="w-3 h-3 text-rose-500 inline fill-rose-500" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
