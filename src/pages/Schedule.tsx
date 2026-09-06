import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Users, CheckCircle, Info } from "lucide-react";
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

          {/* Season Start Highlight */}
          <Card className="p-10 md:p-14 bg-gradient-subtle border-border text-center relative overflow-hidden">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-crimson/10 text-crimson px-4 py-2 rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4" />
                <span>Nowy sezon</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-zen font-light text-soft-white">
                Start sezonu 2026/2027
              </h3>
              <p className="text-6xl md:text-7xl font-zen text-accent">28.09</p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Zaczynamy nowy sezon treningowy! To idealny moment, żeby dołączyć — pierwszy trening jest bezpłatny i nie wymaga żadnego doświadczenia ani sprzętu. Wystarczy strój sportowy i dobre chęci.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Pierwszy trening bezpłatny</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span>Bez ograniczeń wiekowych</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>19:00 - 21:00</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Season Info Cards - Larger Layout */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-subtle border-border text-center group hover:shadow-crimson transition-smooth">
              <div className="space-y-4">
                <div className="text-5xl font-zen text-crimson mb-4 group-hover:scale-110 transition-transform">📅</div>
                <h3 className="text-2xl font-zen font-medium text-soft-white mb-3">Sezon 2026/2027</h3>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-accent">Start 28 września</p>
                  <p className="text-lg text-muted-foreground">19:00 - 21:00</p>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mt-4">
                  <Calendar className="w-4 h-4" />
                  <span>Treningi w całym roku szkolnym</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-subtle border-border text-center group hover:shadow-indigo transition-smooth">
              <div className="space-y-4">
                <div className="text-5xl font-zen text-indigo mb-4 group-hover:scale-110 transition-transform">🚪</div>
                <h3 className="text-2xl font-zen font-medium text-soft-white mb-3">Nabór Otwarty</h3>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-accent">Cały rok</p>
                  <p className="text-sm text-muted-foreground">Możesz dołączyć w każdym momencie</p>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mt-4">
                  <Users className="w-4 h-4" />
                  <span>Bez ograniczeń wiekowych</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-subtle border-border text-center group hover:shadow-elegant transition-smooth">
              <div className="space-y-4">
                <div className="text-5xl font-zen text-accent mb-4 group-hover:scale-110 transition-transform">🎯</div>
                <h3 className="text-2xl font-zen font-medium text-soft-white mb-3">Pierwszy Trening</h3>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-accent">Bezpłatny</p>
                  <p className="text-sm text-muted-foreground">Poznaj naszą społeczność</p>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mt-4">
                  <CheckCircle className="w-4 h-4" />
                  <span>Bez zobowiązań</span>
                </div>
              </div>
            </Card>
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
                    <div className="text-2xl flex-shrink-0 mt-1">🚌</div>
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
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">152</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">Tramwaje:</span>
                          <div className="flex flex-wrap gap-1">
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">12</span>
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">18</span>
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">19</span>
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">21</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">Parking:</span>
                          <span>Dostępny na terenie szkoły</span>
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
                        <div className="sm:text-right">Poniedziałki 19:00 - 21:00</div>
                        <div className="font-medium text-indigo">Iaido/Jodo:</div>
                        <div className="sm:text-right">Wtorki 19:00 - 21:00</div>
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
