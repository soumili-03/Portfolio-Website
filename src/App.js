import About from "./components/Experience";
import Contact from "./components/Contact";
//import Experience from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Extracurricular from "./components/Extracurricular";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills/>
      <Education />
      <Extracurricular/>
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
