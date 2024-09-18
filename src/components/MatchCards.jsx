import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const MatchCards = ({ cricketMatches }) => {
  const cardContainerRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(screenWidth < 650 ? 0 : 3);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  const slideLeft = () => {
    const scrollAmount =
      screenWidth < 650 ? -1 * (screenWidth - 0.1 * screenWidth) : -350;
    cardContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const slideRight = () => {
    const scrollAmount =
      screenWidth < 650 ? screenWidth - 0.1 * screenWidth : 350;
    cardContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
    setCurrentIndex((prev) => Math.min(prev + 1, cricketMatches.length - 1));
  };

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) slideRight();
    if (touchEndX.current - touchStartX.current > 50) slideLeft();
  };

  const renderMatchCard = (match, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl
      md:min-w-[50%] md:w-[50%] sm-custom:w-[100%] sm-custom:min-w-[100%] 
      lg:min-w-[325px] lg:w-[325px] 
      min-h-[210px] max-h-[210px] h-[210px]
      flex flex-col justify-between shadow-black-shadow"
    >
      <div className="flex justify-between h-5 w-full p-3 text-sm bg-gray-200 rounded-t-2xl">
        <div className="font-medium text-xs text-textSecondary">
          1st ODI, 15 Sept 2024{" "}
        </div>
        <div className="bg-red-600 text-white z-10 font-medium p-2.5 flex justify-center items-center rounded-2xl">
          Live
        </div>
      </div>

      <div className="pl-3 flex text-sm border-b border-gray-300 bg-gray-200">
        Indian Premier League
      </div>

      <div className="flex-1 flex gap-2 justify-center flex-col pt-4 pb-1 p-4">
        <span className="flex justify-between">
          <div className="flex gap-2 justify-center items-center">
            <span>
              <img
                src="india.webp"
                className="h-7 w-7 rounded-full max-w-fit object-cover"
              ></img>
            </span>
            <span> India</span>
          </div>
          <div className="flex flex-col text-sm justify-center items-end">
            <span>256/10</span>
            <span className="text-textSecondary">(46.3/50 over)</span>
          </div>
        </span>
        <span className="flex justify-between">
          <div className="flex gap-2 justify-center items-center">
            <span>
              <img
                src="australia.webp"
                className="h-7 w-7 rounded-full max-w-fit object-cover"
              ></img>
            </span>
            <span> Australia</span>
          </div>
          <div className="flex flex-col text-sm justify-center items-end">
            <span>256/10</span>
            <span className="text-textSecondary">(46.3/50 over)</span>
          </div>
        </span>
        <span className="flex text-sm text-textSecondary">
          India won by 5 wickets.
        </span>
      </div>

      <div className="flex justify-end items-center pl-3 pr-3 p-1 rounded-b-2xl text-xs underline gap-3 text-primary cursor-pointer font-semibold">
        <a>Points Table</a>
        <a>Schedule</a>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col justify-center items-center p-3 w-full h-full">
      <div className="flex flex-row items-center justify-center w-full">
        {screenWidth > 640 && (
          <button
            onClick={slideLeft}
            className="bg-blue-500 text-white p-2 m-2 rounded-full shadow-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 ease-in-out transform hover:scale-105 z-10"
          >
            {"<"}
          </button>
        )}

        <div
          ref={cardContainerRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {cricketMatches.map((match, index) => renderMatchCard(match, index))}
        </div>

        {screenWidth > 640 && (
          <button
            onClick={slideRight}
            className="bg-blue-500 text-white  p-2 m-2 rounded-full shadow-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 ease-in-out transform hover:scale-105 z-10"
          >
            {">"}
          </button>
        )}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {cricketMatches.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

MatchCards.propTypes = {
  cricketMatches: PropTypes.arrayOf(
    PropTypes.shape({
      team1: PropTypes.string.isRequired,
      team2: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      venue: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MatchCards;
