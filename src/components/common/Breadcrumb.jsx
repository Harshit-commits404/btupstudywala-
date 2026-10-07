import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumb = ({ items = [], className = '' }) => {
  const normalizedItems = items.filter((item) => item.label?.toLowerCase() !== 'home');

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-1.5 text-xs text-text-muted ${className}`}
    >
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors py-1"
        title="Home"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {normalizedItems.map((item, index) => {
        const isLast = index === normalizedItems.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-text-muted/50 shrink-0" aria-hidden="true" />
            {isLast || !item.to ? (
              <span
                className="text-text-primary font-medium truncate max-w-[200px] sm:max-w-xs"
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
