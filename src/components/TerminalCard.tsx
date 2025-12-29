import { ReactNode, CSSProperties } from 'react';

interface TerminalCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const TerminalCard = ({ title, children, className = '', style }: TerminalCardProps) => {
  return (
    <div className={`bg-card border border-border rounded-lg overflow-hidden card-hover ${className}`} style={style}>
      <div className="terminal-header">
        <div className="terminal-dot bg-destructive"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-primary"></div>
        <span className="ml-3 font-mono text-xs text-muted-foreground">{title}</span>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default TerminalCard;
