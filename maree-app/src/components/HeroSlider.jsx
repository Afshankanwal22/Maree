import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import Navbar from "./Navbar";

const slides = [
  {
    title: "Projects made",
    highlight: "with love",
    desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    img: slide1,
  },
  {
    title: "Creative ideas",
    highlight: "for brands",
    desc: "Consectetur adipisci velit, sed quia non numquam eius modi.",
    img: slide2,
  },
  {
    title: "Design that",
    highlight: "inspires",
    desc: "Ut enim ad minima veniam, quis nostrum exercitationem.",
    img: slide3,
  },
];

export default function HeroSlider() {
  return (
    

    <section className="w-full min-h-screen flex items-center">
        <Navbar />
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
        className="w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
              
              {/* LEFT TEXT */}
              <div>
                <h1 className="text-5xl md:text-6xl font-light leading-tight">
                  {slide.title} <br />
                  <span className="italic font-serif">
                    {slide.highlight}
                  </span>
                </h1>

                <p className="text-gray-500 mt-6 max-w-md">
                  {slide.desc}
                </p>

                <button className="mt-8 px-8 py-3 border border-gray-400 tracking-widest text-sm hover:bg-black hover:text-white transition">
                  READ MORE
                </button>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center">
                <img
                  src={slide.img}
                  alt="slide"
                  className="max-w-md w-full"
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
