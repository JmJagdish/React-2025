import { FaSearch } from "react-icons/fa";

const SearchInput = ({ searchText, setSearchText, onSearch }) => {
  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="Search Restaurants..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
        className="
        w-full
        px-4 pr-14 py-3
        rounded-full
        text-white
        placeholder-white/60
        bg-white/10
        backdrop-blur-md
        border border-white/20
        shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(255,255,255,0.15)]
        focus:outline-none
        focus:ring-2
        focus:ring-purple-400/40
        "
      />

      {/* Search Icon */}
      <button
        type="button"
        onClick={onSearch}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10"
      >
        <FaSearch size={20} />
      </button>
    </div>
  );
};

export default SearchInput;
