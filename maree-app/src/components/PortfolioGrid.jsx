import { useNavigate } from "react-router-dom";

import card1 from "../images/card-1.jpg";
import card2 from "../images/card-2.jpg";
import card3 from "../images/card-3.jpg";

const cards = [
  {
    title: "Main Home",
    image: card1,
    path: "/Main-Home",
  },
  {
    title: "Floating Portfolio",
    image: card2,
    path: "/portfolio-floating",
  },
  {
    title: "Portfolio Pinterest",
    image: card3,
    path: "/portfolio-pinterest",
  },
];

export default function PortfolioGrid() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card, i) => (
          <div
            key={i}
            onClick={() => navigate(card.path)}
            className="text-center group cursor-pointer"
          >
            <div className="relative h-[280px] overflow-hidden rounded-xl shadow-lg">
              <img
                src={card.image}
                alt={card.title}
                className="
                  absolute top-0 left-0 w-full
                  transition-transform duration-[2500ms] ease-linear
                  group-hover:-translate-y-[60%]
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
