import React from 'react';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'pink' | 'green' | 'cyan' | 'red';
  fullWidth?: boolean;
}

export const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  variant = 'pink', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    pink: "bg-transparent border-2 border-neon-pink text-neon-pink shadow-[0_0_10px_rgba(255,0,255,0.3)] hover:bg-neon-pink hover:text-black hover:shadow-[0_0_20px_rgba(255,0,255,0.6)]",
    green: "bg-transparent border-2 border-neon-green text-neon-green shadow-[0_0_10px_rgba(57,255,20,0.3)] hover:bg-neon-green hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.6)]",
    cyan: "bg-transparent border-2 border-neon-cyan text-neon-cyan shadow-[0_0_10px_rgba(0,255,255,0.3)] hover:bg-neon-cyan hover:text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]",
    red: "bg-red-600 text-white border-2 border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:bg-red-500",
  };

  const widthClass = fullWidth ? 'w-full py-4 text-xl' : 'px-6 py-3 text-lg';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} rounded-xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};