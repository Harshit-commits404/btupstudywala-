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
      className={`flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-xl border border-border bg-surface shadow-subtle text-text-primary ${className}`}
    >
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-accent-soft border border-accent/25 flex items-center justify-center mb-3 text-accent shadow-xs">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <h3 className="text-lg sm:text-xl font-bold font-display text-text-primary mb-1.5">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-text-secondary max-w-md mb-5 leading-relaxed">
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
