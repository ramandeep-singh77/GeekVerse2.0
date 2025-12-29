import SectionHeader from '../SectionHeader';
import { User, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const judges = [
  { name: 'Dr. Arun Kumar', role: 'AI Research Lead', org: 'Tech Corp' },
  { name: 'Priya Sharma', role: 'Senior Engineer', org: 'StartupX' },
  { name: 'Vikram Singh', role: 'CTO', org: 'Innovation Labs' },
  { name: 'Sneha Patel', role: 'Product Director', org: 'DataFlow Inc' },
  { name: 'Rajesh Gupta', role: 'Tech Lead', org: 'CloudTech' },
  { name: 'Kavita Menon', role: 'VP Engineering', org: 'FinStack' },
];

const mentors = [
  { name: 'Rahul Verma', role: 'Full Stack Developer', org: 'CodeBase' },
  { name: 'Anita Desai', role: 'ML Engineer', org: 'AI Dynamics' },
  { name: 'Karthik Nair', role: 'Security Expert', org: 'CyberShield' },
  { name: 'Meera Joshi', role: 'UX Architect', org: 'DesignFlow' },
  { name: 'Suresh Iyer', role: 'DevOps Lead', org: 'ScaleUp' },
  { name: 'Deepa Krishnan', role: 'Data Scientist', org: 'DataMinds' },
];

interface Person {
  name: string;
  role: string;
  org: string;
}

const PersonCard = ({ person, type, isActive }: { person: Person; type: 'judge' | 'mentor'; isActive: boolean }) => (
  <div 
    className={`group p-5 rounded-lg bg-card/80 backdrop-blur-sm border transition-all duration-500 transform ${
      isActive 
        ? 'border-primary/50 scale-100 opacity-100 shadow-[0_0_30px_rgba(0,200,83,0.15)]' 
        : 'border-border/50 scale-95 opacity-50'
    }`}
  >
    <div className="flex items-center gap-4">
      <div className={`w-14 h-14 rounded-lg border flex items-center justify-center transition-all duration-300 ${
        isActive 
          ? 'bg-primary/20 border-primary/40' 
          : 'bg-primary/10 border-primary/20'
      }`}>
        <User className={`w-7 h-7 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-primary/60'}`} />
      </div>
      <div>
        <h4 className="font-semibold text-foreground text-lg">{person.name}</h4>
        <p className="text-sm text-muted-foreground">{person.role}</p>
        <p className="text-xs text-primary font-mono">{person.org}</p>
      </div>
    </div>
    <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
      <span className="font-mono text-xs text-muted-foreground">
        NODE.TYPE: {type.toUpperCase()}
      </span>
      {isActive && (
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-mono text-xs text-primary">ACTIVE</span>
        </span>
      )}
    </div>
  </div>
);

interface CarouselProps {
  items: Person[];
  type: 'judge' | 'mentor';
  title: string;
}

const AutoSlideCarousel = ({ items, type, title }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const getVisibleItems = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + items.length) % items.length;
      visible.push({ item: items[index], position: i, index });
    }
    return visible;
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-3 h-3 rounded-full animate-pulse ${type === 'judge' ? 'bg-primary' : 'bg-accent'}`}></div>
        <h3 className="font-mono text-lg text-foreground">{title}</h3>
        <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
        <div className="font-mono text-xs text-muted-foreground">
          [{String(currentIndex + 1).padStart(2, '0')}/{String(items.length).padStart(2, '0')}]
        </div>
      </div>

      {/* Carousel container */}
      <div className="relative overflow-hidden py-4">
        <div className="flex items-center justify-center gap-6">
          {getVisibleItems().map(({ item, position, index }) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-out ${
                position === 0 
                  ? 'w-80 z-20' 
                  : 'w-64 z-10'
              }`}
              style={{
                transform: `translateX(${position * 20}px) scale(${position === 0 ? 1 : 0.85})`,
              }}
            >
              <PersonCard person={item} type={type} isActive={position === 0} />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-lg bg-card/80 border border-border hover:border-primary/50 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-primary" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-lg bg-card/80 border border-border hover:border-primary/50 transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-primary" />
        </button>
      </div>

      {/* Progress indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 ${
              idx === currentIndex 
                ? 'w-8 h-2 bg-primary rounded-full' 
                : 'w-2 h-2 bg-muted-foreground/30 rounded-full hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="flex items-center justify-center gap-2 mt-3">
        <span className={`w-1.5 h-1.5 rounded-full ${isAutoPlaying ? 'bg-primary animate-pulse' : 'bg-muted-foreground/30'}`}></span>
        <span className="font-mono text-xs text-muted-foreground">
          {isAutoPlaying ? 'AUTO.SCROLL' : 'MANUAL.MODE'}
        </span>
      </div>
    </div>
  );
};

const JudgesSection = () => {
  return (
    <section id="judges" className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <SectionHeader
          label="// SECTION_03"
          title="Review & Validation Layer"
          description="Industry experts who will evaluate your solutions and guide your development."
        />

        {/* Judges Carousel */}
        <div className="mb-16">
          <AutoSlideCarousel items={judges} type="judge" title="JUDGES.ARRAY" />
        </div>

        {/* Mentors Carousel */}
        <div>
          <AutoSlideCarousel items={mentors} type="mentor" title="MENTORS.ARRAY" />
        </div>
      </div>
    </section>
  );
};

export default JudgesSection;
