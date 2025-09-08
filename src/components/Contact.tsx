import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-zen font-light mb-6 text-soft-white">
            Rozpocznij Swoją Podróż
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Odkryj tradycyjne japońskie sztuki walki w sercu Wrocławia
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-4 shadow-crimson hover:shadow-indigo"
            onClick={() => {
              const element = document.getElementById('discipline-contacts');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Skontaktuj się z nami
          </Button>
        </div>

        {/* Training Schedule & Location */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Calendar */}
          <div className="bg-gradient-subtle rounded-2xl p-8 border border-border flex flex-col">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-zen font-medium mb-4 text-soft-white">
                Harmonogram Treningów - Sezon 2025/2026
              </h3>
              
              {/* Season Info Cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-2xl font-zen text-crimson mb-2">📅</div>
                  <h4 className="font-zen font-medium text-accent mb-1">Start Sezonu</h4>
                  <p className="text-sm text-muted-foreground">15 września 2025</p>
                  <p className="text-sm text-muted-foreground">18:30</p>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-2xl font-zen text-indigo mb-2">🚪</div>
                  <h4 className="font-zen font-medium text-accent mb-1">Nabór Otwarty</h4>
                  <p className="text-sm text-muted-foreground">Cały rok</p>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-2xl font-zen text-accent mb-2">🎯</div>
                  <h4 className="font-zen font-medium text-accent mb-1">Pierwszy Trening</h4>
                  <p className="text-sm text-muted-foreground">Bezpłatny</p>
                </div>
              </div>
            </div>
            <div className="relative flex-1">
              <div className="h-full rounded-lg overflow-hidden border border-border shadow-elegant bg-card" style={{ minHeight: '400px' }}>
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
            </div>
          </div>

          {/* Location */}
          <div className="bg-gradient-subtle rounded-2xl p-8 border border-border flex flex-col">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-zen font-medium mb-4 text-soft-white">
                Lokalizacja Dojo
              </h3>
            </div>
            
            <div className="space-y-6 mb-6">
              <div className="bg-card rounded-lg p-6 border border-border text-center">
                <MapPin className="w-6 h-6 mx-auto mb-3 text-accent" />
                <h4 className="font-zen font-medium mb-2 text-accent">Adres Treningów</h4>
                <p className="text-muted-foreground">
                  Szkoła Podstawowa nr 33<br />
                  ul. Kolista 17<br />
                  54-152 Wrocław
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="text-2xl mb-3">🚌</div>
                <h4 className="font-zen font-medium mb-2 text-accent">Dojazd</h4>
                <p className="text-muted-foreground">
                  Autobusy: 106, 107, 109<br />
                  Parking na terenie szkoły
                </p>
              </div>
            </div>
            
            <div className="h-full rounded-lg overflow-hidden border border-border shadow-elegant" style={{ minHeight: '400px' }}>
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
        </div>

        {/* Contact Instructors */}
        <div id="discipline-contacts" className="bg-gradient-subtle rounded-2xl p-8 border border-border">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-zen font-medium mb-4 text-soft-white">
              Kontakt do Dyscyplin
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Każda dyscyplina ma dedykowaną osobę kontaktową gotową odpowiedzieć na Twoje pytania
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Kendo Contact */}
            <Card className="p-6 bg-card border-border hover:border-crimson transition-smooth hover:shadow-crimson group flex flex-col">
              <div className="text-center space-y-4 flex-1 flex flex-col">
                <div className="text-3xl font-zen text-crimson group-hover:scale-110 transition-transform">剣道</div>
                <h4 className="text-xl font-zen font-medium">Kendo</h4>
                <div className="space-y-3 flex-1 flex flex-col justify-end">
                  <div className="bg-gradient-subtle rounded-lg p-4 space-y-2">
                    <p className="font-zen font-medium text-accent mb-2">Ola</p>
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span className="font-mono text-sm">+48 798 416 649</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">kendowroc@audiobiel.pl</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <a href="tel:+48798416649">
                        <Phone className="w-4 h-4 mr-2" />
                        Zadzwoń
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href="mailto:kendowroc@audiobiel.pl">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Iaido & Jodo Contact */}
            <Card className="p-6 bg-card border-border hover:border-indigo transition-smooth hover:shadow-indigo group flex flex-col">
              <div className="text-center space-y-4 flex-1 flex flex-col">
                <div className="text-3xl font-zen text-indigo group-hover:scale-110 transition-transform">居合道 • 杖道</div>
                <h4 className="text-xl font-zen font-medium">Iaido & Jodo</h4>
                <div className="space-y-3 flex-1 flex flex-col justify-end">
                  <div className="bg-gradient-subtle rounded-lg p-4 space-y-2">
                    <p className="font-zen font-medium text-accent mb-2">Michał</p>
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span className="font-mono text-sm">+48 602 738 234</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">wsk.iaido.jodo@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <a href="tel:+48602738234">
                        <Phone className="w-4 h-4 mr-2" />
                        Zadzwoń
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href="mailto:wsk.iaido.jodo@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* General Contact */}
            <Card className="p-6 bg-card border-border hover:border-accent transition-smooth hover:shadow-elegant group flex flex-col">
              <div className="text-center space-y-4 flex-1 flex flex-col">
                <div className="text-3xl group-hover:scale-110 transition-transform">📧</div>
                <h4 className="text-xl font-zen font-medium">Informacje Ogólne</h4>
                <div className="space-y-3 flex-1 flex flex-col justify-end">
                  <div className="bg-gradient-subtle rounded-lg p-4 space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">wsk@kendo.wroclaw.pl</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-center">ul. Stanisławowska 47, 54-611 Wrocław</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="mailto:wsk@kendo.wroclaw.pl">
                      <Mail className="w-4 h-4 mr-2" />
                      Napisz Email
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;