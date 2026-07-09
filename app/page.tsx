import Background from "@/components/effects/Universe/Universe";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Experience from "@/components/sections/Experience/Experience";
import Skills from "@/components/sections/Skills/Skills";
import {Projects} from "@/components/sections/Projects";
import {Education} from "@/components/sections/Education";
import {Contact} from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education /> 
      <Contact />
    </main>
  );
}