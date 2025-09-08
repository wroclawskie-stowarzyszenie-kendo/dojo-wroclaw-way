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
              <Button variant="outline" size="sm" className="w-full">
                Skontaktuj się z Instruktorem
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
              <Button variant="outline" size="sm" className="w-full">
                Skontaktuj się z Instruktorem
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
              <Button variant="outline" size="sm" className="w-full">
                Wyślij Email
              </Button>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-subtle rounded-2xl p-8 border border-border">
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