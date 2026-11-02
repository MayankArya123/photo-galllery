const SearchBar = ({ search, onSearchChange }) => {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search photos by author..."
      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
    />
  );
};

export default SearchBar;
