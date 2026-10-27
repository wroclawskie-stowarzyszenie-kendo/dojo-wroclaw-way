import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, CheckCircle, Info, ExternalLink, Bus } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { asset } from "@/lib/utils";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main Content */}
      <main className="py-12 px-6 pt-20">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Hero Section */}
          <div 
            className="relative text-center space-y-6 py-24 px-8 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${asset('lovable-uploads/42fd5a79-57c6-41d5-8fe7-04aec3c4f00d.png')})`,
          backgroundSize: '120%',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-zen font-light text-white mb-6">
                Harmonogram Treningów
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Odkryj tradycyjne japońskie sztuki walki w sercu Wrocławia. Sprawdź harmonogram treningów, poznaj lokalizację i rozpocznij swoją podróż z mieczem.
              </p>
            </div>
          </div>

          {/* Recruitment — three disciplines */}
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-crimson/10 text-crimson text-sm font-medium mb-4">
                <Calendar className="w-4 h-4" />
                Nabory 2026/2027
              </div>
              <h3 className="text-3xl md:text-4xl font-zen font-medium text-soft-white">
                Wybierz swoją drogę
              </h3>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 items-stretch">
              <Card className="relative p-6 bg-card border-border hover:border-crimson transition-smooth hover:shadow-crimson flex flex-col">
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-[0.15em] text-crimson bg-crimson/10 border border-crimson/40 rounded-sm px-3 py-1 backdrop-blur-sm glow-crimson-soft">
                  12 tygodni
                </span>
                <div className="mb-5">
                  <p className="text-3xl font-zen text-crimson mb-2">剣道</p>
                  <h4 className="text-2xl font-zen font-medium text-soft-white">Kendo od podstaw</h4>
                </div>

                <p className="text-3xl font-zen text-soft-white mb-4">28.09.2026</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Kurs prowadzony przez sensei Wiesława Biela 6 dan kendo renshi z zespołem instruktorów. Zakończysz go egzaminem na 5 kyu.
                </p>

                <div className="space-y-3 border-t border-border pt-5 mb-6 text-sm">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-crimson mt-0.5" />
                    <span>Poniedziałki i piątki, 18:30–19:30</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-crimson mt-0.5" />
                    <span>SP nr 33, ul. Kolista 17</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-crimson mt-0.5" />
                    <span>290 zł za cały kurs</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Nie potrzebujesz sprzętu ani doświadczenia. Przez cały wrzesień możesz bezpłatnie obejrzeć i spróbować treningu.
                </p>

                <Button variant="hero" size="lg" className="w-full mt-auto" asChild>
                  <a href="https://forms.gle/noQV4PZg1HJmT9Zx5" target="_blank" rel="noopener noreferrer">
                    Zapisz się na Kendo
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </Card>

              <Card className="relative p-6 bg-card border-border hover:border-indigo transition-smooth hover:shadow-indigo flex flex-col">
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-[0.15em] text-indigo bg-indigo/10 border border-indigo/40 rounded-sm px-3 py-1 backdrop-blur-sm glow-indigo-soft">
                  Nowa grupa
                </span>
                <div className="mb-5">
                  <p className="text-3xl font-zen text-indigo mb-2">杖道</p>
                  <h4 className="text-2xl font-zen font-medium text-soft-white">Jodo od podstaw</h4>
                </div>

                <p className="text-3xl font-zen text-soft-white mb-4">05.10.2026</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Poznaj walkę drewnianym kijem przeciwko partnerowi uzbrojonemu w miecz. Trening rozwija precyzję, dystans, wyczucie momentu i kontrolę ruchu.
                </p>

                <div className="space-y-3 border-t border-border pt-5 mb-6 text-sm">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-indigo mt-0.5" />
                    <span>Poniedziałek, 18:30–19:30</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-indigo mt-0.5" />
                    <span>SP nr 33, ul. Kolista 17</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo mt-0.5" />
                    <span>ZNKR Jodo i Shinto Muso Ryu Jodo</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Nie potrzebujesz wcześniejszego doświadczenia — wszystkie techniki poznasz od podstaw.
                </p>

                <Button variant="outline" size="lg" className="w-full mt-auto" asChild>
                  <a href="https://www.facebook.com/events/2856227998084495/" target="_blank" rel="noopener noreferrer">
                    Zobacz wydarzenie Jodo
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </Card>

              <Card className="relative p-6 bg-card border-border hover:border-accent transition-smooth hover:shadow-elegant flex flex-col">
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-[0.15em] text-accent bg-accent/10 border border-accent/40 rounded-sm px-3 py-1 backdrop-blur-sm glow-accent-soft">
                  Nowa grupa
                </span>
                <div className="mb-5">
                  <p className="text-3xl font-zen text-accent mb-2">居合道</p>
                  <h4 className="text-2xl font-zen font-medium text-soft-white">Iaido od podstaw</h4>
                </div>

                <p className="text-3xl font-zen text-soft-white mb-4">07.10.2026</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Poznaj japońską sztukę dobywania miecza. Trening rozwija koncentrację, właściwą postawę, precyzję ruchu i spokój umysłu.
                </p>

                <div className="space-y-3 border-t border-border pt-5 mb-6 text-sm">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-accent mt-0.5" />
                    <span>Środa, 7 października</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5" />
                    <span>SP nr 33, ul. Kolista 17</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                    <span>ZNKR Iaido i tradycyjne formy koryu</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Nie potrzebujesz wcześniejszego doświadczenia — zaczynamy od płynnego i bezpiecznego dobycia miecza.
                </p>

                <Button variant="outline" size="lg" className="w-full mt-auto" asChild>
                  <a href="https://www.facebook.com/events/1623553709564972/" target="_blank" rel="noopener noreferrer">
                    Zobacz wydarzenie Iaido
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </Card>
            </div>
          </div>

          {/* Location Section - Enhanced */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-zen font-medium text-soft-white">
                  Lokalizacja Dojo
                </h3>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-card border-border">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h4 className="text-xl font-zen font-medium text-soft-white">Adres Treningów</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p className="font-medium">Szkoła Podstawowa nr 33</p>
                        <p>ul. Kolista 17</p>
                        <p>54-152 Wrocław</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <div className="flex items-start space-x-4">
                    <Bus className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h4 className="text-xl font-zen font-medium text-soft-white">Komunikacja Miejska</h4>
                      <div className="text-muted-foreground space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">Autobusy:</span>
                          <div className="flex flex-wrap gap-1">
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">101</span>
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">102</span>
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">103</span>
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">104</span>
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">126</span>
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">127</span>
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">132</span>
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">144</span>
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">152</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">Tramwaje:</span>
                          <div className="flex flex-wrap gap-1">
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">19</span>
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">21</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">Parking:</span>
                          <span>Dostępny w okolicy szkoły</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h4 className="text-xl font-zen font-medium text-soft-white">Godziny Treningów</h4>
                      <div className="text-muted-foreground grid grid-cols-1 gap-2 sm:grid-cols-[auto,1fr]">
                        <div className="font-medium text-crimson">Kendo:</div>
                        <div className="sm:text-right">Poniedziałki 18:30 - 20:30</div>
                        <div className="font-medium text-indigo">Jodo:</div>
                        <div className="sm:text-right">Poniedziałki 18:30 - 20:30</div>
                        <div className="font-medium text-indigo">Iaido:</div>
                        <div className="sm:text-right">Środy 18:30 - 20:30</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-zen font-medium text-soft-white">
                  Mapa Lokalizacji
                </h3>
              </div>

              <Card className="p-6 bg-gradient-subtle border-border">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden border border-border shadow-elegant" style={{ height: '47vh' }}>
                    <iframe
                      src="https://www.google.com/maps?q=Szko%C5%82a+Podstawowa+nr+33%2C+ul.+Kolista+17%2C+54-152+Wroc%C5%82aw&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokalizacja treningów - Szkoła Podstawowa nr 33, ul. Kolista 17, Wrocław"
                    ></iframe>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Additional Info Section */}
          <Card className="p-8 bg-gradient-subtle border-border">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-3">
                <Info className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-zen font-medium text-soft-white">
                  Dodatkowe Informacje
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                <div className="space-y-4">
                  <h4 className="font-zen font-medium text-accent">Wyposażenie i Udogodnienia</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Wyposażenie treningowe dostępne</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Pierwszy trening bezpłatny</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Instruktaż dla początkujących</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-zen font-medium text-accent">Dla nowych osób</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Brak wymagań wstępnych</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Przyjazna atmosfera</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Doświadczeni instruktorzy</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <Link to="/#discipline-contacts">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="text-lg px-12 py-4 shadow-crimson hover:shadow-indigo"
                  >
                    Skontaktuj się z nami
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
