import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Disciplines from "@/components/Disciplines";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Disciplines />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
