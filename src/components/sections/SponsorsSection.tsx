import SectionHeader from '../SectionHeader';

const sponsors = [
  { name: 'TechCorp', tier: 'platinum' },
  { name: 'CodeLabs', tier: 'platinum' },
  { name: 'DataFlow', tier: 'gold' },
  { name: 'CloudBase', tier: 'gold' },
  { name: 'DevTools', tier: 'gold' },
  { name: 'StartupX', tier: 'silver' },
  { name: 'AI Labs', tier: 'silver' },
  { name: 'CyberNet', tier: 'silver' },
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-16 md:py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <SectionHeader
          label="// SECTION_05"
          title="System Integrations"
          description="Partnered with industry leaders who power our hackathon ecosystem."
        />

        {/* Platinum tier */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-primary uppercase tracking-wider">TIER.PLATINUM</span>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {sponsors.filter(s => s.tier === 'platinum').map((sponsor, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-center"
              >
                <span className="text-2xl font-heading font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gold tier */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-amber-500 uppercase tracking-wider">TIER.GOLD</span>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent"></div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {sponsors.filter(s => s.tier === 'gold').map((sponsor, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-lg bg-card border border-border hover:border-amber-500/50 transition-all duration-300 flex items-center justify-center"
              >
                <span className="text-lg font-heading font-semibold text-muted-foreground group-hover:text-amber-500 transition-colors">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Silver tier */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">TIER.SILVER</span>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-400/30 to-transparent"></div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {sponsors.filter(s => s.tier === 'silver').map((sponsor, idx) => (
              <div
                key={idx}
                className="group p-4 rounded-lg bg-card/50 border border-border/50 hover:border-slate-400/50 transition-all duration-300 flex items-center justify-center"
              >
                <span className="text-sm font-heading text-muted-foreground group-hover:text-slate-300 transition-colors">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Become a sponsor CTA */}
        <div className="mt-12 text-center">
          <p className="font-mono text-sm text-muted-foreground mb-4">
            {'// Interested in powering the next generation of innovators?'}
          </p>
          <button className="font-mono text-sm text-primary hover:text-primary/80 transition-colors border-b border-primary/30 hover:border-primary pb-1">
            SPONSOR.REQUEST()
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
