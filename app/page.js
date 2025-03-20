import AboutMe from "@/components/AboutMe";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Portfolio />
        <Skills />
        <Services />
        <CTA />
        <AboutMe />
        <Footer />
      </div>
    </>
  );
}
