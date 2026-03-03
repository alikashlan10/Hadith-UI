import { useState } from "react";

const SearchBar = ({ onSearch, loading }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) onSearch(input.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="flex gap-2 w-full max-w-2xl mx-auto">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search hadiths..."
        className="flex-1 px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700"
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 disabled:opacity-50 transition-colors"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
};

export default SearchBar;