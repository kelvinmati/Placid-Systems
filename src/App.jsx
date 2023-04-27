import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="space-y-16">
      {/* <Navbar /> */}
      <Hero />
    </div>
  );
}

export default App;
