import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface DisciplineCardProps {
  title: string;
  japanese: string;
  description: string;
  image: string;
  contact: {
    name: string;
    phone: string;
  };
  delay?: number;
}

const DisciplineCard = ({ title, japanese, description, image, contact, delay = 0 }: DisciplineCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card border-border hover:border-crimson transition-smooth hover:shadow-crimson flex flex-col h-full"
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

        <div className="space-y-3 pt-4 border-t border-border mt-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Kontakt telefoniczny</p>
            <p className="font-zen font-medium text-accent">{contact.name}</p>
            <p className="text-sm text-muted-foreground font-mono">{contact.phone}</p>
          </div>
          
          <Button 
            variant="discipline" 
            className="w-full transition-smooth hover:shadow-indigo"
          >
            Dowiedz Się Więcej
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DisciplineCard;