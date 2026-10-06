import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users } from 'lucide-react';
import { branchesData } from '../../data/branchesData';
import { DeveloperModal } from './DeveloperModal';

export const Footer = () => {
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-border bg-secondary/50 text-text-secondary transition-colors duration-150 mt-16 text-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-surface border border-border flex items-center justify-center text-accent">
                <BookOpen className="w-3.5 h-3.5 text-accent" />
              </div>
              <span className="font-display font-bold text-base text-text-primary">
                BTEUP <span className="text-accent">Study</span>
              </span>
            </Link>

            {/* Quick Branch Links */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
              {branchesData.map((branch) => (
                <Link
                  key={branch.id}
                  to={`/branch/${branch.id}`}
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  {branch.code}
                </Link>
              ))}
            </div>
          </div>

          {/* Disclaimer & Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-text-muted text-[11px]">
            <p className="text-center sm:text-left">
              BTEUP Study is an independent study portal for Uttar Pradesh Polytechnic students.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <button
                onClick={() => setIsDeveloperModalOpen(true)}
                className="flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors font-medium cursor-pointer"
              >
                <Users className="w-3.5 h-3.5" />
                Meet the Developers
              </button>
              <span className="hidden sm:inline text-border">•</span>
              <p>
                Study notes & exam preparation
              </p>
            </div>
          </div>

        </div>
      </footer>
      <DeveloperModal isOpen={isDeveloperModalOpen} onClose={() => setIsDeveloperModalOpen(false)} />
    </>
  );
};

export default Footer;
