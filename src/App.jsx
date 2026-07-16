import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import PurchaseTracking from "./pages/PurchaseTracking";
import TribandProject from "./pages/TribandProject";
import PortfolioProject from "./pages/PortfolioProject";


function Home() {

  return (

    <>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Gallery />

      <Contact />

      <Footer />
    </>

  );

}



function App() {

  return (

    <Routes>

      <Route 
        path="/" 
        element={<Home />} 
      />


      <Route
        path="/projects/purchase-file-tracking"
        element={<PurchaseTracking />}
      />


      <Route
        path="/projects/triband-project"
        element={<TribandProject />}
      />


      <Route
        path="/projects/portfolio-website"
        element={<PortfolioProject />}
      />


    </Routes>

  );

}


export default App;