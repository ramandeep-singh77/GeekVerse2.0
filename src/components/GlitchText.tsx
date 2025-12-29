import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsGlitching(true);
        
        let iterations = 0;
        const maxIterations = 5;
        
        const glitchEffect = setInterval(() => {
          if (iterations >= maxIterations) {
            setDisplayText(text);
            setIsGlitching(false);
            clearInterval(glitchEffect);
            return;
          }
          
          setDisplayText(
            text
              .split('')
              .map((char) => {
                if (char === ' ') return ' ';
                if (Math.random() > 0.7) {
                  return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                }
                return char;
              })
              .join('')
          );
          
          iterations++;
        }, 50);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{displayText}</span>
      {isGlitching && (
        <>
          <span 
            className="absolute inset-0 text-[#00ff66] opacity-70 blur-[1px]"
            style={{ transform: 'translate(-2px, -1px)', clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
            aria-hidden="true"
          >
            {displayText}
          </span>
          <span 
            className="absolute inset-0 text-[#00ff99] opacity-70 blur-[1px]"
            style={{ transform: 'translate(2px, 1px)', clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
            aria-hidden="true"
          >
            {displayText}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;
