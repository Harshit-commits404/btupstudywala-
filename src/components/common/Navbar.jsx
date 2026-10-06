import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, BookOpen } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { SearchModal } from './SearchModal';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (target) => {
    setIsMobileMenuOpen(false);
    if (target === 'branches') {
      if (location.pathname === '/') {
        document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
      }
    }
  };

  const isHome = location.pathname === '/';

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-[var(--navbar-bg)] backdrop-blur-md transition-colors duration-150">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 focus:outline-none"
            aria-label="BTEUP Study Home"
          >
            <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-accent">
              <BookOpen className="w-4 h-4 text-accent" />
            </div>

            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-text-primary">
              BTEUP <span className="text-accent">Study</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                isHome
                  ? 'text-accent bg-accent-soft'
                  : 'text-text-secondary hover:text-text-primary hover:bg-secondary'
              }`}
            >
              Home
            </Link>

            <Link
              to="/semesters"
              className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-text-secondary hover:text-text-primary hover:bg-secondary transition-colors"
            >
              Branches
            </Link>
          </nav>

          {/* Right Controls: Search, Theme Toggle, Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-surface text-text-secondary hover:text-text-primary hover:border-accent/40 transition-colors text-xs font-medium cursor-pointer"
              title="Search (Ctrl+K)"
              aria-label="Search semesters"
            >
              <Search className="w-3.5 h-3.5 text-accent" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden md:inline-flex items-center px-1 text-[9px] font-mono text-text-muted bg-secondary rounded border border-border">
                Ctrl K
              </kbd>
            </button>

            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-lg border border-border text-text-primary hover:bg-secondary md:hidden cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 text-accent" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-surface px-4 py-3 space-y-1">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-text-primary hover:bg-secondary hover:text-accent"
            >
              Home
            </Link>

            <Link
              to="/semesters"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-text-primary hover:bg-secondary hover:text-accent"
            >
              Select Branch
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
