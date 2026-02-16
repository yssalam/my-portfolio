import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Navbar({ setActiveSection, activeSection }) {
  return (
    <section className="h-screen flex items-center justify-start">
      <div className="ml-32 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-5xl font-bold mb-4">Yoga Subhi Salam</h1>
          <h4 className="text-2xl font-semibold text-gray-300">
            Frontend Developer
          </h4>
        </div>

        {/* Navigation */}
        <nav className="nav-link">
          <ul className="flex gap-3 text-lg">
            <li
              className={`nav-item transition-colors ${
                activeSection === "home"
                  ? "active text-cyan-400 font-semibold"
                  : "hover:text-cyan-400"
              }`}
              onClick={() => setActiveSection("home")}
            >
              Home
            </li>
            <li
              className={`nav-item transition-colors ${
                activeSection === "about"
                  ? "active text-cyan-400 font-semibold "
                  : "hover:text-cyan-400 "
              }`}
              onClick={() => setActiveSection("about")}
            >
              About
            </li>
            <li
              className={`nav-item transition-colors ${
                activeSection === "about"
                  ? "active text-cyan-400 font-semibold "
                  : "hover:text-cyan-400 "
              }`}
              onClick={() => setActiveSection("about")}
            >
              About
            </li>
            <li
              className={`nav-item transition-colors ${
                activeSection === "about"
                  ? "active text-cyan-400 font-semibold "
                  : "hover:text-cyan-400 "
              }`}
              onClick={() => setActiveSection("about")}
            >
              About
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <div>
          <ul className="flex gap-4 text-2xl">
            <li>
              <a
                href="https://instagram.com/yogasubhi_"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-cyan-400 transition-colors block"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yoga-subhi-salam-792618372"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-cyan-400 transition-colors block"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yssalam"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-cyan-400 transition-colors block"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
