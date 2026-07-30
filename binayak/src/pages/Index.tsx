import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="noise min-h-screen">
    <div className="aurora" aria-hidden="true" />
    <Navigation />
    <main>
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Skills />
      <Background />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
