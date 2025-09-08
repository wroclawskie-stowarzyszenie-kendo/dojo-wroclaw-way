import { Card } from "@/components/ui/card";
import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/a5067aa6-7595-4441-be68-e5c88d4706b8.png" alt="WSK Logo" className="h-8 w-8" />
              <span className="font-zen font-medium text-soft-white">WSK</span>
            </div>
            <h3 className="text-lg font-zen font-medium text-soft-white">
              Wrocławskie Stowarzyszenie Kendo
            </h3>
            <p className="text-sm text-muted-foreground">
              Odkryj drogę miecza. Tradycyjne japońskie sztuki walki we Wrocławiu.
            </p>
            <div className="flex justify-center pt-2">
              <a 
                href="https://www.facebook.com/WSKendo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center"
                aria-label="Facebook WSK"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo/20 to-crimson/20 border border-border hover:border-indigo transition-smooth flex items-center justify-center group-hover:scale-105">
                  <Facebook className="w-4 h-4 text-indigo group-hover:text-crimson transition-colors" />
                </div>
              </a>
            </div>
          </div>

          {/* Training Locations */}
          <div className="space-y-4">
            <h3 className="text-lg font-zen font-medium text-soft-white">
              Miejsca Treningów
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-accent">Sezon 2025/2026</p>
                <p className="text-sm text-muted-foreground">
                  Szkoła Podstawowa nr 33<br />
                  ul. Kolista 17<br />
                  Wrocław
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-accent">Treningi letnie</p>
                <p className="text-sm text-muted-foreground">
                  Szkoła Podstawowa nr 44<br />
                  ul. Wilanowska 31<br />
                  Wrocław
                </p>
              </div>
            </div>
          </div>

          {/* Disciplines */}
          <div className="space-y-4">
            <h3 className="text-lg font-zen font-medium text-soft-white">
              Dyscypliny
            </h3>
            <div className="space-y-2">
              <a 
                href="https://pl.wikipedia.org/wiki/Kend%C5%8D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-fast group"
              >
                <span className="text-crimson font-zen group-hover:scale-105 transition-transform">剣道</span>
                <span className="text-sm text-muted-foreground group-hover:text-crimson transition-fast">Kendo</span>
              </a>
              <a 
                href="https://pl.wikipedia.org/wiki/Iaido" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-fast group"
              >
                <span className="text-indigo font-zen group-hover:scale-105 transition-transform">居合道</span>
                <span className="text-sm text-muted-foreground group-hover:text-indigo transition-fast">Iaido</span>
              </a>
              <a 
                href="https://pl.wikipedia.org/wiki/J%C5%8Dd%C5%8D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-fast group"
              >
                <span className="text-accent font-zen group-hover:scale-105 transition-transform">杖道</span>
                <span className="text-sm text-muted-foreground group-hover:text-accent transition-fast">Jodo</span>
              </a>
            </div>
          </div>

          {/* Organization Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-zen font-medium text-soft-white">
              Dane Stowarzyszenia
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-accent">Wrocławskie Stowarzyszenie Kendo</p>
                <p>ul. Stanisławowska 47</p>
                <p>54-611 Wrocław</p>
              </div>
              <div className="space-y-1">
                <p>NIP: 894-27-31-009</p>
                <p>KRS: 0000098327</p>
                <p>REGON: 932821623</p>
              </div>
              <div>
                <p>e-mail: wsk@kendo.wroclaw.pl</p>
              </div>
              <div>
                <p className="font-medium text-accent">Konto WSK:</p>
                <p>PKO BP III o/ Wrocław</p>
                <p className="font-mono text-xs">53 1020 5242 0000 2902 0139 6548</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Wrocławskie Stowarzyszenie Kendo. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-muted-foreground mt-2 font-zen">
            橋の都 • Miasto Mostów • Wrocław
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;