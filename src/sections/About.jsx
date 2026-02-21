import { DiMysql } from "react-icons/di";
import {
  FaCss3,
  FaHtml5,
  FaLaravel,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export default function About() {
  return (
    <section className="h-full overflow-y-auto flex items-start justify-center relative px-6 pt-26 pb-20">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/90 -z-10"/>

      {/* Glass Card */}
      <div className="w-full max-w-7xl bg-secondary/10 backdrop-blur-lg border border-neon/20 rounded-2xl p-6 md:p-12 shadow-xl">
        <h2 className="lg:text-4xl text-2xl font-bold mb-8 text-shadow-neon">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/img/yogasubhi.png"
              alt="Yoga Subhi Salam"
              className="rounded-2xl md:w-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-md lg:text-2xl font-bold text-neon">
              Frontend Developer
            </h3>

            <p className="text-gray-300 italic leading-relaxed">
              Passionate frontend developer with a focus on creating responsive,
              modern, and user-friendly interfaces.
            </p>

            <div className="grid lg:grid-cols-2 gap-6 text-primary">
              <ul className="space-y-3">
                <li>
                  <span className="text-neon font-semibold">Name:</span> Yoga
                  Subhi Salam
                </li>
                <li>
                  <span className="text-neon font-semibold">Birthday:</span> 25
                  October 2001
                </li>
                <li>
                  <span className="text-neon font-semibold">Phone:</span> +62
                  821 2112 0025
                </li>
                <li>
                  <span className="text-neon font-semibold">City:</span>{" "}
                  Bandung, Indonesia
                </li>
              </ul>

              <ul className="space-y-3">
                <li>
                  <span className="text-neon font-semibold">Age:</span> 24
                </li>
                <li>
                  <span className="text-neon font-semibold">Degree:</span>{" "}
                  Bachelor of Informatics Engineering
                </li>
                <li>
                  <span className="text-neon font-semibold">Email:</span>{" "}
                  yoga.subhisalam15@gmail.com
                </li>
                <li>
                  <span className="text-neon font-semibold">Freelance:</span>{" "}
                  Available
                </li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed">
              I specialize in building modern web applications using React and
              Tailwind CSS. I enjoy turning complex problems into simple,
              beautiful, and intuitive designs.
            </p>
          </div>
        </div>

        {/* Skill */}
        <div className="mt-6 lg:mt-10">
          <div className="space-y-2 mb-8">
            <h3 className="lg:text-4xl text-2xl font-bold text-shadow-neon">
              Skill
            </h3>
            <p className="text-gray-300 leading-relaxed">I focus on writing clean, reusable, and scalable code.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="skill-bg hover:text-orange-600 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <FaHtml5 size={24} />
                <h4 className="font-semibold">HTML</h4>
              </div>
            </div>

            <div className="skill-bg hover:text-blue-500 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <FaCss3 size={24} />
                <h4 className="font-semibold">CSS</h4>
              </div>
            </div>

            <div className="skill-bg hover:text-yellow-300 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <IoLogoJavascript size={24} />
                <h4 className="font-semibold">JAVASCRIPT</h4>
              </div>
            </div>

            <div className="skill-bg hover:text-indigo-500 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <FaPhp size={24} />
                <h4 className="font-semibold">PHP</h4>
              </div>
            </div>

            <div className="skill-bg hover:text-blue-600 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <DiMysql size={24} />
                <h4 className="font-semibold">MYSQL</h4>
              </div>
            </div>

            <div className="skill-bg hover:text-cyan-400 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <FaReact size={24} />
                <h4 className="font-semibold">REACT</h4>
              </div>
            </div>

            <div className="skill-bg hover:text-red-500 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <FaLaravel size={24} />
                <h4 className="font-semibold">LARAVEL</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
