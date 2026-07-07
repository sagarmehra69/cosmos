import Background from "@/components/effects/Universe/Universe";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education/Education";
import Certifications from "@/components/sections/Certifications/Certifications";
import Experience from "@/components/sections/Experience/Experience";
import Contact from "@/components/sections/Contact/Contact";
import Navbar from "@/components/layout/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education /> 
      <Certifications />
      <Experience />
      <Contact />
    </main>
  );
}