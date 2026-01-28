import React from "react";

// Import images from src/images
import illustration from "../images/short-slider-rev-1-img-3.png";
import leftLeaf from "../images/landing-end-slider-img-1.png";
import rightLeaf from "../images/landing-end-slider-img-7.png";
import heartImg from "../images/landing-end-slider-img-3.png";
import Heading from "../images/landing-end-slider-img-2-1.png"

export default function LastSection() {
  return (
    <section className="relative min-h-screen bg-[#fdfdfc] flex flex-col items-center justify-center px-4 md:px-0">

      {/* Floating dots */}
      <span className="absolute top-32 left-32 w-3 h-3 bg-[#cfe8d8] rounded-full"></span>
      <span className="absolute top-60 right-40 w-4 h-4 bg-[#f1cfc2] rounded-full"></span>

      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl font-light max-w-3xl leading-relaxed">
        Your brand new folio with a professional layout collection and quite a
        cheerful <span className="italic font-serif">personality!</span>
      </h1>

      {/* Button */}
      <button className="mt-10 border border-[#e7bfb1] px-8 md:px-12 py-3 md:py-4 text-sm tracking-widest hover:bg-[#e7bfb1] hover:text-white transition-colors duration-300">
        PURCHASE
      </button>

      {/* Center Illustration */}
      <div className="absolute top-[400px] left-1/2 -translate-x-1/2">
        <img
          src={illustration}
          alt="Illustration"
          className="w-[250px] md:w-[380px]"
        />
      </div>

      {/* Left leaf */}
      <img
        src={leftLeaf}
        alt="Left leaf"
        className="absolute bottom-10 left-10 w-24 md:w-32 opacity-80"
      />

      {/* Right leaf */}
      <img
        src={rightLeaf}
        alt="Right leaf"
        className="absolute bottom-10 right-10 w-24 md:w-32 opacity-80"
      />
      {/* Heading */}
      <img
        src={Heading}
        alt="Right leaf"
        className="absolute bottom-10 left-10 w-24 md:w-32 opacity-80"
      />

      {/* Heart */}
      <img
        src={heartImg}
        alt="Heart decoration"
        className="absolute bottom-56 left-48 w-16 md:w-20"
      />
    </section>
  );
}
