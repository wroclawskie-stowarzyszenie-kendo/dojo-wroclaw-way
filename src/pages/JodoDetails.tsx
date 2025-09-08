import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Coins, HelpCircle, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const JodoDetails = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-crimson transition-smooth mb-6">
            <ArrowLeft className="w-4 h-4" />
            Powrót do strony głównej
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-zen font-light mb-4 text-soft-white">
              Jodo
            </h1>
            <p className="text-3xl font-zen font-light text-crimson mb-4">杖道</p>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Droga kija. Japońska sztuka walki wykorzystująca drewniany kij o długości około 128 cm przeciwko mieczowi.
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
                <h4 className="font-zen font-medium text-accent mb-3">Czego potrzebujesz żeby zacząć trenować Jodo:</h4>
                <ol className="list-decimal list-inside space-y-2 text-foreground">
                  <li>Dobre chęci</li>
                  <li>Ubranie sportowe (spodnie dresowe, koszulka)</li>
                  <li>Wypełniona deklaracja* (wymagane od drugiego treningu)</li>
                  <li>Wymagane opłaty* (pierwszy trening jest za darmo)</li>
                </ol>
                <p className="text-sm text-muted-foreground mt-3">* - wymagane od drugiego treningu</p>
              </div>
              
              <div>
                <h4 className="font-zen font-medium text-accent mb-3">Kiedy można zacząć?</h4>
                <p className="text-foreground">
                  Jodo - grupy otwarte są cały rok. Przed przyjściem skontaktuj się z nami.
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
                  <h4 className="font-zen font-medium text-accent mb-2">1. Chcę zacząć trenować Jodo. Jak i kiedy mogę dołączyć?</h4>
                  <p className="text-foreground">Nabór do grup początkujących Jodo odbywa się w trybie ciągłym. Wystarczy, że przyjdziesz na trening w wybranym przez Ciebie terminie.</p>
                </div>
                
                <div>
                  <h4 className="font-zen font-medium text-accent mb-2">2. Jakie dokumenty są potrzebne?</h4>
                  <p className="text-foreground">Na pierwszy trening potrzebujesz jedynie zgody rodzica/opiekuna (w przypadku osób niepełnoletnich). Deklarację członkowską możesz dostarczyć w ciągu kilku kolejnych tygodni.</p>
                </div>
                
                <div>
                  <h4 className="font-zen font-medium text-accent mb-2">3. Co muszę mieć na pierwszy trening?</h4>
                  <p className="text-foreground">Na początek wystarczy Ci strój sportowy (koszulka i spodnie dresowe) oraz dobre chęci. Przez kilka pierwszych miesięcy nie musisz martwić się o sprzęt – klub udostępnia wszystko co jest potrzebne bezpłatnie.</p>
                </div>
                
                <div>
                  <h4 className="font-zen font-medium text-accent mb-2">4. Czy muszę kupić własny kij?</h4>
                  <p className="text-foreground">Tak, po pierwszym miesiącu treningów powinieneś zaopatrzyć się we własny kij treningowy (jo).</p>
                </div>
                
                <div>
                  <h4 className="font-zen font-medium text-accent mb-2">5. Słyszałem, że Jodo to drogie hobby. Czy to prawda?</h4>
                  <div className="text-foreground space-y-2">
                    <p>Jodo nie jest tak drogie, jak mogłoby się wydawać!</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li><strong>Sprzęt początkowy:</strong> Na początku potrzebujesz tylko stroju sportowego, a kij dostaniesz w klubie.</li>
                      <li><strong>Strój do Jodo:</strong> Tradycyjny strój (keiko-gi i hakama) to wydatek rzędu 250-300 zł, ale nie jest wymagany na początku.</li>
                      <li><strong>Kij treningowy:</strong> Własny kij (jo) to koszt około 80-150 zł i wystarczy na lata.</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-zen font-medium text-accent mb-2">6. Czy jest jakiś limit wieku?</h4>
                  <p className="text-foreground">Nie ma żadnych limitów wiekowych! W Jodo może trenować każdy, niezależnie od wieku. To świetny sposób na poprawę koordynacji, kształtowanie charakteru i rozwój fizyczny.</p>
                </div>
                
                <div>
                  <h4 className="font-zen font-medium text-accent mb-2">7. Miałem kiedyś kontuzję. Czy mogę trenować Jodo?</h4>
                  <p className="text-foreground">Jeśli miałeś w przeszłości poważną kontuzję, zalecamy skontaktowanie się z nami przed pierwszym treningiem. Najlepiej będzie również skonsultować się z lekarzem sportowym, aby upewnić się, że nie ma żadnych przeciwwskazań.</p>
                </div>
                
                <div>
                  <h4 className="font-zen font-medium text-accent mb-2">8. Czy potrzebne są badania lekarskie?</h4>
                  <p className="text-foreground">W przypadku Jodo badania lekarskie nie są wymagane do regularnych treningów.</p>
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
                Trenerzy Jodo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-1 gap-6 justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/e4113638-9cef-487f-ae49-46982d467b14.png" 
                      alt="Wiesław Biel"
                      className="w-full h-full object-cover object-[50%_12%] scale-150 origin-top"
                    />
                  </div>
                  <h4 className="font-zen font-medium text-accent mb-2">Wiesław Biel</h4>
                  <p className="text-muted-foreground">Renshi 6 dan Jodo</p>
                  <p className="text-sm text-muted-foreground mt-1">Główny trener</p>
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
              <Link to="/#contact">
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

export default JodoDetails;