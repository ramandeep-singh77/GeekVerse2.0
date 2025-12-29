import { ReactNode } from 'react';

interface CommandButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

const CommandButton = ({ children, variant = 'primary', onClick, className = '' }: CommandButtonProps) => {
  const baseStyles = "relative font-mono text-sm font-semibold px-6 py-3 rounded-md transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 glow-sm hover:glow-lg",
    secondary: "bg-transparent border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary",
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        <span className="text-primary-foreground/70 group-hover:text-primary-foreground transition-colors">{'>'}</span>
        {children}
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
    </button>
  );
};

export default CommandButton;
