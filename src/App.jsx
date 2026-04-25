import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Experiences from "./sections/Experiences.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from './sections/Footer.jsx';
import Skill from "./sections/Skill";
import SmoothCursor from "./components/SmoothCursor.jsx";
import { StarsCanvas } from "./components/StarBackground.jsx";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <StarsCanvas />
      <SmoothCursor />
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Experiences />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;