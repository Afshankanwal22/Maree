import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#fdfdfc] flex items-center justify-center overflow-hidden">

      {/* Floating dots */}
      <span className="absolute top-20 left-32 w-3 h-3 bg-[#f2cfc2] rounded-full" />
      {/* <span className="absolute bottom-24 right-40 w-3 h-3 bg-[#f2cfc2] rounded-full" /> */}

     {/* Left Illustration Group */}
<div className="absolute left-10 bottom-20 flex items-end gap-6">

  {/* Small Bottom Shape */}
  <img
    src="/images/landing-slider-img-8.png"
    className="w-20"
    alt=""
  />

  {/* Bike (Main Illustration) */}
  <img
    src="/images/bike.png"
    className="w-[260px]"
    alt="Bike Couple"
  />

</div>

{/* Top Floating Shape */}
<img
  src="/images/landing-end-slider-img-5.png"
  className="absolute left-40 top-28 w-20"
  alt=""
/>


      {/* Right Illustration */}
      <img
        src="/src/images/bird.png"
        alt="Bird"
        className="absolute right-24 top-32 w-30"
      />
      

      {/* ✅ Center Content */}
      <div className="relative z-10 text-center max-w-xl px-6 mx-auto">
        <h1 className="flex items-center justify-center gap-4 text-6xl md:text-7xl font-serif font-bold text-gray-900">
  Marée
  
</h1>


        <p className="mt-6 text-gray-500 text-lg leading-relaxed">
          Welcome to Marée, a brand new illustration & design portfolio
          just waiting for your work to start populating its templates!
        </p>

        <button className="mt-10 px-10 py-3 border border-[#e8b6a8] text-gray-800 tracking-widest hover:bg-[#e8b6a8] hover:text-white transition">
          PURCHASE
        </button>
      </div>

{/* Right Decoration Group */}
<div className="absolute right-10 bottom-10 flex items-end gap-4">
   <img src="src/images/landing-slider-img-9.png"  className="w-10 mb-6" alt="" />
  
  <img
    src="/src/images/landing-slider-img-10.png"
    className="w-20"
    alt=""
  />

  <img
    src="/src/images/landing-slider-img-11.png"
    className="w-15 mb-6"
    alt=""
  />

  <img
    src="/src/images/landing-slider-img-12.png"
    className="w-30"
    alt=""
  />
 
</div>

      

      
      
      
    </section>
  );
}
