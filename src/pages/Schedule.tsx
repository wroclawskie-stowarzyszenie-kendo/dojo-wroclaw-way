import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Users, CheckCircle, Info, Mail, Phone, ExternalLink } from "lucide-react";
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

          {/* Course Start Highlight */}
          <Card className="p-10 md:p-14 bg-gradient-subtle border-border text-center relative overflow-hidden">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-crimson/10 text-crimson px-4 py-2 rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4" />
                <span>Nowy sezon 2026/2027</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-zen font-light text-soft-white">
                  Kurs kendo od podstaw
                </h3>
                <p className="text-6xl md:text-7xl font-zen text-accent">28.09.2026</p>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Chcesz zacząć trenować szermierkę japońską? Przyjdź na kurs kendo od podstaw. W ciągu <span className="text-soft-white font-medium">12 tygodni</span> nauczysz się podstaw kendo, technik poruszania się i posługiwania się mieczem — pod okiem wybitnego sensei, trenera reprezentacji Polski, <span className="text-soft-white font-medium">Wiesława Biela 6 dan kendo renshi</span>, z zespołem instruktorów. Kurs zakończysz egzaminem na stopień <span className="text-soft-white font-medium">5 kyu</span>.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Niezależnie od wieku, płci i kondycji możesz zacząć trenować kendo. To kontaktowy sport walki, ale przy zachowaniu środków ostrożności nie grożą Ci kontuzje. W treningu całe ciało pracuje równomiernie — znajdziesz u nas przestrzeń na intensywny wysiłek, udział w zawodach i zdobywanie medali, jak i spokojniejsze treningi dostosowane do Twoich możliwości.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto pt-4">
                <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-card border border-border">
                  <Clock className="w-6 h-6 text-accent" />
                  <span className="text-soft-white font-medium">Poniedziałki i piątki</span>
                  <span className="text-muted-foreground">18:30 – 19:30</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-card border border-border">
                  <Calendar className="w-6 h-6 text-accent" />
                  <span className="text-soft-white font-medium">12 tygodni</span>
                  <span className="text-muted-foreground">od 28 września</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-card border border-border">
                  <MapPin className="w-6 h-6 text-accent" />
                  <span className="text-soft-white font-medium">SP nr 33</span>
                  <span className="text-muted-foreground">ul. Kolista 17</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <span className="text-soft-white font-medium">Cena</span>
                  <span className="text-muted-foreground">290 zł</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href="tel:+48500132644"
                  className="inline-flex items-center space-x-2 text-lg text-soft-white hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+48 500 132 644</span>
                </a>
                <a
                  href="mailto:wsk@kendo.wroclaw.pl"
                  className="inline-flex items-center space-x-2 text-lg text-soft-white hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>wsk@kendo.wroclaw.pl</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://forms.gle/noQV4PZg1HJmT9Zx5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" size="lg" className="text-lg px-10 py-4 shadow-crimson hover:shadow-indigo">
                    Zapisz się na kurs
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>

              <p className="text-sm text-muted-foreground">
                Nie masz sprzętu? Wszystko możesz wypożyczyć na miejscu. Wystarczy swobodny strój sportowy — ćwiczymy na boso. Przed kursem, przez cały wrzesień, zapraszamy na darmowe zajęcia: przyjdź, obejrzyj i spróbuj.
              </p>
            </div>
          </Card>

          {/* Course Info Cards - Larger Layout */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-subtle border-border text-center group hover:shadow-crimson transition-smooth">
              <div className="space-y-4">
                <div className="text-5xl font-zen text-crimson mb-4 group-hover:scale-110 transition-transform">📅</div>
                <h3 className="text-2xl font-zen font-medium text-soft-white mb-3">Start kursu</h3>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-accent">28 września 2026</p>
                  <p className="text-lg text-muted-foreground">Poniedziałki i piątki</p>
                  <p className="text-sm text-muted-foreground">18:30 – 19:30</p>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mt-4">
                  <Clock className="w-4 h-4" />
                  <span>12-tygodniowy program</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-subtle border-border text-center group hover:shadow-indigo transition-smooth">
              <div className="space-y-4">
                <div className="text-5xl font-zen text-indigo mb-4 group-hover:scale-110 transition-transform">🎓</div>
                <h3 className="text-2xl font-zen font-medium text-soft-white mb-3">Egzamin 5 kyu</h3>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-accent">Po 12 tygodniach</p>
                  <p className="text-sm text-muted-foreground">Zakończ kurs egzaminem i dołącz do klubu</p>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mt-4">
                  <Users className="w-4 h-4" />
                  <span>Sensei Wiesław Biela 6 dan renshi</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-subtle border-border text-center group hover:shadow-elegant transition-smooth">
              <div className="space-y-4">
                <div className="text-5xl font-zen text-accent mb-4 group-hover:scale-110 transition-transform">🎯</div>
                <h3 className="text-2xl font-zen font-medium text-soft-white mb-3">Darmowe zajęcia</h3>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-accent">Cały wrzesień</p>
                  <p className="text-sm text-muted-foreground">Przyjdź, obejrzyj i spróbuj przed kursem</p>
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
                        <p>54-151 Wrocław</p>
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
                      src="https://www.google.com/maps?q=Szko%C5%82a+Podstawowa+nr+33%2C+ul.+Kolista+17%2C+Wroc%C5%82aw&output=embed"
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
