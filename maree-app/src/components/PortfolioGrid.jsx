import { useNavigate } from "react-router-dom";

import card1 from "../images/screenshot1.png";
import card2 from "../images/screenshot2.png";
import card3 from "../images/screenshot3.png";
import card4 from "../images/screenshot3.png";
import card5 from "../images/screenshot5.png";
import card6 from "../images/screenshot5.png";

const cards = [
  { title: "Main Home", image: card1, path: "/main-home" },
  { title: "Floating Portfolio", image: card2, path: "/portfolio-floating" },
  { title: "Portfolio Pinterest", image: card3, path: "/portfolio-pinterest" },
  { title: "Animated Slider", image: card4, path: "/animated-slider" },
  { title: "Portfolio Metro", image: card5, path: "/portfolio-metro" },
  { title: "Portfolio Carousel", image: card6, path: "/portfolio-carousel" },
];

export default function PortfolioGrid() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white min-h-screen">
      <div
        className="
          max-w-7xl mx-auto px-6
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          gap-10
        "
      >
        {cards.map((card, i) => (
          <div
            key={i}
            onClick={() => navigate(card.path)}
            className="group cursor-pointer text-center"
          >
            <div className="relative h-[280px] overflow-hidden rounded-xl shadow-lg">
              <img
                src={card.image}
                alt={card.title}
                className="
                  absolute top-0 left-0 w-full
                  transition-transform duration-[2500ms] ease-linear
                  group-hover:-translate-y-1/2
                "
              />
            </div>

            <h3 className="mt-6 text-lg font-serif italic text-gray-800">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
