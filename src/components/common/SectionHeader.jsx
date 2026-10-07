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
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase bg-accent-soft text-accent border border-accent/20 mb-2.5">
          {badge}
        </div>
      )}

      {title && (
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-text-primary tracking-tight flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-accent inline-block" />
          <span>{title}</span>
        </h2>
      )}

      {subtitle && (
        <p className="mt-1.5 text-xs sm:text-sm text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default SectionHeader;
