import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div
      className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white shadow-md
                w-[20vw] mx-[4rem] my-[1rem] px-1 sm-custom:w-[100%] sm-custom:mx-5 sm-custom:mt-5"
    >
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="flex-1 p-2 text-gray-700 placeholder-gray-500 border-none focus:outline-none"
      />
      <button
        type="button"
        className="bg-gray-700 text-white p-2 rounded-full hover:bg-primary-dark focus:outline-none"
      >
        <FaSearch className="w-4 h-4 " />
      </button>
    </div>
  );
};

export default SearchBar;