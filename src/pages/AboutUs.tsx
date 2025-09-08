import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const AboutUs = () => {
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
            <h1 className="text-xl font-zen font-medium text-soft-white">O Nas</h1>
            <div className="w-20"></div> {/* Spacer for balance */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Hero Section */}
          <div 
            className="relative text-center space-y-6 py-24 px-8 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url(/lovable-uploads/42fd5a79-57c6-41d5-8fe7-04aec3c4f00d.png)`,
              backgroundSize: '120%',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-zen font-light text-white mb-6">
                O Nas
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Poznaj władze i statut Wrocławskiego Stowarzyszenia Kendo
              </p>
            </div>
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
                    onClick={() => window.open("https://drive.google.com/file/d/1iMOZG64QgWZiTb3r8YnvYqWoksQXcgKs/view?usp=drive_link", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Pobierz Statut WSK (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Deklaracja WSK */}
          <Card className="h-fit" id="declaration-section">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5" />
                Deklaracja WSK
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Deklaracja członkowska Wrocławskiego Stowarzyszenia Kendo
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Deklaracja członkowska to dokument, który należy wypełnić i dostarczyć 
                  do klubu w ciągu kilku pierwszych tygodni treningów. Zawiera podstawowe 
                  informacje o członku stowarzyszenia.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => window.open("https://drive.google.com/file/d/1BdvkeJ28jz4GCSJ0ZeT7YiSi1DD1gryY/view", "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Pobierz Deklarację WSK (PDF)
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;