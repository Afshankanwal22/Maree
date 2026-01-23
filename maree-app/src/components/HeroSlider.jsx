// src/components/HeroSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function HeroSlider() {
  const slides = [
    "https://via.placeholder.com/1200x500/FFB6C1/000000?text=Slide+1",
    "https://via.placeholder.com/1200x500/87CEFA/000000?text=Slide+2",
    "https://via.placeholder.com/1200x500/90EE90/000000?text=Slide+3",
  ];

  return (
    <div className="w-full h-[500px] md:h-[600px] lg:h-[700px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
