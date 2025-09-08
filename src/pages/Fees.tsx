import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CreditCard, Calendar, Users, Award, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Fees = () => {
  const feeData = [
    {
      id: 1,
      title: "Opłata rejestracyjna (wpisowe)",
      description: "Wpłacane przez zawodników rozpoczynających bądź wznawiających treningi w WSK",
      frequency: "jednorazowa",
      amount: "60 zł",
      icon: Users,
      variant: "crimson" as const,
      paymentTitle: "oplata_rejestracyjna_imię_nazwisko_dyscyplina",
      deadline: "do końca drugiego miesiąca od rozpoczęcia treningów",
      note: "Zamiast opłaty rejestracyjnej można wpłacić miesięczną darowiznę za 3 miesiące z góry (450zł za 1-2 dyscypliny lub 600zł za wszystkie 3 dyscypliny)"
    },
    {
      id: 2,
      title: "Darowizna miesięczna (1-2 dyscypliny)",
      description: "Na cele statutowe - Kendo, Iaido lub Jodo (jedna lub dwie dyscypliny)",
      frequency: "co miesiąc",
      amount: "150 zł",
      icon: Heart,
      variant: "indigo" as const,
      paymentTitle: "darowizna_imię_nazwisko_dyscyplina_miesiąc",
      deadline: "do 15 dnia każdego miesiąca"
    },
    {
      id: 3,
      title: "Darowizna miesięczna (wszystkie dyscypliny)",
      description: "Na cele statutowe - Kendo, Iaido i Jodo (wszystkie trzy dyscypliny)",
      frequency: "co miesiąc",
      amount: "200 zł",
      icon: Heart,
      variant: "accent" as const,
      paymentTitle: "darowizna_imię_nazwisko_dyscyplina_miesiąc",
      deadline: "do 15 dnia każdego miesiąca"
    },
    {
      id: 4,
      title: "Opłata za wynajem bogu (Kendo)",
      description: "Dodatkowa opłata za wyposażenie treningowe Kendo",
      frequency: "co miesiąc",
      amount: "15 zł",
      icon: Shield,
      variant: "crimson" as const,
      paymentTitle: "wynjem_bogu_imię_nazwisko_kendo_miesiąc",
      deadline: "płatne razem z darowiznę miesięczną"
    },
    {
      id: 5,
      title: "Darowizna podtrzymująca",
      description: "Dla zawodników zmuszonych przerwać treningi, ale chcących pozostać na liście WSK",
      frequency: "co miesiąc",
      amount: "25 zł",
      icon: Users,
      variant: "indigo" as const,
      paymentTitle: "darowizna_podtrzymujaca_imię_nazwisko_dyscyplina_miesiąc",
      deadline: "do 15 dnia każdego miesiąca"
    },
    {
      id: 6,
      title: "Składka członkowska",
      description: "Opłacana tylko przez członków WSK",
      frequency: "raz w roku",
      amount: "30 zł",
      icon: Award,
      variant: "accent" as const,
      paymentTitle: "skladka_czlonkowska_imię_nazwisko",
      deadline: "do końca stycznia każdego roku"
    },
    {
      id: 7,
      title: "Licencja zawodnicza PZK",
      description: "Opłata licencji zawodniczej Polskiego Związku Kendo",
      frequency: "raz w roku",
      amount: "wg uchwały PZK",
      icon: Award,
      variant: "crimson" as const,
      paymentTitle: "licencja_pzk_imię_nazwisko_dyscyplina",
      deadline: "do końca stycznia każdego roku",
      note: "Aktualna wysokość opłat licencyjnych podawana na Facebook do 10 stycznia"
    }
  ];

  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case 'crimson':
        return 'border-crimson/30 hover:border-crimson hover:shadow-crimson';
      case 'indigo':
        return 'border-indigo/30 hover:border-indigo hover:shadow-indigo';
      case 'accent':
        return 'border-accent/30 hover:border-accent hover:shadow-elegant';
      default:
        return 'border-border hover:border-accent';
    }
  };

  const getIconColor = (variant: string) => {
    switch (variant) {
      case 'crimson':
        return 'text-crimson';
      case 'indigo':
        return 'text-indigo';
      case 'accent':
        return 'text-accent';
      default:
        return 'text-muted-foreground';
    }
  };

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
            <h1 className="text-xl font-zen font-medium text-soft-white">Opłaty</h1>
            <div className="w-20"></div> {/* Spacer for balance */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-zen font-light text-soft-white">
              Cennik i Opłaty
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Przejrzyste zasady płatności dla członków Wrocławskiego Stowarzyszenia Kendo
            </p>
          </div>

          {/* Payment Rules */}
          <Card className="p-8 bg-gradient-subtle border-border">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <CreditCard className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-zen font-medium text-soft-white">
                  Zasady Wpłat
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-zen font-medium text-accent">Dane do przelewów</h4>
                  <div className="bg-card rounded-lg p-4 border border-border space-y-2">
                    <p className="font-medium text-soft-white">Wrocławskie Stowarzyszenie Kendo</p>
                    <p className="text-muted-foreground">ul. Stanisławowska 47</p>
                    <p className="text-muted-foreground">54-611 Wrocław</p>
                    <p className="text-muted-foreground">PKO BP III o/ Wrocław</p>
                    <div className="flex items-center space-x-2 bg-background rounded px-3 py-2 mt-3">
                      <span className="font-mono text-sm font-medium text-accent">53 1020 5242 0000 2902 0139 6548</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-zen font-medium text-accent">Ważne informacje</h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start space-x-2">
                      <Calendar className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                      <span>Opłaty miesięczne należy wnosić do 15 dnia każdego miesiąca</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Calendar className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                      <span>Opłaty roczne należy wnosić do końca stycznia</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CreditCard className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                      <span>W tytule przelewu należy podać dokładnie określone informacje</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Fees Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {feeData.map((fee) => {
              const IconComponent = fee.icon;
              return (
                <Card 
                  key={fee.id} 
                  className={`p-6 bg-card transition-smooth group ${getVariantClasses(fee.variant)}`}
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <IconComponent className={`w-6 h-6 ${getIconColor(fee.variant)} group-hover:scale-110 transition-transform`} />
                        <div>
                          <h3 className="text-lg font-zen font-medium text-soft-white">
                            {fee.title}
                          </h3>
                          <Badge variant="outline" className="text-xs mt-1">
                            {fee.frequency}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${getIconColor(fee.variant)}`}>
                          {fee.amount}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {fee.description}
                    </p>

                    {/* Payment Details */}
                    <div className="space-y-3">
                      <div className="bg-gradient-subtle rounded-lg p-4 space-y-2">
                        <h4 className="font-medium text-accent text-sm">Tytuł przelewu:</h4>
                        <code className="text-xs bg-background rounded px-2 py-1 block text-muted-foreground font-mono">
                          {fee.paymentTitle}
                        </code>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span>{fee.deadline}</span>
                      </div>
                    </div>

                    {/* Note */}
                    {fee.note && (
                      <div className="bg-card border border-border rounded-lg p-3">
                        <p className="text-xs text-muted-foreground italic">
                          {fee.note}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Contact Section */}
          <Card className="p-8 bg-gradient-subtle border-border text-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-zen font-medium text-soft-white">
                Pytania o opłaty?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                W przypadku pytań dotyczących opłat, skontaktuj się z odpowiednimi osobami kontaktowymi dla swojej dyscypliny
              </p>
              <Link to="/#contact">
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground">
                  Przejdź do kontaktu
                </Button>
              </Link>
            </div>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default Fees;