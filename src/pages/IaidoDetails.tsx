import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Coins, HelpCircle, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const IaidoDetails = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border shadow-elegant sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/#disciplines" 
              className="flex items-center space-x-3 hover:opacity-80 transition-fast"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground" />
              <div className="flex items-center space-x-2">
                <img src="/lovable-uploads/a5067aa6-7595-4441-be68-e5c88d4706b8.png" alt="WSK Logo" className="h-8 w-8" />
                <span className="font-zen font-medium text-soft-white">WSK</span>
              </div>
            </Link>
            <h1 className="text-xl font-zen font-medium text-soft-white">Iaido</h1>
            <div className="w-20"></div> {/* Spacer for balance */}
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section 
        className="pt-6 pb-12 px-6 relative overflow-hidden"
        style={{
          backgroundImage: `url(/lovable-uploads/04703146-1df9-4e3f-841c-91831fe3073b.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-zen font-light mb-4 text-white">
              Iaido
            </h1>
            <p className="text-3xl font-zen font-light text-crimson mb-4">居合道</p>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Droga harmonii z mieczem. Japońska sztuka walki polegająca na szybkim wyciągnięciu miecza, cięciu i schowaniu go z powrotem.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Jak zacząć */}
          <Card className="border-border hover:border-crimson transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-crimson">
                <BookOpen className="w-6 h-6" />
                Jak zacząć
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-zen font-medium text-accent mb-3">Czego potrzebujesz żeby zacząć trenować Iaido:</h4>
                <ol className="list-decimal list-inside space-y-2 text-foreground">
                  <li>Dobre chęci</li>
                  <li>Ubranie sportowe (spodnie dresowe, koszulka)</li>
                  <li><Link to="/o-nas#declaration-section" className="text-crimson hover:underline">Wypełniona deklaracja</Link>* (wymagane od drugiego treningu)</li>
                  <li>Wymagane opłaty* (pierwszy trening jest za darmo)</li>
                </ol>
                <p className="text-sm text-muted-foreground mt-3">* - wymagane od drugiego treningu</p>
              </div>
              
              <div>
                <h4 className="font-zen font-medium text-accent mb-3">Kiedy można zacząć?</h4>
                <p className="text-foreground">
                  Iaido - grupy otwarte są cały rok. Przed przyjściem skontaktuj się z nami.
                  Zalecamy również zapoznanie się z podstawowymi zasadami w sekcji FAQ poniżej.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="border-border hover:border-crimson transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-crimson">
                <HelpCircle className="w-6 h-6" />
                Najczęściej zadawane pytania (FAQ)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-zen font-medium text-accent mb-2">1. Chcę zacząć trenować Iaido. Jak i kiedy mogę dołączyć?</h4>
                  <p className="text-foreground">Nabór do grup początkujących Iaido odbywa się w trybie ciągłym. Wystarczy, że przyjdziesz na trening w wybranym przez Ciebie terminie.</p>
                </div>
                
                <div>
                  <h4 className="font-zen font-medium text-accent mb-2">2. Jakie dokumenty są potrzebne?</h4>
                  <p className="text-foreground">Na pierwszy trening potrzebujesz jedynie zgody rodzica/opiekuna (w przypadku osób niepełnoletnich). <Link to="/o-nas#declaration-section" className="text-crimson hover:underline">Deklarację członkowską</Link> możesz dostarczyć w ciągu kilku kolejnych tygodni.</p>
                </div>
                
                <div>
                  <h4 className="font-zen font-medium text-accent mb-2">3. Co muszę mieć na pierwszy trening?</h4>
                  <p className="text-foreground">Na początek wystarczy Ci strój sportowy (koszulka i spodnie dresowe) oraz dobre chęci. Przez kilka pierwszych miesięcy nie musisz martwić się o sprzęt – klub udostępnia wszystko co jest potrzebne bezpłatnie.</p>
                </div>
                
                <div>
                  <h4 className="font-zen font-medium text-accent mb-2">4. Czy muszę kupić własny miecz?</h4>
                  <p className="text-foreground">Po pierwszych miesiącach warto zaopatrzyć się we własny bokken. Iaito (miecz treningowy bez ostrego ostrza) to zakup, który można odłożyć na późniejszy etap dla bardziej zaawansowanych osób.</p>
                </div>
                
                <div>
                  <h4 className="font-zen font-medium text-accent mb-2">5. Słyszałem, że Iaido to drogie hobby. Czy to prawda?</h4>
                  <div className="text-foreground space-y-2">
                    <p>Iaido nie jest tak drogie, jak mogłoby się wydawać!</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li><strong>Sprzęt początkowy:</strong> Na początku potrzebujesz tylko stroju sportowego, a miecz dostaniesz w klubie.</li>
                      <li><strong>Strój do Iaido:</strong> Tradycyjny strój (keiko-gi i hakama) to wydatek rzędu 250-300 zł, ale nie jest wymagany na początku.</li>
                      <li><strong>Bokken treningowy:</strong> Własny bokken to koszt około 200-400 zł i wystarczy na lata. Iaito to większy wydatek wymagany dopiero podczas oficjalnych egzaminów - zazwyczaj służy przez długie lata treningów.</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-zen font-medium text-accent mb-2">6. Czy jest jakiś limit wieku?</h4>
                  <p className="text-foreground">Nie ma żadnych limitów wiekowych! Każdy może trenować Iaido, niezależnie od wieku. To świetny sposób na poprawę koncentracji, kształtowanie charakteru i rozwój duchowy.</p>
                </div>
                
                <div>
                  <h4 className="font-zen font-medium text-accent mb-2">7. Miałem kiedyś kontuzję. Czy mogę trenować Iaido?</h4>
                  <p className="text-foreground">Jeśli miałeś w przeszłości poważną kontuzję, zalecamy skontaktowanie się z nami przed pierwszym treningiem. Najlepiej będzie również skonsultować się z lekarzem sportowym, aby upewnić się, że nie ma żadnych przeciwwskazań.</p>
                </div>
                
                <div>
                  <h4 className="font-zen font-medium text-accent mb-2">8. Czy potrzebne są badania lekarskie?</h4>
                  <p className="text-foreground">W przypadku Iaido badania lekarskie nie są wymagane do regularnych treningów.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Opłaty */}
          <Card className="border-border hover:border-crimson transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-crimson">
                <Coins className="w-6 h-6" />
                Opłaty
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-zen font-medium text-accent mb-3">Struktura opłat:</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-border p-3 text-left">Rodzaj płatności</th>
                          <th className="border border-border p-3 text-left">Częstotliwość</th>
                          <th className="border border-border p-3 text-left">Wysokość</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3">Opłata rejestracyjna (wpisowe)</td>
                          <td className="border border-border p-3">Jednorazowa</td>
                          <td className="border border-border p-3">60 zł</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">Darowizna miesięczna (jedna lub dwie dyscypliny)</td>
                          <td className="border border-border p-3">Co miesiąc (do 15 dnia)</td>
                          <td className="border border-border p-3">150 zł</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">Darowizna miesięczna (wszystkie dyscypliny)</td>
                          <td className="border border-border p-3">Co miesiąc (do 15 dnia)</td>
                          <td className="border border-border p-3">200 zł</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">Składka członkowska WSK</td>
                          <td className="border border-border p-3">Raz w roku (do końca stycznia)</td>
                          <td className="border border-border p-3">30 zł</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-zen font-medium text-accent mb-3">Dane do przelewu:</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <p><strong>Wrocławskie Stowarzyszenie Kendo</strong></p>
                    <p>ul. Stanisławowska 47</p>
                    <p>54-611 Wrocław</p>
                    <p><strong>Nr konta:</strong> 53 1020 5242 0000 2902 0139 6548</p>
                    <p><strong>Bank:</strong> PKO BP III o/ Wrocław</p>
                    <p className="mt-3"><strong>W tytule płatności prosimy wpisać:</strong></p>
                    <p className="text-sm">darowizna_imię (lub imiona)_nazwisko_dyscyplina (lub dyscypliny)_miesiąc</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trenerzy */}
          <Card className="border-border hover:border-crimson transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-crimson">
                <Users className="w-6 h-6" />
                Trenerzy Iaido
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/56bf4c8f-ade9-46d6-bed4-4c86e8497d5b.png" 
                      alt="Michał Szczepański"
                      className="w-full h-full object-cover object-[50%_20%] scale-125 origin-top"
                    />
                  </div>
                  <h4 className="font-zen font-medium text-accent mb-2">Michał Szczepański</h4>
                  <p className="text-muted-foreground">Renshi 6 dan Iaido</p>
                  <p className="text-muted-foreground">6 dan Jodo</p>
                  <p className="text-sm text-muted-foreground mt-1">Sekretarz Generalny PZK</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/0ee7bb5c-3699-44e8-8846-29d30de453ad.png" 
                      alt="Agnieszka Krawczyk"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-zen font-medium text-accent mb-2">Agnieszka Krawczyk</h4>
                  <p className="text-muted-foreground">4 dan Iaido</p>
                  <p className="text-muted-foreground">4 dan Jodo</p>
                  <p className="text-sm text-muted-foreground mt-1">Członek Komisji Jodo PZK</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center bg-gradient-crimson rounded-lg p-8">
            <h3 className="text-2xl font-zen font-medium text-primary-foreground mb-4">
              Gotowy na pierwszą lekcję?
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Pierwszy trening jest zawsze za darmo. Przyjdź i przekonaj się sam!
            </p>
            <Button 
              asChild
              variant="secondary"
              size="lg"
              className="font-zen font-medium"
            >
              <Link to="/#discipline-contacts">
                Skontaktuj się z nami
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IaidoDetails;