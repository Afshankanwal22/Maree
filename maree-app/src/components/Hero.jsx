import bike from "../images/bike.png";
import bird from "../images/bird.png";
import img5 from "../images/landing-slider-img-5.png";
import img8 from "../images/landing-slider-img-8.png";
import img9 from "../images/landing-slider-img-9.png";
import img10 from "../images/landing-slider-img-10.png";
import img11 from "../images/landing-slider-img-11.png";
import img12 from "../images/landing-slider-img-12.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#fdfdfc] flex items-center justify-center overflow-hidden"
    >
      {/* Floating dot */}
      <span className="absolute top-20 left-32 w-5 h-5 bg-[#f2cfc2] rounded-full" />
      {/* <span className="absolute top-20 left-12 w-5 h-5 bg-[#f2cfc2] rounded-full" /> */}
      {/* <span className="absolute top-20 right-32 w-5 h-5 bg-[#f2cfc2] rounded-full" /> */}


      {/* Left illustrations */}
      <img
        src={img8}
        alt=""
        className="absolute left-40 bottom-[50px] w-[80px]"
      />
      

      <img
        src={bike}
        alt="Bike Couple"
        className="absolute left-10 bottom-24 w-[260px]"
      />

      <img
        src={img5}
        alt=""
        className="absolute left-40 top-32 w-[80px]"
      />

      {/* Right illustration */}
      <img
        src={bird}
        alt="Bird"
        className="absolute right-24 top-12 w-[120px]"
      />
       
      {/* Center content */}
      
      <div className="relative z-10 text-center max-w-xl px-6 mx-auto">
       <span className="absolute bottom-60 right-32 w-5 h-5 bg-[#f2cfc2] rounded-full" />
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-gray-900">
          Marée
        </h1>

        <p className="mt-6 text-gray-500 text-lg leading-relaxed">
          Welcome to Marée, a brand new illustration & design portfolio just
          waiting for your work to start populating its templates!
        </p>

        <button className="mt-10 px-10 py-3 border border-[#e8b6a8] text-gray-800 tracking-widest hover:bg-[#e8b6a8] hover:text-white transition">
          PURCHASE
        </button>
        
        
      </div>

      {/* Right bottom decoration */}
      <div className="absolute right-10 bottom-10 flex items-end gap-4">
        <img src={img9} className="w-[40px] mb-6" alt="" />
        <img src={img10} className="w-[80px]" alt="" />
        <img src={img11} className="w-[60px] mb-6" alt="" />
        <img src={img12} className="w-[120px]" alt="" />
      </div>
    </section>
  );
}
