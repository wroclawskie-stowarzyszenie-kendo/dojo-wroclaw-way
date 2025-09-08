import DisciplineCard from "./DisciplineCard";
const kendoImage = "/lovable-uploads/6edaffac-144e-4463-8688-9e3589141853.png";
import iaidoImage from "@/assets/iaido-practice.jpg";
const jodoImage = "/lovable-uploads/91b520b0-fce2-4f76-844a-29eda609251c.png";

const Disciplines = () => {
  const disciplines = [
    {
      title: "Kendo",
      japanese: "剣道",
      description: "The way of the sword. Modern Japanese martial art descended from swordsmanship that uses bamboo swords and protective armor.",
      image: kendoImage,
      contact: {
        name: "Ola",
        phone: "+48 798 416 649"
      }
    },
    {
      title: "Iaido", 
      japanese: "居合道",
      description: "The art of drawing the sword. A meditative practice focusing on precise, fluid movements and mental discipline.",
      image: iaidoImage,
      contact: {
        name: "Michał",
        phone: "+48 602 738 234"
      }
    },
    {
      title: "Jodo",
      japanese: "杖道", 
      description: "The way of the short staff. A traditional martial art using a wooden staff to defend against sword attacks.",
      image: jodoImage,
      contact: {
        name: "Michał",
        phone: "+48 602 738 234"
      }
    }
  ];

  return (
    <section id="disciplines" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-zen font-light mb-4 text-soft-white">
            Three Paths of Mastery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each discipline offers a unique journey toward physical and spiritual development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disciplines.map((discipline, index) => (
            <DisciplineCard 
              key={discipline.title}
              {...discipline}
              delay={index * 0.2}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-crimson text-primary-foreground px-6 py-3 rounded-full font-zen font-medium shadow-crimson">
            First Training Free
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disciplines;