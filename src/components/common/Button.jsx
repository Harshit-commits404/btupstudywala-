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
      'bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white shadow-md shadow-red-700/30 focus:ring-red-500 border border-red-500/40 hover:-translate-y-0.5',
    secondary:
      'bg-[#171717] hover:bg-[#222222] text-neutral-200 border border-white/10 hover:border-red-500/40 focus:ring-red-500 hover:-translate-y-0.5',
    glass:
      'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-red-500/40 focus:ring-red-500',
    outline:
      'border border-white/15 hover:border-red-500/60 text-neutral-300 hover:text-white bg-transparent focus:ring-red-500',
    ghost:
      'text-neutral-400 hover:text-white hover:bg-white/5 focus:ring-red-500',
    emerald:
      'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/25 focus:ring-emerald-500 border border-emerald-400/30',
    danger:
      'bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-600/30 focus:ring-red-500',
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
