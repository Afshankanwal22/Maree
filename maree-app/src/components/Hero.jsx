import React from "react";


export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#fdfdfc] flex items-center justify-center overflow-hidden">

      {/* Floating dots */}
      <span className="absolute top-20 left-32 w-3 h-3 bg-[#f2cfc2] rounded-full" />
      <span className="absolute bottom-24 right-40 w-3 h-3 bg-[#f2cfc2] rounded-full" />

      {/* Left Illustration */}
      <img
        src="/images/bike.png"
        alt="Bike Couple"
        className="absolute left-10 bottom-24 w-[260px]"
      />

      {/* Right Illustration */}
      <img
        src="/images/bird.png"
        alt="Bird"
        className="absolute right-24 top-32 w-20"
      />

      {/* Center Content */}
      <div className="text-center max-w-xl px-6">
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 relative">
          Marée
          <span className="absolute -right-10 top-4 w-8 h-8 bg-[#f28b82] rounded-full rotate-45"></span>
        </h1>

        <p className="mt-6 text-gray-500 text-lg leading-relaxed">
          Welcome to Marée, a brand new illustration & design portfolio
          just waiting for your work to start populating its templates!
        </p>

        <button className="mt-10 px-10 py-3 border border-[#e8b6a8] text-gray-800 tracking-widest hover:bg-[#e8b6a8] hover:text-white transition">
          PURCHASE
        </button>
      </div>

      {/* Decorative Leaves */}
      <img
        src="/assets/leaf.svg"
        className="absolute right-20 bottom-24 w-14"
        alt="leaf"
      />
      <img
        src="/assets/tree.svg"
        className="absolute right-10 bottom-10 w-24"
        alt="tree"
      />
      <img
        src="/assets/cloud.svg"
        className="absolute left-48 top-24 w-24"
        alt="cloud"
      />
    </section>
  );
}
