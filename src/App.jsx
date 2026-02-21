import { useState } from "react";
import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Portfolio from "./sections/portfolio";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="h-screen overflow-hidden text-white relative">

      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="relative h-full">

        {/* HOME */}
        <div
          className={`absolute inset-0 transition-transform duration-500
          ${activeSection === "home" 
            ? "translate-y-0"
            : "-translate-y-full"
          }`}
        >
          <Home />
        </div>

        {/* ABOUT */}
        <div
          className={`absolute inset-0 transition-transform duration-500
          ${activeSection === "about"
            ? "translate-y-0"
            : "translate-y-full"
          }`}
        >
          <About />
        </div>

        {/* PORTFOLIO */}
        <div
          className={`absolute inset-0 transition-transform duration-500
          ${activeSection === "portfolio"
            ? "translate-y-0"
            : "translate-y-full"
          }`}
        >
          <Portfolio />
        </div>

      </div>
    </div>
  );
}
