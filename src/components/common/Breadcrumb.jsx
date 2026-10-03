import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumb = ({ items = [], className = '' }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-text-muted ${className}`}
    >
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors py-1"
        title="Home"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-text-muted/60 shrink-0" aria-hidden="true" />
            {isLast || !item.to ? (
              <span
                className="text-text-primary font-bold truncate max-w-[200px] sm:max-w-xs"
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.to}
                className="text-text-secondary hover:text-accent transition-colors truncate max-w-[150px] sm:max-w-xs py-1"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
