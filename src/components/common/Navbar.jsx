import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ArrowRight, Cpu } from 'lucide-react';
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
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#080808]/95 backdrop-blur-xl transition-colors duration-200">
        {/* Subtle red engineering hairline along the top */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none group shrink-0"
            aria-label="BTEUP Study Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#141414] border border-white/10 group-hover:border-red-600/50 flex items-center justify-center text-red-500 transition-all duration-200 shadow-sm group-hover:shadow-[0_0_15px_rgba(230,57,70,0.3)]">
              <Cpu className="w-5 h-5 text-red-500 transition-transform duration-200 group-hover:scale-105" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white">
                  BTEUP <span className="text-red-500">STUDY</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-red-600/15 text-red-400 border border-red-600/30">
                  POLYTECHNIC
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase hidden xs:inline">
                Curriculum Companion
              </span>
            </div>
          </Link>

          {/* Minimal Navigation: Home, Branches, About with Red Accents */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            <Link
              to="/"
              className={`relative px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isHome
                  ? 'text-red-400 bg-red-600/15 border border-red-600/30'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Home</span>
              {isHome && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-red-500 rounded-full" />
              )}
            </Link>

            <button
              type="button"
              onClick={() => handleNavClick('branches')}
              className="relative px-3.5 py-1.5 rounded-lg text-sm font-semibold text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer group"
            >
              <span>Branches</span>
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className="relative px-3.5 py-1.5 rounded-lg text-sm font-semibold text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer group"
            >
              <span>About</span>
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </nav>

          {/* Right Side: Search, Theme Toggle, Start Learning CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Button */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg border border-white/10 bg-[#141414] text-neutral-400 hover:text-white hover:border-red-500/40 transition-all text-xs font-medium focus:outline-none cursor-pointer"
              title="Search semesters (Ctrl+K)"
              aria-label="Search semesters"
            >
              <Search className="w-3.5 h-3.5 text-red-400" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[9px] font-mono text-neutral-400 bg-neutral-900 border border-white/10 rounded">
                Ctrl K
              </kbd>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Premium CTA: Start Learning in Red Theme */}
            <Link
              to="/semesters"
              className="hidden sm:inline-flex items-center gap-1.5 btn-primary-red text-xs sm:text-sm !py-2 !px-4"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg border border-white/10 text-neutral-200 hover:bg-white/5 md:hidden focus:outline-none cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-red-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0d0d0d] px-4 py-5 space-y-3 shadow-2xl animate-fadeIn">
            <div className="space-y-1">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold text-neutral-200 hover:bg-white/5 hover:text-red-400 transition-colors"
              >
                <span>Home</span>
                <span className="text-xs font-mono text-red-500">[01]</span>
              </Link>

              <button
                type="button"
                onClick={() => handleNavClick('branches')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold text-neutral-200 hover:bg-white/5 hover:text-red-400 transition-colors text-left"
              >
                <span>Choose Branch</span>
                <span className="text-xs font-mono text-red-500">[02]</span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold text-neutral-200 hover:bg-white/5 hover:text-red-400 transition-colors text-left"
              >
                <span>About Platform</span>
                <span className="text-xs font-mono text-red-500">[03]</span>
              </button>
            </div>

            <div className="pt-2 border-t border-white/10">
              <Link
                to="/semesters"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full btn-primary-red !py-3 text-sm"
              >
                <span>Start Learning (CSE)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>Status: Odd Semesters Active</span>
              <span className="text-red-400 font-bold">Sem 1 • 3 • 5</span>
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
