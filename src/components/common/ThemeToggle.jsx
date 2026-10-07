import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      title={isDark ? 'Switch to Light Mode (Reading)' : 'Switch to Dark Mode (Night Study)'}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className={`relative p-2 rounded-lg border border-border bg-surface hover:bg-surface-secondary text-text-secondary hover:text-text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40 cursor-pointer ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-250 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 transition-transform duration-250 hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;
