import GlitchText from '../GlitchText';
import CommandButton from '../CommandButton';
import { Terminal, Cpu } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute top-1/3 right-10 w-px h-48 bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="container max-w-6xl mx-auto text-center relative z-10">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="font-mono text-xs text-primary">SYSTEM.ACTIVE</span>
        </div>

        {/* Main title */}
        <div className="mb-6">
          <div className="font-mono text-sm text-muted-foreground mb-4 tracking-wider">
            {'// GFG CAMPUS BODY PRESENTS'}
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight font-heading">
            <GlitchText 
              text="GEEKVERSE" 
              className="text-primary drop-shadow-[0_0_30px_rgba(0,200,83,0.5)] block"
            />
            <span className="text-foreground drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">2.0</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-base sm:text-lg md:text-xl text-muted-foreground">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-center">A 24-Hour Engineering Hackathon</span>
            <Cpu className="w-5 h-5 text-primary hidden sm:block" />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-foreground mb-8 md:mb-12 text-center">
          Build Beyond Limits
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <CommandButton variant="primary">
            Grant Access
          </CommandButton>
          <CommandButton variant="secondary">
            Decrypt Event
          </CommandButton>
        </div>

        {/* Stats bar */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
          {[
            { value: '24', label: 'HOURS' },
            { value: '500+', label: 'HACKERS' },
            { value: '₹50K+', label: 'PRIZE POOL' },
            { value: '10+', label: 'MENTORS' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="font-mono text-2xl md:text-3xl lg:text-4xl font-bold text-primary drop-shadow-[0_0_15px_rgba(0,200,83,0.4)] counter">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-muted-foreground tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs text-muted-foreground">SCROLL.DOWN</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
