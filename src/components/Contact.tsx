import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-zen font-light mb-4 text-soft-white">
            Begin Your Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact our instructors to learn more about classes and schedule your first free training
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
                Contact Instructor
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
                Contact Instructor
              </Button>
            </div>
          </Card>

          {/* General Contact */}
          <Card className="p-6 bg-card border-border hover:border-accent transition-smooth hover:shadow-elegant md:col-span-2 lg:col-span-1">
            <div className="text-center space-y-4">
              <div className="text-2xl font-zen text-accent">📧</div>
              <h3 className="text-xl font-zen font-medium">General Info</h3>
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
                Send Email
              </Button>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-subtle rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-zen font-medium mb-4 text-soft-white">
            Ready to Start Training?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our community of martial artists and discover the profound benefits of Japanese sword arts. 
            All levels welcome - from complete beginners to experienced practitioners.
          </p>
          <Button variant="hero" size="lg" className="shadow-crimson hover:shadow-indigo">
            Schedule Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;