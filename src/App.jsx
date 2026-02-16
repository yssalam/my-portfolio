import { useState } from "react";
import About from "./sections/About";
import Navbar from "./components/Navbar";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="h-screen overflow-hidden text-white">
      {activeSection === "home" && (
        <Navbar
          setActiveSection={setActiveSection}
          activeSection={activeSection} // ← tambahin prop ini
        />
      )}
      {activeSection === "about" && <About />}
    </div>
  );
}
