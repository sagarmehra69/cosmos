import Background from "@/components/effects/Universe/Universe";
import Hero from "@/components/sections/Hero/Hero";
import Navbar from "@/components/layout/Navbar/Navbar";
import About from "@/components/sections/About/About";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}