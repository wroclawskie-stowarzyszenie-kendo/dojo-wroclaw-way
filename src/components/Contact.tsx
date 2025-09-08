import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-zen font-light mb-4 text-soft-white">
            Rozpocznij Swoją Podróż
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Skontaktuj się z naszymi instruktorami, aby dowiedzieć się więcej o zajęciach i umówić swój pierwszy bezpłatny trening
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Kendo Contact */}
          <Card className="p-6 bg-card border-border hover:border-crimson transition-smooth hover:shadow-crimson">
            <div className="text-center space-y-4">
              <div className="text-2xl font-zen text-crimson">剣道</div>
              <h3 className="text-xl font-zen font-medium">Kendo</h3>
              <div className="space-y-2">
                <p className="font-zen font-medium text-accent">Ola</p>
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span className="font-mono text-sm">+48 798 416 649</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="tel:+48798416649">
                  Kontakt telefoniczny
                </a>
              </Button>
            </div>
          </Card>

          {/* Iaido & Jodo Contact */}
          <Card className="p-6 bg-card border-border hover:border-indigo transition-smooth hover:shadow-indigo">
            <div className="text-center space-y-4">
              <div className="text-2xl font-zen text-indigo">居合道 • 杖道</div>
              <h3 className="text-xl font-zen font-medium">Iaido & Jodo</h3>
              <div className="space-y-2">
                <p className="font-zen font-medium text-accent">Michał</p>
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span className="font-mono text-sm">+48 602 738 234</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="tel:+48602738234">
                  Kontakt telefoniczny
                </a>
              </Button>
            </div>
          </Card>

          {/* General Contact */}
          <Card className="p-6 bg-card border-border hover:border-accent transition-smooth hover:shadow-elegant md:col-span-2 lg:col-span-1">
            <div className="text-center space-y-4">
              <div className="text-2xl font-zen text-accent">📧</div>
              <h3 className="text-xl font-zen font-medium">Informacje Ogólne</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">wsk@kendo.wroclaw.pl</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Wrocław, Poland</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="mailto:wsk@kendo.wroclaw.pl">
                  Wyślij Email
                </a>
              </Button>
            </div>
          </Card>
        </div>

        {/* New Season Information */}
        <div className="bg-gradient-subtle rounded-2xl p-8 border border-border mb-8">
          <div className="text-center">
            <h3 className="text-3xl font-zen font-medium mb-4 text-soft-white">
              Sezon 2025/2026
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="text-2xl font-zen text-crimson mb-2">📅</div>
                <h4 className="font-zen font-medium mb-2">Start Treningów</h4>
                <p className="text-sm text-muted-foreground">15 września 2024</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="text-2xl font-zen text-indigo mb-2">🚪</div>
                <h4 className="font-zen font-medium mb-2">Nabór Otwarty</h4>
                <p className="text-sm text-muted-foreground">Zapisujemy przez cały rok</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="text-2xl font-zen text-accent mb-2">🎯</div>
                <h4 className="font-zen font-medium mb-2">Wszystkie Poziomy</h4>
                <p className="text-sm text-muted-foreground">Od początkujących do zaawansowanych</p>
              </div>
            </div>
          </div>
        </div>

        {/* Location and Map */}
        <div className="bg-gradient-subtle rounded-2xl p-8 border border-border mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-zen font-medium mb-4 text-soft-white">
                Lokalizacja Treningów
              </h3>
              <div className="space-y-4 mb-6">
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="text-sm font-medium text-accent mb-2">Adres:</p>
                  <p className="text-sm text-muted-foreground">
                    Szkoła Podstawowa nr 33<br />
                    ul. Kolista 17<br />
                    54-152 Wrocław
                  </p>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="text-sm font-medium text-accent mb-2">Dojazd:</p>
                  <p className="text-sm text-muted-foreground">
                    Autobusy: 106, 107, 109<br />
                    Parking dostępny na terenie szkoły
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-elegant">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.8983456789!2d17.0314567890123!3d51.1201234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc27b12345678%3A0x123456789abcdef0!2sSzko%C5%82a%20Podstawowa%20nr%2033%2C%20Kolista%2017%2C%2054-152%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja treningów - Szkoła Podstawowa nr 33"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="bg-gradient-subtle rounded-2xl p-8 border border-border mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-zen font-medium mb-4 text-soft-white">
              Kalendarz Treningów
            </h3>
            <p className="text-muted-foreground">
              Sprawdź harmonogram treningów, zawodów i seminariów na nadchodzący sezon
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-elegant bg-card">
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FWarsaw&bgcolor=%23ffffff&src=Y19iMDgxYTFlNTY3MGY5MDVmZjNlMGVlOGNiODFlOTMyNGFhM2NlOGJhYWYxYjYyODVlM2QyNmVhMDRjYmI2ODgyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23D50000"
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

        {/* Call to Action */}
        <div className="bg-gradient-subtle rounded-2xl p-8 border border-border text-center">
          <h3 className="text-2xl font-zen font-medium mb-4 text-soft-white">
            Gotowy na Rozpoczęcie Treningu?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Dołącz do naszej społeczności sztuk walki i odkryj głębokie korzyści japońskich sztuk miecza. 
            Zapraszamy wszystkie poziomy - od kompletnych początkujących do doświadczonych praktyków.
          </p>
          <Button variant="hero" size="lg" className="shadow-crimson hover:shadow-indigo">
            Umów Bezpłatny Trening
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;