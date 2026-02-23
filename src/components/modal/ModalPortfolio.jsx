import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

export default function ModalPortfolio({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center">
      <div className="relative w-full h-max bg-secondary overflow-y-auto rounded-lg">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-neon text-2xl z-50"
        >
          ✕
        </button>

        <div className="p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT - SLIDER */}
            <div className="lg:col-span-2">
              <Swiper
                modules={[Pagination, Navigation, Autoplay, EffectFade]}
                slidesPerView={1}
                spaceBetween={20}
                loop
                effect="fade"
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation
                className="rounded-xl overflow-hidden"
              >
                {project.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* RIGHT - INFO */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {project.title}
              </h3>

              <ul className="space-y-2 text-sm mb-6 text-gray-300">
                <li><strong>Category:</strong> {project.category}</li>
                <li><strong>Client:</strong> {project.client}</li>
                <li><strong>Date:</strong> {project.date}</li>
                <li>
                  <strong>Project URL:</strong>{" "}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon font-semibold hover:underline"
                  >
                    {project.url}
                  </a>
                </li>
              </ul>

              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
