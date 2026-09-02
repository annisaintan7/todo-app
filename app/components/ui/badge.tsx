import React from 'react';

type BadgeVariant =
  | 'blue'
  | 'green'
  | 'yellow';

type BadgeSize =
  | 'default'
  | 'sm';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
}

export function Badge({
  children,
  variant = 'blue',
  size = 'default',
}: BadgeProps) {
  const variantClass = {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    yellow: 'bg-yellow-100 text-yellow-700',
  };

  const sizeClass = {
    default: 'px-2.5 py-1 text-xs',
    sm: 'px-2 py-0.5 text-xs',
  };

  return (
    <span
      className={`
        inline-flex items-center
        rounded-full
        font-medium
        ${variantClass[variant]}
        ${sizeClass[size]}
      `}
    >
      {children}
    </span>
  );
}