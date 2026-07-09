import Background from "@/components/effects/Universe/Universe";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Skills from "@/components/sections/Skills/Skills";
import {Projects} from "@/components/sections/Projects";
import {Education} from "@/components/sections/Education";
import Experience from "@/components/sections/Experience/Experience";
import {Contact} from "@/components/sections/Contact";
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
      <Experience />
      <Contact />
    </main>
  );
}