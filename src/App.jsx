import About from "./components/About";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import logo from "./assets/logo.png";

export default function App() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Navbar />
    <main id="main-content" className="overflow-x-clip antialiased">
      <div id="home">
        <header className="site-branding section-wrap">
          <a href="#home" aria-label="Bryan Encarnacion — Home">
            <img src={logo} alt="" width={72} height={72} />
            <span className="site-branding-copy">
              <span className="site-branding-name">BRYAN ENCARNACION</span>
              <span className="site-branding-title">SOFTWARE DEVELOPER</span>
            </span>
          </a>
        </header>
        <HeroSection />
      </div>
      <Projects /><About /><Skills /><Contact />
    </main><Footer /></>;
}
