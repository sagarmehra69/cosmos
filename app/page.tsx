import Background from "@/components/Space/Background";
import Hero from "@/components/sections/Hero/Hero";
import Navbar from "@/components/layout/Navbar/Navbar";
import About from "@/components/sections/About/About";

export default function Home() {
  return (
    <main>
      <Background />
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}