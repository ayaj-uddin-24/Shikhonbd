import React, { useContext } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdOptions } from "react-icons/io";
import { BlogContext } from "../contexts/BlogContext";

const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(BlogContext);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form
      className="flex items-center max-w-sm mx-auto mt-5"
      role="search"
      aria-label="Site search"
    >
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IoMdOptions className="text-gray-500" size={20} />
        </div>
        <input
          type="text"
          id="simple-search"
          onChange={handleChange}
          value={searchTerm}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder="Search in ShikhonBD ....."
          aria-label="Search input"
          required
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        aria-label="Search button"
      >
        <IoSearchOutline size={18} />
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default Search;
