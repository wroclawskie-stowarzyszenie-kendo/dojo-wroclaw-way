import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Clock, Users, CheckCircle, Info } from "lucide-react";
import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border shadow-elegant sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-3 hover:opacity-80 transition-fast"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground" />
              <div className="flex items-center space-x-2">
                <img src="/lovable-uploads/a5067aa6-7595-4441-be68-e5c88d4706b8.png" alt="WSK Logo" className="h-8 w-8" />
                <span className="font-zen font-medium text-soft-white">WSK</span>
              </div>
            </Link>
            <h1 className="text-xl font-zen font-medium text-soft-white">Harmonogram</h1>
            <div className="w-20"></div> {/* Spacer for balance */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-zen font-light text-soft-white">
              Harmonogram Treningów
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Odkryj tradycyjne japońskie sztuki walki w sercu Wrocławia. Sprawdź harmonogram treningów, poznaj lokalizację i rozpocznij swoją podróż z mieczem.
            </p>
          </div>

          {/* Season Info Cards - Larger Layout */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-subtle border-border text-center group hover:shadow-crimson transition-smooth">
              <div className="space-y-4">
                <div className="text-5xl font-zen text-crimson mb-4 group-hover:scale-110 transition-transform">📅</div>
                <h3 className="text-2xl font-zen font-medium text-soft-white mb-3">Start Sezonu</h3>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-accent">15 września 2025</p>
                  <p className="text-lg text-muted-foreground">18:30</p>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mt-4">
                  <Calendar className="w-4 h-4" />
                  <span>Sezon 2025/2026</span>
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

          {/* Calendar Section - Enhanced */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-zen font-medium text-soft-white">
                Kalendarz Treningów
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Sprawdź aktualne terminy treningów wszystkich dyscyplin. Kalendarz jest na bieżąco aktualizowany o ewentualne zmiany.
              </p>
            </div>

            <Card className="p-8 bg-gradient-subtle border-border">
              <div className="h-full rounded-lg overflow-hidden border border-border shadow-elegant bg-card" style={{ minHeight: '600px' }}>
                <iframe
                  src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FWarsaw&bgcolor=%23ffffff&src=Y19iMDgxYTFlNTY3MGY5MDVmZjNlMGVlOGNiODFlOTMyNGFhM2NlOGJhYWYxYjYyODVlM2QyNmVhMDRjYmI2ODgyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23D50000&mode=MONTH&showWeekends=false"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Kalendarz treningów WSK Wrocław"
                ></iframe>
              </div>
            </Card>
          </div>

          {/* Location Section - Enhanced */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-zen font-medium text-soft-white">
                  Lokalizacja Dojo
                </h3>
                <p className="text-lg text-muted-foreground">
                  Nasze treningi odbywają się w nowoczesnej sali gimnastycznej z pełnym wyposażeniem do japońskich sztuk walki.
                </p>
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
                          <div className="flex space-x-2">
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">106</span>
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">107</span>
                            <span className="bg-gradient-subtle px-2 py-1 rounded text-sm">109</span>
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
                      <div className="text-muted-foreground space-y-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-crimson">Kendo:</span>
                          <span>Poniedziałek, Środa, Piątek 18:30-20:30</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-indigo">Iaido:</span>
                          <span>Wtorek, Czwartek 19:00-21:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-accent">Jodo:</span>
                          <span>Sobota 10:00-12:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <Card className="p-8 bg-gradient-subtle border-border">
              <div className="space-y-6">
                <h4 className="text-2xl font-zen font-medium text-soft-white text-center">
                  Mapa Lokalizacji
                </h4>
                <div className="h-full rounded-lg overflow-hidden border border-border shadow-elegant" style={{ minHeight: '500px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.4!2d17.031645!3d51.119867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc277a8b6c4e5%3A0x1234567890abcdef!2sKolista%2017%2C%2054-152%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1640995200000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokalizacja treningów - ul. Kolista 17, Wrocław"
                  ></iframe>
                </div>
              </div>
            </Card>
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
                  <h4 className="font-zen font-medium text-accent">Wyposażenie</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Profesjonalne maty tatami</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Szatnie z prysznicami</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Wyposażenie treningowe dostępne</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-zen font-medium text-accent">Dla nowych osób</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Pierwszy trening bezpłatny</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Instruktaż dla początkujących</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Brak wymagań wstępnych</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <Link to="/#contact">
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
    </div>
  );
};

export default Schedule;