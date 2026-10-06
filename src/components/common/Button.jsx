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
    'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1.5 gap-1.5',
    md: 'text-xs sm:text-sm px-3.5 py-2 gap-2',
    lg: 'text-sm sm:text-base px-5 py-2.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-accent hover:bg-accent-hover text-white border border-accent',
    secondary:
      'bg-surface hover:bg-secondary text-text-primary border border-border',
    glass:
      'bg-surface hover:bg-secondary text-text-primary border border-border',
    outline:
      'border border-border text-text-primary hover:border-accent hover:text-accent bg-transparent',
    ghost:
      'text-text-secondary hover:text-text-primary hover:bg-secondary',
    emerald:
      'bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-600',
    danger:
      'bg-red-600/10 hover:bg-red-600/20 text-accent border border-red-600/20',
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
