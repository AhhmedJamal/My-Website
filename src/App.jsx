import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./index.css";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Info />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
