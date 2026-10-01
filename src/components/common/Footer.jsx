import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Heart } from 'lucide-react';
import { semestersData } from '../../data/semestersData';

export const Footer = ({ onOpenCreatorModal }) => {
  return (
    <footer className="border-t border-slate-300 dark:border-[#22304a] bg-slate-100 dark:bg-[#060914] text-slate-600 dark:text-neutral-300 transition-colors duration-200 mt-20 relative overflow-hidden">
      {/* Top subtle purple hairline */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/30 dark:via-[#8b5cf6]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & Platform Identity */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-[#111b2e] border border-slate-300 dark:border-[#22304a] flex items-center justify-center text-purple-600 dark:text-[#8b5cf6]">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl text-slate-800 dark:text-white">
                BTEUP <span className="text-purple-600 dark:text-[#8b5cf6]">STUDY</span>
              </span>
            </Link>

            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              Premium, open-source learning platform for UP Polytechnic diploma students. Conceptual notes, syllabus breakdowns, and exam preparation in simple bilingual language. No accounts, no paywalls.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-neutral-400 font-mono">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-600/10 text-red-400 border border-red-600/25 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Active Term: Odd Semesters (1, 3, 5)
              </span>
              <span>•</span>
              <span>100% Free & Open</span>
            </div>
          </div>

          {/* Polytechnic Engineering Branches */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-800 dark:text-white flex items-center gap-1.5">
              <span>Engineering Streams</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/branch/cse"
                  className="text-neutral-400 hover:text-red-400 transition-colors flex items-center justify-between font-medium"
                >
                  <span>Computer Science (CSE)</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-600/15 text-red-300 border border-red-600/30">
                    Active
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/mechanical/semester-1"
                  className="text-neutral-400 hover:text-red-400 transition-colors flex items-center justify-between text-xs"
                >
                  <span>Mechanical Engg. (ME)</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Sem 1 Live
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/electronics/semester-1"
                  className="text-neutral-400 hover:text-red-400 transition-colors flex items-center justify-between text-xs"
                >
                  <span>Electronics Engg. (ECE)</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Sem 1 Live
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/instrumentation/semester-1"
                  className="text-neutral-400 hover:text-red-400 transition-colors flex items-center justify-between text-xs"
                >
                  <span>Instrumentation & Control (IC)</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Sem 1 Live
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/information-technology/semester-1"
                  className="text-neutral-400 hover:text-red-400 transition-colors flex items-center justify-between text-xs"
                >
                  <span>Information Technology (IT)</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Sem 1 Live
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Curriculum Semesters */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-800 dark:text-white">
              CSE Curriculum
            </h4>
            <ul className="space-y-2 text-sm">
              {semestersData.map((sem) => (
                <li key={sem.id}>
                  {sem.isAvailable ? (
                    <Link
                      to={`/semester/${sem.id}`}
                      className="text-neutral-400 hover:text-red-400 transition-colors flex items-center justify-between"
                    >
                      <span>{sem.title}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-600/15 text-red-400">
                        Open
                      </span>
                    </Link>
                  ) : (
                    <span className="text-neutral-600 flex items-center justify-between text-xs">
                      <span>{sem.title}</span>
                      <span className="text-[10px] font-mono">Even Cycle</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar — CORRECT WORDING: Final-Year Students */}
        <div className="mt-12 pt-8 border-t border-slate-300 dark:border-[#22304a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-neutral-400">
          <p className="text-center sm:text-left">
            Disclaimer: BTEUP Study is an independent open educational resource for Uttar Pradesh Polytechnic students.
          </p>

          <div className="flex items-center gap-4 shrink-0 font-mono">
            {onOpenCreatorModal && (
              <button
                type="button"
                onClick={onOpenCreatorModal}
                className="hover:text-red-400 transition-colors cursor-pointer underline underline-offset-2"
              >
                Made by Final-Year Students: Ashish & Harshit
              </button>
            )}
            <span>•</span>
            <span className="flex items-center gap-1">
              Engineered with <Heart className="w-3 h-3 text-red-500 inline fill-red-500" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
