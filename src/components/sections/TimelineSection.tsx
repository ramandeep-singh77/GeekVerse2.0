import SectionHeader from '../SectionHeader';
import { Play, Users, Lightbulb, Code, MessageSquare, Flag } from 'lucide-react';

const steps = [
  { icon: Play, title: 'Initialize Registration', time: 'T-14 Days', status: 'active' },
  { icon: Users, title: 'Form Teams', time: 'T-7 Days', status: 'pending' },
  { icon: Lightbulb, title: 'Ideation Phase', time: 'Day 1 - 0:00', status: 'pending' },
  { icon: Code, title: 'Build Sprint', time: 'Day 1 - 2:00', status: 'pending' },
  { icon: MessageSquare, title: 'Mentor Review', time: 'Day 1 - 18:00', status: 'pending' },
  { icon: Flag, title: 'Final Commit & Pitch', time: 'Day 2 - 0:00', status: 'pending' },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <SectionHeader
          label="// SECTION_06"
          title="Execution Pipeline"
          description="Your journey from registration to victory. Each phase builds upon the last."
        />

        <div className="relative">
          {/* Desktop Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"></div>
          
          {/* Mobile Timeline - Horizontal line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-border md:hidden"></div>
          
          {/* Data flow effect - Desktop */}
          <div className="absolute left-1/2 top-0 w-px h-full -translate-x-1/2 hidden md:block overflow-hidden">
            <div className="w-full h-20 bg-gradient-to-b from-transparent via-primary to-transparent animate-[flow_3s_linear_infinite]"></div>
          </div>

          {/* Data flow effect - Mobile */}
          <div className="absolute top-8 left-0 w-full h-px md:hidden overflow-hidden">
            <div className="h-full w-20 bg-gradient-to-r from-transparent via-primary to-transparent animate-[flow_3s_linear_infinite]"></div>
          </div>

          {/* Mobile Layout - Grid */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative"
              >
                {/* Mobile Node */}
                <div className="flex justify-center mb-3">
                  <div className="w-8 h-8 rounded-md bg-card border-2 border-border flex items-center justify-center z-10">
                    <step.icon className={`w-4 h-4 ${
                      step.status === 'active' ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                  </div>
                </div>

                {/* Mobile Content */}
                <div className={`p-3 rounded-md bg-card border border-border text-center ${
                  step.status === 'active' ? 'border-primary/50 glow-sm' : ''
                }`}>
                  <div className="mb-1">
                    <span className={`font-mono text-xs ${
                      step.status === 'active' ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {step.time}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground font-heading leading-tight">
                    {step.title}
                  </h3>
                  {step.status === 'active' && (
                    <div className="mt-1 font-mono text-xs text-primary flex items-center justify-center gap-1">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                      </span>
                      <span className="text-xs">ACTIVE</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block space-y-0">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`relative flex items-center ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`inline-block p-6 rounded-lg bg-card border border-border ${
                    step.status === 'active' ? 'border-primary/50 glow-sm' : ''
                  }`}>
                    <div className={`flex items-center gap-3 mb-2 ${
                      idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}>
                      <span className={`font-mono text-xs ${
                        step.status === 'active' ? 'text-primary' : 'text-muted-foreground'
                      }`}>
                        {step.time}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground font-heading">
                      {step.title}
                    </h3>
                    {step.status === 'active' && (
                      <div className="mt-2 font-mono text-xs text-primary flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        CURRENTLY EXECUTING
                      </div>
                    )}
                  </div>
                </div>

                {/* Desktop Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-lg bg-card border-2 border-border flex items-center justify-center z-10">
                  <step.icon className={`w-5 h-5 ${
                    step.status === 'active' ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                </div>

                {/* Spacer for the other side - Desktop only */}
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-12 md:mt-16">
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-2">
            <span>PROGRESS.STATUS</span>
            <span>1 / 6 PHASES</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-[16%] bg-primary rounded-full execution-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
