import React from 'react';

export const SectionHeader = ({
  badge,
  title,
  subtitle,
  align = 'left',
  children,
  className = '',
}) => {
  const alignClass =
    align === 'center'
      ? 'text-center items-center mx-auto'
      : align === 'right'
      ? 'text-right items-end'
      : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} mb-6 sm:mb-8 ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-bold tracking-wide uppercase bg-red-600/10 text-accent border border-red-600/25 mb-3">
          {badge}
        </div>
      )}

      {title && (
        <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-text-primary tracking-tight flex items-center gap-2.5">
          <span className="w-1.5 h-6 rounded-full bg-accent inline-block shadow-xs" />
          <span>{title}</span>
        </h2>
      )}

      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default SectionHeader;
