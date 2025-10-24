import React from 'react';
import { motion } from 'framer-motion';

// Button Component
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#aec7e9] to-[#8ba8d4] text-black hover:from-[#bdd5f0] hover:to-[#a0bbde] shadow-lg shadow-[#aec7e9]/20',
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 backdrop-blur-md',
    ghost: 'text-white/80 hover:text-white hover:bg-white/5',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs tracking-[0.15em] uppercase',
    md: 'px-6 py-3 text-sm tracking-[0.2em] uppercase',
    lg: 'px-8 py-4 text-base tracking-[0.2em] uppercase',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {children}
    </motion.button>
  );
};

// Section Wrapper Component
export interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'dark' | 'light' | 'gradient';
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = '',
  id,
  background = 'dark',
}) => {
  const backgroundClasses = {
    dark: 'bg-black text-white',
    light: 'bg-white text-black',
    gradient: 'bg-gradient-to-b from-black via-zinc-900 to-black text-white',
  };

  return (
    <section
      id={id}
      className={`relative w-full min-h-screen overflow-hidden ${backgroundClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
};

// Card Component
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={onClick}
      className={`relative bg-zinc-950/50 border border-white/10 rounded-lg overflow-hidden backdrop-blur-sm ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Image Cover Component
export interface ImageCoverProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
  cinematic?: boolean;
}

export const ImageCover: React.FC<ImageCoverProps> = ({
  src,
  alt,
  className = '',
  overlay = true,
  cinematic = true,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        loading="lazy"
      />
      
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      )}
      
      {cinematic && (
        <>
          {/* Cinematic lighting effect */}
          <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#aec7e9]/20 via-transparent to-transparent mix-blend-screen" />
          
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent" />
        </>
      )}
    </div>
  );
};

// Decorative Line Component
export interface DecorativeLineProps {
  className?: string;
  variant?: 'horizontal' | 'vertical';
  color?: 'primary' | 'secondary';
}

export const DecorativeLine: React.FC<DecorativeLineProps> = ({
  className = '',
  variant = 'horizontal',
  color = 'primary',
}) => {
  const colorClasses = {
    primary: 'bg-gradient-to-r from-[#aec7e9] to-transparent',
    secondary: 'bg-gradient-to-r from-white/60 via-white/30 to-transparent',
  };

  const sizeClasses = {
    horizontal: 'w-full h-[1px]',
    vertical: 'w-[1px] h-full',
  };

  return (
    <div
      className={`${sizeClasses[variant]} ${colorClasses[color]} ${className}`}
    />
  );
};
