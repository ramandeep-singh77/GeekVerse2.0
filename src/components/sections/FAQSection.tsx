import SectionHeader from '../SectionHeader';
import { useState } from 'react';
import { ChevronRight, Terminal } from 'lucide-react';

const faqs = [
  {
    question: 'Who can participate in GEEKVERSE 2.0?',
    answer: 'Any student currently enrolled in a college or university can participate. Whether you are a freshman or a postgraduate, if you have a passion for technology and problem-solving, you are welcome to join.',
  },
  {
    question: 'What is the team size requirement?',
    answer: 'Teams must consist of 2-4 members. Solo participation is not allowed as collaboration is a core component of the hackathon experience.',
  },
  {
    question: 'Do I need prior hackathon experience?',
    answer: 'No prior experience is required. GEEKVERSE 2.0 welcomes participants of all skill levels. Mentors will be available throughout the event to guide you.',
  },
  {
    question: 'What should I bring to the hackathon?',
    answer: 'Bring your laptop, charger, and any hardware you might need for your project. We will provide food, beverages, and a productive environment. Don\'t forget your college ID for verification.',
  },
  {
    question: 'Is there a registration fee?',
    answer: 'Registration details including any applicable fees will be announced on our official channels. Stay tuned for updates.',
  },
  {
    question: 'How are projects judged?',
    answer: 'Projects are evaluated based on innovation, technical complexity, practical applicability, presentation quality, and adherence to the chosen theme.',
  },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-start gap-4 text-left hover:bg-muted/30 transition-colors"
      >
        <Terminal className="w-4 h-4 text-primary mt-1 shrink-0" />
        <div className="flex-1">
          <div className="font-mono text-xs text-muted-foreground mb-1">
            ERROR_HANDLER[{String(index).padStart(2, '0')}]
          </div>
          <span className="text-foreground font-medium">{faq.question}</span>
        </div>
        <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="px-4 pb-4 pl-12">
          <div className="p-4 rounded bg-muted/30 border-l-2 border-primary">
            <div className="font-mono text-xs text-primary mb-2">{'// RESOLUTION'}</div>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-4 relative">
      <div className="container max-w-4xl mx-auto">
        <SectionHeader
          label="// SECTION_07"
          title="Exception Handling"
          description="Common queries and their resolutions. If your exception isn't handled here, reach out to us."
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} index={idx} />
          ))}
        </div>

        {/* Additional help */}
        <div className="mt-12 text-center">
          <div className="font-mono text-sm text-muted-foreground mb-4">
            {'// Exception not found in handler?'}
          </div>
          <a 
            href="mailto:contact@geekverse.com" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm"
          >
            <span>THROW.NEW.QUERY()</span>
            <span className="text-foreground">→</span>
            <span className="text-muted-foreground">contact@geekverse.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
