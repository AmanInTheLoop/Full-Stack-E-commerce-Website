import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log("Searching for:", searchTerm);
    setIsOpen(false);
  };
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}>
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-rabbit-red"
            />
            {/* search icon */}
            <button
              type="submit"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
            {/* close button */}
            <button
              type="button"
              onClick={handleSearchToggle}
              className="
              absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800">
              <HiMiniXMark className="h-6 w-6" />
            </button>
          </div>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
