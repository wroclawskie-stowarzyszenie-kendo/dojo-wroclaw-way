import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TrainingOverview from "@/components/TrainingOverview";
import { Mail, Phone, MapPin, Calendar, Clock, ExternalLink, CheckCircle, Bus } from "lucide-react";

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

<TrainingOverview showCards={false} />

        {/* Location */}
        <div className="bg-gradient-subtle rounded-2xl p-6 md:p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-zen font-medium text-soft-white">Lokalizacja Dojo</h3>
          </div>

          <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-6 items-stretch">
            <div className="space-y-6">
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
                <Bus className="w-6 h-6 mx-auto mb-3 text-accent" />
                <h4 className="font-zen font-medium mb-2 text-accent">Dojazd</h4>
                <p className="text-muted-foreground">
                  Autobusy: 101, 102, 103, 104, 126, 127, 132, 144, 152<br />
                  Tramwaje: 19, 21 (przystanek Kolista)<br />
                  Parking dostępny w okolicy szkoły
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-border shadow-elegant min-h-[360px]">
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
        </div>

        {/* Contact Instructors */}
        <div id="discipline-contacts" className="bg-gradient-subtle rounded-2xl p-4 md:p-8 border border-border">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-zen font-medium mb-4 text-soft-white">
              Kontakt do Dyscyplin
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Każda dyscyplina ma dedykowaną osobę kontaktową gotową odpowiedzieć na Twoje pytania
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Kendo Contact */}
            <Card className="p-4 md:p-6 bg-card border-border hover:border-crimson transition-smooth hover:shadow-crimson group flex flex-col">
              <div className="text-center space-y-4 flex-1 flex flex-col">
                <div className="text-3xl font-zen text-crimson group-hover:scale-110 transition-transform">剣道</div>
                <h4 className="text-xl font-zen font-medium">Kendo</h4>
                <div className="space-y-3 flex-1 flex flex-col justify-end">
                  <div className="bg-gradient-subtle rounded-lg p-4 space-y-2">
                    <p className="font-zen font-medium text-accent mb-2">Maciej</p>
                    <div className="flex items-center justify-start gap-3 text-muted-foreground text-left">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span className="font-mono text-xs sm:text-sm break-all">+48 500 132 644</span>
                    </div>
                    <div className="flex items-center justify-start gap-3 text-muted-foreground text-left">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs sm:text-sm break-all">wsk@kendo.wroclaw.pl</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <a href="tel:+48500132644">
                        <Phone className="w-4 h-4 mr-2" />
                        Zadzwoń
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href="mailto:wsk@kendo.wroclaw.pl">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Iaido & Jodo Contact */}
            <Card className="p-4 md:p-6 bg-card border-border hover:border-indigo transition-smooth hover:shadow-indigo group flex flex-col">
              <div className="text-center space-y-4 flex-1 flex flex-col">
                <div className="text-3xl font-zen text-indigo group-hover:scale-110 transition-transform">居合道 • 杖道</div>
                <h4 className="text-xl font-zen font-medium">Iaido & Jodo</h4>
                <div className="space-y-3 flex-1 flex flex-col justify-end">
                  <div className="bg-gradient-subtle rounded-lg p-4 space-y-2">
                    <p className="font-zen font-medium text-accent mb-2">Michał</p>
                    <div className="flex items-center justify-start gap-3 text-muted-foreground text-left">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span className="font-mono text-xs sm:text-sm break-all">+48 602 738 234</span>
                    </div>
                    <div className="flex items-center justify-start gap-3 text-muted-foreground text-left">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs sm:text-sm break-all">wsk.iaido.jodo@gmail.com</span>
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
            <Card className="p-4 md:p-6 bg-card border-border hover:border-accent transition-smooth hover:shadow-elegant group flex flex-col">
              <div className="text-center space-y-4 flex-1 flex flex-col">
                <Mail className="w-10 h-10 mx-auto text-accent group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-zen font-medium">Informacje Ogólne</h4>
                <div className="space-y-3 flex-1 flex flex-col justify-end">
                  <div className="bg-gradient-subtle rounded-lg p-4 space-y-2">
                    <div className="flex items-start justify-start gap-3 text-muted-foreground text-left">
                      <Mail className="w-4 h-4 flex-shrink-0 mt-1" />
                      <span className="text-xs sm:text-sm break-all">wsk@kendo.wroclaw.pl</span>
                    </div>
                    <div className="flex items-start justify-start gap-3 text-muted-foreground text-left">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                      <span className="text-xs sm:text-sm break-words">Szkoła Podstawowa nr 33, ul. Kolista 17, 54-152 Wrocław</span>
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
