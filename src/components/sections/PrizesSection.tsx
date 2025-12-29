import SectionHeader from '../SectionHeader';
import { Trophy, Gift, Award, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const prizes = [
  { 
    icon: Trophy, 
    title: 'Grand Prize', 
    value: '₹25,000', 
    description: 'First place winner receives the ultimate recognition',
    highlight: true 
  },
  { 
    icon: Award, 
    title: 'Runner Up', 
    value: '₹15,000', 
    description: 'Second place excellence award' 
  },
  { 
    icon: Star, 
    title: 'Third Place', 
    value: '₹10,000', 
    description: 'Third place recognition' 
  },
  { 
    icon: Gift, 
    title: 'Swag Pack', 
    value: 'ALL', 
    description: 'Exclusive merchandise for all participants' 
  },
];

const AnimatedCounter = ({ value, suffix = '' }: { value: string; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  
  useEffect(() => {
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    let start = 0;
    const duration = 2000;
    const increment = numericValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue('₹' + Math.floor(start).toLocaleString());
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, numericValue]);

  return <span className="counter">{displayValue}{suffix}</span>;
};

const PrizesSection = () => {
  return (
    <section id="prizes" className="py-16 md:py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <SectionHeader
          label="// SECTION_04"
          title="Output & Rewards"
          description="Exceptional innovation deserves exceptional recognition. Here's what awaits the top performers."
        />

        {/* Mobile Layout - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {prizes.map((prize, idx) => (
            <div
              key={idx}
              className={`relative aspect-square p-3 rounded-lg border transition-all duration-300 group ${
                prize.highlight 
                  ? 'bg-primary/10 border-primary/50 hover:border-primary' 
                  : 'bg-card border-border hover:border-primary/30'
              }`}
            >
              {/* Top reward badge */}
              {prize.highlight && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-primary-foreground font-mono text-xs rounded">
                  TOP
                </div>
              )}

              <div className="text-center h-full flex flex-col justify-between">
                <div className={`inline-flex p-2 rounded-lg mb-2 ${
                  prize.highlight ? 'bg-primary/20' : 'bg-muted'
                }`}>
                  <prize.icon className={`w-5 h-5 ${prize.highlight ? 'text-primary' : 'text-primary/70'}`} />
                </div>

                <h3 className={`text-sm font-semibold font-heading mb-1 ${
                  prize.highlight ? 'text-primary' : 'text-foreground'
                }`}>
                  {prize.title}
                </h3>

                <div className={`text-lg font-mono font-bold mb-1 ${
                  prize.highlight ? 'text-primary text-glow' : 'text-foreground'
                }`}>
                  <AnimatedCounter value={prize.value} />
                </div>

                <p className="text-xs text-muted-foreground">
                  {prize.description}
                </p>
              </div>

              {/* Execution line effect */}
              {prize.highlight && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted overflow-hidden rounded-b-lg">
                  <div className="h-full bg-primary execution-line"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {prizes.map((prize, idx) => (
            <div
              key={idx}
              className={`relative p-6 rounded-lg border transition-all duration-300 group ${
                prize.highlight 
                  ? 'bg-primary/10 border-primary/50 hover:border-primary' 
                  : 'bg-card border-border hover:border-primary/30'
              }`}
            >
              {/* Top reward badge */}
              {prize.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground font-mono text-xs rounded">
                  TOP.REWARD
                </div>
              )}

              <div className="text-center">
                <div className={`inline-flex p-4 rounded-xl mb-4 ${
                  prize.highlight ? 'bg-primary/20' : 'bg-muted'
                }`}>
                  <prize.icon className={`w-8 h-8 ${prize.highlight ? 'text-primary' : 'text-primary/70'}`} />
                </div>

                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {prize.title}
                </h3>

                <div className={`text-3xl font-mono font-bold mb-3 ${
                  prize.highlight ? 'text-primary text-glow' : 'text-foreground'
                }`}>
                  <AnimatedCounter value={prize.value} />
                </div>

                <p className="text-sm text-muted-foreground">
                  {prize.description}
                </p>
              </div>

              {/* Execution line effect */}
              {prize.highlight && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted overflow-hidden rounded-b-lg">
                  <div className="h-full bg-primary execution-line"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional perks */}
        <div className="mt-12 p-6 rounded-lg bg-card/50 border border-border">
          <div className="font-mono text-sm text-muted-foreground mb-4">{'// Additional perks for all participants'}</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Certificates', 'Networking', 'Workshops', 'Food & Beverages'].map((perk, idx) => (
              <div key={idx} className="flex items-center gap-2 text-foreground">
                <span className="text-primary">✓</span>
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;