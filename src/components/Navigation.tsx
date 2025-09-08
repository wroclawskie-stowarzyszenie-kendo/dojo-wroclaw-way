import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-elegant' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-zen font-light text-crimson">武道館</span>
            <span className="text-sm font-zen text-muted-foreground">Wrocław</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('disciplines')}
              className="text-sm font-zen text-muted-foreground hover:text-crimson transition-fast"
            >
              Dyscypliny
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-zen text-muted-foreground hover:text-crimson transition-fast"
            >
              Kontakt
            </button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="border-crimson/30 text-crimson hover:bg-crimson hover:text-primary-foreground"
            >
              Rozpocznij Trening
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;