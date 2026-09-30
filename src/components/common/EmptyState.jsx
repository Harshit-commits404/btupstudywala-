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
      className={`flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-3xl border border-white/10 bg-[#121212] shadow-xs text-white ${className}`}
    >
      {Icon && (
        <div className="w-16 h-16 rounded-2xl bg-red-600/15 border border-red-600/30 flex items-center justify-center mb-4 text-red-500">
          <Icon className="w-8 h-8" />
        </div>
      )}
      <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-neutral-400 max-w-md mb-6 leading-relaxed">
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
