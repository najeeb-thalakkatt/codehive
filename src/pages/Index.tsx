import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollNavigation from "@/components/ScrollNavigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ScrollNavigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
