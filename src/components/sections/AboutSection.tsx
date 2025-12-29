import SectionHeader from '../SectionHeader';
import TerminalCard from '../TerminalCard';
import { Code2, Users, Lightbulb, Rocket } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Push boundaries and create solutions that challenge conventional thinking.',
  },
  {
    icon: Code2,
    title: 'Problem Solving',
    description: 'Apply algorithmic thinking to real-world challenges with elegant code.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Form teams, share knowledge, and build together in a high-energy environment.',
  },
  {
    icon: Rocket,
    title: 'Engineering Mindset',
    description: 'Approach problems systematically with scalable, production-ready solutions.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <SectionHeader
          label="// SECTION_01"
          title="Problem Definition"
          description="GEEKVERSE 2.0 is not just a hackathon — it's a 24-hour engineering challenge designed to test your limits and unlock your potential."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <TerminalCard 
              key={idx} 
              title={`module_${String(idx + 1).padStart(2, '0')}.tsx`}
              className="fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` } as React.CSSProperties}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 font-heading">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </TerminalCard>
          ))}
        </div>

        {/* Code block decoration */}
        <div className="mt-12 p-6 rounded-lg bg-card/50 border border-border font-mono text-sm">
          <div className="text-muted-foreground mb-2">{'// Initialize hackathon parameters'}</div>
          <div>
            <span className="text-purple-400">const</span>
            <span className="text-foreground"> geekverse </span>
            <span className="text-primary">=</span>
            <span className="text-foreground"> {'{'}</span>
          </div>
          <div className="pl-4">
            <span className="text-foreground">duration: </span>
            <span className="text-amber-400">'24 hours'</span>
            <span className="text-foreground">,</span>
          </div>
          <div className="pl-4">
            <span className="text-foreground">mode: </span>
            <span className="text-amber-400">'offline'</span>
            <span className="text-foreground">,</span>
          </div>
          <div className="pl-4">
            <span className="text-foreground">teams: </span>
            <span className="text-primary">true</span>
            <span className="text-foreground">,</span>
          </div>
          <div className="pl-4">
            <span className="text-foreground">innovation: </span>
            <span className="text-primary">Infinity</span>
          </div>
          <div>
            <span className="text-foreground">{'};'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
