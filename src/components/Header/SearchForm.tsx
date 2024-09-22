import React, { useState, FormEvent, ChangeEvent } from "react";
import { Search } from "lucide-react";

const SearchForm: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search term:", searchTerm);
    // Implement your search logic here
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border rounded-full outline-none transition-all duration-300 ease-in-out
            ${isFocused ? 'border-blue-500 shadow-lg' : 'border-gray-400 shadow-sm'}
            focus:border-blue-500 focus:ring-2 focus:ring-blue-200`}
        />
        <button
          type="submit"
          className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 hover:text-blue-500 transition-colors duration-200"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;