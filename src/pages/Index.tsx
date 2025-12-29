import { useEffect } from 'react';
import VideoBackground from '@/components/VideoBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import DomainsSection from '@/components/sections/DomainsSection';
import JudgesSection from '@/components/sections/JudgesSection';
import PrizesSection from '@/components/sections/PrizesSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import TimelineSection from '@/components/sections/TimelineSection';
import FAQSection from '@/components/sections/FAQSection';
import RegisterSection from '@/components/sections/RegisterSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title and meta
    document.title = 'GEEKVERSE 2.0 | 24-Hour Engineering Hackathon by GFG';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <VideoBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <DomainsSection />
          <TimelineSection />
          <JudgesSection />
          <PrizesSection />
          <SponsorsSection />
          <FAQSection />
          <RegisterSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
