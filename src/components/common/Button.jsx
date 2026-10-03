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
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-red-700 via-red-600 to-red-600 dark:from-red-600 dark:to-red-700 hover:from-red-600 hover:to-red-500 text-white shadow-md shadow-red-700/20 focus:ring-accent border border-red-600/40 hover:-translate-y-0.5',
    secondary:
      'bg-surface hover:bg-secondary text-text-primary border border-border hover:border-border-hover focus:ring-accent hover:-translate-y-0.5 shadow-xs',
    glass:
      'bg-surface/80 hover:bg-secondary text-text-primary border border-border hover:border-border-hover focus:ring-accent shadow-xs',
    outline:
      'border border-border hover:border-border-hover text-text-primary hover:text-accent bg-transparent focus:ring-accent',
    ghost:
      'text-text-secondary hover:text-text-primary hover:bg-secondary focus:ring-accent',
    emerald:
      'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/25 focus:ring-emerald-500 border border-emerald-400/30',
    danger:
      'bg-red-600/15 hover:bg-red-600/25 text-accent border border-red-600/30 focus:ring-accent',
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

export default Button;
