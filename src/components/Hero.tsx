import { Button } from "@/components/ui/button";
const heroImage = "/lovable-uploads/2839045b-36eb-4dd1-abf1-d4441bddf593.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Kanji Background Element */}
      <div className="kanji-bg absolute inset-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-zen font-light mb-6 fade-in text-soft-white">
          武道館
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-muted-foreground font-normal">
            Dojo Sztuk Walki we Wrocławiu
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl font-zen font-light mb-8 text-muted-foreground fade-in max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
          Odkryj Drogę Miecza
          <span className="block text-lg mt-2 text-crimson">
            剣道 • 居合道 • 杖道
          </span>
        </p>

        <Button 
          variant="hero"
          size="lg"
          className="fade-in shadow-crimson hover:shadow-indigo transition-smooth font-zen text-lg px-8 py-6"
          style={{ animationDelay: '0.6s' }}
          onClick={() => scrollToSection('disciplines')}
        >
          Rozpocznij Swoją Podróż
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;