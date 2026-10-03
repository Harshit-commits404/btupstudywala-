import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Layers, BookOpen, FileText } from 'lucide-react';

export const MobileNav = () => {
  const location = useLocation();

  const navItems = [
    {
      label: 'Home',
      path: '/',
      icon: Home,
      isActive: location.pathname === '/',
    },
    {
      label: 'Semesters',
      path: '/semesters',
      icon: Layers,
      isActive: location.pathname === '/semesters' || location.pathname.startsWith('/semester/'),
    },
    {
      label: 'Subject',
      path: '/subject/template-preview',
      icon: BookOpen,
      isActive: location.pathname.startsWith('/subject/'),
    },
    {
      label: 'Notes',
      path: '/chapter/ch-1',
      icon: FileText,
      isActive: location.pathname.startsWith('/chapter/'),
    },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-2xl border-t border-border px-3 py-2 safe-area-bottom shadow-2xl transition-colors duration-200"
      aria-label="Mobile Navigation"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 ${
                item.isActive
                  ? 'text-accent font-semibold scale-105'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              <div className="relative">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] mt-1 font-medium tracking-tight">
                {item.label}
              </span>
              {item.isActive && (
                <span className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-accent" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
