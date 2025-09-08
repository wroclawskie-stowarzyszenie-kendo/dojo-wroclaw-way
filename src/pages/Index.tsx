import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Disciplines from "@/components/Disciplines";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Disciplines />
      <Contact />
    </div>
  );
};

export default Index;
