import SectionHeader from '../SectionHeader';
import { Brain, Globe, Shield, Sparkles } from 'lucide-react';

const domains = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Build intelligent systems that learn, adapt, and solve complex problems autonomously.',
    code: 'ai.neural.train()',
  },
  {
    icon: Globe,
    title: 'Web & App Development',
    description: 'Create scalable applications with modern frameworks and cutting-edge technologies.',
    code: 'app.deploy.prod()',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Develop secure systems, detect vulnerabilities, and protect digital infrastructure.',
    code: 'security.fortify()',
  },
  {
    icon: Sparkles,
    title: 'Open Innovation',
    description: 'No boundaries. Any domain. Build what the world needs next.',
    code: 'innovation.unleash()',
  },
];

const DomainsSection = () => {
  return (
    <section id="domains" className="py-16 md:py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <SectionHeader
          label="// SECTION_02"
          title="Execution Domains"
          description="Select your compile target. Each domain represents a unique challenge pathway."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {domains.map((domain, idx) => (
            <div
              key={idx}
              className="group relative p-4 md:p-6 rounded-lg bg-card border border-border overflow-hidden card-hover cursor-pointer"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <domain.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    EXECUTE
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 font-heading">
                  {domain.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {domain.description}
                </p>

                {/* Code line */}
                <div className="font-mono text-sm text-primary/70 flex items-center gap-2">
                  <span className="text-muted-foreground">$</span>
                  <span className="group-hover:text-primary transition-colors">{domain.code}</span>
                  <span className="w-2 h-4 bg-primary/50 animate-pulse"></span>
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg border border-primary/0 group-hover:border-primary/30 transition-colors"></div>
              
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-primary/50 to-transparent transform group-hover:h-12 transition-all"></div>
                <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-primary/50 to-transparent transform group-hover:w-12 transition-all"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
