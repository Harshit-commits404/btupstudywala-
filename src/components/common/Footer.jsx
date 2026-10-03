import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Heart } from 'lucide-react';
import { semestersData } from '../../data/semestersData';

export const Footer = ({ onOpenCreatorModal }) => {
  return (
    <footer className="border-t border-border bg-secondary/80 text-text-secondary transition-colors duration-200 mt-20 relative overflow-hidden">
      {/* Top subtle crimson hairline */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-red-600/30 dark:via-red-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & Platform Identity */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-accent shadow-xs">
                <Cpu className="w-5 h-5 text-accent" />
              </div>
              <span className="font-display font-bold text-xl text-text-primary">
                BTEUP <span className="text-accent">STUDY</span>
              </span>
            </Link>

            <p className="text-sm text-text-secondary max-w-md leading-relaxed">
              Premium, open-source learning platform for UP Polytechnic diploma students. Conceptual notes, syllabus breakdowns, and exam preparation in simple bilingual language. No accounts, no paywalls.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-text-muted font-mono">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-600/10 text-accent border border-red-600/25 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Active Term: Odd Semesters (1, 3, 5)
              </span>
              <span>•</span>
              <span>100% Free & Open</span>
            </div>
          </div>

          {/* Polytechnic Engineering Branches */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-primary flex items-center gap-1.5">
              <span>Engineering Streams</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/branch/cse"
                  className="text-text-secondary hover:text-accent transition-colors flex items-center justify-between font-medium"
                >
                  <span>Computer Science (CSE)</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-600/10 text-accent border border-red-600/25">
                    Active
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/mechanical/semester-1"
                  className="text-text-secondary hover:text-accent transition-colors flex items-center justify-between text-xs"
                >
                  <span>Mechanical Engg. (ME)</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Sem 1 Live
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/electronics/semester-1"
                  className="text-text-secondary hover:text-accent transition-colors flex items-center justify-between text-xs"
                >
                  <span>Electronics Engg. (ECE)</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Sem 1 Live
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/instrumentation/semester-1"
                  className="text-text-secondary hover:text-accent transition-colors flex items-center justify-between text-xs"
                >
                  <span>Instrumentation & Control (IC)</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Sem 1 Live
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/information-technology/semester-1"
                  className="text-text-secondary hover:text-accent transition-colors flex items-center justify-between text-xs"
                >
                  <span>Information Technology (IT)</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Sem 1 Live
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Curriculum Semesters */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-primary">
              CSE Curriculum
            </h4>
            <ul className="space-y-2 text-sm">
              {semestersData.map((sem) => (
                <li key={sem.id}>
                  {sem.isAvailable ? (
                    <Link
                      to={`/semester/${sem.id}`}
                      className="text-text-secondary hover:text-accent transition-colors flex items-center justify-between font-medium"
                    >
                      <span>{sem.title}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-600/10 text-accent border border-red-600/25">
                        Open
                      </span>
                    </Link>
                  ) : (
                    <span className="text-text-muted flex items-center justify-between text-xs">
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
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p className="text-center sm:text-left">
            Disclaimer: BTEUP Study is an independent open educational resource for Uttar Pradesh Polytechnic students.
          </p>

          <div className="flex items-center gap-4 shrink-0 font-mono">
            {onOpenCreatorModal && (
              <button
                type="button"
                onClick={onOpenCreatorModal}
                className="hover:text-accent transition-colors cursor-pointer underline underline-offset-2"
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
