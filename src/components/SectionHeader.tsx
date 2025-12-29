interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

const SectionHeader = ({ label, title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="w-8 h-px bg-primary/50"></span>
        <span className="font-mono text-xs text-primary uppercase tracking-widest">{label}</span>
        <span className="w-8 h-px bg-primary/50"></span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
