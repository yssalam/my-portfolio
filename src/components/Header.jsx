import { useState } from "react";
import { FaBars, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Header({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const isHome = activeSection === "home";

  return (
    <header
      id="home"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-gradient-to-br from-black/60 via-gray-900/30 to-black/80
      ${
        isHome
          ? "h-screen flex items-center justify-start"
          : "h-20 flex items-center justify-between px-32 max-sm:px-10 backdrop-blur-sm bg-secondary/20 border-b border-b-neon/20"
      }`}
    >
      <div
        className={`${isHome ? "ml-12 lg:ml-32 space-y-4" : "flex items-center"}`}
      >
        {/* Logo */}
        <h1
          onClick={() => setActiveSection("home")}
          className={`font-bold cursor-pointer text-shadow-neon transition-all duration-500
          ${isHome ? "text-2xl lg:text-5xl mb-4" : "text-sm lg:text-2xl"}
          `}
        >
          Yoga Subhi Salam
        </h1>

        {/* Jika di section home */}
        {isHome && (
          <>
            <h4 className="text-xl lg:text-2xl font-semibold text-primary">
              Frontend Developer
            </h4>

            {/* Desktop */}
            <nav className="hidden lg:block mt-6">
              <ul className="flex gap-4 text-md">
                <li
                  onClick={() => setActiveSection("home")}
                  className={`nav-item hover:text-neon ${
                    activeSection === "home"
                      ? "active text-neon font-semibold"
                      : ""
                  }`}
                >
                  Home
                </li>

                <li
                  onClick={() => setActiveSection("about")}
                  className={`nav-item hover:text-neon ${
                    activeSection === "about"
                      ? "active text-neon font-semibold"
                      : ""
                  }`}
                >
                  About
                </li>

                <li
                  onClick={() => setActiveSection("portfolio")}
                  className={`nav-item hover:text-neon ${
                    activeSection === "portfolio"
                      ? "active text-neon font-semibold"
                      : ""
                  }`}
                >
                  Portfolio
                </li>
              </ul>
            </nav>

            {/* Mobile Hamburger */}
            <div className="absolute top-6 right-6 lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`cursor-pointer hover:text-neon transition-colors  ${
                  isOpen === true ? "text-neon" : ""
                }`}
              >
                <FaBars size={24} />
              </button>

              {isOpen && (
                <div className="absolute right-0 top-8 bg-secondary/20 backdrop-blur-sm shadow-lg rounded-lg w-44 py-4">
                  <ul className="flex flex-col gap-4 px-6">
                    <li
                      onClick={() => {
                        setActiveSection("home");
                        setIsOpen(false);
                      }}
                      className={`nav-ham hover:text-neon ${
                        activeSection === "home"
                          ? "active text-neon font-semibold"
                          : ""
                      }`}
                    >
                      Home
                    </li>
                    <li
                      onClick={() => {
                        setActiveSection("about");
                        setIsOpen(false);
                      }}
                      className={`nav-ham hover:text-neon ${
                        activeSection === "about"
                          ? "active text-neon font-semibold"
                          : ""
                      }`}
                    >
                      About
                    </li>
                    <li
                      onClick={() => {
                        setActiveSection("portfolio");
                        setIsOpen(false);
                      }}
                      className={`nav-ham hover:text-neon ${
                        activeSection === "portfolio"
                          ? "active text-neon font-semibold"
                          : ""
                      }`}
                    >
                      Portfolio
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div>
              <ul className="flex gap-4 text-2xl">
                <li>
                  <a
                    href="https://instagram.com/yogasubhi_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex justify-center items-center border hover:text-neon transition-colors"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/yoga-subhi-salam-792618372"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex justify-center items-center border hover:text-neon transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/yssalam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex justify-center items-center border hover:text-neon transition-colors"
                  >
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
      {/* Jika bukan di section home */}
      {!isHome && (
        <>
          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex gap-8 text-md">
              <li
                onClick={() => setActiveSection("home")}
                className={`nav-item hover:text-neon ${
                  activeSection === "home"
                    ? "active text-neon font-semibold"
                    : ""
                }`}
              >
                Home
              </li>

              <li
                onClick={() => setActiveSection("about")}
                className={`nav-item hover:text-neon ${
                  activeSection === "about"
                    ? "active text-neon font-semibold"
                    : ""
                }`}
              >
                About
              </li>
              <li
                onClick={() => setActiveSection("portfolio")}
                className={`nav-item hover:text-neon ${
                  activeSection === "portfolio"
                    ? "active text-neon font-semibold"
                    : ""
                }`}
              >
                Portfolio
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`cursor-pointer hover:text-neon transition-colors ${
                isOpen === true ? "text-neon" : ""
              }`}
            >
              <FaBars size={24} />
            </button>

            {isOpen && (
              <div className="absolute right-6 top-20 bg-secondary/30 border border-neon/10 backdrop-blur-sm shadow-lg rounded-lg w-44 py-4">
                <ul className="flex flex-col gap-4 px-6">
                  <li
                    onClick={() => {
                      setActiveSection("home");
                      setIsOpen(false);
                    }}
                    className={`nav-ham hover:text-neon ${
                      activeSection === "home"
                        ? "active text-neon font-semibold"
                        : ""
                    }`}
                  >
                    Home
                  </li>
                  <li
                    onClick={() => {
                      setActiveSection("about");
                      setIsOpen(false);
                    }}
                    className={`nav-ham hover:text-neon ${
                      activeSection === "about"
                        ? "active text-neon font-semibold"
                        : ""
                    }`}
                  >
                    About
                  </li>
                  <li
                    onClick={() => {
                      setActiveSection("portfolio");
                      setIsOpen(false);
                    }}
                    className={`nav-ham hover:text-neon ${
                      activeSection === "portfolio"
                        ? "active text-neon font-semibold"
                        : ""
                    }`}
                  >
                    Portfolio
                  </li>
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </header>
  );
}
