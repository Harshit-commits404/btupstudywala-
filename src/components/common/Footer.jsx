import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MessageSquare } from 'lucide-react';
import { branchesData } from '../../data/branchesData';
import { FeedbackModal } from './FeedbackModal';

export const Footer = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-border bg-surface text-text-secondary transition-colors duration-200 mt-20 text-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border">
            <div className="space-y-1">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-surface-secondary border border-border flex items-center justify-center text-accent">
                  <BookOpen className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="font-display font-bold text-sm sm:text-base text-text-primary">
                  BTEUP <span className="text-accent">STUDY</span>
                </span>
              </Link>
              <p className="text-[11px] text-text-muted">
                Polytechnic ki padhai, ab simple language mein.
              </p>
            </div>

            {/* Quick Branch Links & Feedback Action */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
              {branchesData.map((branch) => (
                <Link
                  key={branch.id}
                  to={`/branch/${branch.id}`}
                  className="text-text-secondary hover:text-accent transition-colors font-medium"
                >
                  {branch.code}
                </Link>
              ))}

              <span className="text-border">|</span>

              <button
                type="button"
                onClick={() => setIsFeedbackOpen(true)}
                className="inline-flex items-center gap-1.5 text-accent hover:text-accent-strong font-medium cursor-pointer transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Feedback</span>
              </button>
            </div>
          </div>

          {/* Disclaimer & Developer Info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-text-muted text-[11px] font-mono">
            <p>
              BTEUP Study • Free educational resource for UP Polytechnic diploma students.
            </p>
            <p className="text-text-secondary font-medium">
              Engineered by Polytechnic students: Ashish & Harshit
            </p>
          </div>

        </div>
      </footer>

      {/* Student Feedback Dialog */}
      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
    </>
  );
};

export default Footer;
