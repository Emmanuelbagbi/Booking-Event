import React, { useState, useEffect, useRef } from "react";
import "./PopularDestinations.css";

interface Destination {
  id: number;
  country: string;
  description: string;
  tours: number;
  flag: string; // SVG or image URL
  image: string;
}

const TravelCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPaused, setIsPaused] = useState(false);

const destinations: Destination[] = [
  {
    id: 1,
    country: "Brazil",
    description: "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    tours: 15,
    flag: "https://flagcdn.com/w320/br.png",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    country: "Cyprus",
    description: "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    tours: 15,
    flag: "https://flagcdn.com/w320/cy.png",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
  },
  {
    id: 3,
    country: "America",
    description: "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    tours: 15,
    flag: "https://flagcdn.com/w320/us.png",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80",
  },
  {
    id: 4,
    country: "Russia",
    description: "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    tours: 15,
    flag: "https://flagcdn.com/w320/ru.png",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2095&q=80",
  },
  {
    id: 5,
    country: "England",
    description: "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    tours: 15,
    flag: "https://flagcdn.com/w320/gb.png",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 6,
    country: "Turkey",
    description: "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    tours: 15,
    flag: "https://flagcdn.com/w320/tr.png",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },
  {
    id: 7,
    country: "Egypt",
    description: "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    tours: 15,
    flag: "https://flagcdn.com/w320/eg.png",
    image: "https://images.unsplash.com/photo-1542382257-80dedb725088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
  },
];


  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        handleNext();
      }
    }, 4000);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  };

  const getVisibleCards = () => {
    const cards: Destination[] = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % destinations.length;
      cards.push(destinations[index]);
    }
    return cards;
  };

  return (
    <div className="carousel-container4">
      <div className="carousel-header4">
        <div className="header-left4">
          <span className="header-label4">TRUE NOW</span>
          <h1 className="header-title4">Popular Destinations</h1>
        </div>
        <div className="header-right4">
          <button className="view-all-btn4">View all destinations</button>
          <div className="nav-buttons4">
            <button className="nav-button4" onClick={handlePrev}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="nav-button4" onClick={handleNext}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className="cards-container4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {getVisibleCards().map((dest, index) => (
          <div
            key={`${dest.id}-${currentIndex}-${index}`}
            className="card4"
          >
            <div className="card-image4">
              <img src={dest.image} alt={dest.country} />
            </div>
             <div className="flag-circle44">
                <img src={dest.flag} alt={`${dest.country} Flag`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            <div className="card-content4">
              <h2 className="country-name4">{dest.country}</h2>
              <p className="description4">{dest.description}</p>
              <div className="card-footer4">
                <span className="tours-badge4">{dest.tours} tours</span>
                <a href="#" className="view-tours-link4">
                  View all tours
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelCarousel;