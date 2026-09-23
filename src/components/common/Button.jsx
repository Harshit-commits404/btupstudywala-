import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/25 focus:ring-brand-500 focus:ring-offset-white dark:focus:ring-offset-dark-bg border border-brand-400/30',
    secondary:
      'bg-slate-100 hover:bg-slate-200 dark:bg-dark-card dark:hover:bg-dark-cardHover text-slate-800 dark:text-slate-200 border border-slate-300/80 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 focus:ring-slate-500',
    glass:
      'bg-black/5 dark:bg-white/[0.05] hover:bg-black/10 dark:hover:bg-white/[0.1] text-slate-800 dark:text-slate-200 border border-black/10 dark:border-white/[0.1] backdrop-blur-md hover:border-brand-500/40 focus:ring-brand-500',
    outline:
      'border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-transparent focus:ring-slate-500',
    ghost:
      'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/[0.05] focus:ring-slate-500',
    emerald:
      'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 focus:ring-emerald-500 border border-emerald-400/30',
    danger:
      'bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/20 focus:ring-rose-500',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
};
