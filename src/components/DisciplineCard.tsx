import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface DisciplineCardProps {
  title: string;
  japanese: string;
  description: string;
  image: string;
  contact: {
    name: string;
    phone: string;
  };
  days?: string[];
  delay?: number;
  slug?: string;
}

const DisciplineCard = ({ title, japanese, description, image, contact, days = [], delay = 0, slug }: DisciplineCardProps) => {
  const getSlug = () => {
    if (slug) return slug;
    return title.toLowerCase();
  };

  return (
    <Link to={`/${getSlug()}`} className="block h-full">
      <Card className="group relative overflow-hidden bg-card border-border hover:border-crimson transition-smooth hover:shadow-crimson flex flex-col h-full cursor-pointer"
            style={{ animationDelay: `${delay}s` }}>
        <div className="fade-in relative h-80 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        
        <div className="p-6 flex flex-col flex-1">
          <div className="text-center flex-1">
            <h3 className="text-2xl font-zen font-medium text-crimson mb-2">{title}</h3>
            <p className="text-3xl font-zen font-light text-muted-foreground mb-4">{japanese}</p>
            <p className="text-foreground leading-relaxed">{description}</p>
          </div>

          {days.length > 0 && (
            <div className="mt-5 space-y-2">
              {days.map((d) => (
                <div key={d} className="flex items-center justify-between rounded-lg bg-gradient-subtle border border-border px-4 py-2 text-sm">
                  <span className="font-medium text-soft-white">{d}</span>
                  <span className="text-muted-foreground">18:30 – 20:30</span>
                </div>
              ))}
              <p className="text-xs text-muted-foreground text-center pt-1">SP nr 33, ul. Kolista 17</p>
            </div>
          )}

          <div className="space-y-3 pt-4 border-t border-border mt-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Kontakt telefoniczny</p>
              <p className="font-zen font-medium text-accent">{contact.name}</p>
              <p className="text-sm text-muted-foreground font-mono">{contact.phone}</p>
            </div>
            
            <div className="text-center">
              <span className="text-sm text-crimson font-medium group-hover:underline">
                Dowiedz Się Więcej →
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default DisciplineCard;