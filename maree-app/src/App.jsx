// App.jsx
import React from "react";
import HeroImage from "../src/images/landing-slider-img-12.png";
import BikeCouple from "../src/images/landing-slider-img-7.png";
import Cloud from "../src/images/landing-slider-img-3 (1).png";
import Tree from "../src/images/landing-end-slider-img-1.png";
import Bird from "../src/images/landing-slider-img-6.png";
import Leaf1 from "../src/images/landing-end-slider-img-3.png";
import Leaf2 from "../src/images/landing-end-slider-img-2-1.png";

export default function App() {
  return (
    <div className="bg-white min-h-screen relative overflow-hidden items-center justify-center text-center">
      {/* Hero Section */}
      <section className="relative py-32 text-center ">
        {/* Floating illustrations */}
        <img src={BikeCouple} alt="Bike Couple" className="absolute left-8 bottom-20 w-32 animate-bounce-slow" />
        <img src={Cloud} alt="Cloud" className="absolute top-12 left-1/4 w-24 animate-float" />
        <img src={Tree} alt="Tree" className="absolute right-10 bottom-12 w-28" />
        <img src={Bird} alt="Bird" className="absolute right-20 top-20 w-16 animate-fly" />
        <img src={Leaf1} alt="Leaf" className="absolute left-1/3 bottom-32 w-12 animate-spin-slow" />
        <img src={Leaf2} alt="Leaf" className="absolute right-1/4 bottom-40 w-14 animate-spin-slow" />

        {/* Hero text */}
        <h1 className="text-6xl md:text-7xl  font-serif font-bold text-black flex justify-center items-center">
          Marée
          <span className="ml-3 text-pink-400">🖤</span>
        </h1>
        <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg md:text-xl">
          Welcome to Marée, a brand new illustration & design portfolio just waiting for your work to start populating its templates!
        </p>
        <button className="mt-8 px-8 py-3 border text-center border-pink-300 text-black rounded-lg hover:bg-pink-100 transition-all duration-300">
          PURCHASE
        </button>
      </section>

      {/* Portfolio Previews */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-16">
        <img src={HeroImage} alt="Portfolio 1" className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
        <img src={HeroImage} alt="Portfolio 2" className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
        <img src={HeroImage} alt="Portfolio 3" className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
      </section>
    </div>
  );
}
