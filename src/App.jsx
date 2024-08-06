import About from "./components/About"
import Contact from "./components/ContactForm"
import Education from "./components/Education"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

const App = () => {
  return (
    <main className=" overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      
    </main>
  )
}

export default App