import { Link } from "lucide-react";

export default function Portfolio() {
  return (
    <>
      <section className="h-full overflow-y-auto flex items-start justify-center relative px-6 pt-26 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/90 -z-10" />
        <div className="w-full max-w-7xl bg-secondary/10 backdrop-blur-lg border border-neon/20 rounded-2xl p-6 md:p-12 shadow-xl">
          <h2 className="lg:text-4xl text-2xl font-bold mb-8 text-shadow-neon">
            My Portfolio
          </h2>

          {/* Project  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <div className="group relative flex justify-center items-center overflow-hidden  h-max">
              <div className="w-full">
                <img
                  src="./img/1.png"
                  alt="First Project"
                  className="rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 flex justify-center items-center border border-neon/30 rounded-lg bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300">
                <div>
                  <a
                    href="https://removie-tau.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon transition-colors"
                  >
                    <Link size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative flex justify-center items-center overflow-hidden  h-max">
              <div className="w-full">
                <img
                  src="./img/2.png"
                  alt="Second Project"
                  className="rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 flex justify-center items-center border border-neon/30 rounded-lg bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300">
                <div>
                  <a
                    href="https://mini-quiz-app-eosin.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon transition-colors"
                  >
                    <Link size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative flex justify-center items-center overflow-hidden  h-max">
              <div className="w-full">
                <img
                  src="./img/3.png"
                  alt="Third Project"
                  className="rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 flex justify-center items-center border border-neon/30 rounded-lg bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300">
                <div>
                  <a
                    href="https://job-portal-umber-five.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon transition-colors"
                  >
                    <Link size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative flex justify-center items-center overflow-hidden  h-max">
              <div className="w-full">
                <img
                  src="./img/4.png"
                  alt="Fourth Project"
                  className="rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 flex justify-center items-center border border-neon/30 rounded-lg bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300">
                <div>
                  <a
                    href="https://one-shine-beads.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon transition-colors"
                  >
                    <Link size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
