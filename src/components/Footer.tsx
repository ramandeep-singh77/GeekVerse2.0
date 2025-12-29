import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-heading font-bold text-2xl mb-4">
              <span className="text-primary">GEEK</span>VERSE 2.0
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              A 24-hour engineering hackathon by GFG Campus Body. 
              Where innovation meets execution.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors">
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-sm text-primary mb-4">QUICK_LINKS</h4>
            <ul className="space-y-2">
              {['About', 'Domains', 'Timeline', 'Prizes', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-sm text-primary mb-4">CONTACT</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>geekverse@gfg.edu</li>
              <li>+91 12345 67890</li>
              <li>GFG Campus</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-muted-foreground">
            © 2025 GEEKVERSE 2.0. All rights reserved.
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            Powered by GFG Campus Body
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
