'use client';

import React from 'react';
import { motion, type MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type ButtonProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
} & React.ComponentPropsWithoutRef<T> &
  MotionProps;

const buttonVariants = {
  primary: {
    initial: { scale: 1, backgroundColor: '#ffffff', color: '#000000' },
    hover: {
      scale: 1.1,
      backgroundColor: '#0070f3',
      color: '#ffffff',
      fill: '#ffffff',
    },
  },
  secondary: {
    initial: { scale: 1 },
    hover: { scale: 1.1, backgroundColor: '#eaeaea', color: '#000000' },
  },
  danger: {
    initial: { scale: 1 },
    hover: { scale: 1.1, backgroundColor: '#ff0000', color: '#ffffff' },
  },
};

const buttonSizes = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  icon: 'p-3 text-sm',
};

export function Button<T extends React.ElementType = 'button'>({
  children,
  className,
  as,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps<T>) {
  const Component = motion[as as keyof typeof motion] || motion.button;

  return (
    <Component
      {...props}
      className={cn(
        'rounded-full w-max cursor-pointer',
        buttonSizes[size],
        className
      )}
      variants={buttonVariants[variant]}
      initial="initial"
      whileHover="hover"
    >
      {children}
    </Component>
  );
}
