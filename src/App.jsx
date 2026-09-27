import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ReadyToSale from "./components/ReadyToSale";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      {/* Dynamic ambient background glows */}
      <div className="bg-ambient-layer" aria-hidden="true">
        <div className="ambient-blob ambient-blob-1"></div>
        <div className="ambient-blob ambient-blob-2"></div>
        <div className="ambient-blob ambient-blob-3"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Section 1: Hero / Introduction */}
        <Hero />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Ready To Sale (Turnkey Commercial Websites - Bakery, Wholesale, Dummy) */}
        <ReadyToSale />

        {/* Section 4: Projects (Engineering Projects from Resume) */}
        <Projects />

        {/* Section 5: Technical Skills */}
        <Skills />

        {/* Section 6: Experience & Education */}
        <Experience />

        {/* Section 7: Contact & Inquiries */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;