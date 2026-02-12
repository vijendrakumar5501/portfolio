import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
     <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Contact />
    </>
  );
}
