import Hero from "../src/components/Hero.jsx";
import Navbar from "../src/components/Navbar.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
