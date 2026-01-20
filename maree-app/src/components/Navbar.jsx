import { useState } from "react";

const menu = ["Home", "Pages", "Portfolio", "Blog", "Shop", "Elements"];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="w-full py-6 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <h1 className="text-3xl font-serif italic flex items-center gap-1">
          Marée
          <span className="w-2 h-2 bg-pink-400 rounded-full inline-block"></span>
        </h1>

        {/* MENU */}
        <ul className="hidden md:flex gap-10 uppercase text-sm tracking-widest">
          {menu.map((item) => (
            <li
              key={item}
              onClick={() => setActive(item)}
              className="relative cursor-pointer group"
            >
              {item}

              {/* underline */}
              <span
                className={`absolute left-0 -bottom-2 h-[2px] bg-pink-300 transition-all duration-300
                ${
                  active === item
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* GRID ICON */}
        <div className="hidden md:grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 bg-black rounded-full"
            ></span>
          ))}
        </div>
      </div>
    </nav>
  );
}
