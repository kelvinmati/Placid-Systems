import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Burner from "./components/Burner";
import Team from "./components/Team";

function App() {
  return (
    <div className="space-y-16">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Burner />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
