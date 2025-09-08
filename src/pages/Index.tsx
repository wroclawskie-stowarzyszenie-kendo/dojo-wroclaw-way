import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Disciplines from "@/components/Disciplines";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutUs />
      <Disciplines />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
