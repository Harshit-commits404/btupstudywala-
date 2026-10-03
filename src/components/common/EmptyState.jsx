import React from 'react';
import { Button } from './Button';

export const EmptyState = ({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-3xl border border-border bg-surface shadow-card-light dark:shadow-card-dark text-text-primary ${className}`}
    >
      {Icon && (
        <div className="w-16 h-16 rounded-2xl bg-accent-soft border border-red-500/30 flex items-center justify-center mb-4 text-accent shadow-xs">
          <Icon className="w-8 h-8" />
        </div>
      )}
      <h3 className="text-xl sm:text-2xl font-bold font-display text-text-primary mb-2">
        {title}
      </h3>
      <p className="text-sm text-text-secondary max-w-md mb-6 leading-relaxed">
        {description}
      </p>
      {actionLabel && (
        <Button onClick={onAction} variant="primary" size="md">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
