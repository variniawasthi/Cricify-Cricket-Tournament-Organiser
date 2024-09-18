import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent w-[85%] mx-auto pt-3">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-2">
        <div className="flex justify-between items-center h-10">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-3xl font-bold text-white tracking-wide hover:text-gray-100 transition duration-300"
            >
              <img className="h-10 w-36" src="/Logo.png" alt="Logo" />
            </a>
          </div>

          <div className="hidden md:flex space-x-8 items-center text-white">
            <a
              href="#home"
              className="transition duration-300 transform hover:scale-110 hover:text-primary font-semibold text-shadow-lg"
            >
              Home
            </a>
            <a
              href="#about"
              className="transition duration-300 transform hover:scale-110 hover:text-primary font-semibold text-shadow-lg"
            >
              Live Scores
            </a>
            <a
              href="#tournaments"
              className="transition duration-300 transform hover:scale-110 hover:text-primary font-semibold text-shadow-lg"
            >
              Fixtures
            </a>

            <Link to="/tournament">
              <div className="bg-white text-accent px-3 py-1 rounded-3xl transition duration-200 transform hover:scale-102 hover:text-white hover:bg-accent font-semibold text-shadow-lg">
                <span className="text-2xl">+ </span>New Tournaments
              </div>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-100 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`fixed inset-0 z-50 bg-transparent backdrop-blur-xl md:hidden h-[95vh] 
          ${isOpen ? "animate-fadeIn" : "animate-fadeOut"}`}
        >
          <div className="flex flex-col justify-center items-center w-full space-y-4">
            <div className="flex justify-between items-center w-[100%] my-5 px-10">
              <a
                href="#"
                className="text-3xl font-bold text-black tracking-wide hover:text-gray-100 transition duration-300"
              >
                <img className="h-10 w-36" src="/Logo.png" alt="Logo" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-100 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
            <a
              href="#home"
              className="block px-4 py-3 text-2xl font-bold text-accent"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-3 text-2xl font-bold text-accent"
            >
              Live Scores
            </a>
            <a
              href="#contact"
              className="block px-4 py-3 text-2xl font-bold text-accent"
            >
              Fixtures
            </a>
            <Link to="/tournament">
              <div className="bg-white px-4 py-3 text-2xl font-bold text-accent rounded-3xl transition duration-200 transform hover:scale-102 hover:text-white hover:bg-accent text-shadow-lg">
                <span className="text-2xl">+ </span>New Tournaments
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
