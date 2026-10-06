import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { branchesData } from '../../data/branchesData';

export const Footer = () => {
  return (
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-text-muted text-[11px]">
          <p>
            BTEUP Study is an independent study portal for Uttar Pradesh Polytechnic students.
          </p>
          <p>
            Study notes & exam preparation
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
