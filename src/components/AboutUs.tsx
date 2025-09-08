import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">O Nas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Poznaj władze i statut Wrocławskiego Stowarzyszenia Kendo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Władze WSK */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Władze WSK
              </CardTitle>
              <p className="text-sm text-muted-foreground">Zarząd na lata 2024 - 2029</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="font-medium">Prezes Zarządu</span>
                  <span className="text-muted-foreground">Wiesław Biel</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="font-medium">Wiceprezes Zarządu</span>
                  <span className="text-muted-foreground">Olga Nowaczyk</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="font-medium">Sekretarz</span>
                  <span className="text-muted-foreground">Maciej Szymański</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="font-medium">Skarbnik</span>
                  <span className="text-muted-foreground">Emilia Kania</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Członek Zarządu</span>
                  <span className="text-muted-foreground">Marcin Zyga</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Statut WSK */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5" />
                Statut WSK
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Oficjalny statut Wrocławskiego Stowarzyszenia Kendo
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Statut określa cele, zasady działania oraz strukturę organizacyjną 
                  naszego stowarzyszenia. Zawiera wszystkie istotne informacje dotyczące 
                  członkostwa, władz oraz działalności WSK.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => window.open('https://www.kendo.wroclaw.pl/o-nas/statut-wsk', '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Pobierz Statut WSK (PDF)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;