import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import StackDiagram from './components/StackDiagram.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Services from './components/Services.jsx';
import Certs from './components/Certs.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <StackDiagram />
        <Projects />
        <Services />
        <Experience />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
