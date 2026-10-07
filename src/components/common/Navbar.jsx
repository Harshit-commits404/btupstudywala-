import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, BookOpen, Layers } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { SearchModal } from './SearchModal';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isBranches = location.pathname.startsWith('/semesters') || location.pathname.startsWith('/branch');
  const isSem1 = location.pathname === '/semester/1' || location.pathname.includes('/semester-1');

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-[var(--navbar-bg)] backdrop-blur-md transition-colors duration-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 focus:outline-none group"
            aria-label="BTEUP Study Home"
          >
            <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-accent shadow-xs group-hover:border-accent/40 transition-colors">
              <BookOpen className="w-4 h-4 text-accent" />
            </div>

            <span className="font-display font-bold text-base sm:text-lg tracking-tight text-text-primary">
              BTEUP <span className="text-accent">STUDY</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                isHome
                  ? 'text-accent bg-accent-soft font-semibold'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
              }`}
            >
              Home
            </Link>

            <Link
              to="/semesters"
              className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                isBranches
                  ? 'text-accent bg-accent-soft font-semibold'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
              }`}
            >
              Branches
            </Link>

            <Link
              to="/semester/1"
              className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                isSem1
                  ? 'text-accent bg-accent-soft font-semibold'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
              }`}
            >
              Semester 1 Notes
            </Link>
          </nav>

          {/* Right Controls: Search, Theme Toggle, Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-surface text-text-secondary hover:text-text-primary hover:border-accent/40 transition-colors text-xs font-medium cursor-pointer shadow-subtle"
              title="Search semesters (Ctrl+K)"
              aria-label="Search curriculum"
            >
              <Search className="w-3.5 h-3.5 text-accent" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden md:inline-flex items-center px-1 text-[9px] font-mono text-text-muted bg-surface-secondary rounded border border-border">
                Ctrl K
              </kbd>
            </button>

            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg border border-border text-text-primary hover:bg-surface-secondary md:hidden cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 text-accent" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown - Clean & Compact */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-surface px-4 py-3 space-y-1 shadow-elevated">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-xs sm:text-sm font-medium ${
                isHome ? 'bg-accent-soft text-accent font-semibold' : 'text-text-primary hover:bg-surface-secondary'
              }`}
            >
              Home
            </Link>

            <Link
              to="/semesters"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-xs sm:text-sm font-medium ${
                isBranches ? 'bg-accent-soft text-accent font-semibold' : 'text-text-primary hover:bg-surface-secondary'
              }`}
            >
              Select Branch
            </Link>

            <Link
              to="/semester/1"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-xs sm:text-sm font-medium ${
                isSem1 ? 'bg-accent-soft text-accent font-semibold' : 'text-text-primary hover:bg-surface-secondary'
              }`}
            >
              Common 1st Year Notes
            </Link>
          </div>
        )}
      </header>

      {/* Global Search Dialog */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
