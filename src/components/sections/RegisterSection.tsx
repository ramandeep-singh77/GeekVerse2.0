import CommandButton from '../CommandButton';
import { ArrowRight, FileText } from 'lucide-react';

const RegisterSection = () => {
  return (
    <section id="register" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          {/* Terminal header */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-card border border-border">
            <span className="font-mono text-xs text-muted-foreground">$</span>
            <span className="font-mono text-sm text-primary">READY_TO_EXECUTE</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-6">
            Initialize Your
            <span className="text-gradient block">Registration</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            The system is ready to accept new participants. Join 500+ developers 
            who are ready to build, compete, and innovate.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <CommandButton variant="primary" className="text-lg px-8 py-4">
              <span>Initialize Registration</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </CommandButton>
            <CommandButton variant="secondary" className="text-lg px-8 py-4">
              <FileText className="w-5 h-5 mr-2" />
              <span>Access Documentation</span>
            </CommandButton>
          </div>

          {/* Code block */}
          <div className="inline-block p-6 rounded-lg bg-card/80 border border-border text-left font-mono text-sm">
            <div className="text-muted-foreground mb-2">{'// Registration status'}</div>
            <div>
              <span className="text-purple-400">const</span>
              <span className="text-foreground"> registration </span>
              <span className="text-primary">=</span>
              <span className="text-foreground"> await </span>
              <span className="text-amber-400">geekverse</span>
              <span className="text-foreground">.register();</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-muted-foreground">{'>'}</span>
              <span className="text-primary">Status:</span>
              <span className="text-foreground">OPEN</span>
              <span className="w-2 h-4 bg-primary/50 animate-pulse"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
