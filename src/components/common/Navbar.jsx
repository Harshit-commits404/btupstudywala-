import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ArrowRight, Cpu, Compass } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { SearchModal } from './SearchModal';

export const Navbar = ({ onOpenCreatorModal }) => {
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
        navigate('/#branches');
        setTimeout(() => {
          document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else if (target === 'about') {
      if (location.pathname === '/') {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/#about');
        setTimeout(() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  };

  const isHome = location.pathname === '/';

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-cyan-500/15 bg-white/90 dark:bg-[#070f1c]/90 backdrop-blur-xl transition-colors duration-200">
        {/* Subtle engineering line along the very top */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none group shrink-0"
            aria-label="BTEUP Study Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900 dark:bg-cyan-950/80 border border-slate-300 dark:border-cyan-500/40 flex items-center justify-center text-cyan-500 group-hover:border-cyan-400 group-hover:scale-105 transition-all shadow-sm">
              <Cpu className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white">
                  BTEUP <span className="text-cyan-600 dark:text-cyan-400">STUDY</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20">
                  POLYTECHNIC
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-wider text-slate-500 dark:text-slate-400 uppercase hidden xs:inline">
                Curriculum Companion
              </span>
            </div>
          </Link>

          {/* Minimal Navigation: Home, Branches, About */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            <Link
              to="/"
              className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                isHome
                  ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            <button
              type="button"
              onClick={() => handleNavClick('branches')}
              className="px-3.5 py-1.5 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all cursor-pointer"
            >
              Branches
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className="px-3.5 py-1.5 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all cursor-pointer"
            >
              About
            </button>
          </nav>

          {/* Right Side: Search, Theme Toggle, Start Learning CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Button */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-200 dark:border-cyan-500/20 bg-slate-100/80 dark:bg-white/[0.04] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-cyan-500/40 transition-all text-xs font-medium focus:outline-none"
              title="Search semesters (Ctrl+K)"
              aria-label="Search semesters"
            >
              <Search className="w-3.5 h-3.5 text-slate-400 dark:text-cyan-400" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[9px] font-mono text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded">
                Ctrl K
              </kbd>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Premium CTA: Start Learning */}
            <Link
              to="/semesters"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 dark:border-cyan-500/20 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 md:hidden focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-cyan-500/15 bg-white dark:bg-[#070f1c] px-4 py-5 space-y-3 shadow-2xl animate-fadeIn">
            <div className="space-y-1">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
              >
                <span>Home</span>
                <span className="text-xs font-mono text-cyan-500">[01]</span>
              </Link>

              <button
                type="button"
                onClick={() => handleNavClick('branches')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 text-left"
              >
                <span>Choose Branch</span>
                <span className="text-xs font-mono text-cyan-500">[02]</span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 text-left"
              >
                <span>About Platform</span>
                <span className="text-xs font-mono text-cyan-500">[03]</span>
              </button>
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-cyan-500/15">
              <Link
                to="/semesters"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-semibold text-sm shadow-md shadow-cyan-500/25"
              >
                <span>Start Learning (CSE)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span>Status: Odd Semesters Active</span>
              <span className="text-cyan-500 font-bold">Sem 1 • 3 • 5</span>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Dialog */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
