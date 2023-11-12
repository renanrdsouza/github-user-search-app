type SearchProps = {
  fetchData: (userName: string) => Promise<void>
}

import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const SearchForm = ({fetchData}: SearchProps) => {
  const { theme } = useContext(ThemeContext);
  const [userName, setUserName] = useState("");

  return (
    <form className="relative mb-4">
      <div className="absolute flex h-full items-center pl-3 md:pl-8">
        <svg
          className="scale-75"
          height="24"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
            fill="#0079FF"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search GitHub username..."
        className={
          theme === "light"
            ? "text-black text-left tracking-tighter w-search-input h-search-input rounded-xl shadow-lg pl-10 pr-24 placeholder:text-center placeholder:text-light-mode-blue-two placeholder:text-custom-h4 placeholder:tracking-tighter md:placeholder:text-custom-h2.5 md:placeholder:text-left md:text-custom-h2.5 focus:outline-none md:w-search-input-tablet md:pr-28 md:pl-20 lg:w-search-input-desktop"
            : "text-dark-mode-white text-left tracking-tighter w-search-input h-search-input rounded-xl shadow-lg pl-10 pr-24 placeholder:text-center placeholder:text-dark-mode-white bg-dark-mode-dark-gray placeholder:text-custom-h4 placeholder:tracking-tighter md:placeholder:text-custom-h2.5 md:placeholder:text-left md:text-custom-h2.5 focus:outline-none md:w-search-input-tablet md:pr-28 md:pl-20 lg:w-search-input-desktop"
        }
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        className="absolute bg-light-and-dark-mode-blue-one font-bold text-white w-search-button h-search-button rounded-xl right-2 bottom-2 hover:opacity-70"
        onClick={(e) => {
          e.preventDefault();
          fetchData(userName);
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
