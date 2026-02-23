import { Link } from "lucide-react";
import { useState } from "react";
import ModalPortfolio from "../components/modal/ModalPortfolio";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Removie Web",
      category: "Film List",
      client: "Personal Project",
      date: "12 January 2026",
      url: "https://removie-tau.vercel.app/",
      description: "Movie searching web app using React and API.",
      images: ["/img/rm1.png", "/img/rm2.png"],
    },
    {
      id: 2,
      title: "Quiz Web",
      category: "Frontend",
      client: "Personal Project",
      date: "20 January 2026",
      url: "https://mini-quiz-app-eosin.vercel.app/",
      description: "Quiz web app using React and API.",
      images: ["/img/qa1.png", "/img/qa2.png", "/img/qa3.png"],
    },
    {
      id: 3,
      title: "Job Portal Web",
      category: "Frontend",
      client: "Personal Project",
      date: "14 January 2025",
      url: "https://job-portal-umber-five.vercel.app/",
      description:
        "Job portal web app using React and static database, realtime to update data .",
      images: ["/img/jp1.png", "/img/jp2.png", "/img/jp3.png"],
    },
    {
      id: 4,
      title: "One Shine Beads",
      category: "Minicommerce",
      client: "One Shine Beads",
      date: "25 August 2025",
      url: "https://one-shine-beads.vercel.app/",
      description:
        "One Shine Beads is a modern e-commerce web application built with React, API and Vite. The platform allows users to browse handmade accessories, add items to a shopping cart, and place orders seamlessly via WhatsApp.",
      images: ["/img/osb1.png", "/img/osb2.png", "/img/osb3.png"],
    },
  ];

  return (
    <>
      <section className="h-full overflow-y-auto flex items-start justify-center relative px-6 pt-26 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/90 -z-10" />
        <div className="w-full max-w-7xl bg-secondary/10 backdrop-blur-lg border border-neon/20 rounded-2xl p-6 md:p-12 shadow-xl">
          <div className=" mb-8">
            <h2 className="lg:text-4xl text-2xl font-bold text-shadow-neon mb-4">
              My Portfolio
            </h2>
            <p className="text-gray-300">
              This portfolio showcases a collection of projects that reflect my
              skills in frontend development, UI design, and modern web
              technologies. Each project demonstrates my approach to
              problem-solving, clean architecture, and creating responsive,
              user-friendly interfaces. I focus on writing maintainable code,
              building scalable components, and delivering seamless user
              experiences.
            </p>
          </div>

          {/* Project  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative flex justify-center items-center overflow-hidden rounded-lg"
              >
                {/* Backgrond image */}
                <div className="w-full">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 flex justify-center items-center border border-neon/30 rounded-lg bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300">
                  <Link
                    size={24}
                    key={project.id}
                    className="hover:text-neon transition-colors cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  />
                </div>
              </div>
            ))}
            {/* Modal */}
            <ModalPortfolio
              isOpen={selectedProject !== null}
              onClose={() => setSelectedProject(null)}
              project={selectedProject}
            />
          </div>
        </div>
      </section>
    </>
  );
}
